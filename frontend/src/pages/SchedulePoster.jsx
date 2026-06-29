import { useParams } from 'react-router-dom';
import { scheduleData } from '../data/scheduleData';
import { facilitatorData } from '../data/facilitatorData';
import '../styles/Schedule.css';
import '../styles/SchedulePoster.css';

/**
 * SchedulePoster Component
 * 
 * Print-optimized schedule poster (24x36" portrait).
 * 
 * Routes:
 * - /schedule-poster              → Friday grid (default)
 * - /schedule-poster/friday       → Friday 7/3 grid
 * - /schedule-poster/saturday     → Saturday 7/4 grid
 * - /schedule-poster/sunday       → Sunday 7/5 grid
 * - /schedule-poster/list         → Full schedule list view
 */
export default function SchedulePoster() {
  const { day } = useParams();

  // Show list view for full schedule
  if (day === 'list' || day === 'full') {
    return <FullScheduleList />;
  }

  // Original grid view
  return <DayScheduleGrid day={day} />;
}

/**
 * DayScheduleGrid - Shows one day in grid format (original behavior)
 */
function DayScheduleGrid({ day }) {
  const selectedDay = day ? `${day.charAt(0).toUpperCase() + day.slice(1)} 7/${day === 'thursday' ? '2' : day === 'friday' ? '3' : day === 'saturday' ? '4' : '5'}` : 'Friday 7/3';
  
  const dayDate = selectedDay === 'Thursday 7/2' ? 'July 2' : selectedDay === 'Friday 7/3' ? 'July 3' : selectedDay === 'Saturday 7/4' ? 'July 4' : 'July 5';
  const dayName = selectedDay.split(' ')[0];

  // Filter events and meals for the selected day
  const dayEvents = scheduleData.events.filter(event => event.day === selectedDay);
  const dayMeals = scheduleData.meals[selectedDay] || [];

  const mainSpaces = ['The Marquee', 'The Hearth', 'The Threshold', 'The Grove'];

  // Normalize venue name - strict matching for main venues, everything else is "Other"
  const normalizeVenue = (venue) => {
    if (!venue) return '';
    const normalized = venue.trim().toLowerCase();
    // Only return main venues if they're exact or primary references
    if (normalized === 'the marquee' || normalized === 'marquee') return 'The Marquee';
    if (normalized === 'the hearth' || normalized === 'hearth') return 'The Hearth';
    if (normalized === 'the threshold' || normalized === 'threshold') return 'The Threshold';
    if (normalized === 'the grove' || normalized === 'grove') return 'The Grove';
    // Everything else (including "Lawn by The Threshold") returns null = "Other Locations"
    return null;
  };

  // Parse time string - must infer PM from context when indicator is only on end
  const parseTimeForSort = (timeStr) => {
    const parts = timeStr.split(' - ');
    if (parts.length < 2) {
      const cleanPart = parts[0].toLowerCase().replace(/[ap]m/gi, '').trim();
      const [hours, mins] = cleanPart.split(':').map(Number);
      const isPM = parts[0].toLowerCase().includes('pm');
      return (isPM && hours !== 12 ? hours + 12 : hours === 12 && !isPM ? 0 : hours) * 60 + (mins || 0);
    }
    
    const startPart = parts[0].trim();
    const endPart = parts[1].trim();
    
    // Remove AM/PM before parsing hours/minutes
    const startClean = startPart.toLowerCase().replace(/[ap]m/gi, '').trim();
    const [startHours, startMins] = startClean.split(':').map(Number);
    
    // Extract end hours
    const endClean = endPart.replace(/[ap]m/gi, '').trim();
    const [endHours] = endClean.split(':').map(Number);
    
    let isPM = startPart.toLowerCase().includes('pm');
    
    if (!startPart.toLowerCase().includes('am') && !startPart.toLowerCase().includes('pm')) {
      // Start has no indicator, check end
      if (endPart.toLowerCase().includes('pm')) {
        // Ends with PM
        // If ending at 12 (noon), start is AM (like "10 - 12pm" = 10am-noon)
        // Otherwise, start is also PM
        isPM = endHours !== 12;
      } else if (endPart.toLowerCase().includes('am')) {
        // End is AM - if start hours >= 9 and end hours <= 4, crossing midnight
        isPM = startHours >= 9 && endHours <= 4;
      }
    }
    
    return (isPM && startHours !== 12 ? startHours + 12 : startHours === 12 && !isPM ? 0 : startHours) * 60 + (startMins || 0);
  };

  // Get unique times in chronological order
  const getUniqueTimes = () => {
    const times = new Set();
    dayEvents.forEach(event => {
      times.add(event.time);
    });
    dayMeals.forEach(meal => {
      times.add(meal.time);
    });
    return Array.from(times).sort((a, b) => {
      return parseTimeForSort(a) - parseTimeForSort(b);
    });
  };

  // Curated times for At a Glance grids - using only broad time buckets
  const getCuratedTimes = () => {
    if (selectedDay === 'Thursday 7/2') {
      return ['4:30–5:30 PM', '7:15–8:45 PM', '9:00 PM–12:00 AM'];
    } else if (selectedDay === 'Friday 7/3') {
      return ['8:15–9:30 AM', '10:00 AM–12:00 PM', '1:30–3:30 PM', '4:00–6:00 PM', '7:15–9:15 PM', '9:45 PM–1:00 AM', '11:00 PM–1:00 AM'];
    } else if (selectedDay === 'Saturday 7/4') {
      return ['8:15–9:30 AM', '10:00 AM–12:00 PM', '1:30–3:30 PM', '4:00–6:00 PM', '7:15–9:15 PM', '9:45 PM–1:00 AM'];
    } else if (selectedDay === 'Sunday 7/5') {
      return ['8:15–9:45 AM', '10:00–11:45 AM', '11:30 AM–12:30 PM'];
    }
    return getUniqueTimes();
  };

  // Parse a single time string like "8:15 AM" or "12:00pm" into minutes
  const parseSingleTime = (timeStr) => {
    if (!timeStr) return 0;
    
    const clean = timeStr.toLowerCase().replace(/[ap]m/gi, '').trim();
    const [hoursStr, minsStr] = clean.split(':');
    const hours = parseInt(hoursStr, 10);
    const mins = minsStr ? parseInt(minsStr, 10) : 0;
    
    const isPM = timeStr.toLowerCase().includes('pm');
    
    let finalHours = hours;
    if (isPM && hours !== 12) {
      finalHours = hours + 12;
    } else if (!isPM && hours === 12) {
      finalHours = 0; // midnight
    }
    
    return finalHours * 60 + mins;
  };

  // Check if an event time falls within a time bucket
  // E.g., event '8:15am - 12:00pm' falls in bucket '8:15–9:30 AM'
  const eventFallsInTimeBucket = (eventTime, bucketTime) => {
    const bucketParts = bucketTime.split('–'); // en-dash
    if (bucketParts.length < 2) return false;
    
    let bucketStart = bucketParts[0].trim();
    const bucketEnd = bucketParts[1].trim();
    
    const eventParts = eventTime.split(' - ');
    if (eventParts.length < 2) return false;
    
    const eventStart = eventParts[0].trim();
    const eventEnd = eventParts[1].trim();
    
    // If bucket start doesn't have AM/PM, infer from end
    if (!bucketStart.match(/[ap]m/i)) {
      const periodMatch = bucketEnd.match(/[ap]m/i);
      if (periodMatch) {
        bucketStart = bucketStart + ' ' + periodMatch[0];
      }
    }
    
    // Determine the period for eventStart
    let eventStartPeriod = parseTimeForSort.extractPeriod(eventEnd);
    
    // Smart logic: if event end is AM and event start hour > event end hour, 
    // then event start is PM (e.g., "11:00 - 1:00am" = 11:00 PM - 1:00 AM)
    if (eventEnd.toLowerCase().includes('am')) {
      const eventEndHour = parseInt(eventEnd.split(':')[0], 10);
      const eventStartHour = parseInt(eventStart.split(':')[0], 10);
      if (eventStartHour > eventEndHour) {
        eventStartPeriod = 'pm';
      }
    }
    
    // Parse times for comparison using the new single-time parser
    const bucketStartMin = parseSingleTime(bucketStart);
    const bucketEndMin = parseSingleTime(bucketEnd);
    const eventStartMin = parseSingleTime(eventStart + ' ' + eventStartPeriod);
    const eventEndMin = parseSingleTime(eventEnd);
    
    // If bucket end is AM and start is PM, it crosses midnight
    if (bucketEndMin < bucketStartMin) {
      // Crosses midnight: check if event starts >= bucket start OR starts < bucket end
      return eventStartMin >= bucketStartMin || eventStartMin < bucketEndMin;
    } else {
      // Normal range: check if event overlaps with bucket
      // Event overlaps if: event start < bucket end AND event end > bucket start
      return eventStartMin < bucketEndMin && eventEndMin > bucketStartMin;
    }
  };
  
  // Helper to extract period
  parseTimeForSort.extractPeriod = (timeStr) => {
    const match = timeStr.match(/[ap]m/i);
    return match ? match[0] : '';
  };

  // Get times - try curated first, fall back to unique
  const getTimesToDisplay = () => {
    const curated = getCuratedTimes();
    // Filter to only include times that actually have events or meals
    return curated.filter(time => {
      const hasEvent = dayEvents.some(e => eventFallsInTimeBucket(e.time, time));
      const hasMeal = dayMeals.some(m => m.time === time);
      return hasEvent || hasMeal;
    });
  };

  // Get events for time bucket and space
  const getEventsForTimeAndSpace = (timeBucket, space) => {
    return dayEvents.filter(event => 
      eventFallsInTimeBucket(event.time, timeBucket) && normalizeVenue(event.space) === space
    );
  };

  // Get events in other locations
  const getEventsForTimeInOtherSpaces = (timeBucket) => {
    return dayEvents.filter(event =>
      eventFallsInTimeBucket(event.time, timeBucket) && normalizeVenue(event.space) === null
    );
  };

  // Format facilitator names
  const formatFacilitatorNames = (facilitatorNames) => {
    if (!facilitatorNames || facilitatorNames.length === 0) return '';
    const facilitators = facilitatorData.getFacilitators(facilitatorNames);
    if (facilitators.length === 0) return '';
    if (facilitators.length === 1) return facilitators[0].name;
    if (facilitators.length === 2) return `${facilitators[0].name} & ${facilitators[1].name}`;
    const names = facilitators.slice(0, -1).map(f => f.name).join(', ');
    return names + ` & ${facilitators[facilitators.length - 1].name}`;
  };

  const handlePrint = () => {
    console.log('Print button clicked - opening print dialog');
    window.print();
  };

  const timesToDisplay = getTimesToDisplay();

  // Determine CSS class names based on selected day
  // Note: Only Saturday has day-specific classes; Thursday and Sunday use Friday's classes
  const getGridClassName = () => {
    if (day === 'saturday') return 'saturday-glance-grid';
    return 'friday-glance-grid'; // default for friday, thursday, and sunday
  };

  const getContainerClassName = () => {
    if (day === 'saturday') return 'saturday-glance-container';
    return 'friday-glance-container'; // default for friday, thursday, and sunday
  };

  const getWrapperClassName = () => {
    if (day === 'saturday') return 'saturday-glance-wrapper';
    return 'friday-glance-wrapper'; // default for friday, thursday, and sunday
  };

  const gridClassName = getGridClassName();
  const containerClassName = getContainerClassName();
  const wrapperClassName = getWrapperClassName();

  return (
    <div className="schedule-poster">
      {/* Screen-only print button */}
      <div className="print-button-container">
        <button type="button" className="print-button" onClick={handlePrint}>
          🖨️ Print Poster
        </button>
      </div>

      {/* At a Glance Grid - Using Schedule.css styling */}
      <div className={containerClassName}>
        <h2 className="friday-glance-title">{dayName} At a Glance</h2>
        <p className="poster-date-subtitle">{dayDate}</p>
        
        <div className={wrapperClassName}>
          <table className={gridClassName}>
            <thead>
              <tr>
                <th className="glance-time-header">Time</th>
                <th className="glance-space-header">The Marquee</th>
                <th className="glance-space-header">The Hearth</th>
                <th className="glance-space-header">The Threshold</th>
                <th className="glance-space-header">The Grove</th>
                <th className="glance-space-header">Other Locations</th>
              </tr>
            </thead>
            <tbody>
              {timesToDisplay.map((time, idx) => {
                const meal = dayMeals.find(m => m.time === time);

                if (meal) {
                  return (
                    <tr key={`meal-${idx}`} className="meal-banner-row">
                      <td colSpan="6" className="meal-banner-cell">
                        <div className="meal-banner-content">
                          <span className="meal-badge">Meal</span>
                          <span className="meal-title">{meal.title}</span>
                          <span className="meal-divider">•</span>
                          <span className="meal-time">{meal.time}</span>
                          <span className="meal-divider">•</span>
                          <span className="meal-location">{meal.location}</span>
                        </div>
                      </td>
                    </tr>
                  );
                }

                const eventsForTime = dayEvents.filter(event => eventFallsInTimeBucket(event.time, time));
                if (eventsForTime.length === 0) return null;

                return (
                  <tr key={`time-${idx}`} className="glance-time-row">
                    <td className="glance-time-cell">{time}</td>
                    
                    {mainSpaces.map(space => {
                      const events = getEventsForTimeAndSpace(time, space);
                      return (
                        <td key={space} className="glance-event-cell">
                          {events.map((event, eventIdx) => {
                            const shouldShowTime = [
                              'Embodying Mantra, Yantra & Deity - Naughty Monkey',
                              'Talk Kinky to Me - Sasha Loves You',
                              'Meditation - Venus'
                            ].includes(event.title);
                            
                            return (
                              <div key={eventIdx} className="glance-event-block">
                                <div className="glance-title">{event.title}</div>
                                {shouldShowTime && (
                                  <div className="glance-time-small">{event.time}</div>
                                )}
                                {formatFacilitatorNames(event.facilitators) && (
                                  <div className="glance-facilitators">
                                    {formatFacilitatorNames(event.facilitators)}
                                  </div>
                                )}
                              </div>
                            );
                          })}
                        </td>
                      );
                    })}

                    <td className="glance-event-cell">
                      {getEventsForTimeInOtherSpaces(time).map((event, eventIdx) => {
                        const shouldShowTime = [
                          'Embodying Mantra, Yantra & Deity - Naughty Monkey',
                          'Talk Kinky to Me - Sasha Loves You',
                          'Meditation - Venus'
                        ].includes(event.title);
                        
                        return (
                          <div key={eventIdx} className="glance-event-block glance-other">
                            <div className="glance-title">{event.title}</div>
                            {shouldShowTime && (
                              <div className="glance-time-small">{event.time}</div>
                            )}
                            {event.space && (
                              <div className="glance-location">{event.space}</div>
                            )}
                            {formatFacilitatorNames(event.facilitators) && (
                              <div className="glance-facilitators">
                                {formatFacilitatorNames(event.facilitators)}
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Footer */}
      <footer className="poster-footer">
        <div className="footer-text">
          Schedule subject to change. Scan for live updates.
        </div>
        <div className="qr-placeholder">
          <div className="qr-box">[QR Code]</div>
          <div className="qr-label">Live Schedule</div>
        </div>
      </footer>
    </div>
  );
}

/**
 * FullScheduleList - Shows all 4 days in grid format stacked on one page
 */
function FullScheduleList() {
  const handlePrint = () => {
    window.print();
  };

  const allDays = ['Thursday 7/2', 'Friday 7/3', 'Saturday 7/4', 'Sunday 7/5'];

  return (
    <div className="schedule-poster full-schedule-list">
      {/* Screen-only print button */}
      <div className="print-button-container">
        <button type="button" className="print-button" onClick={handlePrint}>
          🖨️ Print Schedule
        </button>
      </div>

      <div className="full-schedule-container">
        <h1 className="full-schedule-title">REVEL 2026 Schedule</h1>
        <p className="full-schedule-subtitle">July 2–5, 2026 • Sunrise Ranch</p>

        {/* Render each day's grid */}
        {allDays.map((day) => (
          <DayGrid key={day} day={day} />
        ))}
      </div>

      {/* Footer */}
      <footer className="poster-footer">
        <div className="footer-text">
          Schedule subject to change. Visit REVEL website for live updates.
        </div>
      </footer>
    </div>
  );
}

/**
 * DayGrid - Renders a single day's schedule in grid format
 */
function DayGrid({ day }) {
  // Filter events and meals for the day
  const dayEvents = scheduleData.events.filter(event => event.day === day);
  const dayMeals = scheduleData.meals[day] || [];

  const mainSpaces = ['The Marquee', 'The Hearth', 'The Threshold', 'The Grove'];

  const normalizeVenue = (venue) => {
    if (!venue) return '';
    const normalized = venue.trim().toLowerCase();
    if (normalized === 'the marquee' || normalized === 'marquee') return 'The Marquee';
    if (normalized === 'the hearth' || normalized === 'hearth') return 'The Hearth';
    if (normalized === 'the threshold' || normalized === 'threshold') return 'The Threshold';
    if (normalized === 'the grove' || normalized === 'grove') return 'The Grove';
    return null;
  };

  const parseTimeForSort = (timeStr) => {
    const parts = timeStr.split(' - ');
    if (parts.length < 2) {
      const cleanPart = parts[0].toLowerCase().replace(/[ap]m/gi, '').trim();
      const [hours, mins] = cleanPart.split(':').map(Number);
      const isPM = parts[0].toLowerCase().includes('pm');
      return (isPM && hours !== 12 ? hours + 12 : hours === 12 && !isPM ? 0 : hours) * 60 + (mins || 0);
    }
    
    const startPart = parts[0].trim();
    const endPart = parts[1].trim();
    const startClean = startPart.toLowerCase().replace(/[ap]m/gi, '').trim();
    const [startHours, startMins] = startClean.split(':').map(Number);
    const endClean = endPart.replace(/[ap]m/gi, '').trim();
    const [endHours] = endClean.split(':').map(Number);
    
    let isPM = startPart.toLowerCase().includes('pm');
    
    if (!startPart.toLowerCase().includes('am') && !startPart.toLowerCase().includes('pm')) {
      if (endPart.toLowerCase().includes('pm')) {
        isPM = endHours !== 12;
      } else if (endPart.toLowerCase().includes('am')) {
        isPM = startHours >= 9 && endHours <= 4;
      }
    }
    
    return (isPM && startHours !== 12 ? startHours + 12 : startHours === 12 && !isPM ? 0 : startHours) * 60 + (startMins || 0);
  };

  parseTimeForSort.extractPeriod = (timeStr) => {
    const match = timeStr.match(/[ap]m/i);
    return match ? match[0] : '';
  };

  const getCuratedTimes = () => {
    if (day === 'Thursday 7/2') {
      return ['4:30–5:30 PM', '7:15–8:45 PM', '9:00 PM–11:00 PM'];
    } else if (day === 'Friday 7/3') {
      return ['8:15–9:30 AM', '10:00 AM–12:00 PM', '1:30–3:30 PM', '4:00–6:00 PM', '7:15–9:15 PM', '9:45 PM–1:00 AM', '11:00 PM–1:00 AM'];
    } else if (day === 'Saturday 7/4') {
      return ['8:15–9:30 AM', '10:00 AM–12:00 PM', '1:30–3:30 PM', '4:00–6:00 PM', '7:15–9:15 PM', '9:45 PM–1:00 AM'];
    } else if (day === 'Sunday 7/5') {
      return ['8:15–9:45 AM', '10:00–11:45 AM', '11:30 AM–12:30 PM'];
    }
    return [];
  };

  const eventFallsInTimeBucket = (eventTime, bucketTime) => {
    const bucketParts = bucketTime.split('–');
    if (bucketParts.length < 2) return false;
    
    let bucketStart = bucketParts[0].trim();
    const bucketEnd = bucketParts[1].trim();
    const eventParts = eventTime.split(' - ');
    if (eventParts.length < 2) return false;
    
    const eventStart = eventParts[0].trim();
    const eventEnd = eventParts[1].trim();
    
    if (!bucketStart.match(/[ap]m/i)) {
      const periodMatch = bucketEnd.match(/[ap]m/i);
      if (periodMatch) {
        bucketStart = bucketStart + ' ' + periodMatch[0];
      }
    }
    
    // Determine the period for eventStart
    let eventStartPeriod = '';
    
    // If eventStart has an explicit period, use it
    if (eventStart.toLowerCase().includes('am') || eventStart.toLowerCase().includes('pm')) {
      eventStartPeriod = parseTimeForSort.extractPeriod(eventStart);
    } else {
      // eventStart doesn't have explicit period - infer from eventEnd and context
      eventStartPeriod = parseTimeForSort.extractPeriod(eventEnd);
      
      const eventStartHour = parseInt(eventStart.split(':')[0], 10);
      const eventEndHour = parseInt(eventEnd.split(':')[0], 10);
      
      // Smart logic for period inference
      if (eventEnd.toLowerCase().includes('pm')) {
        // If event ends in PM and start hour is early morning (8-11) and end hour is 12, assume AM start
        // (e.g., "10 - 12pm" = 10am-12pm, not 10pm-12am which doesn't make sense)
        if ((eventStartHour === 8 || eventStartHour === 9 || eventStartHour === 10 || eventStartHour === 11) && eventEndHour === 12) {
          eventStartPeriod = 'am';
        }
      } else if (eventEnd.toLowerCase().includes('am')) {
        // If event ends in AM and event start hour > event end hour, 
        // then event start is PM (e.g., "11:00 - 1:00am" = 11:00 PM - 1:00 AM)
        if (eventStartHour > eventEndHour) {
          eventStartPeriod = 'pm';
        }
      }
    }
    
    const bucketStartMin = parseTimeForSort(bucketStart);
    const bucketEndMin = parseTimeForSort(bucketEnd);
    const eventStartMin = parseTimeForSort(eventStart + ' ' + eventStartPeriod);
    
    if (bucketEndMin < bucketStartMin) {
      return eventStartMin >= bucketStartMin || eventStartMin < bucketEndMin;
    } else {
      return eventStartMin >= bucketStartMin && eventStartMin < bucketEndMin;
    }
  };

  const getTimesToDisplay = () => {
    const curated = getCuratedTimes();
    return curated.filter(time => {
      const hasEvent = dayEvents.some(e => eventFallsInTimeBucket(e.time, time));
      const hasMeal = dayMeals.some(m => m.time === time);
      return hasEvent || hasMeal;
    });
  };

  const getEventsForTimeAndSpace = (timeBucket, space) => {
    const curated = getCuratedTimes();
    const timeBucketIndex = curated.indexOf(timeBucket);
    
    return dayEvents.filter(event => {
      // Event must match this bucket and space
      if (!eventFallsInTimeBucket(event.time, timeBucket) || normalizeVenue(event.space) !== space) {
        return false;
      }
      
      // Check if event should appear in a narrower bucket instead
      // Look for narrower buckets that come after this one
      for (let i = timeBucketIndex + 1; i < curated.length; i++) {
        const narrowerBucket = curated[i];
        // Only consider narrower buckets (ones that don't include the broader bucket's start time)
        if (eventFallsInTimeBucket(event.time, narrowerBucket)) {
          // Event fits in this narrower bucket, so exclude it from the broader one
          return false;
        }
      }
      
      return true;
    });
  };

  const getEventsForTimeInOtherSpaces = (timeBucket) => {
    const curated = getCuratedTimes();
    const timeBucketIndex = curated.indexOf(timeBucket);
    
    return dayEvents.filter(event => {
      // Event must match this bucket and be in other spaces
      if (!eventFallsInTimeBucket(event.time, timeBucket) || normalizeVenue(event.space) !== null) {
        return false;
      }
      
      // Check if event should appear in a narrower bucket instead
      for (let i = timeBucketIndex + 1; i < curated.length; i++) {
        const narrowerBucket = curated[i];
        if (eventFallsInTimeBucket(event.time, narrowerBucket)) {
          return false;
        }
      }
      
      return true;
    });
  };

  const formatFacilitatorNames = (facilitatorNames) => {
    if (!facilitatorNames || facilitatorNames.length === 0) return '';
    const facilitators = facilitatorData.getFacilitators(facilitatorNames);
    if (facilitators.length === 0) return '';
    if (facilitators.length === 1) return facilitators[0].name;
    if (facilitators.length === 2) return `${facilitators[0].name} & ${facilitators[1].name}`;
    const names = facilitators.slice(0, -1).map(f => f.name).join(', ');
    return names + ` & ${facilitators[facilitators.length - 1].name}`;
  };

  const dayDate = day === 'Thursday 7/2' ? 'July 2' : day === 'Friday 7/3' ? 'July 3' : day === 'Saturday 7/4' ? 'July 4' : 'July 5';
  const dayName = day.split(' ')[0];
  const timesToDisplay = getTimesToDisplay();

  return (
    <div className="day-grid-section">
      <div className="day-grid-header">
        <h2>{dayName} • {dayDate}</h2>
      </div>
      
      <div className="day-grid-wrapper">
        <table className="day-grid-table">
          <thead>
            <tr>
              <th className="glance-time-header">Time</th>
              <th className="glance-space-header">The Marquee</th>
              <th className="glance-space-header">The Hearth</th>
              <th className="glance-space-header">The Threshold</th>
              <th className="glance-space-header">The Grove</th>
              <th className="glance-space-header">Other</th>
            </tr>
          </thead>
          <tbody>
            {timesToDisplay.map((time, idx) => {
              const meal = dayMeals.find(m => m.time === time);

              if (meal) {
                return (
                  <tr key={`meal-${idx}`} className="meal-banner-row">
                    <td colSpan="6" className="meal-banner-cell">
                      <div className="meal-banner-content">
                        <span className="meal-badge">Meal</span>
                        <span className="meal-title">{meal.title}</span>
                        <span className="meal-divider">•</span>
                        <span className="meal-time">{meal.time}</span>
                      </div>
                    </td>
                  </tr>
                );
              }

              const eventsForTime = dayEvents.filter(event => eventFallsInTimeBucket(event.time, time));
              if (eventsForTime.length === 0) return null;

              return (
                <tr key={`time-${idx}`} className="glance-time-row">
                  <td className="glance-time-cell">{time}</td>
                  
                  {mainSpaces.map(space => {
                    const events = getEventsForTimeAndSpace(time, space);
                    return (
                      <td key={space} className="glance-event-cell">
                        {events.map((event, eventIdx) => (
                          <div key={eventIdx} className="glance-event-block">
                            <div className="glance-title">{event.title}</div>
                            {formatFacilitatorNames(event.facilitators) && (
                              <div className="glance-facilitators">
                                {formatFacilitatorNames(event.facilitators)}
                              </div>
                            )}
                          </div>
                        ))}
                      </td>
                    );
                  })}

                  <td className="glance-event-cell">
                    {getEventsForTimeInOtherSpaces(time).map((event, eventIdx) => (
                      <div key={eventIdx} className="glance-event-block glance-other">
                        <div className="glance-title">{event.title}</div>
                        {event.space && (
                          <div className="glance-location">{event.space}</div>
                        )}
                        {formatFacilitatorNames(event.facilitators) && (
                          <div className="glance-facilitators">
                            {formatFacilitatorNames(event.facilitators)}
                          </div>
                        )}
                      </div>
                    ))}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
