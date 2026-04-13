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
              Not someone consuming what's happening. Not someone buying a ticket and showing up. Because of your skills, your talent, and your extensive growth work, you're being asked to contribute much more than people who simply pay for a ticket and show up — to actively shape the tone, the texture, the way people land and the way they leave.
            </p>
            <p>
              This is a different way of doing things. Everyone here is a co-creator of the field. We're all showing up in a spirit that's closer to friends and family than to a standard professional arrangement. No one is being compensated at a professional level. That might mean contributing your work at a lower rate than usual, wearing multiple hats, or giving in ways that go beyond a clearly defined role.
            </p>
            <p>
              And because people are relying on you: we need people who follow through, communicate clearly, and stay engaged even when things get complex. That's what allows this kind of co-creation to actually work.
            </p>
          </div>
        </div>
      </section>

      {/* THE CONTAINER WE'RE CREATING */}
      <section className="vision-section three-pillars-vision">
        <div className="vision-container">
          <h2>The Container We're Creating</h2>
          <p className="subtitle">The three pillars of conscious evolution</p>
          
          <div className="pillars-grid">
            <div className="pillar-card">
              <h3>Relational Field</h3>
              <p className="pillar-question">What happens when two people show up in full presence?</p>
              <p className="pillar-answer">Something new forms between them.</p>
              <p className="pillar-context">We're architecting moments and spaces where real contact is possible. This starts with us — the team — showing up for each other.</p>
            </div>

            <div className="pillar-card">
              <h3>Group Field</h3>
              <p className="pillar-question">What happens when you aren't bracing or performing?</p>
              <p className="pillar-answer">Liberation becomes possible.</p>
              <p className="pillar-context">We're creating a group container strong enough to hold vulnerability. That requires all of us to be present, to care, and to follow through.</p>
            </div>

            <div className="pillar-card">
              <h3>Cultural Field</h3>
              <p className="pillar-question">What happens when you take what you have learned out into the world?</p>
              <p className="pillar-answer">It changes the world around you.</p>
              <p className="pillar-context">We're not just creating one event. We're modeling something for a larger cultural conversation about connection, consciousness, and what's possible together.</p>
            </div>
          </div>
        </div>
      </section>

      {/* PURPOSE OF FACILITATORS */}
      <section className="vision-section facilitators-purpose">
        <div className="vision-container">
          <h2>What Happens When World-Class Facilitators Hold the Field Collectively</h2>
          
          <div className="purpose-list">
            <div className="purpose-item">
              <h4>Conditions are created where people feel safe enough to drop their guard.</h4>
            </div>
            <div className="purpose-item">
              <h4>Attention is guided toward what's actually happening in the moment.</h4>
            </div>
            <div className="purpose-item">
              <h4>Patterns that disconnect people are interrupted.</h4>
            </div>
            <div className="purpose-item">
              <h4>Real contact is invited instead of performance.</h4>
            </div>
            <div className="purpose-item">
              <h4>People are helped to stay present under intensity instead of checking out.</h4>
            </div>
            <div className="purpose-item">
              <h4>The space is shaped so connection doesn't collapse or scatter.</h4>
            </div>
          </div>

          <p className="purpose-closing">
            <em>And all of this depends on the people behind the scenes — the ones coordinating, the ones holding logistics, the ones showing up in their specific roles. Every person in this container is part of making that possible.</em>
          </p>
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

      {/* HOW WE SHOW UP */}
      <section className="vision-section how-we-show-up">
        <div className="vision-container">
          <h2>How We Show Up Together</h2>
          <p className="subtitle">What we model and help each other step into</p>

          <div className="show-up-grid">
            <div className="show-up-item">
              <h3>To be real in the moment.</h3>
              <p>Not performing. Not polished. Actually present with what's true, what's alive, what's happening right now.</p>
            </div>

            <div className="show-up-item">
              <h3>To engage instead of staying at a distance.</h3>
              <p>When things matter, show up. When someone needs support, step in. When the space needs you, be there — not watching from the sidelines.</p>
            </div>

            <div className="show-up-item">
              <h3>To remain present when things get uncomfortable.</h3>
              <p>Discomfort is where growth happens. We stay in the conversation, stay in the feeling, stay in the space instead of checking out or leaving when it gets hard.</p>
            </div>

            <div className="show-up-item">
              <h3>To step into self-regulation, self-containment, and adult consciousness.</h3>
              <p>We manage our own nervous systems. We don't dump our stuff on others. We take responsibility for our experience and our impact. We grow up in how we show up.</p>
            </div>
          </div>

          <p className="show-up-closing">
            These aren't just practices we embody — they're what we teach, model, and help others discover. If someone is uncomfortable or scared when stepping into these practices, we help them. We remember what it felt like when we first learned what this takes.
          </p>
        </div>
      </section>

      {/* OUR COMMITMENT */}
      <section className="vision-section our-commitment">
        <div className="vision-container">
          <h2>Our Commitment</h2>
          
          <div className="commitment-grid">
            <div className="commitment-item">
              <h3>Show Up Real</h3>
              <p>Not performing, not half-present. Bringing your actual self — your concerns, your gifts, your presence.</p>
            </div>

            <div className="commitment-item">
              <h3>Follow Through</h3>
              <p>When you commit to something on this team, people are relying on you. Communication, reliability, and integrity matter.</p>
            </div>

            <div className="commitment-item">
              <h3>Care About What's Being Built</h3>
              <p>This isn't transactional. We're looking for people who genuinely care about creating something rare and real.</p>
            </div>

            <div className="commitment-item">
              <h3>Stay Engaged Through Complexity</h3>
              <p>Building something meaningful gets messy. We need people who can stay present and adaptive when things stretch.</p>
            </div>

            <div className="commitment-item">
              <h3>Contribute Your Unique Gifts</h3>
              <p>Whether it's your skills, your presence, your leadership, your creativity — we value what only you can bring.</p>
            </div>

            <div className="commitment-item">
              <h3>Trust the Container We're Building</h3>
              <p>There's something happening here that's bigger than any one person. Trust the vision, the team, and the process.</p>
            </div>
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
