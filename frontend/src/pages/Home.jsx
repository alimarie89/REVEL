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
      photo: '/facilitator-1.jpg',
      bio: 'Alison holds the vision and container for REVEL. She brings 10+ years of experience in somatic practices, tantra, and conscious community building.'
    },
    {
      id: 2,
      name: 'TBD',
      role: 'TBD',
      photo: '/facilitator-2.jpg',
      bio: 'Coming soon. We are curating world-class facilitators and artists to join the REVEL faculty.'
    },
    {
      id: 3,
      name: 'TBD',
      role: 'TBD',
      photo: '/facilitator-3.jpg',
      bio: 'Coming soon. We are curating world-class facilitators and artists to join the REVEL faculty.'
    },
    {
      id: 4,
      name: 'TBD',
      role: 'TBD',
      photo: '/facilitator-4.jpg',
      bio: 'Coming soon. We are curating world-class facilitators and artists to join the REVEL faculty.'
    },
    {
      id: 5,
      name: 'TBD',
      role: 'TBD',
      photo: '/facilitator-5.jpg',
      bio: 'Coming soon. We are curating world-class facilitators and artists to join the REVEL faculty.'
    },
    {
      id: 6,
      name: 'TBD',
      role: 'TBD',
      photo: '/facilitator-6.jpg',
      bio: 'Coming soon. We are curating world-class facilitators and artists to join the REVEL faculty.'
    }
  ]

  const sections = [
    {
      id: 'convergence',
      title: 'Field Co-Creation Over Consumption',
      subtitle: 'Everyone here is a creator, not a spectator.',
      content: `Festivals are built for consumption. You buy a ticket, watch the show, and leave. REVEL is built for co-creation. Your presence, your energy, your desire—it all shapes what emerges. There are no pedestals here. The people leading the space are moving, dancing, exploring right alongside you.

When everyone shows up as a creator rather than a consumer, the field transforms. Energy circulates instead of flows one direction. Intimacy becomes possible at scale.`
    },
    {
      id: 'participation',
      title: 'Closed Container Over Open Access',
      subtitle: 'Intention and alignment create coherence.',
      content: `A closed container means everyone signed up for the same thing. We begin with a shared opening ceremony where we establish explicit agreements. We end together. In between, the field stays coherent.

This is what made Hawaii Tantra Festival work so powerfully. Not the size, but the fact that hundreds of us were intentionally aligned—building the same container, exploring the same edges, creating the same space together. That alignment is what allows intimacy to hold at scale.`
    },
    {
      id: 'depth',
      title: 'Choice Within a Held Space',
      subtitle: 'Freedom and structure working together.',
      content: `At a typical retreat, you're locked into one facilitator's arc for a week with little choice. At a festival, you're lost in the crowd with too much choice and no coherence. REVEL offers something else: multiple modalities, varied facilitators, and you choose what calls you—all held within an intentional container.

You have agency. You follow what wants to be explored. And at the same time, the field is held. You're not alone in your choice. The whole group is creating this together.`
    },
    {
      id: 'container',
      title: "The Container Itself Is the Teacher",
      subtitle: 'Safety, intention, and aligned energy.',
      content: `A strong container isn't just safety protocols. It's the alignment of intention that allows hundreds of people to move together without losing coherence or depth. When power dynamics are made explicit and safety is actively held, vulnerability becomes possible. When vulnerability is honored, the field clarifies.

This is what holds intimacy at scale. Not the facilitators. Not the programming. The container itself.`
    }
  ]

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero" style={{backgroundImage: 'url(/revel-background-only.png)'}}>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <p className="hero-meta">Sunrise Ranch, Loveland, Colorado · July 2–5, 2026</p>
          <h1 className="hero-title">REVEL</h1>
          <p className="hero-tagline">A convergence where intimacy is held at scale, and the right people create something alive together.</p>
          <a 
            href="https://events.humanitix.com/revel2026" 
            target="_blank" 
            rel="noopener noreferrer"
            className="cta-button primary"
          >
            Get Your Tickets
          </a>
        </div>
      </section>

      {/* Positioning */}
      <section className="positioning">
        <div className="positioning-node">
          <div 
            className="positioning-header"
            onClick={() => toggleSection('positioning')}
          >
            <p className="positioning-label">WHAT THIS IS</p>
            <p className="positioning-text">
              A convergence is what happens when the right people, the right conditions, and the right leadership come into alignment... and something alive begins to form between them.
            </p>
            <span className="positioning-toggle">{expandedSection === 'positioning' ? 'CLOSE' : 'READ MORE'}</span>
          </div>
          {expandedSection === 'positioning' && (
            <div className="positioning-content">
              <p className="positioning-subtext">
                REVEL is an experiment in what becomes possible when intimacy is held at scale. Hundreds of people. Real contact. Energy moving. And the space still feels coherent, connected, and deeply human.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Facilitators Section */}
      <section className="facilitators">
        <div className="facilitators-container">
          <h2>Meet the People Creating This</h2>
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

      {/* The Experience - Key Themes */}
      <section className="experience">
        <h2>The Experience</h2>
        <div className="experience-grid">
          {sections.map((section) => (
            <div key={section.id} className="experience-node">
              <div 
                className="node-header"
                onClick={() => toggleSection(section.id)}
              >
                <p className="node-label">{section.title.split(' ')[0].toUpperCase()}</p>
                <h3>{section.title}</h3>
                <p className="node-subtitle">{section.subtitle}</p>
                <span className="expand-toggle">{expandedSection === section.id ? 'CLOSE' : 'READ MORE'}</span>
              </div>
              {expandedSection === section.id && (
                <div className="node-content">
                  {section.content.split('\n\n').map((para, idx) => (
                    <p key={idx}>{para}</p>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* What's Included */}
      <section className="included">
        <div className="included-content">
          <h2>What's Included with Your Ticket</h2>
          <div className="included-grid">
            <div className="included-item">
              <h4>All Programming</h4>
              <p>Workshops, dances, rituals, concerts, talks, and live music</p>
            </div>
            <div className="included-item">
              <h4>Ceremonies & Practices</h4>
              <p>Opening & closing ceremonies, morning practices, grounding rituals</p>
            </div>
            <div className="included-item">
              <h4>Full Access</h4>
              <p>Grounds, chill spaces, pool, nature areas, parking</p>
            </div>
            <div className="included-item">
              <h4>Optional Upgrades</h4>
              <p>Indoor lodging and farm-fresh meal plan available</p>
            </div>
          </div>
        </div>
      </section>

      {/* Where & When */}
      <section className="details">
        <div className="details-content">
          <div className="detail-item">
            <h3>Sunrise Ranch</h3>
            <p className="detail-location">Loveland, Colorado</p>
            <p className="detail-description">
              Set against stunning red-rock bluffs, Sunrise Ranch is a long-standing sanctuary for transformation. Once home to the beloved ARISE Festival, the land continues to host visionary teachers, healers, and artists.
            </p>
            <p className="detail-info">
              1 hour north of Boulder<br/>
              1.5 hours from Denver International Airport
            </p>
          </div>
          <div className="detail-item">
            <h3>July 2–5, 2026</h3>
            <p className="detail-dates">Thursday evening through Sunday afternoon</p>
            <p className="detail-description">
              Four days of dancing, rituals, embodiment practices, music, connection, and being held in community.
            </p>
          </div>
        </div>
      </section>

      {/* Ways to Participate */}
      <section className="participate">
        <h2>Ways to Participate</h2>
        <div className="participate-grid">
          <div className="participate-card">
            <h3>As a Participant</h3>
            <p>Come to explore, dance, practice, and be shaped by the field.</p>
            <a href="https://events.humanitix.com/revel2026" target="_blank" rel="noopener noreferrer" className="cta-button secondary">
              Get Tickets
            </a>
          </div>
          <div className="participate-card">
            <h3>As a Facilitator</h3>
            <p>Apply to hold space, teach, guide rituals, or lead practices.</p>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLScGWYQLjNbZ5lOZ7D2P6d6YlHGKTY2NmVLNp8jTWMSxrQy_nA/viewform" target="_blank" rel="noopener noreferrer" className="cta-button secondary">
              Apply
            </a>
          </div>
          <div className="participate-card">
            <h3>As a Creator</h3>
            <p>Musicians, DJs, artists, and volunteers—we need your magic.</p>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLScmZ-0KLGvGfU_3Afl4UhUE_rdKGihPkJZNCaCbRIkOPMTdYQ/viewform" target="_blank" rel="noopener noreferrer" className="cta-button secondary">
              Apply
            </a>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="final-cta">
        <h2>Ready to Converge?</h2>
        <a 
          href="https://events.humanitix.com/revel2026" 
          target="_blank" 
          rel="noopener noreferrer"
          className="cta-button primary large"
        >
          Secure Your Spot
        </a>
      </section>
    </div>
  )
}

export default Home
