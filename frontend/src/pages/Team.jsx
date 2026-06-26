import React, { useState } from 'react'
import '../styles/Team.css'

function Team() {
  const [expandedSection, setExpandedSection] = useState(null)
  const [selectedTeamMember, setSelectedTeamMember] = useState(null)

  const toggleSection = (id) => {
    setExpandedSection(expandedSection === id ? null : id)
  }

  // Core Production Team
  const coreProductionTeam = [
    {
      id: 1,
      name: 'Alison Williams',
      role: 'COO',
      bio: 'Alison holds the vision and container for REVEL. [Bio to come]',
      photo: '/team/alison-williams.jpg'
    },
    {
      id: 2,
      name: 'Spencer Jacobson',
      role: 'Visionary',
      bio: 'Spencer brings [Bio to come]',
      photo: '/team/spencer-jacobson.jpg'
    },
    {
      id: 3,
      name: 'Venus Codes',
      role: 'Marketing Director & Experience Design',
      bio: 'Venus contributes [Bio to come]',
      photo: '/team/venus-codes.jpg'
    }
  ]

  // Talent - ~20 people
  const talent = [
    { id: 101, name: 'Peter Benjamin', role: 'Facilitator', bio: 'Peter Benjamin (creator of Relational Interplay) is a seasoned coach, facilitator, and teacher with over a decade of experience leading thousands of workshops and dozens of retreats across 23 countries. He makes communication, connection, and intimacy not just skills—but a living, embodied practice. Blending somatic work, shadow work, and relational dynamics, Peter guides participants through emotional intensity, power, and authentic self-expression with rigor, heart, and play. He trains coaches and community leaders while creating spaces where transformation, deep connection, and joy naturally unfold.', photo: '/facilitators/peter-benjamin.jpg' },
    { id: 102, name: 'Violet Starkey', role: 'Facilitator', bio: 'Violet Starkey (co-founder of Relational Interplay) is a transformational group facilitator, coach, entrepreneur, artist & community builder devoted to the art of evolutionary relationships. Trained in somatic shadow work, circle work, spiritual psychology, parts work, soul connection, authentic relating, and field facilitation, she guides individuals and couples to unlock and sustain deeper levels of conscious love, wisdom, embodied power, authenticity and intimacy than ever before.', photo: '/facilitators/violet-starkey.jpg' },
    { id: 103, name: 'Devorah Bry', role: 'Movement Facilitator', bio: 'dev has been working therapeutically and facilitating groups and rites of passages for 20+ years. she received an ordination from the IM School of Healing Arts in 2004 and a masters degree in Somatic Psychology in 2007. she is a Certified Hakomi Therapist and has years of study and practice in a variety of body-oriented healing modalities, including Somatic Experiencing and Biodynamic Cranio-Sacral Therapy.\n\ndev enjoys the potency that lives in the center and the views that can be accessed at the edges.\n\na mama, a death doula, a sex therapist, a forever student…\n\nassisting couples+ in the dance of relationship is one of dev\'s true gifts and deepest passions.\n\ndev is the founder and director of HoneyRoot.org -- a somatic education organization in service of inclusive embodiment, relational attunement, body wisdom, social justice and intergenerational ways of being.\n\nat essence, dev is a dancer, a bridger, a ceremonialist. she is a certified Soul Motion™️ teacher and offers movement ministry (at times, with her kiddo) wherever she goes.', photo: '/facilitators/devorah-bry.jpeg' },
    { id: 104, name: 'Signa', role: 'Yoga & Touch Facilitator', bio: 'Signa is a kundalini yoga instructor and embodiment facilitator offering practices that deepen awareness, pleasure, and connection. Her classes are known for creating safe, heart-opening experiences.', photo: '/facilitators/signa.jpg' },
    { id: 105, name: 'Yana', role: 'Ritual Facilitator', bio: 'Yana facilitates transformative ritual experiences, bringing depth and presence to collective ceremonies.', photo: '/facilitators/yana.jpeg' },
    { id: 106, name: 'Sequoia Kidwell', role: 'Shamanic & Bondage Facilitator', bio: 'Sequoia facilitates shamanic practices and bondage rituals as containers for healing, self-discovery, and transformational inner inquiry.', photo: '/facilitators/sequoia-kidwell.jpeg' },
    { id: 107, name: 'MxD', role: 'Movement & Embodiment Facilitator', bio: 'MxD offers a path to self-inquiry rooted in the principles of nature, restoring the mechanics of human movement and authentic expression.', photo: '/facilitators/mxd.jpg' },
    { id: 108, name: 'John Wolfstone', role: 'Ritual & Ceremony Facilitator', bio: 'John facilitates deep ritual work and ceremony, creating sacred containers for collective grief, transformation, and the integration of the full spectrum of human experience.', photo: '/facilitators/john-wolfstone.jpg' },
    { id: 109, name: 'Ethan Henson', role: 'Tantric Alchemist', bio: 'Ethan teaches tantric practices for transmuting emotional energy into bliss, connection, and profound union with the Soul.', photo: '/facilitators/ethan-henson.jpg' },
    { id: 110, name: 'Tribal DreamZ', role: 'DJ & Dance Facilitator', bio: 'Tribal DreamZ creates ecstatic dance church experiences through music, rhythm, and embodied community celebration.', photo: '/facilitators/tribal-dreamz.png' },
    { id: 111, name: 'Maxwell Wilson', role: 'Meditation Guide', bio: 'Maxwell facilitates meditation practices designed to cultivate inner peace, clarity, and connection. His teaching style is gentle, accessible, and deeply rooted in contemplative traditions.', photo: '/facilitators/maxwell-wilson.jpeg' },
    { id: 112, name: 'Courtney Babbidge', role: 'Relational Forge Facilitator', bio: 'Courtney is a facilitator who holds a provocative pole in relational edgework.\n\nShe guides people into the body\'s unspoken truths, helping them dismantle social masks and encounter the deeper forces shaping their relationships, choices, and sense of self.\n\nHer work opens doorways into the underworld of instinct, desire, fear, grief, and power, creating opportunities for profound honesty and transformation.\n\nNearly two decades of ministry, leadership, and retreat facilitation have shaped her capacity to sit with intensity without flinching and meet whatever rises with grounded presence and unwavering attention.', photo: '/facilitators/courtney-babbidge.jpg' },
    { id: 113, name: 'Steph Shinaberry', role: 'Pleasure & Embodiment Guide', bio: 'Steph is a pleasure and embodiment guide creating immersive, consent-forward experiences that invite people into deeper connection with themselves and others.\n\nThrough offerings like her monthly Lean In…Closer event and Temple Experiences, she curates intentional spaces where curiosity leads, boundaries are honored, and everything is always optional. These are living laboratories for exploring intimacy, communication, and embodied connection.\n\nShe works with individuals, couples, and groups. Her work blends grounded presence with playful exploration, supporting people to reconnect with their bodies, express their desires, and experience connection beyond the habitual and the familiar.', photo: '/facilitators/steph-shinaberry.jpg' },
    // Add more as needed - up to ~20
  ]

  // Staff - ~15 staff + ~10 volunteers
  const staff = [
    { id: 201, name: 'Staff Member 1', role: 'Logistics', bio: 'Bio to come', photo: '/team/placeholder.jpg' },
    { id: 202, name: 'Staff Member 2', role: 'Schedule', bio: 'Bio to come', photo: '/team/placeholder.jpg' },
    { id: 203, name: 'Staff Member 3', role: 'Support', bio: 'Bio to come', photo: '/team/placeholder.jpg' },
    { id: 204, name: 'Volunteer 1', role: 'Support Team', bio: 'Bio to come', photo: '/team/placeholder.jpg' },
    { id: 205, name: 'Volunteer 2', role: 'Support Team', bio: 'Bio to come', photo: '/team/placeholder.jpg' },
    // Add more as needed - up to ~25
  ]

  // Partners - ~20-40 people
  const partners = [
    { id: 301, name: 'Partner 1', role: 'Collaborator', bio: 'Bio to come', photo: '/team/placeholder.jpg' },
    { id: 302, name: 'Partner 2', role: 'Collaborator', bio: 'Bio to come', photo: '/team/placeholder.jpg' },
    { id: 303, name: 'Partner 3', role: 'Collaborator', bio: 'Bio to come', photo: '/team/placeholder.jpg' },
    { id: 304, name: 'Partner 4', role: 'Collaborator', bio: 'Bio to come', photo: '/team/placeholder.jpg' },
    // Add more as needed - up to ~40
  ]

  return (
    <div className="team-page">
      <section className="team-hero">
        <h1>Meet the Complete Team</h1>
        <p>REVEL is held and created by a collective of world-class facilitators, artists, and support staff united in the vision of cultural evolution.</p>
      </section>

      {/* CORE PRODUCTION TEAM - Featured */}
      <section className="team-section featured">
        <div className="section-header">
          <h2>Core Production Team</h2>
          <p className="section-description">The founders and primary holders of REVEL's vision and container.</p>
        </div>
        <div className="featured-grid">
          {coreProductionTeam.map((member) => (
            <div
              key={member.id}
              className="featured-card"
              onClick={() => setSelectedTeamMember(member)}
            >
              <div className="featured-photo-wrapper">
                <img src={member.photo} alt={member.name} className="featured-photo" />
              </div>
              <div className="featured-info">
                <h3 className="member-name">{member.name}</h3>
                <p className="member-role">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* TALENT */}
      <section className="team-section collapsible">
        <div className="section-header">
          <button
            className="section-toggle"
            onClick={() => toggleSection('talent')}
          >
            <span className="toggle-arrow">{expandedSection === 'talent' ? '▼' : '▶'}</span>
            <h2>Talent</h2>
            <span className="member-count">({talent.length})</span>
          </button>
          <p className="section-description">Facilitators, artists, musicians, and presenters shaping the field.</p>
        </div>
        {expandedSection === 'talent' && (
          <div className="grid-content">
            <div className="team-grid">
              {talent.map((member) => (
                <div
                  key={member.id}
                  className="team-card"
                  onClick={() => setSelectedTeamMember(member)}
                >
                  <div className="team-photo-wrapper">
                    <img src={member.photo} alt={member.name} className="team-photo" />
                  </div>
                  <div className="team-info">
                    <p className="member-name">{member.name}</p>
                    <p className="member-role">{member.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </section>

      {/* STAFF */}
      <section className="team-section collapsible">
        <div className="section-header">
          <button
            className="section-toggle"
            onClick={() => toggleSection('staff')}
          >
            <span className="toggle-arrow">{expandedSection === 'staff' ? '▼' : '▶'}</span>
            <h2>Staff & Support</h2>
            <span className="member-count">({staff.length})</span>
          </button>
          <p className="section-description">The team that keeps everything flowing and cared for.</p>
        </div>
        {expandedSection === 'staff' && (
          <div className="grid-content">
            <div className="team-grid">
              {staff.map((member) => (
                <div
                  key={member.id}
                  className="team-card"
                  onClick={() => setSelectedTeamMember(member)}
                >
                  <div className="team-photo-wrapper">
                    <img src={member.photo} alt={member.name} className="team-photo" />
                  </div>
                  <div className="team-info">
                    <p className="member-name">{member.name}</p>
                    <p className="member-role">{member.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </section>

      {/* PARTNERS */}
      <section className="team-section collapsible">
        <div className="section-header">
          <button
            className="section-toggle"
            onClick={() => toggleSection('partners')}
          >
            <span className="toggle-arrow">{expandedSection === 'partners' ? '▼' : '▶'}</span>
            <h2>Partners</h2>
            <span className="member-count">({partners.length})</span>
          </button>
          <p className="section-description">Strategic collaborators and partners in the REVEL vision.</p>
        </div>
        {expandedSection === 'partners' && (
          <div className="grid-content">
            <div className="team-grid">
              {partners.map((member) => (
                <div
                  key={member.id}
                  className="team-card"
                  onClick={() => setSelectedTeamMember(member)}
                >
                  <div className="team-photo-wrapper">
                    <img src={member.photo} alt={member.name} className="team-photo" />
                  </div>
                  <div className="team-info">
                    <p className="member-name">{member.name}</p>
                    <p className="member-role">{member.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </section>

      {/* TEAM MEMBER MODAL */}
      {selectedTeamMember && (
        <div 
          className="team-modal-overlay" 
          onClick={() => setSelectedTeamMember(null)}
        >
          <div 
            className="team-modal" 
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              className="modal-close" 
              onClick={() => setSelectedTeamMember(null)}
            >
              ✕
            </button>
            <div className="modal-layout">
              <div className="modal-photo-section">
                <img 
                  src={selectedTeamMember.photo} 
                  alt={selectedTeamMember.name} 
                  className="modal-photo"
                />
              </div>
              <div className="modal-content-section">
                <h2>{selectedTeamMember.name}</h2>
                <p className="modal-role">{selectedTeamMember.role}</p>
                <p className="modal-bio">{selectedTeamMember.bio}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Team
