import React, { useState } from 'react'
import '../styles/Home.css'

function Home() {
  const [expandedSection, setExpandedSection] = useState(null)

  const toggleSection = (id) => {
    setExpandedSection(expandedSection === id ? null : id)
  }

  const sections = [
    {
      id: 'convergence',
      title: 'Convergence Over Festival',
      subtitle: 'The space itself becomes the teacher.',
      content: `Multiple facilitators. Varied modalities. Rhythm and landing. Designed so hundreds can move together without losing real contact or depth.

Large-scale experiences are often anonymous, extractive, performative. You can be surrounded by thousands and feel utterly alone. REVEL is different. The social architecture itself is designed to hold intimacy at scale—not despite the number of people, but through explicit design that makes real contact possible.`
    },
    {
      id: 'participation',
      title: 'Participation Over Consumption',
      subtitle: 'Your presence shapes the field itself.',
      content: `You're not here to absorb. You're here to contribute—your presence, your desire, your vulnerability all shape what emerges. The people moving us most aren't on pedestals. They're shoulder-to-shoulder with you, dancing the same dancefloors, exploring the same edges, building the same container.

We move, eat, dance, and rest together. There are no spectators here.`
    },
    {
      id: 'depth',
      title: 'Depth Without Lock-In',
      subtitle: 'Real depth on your own terms.',
      content: `Real transformation takes real time. At a typical retreat, you're bound to one facilitator's arc for a week. At a festival, you're lost in the crowd. REVEL offers something else: curated depth across multiple dimensions—tantra, dance, embodiment, ritual, music, rest.

You choose what calls you. You follow the thread that wants to be explored. And the field holds you while you decide how deep to go.`
    },
    {
      id: 'container',
      title: 'Held in Explicit Safety',
      subtitle: "Safety isn't passive. It's actively held.",
      content: `Somatic support. Trauma-informed protocols. Real safety structures. And still space for real edge and real transformation.

When safety is made explicit, vulnerability becomes possible. When vulnerability is honored, power becomes clean. When power is clean and vulnerability is present, intimacy deepens without collapse. This is what's possible in a well-held container.`
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
