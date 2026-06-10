import { useState } from 'react';
import { scheduleData } from '../data/scheduleData';
import { facilitatorData } from '../data/facilitatorData';
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

  const getFacilitatorList = (facilitatorNames) => {
    if (!facilitatorNames || facilitatorNames.length === 0) return [];
    return facilitatorData.getFacilitators(facilitatorNames);
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
                    const facilitators = getFacilitatorList(event.facilitators);

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

                          {/* Middle: Title & Facilitators */}
                          <div className="event-info-col">
                            <div className="event-header-inner">
                              <h3 className="event-title">{event.title}</h3>
                              {event.isMandatory && <span className="mandatory-badge">MANDATORY</span>}
                            </div>
                            <span className="event-space">{event.space}</span>
                            {facilitators.length > 0 && (
                              <div className="event-facilitators-names">
                                {facilitators.slice(0, 2).map((fac, idx) => (
                                  <span key={idx} className="facilitator-name">
                                    {fac.name}
                                  </span>
                                ))}
                                {facilitators.length > 2 && (
                                  <span className="facilitator-name more">+{facilitators.length - 2} more</span>
                                )}
                              </div>
                            )}
                          </div>

                          {/* Right: Facilitator Images */}
                          <div className="event-images-col">
                            {facilitators.length > 0 ? (
                              <div className="facilitator-images">
                                {facilitators.slice(0, 3).map((fac, idx) => (
                                  <div
                                    key={idx}
                                    className={`facilitator-image-wrapper ${facilitators.length > 1 ? 'overlapped' : ''}`}
                                    style={{
                                      zIndex: 3 - idx,
                                      marginLeft: idx > 0 ? `-14px` : '0'
                                    }}
                                    title={fac.name}
                                  >
                                    {fac.photo ? (
                                      <img src={fac.photo} alt={fac.name} className="facilitator-image" />
                                    ) : (
                                      createMonogram(fac.name)
                                    )}
                                  </div>
                                ))}
                              </div>
                            ) : (
                              <div className="facilitator-images empty" />
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
                                        <div className="facilitator-bio-image">
                                          {fac.photo ? (
                                            <img src={fac.photo} alt={fac.name} />
                                          ) : (
                                            createMonogram(fac.name)
                                          )}
                                        </div>
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
