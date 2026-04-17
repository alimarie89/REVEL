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
      title: 'Individual Field',
      subheader: '(Interoception)',
      question: 'Can I stay present with what is happening inside of me?',
      context: 'Safety is sourced in your ability to stay with yourself.'
    },
    {
      id: 'relational',
      label: 'Relational',
      title: 'Relational Field',
      subheader: '(Attunement)',
      question: 'Can I stay in real contact with another without performing?',
      context: 'When two people show up in full presence, something new forms between them.'
    },
    {
      id: 'group',
      label: 'Group',
      title: 'Group Field',
      subheader: '(Collective Attunement)',
      question: 'What does it take for a group to stay coherent under pressure?',
      context: 'When individuals take responsibility for their impact, the field holds.'
    },
    {
      id: 'cultural',
      label: 'Cultural',
      title: 'Cultural Field',
      subheader: '(Stewardship)',
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
      <section
        className="hero revel-hero"
        style={{ backgroundImage: 'url("/REVEL Backdrop Horizontal.jpg")' }}
      >
        <div className="hero-overlay"></div>

        <div className="hero-content revel-hero-content">
          <div className="revel-hero-inner">
            <h1 className="revel-hero-title">REVEL</h1>

            <div className="revel-hero-positioning">
              <p>More intimate than a festival.</p>
              <p>More expansive than a retreat.</p>
            </div>

            <div className="revel-hero-tagline">
              <p>This isn't just about who you meet.</p>
              <p>It's about who you keep.</p>
            </div>

            <a
              href="https://events.humanitix.com/revel2026"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-button primary"
            >
              Apply to Join
            </a>
          </div>
        </div>
      </section>

      {/* NAVIGATION TABS */}
      <nav className="page-tabs">
        <Link to="/" className="tab-link active">Experience</Link>
        <Link to="/team" className="tab-link">The Team</Link>
      </nav>

      {/* 1. COCREATE THE FIELD */}
      <section className="space-holds cocreate-section">
        <div className="section-container">
          <div className="section-preview">
            <h2>Cocreate the field with us</h2>
            <p>instead of just consuming it.</p>
          </div>
          <div className="section-expanded">
            <div className="cocreate-invitations">
              <p className="cocreate-line">Be real in the moment.</p>
              <p className="cocreate-line">Engage instead of staying at a distance.</p>
              <p className="cocreate-line">Remain present when things get uncomfortable.</p>
            </div>
            <p className="cocreate-bridge">
              These are the levels of presence we cultivate together.
            </p>
          </div>
        </div>
      </section>

      {/* 2. THE FIELD OF PRESENCE */}
      <section className="concentric-circles-section">
        <div className="section-container">
          <div className="circles-header">
            <h2>The Field of Presence</h2>
            <p className="circles-subtitle">What we practice here becomes the world we live in</p>
          </div>

          <div className="circles-visualization">
            <div className="circles-column">
              <div className="circles-rings">
                <div className={`circle-ring ring-1 ${displayedLevel === 'individual' ? 'active' : ''} ${selectedLevel === 'individual' ? 'selected' : ''}`}></div>
                <div className={`circle-ring ring-2 ${displayedLevel === 'relational' ? 'active' : ''} ${selectedLevel === 'relational' ? 'selected' : ''}`}></div>
                <div className={`circle-ring ring-3 ${displayedLevel === 'group' ? 'active' : ''} ${selectedLevel === 'group' ? 'selected' : ''}`}></div>
                <div className={`circle-ring ring-4 ${displayedLevel === 'cultural' ? 'active' : ''} ${selectedLevel === 'cultural' ? 'selected' : ''}`}></div>
                
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

              <div className="circles-labels">
                {levels.map((level) => (
                  <button
                    key={level.id}
                    className={`circle-label-btn ${displayedLevel === level.id ? 'active' : ''} ${selectedLevel === level.id ? 'selected' : ''}`}
                    onMouseEnter={() => handleLevelHover(level.id)}
                    onMouseLeave={handleLevelLeave}
                    onClick={() => handleLevelClick(level.id)}
                  >
                    {level.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="circles-detail-panel">
              {levels.map((level) => (
                <div key={level.id} className={`detail-content ${displayedLevel === level.id ? 'active' : ''}`}>
                  <h3>{level.title}</h3>
                  <p className="circle-subheader">{level.subheader}</p>
                  <p className="circle-question">{level.question}</p>
                  <p className="circle-context">{level.context}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. HOW THE SPACE HOLDS */}
      <section className="space-holds how-space-holds">
        <div className="section-container">
          <div className="section-preview">
            <h2>How the space holds</h2>
          </div>
          <div 
            className="section-preview-cta"
            onClick={() => toggleSection('space-holds-info')}
          >
            <span>{expandedSection === 'space-holds-info' ? 'CLOSE' : 'READ MORE'}</span>
          </div>
          {expandedSection === 'space-holds-info' && (
            <div className="section-expanded">
              <div className="purpose-items">
                <div className="purpose-item">Create conditions where people feel safe enough to drop their guard</div>
                <div className="purpose-item">Direct attention toward what's actually happening in the moment</div>
                <div className="purpose-item">Interrupt and redirect performance into real contact</div>
                <div className="purpose-item">Support people in staying present when intensity rises</div>
                <div className="purpose-item">Stabilize the field so connection doesn't collapse or scatter</div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* 4. WHAT IT FEELS LIKE */}
      <section className="space-holds what-it-feels-like">
        <div className="section-container">
          <div className="section-preview">
            <h2>What it feels like</h2>
          </div>
          <div 
            className="section-preview-cta"
            onClick={() => toggleSection('experience')}
          >
            <span>{expandedSection === 'experience' ? 'CLOSE' : 'A day in the space'}</span>
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

      {/* 5. MEET THE TEAM */}
      <section className="team">
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
