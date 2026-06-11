import { useState } from 'react';
import { scheduleData } from '../data/scheduleData';
import { facilitatorData } from '../data/facilitatorData';
import '../styles/Schedule.css';

export default function Schedule() {
  const [selectedDay, setSelectedDay] = useState(null);
  const [expandedEvent, setExpandedEvent] = useState(null);

  const displayedEvents = selectedDay
    ? scheduleData.events.filter(event => event.day === selectedDay)
    : scheduleData.events;

  const eventsByDay = scheduleData.eventDates.reduce((acc, day) => {
    acc[day] = displayedEvents.filter(event => event.day === day);
    return acc;
  }, {});

  const toggleEventExpand = (eventId) => {
    setExpandedEvent(expandedEvent === eventId ? null : eventId);
  };

  const getEventId = (event, index) => `${event.day}-${event.time}-${index}`;

  const getFacilitatorList = (facilitatorNames) => {
    if (!facilitatorNames || facilitatorNames.length === 0) return [];
    return facilitatorData.getFacilitators(facilitatorNames);
  };

  const formatFacilitatorNames = (facilitators) => {
    if (facilitators.length === 0) return '';
    if (facilitators.length === 1) return facilitators[0].name;
    if (facilitators.length === 2) return `${facilitators[0].name} & ${facilitators[1].name}`;
    return facilitators.slice(0, -1).map(f => f.name).join(', ') + ` & ${facilitators[facilitators.length - 1].name}`;
  };

  const facilitatorImagesWithPhotos = (facilitators) => {
    return facilitators.filter(fac => fac.photo);
  };

  const initials = (name) => {
    return name
      .split(' ')
      .map(word => word[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  const createMonogram = (name) => {
    const init = initials(name);
    return (
      <div className="facilitator-monogram" title={name}>
        {init}
      </div>
    );
  };

  const mainSpaces = ['The Marquee', 'The Hearth', 'The Threshold', 'The Grove'];

  // Normalize venue name for consistent matching
  const normalizeVenue = (venue) => {
    if (!venue) return '';
    return venue.trim().toLowerCase();
  };

  // Get normalized main space name (e.g., "hearth" -> "The Hearth")
  const getNormalizedMainSpace = (venue) => {
    const normalized = normalizeVenue(venue);
    
    if (normalized.includes('marquee')) return 'The Marquee';
    if (normalized.includes('hearth')) return 'The Hearth';
    if (normalized.includes('threshold')) return 'The Threshold';
    if (normalized.includes('grove')) return 'The Grove';
    
    return null; // Not a main space
  };

  // Get unique times in chronological order
  const getUniqueTimes = () => {
    const times = new Set();
    displayedEvents.forEach(event => {
      times.add(event.time);
    });
    return Array.from(times).sort((a, b) => {
      const getMinutes = (timeStr) => {
        const [startTime] = timeStr.split(' - ');
        const [hours, mins] = startTime.split(':').map(Number);
        const isPM = startTime.includes('pm');
        return (isPM && hours !== 12 ? hours + 12 : hours === 12 && !isPM ? 0 : hours) * 60 + (mins || 0);
      };
      return getMinutes(a) - getMinutes(b);
    });
  };

  // Get events for a specific time and normalized space
  const getEventsForTimeAndSpace = (time, space) => {
    return displayedEvents.filter(event => {
      if (event.time !== time) return false;
      return getNormalizedMainSpace(event.space) === space;
    });
  };

  // Get events for a specific time in non-main spaces (Other Locations)
  const getEventsForTimeInOtherSpaces = (time) => {
    return displayedEvents.filter(event => {
      if (event.time !== time) return false;
      return getNormalizedMainSpace(event.space) === null;
    });
  };

  const getEventType = (title) => {
    const lowerTitle = title.toLowerCase();
    if (lowerTitle.includes('ceremony') || lowerTitle.includes('ritual')) return 'Ceremony';
    if (lowerTitle.includes('dance') || lowerTitle.includes('dance church') || lowerTitle.includes('embodying')) return 'Dance';
    if (lowerTitle.includes('meditation') || lowerTitle.includes('yoga') || lowerTitle.includes('kundalini')) return 'Meditation';
    if (lowerTitle.includes('song') || lowerTitle.includes('music')) return 'Music';
    if (lowerTitle.includes('temple')) return 'Temple';
    if (lowerTitle.includes('circle') || lowerTitle.includes('council') || lowerTitle.includes('lounge')) return 'Community';
    if (lowerTitle.includes('breakfast') || lowerTitle.includes('lunch') || lowerTitle.includes('dinner') || lowerTitle.includes('nourishment')) return 'Nourishment';
    if (lowerTitle.includes('logistics') || lowerTitle.includes('orientation')) return 'Logistics';
    return 'Workshop';
  };

  return (
    <div className="schedule-page">
      {/* Hero Section */}
      <section className="schedule-hero">
        <h1 className="schedule-title">Schedule</h1>
        <p className="schedule-subtitle">A living map of the weekend.</p>
        <p className="schedule-subtext">Workshops, rituals, meals, music, connection spaces, and places to land.</p>
      </section>

      {/* Day Navigation Tabs */}
      <div className="day-tabs">
        <button
          className={`day-tab ${selectedDay === null ? 'active' : ''}`}
          onClick={() => setSelectedDay(null)}
        >
          All Days
        </button>
        {scheduleData.eventDates.map(day => (
          <button
            key={day}
            className={`day-tab ${selectedDay === day ? 'active' : ''}`}
            onClick={() => setSelectedDay(day)}
          >
            {day}
          </button>
        ))}
      </div>

      {/* Friday At a Glance Grid */}
      <div className="friday-glance-container">
        <h2 className="friday-glance-title">Friday At a Glance</h2>
        <div className="friday-glance-wrapper">
          <table className="friday-glance-grid">
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
              {/* 8:15–9:30 AM */}
              <tr className="glance-time-row">
                <td className="glance-time-cell">8:15–9:30 AM</td>
                <td className="glance-event-cell">
                  <div className="glance-event-block">Initiation - Movement by Design</div>
                </td>
                <td className="glance-event-cell"></td>
                <td className="glance-event-cell">
                  <div className="glance-event-block">
                    <div className="glance-title">Soul Motion</div>
                    <div className="glance-facilitators">Devorah Bry</div>
                  </div>
                </td>
                <td className="glance-event-cell">
                  <div className="glance-event-block">
                    <div className="glance-title">Meditation</div>
                    <div className="glance-facilitators">Maxwell Wilson</div>
                  </div>
                </td>
                <td className="glance-event-cell">
                  <div className="glance-event-block glance-other">
                    <div className="glance-title">Kundalini Yoga</div>
                    <div className="glance-facilitators">Signa O. Cheney</div>
                    <div className="glance-location">Lawn by The Threshold</div>
                  </div>
                </td>
              </tr>

              {/* 10:00 AM–12:00 PM */}
              <tr className="glance-time-row">
                <td className="glance-time-cell">10:00 AM–12:00 PM</td>
                <td className="glance-event-cell">
                  <div className="glance-event-block">
                    <div className="glance-title">Song Circle</div>
                    <div className="glance-facilitators">Lyndsey Scott</div>
                  </div>
                </td>
                <td className="glance-event-cell">
                  <div className="glance-event-block">
                    <div className="glance-title">Primal Mischief & Medicine</div>
                    <div className="glance-facilitators">Zahava Griss</div>
                  </div>
                </td>
                <td className="glance-event-cell">
                  <div className="glance-event-block">
                    <div className="glance-title">Attachment Alchemy</div>
                    <div className="glance-facilitators">Chloe Good</div>
                  </div>
                </td>
                <td className="glance-event-cell">
                  <div className="glance-event-block">
                    <div className="glance-title">Erotic Blueprints</div>
                    <div className="glance-facilitators">Ayce Kyptyn & Ephraim Mallery</div>
                  </div>
                </td>
                <td className="glance-event-cell"></td>
              </tr>

              {/* 1:30–4:30 PM */}
              <tr className="glance-time-row">
                <td className="glance-time-cell">1:30–4:30 PM</td>
                <td className="glance-event-cell">
                  <div className="glance-event-block">
                    <div className="glance-title">REPAIR the Divide Ritual</div>
                    <div className="glance-facilitators">Dr. Hazel-Grace Yates & Spencer Jacobson</div>
                  </div>
                </td>
                <td className="glance-event-cell">
                  <div className="glance-event-block">
                    <div className="glance-title">Tantric Contact</div>
                    <div className="glance-facilitators">Atilla Cidam</div>
                  </div>
                </td>
                <td className="glance-event-cell">
                  <div className="glance-event-block">
                    <div className="glance-title">Sovereignty & Synergy: The Dance of Desire and Boundaries</div>
                    <div className="glance-facilitators">Briana Cribeyer</div>
                  </div>
                </td>
                <td className="glance-event-cell">
                  <div className="glance-event-block">
                    <div className="glance-title">The Future of our Field</div>
                    <div className="glance-facilitators">Zahava Griss</div>
                  </div>
                </td>
                <td className="glance-event-cell"></td>
              </tr>

              {/* 1:30–3:30 PM (DanceEros) */}
              <tr className="glance-time-row">
                <td className="glance-time-cell">1:30–3:30 PM</td>
                <td className="glance-event-cell"></td>
                <td className="glance-event-cell"></td>
                <td className="glance-event-cell">
                  <div className="glance-event-block">
                    <div className="glance-title">DanceEros: DeColonizing Erotic Movement</div>
                    <div className="glance-facilitators">Victor Warring</div>
                  </div>
                </td>
                <td className="glance-event-cell">
                  <div className="glance-event-block">
                    <div className="glance-title">Belly2Belly</div>
                    <div className="glance-facilitators">Rachel Rickards</div>
                  </div>
                </td>
                <td className="glance-event-cell"></td>
              </tr>

              {/* 4:00–6:00 PM */}
              <tr className="glance-time-row">
                <td className="glance-time-cell">4:00–6:00 PM</td>
                <td className="glance-event-cell">
                  <div className="glance-event-block">
                    <div className="glance-title">Integration Space</div>
                    <div className="glance-facilitators">Dr. Hazel-Grace Yates & Spencer Jacobson</div>
                  </div>
                </td>
                <td className="glance-event-cell">
                  <div className="glance-event-block">
                    <div className="glance-title">Dance of Devotion</div>
                    <div className="glance-facilitators">Rachel Rickards & Devorah Bry</div>
                  </div>
                </td>
                <td className="glance-event-cell">
                  <div className="glance-event-block">
                    <div className="glance-title">Walking The Edge: The Art of Dom/Sub Relating</div>
                    <div className="glance-facilitators">Michaela Winters</div>
                  </div>
                </td>
                <td className="glance-event-cell">
                  <div className="glance-event-block">
                    <div className="glance-title">Dakina Council</div>
                    <div className="glance-facilitators">Soraya Masi, Janelle Orion, Nicole Marie Rose, Ayce Kyptyn, LaVina Iyana</div>
                  </div>
                </td>
                <td className="glance-event-cell"></td>
              </tr>

              {/* 7:15–9:15 PM */}
              <tr className="glance-time-row">
                <td className="glance-time-cell">7:15–9:15 PM</td>
                <td className="glance-event-cell">
                  <div className="glance-event-block">
                    <div className="glance-title">Unleash</div>
                    <div className="glance-facilitators">Yarixa Ferrao</div>
                  </div>
                </td>
                <td className="glance-event-cell">
                  <div className="glance-event-block">
                    <div className="glance-title">Interplay</div>
                    <div className="glance-facilitators">Peter Benjamin & Violet Starkey</div>
                  </div>
                </td>
                <td className="glance-event-cell"></td>
                <td className="glance-event-cell"></td>
                <td className="glance-event-cell"></td>
              </tr>

              {/* 11:00 PM–1:00 AM */}
              <tr className="glance-time-row">
                <td className="glance-time-cell">11:00 PM–1:00 AM</td>
                <td className="glance-event-cell"></td>
                <td className="glance-event-cell"></td>
                <td className="glance-event-cell">
                  <div className="glance-event-block">
                    <div className="glance-title">Connection Temple: Vulnerability as Power</div>
                  </div>
                </td>
                <td className="glance-event-cell"></td>
                <td className="glance-event-cell"></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Schedule Grid */}
      <section className="schedule-content">
        {scheduleData.eventDates.map(day => (
          <div key={day} className="day-section">
            {/* Only show day header if viewing all days or this day is selected */}
            {(selectedDay === null || selectedDay === day) && eventsByDay[day]?.length > 0 && (
              <div className="day-header">
                <h2 className="day-name">
                  {day.split(' ')[0]}
                  <span className="day-date" style={{ marginLeft: '12px' }}>
                    {day.split(' ').slice(1).join(' ')}
                  </span>
                </h2>
              </div>
            )}
            <div className="events-list">
              {eventsByDay[day]?.length > 0 ? (
                eventsByDay[day].map((event, index) => {
                  const eventId = getEventId(event, index);
                  const isExpanded = expandedEvent === eventId;
                  const facilitators = getFacilitatorList(event.facilitators);
                  const eventType = getEventType(event.title);

                  return (
                    <div
                      key={eventId}
                      className={`event-card ${isExpanded ? 'expanded' : ''} ${event.isMandatory ? 'mandatory' : ''}`}
                      onClick={() => toggleEventExpand(eventId)}
                    >
                      <div className="event-card-main">
                        {/* Left: Time */}
                        <div className="event-time-col">
                          <span className="event-time">{event.time}</span>
                        </div>

                        {/* Middle: Title, Tags & Facilitators */}
                        <div className="event-info-col">
                          <div className="event-header-inner">
                            <h3 className="event-title">{event.title}</h3>
                            {event.isMandatory && <span className="event-tag event-tag-mandatory">Mandatory</span>}
                          </div>
                          <div className="event-location-row">
                            <span className="event-space">{event.space}</span>
                            <span className="event-tag event-tag-type">{eventType}</span>
                          </div>
                          {facilitators.length > 0 && (
                            <div className="event-facilitators-names">
                              {formatFacilitatorNames(facilitators)}
                            </div>
                          )}
                        </div>

                        {/* Right: Facilitator Images */}
                        <div className="event-images-col">
                          {facilitatorImagesWithPhotos(facilitators).length > 0 && (
                            <div className="facilitator-images">
                              {facilitatorImagesWithPhotos(facilitators).slice(0, 3).map((fac, idx) => (
                                <div
                                  key={idx}
                                  className={`facilitator-image-wrapper ${facilitatorImagesWithPhotos(facilitators).length > 1 ? 'overlapped' : ''}`}
                                  style={{
                                    zIndex: 3 - idx,
                                    marginLeft: idx > 0 ? `-14px` : '0'
                                  }}
                                  title={fac.name}
                                >
                                  <img src={fac.photo} alt={fac.name} className="facilitator-image" />
                                </div>
                              ))}
                            </div>
                          )}
                        </div>

                        {/* Expand Icon */}
                        {event.description && (
                          <div className="event-expand-indicator">
                            <span className="expand-icon">{isExpanded ? '−' : '+'}</span>
                          </div>
                        )}
                      </div>

                      {/* Expanded Content */}
                      {isExpanded && (
                        <div className="event-card-expanded">
                          {event.description && (
                            <div className="event-description-section">
                              <div className="description-divider"></div>
                              <div className="event-description">
                                {event.description.split('\n').map((para, idx) => (
                                  <p key={idx}>{para}</p>
                                ))}
                              </div>
                            </div>
                          )}

                          {facilitators.length > 0 && (
                            <div className="facilitators-section">
                              <div className="facilitators-divider"></div>
                              <h4 className="facilitators-heading">
                                Facilitator{facilitators.length > 1 ? 's' : ''}
                              </h4>
                              <div className="facilitators-bios">
                                {facilitators.map((fac, idx) => (
                                  <div key={idx} className="facilitator-bio">
                                    <div className="facilitator-bio-header">
                                      {fac.photo && (
                                        <div className="facilitator-bio-image">
                                          <img src={fac.photo} alt={fac.name} />
                                        </div>
                                      )}
                                      <div className="facilitator-bio-info">
                                        <h5 className="facilitator-bio-name">{fac.name}</h5>
                                        <p className="facilitator-bio-role">{fac.role}</p>
                                      </div>
                                    </div>
                                    <p className="facilitator-bio-text">{fac.bio}</p>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  );
                })
              ) : null}
            </div>
          </div>
        ))}
      </section>

      {/* Legend / Info */}
      <section className="schedule-info">
        <div className="section-container">
          <div className="info-content">
            <h3>How to Use This Schedule</h3>
            <ul>
              <li>Use the day tabs at the top to explore the schedule by day</li>
              <li>Click any event card to see the full description and facilitator bios</li>
              <li>All times are in Mountain Time (MT)</li>
              <li>Some workshops run simultaneously in different spaces—choose which calls to you</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
