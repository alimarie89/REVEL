import React, { useState } from 'react'
import '../styles/Home.css'

function Home() {
  const [expandedSection, setExpandedSection] = useState(null)
  const [selectedFacilitator, setSelectedFacilitator] = useState(null)

  const toggleSection = (id) => {
    setExpandedSection(expandedSection === id ? null : id)
  }

  const facilitators = [
    {
      id: 1,
      name: 'Alison Williams',
      role: 'Founder & Lead Facilitator',
      description: 'Holds the vision and container for REVEL. 10+ years in somatic practices, tantra, and conscious community.',
      photo: '/facilitator-1.jpg',
      bio: 'Alison holds the vision and container for REVEL. She brings 10+ years of experience in somatic practices, tantra, and conscious community building.'
    },
    {
      id: 2,
      name: 'TBD',
      role: 'TBD',
      description: 'World-class facilitator joining the REVEL faculty.',
      photo: '/facilitator-2.jpg',
      bio: 'Coming soon. We are curating world-class facilitators and artists to join the REVEL faculty.'
    },
    {
      id: 3,
      name: 'TBD',
      role: 'TBD',
      description: 'World-class facilitator joining the REVEL faculty.',
      photo: '/facilitator-3.jpg',
      bio: 'Coming soon. We are curating world-class facilitators and artists to join the REVEL faculty.'
    },
    {
      id: 4,
      name: 'TBD',
      role: 'TBD',
      description: 'World-class facilitator joining the REVEL faculty.',
      photo: '/facilitator-4.jpg',
      bio: 'Coming soon. We are curating world-class facilitators and artists to join the REVEL faculty.'
    },
    {
      id: 5,
      name: 'TBD',
      role: 'TBD',
      description: 'World-class facilitator joining the REVEL faculty.',
      photo: '/facilitator-5.jpg',
      bio: 'Coming soon. We are curating world-class facilitators and artists to join the REVEL faculty.'
    },
    {
      id: 6,
      name: 'TBD',
      role: 'TBD',
      description: 'World-class facilitator joining the REVEL faculty.',
      photo: '/facilitator-6.jpg',
      bio: 'Coming soon. We are curating world-class facilitators and artists to join the REVEL faculty.'
    }
  ]

  return (
    <div className="home">
      {/* HERO */}
      <section className="hero" style={{backgroundImage: 'url(/revel-background-only.png)'}}>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">An intimate community gathering at the intersection of ritual, dance, embodiment and collective awakening where connection is built to last.</h1>
          <p className="hero-sub">
            This isn't just about who you meet.<br />
            It's about who you keep.
          </p>
          <a 
            href="https://events.humanitix.com/revel2026" 
            target="_blank" 
            rel="noopener noreferrer"
            className="cta-button primary"
          >
            Apply to Join
          </a>
        </div>
      </section>

      {/* HOW THE SPACE HOLDS */}
      <section className="space-holds">
        <div className="section-container">
          <div className="section-preview">
            <h2>Cocreate the field with us</h2>
            <p>instead of just consuming it.</p>
          </div>
          <div className="section-expanded">
            <h3 style={{fontSize: '1.5rem', color: 'var(--text-light)', fontStyle: 'italic', fontFamily: "'Laluxess Serif', serif", margin: '40px 0 20px 0', fontWeight: '300'}}>What does it mean to be a co-creative participant?</h3>
            <ul>
              <li>To be real in the moment.</li>
              <li>To engage instead of staying at a distance.</li>
              <li>To remain present when things get uncomfortable.</li>
            </ul>
            <p style={{marginTop: '30px'}}>
              We're all stepping in to self regulation, self containment, and adult consciousness.
            </p>
          </div>
        </div>
      </section>

      {/* THREE PILLARS */}
      <section className="cards">
        <div className="section-container">
          <h2 style={{textAlign: 'center', fontSize: '2.5rem', fontWeight: '300', margin: '0', fontFamily: "'Laluxess Serif', serif", fontStyle: 'italic'}}>The three pillars of conscious evolution</h2>
        </div>
        <div className="cards-grid">
          <div className="card">
            <h3>Relational Field</h3>
            <p className="card-question">What happens when two people show up in full presence?</p>
            <p className="card-answer">Something new forms between them.</p>
          </div>
          <div className="card">
            <h3>Group Field</h3>
            <p className="card-question">What happens when you aren't bracing or performing?</p>
            <p className="card-answer">Liberation becomes possible.</p>
          </div>
          <div className="card">
            <h3>Cultural Field</h3>
            <p className="card-question">What happens when you take what you have learned out into the world?</p>
            <p className="card-answer">It changes the world around you.</p>
          </div>
        </div>
      </section>

      {/* TEAM / PEOPLE HOLDING THIS */}
      <section className="team">
        <div className="section-container">
          <div className="section-preview">
            <h2>What happens when world class facilitators hold the field collectively?</h2>
          </div>
          <div 
            className="section-preview-cta"
            onClick={() => toggleSection('team-info')}
          >
            <span>{expandedSection === 'team-info' ? 'CLOSE' : 'READ MORE'}</span>
          </div>
          {expandedSection === 'team-info' && (
            <div className="section-expanded">
              <ul>
                <li>Conditions are created where people feel safe enough to drop their guard.</li>
                <li>Attention is guided toward what's actually happening in the moment.</li>
                <li>Patterns that disconnect people are interrupted.</li>
                <li>Real contact is invited instead of performance.</li>
                <li>People are helped to stay present under intensity instead of checking out.</li>
                <li>The space is shaped so connection doesn't collapse or scatter.</li>
              </ul>
            </div>
          )}
        </div>

        {/* TEAM GRID */}
        <div className="team-grid">
          <h3>Meet the Team</h3>
          <div className="facilitators-grid">
            {facilitators.map((facilitator) => (
              <div 
                key={facilitator.id} 
                className="facilitator-photo-slot"
                onClick={() => setSelectedFacilitator(selectedFacilitator?.id === facilitator.id ? null : facilitator)}
              >
                <div className="facilitator-photo-wrapper">
                  <img src={facilitator.photo} alt={facilitator.name} className="facilitator-photo" />
                </div>
                <div className="facilitator-info">
                  <p className="facilitator-name">{facilitator.name}</p>
                  <p className="facilitator-role">{facilitator.role}</p>
                  <p className="facilitator-description">{facilitator.description}</p>
                  <p className="facilitator-read-more">Click to learn more →</p>
                </div>
              </div>
            ))}
          </div>

          {selectedFacilitator && (
            <div className="facilitator-modal-overlay" onClick={() => setSelectedFacilitator(null)}>
              <div className="facilitator-modal" onClick={(e) => e.stopPropagation()}>
                <button className="modal-close" onClick={() => setSelectedFacilitator(null)}>✕</button>
                <div className="modal-content">
                  <img src={selectedFacilitator.photo} alt={selectedFacilitator.name} className="modal-photo" />
                  <div className="modal-text">
                    <h3>{selectedFacilitator.name}</h3>
                    <p className="modal-role">{selectedFacilitator.role}</p>
                    <p className="modal-bio">{selectedFacilitator.bio}</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* WHAT YOU'LL EXPERIENCE */}
      <section className="space-holds">
        <div className="section-container">
          <div className="section-preview">
            <h2>Do you have a love of dance, nature, connection, eros, and personal growth?</h2>
          </div>
          <div 
            className="section-preview-cta"
            onClick={() => toggleSection('experience')}
          >
            <span>{expandedSection === 'experience' ? 'CLOSE' : 'yes tell me more about the experience'}</span>
          </div>
          {expandedSection === 'experience' && (
            <div className="section-expanded">
              <p>
                Your morning begins with presence. You wake in a container held by people who know how to do this. There's ritual, embodied practice, movement that wakes your body and opens your field.
              </p>
              <p>
                Throughout the day, you move between intimate circles and collective experience. You dance. You sit in conversation with people who show up as themselves. You taste food that's shared with intention. You spend time in nature, feeling the earth and sky.
              </p>
              <p>
                There are moments of intensity where connection deepens beyond what normally happens. There are moments of softness where you're held. You're invited into your own aliveness—not performing it, actually living it.
              </p>
              <p>
                The evening gathers you again. There's ritual, music, dance, intimacy. You end each day integrated, more alive, more real.
              </p>
              <p>
                And through it all, the people holding this space are in it with you—not teaching from the front, but co-creating what's alive and possible.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* INVITATION */}
      <section className="invitation">
        <p>This is not a festival. It is an investment in our cultural evolution.</p>
      </section>

      {/* FINAL CTA */}
      <section className="final-cta">
        <h2>Are you a key player in this time of great change?</h2>
        <a 
          href="https://events.humanitix.com/revel2026" 
          target="_blank" 
          rel="noopener noreferrer"
          className="cta-button primary large"
        >
          YES
        </a>
      </section>
    </div>
  )
}

export default Home
