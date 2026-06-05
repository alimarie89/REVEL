import React, { useState, useEffect, useRef } from 'react'
import '../styles/Home.css'
import { useHomeContent } from '../hooks/useHomeContent'

function Home() {
  const { content } = useHomeContent()
  const [expandedSection, setExpandedSection] = useState(null)
  const [selectedFacilitator, setSelectedFacilitator] = useState(null)
  const [selectedTeamMember, setSelectedTeamMember] = useState(null)
  const [selectedLevel, setSelectedLevel] = useState('individual')
  const [hoveredLevel, setHoveredLevel] = useState(null)
  const [selectedField, setSelectedField] = useState('individual')
  const [hoveredField, setHoveredField] = useState(null)
  const [carouselScroll, setCarouselScroll] = useState(0)
  const [featuredImage, setFeaturedImage] = useState('/carousel/Girl smiling 1.jpg')
  const [openFaqCategory, setOpenFaqCategory] = useState(null)
  const [openFaqItem, setOpenFaqItem] = useState({})
  const [showPromoBanner, setShowPromoBanner] = useState(true)
  const [isBannerSticky, setIsBannerSticky] = useState(false)
  const carouselRef = useRef(null)
  const heroRef = useRef(null)

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

  const handleFieldClick = (field) => {
    setSelectedField(field)
    setHoveredField(null)
  }

  const handleFieldHover = (field) => {
    setHoveredField(field)
  }

  const handleFieldLeave = () => {
    setHoveredField(null)
  }

  const displayedLevel = hoveredLevel || selectedLevel || 'individual'
  const displayedField = hoveredField || selectedField || 'individual'

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

  const fields = [
    {
      id: 'individual',
      label: 'Self',
      title: 'Internal Coherence',
      subtitle: 'Your Nervous System',
      question: "Am I present with what's arising in me right now?",
      description: "The foundation begins with you—your capacity to notice your own internal state, to stay with sensation, emotion, and presence even when things intensify."
    },
    {
      id: 'relational',
      label: 'Relational',
      title: 'Mutual Attunement',
      subtitle: 'Two People Meeting',
      question: "Can I truly see and be seen?",
      description: "Real contact happens when two people show up without performance, mirroring and responding to each other's actual presence rather than their persona."
    },
    {
      id: 'group',
      label: 'Group',
      title: 'Collective Coherence',
      subtitle: 'The Group Field',
      question: "Can we hold integrity under charge?",
      description: "When individuals take responsibility for their own nervous systems and their impact on others, the field stays coherent. Intensity becomes information, not fragmentation."
    },
    {
      id: 'cultural',
      label: 'Cultural',
      title: 'Cultural Stewardship',
      subtitle: 'What We Carry Forward',
      question: "How do I bring this back to the world?",
      description: "The practices at REVEL don't end when we leave. What we've learned about presence, responsibility, and connection shapes how we show up in our relationships and communities."
    }
  ]

  const carouselImages = [
    { src: '/carousel/group-floor.jpg', alt: 'Group gathering on floor' },
    { src: '/carousel/water-ritual.jpg', alt: 'Water ritual ceremony' },
    { src: '/carousel/dance-floor-wide.jpg', alt: 'Dance floor gathering' },
    { src: '/carousel/dj-music.jpg', alt: 'DJ performing' },
    { src: '/carousel/circle-room.jpg', alt: 'Circle gathering' },
    { src: '/carousel/listening-group.jpg', alt: 'Listening group' },
    { src: '/carousel/movement-color.jpg', alt: 'Movement and color' },
    { src: '/carousel/web_1.JPG', alt: 'Event moment' },
    { src: '/carousel/web_5.JPG', alt: 'Event moment' },
    { src: '/carousel/web_6.JPG', alt: 'Event moment' },
    { src: '/carousel/web_7.JPG', alt: 'Event moment' },
    { src: '/carousel/web_20.JPG', alt: 'Event moment' },
    { src: '/carousel/web_23.JPG', alt: 'Event moment' },
    { src: '/carousel/web_24JPG.JPG', alt: 'Event moment' },
    { src: '/carousel/web_28.JPG', alt: 'Event moment' },
    { src: '/carousel/web_45.JPG', alt: 'Event moment' },
    { src: '/carousel/web_47.JPG', alt: 'Event moment' },
    { src: '/carousel/web_51.JPG', alt: 'Event moment' },
    { src: '/carousel/web_52.JPG', alt: 'Event moment' },
    { src: '/carousel/web_53.JPG', alt: 'Event moment' },
    { src: '/carousel/web_55.JPG', alt: 'Event moment' },
    { src: '/carousel/web_57.JPG', alt: 'Event moment' },
    { src: '/carousel/web_58.JPG', alt: 'Event moment' },
    { src: '/carousel/web_59.JPG', alt: 'Event moment' },
    { src: '/carousel/web_60.JPG', alt: 'Event moment' },
    { src: '/carousel/web_70.JPG', alt: 'Event moment' },
    { src: '/carousel/web_76.JPG', alt: 'Event moment' },
    { src: '/carousel/web_89.JPG', alt: 'Event moment' },
    { src: '/carousel/web_91.JPG', alt: 'Event moment' },
    { src: '/carousel/web_94.JPG', alt: 'Event moment' },
    { src: '/carousel/web_95.JPG', alt: 'Event moment' },
    { src: '/carousel/web_97.JPG', alt: 'Event moment' },
    { src: '/carousel/web_102.JPG', alt: 'Event moment' },
    { src: '/carousel/web_103.JPG', alt: 'Event moment' },
    { src: '/carousel/web_104.JPG', alt: 'Event moment' }
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

  // Randomly select featured image on mount
  useEffect(() => {
    const images = ['/carousel/Girl smiling 1.jpg', '/carousel/Girl smiling 2.jpg']
    const randomImage = images[Math.floor(Math.random() * images.length)]
    setFeaturedImage(randomImage)
  }, [])

  // Handle banner sticky behavior on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const heroBottom = heroRef.current.getBoundingClientRect().bottom
        setIsBannerSticky(heroBottom <= 0)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

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
      name: 'Peter Benjamin',
      role: 'Facilitator',
      workshop: 'Relational Interplay',
      photo: '/facilitators/peter-benjamin.jpg',
      bio: 'Peter Benjamin (creator of Relational Interplay) is a seasoned coach, facilitator, and teacher with over a decade of experience leading thousands of workshops and dozens of retreats across 23 countries. He makes communication, connection, and intimacy not just skills—but a living, embodied practice. Blending somatic work, shadow work, and relational dynamics, Peter guides participants through emotional intensity, power, and authentic self-expression with rigor, heart, and play. He trains coaches and community leaders while creating spaces where transformation, deep connection, and joy naturally unfold.'
    },
    {
      id: 7.5,
      name: 'Violet Starkey',
      role: 'Facilitator',
      workshop: 'Relational Interplay',
      photo: '/facilitators/violet-starkey.jpg',
      bio: 'Violet Starkey (co-founder of Relational Interplay) is a transformational group facilitator, coach, entrepreneur, artist & community builder devoted to the art of evolutionary relationships. Trained in somatic shadow work, circle work, spiritual psychology, parts work, soul connection, authentic relating, and field facilitation, she guides individuals and couples to unlock and sustain deeper levels of conscious love, wisdom, embodied power, authenticity and intimacy than ever before.'
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
    },
    {
      id: 13,
      name: 'Rachel Rickards',
      role: 'Facilitator',
      workshop: 'Coming soon',
      photo: '/facilitators/rachel-rickards.png',
      bio: 'Coming soon.'
    },
    {
      id: 14,
      name: 'Lyndsey Scott',
      role: 'Facilitator',
      workshop: 'Song Circle',
      photo: '/facilitators/lyndsey-scott.jpg',
      bio: 'A communal singing experience where voice becomes a pathway into connection, presence, and emotional release. Through call-and-response, simple harmonies, and improvisational play, you\'ll be invited to drop out of your head and into the shared field of sound and belonging. Lyndsey is the song carrier behind "The Way Knows" and other songs that have impacted our lives. With roots in art, restorative justice, permaculture, and somatic work, she creates spaces where music becomes a vehicle for transformation, connection, and coming home to yourself.'
    },
    {
      id: 15,
      name: 'Cari Caldwell',
      role: 'Facilitator',
      workshop: 'REVEL Grief & Eros Ritual - Saturday Morning (3 hours)',
      photo: '/team/cari-caldwell.jpg',
      bio: 'Aliveness - and our deepest erotic intelligence - come from us feeling everything, welcoming and including all.\n\nHowever, in these troubled times, when there is so much to feel - so many darker currents of pain, agony, grief - there is little public space to be together with this spectrum of our humanity.\n\nThe old paradigm is collapsing, the meta-systems that were born into are delaminating, and there is a well of grief so deep underneath all the wildness in these times, that we would all drown if we tried to feel this alone.\n\nIndigineous peoples knew that grief was communal, collective, ancestral, transpersonal and could be only carried by the village.\n\nThey also knew that grief was the regenerative power of life functioning in the human body.. the salty tears that purify us and bring us once again into our full, humble power.\n\nGrief and Eros dance together, and we must go down deep if we want the ecstasy the world so badly needs of us right now.\n\nWe will come together in grief and eros ritual for 3 hours on Saturday morning to weep and wail, to howl and flail, to sit at the altar of our shared pain and let it ripple us until our pain cries are indistinguishable from our pleasure moans.\n\nCome and offer yourself to these rites of grief.. deep intimacy awaits on the otherside.'
    }
  ]

  return (
    <div className="home">
      {/* Tickets Announcement Banner */}
      {showPromoBanner && (
        <div className={`promo-banner ${isBannerSticky ? 'sticky' : ''}`}>
          <div className="promo-content">
            <div className="promo-text-button-group">
              <span className="promo-text">TICKETS GO UP JUNE 1</span>
              <a
                href="https://events.humanitix.com/revel2026"
                target="_blank"
                rel="noopener noreferrer"
                className="promo-button"
              >
                Buy Now
              </a>
            </div>
            <button
              className="promo-close"
              onClick={() => setShowPromoBanner(false)}
              aria-label="Close promotion banner"
            >
              ✕
            </button>
          </div>
        </div>
      )}

      {/* 1. HERO - ALTERNATIVE VARIANT (CLEAN BACKGROUND) */}
      <section
        ref={heroRef}
        className="hero revel-hero-alt"
        style={{ backgroundImage: 'url("/REVEL Wide Blank.png")' }}
      >
        <div className="hero-overlay"></div>

        <div className="hero-content revel-hero-content-alt">
          <div className="revel-hero-inner-alt">
            <img src="/REVEL logo 2.png" alt="REVEL" className="revel-hero-title-image-alt" />

            <div className="revel-hero-alt-tagline">
              <img src="/REVEL What.png" alt="What is REVEL" className="revel-what-image" />
            </div>

            <p className="revel-hero-meta-alt">July 2–5, 2026 · Sunrise Ranch, Colorado</p>

            <div className="revel-hero-main-tagline">
              <img src="/REVEL Logos.png" alt="Partner Logos" className="revel-logos-image" />
            </div>
          </div>
        </div>
      </section>

      {/* 2. CTA BREAK - Get Your Ticket Button */}
      <section className="cta-break">
        <a
          href="https://events.humanitix.com/revel2026"
          target="_blank"
          rel="noopener noreferrer"
          className="cta-button primary"
        >
          Get Your Ticket
        </a>
      </section>

      {/* 2.0 WELCOME SECTION - EDITORIAL REDESIGN */}
      <section className="welcome-section">
        <div className="section-container welcome-full">
          {/* Top Row: Heading & Invitation Left, Image Right */}
          <div className="welcome-header-row">
            <div className="welcome-header-text">
              <div className="welcome-header-content">
                <h2 className="welcome-headline">Welcome to REVEL Convergence 2026</h2>
                
                <div className="welcome-invitation-intro">
                  <p>We invite you to a summer convergence of the music, modalities and facilitators that inspire Dance Meets Tantra to the core.</p>
                  
                  <p>Picture yourself on beautiful land with a masterful group of space holders and 300 loving, playful, embodied humans, all gathering together in shared intention to go deep, unwind, and revel together in the beauty of being human.</p>
                </div>
              </div>
            </div>
            
            <div className="welcome-header-image">
              <img 
                src="/carousel/Girl smiling 1.jpg" 
                alt="REVEL community gathering"
                className="welcome-feature-image"
              />
            </div>
          </div>

          {/* Eyebrow Label */}
          <div className="welcome-eyebrow">
            <p>REVEL is built around a simple but radical possibility:</p>
          </div>

          {/* Pull Quote Section */}
          <div className="welcome-pull-quote">
            <p>When human beings gather with the intention of presence, play, vulnerability, and courage - magic is truly possible.</p>
          </div>

          {/* Three Impact Cards */}
          <div className="welcome-impact-cards">
            <div className="impact-card">
              <p>Lives are changed.</p>
            </div>
            <div className="impact-card">
              <p>True community and friendship is created.</p>
            </div>
            <div className="impact-card">
              <p>REVEL is about leaning in together.</p>
            </div>
          </div>
        </div>
      </section>
            <p>Picture yourself on beautiful land with a masterful group of space holders and 300 loving, playful, embodied humans, all gathering together in shared intention to go deep, unwind, and revel together in the beauty of being human.</p>
          </div>
        </div>
      </section>

      {/* CAROUSEL SECTION */}
      <section className="carousel-section">
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
              <img src="/team/Spencer Headshot Color.jpg" alt="Spencer Jacobson" />
              <p className="photo-name">Spencer Jacobson</p>
              <p className="photo-title">Visionary</p>
            </div>
            <div className="cocreate-photo-card">
              <img src="/team/alison-williams.jpg" alt="Ali Williams" style={{ cursor: 'pointer' }} onClick={() => setSelectedTeamMember('ali')} />
              <p className="photo-name">Ali Williams</p>
              <p className="photo-title">COO</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FACILITATORS SHOWCASE */}
      <section className="facilitators-showcase">
        <div className="section-container">
          <p className="facilitators-caption">Our world-class facilitation team</p>
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
            <p className="venue-description">Sunrise Ranch is more than a beautiful location—it's a sacred space stewarded for over 75 years with spiritual intention. Since 1945, this valley has been dedicated to the transformation and awakening of consciousness. The atmosphere here carries decades of positive thought, intention, and service to the evolution of humanity.</p>
          </div>

          <div className="venue-gallery">
            <div className="venue-photo-item">
              <img src="/venue/Sunrise Ranch Pavilion.jpg" alt="Sunrise Ranch Pavilion" />
              <p>Historical Venue</p>
            </div>
            <div className="venue-photo-item">
              <img src="/venue/Sunrise Ranch Pool.jpg" alt="Sunrise Ranch Pool" />
              <p>Renewal & Play</p>
            </div>
            <div className="venue-photo-item">
              <img src="/venue/Sunrise Ranch Green Ridge.jpg" alt="Sunrise Ranch Green Ridge" />
              <p>Workshop Space</p>
            </div>
            <div className="venue-photo-item">
              <img src="/venue/Sunrise Ranch Camping.jpg" alt="Sunrise Ranch Camping" />
              <p>Camping</p>
            </div>
            <div className="venue-photo-item">
              <img src="/venue/Sunrise Ranch Triple Room.jpg" alt="Sunrise Ranch Triple Room" />
              <p>Accommodations</p>
            </div>
          </div>
        </div>
      </section>

      {/* 2.7 ARCHITECTURE OF CONNECTION */}
      <section className="architecture-section">
        <div className="section-container architecture-container">
          <div className="architecture-header">
            <p className="architecture-eyebrow">ARCHITECTURE OF CONNECTION</p>
            <h2 className="architecture-title">The Architecture of Connection</h2>
            <p className="architecture-intro-text">
              What emerges at REVEL is not accidental. Beyond workshops, music, and gatherings, the convergence is intentionally shaped by relational principles that support presence, attunement, responsibility, and collective coherence when human experience becomes charged.
            </p>
          </div>

          <div className="architecture-divider"></div>

          <div className="field-intro">
            <p className="field-intro-eyebrow">FIELD OF PRESENCE</p>
            <h3 className="field-intro-title">What we practice here becomes the world we live in</h3>
          </div>

          <div className="architecture-layout">
            <div className="architecture-left">
              <svg className="architecture-circles" viewBox="0 0 400 400">
                <defs>
                  <filter id="glow">
                    <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                    <feMerge>
                      <feMergeNode in="coloredBlur"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                </defs>
                
                {/* Concentric circles */}
                <circle 
                  cx="200" 
                  cy="200" 
                  r="180" 
                  className="architecture-ring" 
                  data-field="cultural"
                  style={{
                    opacity: selectedField === 'cultural' || hoveredField === 'cultural' ? 1 : (selectedField || hoveredField ? 0.3 : 0.6),
                    strokeWidth: selectedField === 'cultural' || hoveredField === 'cultural' ? 2.5 : 1.5,
                    filter: selectedField === 'cultural' || hoveredField === 'cultural' ? 'drop-shadow(0 0 60px rgba(168, 92, 63, 0.5))' : 'none',
                    transition: 'all 0.4s ease'
                  }}
                />
                <circle 
                  cx="200" 
                  cy="200" 
                  r="140" 
                  className="architecture-ring" 
                  data-field="group"
                  style={{
                    opacity: selectedField === 'group' || hoveredField === 'group' ? 1 : (selectedField || hoveredField ? 0.3 : 0.6),
                    strokeWidth: selectedField === 'group' || hoveredField === 'group' ? 2.5 : 1.5,
                    filter: selectedField === 'group' || hoveredField === 'group' ? 'drop-shadow(0 0 60px rgba(168, 92, 63, 0.5))' : 'none',
                    transition: 'all 0.4s ease'
                  }}
                />
                <circle 
                  cx="200" 
                  cy="200" 
                  r="100" 
                  className="architecture-ring" 
                  data-field="relational"
                  style={{
                    opacity: selectedField === 'relational' || hoveredField === 'relational' ? 1 : (selectedField || hoveredField ? 0.3 : 0.6),
                    strokeWidth: selectedField === 'relational' || hoveredField === 'relational' ? 2.5 : 1.5,
                    filter: selectedField === 'relational' || hoveredField === 'relational' ? 'drop-shadow(0 0 60px rgba(168, 92, 63, 0.5))' : 'none',
                    transition: 'all 0.4s ease'
                  }}
                />
                <circle 
                  cx="200" 
                  cy="200" 
                  r="60" 
                  className="architecture-ring" 
                  data-field="individual"
                  style={{
                    opacity: selectedField === 'individual' || hoveredField === 'individual' ? 1 : (selectedField || hoveredField ? 0.3 : 0.6),
                    strokeWidth: selectedField === 'individual' || hoveredField === 'individual' ? 2.5 : 1.5,
                    filter: selectedField === 'individual' || hoveredField === 'individual' ? 'drop-shadow(0 0 60px rgba(168, 92, 63, 0.5))' : 'none',
                    transition: 'all 0.4s ease'
                  }}
                />
                
                {/* Interactive overlay */}
                <circle 
                  cx="200" 
                  cy="200" 
                  r="200" 
                  fill="transparent" 
                  pointerEvents="auto"
                  className="architecture-interactive"
                  onMouseMove={(e) => {
                    const svg = e.currentTarget.closest('svg');
                    const rect = svg.getBoundingClientRect();
                    const centerX = rect.width / 2;
                    const centerY = rect.height / 2;
                    const mouseX = e.clientX - rect.left;
                    const mouseY = e.clientY - rect.top;
                    const distance = Math.sqrt((mouseX - centerX) ** 2 + (mouseY - centerY) ** 2) / Math.min(centerX, centerY);
                    
                    let field = 'cultural';
                    if (distance <= 0.3) field = 'individual';
                    else if (distance <= 0.525) field = 'relational';
                    else if (distance <= 0.75) field = 'group';
                    
                    handleFieldHover(field);
                  }}
                  onMouseLeave={handleFieldLeave}
                  onClick={(e) => {
                    const svg = e.currentTarget.closest('svg');
                    const rect = svg.getBoundingClientRect();
                    const centerX = rect.width / 2;
                    const centerY = rect.height / 2;
                    const mouseX = e.clientX - rect.left;
                    const mouseY = e.clientY - rect.top;
                    const distance = Math.sqrt((mouseX - centerX) ** 2 + (mouseY - centerY) ** 2) / Math.min(centerX, centerY);
                    
                    let field = 'cultural';
                    if (distance <= 0.3) field = 'individual';
                    else if (distance <= 0.525) field = 'relational';
                    else if (distance <= 0.75) field = 'group';
                    
                    handleFieldClick(field);
                  }}
                />
              </svg>

              <div className="architecture-field-labels">
                {fields.map((field) => (
                  <button
                    key={field.id}
                    className={`field-label-btn ${displayedField === field.id ? 'active' : ''} ${selectedField === field.id ? 'selected' : ''}`}
                    onMouseEnter={() => handleFieldHover(field.id)}
                    onMouseLeave={handleFieldLeave}
                    onClick={() => handleFieldClick(field.id)}
                  >
                    {field.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="architecture-right">
              {fields.map((field) => (
                <div 
                  key={field.id} 
                  className={`architecture-card ${displayedField === field.id ? 'active' : ''}`}
                >
                  <h3 className="card-title">{field.title}</h3>
                  <p className="card-subtitle">{field.subtitle}</p>
                  <p className="card-question">{field.question}</p>
                  <p className="card-description">{field.description}</p>
                </div>
              ))}
            </div>
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

      {/* TEAM MEMBER MODAL */}
      {selectedTeamMember && (
        <div className="facilitator-modal" onClick={() => setSelectedTeamMember(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button 
              className="modal-close-btn"
              onClick={() => setSelectedTeamMember(null)}
            >
              ✕
            </button>
            {selectedTeamMember === 'ali' && (
              <>
                <img src="/team/alison-williams.jpg" alt="Ali Williams" className="modal-photo" />
                <div className="modal-text">
                  <h2>Ali Williams</h2>
                  <p className="modal-role">Co-Producer & Operational Lead</p>
                  <p className="modal-bio">Ali Williams is the co-producer and operational lead of REVEL, helping shape the relational culture, emotional tone, and lived experience of the convergence through both embodied leadership and meticulous attention to systems, structure, and detail.</p>
                  <p className="modal-bio">Through Dragon Academy, Hawaii Tantra Festival, and years of immersive community leadership, her work explores what becomes possible when human charge is met with presence, attunement, and responsibility rather than suppression, performance, or discharge. She has guided many through transformational group experiences that deepen connection, embodiment, intimacy, and collective coherence.</p>
                  <p className="modal-bio">Originally trained as an Olympic synchronized swimmer, Ali learned early how power is shaped through discipline, precision, and pressure. Her work now focuses on creating spaces where intensity becomes a pathway to aliveness, truth, creativity, and real human connection.</p>
                </div>
              </>
            )}
          </div>
        </div>
      )}



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

      {/* 8. FAQ SECTION */}
      <section className="faq-section">
        <div className="section-container">
          <div className="faq-header">
            <p className="faq-eyebrow">YOUR QUESTIONS ANSWERED</p>
            <h2>Questions About REVEL</h2>
            <p className="faq-subtitle">Practical orientation for entering the field.</p>
          </div>

          {/* FAQ category cards with natural wrapping */}
          <div className="faq-categories-scroll">
            <div className="faq-categories">
              {content?.faqCategories?.map((category) => (
                <button
                  key={category.id}
                  className={`faq-category-card ${openFaqCategory === category.id ? 'active' : ''}`}
                  onClick={() => setOpenFaqCategory(openFaqCategory === category.id ? null : category.id)}
                >
                  <span>{category.title}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Expanded FAQ content for selected category */}
          {openFaqCategory && (
            <div className="faq-expanded">
              {content?.faqCategories?.map((category) => (
                category.id === openFaqCategory && (
                  <div key={category.id} className="faq-content">
                    <h3>{category.title}</h3>
                    <div className="faq-items">
                      {category.faqs?.map((faqItem, idx) => (
                        <div key={idx} className="faq-item">
                          <button
                            className={`faq-question ${openFaqItem[`${category.id}-${idx}`] ? 'open' : ''}`}
                            onClick={() => {
                              const key = `${category.id}-${idx}`
                              setOpenFaqItem({
                                ...openFaqItem,
                                [key]: !openFaqItem[key]
                              })
                            }}
                          >
                            <span>{faqItem.q}</span>
                            <svg className="faq-toggle" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                              <polyline points="6 9 12 15 18 9"></polyline>
                            </svg>
                          </button>
                          {openFaqItem[`${category.id}-${idx}`] && (
                            <div className="faq-answer">
                              <p>{faqItem.a}</p>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )
              ))}
            </div>
          )}
        </div>
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
