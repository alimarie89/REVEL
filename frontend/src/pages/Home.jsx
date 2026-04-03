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
      subtitle: 'More intimate than a festival. More free than a retreat.',
      content: `What happens when the right people, the right conditions, and the right leadership come into alignment? Something alive begins to form between them.

Large-scale experiences are often anonymous, performative, and extractive. You can be surrounded by people and still feel alone. REVEL is different—it is an experiment in what becomes possible when intimacy is held at scale.`
    },
    {
      id: 'participation',
      title: 'Participation Over Consumption',
      subtitle: 'Not here to consume. Here to contribute.',
      content: `Facilitators, artists, and participants move, eat, dance, and rest together. There are no pedestals here. The people who move us most are shoulder-to-shoulder with you, exploring the same edges, dancing the same dancefloors, building the same container.

You choose your path. You follow what calls you. And at the same time, the whole group is held inside a shared field.`
    },
    {
      id: 'depth',
      title: 'Depth Without Lock-In',
      subtitle: 'Go as deep as you want, on your own terms.',
      content: `At a typical retreat, you are bound to one facilitator's arc for a week. At a festival, you are lost in the crowd. REVEL offers something else: curated modalities, rituals, and practices that allow you to go really deep—and then the group is set free to explore what wants to emerge.

Dance, tantra, embodiment, rituals, music, rest. Multiple dimensions. You stay as present as you choose.`
    },
    {
      id: 'container',
      title: 'Held in Explicit Safety',
      subtitle: 'Somatic support + trauma-informed + real edge.',
      content: `A strong, explicit container that prioritizes both safety and aliveness. Somatic support and trauma-informed protocols that still invite real transformation. A field where artists, teachers, and participants move, eat, dance, and rest together.

Everyone begins with a shared opening ceremony where we establish collective agreements and agreements that carry us through the convergence.`
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
        <div className="positioning-content">
          <p className="positioning-text">
            A convergence is what happens when the right people, the right conditions, and the right leadership come into alignment... and something alive begins to form between them.
          </p>
          <p className="positioning-subtext">
            REVEL is an experiment in what becomes possible when intimacy is held at scale. Hundreds of people. Real contact. Energy moving. And the space still feels coherent, connected, and deeply human.
          </p>
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
                <h3>{section.title}</h3>
                <p className="node-subtitle">{section.subtitle}</p>
                <span className="expand-toggle">{expandedSection === section.id ? '−' : '+'}</span>
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
