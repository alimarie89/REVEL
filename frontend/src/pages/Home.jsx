import React, { useState, useEffect, useRef } from 'react'
import '../styles/Home.css'
import { useHomeContent } from '../hooks/useHomeContent'
import { facilitatorData } from '../data/facilitatorData'

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
  const [showPromoBanner, setShowPromoBanner] = useState(true)
  const [isBannerSticky, setIsBannerSticky] = useState(false)
  const [selectedPractitioner, setSelectedPractitioner] = useState(null)
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
      slug: 'atilla-cidam'
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
      slug: 'chloe-good'
    },
    {
      id: 6,
      name: 'Victor Warring',
      role: 'Somatic Educator',
      workshop: 'DeColonizing Erotic Movement',
      photo: '/facilitators/victor-warring.jpg',
      slug: 'victor-warring'
    },
    {
      id: 7,
      name: 'Peter Benjamin',
      role: 'Facilitator',
      workshop: 'Relational Interplay',
      photo: '/facilitators/peter-benjamin.jpg',
      slug: 'peter-benjamin'
    },
    {
      id: 7.5,
      name: 'Violet Starkey',
      role: 'Facilitator',
      workshop: 'Relational Interplay',
      photo: '/facilitators/violet-starkey.jpg',
      slug: 'violet-starkey'
    },
    {
      id: 8,
      name: 'Zahava Griss',
      role: 'Facilitator',
      workshop: 'Dance of D&S / Primal Play',
      photo: '/facilitators/zahava-griss.jpg',
      slug: 'zahava-griss'
    },
    {
      id: 9,
      name: 'Dr. Hazel-Grace Yates',
      role: 'Relationship Coach',
      workshop: 'The Art of REPAIR / Reconciliation Between Men & Women',
      photo: '/facilitators/hazel-grace-yates.jpg',
      slug: 'dr-hazel-grace-yates'
    },
    {
      id: 10,
      name: 'Ayce Kyptyn',
      role: 'Facilitator',
      workshop: 'Erotic Blueprints: Rewiring Your Relationship to Life',
      photo: '/facilitators/ayce-kyptyn.jpg',
      slug: 'ayce-kyptyn'
    },
    {
      id: 11,
      name: 'Ephraim Mallery',
      role: 'Facilitator',
      workshop: 'Erotic Blueprints: Rewiring Your Relationship to Life',
      photo: '/facilitators/ephraim-mallery.jpg',
      slug: 'ephraim-mallery'
    },
    {
      id: 12,
      name: 'Anaia Sundara',
      role: 'Facilitator',
      workshop: 'DJ Set',
      photo: '/facilitators/anaia-sundara.jpg',
      bio: 'Coming soon for workshop details.'
    },
    {
      id: 13,
      name: 'Cody Reinheimer',
      role: 'DJ / CodeStar',
      workshop: 'Sonic Soundscape',
      photo: '/facilitators/cody-reinheimer.jpg',
      bio: 'CodeStar is a seasoned DJ, sprinkling the spice of life and plenty of tasty bass into the soundscape, mixing up music to move into.'
    },
    {
      id: 14,
      name: 'Rachel Rickards',
      role: 'Facilitator',
      workshop: 'Coming soon',
      photo: '/facilitators/rachel-rickards.png',
      slug: 'rachel-rickards'
    },
    {
      id: 15,
      name: 'Lyndsey Scott',
      role: 'Facilitator',
      workshop: 'Song Circle',
      photo: '/facilitators/lyndsey-scott.jpg',
      bio: 'A communal singing experience where voice becomes a pathway into connection, presence, and emotional release. Through call-and-response, simple harmonies, and improvisational play, you\'ll be invited to drop out of your head and into the shared field of sound and belonging. Lyndsey is the song carrier behind "The Way Knows" and other songs that have impacted our lives. With roots in art, restorative justice, permaculture, and somatic work, she creates spaces where music becomes a vehicle for transformation, connection, and coming home to yourself.'
    },
    {
      id: 16,
      name: 'Cari Caldwell',
      role: 'Facilitator',
      workshop: 'REVEL Grief & Eros Ritual - Saturday Morning (3 hours)',
      photo: '/team/cari-caldwell.jpg',
      bio: 'Aliveness - and our deepest erotic intelligence - come from us feeling everything, welcoming and including all.\n\nHowever, in these troubled times, when there is so much to feel - so many darker currents of pain, agony, grief - there is little public space to be together with this spectrum of our humanity.\n\nThe old paradigm is collapsing, the meta-systems that were born into are delaminating, and there is a well of grief so deep underneath all the wildness in these times, that we would all drown if we tried to feel this alone.\n\nIndigineous peoples knew that grief was communal, collective, ancestral, transpersonal and could be only carried by the village.\n\nThey also knew that grief was the regenerative power of life functioning in the human body.. the salty tears that purify us and bring us once again into our full, humble power.\n\nGrief and Eros dance together, and we must go down deep if we want the ecstasy the world so badly needs of us right now.\n\nWe will come together in grief and eros ritual for 3 hours on Saturday morning to weep and wail, to howl and flail, to sit at the altar of our shared pain and let it ripple us until our pain cries are indistinguishable from our pleasure moans.\n\nCome and offer yourself to these rites of grief.. deep intimacy awaits on the otherside.'
    },
    {
      id: 17,
      name: 'Devorah Bry',
      role: 'Movement Facilitator',
      workshop: 'Soul Motion & Dance of Devotion',
      photo: '/facilitators/devorah-bry.jpeg',
      bio: 'Devorah is a movement artist and facilitator specializing in soul motion and embodied presence. Her work invites participants into authentic movement and somatic awareness, creating spaces where the body becomes a portal for expression and healing.'
    },
    {
      id: 18,
      name: 'Signa',
      role: 'Yoga & Touch Facilitator',
      workshop: 'Kundalini Yoga & Touch as Prayer',
      photo: '/facilitators/signa.jpg',
      bio: 'Signa is a kundalini yoga instructor and embodiment facilitator offering practices that deepen awareness, pleasure, and connection. Her classes are known for creating safe, heart-opening experiences where participants can release stress and awaken their capacity for aliveness.'
    },
    {
      id: 19,
      name: 'Yana',
      role: 'Ritual Facilitator',
      workshop: 'REVEL Grief & Eros Ritual',
      photo: '/facilitators/yana.jpeg',
      bio: 'Yana facilitates transformative ritual experiences, bringing depth and presence to collective ceremonies. Her work creates sacred containers where the full spectrum of human emotion—grief, eros, joy, and transformation—can be held and celebrated.'
    },
    {
      id: 20,
      name: 'Sequoia Kidwell',
      role: 'Shamanic & Bondage Facilitator',
      workshop: 'Shamanic Bondage',
      photo: '/facilitators/sequoia-kidwell.jpeg',
      bio: 'Sequoia facilitates shamanic practices and bondage rituals as containers for healing, self-discovery, and transformational inner inquiry. Her work weaves together ancient traditions with modern consciousness to create powerful gateways for exploration.'
    },
    {
      id: 21,
      name: 'MxD',
      role: 'Movement & Embodiment Facilitator',
      workshop: 'Embodying Authenticity & Integrity',
      photo: '/facilitators/mxd.jpg',
      bio: 'MxD offers a path to self-inquiry rooted in the principles of nature, restoring the mechanics of human movement and authentic expression. Through precise embodiment practices, participants discover how their bodies communicate truth and integrity in every moment.'
    },
    {
      id: 22,
      name: 'John Wolfstone',
      role: 'Ritual & Ceremony Facilitator',
      workshop: 'REVEL Grief & Eros Ritual',
      photo: '/facilitators/john-wolfstone.jpg',
      bio: 'John facilitates deep ritual work and ceremony, creating sacred containers for collective grief, transformation, and the integration of the full spectrum of human experience. His work honors ancestral wisdom and contemporary consciousness.'
    },
    {
      id: 23,
      name: 'Ethan Henson',
      role: 'Tantric Alchemist',
      workshop: 'Transmuting Anger Into Bliss',
      photo: '/facilitators/ethan-henson.jpg',
      bio: 'Ethan teaches tantric practices for transmuting emotional energy into bliss, connection, and profound union with the Soul. His work offers powerful doorways into intimacy, power, and spiritual awakening through embodied practice.'
    },
    {
      id: 24,
      name: 'Tribal DreamZ',
      role: 'DJ & Dance Facilitator',
      workshop: 'Dance Church',
      photo: '/facilitators/tribal-dreamz.png',
      bio: 'Tribal DreamZ creates ecstatic dance church experiences through music, rhythm, and embodied community celebration. Their sonic landscapes invite participants into states of flow, presence, and collective aliveness.'
    },
    {
      id: 25,
      name: 'Maxwell Wilson',
      role: 'Meditation Guide',
      workshop: 'Meditation',
      photo: '/facilitators/maxwell-wilson.jpeg',
      bio: 'Maxwell facilitates meditation practices designed to cultivate inner peace, clarity, and connection. His teaching style is gentle, accessible, and deeply rooted in contemplative traditions that open the door to profound stillness.'
    }
  ]

  // All members for the ceremonial circle (Spencer, Ali + all facilitators)
  const allCircleMembers = [
    {
      id: 'spencer',
      name: 'Spencer Jacobson',
      role: 'Visionary',
      photo: '/team/Spencer Headshot Color.jpg'
    },
    {
      id: 'ali',
      name: 'Ali Williams',
      role: 'COO',
      photo: '/team/alison-williams.jpg'
    },
    ...showcaseFacilitators
  ]

  return (
    <div className="home">
      {/* Navigation Links */}
      <div className="page-nav">
        <a href="/schedule" className="nav-link">View Schedule →</a>
      </div>
      {/* Tickets Announcement Banner */}
      {showPromoBanner && (
        <div className={`promo-banner ${isBannerSticky ? 'sticky' : ''}`}>
          <div className="promo-content">
            <div className="promo-text-button-group">
              <span className="promo-text">FINAL WAVE OF TICKETS</span>
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

      {/* 2. CTA BREAK - Navigation and Ticket Button */}
      <section className="cta-break">
        <div className="cta-button-group">
          <a
            href="/schedule"
            className="cta-nav-btn"
          >
            Schedule
          </a>
          <a
            href="https://events.humanitix.com/revel2026"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-button primary"
          >
            Get Your Ticket
          </a>
          <a
            href="/faq"
            className="cta-nav-btn"
          >
            FAQ
          </a>
        </div>
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
                  <p>Picture yourself on beautiful land with a masterful group of space holders and 300 loving, playful, embodied humans, all gathering together in shared intention to go deep, unwind, and revel together in the beauty of being human.</p>
                  
                  <p>We invite you to a summer convergence of the music, modalities and facilitators that inspire Dance Meets Tantra to the core.</p>
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

      {/* CAROUSEL SECTION */}

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

      {/* EXPERIMENTAL: LIVING MANDALA / CEREMONIAL CIRCLE SECTION */}
      <section className="living-mandala-section">
        <div className="section-container mandala-container">
          {/* Circular Mandala Layout - All team members in a ceremonial circle */}
          <div className="mandala-wrapper">
            {/* Subtle center glow - intentionally empty */}
            <div className="mandala-center-glow"></div>

            {/* Center title and subtitle */}
            <div className="mandala-header mandala-center-header">
              <h2 className="mandala-title">Meet the Humans Weaving REVEL</h2>
              <p className="mandala-subtitle">A convergence of facilitators, musicians, ritualists, artists, healers, and organizers.</p>
            </div>

            {/* Single ceremonial ring with all team members */}
            <div className="mandala-ring-circle">
              {allCircleMembers.map((person, index) => {
                const totalPeople = allCircleMembers.length;
                const angleIncrement = 360 / totalPeople;
                const angle = angleIncrement * index;
                
                return (
                  <div 
                    key={person.id}
                    className="mandala-portrait-circle"
                    style={{ 
                      '--angle': `${angle}deg`,
                      '--radius': '340px'
                    }}
                    onMouseEnter={() => setHoveredLevel(person.name)}
                    onMouseLeave={() => setHoveredLevel(null)}
                  >
                    <img src={person.photo} alt={person.name} />
                    <div className="mandala-info-circle">
                      <p className="mandala-name">{person.name}</p>
                      <p className="mandala-role">{person.role}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Single elegant ceremonial ring SVG */}
            <svg className="mandala-ring-svg" viewBox="0 0 800 800" preserveAspectRatio="xMidYMid meet">
              <circle cx="400" cy="400" r="340" className="ceremonial-ring" />
            </svg>
          </div>
        </div>
      </section>

      {/* 4. FACILITATORS SHOWCASE */}
      <section className="facilitators-showcase">
        <div className="section-container">
          <p className="facilitators-caption">Our world-class team</p>
          <div className="facilitators-grid">
            {allCircleMembers.map((facilitator) => (
              <div 
                key={facilitator.id}
                className="facilitator-card"
                onClick={() => setSelectedTeamMember(facilitator.name)}
                style={{ cursor: 'pointer' }}
              >
                <img src={facilitator.photo} alt={facilitator.name} />
                <p className="facilitator-name">{facilitator.name}</p>
                <p className="facilitator-workshop">{facilitator.workshop || facilitator.role}</p>
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

      {/* 2.6a HEALING SPACE */}
      <section className="healing-section">
        <div className="section-container healing-container">
          <div className="healing-header">
            <h2 className="healing-title">Healing Space</h2>
            <p className="healing-tagline">so you have somewhere to land</p>
          </div>

          {/* What We Offer */}
          <div className="healing-offerings">
            <div className="healing-offerings-grid">
              <div className="healing-offering-card">
                <h4 className="healing-offering-heading">Nervous System Regulation</h4>
                <p>Settle, restore, and reconnect when the weekend has opened a lot.</p>
              </div>
              <div className="healing-offering-card">
                <h4 className="healing-offering-heading">Bodywork & Recovery</h4>
                <p>Release tension and return to the weekend feeling resourced.</p>
              </div>
              <div className="healing-offering-card">
                <h4 className="healing-offering-heading">Integration Support</h4>
                <p>Slow down, process your experience, and reconnect with yourself.</p>
              </div>
            </div>
          </div>

          {/* Practitioners */}
          <div className="healing-practitioners-section">
            <h3 className="healing-practitioners-title">Meet the Practitioners</h3>
            <div className="healing-practitioners">
              <div className="healing-practitioner-card" onClick={() => setSelectedPractitioner('rachel')}>
                <div className="healing-practitioner-image">
                  <img src="/facilitators/rachel-zurer.jpg" alt="Rachel Zurer" />
                </div>
                <div className="healing-practitioner-content">
                  <h3 className="healing-practitioner-name">Rachel Zurer</h3>
                  <p className="healing-practitioner-primary-title">Biodynamic Craniosacral Therapist</p>
                  <p className="healing-practitioner-secondary-title">Love-Your-Life Coach for High Achievers</p>
                  <p className="healing-practitioner-preview">
                    Rachel's sessions offer something increasingly rare: a genuine pause. Through gentle, light-touch therapy, she supports the nervous system to settle, integrate, and land.
                  </p>
                  <p className="healing-learn-more">Learn More →</p>
                </div>
              </div>

              <div className="healing-practitioner-card" onClick={() => setSelectedPractitioner('gemma')}>
                <div className="healing-practitioner-image">
                  <img src="/facilitators/gemma-wilcox.jpg" alt="Gemma Wilcox" />
                </div>
                <div className="healing-practitioner-content">
                  <h3 className="healing-practitioner-name">Gemma Wilcox</h3>
                  <p className="healing-practitioner-primary-title">Integrative Bodyworker</p>
                  <p className="healing-practitioner-secondary-title">Biodynamic Craniosacral Practitioner</p>
                  <p className="healing-practitioner-preview">
                    Gemma offers deeply attuned, grounding, nourishing, and intuitive sessions that support restoration, presence, and reconnection with the body's innate intelligence and aliveness.
                  </p>
                  <p className="healing-learn-more">Learn More →</p>
                </div>
              </div>
            </div>
          </div>

          {/* Session Pricing */}
          <div className="healing-pricing">
            <h3 className="healing-pricing-title">Session Pricing</h3>
            <div className="healing-pricing-grid">
              <div className="healing-pricing-card">
                <div className="healing-pricing-price">$100</div>
                <div className="healing-pricing-description">60 min Craniosacral Session</div>
              </div>
              <div className="healing-pricing-card">
                <div className="healing-pricing-price">$120</div>
                <div className="healing-pricing-description">60 min Massage / Bodywork Blend</div>
              </div>
              <div className="healing-pricing-card">
                <div className="healing-pricing-price">$150</div>
                <div className="healing-pricing-description">90 min Craniosacral Session</div>
              </div>
              <div className="healing-pricing-card">
                <div className="healing-pricing-price">$165</div>
                <div className="healing-pricing-description">90 min Massage / Bodywork Blend</div>
              </div>
            </div>
            <p className="healing-pricing-note">
              Not sure which session is right for you? Gemma and Rachel can help guide you toward the best fit for your needs.
            </p>
          </div>

          {/* CTA */}
          <div className="healing-cta">
            <button className="healing-cta-button">Reserve Your Session</button>
            <p className="healing-cta-supporting">
              Availability is limited. We encourage you to reserve your session before arriving at REVEL.
            </p>
          </div>
        </div>
      </section>

      {/* Healing Space Modal */}
      {selectedPractitioner && (
        <div className="healing-modal-overlay" onClick={() => setSelectedPractitioner(null)}>
          <div className="healing-modal" onClick={(e) => e.stopPropagation()}>
            <button className="healing-modal-close" onClick={() => setSelectedPractitioner(null)}>×</button>
            {selectedPractitioner === 'rachel' && (
              <div className="healing-modal-content">
                <div className="healing-modal-image">
                  <img src="/facilitators/rachel-zurer.jpg" alt="Rachel Zurer" />
                </div>
                <div className="healing-modal-text">
                  <h3>Rachel Zurer</h3>
                  <p className="healing-modal-title">Biodynamic Craniosacral Therapist</p>
                  <p className="healing-modal-title">Love-Your-Life Coach for High Achievers</p>
                  <div className="healing-modal-bio">
                    <p>
                      Rachel combines two decades of hands-on healing practice with strategic life coaching. As a certified Biodynamic Craniosacral Therapist, she specializes in releasing deep patterns of tension and supporting nervous system restoration.
                    </p>
                    <p>
                      For high-performing individuals, Rachel offers a unique blend: the somatic intelligence of craniosacral work paired with practical coaching to slow down, listen to your body's needs, and reclaim ease in your life. Her sessions are deeply grounding, restorative, and designed to help you feel resourced and present.
                    </p>
                    <p className="healing-modal-practice">
                      <strong>Session Types Offered:</strong> Biodynamic Craniosacral sessions, integrated coaching + bodywork sessions
                    </p>
                  </div>
                </div>
              </div>
            )}
            {selectedPractitioner === 'gemma' && (
              <div className="healing-modal-content">
                <div className="healing-modal-image">
                  <img src="/facilitators/gemma-wilcox.jpg" alt="Gemma Wilcox" />
                </div>
                <div className="healing-modal-text">
                  <h3>Gemma Wilcox</h3>
                  <p className="healing-modal-title">Integrative Bodyworker</p>
                  <p className="healing-modal-title">Biodynamic Craniosacral Practitioner</p>
                  <div className="healing-modal-bio">
                    <p>
                      Gemma is a skilled Integrative Bodyworker and Biodynamic Craniosacral Practitioner with over fifteen years of experience in therapeutic touch. She specializes in creating deeply restorative sessions that release tension, support recovery, and help your entire system feel resourced.
                    </p>
                    <p>
                      Whether you're recovering from hours of dancing, processing emotions from the weekend, or simply needing grounded support, Gemma's sessions are thoughtfully designed to meet you where you are. Her practice combines the precision of craniosacral work with broader therapeutic bodywork techniques for profound, whole-system restoration.
                    </p>
                    <p className="healing-modal-practice">
                      <strong>Session Types Offered:</strong> Biodynamic Craniosacral sessions, therapeutic massage & bodywork, integrated blend sessions
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* 2.7 ARCHITECTURE OF CONNECTION */}
      <section className="architecture-section">
        <div className="section-container architecture-container">
          <div className="architecture-header">
            <div className="architecture-framework">
              <p className="architecture-framework-name">FIELD OF PRESENCE</p>
            </div>
            <p className="architecture-supporting-text">
              The convergence is intentionally shaped by relational principles that support presence, attunement, responsibility, and collective coherence.
            </p>
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
            {(() => {
              // Get facilitator data from showcaseFacilitators
              let facilitatorInfo = null
              if (selectedTeamMember === 'ali') {
                facilitatorInfo = facilitatorData.facilitators['ali-williams']
              } else if (selectedTeamMember === 'spencer') {
                facilitatorInfo = facilitatorData.facilitators['spencer-jacobson']
              } else {
                // Find in showcaseFacilitators
                const facilitator = showcaseFacilitators.find(f => f.name === selectedTeamMember)
                if (facilitator && facilitator.slug) {
                  facilitatorInfo = facilitatorData.facilitators[facilitator.slug]
                }
              }
              
              if (facilitatorInfo) {
                return (
                  <>
                    <img src={facilitatorInfo.photo} alt={facilitatorInfo.name} className="modal-photo" />
                    <div className="modal-text">
                      <h2>{facilitatorInfo.name}</h2>
                      <p className="modal-role">{facilitatorInfo.role}</p>
                      {facilitatorInfo.bio.split('\n').map((paragraph, i) => (
                        <p key={i} className="modal-bio">{paragraph}</p>
                      ))}
                    </div>
                  </>
                )
              }
              return null
            })()}
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
