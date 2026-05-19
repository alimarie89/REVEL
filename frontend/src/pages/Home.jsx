import React, { useState, useEffect, useRef } from 'react'
import '../styles/Home.css'
import { useHomeContent } from '../hooks/useHomeContent'

function Home() {
  const { content } = useHomeContent()
  const [expandedSection, setExpandedSection] = useState(null)
  const [selectedFacilitator, setSelectedFacilitator] = useState(null)
  const [selectedLevel, setSelectedLevel] = useState('individual')
  const [hoveredLevel, setHoveredLevel] = useState(null)
  const [carouselScroll, setCarouselScroll] = useState(0)
  const carouselRef = useRef(null)

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

  const carouselImages = [
    { src: '/carousel/group-floor.jpg', alt: 'Group gathering on floor' },
    { src: '/carousel/water-ritual.jpg', alt: 'Water ritual ceremony' },
    { src: '/carousel/dance-floor-wide.jpg', alt: 'Dance floor gathering' },
    { src: '/carousel/dj-music.jpg', alt: 'DJ performing' },
    { src: '/carousel/circle-room.jpg', alt: 'Circle gathering' },
    { src: '/carousel/listening-group.jpg', alt: 'Listening group' },
    { src: '/carousel/movement-color.jpg', alt: 'Movement and color' }
  ]

  // Auto-scroll carousel
  useEffect(() => {
    const carousel = carouselRef.current
    if (!carousel) return

    const scrollInterval = setInterval(() => {
      const maxScroll = carousel.scrollWidth - carousel.clientWidth
      setCarouselScroll((prevScroll) => {
        const newScroll = prevScroll + 2
        if (newScroll >= maxScroll) {
          return 0
        }
        return newScroll
      })
    }, 50)

    return () => clearInterval(scrollInterval)
  }, [])

  // Update carousel scroll position
  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = carouselScroll
    }
  }, [carouselScroll])

  const showcaseFacilitators = [
    {
      id: 1,
      name: 'David Block',
      role: 'Artist',
      workshop: 'Saturday Evening Sunset Collective Dance - The Human Experience',
      photo: '/facilitators/david-block.jpg',
      bio: 'Our collective "peak" will be a Saturday evening sunset dance journey woven by The Human Experience. David\'s music has been a soundtrack for many of our lives over the last decade+. His work has reached many millions and taken him around the globe. David is a visionary artist and collaborative genius behind projects like Gone Gone Beyond and albums with Rising Appalachia.'
    },
    {
      id: 2,
      name: 'Michaela Winters',
      role: 'Transformational Coach',
      workshop: 'Carnival DNGN',
      photo: '/facilitators/michaela-winters.jpg',
      bio: 'Carnival DNGN is a consent-centered, immersive experience where people are invited to stop performing, confront what they\'ve been avoiding, and reclaim parts of themselves they\'ve kept hidden, while being met with grounded support every step of the way. Michaela is a transformational coach and provocateur known for her unapologetically direct and edge-forward approach to growth.'
    },
    {
      id: 3,
      name: 'Atilla Cidam',
      role: 'Facilitator',
      workshop: 'Dancing with Death',
      photo: '/facilitators/atilla-cidam.jpg',
      bio: 'A ritual-based workshop exploring death as a doorway to deeper aliveness, where you\'ll engage grief, identity, and transformation through embodied practices and connection. Atilla is a co-founder of Dance Meets Tantra and a seasoned facilitator weaving eros, shadow work, and ritual into powerful transformational spaces.'
    },
    {
      id: 4,
      name: 'Yarixa Ferrao',
      role: 'Facilitator',
      workshop: 'Unleash!',
      photo: '/facilitators/yarixa-ferrao.jpg',
      bio: 'A high-energy, expressive experience designed to help you break through inhibition and fully embody your voice, movement, and creative power. Yarixa is the founder of Unleash! and a global facilitator known for activating bold self-expression and emotional freedom.'
    },
    {
      id: 5,
      name: 'Chloe Good',
      role: 'Somatic Coach',
      workshop: 'Attachment Alchemy',
      photo: '/facilitators/chloe-good.jpg',
      bio: 'A relational body of work where you explore and re-wire your attachment patterns in real time through guided partner exercises, building capacity for connection without losing yourself. Chloe is a somatic coach whose work focuses on embodied healing, emotional processing, and creating safety within the body.'
    },
    {
      id: 6,
      name: 'Victor Warring',
      role: 'Somatic Educator',
      workshop: 'DeColonizing Erotic Movement',
      photo: '/facilitators/victor-warring.jpg',
      bio: 'An embodied movement journey exploring how shame and conditioning live in the body, using dance, touch, and consent-based practices to reclaim pleasure and erotic sovereignty. Victor is a pioneer in somatic sexuality education, integrating decades of work in embodiment, intimacy, and cultural awareness.'
    },
    {
      id: 7,
      name: 'Peter Benjamin & Violet Starkey',
      role: 'Facilitators',
      workshop: 'Relational Interplay',
      photo: '/facilitators/peter-benjamin.jpg',
      bio: 'A dynamic, interactive practice using movement, voice, and structured exercises to build authentic connection, emotional intelligence, and embodied communication skills. Peter and Violet are the creators of Relational Interplay and have trained thousands.'
    },
    {
      id: 8,
      name: 'Zahava Griss',
      role: 'Facilitator',
      workshop: 'Dance of D&S / Primal Play',
      photo: '/facilitators/zahava-griss.jpg',
      bio: 'A playful, edgy exploration of power, instinct, and connection through movement, kink-informed dynamics, and relational exercises. Z is the founder of Embody More Love and has been guiding dance rituals for over two decades that blend intimacy, shadow, and liberation.'
    },
    {
      id: 9,
      name: 'Dr. Hazel-Grace Yates',
      role: 'Relationship Coach',
      workshop: 'The Art of REPAIR / Reconciliation Between Men & Women',
      photo: '/facilitators/hazel-grace-yates.jpg',
      bio: 'A skill-based workshop teaching how to navigate conflict, repair rupture, and restore connection using clear, embodied communication tools. Hazel-Grace is a relationship coach and creator of The Art of REPAIR, with over 15 years of experience in relational healing work.'
    },
    {
      id: 10,
      name: 'Ayce Kyptyn & Ephraim Mallery',
      role: 'Facilitators',
      workshop: 'Erotic Blueprints: Rewiring Your Relationship to Life',
      photo: '/facilitators/ayce-kyptyn.jpg',
      bio: 'Discover a map of five distinct erotic types—Energetic, Sensual, Sexual, Kinky, and Shapeshifter—each describing a unique language of turn-on, desire, and embodied pleasure. Knowing your Blueprint reveals not just what lights you up, but how you\'re wired for connection and aliveness. Ayce Kyptyn is a transmasc spiritual outlaw known for igniting sacred fire and dismantling the installed systems that sabotage the fullness of ourselves. Ephraim Mallery is an evolutionary trickster, playfully guiding you into the surprise of literally, deeply Making Love with Your Life.'
    },
    {
      id: 11,
      name: 'Anaia Sundara',
      role: 'Facilitator',
      workshop: 'DJ Set',
      photo: '/facilitators/anaia-sundara.jpg',
      bio: 'Coming soon for workshop details.'
    },
    {
      id: 12,
      name: 'Cody Reinheimer',
      role: 'DJ / CodeStar',
      workshop: 'Sonic Soundscape',
      photo: '/facilitators/cody-reinheimer.jpg',
      bio: 'CodeStar is a seasoned DJ, sprinkling the spice of life and plenty of tasty bass into the soundscape, mixing up music to move into.'
    }
  ]

  return (
    <div className="home">
      {/* 1. HERO - ALTERNATIVE VARIANT (CLEAN BACKGROUND) */}
      <section
        className="hero revel-hero-alt"
        style={{ backgroundImage: 'url("/REVEL Wide Blank.png")' }}
      >
        <div className="hero-overlay"></div>

        <div className="hero-content revel-hero-content-alt">
          <div className="revel-hero-inner-alt">
            <p className="revel-hero-meta-alt">July 2–5, 2026 · Sunrise Ranch, Colorado</p>

            <img src="/REVEL font.png" alt="REVEL" className="revel-hero-title-image-alt" />

            <div className="revel-hero-alt-tagline">
              <p>A 350-person dance meets tantra convergence exploring ritual, embodiment, eros, and cultural awakening.</p>
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

      {/* 1b. HERO - ORIGINAL VARIANT (FLORAL BACKGROUND) */}
      <section
        className="hero revel-hero"
        style={{ backgroundImage: 'url("/REVEL Backdrop Horizontal.jpg")' }}
      >
        <div className="hero-overlay"></div>

        <div className="hero-content revel-hero-content">
          <div className="revel-hero-inner">
            <p className="revel-hero-meta">July 2–5, 2026 · Sunrise Ranch, Colorado</p>

            <img src="/REVEL font.png" alt="REVEL" className="revel-hero-title-image" />

            <p className="revel-hero-subtitle">A 350-person dance meets tantra convergence exploring ritual, embodiment, eros, and cultural awakening.</p>

            <div className="revel-hero-main-tagline">
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

      {/* 2. ORIENTATION LINE */}
      <section className="orientation-line">
        <div className="section-container">
          <p>{content?.orientationLine}</p>
        </div>
      </section>

      {/* 2.5 CINEMATIC VISION */}
      <section className="cinematic-vision">
        <div className="section-container">
          <div className="cinematic-content">
            <div className="cinematic-text">
              <h2>Are you longing for something deeper than another peak experience?</h2>
              
              <div className="vision-statement">
                <p className="vision-intro">REVEL began with a vision:</p>
                <p className="vision-tagline">to create spaces where people can actually feel culture changing.</p>
              </div>

              <p className="vision-description">
                Through workshops, dance journeys, rituals, relational experiences, music, movement, and emergent moments led by world-class space holders, REVEL explores what becomes possible when charge is transformed into connection, creativity, responsibility, and culture.
              </p>
            </div>

            <div className="cinematic-featured">
              <img 
                src="/carousel/hug-close.jpg" 
                alt="Two participants embracing during a relational workshop"
                className="featured-image"
              />
            </div>
          </div>

          {/* Auto-scrolling Carousel */}
          <div className="carousel-container">
            <div 
              className="carousel-scroll" 
              ref={carouselRef}
            >
              {carouselImages.map((image, idx) => (
                <div key={idx} className="carousel-item">
                  <img 
                    src={image.src} 
                    alt={image.alt}
                    className="carousel-image"
                  />
                </div>
              ))}
            </div>
          </div>
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

      {/* 3.5 THE SPACE WE CREATE */}
      <section className="space-we-create">
        <div className="section-container">
          <h2>The space we're holding</h2>
          <div className="space-qualities">
            <div className="quality-pair">
              <div className="quality-item">
                <p className="quality-label">Eros</p>
                <p className="quality-description">Desire, aliveness, pleasure—held with trauma awareness</p>
              </div>
              <div className="quality-item">
                <p className="quality-label">Grief</p>
                <p className="quality-description">A path to ecstasy, to feeling more alive</p>
              </div>
            </div>
            <div className="quality-pair">
              <div className="quality-item">
                <p className="quality-label">Deep Intimacy</p>
                <p className="quality-description">Real connection, vulnerability, mutual witnessing</p>
              </div>
              <div className="quality-item">
                <p className="quality-label">Emergence</p>
                <p className="quality-description">Discovery, becoming, evolution of self</p>
              </div>
            </div>
            <div className="quality-pair">
              <div className="quality-item">
                <p className="quality-label">Rest</p>
                <p className="quality-description">Restoration, slowing down, being held</p>
              </div>
              <div className="quality-item">
                <p className="quality-label">Energy</p>
                <p className="quality-description">Activation, movement, aliveness</p>
              </div>
            </div>
            <div className="polarity-statement">
              <p><span className="polarity-bold">We hold polarity.</span> Both sides. Not either/or, but and. This is where transformation happens.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FACILITATORS SHOWCASE */}
      <section className="facilitators-showcase">
        <div className="section-container">
          <p className="facilitators-caption">Rub shoulders with world-class facilitators</p>
          <div className="facilitators-grid">
            {showcaseFacilitators.map((facilitator) => (
              <div 
                key={facilitator.id}
                className="facilitator-card"
                onClick={() => setSelectedFacilitator(facilitator)}
                style={{ cursor: 'pointer' }}
              >
                <img src={facilitator.photo} alt={facilitator.name} />
                <p className="facilitator-name">{facilitator.name}</p>
                <p className="facilitator-workshop">{facilitator.workshop}</p>
              </div>
            ))}
        </div>
      </div>
      </section>

      {/* FACILITATOR MODAL */}
      {selectedFacilitator && (
        <div className="facilitator-modal" onClick={() => setSelectedFacilitator(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button 
              className="modal-close-btn"
              onClick={() => setSelectedFacilitator(null)}
            >
              ✕
            </button>
            <img src={selectedFacilitator.photo} alt={selectedFacilitator.name} className="modal-photo" />
            <div className="modal-text">
              <h2>{selectedFacilitator.name}</h2>
              <p className="modal-role">{selectedFacilitator.role}</p>
              <p className="modal-workshop">{selectedFacilitator.workshop}</p>
              <p className="modal-bio">{selectedFacilitator.bio}</p>
            </div>
          </div>
        </div>
      )}

      {/* 5. THE VENUE */}
      <section className="venue-section">
        <div className="venue-hero" style={{ backgroundImage: 'url("/venue/Sunrise Ranch Rainbow.jpg")' }}>
          <div className="venue-overlay"></div>
          <div className="venue-hero-content">
            <h2>Where we're gathering</h2>
            <p>Sunrise Ranch, Loveland Colorado</p>
          </div>
        </div>

        <div className="section-container">
          <div className="venue-philosophy">
            <p className="venue-tagline">Honoring Universal Being in all its forms</p>
            <p className="venue-description">Sunrise Ranch is more than a beautiful location—it's a sacred space stewarded for over 75 years with spiritual intention. Since 1945, this valley has been dedicated to the transformation and awakening of consciousness. The atmosphere here carries decades of positive thought, intention, and service to the evolution of humanity.</p>
          </div>

          <div className="venue-gallery">
            <div className="venue-photo-item">
              <img src="/venue/Sunrise Ranch Pavilion.jpg" alt="Sunrise Ranch Pavilion" />
              <p>Gathering Space</p>
            </div>
            <div className="venue-photo-item">
              <img src="/venue/Sunrise Ranch Pool.jpg" alt="Sunrise Ranch Pool" />
              <p>Renewal & Play</p>
            </div>
            <div className="venue-photo-item">
              <img src="/venue/Sunrise Ranch Green Ridge.jpg" alt="Sunrise Ranch Green Ridge" />
              <p>Natural Beauty</p>
            </div>
            <div className="venue-photo-item">
              <img src="/venue/Sunrise Ranch Camping.jpg" alt="Sunrise Ranch Camping" />
              <p>Community Spaces</p>
            </div>
            <div className="venue-photo-item">
              <img src="/venue/Sunrise Ranch Triple Room.jpg" alt="Sunrise Ranch Triple Room" />
              <p>Accommodations</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. THE FIELD OF PRESENCE */}
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

      {/* 7. HOW THE SPACE HOLDS */}
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

      {/* 8. WHAT IT FEELS LIKE */}
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

      {/* 9. FINAL INVITATION */}
      <section className="invitation">
        <p>{content?.finalInvitation}</p>
      </section>

      {/* 10. FINAL CTA */}
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
