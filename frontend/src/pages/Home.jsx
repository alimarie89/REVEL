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
            <h2>Connection doesn't just happen.</h2>
            <p>It's actively created and sustained.</p>
          </div>
          <div 
            className="section-preview-cta"
            onClick={() => toggleSection('space-holds')}
          >
            <span>{expandedSection === 'space-holds' ? 'CLOSE' : 'READ MORE'}</span>
          </div>
          {expandedSection === 'space-holds' && (
            <div className="section-expanded">
              <p>This space is actively held.</p>
              <p>
                Not by one facilitator —<br />
                but collectively, by many people who know how to do this.
              </p>
              <ul>
                <li>Creating conditions where people feel safe enough to drop their guard.</li>
                <li>Guiding attention toward what's actually happening in the moment.</li>
                <li>Interrupting patterns that disconnect people.</li>
                <li>Inviting real contact instead of performance.</li>
                <li>Helping people stay present under intensity instead of checking out.</li>
                <li>Shaping the space so connection doesn't collapse or scatter.</li>
              </ul>
            </div>
          )}
        </div>
      </section>

      {/* ANCHOR LINE */}
      <section className="anchor">
        <h2>Connection only holds when people participate in it.</h2>
      </section>

      {/* THREE CARDS */}
      <section className="cards">
        <div className="card">
          <h3>Something real forms</h3>
          <p>
            You don't just meet people.<br />
            Something actually takes shape between you.
          </p>
        </div>
        <div className="card">
          <h3>You can go further</h3>
          <p>
            You're not bracing or performing in the same way.<br />
            More becomes accessible.
          </p>
        </div>
        <div className="card">
          <h3>It carries beyond</h3>
          <p>
            What happens here doesn't stay here.<br />
            It changes how you relate outside of it.
          </p>
        </div>
      </section>

      {/* TEAM / PEOPLE HOLDING THIS */}
      <section className="team">
        <div className="section-container">
          <div className="section-preview">
            <h2>This isn't held by one person.</h2>
            <p>It's held collectively.</p>
          </div>
          <div 
            className="section-preview-cta"
            onClick={() => toggleSection('team-info')}
          >
            <span>{expandedSection === 'team-info' ? 'CLOSE' : 'READ MORE'}</span>
          </div>
          {expandedSection === 'team-info' && (
            <div className="section-expanded">
              <p>
                REVEL is supported by a group of facilitators, artists, and leaders.
              </p>
              <p>
                Not just leading sessions —<br />
                but actively participating in the space as it unfolds.
              </p>
              <ul>
                <li>Creating conditions where people feel safe enough to drop their guard.</li>
                <li>Guiding attention toward what's actually happening in the moment.</li>
                <li>Interrupting patterns that disconnect people.</li>
                <li>Inviting real contact instead of performance.</li>
                <li>Helping people stay present under intensity instead of checking out.</li>
                <li>Shaping the space so connection doesn't collapse or scatter.</li>
              </ul>
              <p className="team-note">
                This is what allows the experience to go further than it normally would.
              </p>
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

      {/* WHO IT'S FOR */}
      <section className="who">
        <div className="section-container">
          <div className="section-preview">
            <h2>For people willing to participate</h2>
            <p>not just consume</p>
          </div>
          <div 
            className="section-preview-cta"
            onClick={() => toggleSection('who')}
          >
            <span>{expandedSection === 'who' ? 'CLOSE' : 'READ MORE'}</span>
          </div>
          {expandedSection === 'who' && (
            <div className="section-expanded">
              <p>This only works if you're willing to be in it.</p>
              <ul>
                <li>To be real in the moment.</li>
                <li>To engage instead of staying at a distance.</li>
                <li>To remain present when things get uncomfortable.</li>
              </ul>
              <p>
                If you're looking to be carried through an experience,<br />
                this probably won't land.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* INVITATION */}
      <section className="invitation">
        <p>If this resonates, you already feel it.</p>
      </section>

      {/* FINAL CTA */}
      <section className="final-cta">
        <h2>What lasts is what you help create.</h2>
        <a 
          href="https://events.humanitix.com/revel2026" 
          target="_blank" 
          rel="noopener noreferrer"
          className="cta-button primary large"
        >
          Apply to Join
        </a>
      </section>
    </div>
  )
}

export default Home
