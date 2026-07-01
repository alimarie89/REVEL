import { useState } from 'react';
import { scheduleData } from '../data/scheduleData';
import { facilitatorData } from '../data/facilitatorData';
import '../styles/Schedule.css';

export default function Schedule() {
  const [selectedDay, setSelectedDay] = useState(null);
  const [expandedEvent, setExpandedEvent] = useState(null);
  const [modalEvent, setModalEvent] = useState(null);
  const [scrollPosition, setScrollPosition] = useState({ thursday: 0, friday: 0, saturday: 0, sunday: 0 });
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

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

  // Find event data by title to open in modal
  const findEventByTitle = (title, day) => {
    if (day) {
      // If day is provided, filter by day first, then find by title
      return scheduleData.events.find(event => event.day === day && event.title === title);
    }
    return scheduleData.events.find(event => event.title === title);
  };

  const openEventModal = (title, day) => {
    const event = findEventByTitle(title, day);
    if (event) {
      setModalEvent(event);
    }
  };

  const handleGridScroll = (e, day) => {
    const scrollLeft = e.target.scrollLeft;
    setScrollPosition(prev => ({ ...prev, [day]: scrollLeft }));
  };

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    setTouchEnd(e.changedTouches[0].clientX);
  };

  const closeModal = () => {
    setModalEvent(null);
  };

  return (
    <>
      <div className="schedule-page">
      {/* Hero Section with Navigation */}
      <section className="schedule-hero">
        <div className="hero-content">
          <img src="/schedule-hero.png" alt="REVEL Schedule" className="schedule-hero-image" />
          <div className="hero-button-group">
            <a href="/" className="hero-nav-btn home-btn">
              Home Page
            </a>
            <a href="https://events.humanitix.com/revel2026" target="_blank" rel="noopener noreferrer" className="buy-tickets-btn">
              Buy Tickets
            </a>
            <a href="/faq" className="hero-nav-btn faq-btn">
              FAQ
            </a>
          </div>
        </div>
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

      {/* Thursday At a Glance Grid */}
      {(selectedDay === null || selectedDay === 'Thursday 7/2') && (
      <div className="friday-glance-container">
        <h2 className="friday-glance-title">Thursday At a Glance</h2>
        <div className="swipe-hint">← Swipe to see all venues →</div>
        <div className="friday-glance-wrapper" onScroll={(e) => handleGridScroll(e, 'thursday')} onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
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
              {/* Logistics Banner - Arrival */}
              <tr className="logistics-banner-row">
                <td colSpan="6" className="logistics-banner-cell">
                  <div className="logistics-banner-content">
                    <span className="logistics-badge">Logistics</span>
                    <span className="logistics-title">Arrival</span>
                    <span className="logistics-divider">•</span>
                    <span className="logistics-time">1:00 PM–4:00 PM</span>
                    <span className="logistics-divider">•</span>
                    <span className="logistics-location">Parking / Camping</span>
                  </div>
                </td>
              </tr>
              {/* 4:30–5:30 PM */}
              <tr className="glance-time-row">
                <td className="glance-time-cell">4:30–5:30 PM</td>
                <td className="glance-event-cell">
                  <div className="glance-event-block" onClick={() => openEventModal('Land Orientation and Logistics')}>
                    <div className="glance-title">Land Orientation and Logistics</div>
                    <div className="glance-actual-time">4:30–5:30 PM</div>
                  </div>
                </td>
                <td className="glance-event-cell"></td>
                <td className="glance-event-cell"></td>
                <td className="glance-event-cell"></td>
                <td className="glance-event-cell"></td>
              </tr>

              {/* Dinner Meal Row */}
              <tr className="meal-banner-row">
                <td colSpan="6" className="meal-banner-cell">
                  <div className="meal-banner-content">
                    <span className="meal-badge">Meal</span>
                    <span className="meal-title">Dinner</span>
                    <span className="meal-divider">•</span>
                    <span className="meal-time">5:30 PM–7:00 PM</span>
                    <span className="meal-divider">•</span>
                    <span className="meal-location">Dining Hall</span>
                  </div>
                </td>
              </tr>

              {/* 7:15–8:45 PM */}
              <tr className="glance-time-row">
                <td className="glance-time-cell">7:15–8:45 PM</td>
                <td className="glance-event-cell">
                  <div className="glance-event-block" onClick={() => openEventModal('Opening Ceremony')}>
                    <div className="glance-title">Opening Ceremony</div>
                    <div className="glance-actual-time">7:15–8:45 PM</div>
                  </div>
                </td>
                <td className="glance-event-cell"></td>
                <td className="glance-event-cell"></td>
                <td className="glance-event-cell"></td>
                <td className="glance-event-cell"></td>
              </tr>

              {/* 9:00 PM–11:00 PM */}
              <tr className="glance-time-row">
                <td className="glance-time-cell">9:00 PM–11:00 PM</td>
                <td className="glance-event-cell">
                  <div className="glance-event-block" onClick={() => openEventModal('Building the Relational Field')}>
                    <div className="glance-title">Building the Relational Field</div>
                    <div className="glance-actual-time">9:00–11:00 PM</div>
                    <div className="glance-facilitators">Ali & Courtney & Dragon Academy Team</div>
                  </div>
                </td>
                <td className="glance-event-cell">
                  <div className="glance-event-block" onClick={() => openEventModal('Opening Dance Journey')}>
                    <div className="glance-title">Opening Dance Journey</div>
                    <div className="glance-actual-time">9–11 PM</div>
                    <div className="glance-facilitators">Anaia & Spencer Jacobson</div>
                  </div>
                </td>
                <td className="glance-event-cell"></td>
                <td className="glance-event-cell"></td>
                <td className="glance-event-cell">
                  <div className="glance-event-block" onClick={() => openEventModal('Tea Lounge')}>
                    <div className="glance-title">Tea Lounge</div>
                    <div className="glance-actual-time">9pm–12am</div>
                    <div className="glance-facilitators">Elowan</div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      )}

      {/* Friday At a Glance Grid */}
      {(selectedDay === null || selectedDay === 'Friday 7/3') && (
      <div className="friday-glance-container">
        <h2 className="friday-glance-title">Friday At a Glance</h2>
        <div className="swipe-hint">← Swipe to see all venues →</div>
        <div className="friday-glance-wrapper" onScroll={(e) => handleGridScroll(e, 'friday')} onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
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
              {/* Breakfast Meal Row */}
              <tr className="meal-banner-row">
                <td colSpan="6" className="meal-banner-cell">
                  <div className="meal-banner-content">
                    <span className="meal-badge">Meal</span>
                    <span className="meal-title">Breakfast</span>
                    <span className="meal-divider">•</span>
                    <span className="meal-time">7:30 AM–9:00 AM</span>
                    <span className="meal-divider">•</span>
                    <span className="meal-location">Dining Hall</span>
                  </div>
                </td>
              </tr>
              {/* 8:15–9:30 AM */}
              <tr className="glance-time-row">
                <td className="glance-time-cell">8:15–9:30 AM</td>
                <td className="glance-event-cell">
                  <div className="glance-event-block" onClick={() => openEventModal('Initiation', 'Friday 7/3')}>
                    <div className="glance-title">Initiation</div>
                    <div className="glance-actual-time">8:15–9:30 AM</div>
                    <div className="glance-facilitators">Movement by Design</div>
                  </div>
                </td>
                <td className="glance-event-cell">
                  <div className="glance-event-block" onClick={() => openEventModal('Desires & Intentions Connection Circle', 'Friday 7/3')}>
                    <div className="glance-title">Desires & Intentions Connection Circle</div>
                    <div className="glance-actual-time">9–9:45 AM</div>
                    <div className="glance-facilitators">Briana Cribeyer</div>
                  </div>
                </td>
                <td className="glance-event-cell">
                  <div className="glance-event-block" onClick={() => openEventModal('Soul Motion: Opening the Gates')}>
                    <div className="glance-title">Soul Motion: Opening the Gates</div>
                    <div className="glance-actual-time">8:15–9:30 AM</div>
                    <div className="glance-facilitators">Devorah Bry</div>
                  </div>
                </td>
                <td className="glance-event-cell">
                  <div className="glance-event-block" onClick={() => openEventModal('Meditation')}>
                    <div className="glance-title">Meditation</div>
                    <div className="glance-actual-time">8:30–9:30 AM</div>
                    <div className="glance-facilitators">Maxwell Wilson</div>
                  </div>
                </td>
              </tr>

              {/* 10:00 AM–12:00 PM */}
              <tr className="glance-time-row">
                <td className="glance-time-cell">10:00 AM–12:00 PM</td>
                <td className="glance-event-cell">
                  <div className="glance-event-block" onClick={() => openEventModal('Bandwidth, Baby! A song circle to expand your heartspace', 'Friday 7/3')}>
                    <div className="glance-title">Bandwidth, Baby! A song circle to expand your heartspace</div>
                    <div className="glance-actual-time">10:00 AM–12:00 PM</div>
                    <div className="glance-facilitators">Lyndsey Scott</div>
                  </div>
                </td>
                <td className="glance-event-cell">
                  <div className="glance-event-block" onClick={() => openEventModal('Primal Mischief & Medicine')}>
                    <div className="glance-title">Primal Mischief & Medicine</div>
                    <div className="glance-actual-time">10:00 AM–12:00 PM</div>
                    <div className="glance-facilitators">Zahava Griss</div>
                  </div>
                </td>
                <td className="glance-event-cell">
                  <div className="glance-event-block" onClick={() => openEventModal('Attachment Alchemy')}>
                    <div className="glance-title">Attachment Alchemy</div>
                    <div className="glance-actual-time">10:00 AM–12:00 PM</div>
                    <div className="glance-facilitators">Chloe Good</div>
                  </div>
                </td>
                <td className="glance-event-cell">
                  <div className="glance-event-block" onClick={() => openEventModal('Erotic Blueprints')}>
                    <div className="glance-title">Erotic Blueprints</div>
                    <div className="glance-actual-time">10:00 AM–12:00 PM</div>
                    <div className="glance-facilitators">Ayce Kyptyn & Ephraim Mallery</div>
                  </div>
                </td>
                <td className="glance-event-cell"></td>
              </tr>

              {/* Lunch Meal Row */}
              <tr className="meal-banner-row">
                <td colSpan="6" className="meal-banner-cell">
                  <div className="meal-banner-content">
                    <span className="meal-badge">Meal</span>
                    <span className="meal-title">Lunch</span>
                    <span className="meal-divider">•</span>
                    <span className="meal-time">12:00 PM–1:30 PM</span>
                    <span className="meal-divider">•</span>
                    <span className="meal-location">Dining Hall</span>
                  </div>
                </td>
              </tr>

              {/* 1:30–3:30 PM */}
              <tr className="glance-time-row">
                <td className="glance-time-cell">1:30–3:30 PM</td>
                <td className="glance-event-cell">
                  <div className="glance-event-block" onClick={() => openEventModal('REPAIR the Divide Ritual')}>
                    <div className="glance-title">REPAIR the Divide Ritual</div>
                    <div className="glance-actual-time">1:30–4:30 PM</div>
                    <div className="glance-facilitators">Dr. Hazel-Grace Yates & Spencer Jacobson</div>
                  </div>
                </td>
                <td className="glance-event-cell">
                  <div className="glance-event-block" onClick={() => openEventModal('Tantric Contact')}>
                    <div className="glance-title">Tantric Contact</div>
                    <div className="glance-actual-time">1:30–3:30 PM</div>
                    <div className="glance-facilitators">Atilla Cidam</div>
                  </div>
                </td>
                <td className="glance-event-cell">
                  <div className="glance-event-block" onClick={() => openEventModal('Sovereignty & Synergy: The Dance of Desire and Boundaries')}>
                    <div className="glance-title">Sovereignty & Synergy: The Dance of Desire and Boundaries</div>
                    <div className="glance-actual-time">1:30–3:30 PM</div>
                    <div className="glance-facilitators">Briana Cribeyer</div>
                  </div>
                </td>
                <td className="glance-event-cell">
                  <div className="glance-event-block" onClick={() => openEventModal('Embodying Mantra, Yantra & Deity - Naughty Monkey')}>
                    <div className="glance-title">Embodying Mantra, Yantra & Deity</div>
                    <div className="glance-actual-time">1:30–2:30 PM</div>
                    <div className="glance-facilitators">Naughty Monkey</div>
                  </div>
                </td>
                <td className="glance-event-cell"></td>
              </tr>

              {/* 2:30–3:00 PM */}
              <tr className="glance-time-row">
                <td className="glance-time-cell">2:30–3:00 PM</td>
                <td className="glance-event-cell"></td>
                <td className="glance-event-cell"></td>
                <td className="glance-event-cell"></td>
                <td className="glance-event-cell">
                  <div className="glance-event-block" onClick={() => openEventModal('Lean In Closer: Building the Village You Wish Existed')}>
                    <div className="glance-title">Lean In Closer</div>
                    <div className="glance-actual-time">2:30–3:00 PM</div>
                    <div className="glance-facilitators">Steph Shinaberry</div>
                  </div>
                </td>
                <td className="glance-event-cell"></td>
              </tr>

              {/* 3:00–3:30 PM */}
              <tr className="glance-time-row">
                <td className="glance-time-cell">3:00–3:30 PM</td>
                <td className="glance-event-cell"></td>
                <td className="glance-event-cell"></td>
                <td className="glance-event-cell"></td>
                <td className="glance-event-cell">
                  <div className="glance-event-block" onClick={() => openEventModal('Meditation')}>
                    <div className="glance-title">Meditation</div>
                    <div className="glance-actual-time">3:00–3:30 PM</div>
                    <div className="glance-facilitators">Venus</div>
                  </div>
                </td>
                <td className="glance-event-cell"></td>
              </tr>

              {/* 4:00–6:00 PM */}
              <tr className="glance-time-row">
                <td className="glance-time-cell">4:00–6:00 PM</td>
                <td className="glance-event-cell">
                  <div className="glance-event-block" onClick={() => openEventModal('Integration Space')}>
                    <div className="glance-title">Integration Space</div>
                    <div className="glance-actual-time">4:00–6:00 PM</div>
                    <div className="glance-facilitators">Dr. Hazel-Grace Yates & Spencer Jacobson</div>
                  </div>
                </td>
                <td className="glance-event-cell">
                  <div className="glance-event-block" onClick={() => openEventModal('Dance of Devotion')}>
                    <div className="glance-title">Dance of Devotion</div>
                    <div className="glance-actual-time">4–5:30 PM</div>
                    <div className="glance-facilitators">Rachel Rickards & Devorah Bry</div>
                  </div>
                </td>
                <td className="glance-event-cell">
                  <div className="glance-event-block" onClick={() => openEventModal('Walking The Edge: The Art of Dom/Sub Relating')}>
                    <div className="glance-title">Walking The Edge: The Art of Dom/Sub Relating</div>
                    <div className="glance-actual-time">4:00–6:00 PM</div>
                    <div className="glance-facilitators">Michaela Winters</div>
                  </div>
                </td>
                <td className="glance-event-cell">
                  <div className="glance-event-block" onClick={() => openEventModal('Dakini Council')}>
                    <div className="glance-title">Dakini Council</div>
                    <div className="glance-actual-time">4–5:30 PM</div>
                    <div className="glance-facilitators">Soraya Masi, Janelle Orion, Nicole Marie Rose, Ayce Kyptyn, LaVina Iyana, Hannah Heart</div>
                  </div>
                </td>
                <td className="glance-event-cell">
                  <div className="glance-event-block glance-other" onClick={() => openEventModal('Inclusive Shabbat Service')}>
                    <div className="glance-title">Inclusive Shabbat Service</div>
                    <div className="glance-actual-time">6:00–6:30 PM</div>
                    <div className="glance-location">The Grove</div>
                  </div>
                </td>
              </tr>

              {/* Dinner Meal Row */}
              <tr className="meal-banner-row">
                <td colSpan="6" className="meal-banner-cell">
                  <div className="meal-banner-content">
                    <span className="meal-badge">Meal</span>
                    <span className="meal-title">Dinner</span>
                    <span className="meal-divider">•</span>
                    <span className="meal-time">5:30 PM–7:00 PM</span>
                    <span className="meal-divider">•</span>
                    <span className="meal-location">Dining Hall</span>
                  </div>
                </td>
              </tr>

              {/* 7:15–9:15 PM */}
              <tr className="glance-time-row">
                <td className="glance-time-cell">7:15–9:15 PM</td>
                <td className="glance-event-cell">
                  <div className="glance-event-block" onClick={() => openEventModal('Unleash')}>
                    <div className="glance-title">Unleash</div>
                    <div className="glance-actual-time">7:15–9:15 PM</div>
                    <div className="glance-facilitators">Yarixa Ferrao</div>
                  </div>
                </td>
                <td className="glance-event-cell">
                  <div className="glance-event-block" onClick={() => openEventModal('Interplay')}>
                    <div className="glance-title">Interplay</div>
                    <div className="glance-actual-time">7:15–9:15 PM</div>
                    <div className="glance-facilitators">Peter Benjamin & Violet Starkey</div>
                  </div>
                </td>
                <td className="glance-event-cell">
                  <div className="glance-event-block" onClick={() => openEventModal('DanceEros: DeColonizing Erotic Movement')}>
                    <div className="glance-title">DanceEros: DeColonizing Erotic Movement</div>
                    <div className="glance-actual-time">7:15–9:15 PM</div>
                    <div className="glance-facilitators">Victor Warring</div>
                  </div>
                </td>
                <td className="glance-event-cell"></td>
                <td className="glance-event-cell"></td>
              </tr>

              {/* 9:45 PM–1:00 AM */}
              <tr className="glance-time-row">
                <td className="glance-time-cell">9:45 PM–1:00 AM</td>
                <td className="glance-event-cell"></td>
                <td className="glance-event-cell">
                  <div className="glance-event-block" onClick={() => openEventModal('Embodying Intimacy Temple')}>
                    <div className="glance-title">Embodying Intimacy Temple</div>
                    <div className="glance-actual-time">9:45 PM–1:00 AM</div>
                    <div className="glance-facilitators">Rachel Rickards</div>
                  </div>
                </td>
                <td className="glance-event-cell">
                  <div className="glance-event-block" onClick={() => openEventModal('Touch as Prayer')}>
                    <div className="glance-title">Touch as Prayer</div>
                    <div className="glance-actual-time">9:45–11:00 PM</div>
                    <div className="glance-facilitators">Signa</div>
                  </div>
                </td>
                <td className="glance-event-cell"></td>
                <td className="glance-event-cell"></td>
              </tr>

              {/* 11:00 PM–1:00 AM */}
              <tr className="glance-time-row">
                <td className="glance-time-cell">11:00 PM–1:00 AM</td>
                <td className="glance-event-cell"></td>
                <td className="glance-event-cell"></td>
                <td className="glance-event-cell">
                  <div className="glance-event-block" onClick={() => openEventModal('Connection, Decompression, & Integration Temple')}>
                    <div className="glance-title">Connection, Decompression, & Integration Temple</div>
                    <div className="glance-actual-time">11:00 PM–1:00 AM</div>
                    <div className="glance-facilitators">Michaela Winters</div>
                  </div>
                </td>
                <td className="glance-event-cell"></td>
                <td className="glance-event-cell"></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      )}

      {/* Saturday At a Glance Grid */}
      {(selectedDay === null || selectedDay === 'Saturday 7/4') && (
      <div className="saturday-glance-container">
        <h2 className="saturday-glance-title">Saturday At a Glance</h2>
        <div className="swipe-hint">← Swipe to see all venues →</div>
        <div className="saturday-glance-wrapper" onScroll={(e) => handleGridScroll(e, 'saturday')} onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
          <table className="saturday-glance-grid">
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
              {/* Breakfast Meal Row */}
              <tr className="meal-banner-row">
                <td colSpan="6" className="meal-banner-cell">
                  <div className="meal-banner-content">
                    <span className="meal-badge">Meal</span>
                    <span className="meal-title">Breakfast</span>
                    <span className="meal-divider">•</span>
                    <span className="meal-time">7:30 AM–9:00 AM</span>
                    <span className="meal-divider">•</span>
                    <span className="meal-location">Dining Hall</span>
                  </div>
                </td>
              </tr>
              {/* 8:15–9:30 AM */}
              <tr className="glance-time-row">
                <td className="glance-time-cell">8:15–9:30 AM</td>
                <td className="glance-event-cell">
                  <div className="glance-event-block" onClick={() => openEventModal('Heart Connection')}>
                    <div className="glance-title">Heart Connection</div>
                    <div className="glance-actual-time">8:45–9:45 AM</div>
                    <div className="glance-facilitators">Chloe Good</div>
                  </div>
                </td>
                <td className="glance-event-cell">
                  <div className="glance-event-block" onClick={() => openEventModal('REVEL Grief, Eros and Dance Ritual')}>
                    <div className="glance-title">REVEL Grief, Eros and Dance Ritual</div>
                    <div className="glance-actual-time">9am–12pm</div>
                    <div className="glance-facilitators">John Wolfstone, Cari Caldwell & Yana</div>
                  </div>
                </td>
                <td className="glance-event-cell">
                  <div className="glance-event-block" onClick={() => openEventModal('5Rhythms')}>
                    <div className="glance-title">5Rhythms</div>
                    <div className="glance-actual-time">8:15–9:30 AM</div>
                    <div className="glance-facilitators">Nima Yazdanfar</div>
                  </div>
                </td>
                <td className="glance-event-cell">
                  <div className="glance-event-block" onClick={() => openEventModal('Meditation')}>
                    <div className="glance-title">Meditation</div>
                    <div className="glance-actual-time">8:30–9:30 AM</div>
                    <div className="glance-facilitators">Maxwell Wilson</div>
                  </div>
                </td>
                <td className="glance-event-cell"></td>
              </tr>

              {/* 10:00 AM–12:00 PM */}
              <tr className="glance-time-row">
                <td className="glance-time-cell">10:00 AM–12:00 PM</td>
                <td className="glance-event-cell">
                  <div className="glance-event-block" onClick={() => openEventModal('Dance Church')}>
                    <div className="glance-title">Dance Church</div>
                    <div className="glance-actual-time">10:00 AM–12:00 PM</div>
                    <div className="glance-facilitators">Tribal DreamZ</div>
                  </div>
                </td>
                <td className="glance-event-cell"></td>
                <td className="glance-event-cell">
                  <div className="glance-event-block" onClick={() => openEventModal("Brotherhood Lodge")}>
                    <div className="glance-title">Brotherhood Lodge</div>
                    <div className="glance-actual-time">10:00 AM–12:00 PM</div>
                    <div className="glance-facilitators">Ben Raya</div>
                  </div>
                </td>
                <td className="glance-event-cell">
                  <div className="glance-event-block" onClick={() => openEventModal('The Future of our Field: Facilitating intimacy, dance, and erotic communities - Zahava Griss, Victor Warring, Dr. Hazel-Grace Yates')}>
                    <div className="glance-title">The Future of our Field</div>
                    <div className="glance-actual-time">10:00–11:30 AM</div>
                    <div className="glance-subtitle">Facilitating intimacy, dance, and erotic communities</div>
                    <div className="glance-facilitators">Zahava Griss, Victor Warring & Dr. Hazel-Grace Yates</div>
                  </div>
                </td>
                <td className="glance-event-cell"></td>
              </tr>

              {/* 11:30 AM–12:15 PM */}
              <tr className="glance-time-row">
                <td className="glance-time-cell">11:30 AM–12:15 PM</td>
                <td className="glance-event-cell"></td>
                <td className="glance-event-cell"></td>
                <td className="glance-event-cell"></td>
                <td className="glance-event-cell">
                  <div className="glance-event-block" onClick={() => openEventModal('Talk Kinky to Me')}>
                    <div className="glance-title">Talk Kinky to Me</div>
                    <div className="glance-actual-time">11:30 AM–12:15 PM</div>
                    <div className="glance-facilitators">Sasha Loves You</div>
                  </div>
                </td>
                <td className="glance-event-cell"></td>
              </tr>

              {/* Lunch Meal Row */}
              <tr className="meal-banner-row">
                <td colSpan="6" className="meal-banner-cell">
                  <div className="meal-banner-content">
                    <span className="meal-badge">Meal</span>
                    <span className="meal-title">Lunch</span>
                    <span className="meal-divider">•</span>
                    <span className="meal-time">12:00 PM–1:30 PM</span>
                    <span className="meal-divider">•</span>
                    <span className="meal-location">Dining Hall</span>
                  </div>
                </td>
              </tr>

              {/* 1:30–3:30 PM */}
              <tr className="glance-time-row">
                <td className="glance-time-cell">1:30–3:30 PM</td>
                <td className="glance-event-cell">
                  <div className="glance-event-block" onClick={() => openEventModal('Embodying Authenticity & Integrity')}>
                    <div className="glance-title">Embodying Authenticity & Integrity</div>
                    <div className="glance-actual-time">1:30–3:30 PM</div>
                    <div className="glance-facilitators">Movement by Design</div>
                  </div>
                </td>
                <td className="glance-event-cell">
                  <div className="glance-event-block" onClick={() => openEventModal('Belly2Belly')}>
                    <div className="glance-title">Belly2Belly</div>
                    <div className="glance-actual-time">1:30–3:30 PM</div>
                    <div className="glance-facilitators">Rachel Rickards</div>
                  </div>
                </td>
                <td className="glance-event-cell">
                  <div className="glance-event-block" onClick={() => openEventModal('Dancing with Death')}>
                    <div className="glance-title">Dancing with Death</div>
                    <div className="glance-actual-time">1:30–3:30 PM</div>
                    <div className="glance-facilitators">Atilla Cidam</div>
                  </div>
                </td>
                <td className="glance-event-cell">
                  <div className="glance-event-block" onClick={() => openEventModal('Transmuting Anger Into Bliss')}>
                    <div className="glance-title">Transmuting Anger Into Bliss</div>
                    <div className="glance-actual-time">1:30–2:30 PM</div>
                    <div className="glance-facilitators">Ethan Henson</div>
                  </div>
                </td>
                <td className="glance-event-cell"></td>
              </tr>

              {/* 2:30–3:30 PM */}
              <tr className="glance-time-row">
                <td className="glance-time-cell">2:30–3:30 PM</td>
                <td className="glance-event-cell"></td>
                <td className="glance-event-cell"></td>
                <td className="glance-event-cell"></td>
                <td className="glance-event-cell">
                  <div className="glance-event-block" onClick={() => openEventModal('Inheritance Talks')}>
                    <div className="glance-title">Inheritance Talks</div>
                    <div className="glance-actual-time">2:30–3:30 PM</div>
                    <div className="glance-facilitators">Ali Katz</div>
                  </div>
                </td>
                <td className="glance-event-cell"></td>
              </tr>

              {/* 4:00–6:00 PM */}
              <tr className="glance-time-row">
                <td className="glance-time-cell">4:00–6:00 PM</td>
                <td className="glance-event-cell">
                  <div className="glance-event-block" onClick={() => openEventModal('Power Play: Dancing with Domination and Submission')}>
                    <div className="glance-title">Power Play: Dancing with Domination and Submission</div>
                    <div className="glance-actual-time">4:00–6:00 PM</div>
                    <div className="glance-facilitators">Zahava Griss</div>
                  </div>
                </td>
                <td className="glance-event-cell">
                  <div className="glance-event-block" onClick={() => openEventModal('The Art of REPAIR - Turning Conflict into Connection')}>
                    <div className="glance-title">The Art of REPAIR</div>
                    <div className="glance-actual-time">4:00–5:30 PM</div>
                    <div className="glance-facilitators">Dr. Hazel-Grace Yates</div>
                  </div>
                </td>
                <td className="glance-event-cell">
                  <div className="glance-event-block" onClick={() => openEventModal('Feel Your Gravity (Women Only)')}>
                    <div className="glance-title">Feel Your Gravity (Women Only)</div>
                    <div className="glance-actual-time">4:00–6:00 PM</div>
                    <div className="glance-facilitators">Ali, Courtney & Jehaan Rehman</div>
                  </div>
                </td>
                <td className="glance-event-cell">
                  <div className="glance-event-block" onClick={() => openEventModal('Spicy Interplay: Flirting')}>
                    <div className="glance-title">Spicy Interplay: Flirting</div>
                    <div className="glance-actual-time">4:00–6:00 PM</div>
                    <div className="glance-facilitators">Peter Benjamin & Violet Starkey</div>
                  </div>
                </td>
                <td className="glance-event-cell"></td>
              </tr>

              {/* Dinner Meal Row */}
              <tr className="meal-banner-row">
                <td colSpan="6" className="meal-banner-cell">
                  <div className="meal-banner-content">
                    <span className="meal-badge">Meal</span>
                    <span className="meal-title">Dinner</span>
                    <span className="meal-divider">•</span>
                    <span className="meal-time">5:30 PM–7:00 PM</span>
                    <span className="meal-divider">•</span>
                    <span className="meal-location">Dining Hall</span>
                  </div>
                </td>
              </tr>

              {/* 7:15–9:15 PM */}
              <tr className="glance-time-row">
                <td className="glance-time-cell">7:15–9:15 PM</td>
                <td className="glance-event-cell">
                  <div className="glance-event-block" onClick={() => openEventModal('The Human Experience')}>
                    <div className="glance-title">The Human Experience</div>
                    <div className="glance-actual-time">7:15–9:15 PM</div>
                    <div className="glance-facilitators">David Block</div>
                  </div>
                </td>
                <td className="glance-event-cell"></td>
                <td className="glance-event-cell"></td>
                <td className="glance-event-cell"></td>
                <td className="glance-event-cell"></td>
              </tr>

              {/* 9:45 PM–1:00 AM */}
              <tr className="glance-time-row">
                <td className="glance-time-cell">9:45 PM–1:00 AM</td>
                <td className="glance-event-cell"></td>
                <td className="glance-event-cell">
                  <div className="glance-event-block" onClick={() => openEventModal('Temple of Desire: Death & Re-birth')}>
                    <div className="glance-title">Temple of Desire: Death & Re-birth</div>
                    <div className="glance-actual-time">9:45 PM–1:00 AM</div>
                    <div className="glance-facilitators">Spencer Jacobson</div>
                  </div>
                </td>
                <td className="glance-event-cell">
                  <div className="glance-event-block" onClick={() => openEventModal('Downtempo Cuddle, Improvisational Music, Tea Lounge')}>
                    <div className="glance-title">Downtempo Cuddle, Improvisational Music, Tea Lounge</div>
                    <div className="glance-actual-time">10:00 PM–1:00 AM</div>
                    <div className="glance-facilitators">Erica Shapiro & Elowan</div>
                  </div>
                </td>
                <td className="glance-event-cell"></td>
                <td className="glance-event-cell"></td>
              </tr>

              {/* 12:00 AM–1:00 AM */}
              <tr className="glance-time-row">
                <td className="glance-time-cell">12:00–1:00 AM</td>
                <td className="glance-event-cell"></td>
                <td className="glance-event-cell">
                  <div className="glance-event-block" onClick={() => openEventModal('Live set by Will Sage')}>
                    <div className="glance-title">Live set by Will Sage</div>
                    <div className="glance-actual-time">12:00–1:00 AM</div>
                    <div className="glance-facilitators">Will Sage</div>
                  </div>
                </td>
                <td className="glance-event-cell"></td>
                <td className="glance-event-cell"></td>
                <td className="glance-event-cell"></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      )}

      {/* Sunday At a Glance Grid */}
      {(selectedDay === null || selectedDay === 'Sunday 7/5') && (
      <div className="friday-glance-container">
        <h2 className="friday-glance-title">Sunday At a Glance</h2>
        <div className="swipe-hint">← Swipe to see all venues →</div>
        <div className="friday-glance-wrapper" onScroll={(e) => handleGridScroll(e, 'sunday')} onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
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
              {/* Breakfast Meal Row */}
              <tr className="meal-banner-row">
                <td colSpan="6" className="meal-banner-cell">
                  <div className="meal-banner-content">
                    <span className="meal-badge">Meal</span>
                    <span className="meal-title">Breakfast</span>
                    <span className="meal-divider">•</span>
                    <span className="meal-time">7:30 AM–9:00 AM</span>
                    <span className="meal-divider">•</span>
                    <span className="meal-location">Dining Hall</span>
                  </div>
                </td>
              </tr>
              {/* 8:15–9:45 AM */}
              <tr className="glance-time-row">
                <td className="glance-time-cell">8:15–9:45 AM</td>
                <td className="glance-event-cell">
                  <div className="glance-event-block" onClick={() => openEventModal('Initiation', 'Sunday 7/5')}>
                    <div className="glance-title">Initiation</div>
                    <div className="glance-actual-time">8:15–9:30 AM</div>
                    <div className="glance-facilitators">Movement by Design</div>
                  </div>
                </td>
                <td className="glance-event-cell">
                  <div className="glance-event-block" onClick={() => openEventModal('Getting Regular - Embodied Integration')}>
                    <div className="glance-title">Getting Regular - Embodied Integration</div>
                    <div className="glance-actual-time">9:00–9:45 AM</div>
                    <div className="glance-facilitators">Devorah Bry</div>
                  </div>
                </td>
                <td className="glance-event-cell">
                  <div className="glance-event-block" onClick={() => openEventModal('Shamanic Bondage')}>
                    <div className="glance-title">Shamanic Bondage</div>
                    <div className="glance-actual-time">8:30–9:45 AM</div>
                    <div className="glance-facilitators">Sequoia & Signa</div>
                  </div>
                </td>
                <td className="glance-event-cell"></td>
                <td className="glance-event-cell"></td>
              </tr>

              {/* 10:00–11:45 AM */}
              <tr className="glance-time-row">
                <td className="glance-time-cell">10:00–11:45 AM</td>
                <td className="glance-event-cell">
                  <div className="glance-event-block" onClick={() => openEventModal('Dance Church')}>
                    <div className="glance-title">Dance Church</div>
                    <div className="glance-actual-time">10:00–11:30 AM</div>
                    <div className="glance-facilitators">Codestar</div>
                  </div>
                </td>
                <td className="glance-event-cell"></td>
                <td className="glance-event-cell"></td>
                <td className="glance-event-cell"></td>
                <td className="glance-event-cell"></td>
              </tr>

              {/* Lunch Meal Row */}
              <tr className="meal-banner-row">
                <td colSpan="6" className="meal-banner-cell">
                  <div className="meal-banner-content">
                    <span className="meal-badge">Meal</span>
                    <span className="meal-title">Lunch</span>
                    <span className="meal-divider">•</span>
                    <span className="meal-time">12:00 PM–1:30 PM</span>
                    <span className="meal-divider">•</span>
                    <span className="meal-location">Dining Hall</span>
                  </div>
                </td>
              </tr>

              {/* 11:30 AM–12:30 PM */}
              <tr className="glance-time-row">
                <td className="glance-time-cell">11:30 AM–12:30 PM</td>
                <td className="glance-event-cell">
                  <div className="glance-event-block" onClick={() => openEventModal('Closing Ceremony')}>
                    <div className="glance-title">Closing Ceremony</div>
                    <div className="glance-actual-time">11:30 AM–12:30 PM</div>
                    <div className="glance-facilitators">Spencer Jacobson & Lyndsey Scott</div>
                  </div>
                </td>
                <td className="glance-event-cell"></td>
                <td className="glance-event-cell"></td>
                <td className="glance-event-cell"></td>
                <td className="glance-event-cell"></td>
              </tr>

              {/* 2:00–3:00 PM */}
              <tr className="glance-time-row">
                <td className="glance-time-cell">2:00–3:00 PM</td>
                <td className="glance-event-cell"></td>
                <td className="glance-event-cell"></td>
                <td className="glance-event-cell"></td>
                <td className="glance-event-cell"></td>
                <td className="glance-event-cell"></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      )}

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
                  const eventType = event.type || getEventType(event.title);

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

      {/* CTA Section */}
      <section className="schedule-cta">
        <div className="cta-container">
          <h3 className="cta-heading">Ready to experience REVEL?</h3>
          <a href="https://events.humanitix.com/revel2026" target="_blank" rel="noopener noreferrer" className="buy-tickets-btn buy-tickets-btn-large">
            Get Your Tickets Now
          </a>
        </div>
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

    {/* Event Modal */}
    {modalEvent && (
      <div className="event-modal-overlay" onClick={closeModal}>
        <div className="event-modal" onClick={(e) => e.stopPropagation()}>
          <button className="modal-close-btn" onClick={closeModal}>&times;</button>
          
          <div className="modal-content">
            {/* Facilitator Photo and Name - Full Width at Top */}
            {modalEvent.facilitators && modalEvent.facilitators.length > 0 && (
              <>
                <div className="facilitator-modal-card-header">
                  {modalEvent.facilitators.map((facName, idx) => {
                    const fac = facilitatorData.getFacilitators([facName])?.[0];
                    if (!fac) return null;
                    
                    return (
                      <div key={idx} className="facilitator-top-section">
                        {fac.photo && (
                          <div className="modal-fac-image">
                            <img src={fac.photo} alt={fac.name} />
                          </div>
                        )}
                        <h4 className="modal-fac-name">{fac.name}</h4>
                      </div>
                    );
                  })}
                </div>
                <div className="facilitator-top-divider"></div>
              </>
            )}

            <div className="modal-header">
              <h2 className="modal-title">{modalEvent.title}</h2>
              {modalEvent.isMandatory && <span className="modal-tag">Mandatory</span>}
            </div>

            {(modalEvent.title.includes('Temple') && (modalEvent.title.includes('Intimacy') || modalEvent.title.includes('Desire'))) && (
              <div className="modal-door-policy">
                ⏰ DOORS OPEN 9:30 PM | DOORS CLOSE 9:55 PM | No exceptions
              </div>
            )}

            <div className="modal-meta">
              <p className="modal-time">{modalEvent.time}</p>
              <p className="modal-space">{modalEvent.space}</p>
            </div>

            {modalEvent.description && (
              <div className="modal-description">
                <div className="description-divider"></div>
                {modalEvent.description.split('\n').map((para, idx) => (
                  <p key={idx}>{para}</p>
                ))}
              </div>
            )}

            {modalEvent.facilitators && modalEvent.facilitators.length > 0 && (
              <div className="modal-facilitators">
                <div className="facilitators-divider"></div>
                <h3 className="facilitators-heading">
                  Facilitator{modalEvent.facilitators.length > 1 ? 's' : ''}
                </h3>
                <div className="facilitators-list">
                  {modalEvent.facilitators.map((facName, idx) => {
                    const fac = facilitatorData.getFacilitators([facName])?.[0];
                    if (!fac || !fac.bio) return null;
                    
                    return (
                      <p key={idx} className="modal-fac-bio-section">{fac.bio}</p>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    )}
    </>
  );
}
