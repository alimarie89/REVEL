import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/Home.css'

function Home() {
  const [expandedSection, setExpandedSection] = useState(null)
  const [selectedFacilitator, setSelectedFacilitator] = useState(null)
  const [selectedLevel, setSelectedLevel] = useState('individual')
  const [hoveredLevel, setHoveredLevel] = useState(null)

  const toggleSection = (id) => {
    setExpandedSection(expandedSection === id ? null : id)
  }

  const handleLevelClick = (level) => {
    setSelectedLevel(level)
    setHoveredLevel(null)
  }

  const handleLevelHover = (level) => {
    setHoveredLevel(level)
  }

  const handleLevelLeave = () => {
    setHoveredLevel(null)
  }

  const displayedLevel = hoveredLevel || selectedLevel || 'individual'

  const levels = [
    {
      id: 'individual',
      label: 'Self',
      title: 'Individual',
      question: 'Can I stay present with what is happening inside of me?',
      context: 'Safety is sourced in your ability to stay with yourself.'
    },
    {
      id: 'relational',
      label: 'Relational',
      title: 'Relational',
      question: 'Can I stay in real contact with another without performing?',
      context: 'When two people show up in full presence, something new forms between them.'
    },
    {
      id: 'group',
      label: 'Group',
      title: 'Group',
      question: 'What does it take for a group to stay coherent under pressure?',
      context: 'When individuals take responsibility for their impact, the field holds.'
    },
    {
      id: 'cultural',
      label: 'Cultural',
      title: 'Cultural',
      question: 'How do I carry what I practice here into the world?',
      context: 'What happens here shows up in how you live.'
    }
  ]

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

      {/* NAVIGATION TABS */}
      <nav className="page-tabs">
        <Link to="/" className="tab-link active">Experience</Link>
        <Link to="/team" className="tab-link">The Team</Link>
      </nav>

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

      {/* THE LEVELS OF PRESENCE */}
      <section className="levels-of-presence">
        <div className="section-container">
          <div className="levels-header">
            <h2>The Levels of Presence</h2>
            <p className="levels-subtitle">Presence moves through layers—self, relational, group, and beyond.</p>
          </div>

          <div className="levels-visualization">
            <div className="levels-circles">
              <div className="levels-rings">
                <div className={`level-ring ring-1 ${displayedLevel === 'individual' ? 'active' : ''} ${selectedLevel === 'individual' ? 'selected' : ''}`}></div>
                <div className={`level-ring ring-2 ${displayedLevel === 'relational' ? 'active' : ''} ${selectedLevel === 'relational' ? 'selected' : ''}`}></div>
                <div className={`level-ring ring-3 ${displayedLevel === 'group' ? 'active' : ''} ${selectedLevel === 'group' ? 'selected' : ''}`}></div>
                <div className={`level-ring ring-4 ${displayedLevel === 'cultural' ? 'active' : ''} ${selectedLevel === 'cultural' ? 'selected' : ''}`}></div>
                
                <svg 
                  className="rings-interactive" 
                  viewBox="0 0 400 400"
                  onMouseMove={(e) => {
                    const svg = e.currentTarget;
                    const rect = svg.getBoundingClientRect();
                    const centerX = rect.width / 2;
                    const centerY = rect.height / 2;
                    const mouseX = e.clientX - rect.left;
                    const mouseY = e.clientY - rect.top;
                    const distance = Math.sqrt((mouseX - centerX) ** 2 + (mouseY - centerY) ** 2) / Math.min(centerX, centerY);
                    
                    let level = 'cultural';
                    if (distance <= 0.25) level = 'individual';
                    else if (distance <= 0.50) level = 'relational';
                    else if (distance <= 0.77) level = 'group';
                    
                    handleLevelHover(level);
                  }}
                  onMouseLeave={handleLevelLeave}
                  onClick={(e) => {
                    const svg = e.currentTarget;
                    const rect = svg.getBoundingClientRect();
                    const centerX = rect.width / 2;
                    const centerY = rect.height / 2;
                    const mouseX = e.clientX - rect.left;
                    const mouseY = e.clientY - rect.top;
                    const distance = Math.sqrt((mouseX - centerX) ** 2 + (mouseY - centerY) ** 2) / Math.min(centerX, centerY);
                    
                    let level = 'cultural';
                    if (distance <= 0.25) level = 'individual';
                    else if (distance <= 0.50) level = 'relational';
                    else if (distance <= 0.77) level = 'group';
                    
                    handleLevelClick(level);
                  }}
                >
                  <circle cx="200" cy="200" r="200" fill="transparent" pointerEvents="auto" />
                </svg>
              </div>

              <div className="levels-labels">
                {levels.map((level) => (
                  <button
                    key={level.id}
                    className={`level-label-btn ${displayedLevel === level.id ? 'active' : ''} ${selectedLevel === level.id ? 'selected' : ''}`}
                    onMouseEnter={() => handleLevelHover(level.id)}
                    onMouseLeave={handleLevelLeave}
                    onClick={() => handleLevelClick(level.id)}
                  >
                    {level.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="levels-detail-panel">
              {levels.map((level) => (
                <div key={level.id} className={`level-content ${displayedLevel === level.id ? 'active' : ''}`}>
                  <h3>{level.title}</h3>
                  <p className="level-question">{level.question}</p>
                  <p className="level-context">{level.context}</p>
                </div>
              ))}
            </div>
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
              <div className="purpose-items">
                <div className="purpose-item">Conditions are created where people feel safe enough to drop their guard.</div>
                <div className="purpose-item">Attention is guided toward what's actually happening in the moment.</div>
                <div className="purpose-item">Patterns that disconnect people are interrupted.</div>
                <div className="purpose-item">Real contact is invited instead of performance.</div>
                <div className="purpose-item">People are helped to stay present under intensity instead of checking out.</div>
                <div className="purpose-item">The space is shaped so connection doesn't collapse or scatter.</div>
              </div>
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

        {/* LINK TO FULL TEAM PAGE */}
        <div className="team-full-link">
          <Link to="/team" className="see-full-team-cta">See the Full Team</Link>
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
