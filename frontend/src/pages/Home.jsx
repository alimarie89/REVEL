import React, { useState, useEffect } from 'react'
import '../styles/Home.css'

function Home() {
  const [expandedSection, setExpandedSection] = useState(null)
  const [talent, setTalent] = useState([])

  useEffect(() => {
    fetchTalent()
  }, [])

  const fetchTalent = async () => {
    try {
      const response = await fetch('/api/talent')
      const data = await response.json()
      setTalent(data)
    } catch (error) {
      console.error('Error fetching talent:', error)
    }
  }

  const toggleSection = (id) => {
    setExpandedSection(expandedSection === id ? null : id)
  }

  return (
    <div className="home">
      {/* Hero Section with Image */}
      <section className="hero" style={{backgroundImage: 'url(/revel-hero.png)'}}>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <div className="hero-text">
            <a 
              href="https://events.humanitix.com/revel2026" 
              target="_blank" 
              rel="noopener noreferrer"
              className="cta-button primary"
            >
              Get Your Tickets
            </a>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="intro">
        <h2>What is REVEL?</h2>
        <p className="intro-text">
          More intimate than a festival. More free and expansive than a retreat. 
          REVEL is a culture-making convergence at the intersection of dance, tantra, 
          art, somatics, sexuality, community, and collective evolution.
        </p>
      </section>

      {/* Image Section 1 */}
      <section className="image-section left">
        <div className="image-container">
          <img src="https://images.squarespace-cdn.com/content/v1/68851ba563f1ff020743936c/3012169d-b4e3-4e44-af82-0b64f18e8b05/web_55.JPG?format=1500w" alt="Dancing and connection" />
        </div>
        <div className="text-container">
          <h3>A Choose-Your-Own-Adventure</h3>
          <p>
            Multiple tracks of programming woven throughout day and night. 
            Dance, embodiment, and connection workshops interspersed with down-time, 
            pool hangs, rituals, talks, and live DJ sets.
          </p>
        </div>
      </section>

      {/* Image Section 2 */}
      <section className="image-section right">
        <div className="text-container">
          <h3>Held in Safety and Presence</h3>
          <p>
            A strong, explicit container that prioritizes safety and aliveness. 
            Somatic support and trauma-informed protocols that still invite real edge 
            and transformation. A field where artists, teachers, and participants move, 
            eat, dance, and rest together.
          </p>
        </div>
        <div className="image-container">
          <img src="https://images.squarespace-cdn.com/content/v1/68851ba563f1ff020743936c/14b1052a-51f6-4a4f-9666-318d6804abb9/web_95.JPG?format=1500w" alt="Presence and connection" />
        </div>
      </section>

      {/* Featured Talent */}
      <section className="talent-section">
        <h2>Featured Facilitators & Artists</h2>
        {loading ? (
          <p>Loading talent information...</p>
        ) : talent.length > 0 ? (
          <div className="talent-grid">
            {talent.map(person => (
              <TalentCard key={person.id} person={person} />
            ))}
          </div>
        ) : (
          <p>Full artist lineup coming soon! Check back for updates.</p>
        )}
      </section>

      {/* What's Included */}
      <section className="includes">
        <div className="includes-content">
          <h2>What's Included with Your Ticket</h2>
          <ul className="includes-list">
            <li>All workshops, dances, rituals, concerts, and talks</li>
            <li>Morning practices and opening/closing ceremonies</li>
            <li>Access to all grounds and chill spaces</li>
            <li>Parking</li>
          </ul>
          <p className="note">Indoor lodging and meal plan available as upgrades</p>
        </div>
        <div className="image-container">
          <img src="https://images.squarespace-cdn.com/content/v1/68851ba563f1ff020743936c/8f8f8f8f-0f27-4568-a520-a8ecd8001983/web_48.JPG?format=1500w" alt="Gathering and community" />
        </div>
      </section>

      {/* Venue Section */}
      <section className="venue">
        <h2>Sunrise Ranch</h2>
        <div className="venue-content">
          <div className="venue-info">
            <p>
              Set against stunning red-rock bluffs, Sunrise Ranch is a long-standing sanctuary 
              for transformation. Once home to the beloved ARISE Festival, the land continues 
              to host visionary teachers, healers, and artists.
            </p>
            <p className="venue-details">
              <strong>Location:</strong> Loveland, CO<br/>
              <strong>Distance:</strong> 1 hour north of Boulder | 1.5 hours from Denver<br/>
              <strong>Accommodations:</strong> Shaded camping, cozy lodging, farm-to-table meals
            </p>
          </div>
          <div className="image-container">
            <img src="https://images.squarespace-cdn.com/content/v1/68851ba563f1ff020743936c/3ba3ecb6-fe4f-403d-9385-51e17c518d6b/web_39%20%281%29.JPG?format=1500w" alt="Sunrise Ranch venue" />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="final-cta">
        <h2>Ready to REVEL?</h2>
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
