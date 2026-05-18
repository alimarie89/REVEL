import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/Home.css'
import { useHomeContent } from '../hooks/useHomeContent'

function Home() {
  const { content } = useHomeContent()
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
      photo: '/team/alison-williams.jpg',
      bio: 'Alison holds the vision and container for REVEL. She brings 10+ years of experience in somatic practices, tantra, and conscious community building.'
    },
    {
      id: 2,
      name: 'Spencer Jacobson',
      role: 'Visionary',
      description: 'Brings vision and cultural stewardship to REVEL.',
      photo: '/team/spencer-jacobson.jpg',
      bio: 'Spencer brings vision and cultural stewardship. Coming soon for full bio.'
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
      {/* 1. HERO */}
      <section
        className="hero revel-hero"
        style={{ backgroundImage: 'url("/REVEL Backdrop Horizontal.jpg")' }}
      >
        <div className="hero-overlay"></div>

        <div className="hero-content revel-hero-content">
          <div className="revel-hero-inner">
            <p className="revel-hero-meta">July 2–5, 2026 · Sunrise Ranch, Colorado</p>

            <img src="/REVEL font.png" alt="REVEL" className="revel-hero-title-image" />

            <div className="revel-hero-positioning">
              {content?.heroTagline?.map((line, i) => (
                <p key={i}>{line}</p>
              ))}
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

      {/* 2. ORIENTATION LINE */}
      <section className="orientation-line">
        <div className="section-container">
          <p>{content?.orientationLine}</p>
        </div>
      </section>

      {/* 3. CO-CREATION INVITATION */}
      <section className="space-holds cocreate-section">
        <div className="section-container cocreate-with-team">
          <div className="cocreate-text">
            <div className="section-preview">
              <h2>Cocreate the field with us</h2>
              <p>instead of just consuming it.</p>
            </div>
            <div className="section-expanded">
              <div className="cocreate-invitations">
                {content?.cocreateInvitations?.map((invitation, i) => (
                  <p key={i} className="cocreate-line">{invitation}</p>
                ))}
              </div>
            </div>
          </div>
          <div className="cocreate-photos">
            <div className="cocreate-photo-card">
              <img src="/team/spencer-jacobson.jpg" alt="Spencer Jacobson" />
              <p className="photo-name">Spencer Jacobson</p>
              <p className="photo-title">Visionary</p>
            </div>
            <div className="cocreate-photo-card">
              <img src="/team/alison-williams.jpg" alt="Ali Williams" />
              <p className="photo-name">Ali Williams</p>
              <p className="photo-title">COO</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3.5 FACILITATORS SHOWCASE */}
      <section className="facilitators-showcase">
        <div className="section-container">
          <p className="facilitators-caption">Rub shoulders with world-class facilitators</p>
          <div className="facilitators-grid">
            <div className="facilitator-card">
              <img src="/facilitators/david-block.jpg" alt="David Block" />
              <p className="facilitator-name">David Block</p>
              <p className="facilitator-workshop">Saturday Evening Sunset Collective Dance - The Human Experience</p>
            </div>
            <div className="facilitator-card">
              <img src="/facilitators/michaela-winters.jpg" alt="Michaela Winters" />
              <p className="facilitator-name">Michaela Winters</p>
              <p className="facilitator-workshop">Carnival DNGN</p>
            </div>
            <div className="facilitator-card">
              <img src="/facilitators/atilla-cidam.jpg" alt="Atilla Cidam" />
              <p className="facilitator-name">Atilla Cidam</p>
              <p className="facilitator-workshop">Dancing with Death</p>
            </div>
            <div className="facilitator-card">
              <img src="/facilitators/yarixa-ferrao.jpg" alt="Yarixa Ferrao" />
              <p className="facilitator-name">Yarixa Ferrao</p>
              <p className="facilitator-workshop">Unleash!</p>
            </div>
            <div className="facilitator-card">
              <img src="/facilitators/chloe-good.jpg" alt="Chloe Good" />
              <p className="facilitator-name">Chloe Good</p>
              <p className="facilitator-workshop">Attachment Alchemy</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. THE FIELD OF PRESENCE */}
      <section className="concentric-circles-section">
        <div className="section-container">
          <div className="circles-header">
            <h2>The Field of Presence</h2>
            <p className="circles-subtitle">{content?.fieldOfPresence}</p>
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

      {/* 5. HOW THE SPACE HOLDS */}
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
                {content?.howTheSpaceHolds?.map((item, i) => (
                  <div key={i} className="purpose-item">{item}</div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* 6. WHAT IT FEELS LIKE */}
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
              {content?.whatItFeelsLike?.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* 7. MEET THE TEAM */}
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

      {/* 8. FINAL INVITATION */}
      <section className="invitation">
        <p>{content?.finalInvitation}</p>
      </section>

      {/* 9. FINAL CTA */}
      <section className="final-cta">
        <h2>{content?.finalCta}</h2>
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
