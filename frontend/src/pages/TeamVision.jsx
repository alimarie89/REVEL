import React, { useState } from 'react'
import '../styles/TeamVision.css'

function TeamVision() {
  const [expandedRole, setExpandedRole] = useState(null)

  const toggleRole = (id) => {
    setExpandedRole(expandedRole === id ? null : id)
  }

  const roles = [
    {
      id: 'core',
      title: 'Core Production Team',
      description: 'Hold the vision and container',
      responsibilities: [
        'Strategic decision-making and direction',
        'Holding the overall container and integrity of the space',
        'Mentoring and supporting other team members',
        'Ensuring follow-through and communication'
      ]
    },
    {
      id: 'talent',
      title: 'Talent & Facilitators',
      description: 'Shape the experience moment to moment',
      responsibilities: [
        'Leading workshops, circles, and practices',
        'Bringing your specific skills and presence',
        'Holding presence with participants',
        'Contributing to the texture and tone of the gathering'
      ]
    },
    {
      id: 'staff',
      title: 'Staff & Support',
      description: 'Make the logistics of magic possible',
      responsibilities: [
        'Operations, logistics, and coordination',
        'Creating the physical and logistical container',
        'Supporting participants and team members',
        'Problem-solving and adapting in real time'
      ]
    },
    {
      id: 'partners',
      title: 'Partners & Collaborators',
      description: 'Extend the reach and impact',
      responsibilities: [
        'Bringing specialized expertise and resources',
        'Helping shape specific aspects of the experience',
        'Contributing your unique gifts and perspective',
        'Being part of the larger ecosystem'
      ]
    }
  ]

  return (
    <div className="team-vision-page">
      {/* HERO */}
      <section className="vision-hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>Team Vision</h1>
          <p>What we're building together</p>
        </div>
      </section>

      {/* TEAM OVERVIEW */}
      <section className="vision-section team-overview">
        <div className="vision-container">
          <h2>If you're reading this, it means you've been asked to be an architect — of the container, the field, the experience that's about to unfold.</h2>
          
          <div className="overview-content">
            <p>
              Because of your unique skills and the extensive growth work you've done, you're being asked to actively shape the tone, the texture, the way people land and the way they leave.
            </p>
            <p>
              This isn't organized top-down by a few people making profit. Everyone on this team has skin in the game — contributing your time, presence, and resources — because we're building something together that we all care about. We're showing up in a spirit that's closer to friends and family, which means no one is compensated at a professional level. That might mean contributing your work at a lower rate than usual, wearing multiple hats, or giving in ways that go beyond a clearly defined role.
            </p>
            <p>
              The investment we're asking you to make is to support building lasting community that you want to be part of. When you commit to something on this team, people are relying on you. We need people who follow through, communicate clearly, and lean in when shit gets real.
            </p>
          </div>
        </div>
      </section>

      {/* OUR FOUNDATION */}
      <section className="vision-section our-foundation">
        <div className="vision-container">
          <h2>Our Foundation</h2>
          <p className="subtitle">Universal commitments that enable all presence</p>

          <div className="foundation-grid">
            <div className="foundation-item">
              <h3>Show Up Real</h3>
              <p>Not performing, not half-present. Bringing your actual self—your concerns, your gifts, your presence.</p>
            </div>

            <div className="foundation-item">
              <h3>Engage Instead of Staying at a Distance</h3>
              <p>When things matter, show up. When someone needs support, step in. When the space needs you, be there.</p>
            </div>

            <div className="foundation-item">
              <h3>Remain Present When Things Get Uncomfortable</h3>
              <p>Discomfort is where growth happens. We stay in the conversation, stay in the feeling, instead of checking out when it gets hard.</p>
            </div>

            <div className="foundation-item">
              <h3>Step Into Adult Consciousness</h3>
              <p>We manage our own nervous systems. We take responsibility for our experience and our impact.</p>
            </div>

            <div className="foundation-item">
              <h3>Follow Through</h3>
              <p>When you commit to something on this team, people are relying on you. Communication, reliability, and integrity matter.</p>
            </div>

            <div className="foundation-item">
              <h3>Contribute Your Unique Gifts</h3>
              <p>Whether it's your skills, your presence, your leadership, your creativity—we value what only you can bring.</p>
            </div>
          </div>

          <p className="foundation-closing">
            These aren't just practices we embody — they're what we teach, model, and help others discover. If someone is uncomfortable or scared when stepping into these practices, we help them. We remember what it felt like when we first learned what this takes.
          </p>
        </div>
      </section>

      {/* CONCENTRIC CIRCLES OF PRESENCE */}
      <section className="vision-section concentric-circles">
        <div className="vision-container">
          <h2>The Concentric Circles of Presence</h2>
          <p className="subtitle">Building from the inside out—interoception to stewardship</p>
          
          <div className="circles-grid">
            <div className="circle-card">
              <div className="circle-number">1</div>
              <h3>Individual Field</h3>
              <p className="circle-subheader">(Interoception)</p>
              <p className="circle-question">Can I be present with what's happening inside me?</p>
              <p className="circle-context">This is where it starts. Before we can show up for others, we need to be available to ourselves—aware of what's happening inside us, what we're feeling, what we actually care about. Integrity begins here. This is the foundation for everything that follows.</p>
            </div>

            <div className="circle-card">
              <div className="circle-number">2</div>
              <h3>Relational Field</h3>
              <p className="circle-subheader">(Attunement)</p>
              <p className="circle-question">Can I create real contact with another person?</p>
              <p className="circle-context">When two people show up in full presence, something new forms between them. We're architecting moments and spaces where real contact is possible. This is built on the ability to attune to another person's nervous system—to accurately sense what's happening over there in the other and between us. Real contact is the antidote to performance and disconnection.</p>
            </div>

            <div className="circle-card">
              <div className="circle-number">3</div>
              <h3>Group Field</h3>
              <p className="circle-subheader">(Collective Attunement)</p>
              <p className="circle-question">What happens when you aren't bracing or performing? Liberation becomes possible.</p>
              <p className="circle-context">We manage our own nervous systems so we're not dumping our stuff on the group. We take responsibility for both our experience and our impact on the field. We care for the collective nervous system by being self-regulated, self-contained, and growing up in how we show up. This is adult consciousness—knowing we're not separate, we affect the whole, and we're responsible for that. When enough people show up this way, liberation becomes possible.</p>
            </div>

            <div className="circle-card">
              <div className="circle-number">4</div>
              <h3>Cultural Field</h3>
              <p className="circle-subheader">(Steward of Humanity)</p>
              <p className="circle-question">What happens when you take what you have learned out into the world? It changes the world around you.</p>
              <p className="circle-context">We're not just creating one event. We're modeling something for a larger cultural conversation about connection, consciousness, and what's possible together. As stewards of humanity, we carry what we've learned beyond REVEL, rippling consciousness into the world. We recognize that what we build together affects the larger cultural field.</p>
            </div>
          </div>
        </div>
      </section>

      {/* COLOR CHECK SYSTEM */}
      <section className="vision-section color-check-system">
        <div className="vision-container">
          <h2>The Color Check System</h2>
          <p className="subtitle">Shared language for the collective nervous system</p>
          
          <p className="color-intro">The color check system provides shared language to describe a weather report of our nervous system state. This practice is built on two foundational values: <strong>care for the collective nervous system</strong> and <strong>the power of developing language together</strong>.</p>
          
          <p className="color-intro">When we can name what's happening in our bodies and hearts, we move from isolation into connection. When you share your color, you're inviting the collective to know you, to adjust, to care.</p>

          <div className="colors-grid">
            <div className="color-item green">
              <h4>Green</h4>
              <p>Regulated and present.</p>
            </div>

            <div className="color-item chartreuse">
              <h4>Chartreuse</h4>
              <p>Not green, but not yellow either. Slightly activated but managing.</p>
            </div>

            <div className="color-item yellow">
              <h4>Yellow</h4>
              <p>Somewhat activated, may need support.</p>
            </div>

            <div className="color-item orange">
              <h4>Orange</h4>
              <p>Highly activated, immediate support required.</p>
            </div>

            <div className="color-item red">
              <h4>Red</h4>
              <p>Complete reactivity or collapse; this is a danger zone we aim to prevent through proactive use of the color system.</p>
            </div>

            <div className="color-item blue">
              <h4>Blue</h4>
              <p>Dissociated or numb, may need support.</p>
            </div>
          </div>

          <div className="color-practice">
            <h4>How We Use It</h4>
            <p>We take care of ourselves by tracking our own color and take care of others by asking if we notice they might be activated. The facilitator's job is to not lose track of you. This helps create a safety net for you to explore difficult areas.</p>
            <p className="color-example"><em>For example: "Yellow and the flavor is nervousness and excitement about what is going to happen during this session."</em></p>
          </div>
        </div>
      </section>

      {/* EVERY ROLE MATTERS */}
      <section className="vision-section every-role-matters">
        <div className="vision-container">
          <h2>Every Role Is Architecture</h2>
          <p className="subtitle">What each tier contributes to the whole</p>

          <div className="roles-list">
            {roles.map((role) => (
              <div key={role.id} className="role-item">
                <button 
                  className="role-header"
                  onClick={() => toggleRole(role.id)}
                >
                  <div className="role-title-section">
                    <h3>{role.title}</h3>
                    <p className="role-description">{role.description}</p>
                  </div>
                  <span className="role-toggle">
                    {expandedRole === role.id ? '−' : '+'}
                  </span>
                </button>

                {expandedRole === role.id && (
                  <div className="role-content">
                    <ul>
                      {role.responsibilities.map((resp, idx) => (
                        <li key={idx}>{resp}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CLOSING */}
      <section className="vision-section vision-closing">
        <div className="vision-container">
          <p className="closing-text">
            We're grateful you're here. Not just to participate, but to actively shape what REVEL becomes. The container we're building is stronger, more textured, and more alive because you're part of it.
          </p>
        </div>
      </section>
    </div>
  )
}

export default TeamVision
