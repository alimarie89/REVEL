import { useState } from 'react';
import { scheduleData } from '../data/scheduleData';
import '../styles/Schedule.css';

export default function Schedule() {
  const [selectedSpace, setSelectedSpace] = useState(null);
  const [expandedEvent, setExpandedEvent] = useState(null);

  const filteredEvents = selectedSpace
    ? scheduleData.events.filter(event => event.space === selectedSpace)
    : scheduleData.events;

  const eventsByDay = scheduleData.eventDates.reduce((acc, day) => {
    acc[day] = filteredEvents.filter(event => event.day === day);
    return acc;
  }, {});

  const toggleEventExpand = (eventId) => {
    setExpandedEvent(expandedEvent === eventId ? null : eventId);
  };

  const getEventId = (event, index) => `${event.day}-${event.time}-${index}`;

  return (
    <div className="schedule-page">
      {/* Hero Section */}
      <section className="schedule-hero">
        <div className="section-container">
          <h1 className="schedule-title">REVEL 2026 Schedule</h1>
          <p className="schedule-subtitle">July 2-5 | Sunrise Ranch, Loveland CO</p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="schedule-filters">
        <div className="section-container">
          <div className="filters-wrapper">
            <p className="filter-label">Filter by Space:</p>
            <div className="space-filters">
              <button
                className={`space-filter-btn ${selectedSpace === null ? 'active' : ''}`}
                onClick={() => setSelectedSpace(null)}
              >
                All Spaces
              </button>
              {scheduleData.spaces.map(space => (
                <button
                  key={space}
                  className={`space-filter-btn ${selectedSpace === space ? 'active' : ''}`}
                  onClick={() => setSelectedSpace(space)}
                >
                  {space}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Schedule Grid */}
      <section className="schedule-content">
        <div className="section-container">
          {scheduleData.eventDates.map(day => (
            <div key={day} className="day-section">
              <h2 className="day-title">{day}</h2>
              <div className="events-list">
                {eventsByDay[day]?.length > 0 ? (
                  eventsByDay[day].map((event, index) => {
                    const eventId = getEventId(event, index);
                    const isExpanded = expandedEvent === eventId;
                    return (
                      <div
                        key={eventId}
                        className={`event-card ${isExpanded ? 'expanded' : ''} ${event.isMandatory ? 'mandatory' : ''}`}
                        onClick={() => toggleEventExpand(eventId)}
                      >
                        <div className="event-header">
                          <div className="event-time-and-title">
                            <span className="event-time">{event.time}</span>
                            <h3 className="event-title">{event.title}</h3>
                            {event.isMandatory && <span className="mandatory-badge">MANDATORY</span>}
                          </div>
                          <span className="event-space">{event.space}</span>
                        </div>

                        {event.facilitators.length > 0 && (
                          <div className="event-facilitators">
                            {event.facilitators.map((facilitator, idx) => (
                              <span key={idx} className="facilitator-name">
                                {facilitator}
                              </span>
                            ))}
                          </div>
                        )}

                        {isExpanded && event.description && (
                          <div className="event-description">
                            {event.description.split('\n').map((para, idx) => (
                              <p key={idx}>{para}</p>
                            ))}
                          </div>
                        )}

                        {event.description && (
                          <div className="event-expand-indicator">
                            {isExpanded ? '−' : '+'}
                          </div>
                        )}
                      </div>
                    );
                  })
                ) : (
                  <p className="no-events">No events scheduled for this space on this day.</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Legend / Info */}
      <section className="schedule-info">
        <div className="section-container">
          <div className="info-content">
            <h3>How to Use This Schedule</h3>
            <ul>
              <li>Click "Filter by Space" at the top to explore workshops and experiences in each location</li>
              <li>Click any event card to see the full description</li>
              <li>All times are in Mountain Time (MT)</li>
              <li>Some workshops run simultaneously in different spaces—choose which calls to you</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
