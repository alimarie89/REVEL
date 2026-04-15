import React from 'react'
import '../styles/TeamVision.css'

function TeamVision() {
  return (
    <div className="team-vision-page">
      {/* HERO */}
      <section className="vision-hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1><span className="brand">REVEL</span><span className="subtitle">Team Vision</span></h1>
          <p>What we're building together</p>
        </div>
      </section>

      {/* TEAM OVERVIEW */}
      <section className="vision-section team-overview">
        <div className="vision-container">
          <h2>If you're reading this, it means you've been asked to be an architect of the container, the field, and the experience we're about to create together.</h2>
          
          <div className="overview-content">
            <p>
              Your embodied presence shapes how this space feels — from arrival to departure.
            </p>
            <p>
              Everyone on this team has skin in the game.
              All of us are contributing our time, care, and presence at a friends-and-family rate.
              What we are investing in is not just an event, but a community and culture we are building together.
            </p>

            <h3 className="holding-principles-intro">We get to:</h3>
            <div className="we-get-to-cards">
              <div className="practice-card">Create conditions where people feel safe enough to drop their guard</div>
              <div className="practice-card">Direct attention toward what's actually happening in the moment</div>
              <div className="practice-card">Interrupt and redirect performance into real contact</div>
              <div className="practice-card">Support people in staying present when intensity rises</div>
              <div className="practice-card">Stabilize the field so connection doesn't collapse or scatter</div>
            </div>
          </div>
        </div>
      </section>

      {/* OUR FOUNDATION */}
      <section className="vision-section our-foundation">
        <div className="vision-container">
          <h2>How We Show Up</h2>
          <p className="subtitle">Our Commitments</p>

          <div className="foundation-grid">
            <div className="foundation-item">
              <h3>Step Into Adult Consciousness</h3>
              <p>Take responsibility for your inner state, your choices, and your impact.
Regulate what you can.
Own what is yours.</p>
            </div>

            <div className="foundation-item">
              <h3>Follow Through</h3>
              <p>People organize around what you commit to.
Clear communication, integrity, and follow-through are part of how the whole holds.</p>
            </div>

            <div className="foundation-item">
              <h3>Pause</h3>
              <p>Pause when something feels off.
Allow yourself to be paused.
Reorient before continuing.</p>
            </div>

            <div className="foundation-item">
              <h3>Stay Present</h3>
              <p>Stay with what is actually happening.
Move at a pace you can stay present with.</p>
            </div>

            <div className="foundation-item">
              <h3>Practice Consent</h3>
              <p>All interaction is invitational.
Give clear signals.
Receive others clearly.
Update consent as it changes.</p>
            </div>

            <div className="foundation-item">
              <h3>Stay in Reality</h3>
              <p>Stay close to direct experience.
Check assumptions before acting on them.
Do not assign meaning without confirmation.</p>
            </div>

            <div className="foundation-item">
              <h3>Care for the Field</h3>
              <p>Track what is happening around you.
Respond when support is needed.
Do not let disconnection spread unnoticed.</p>
            </div>
          </div>
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
              <p className="circle-question">Can I stay present with what is happening inside of me?</p>
              <p className="circle-context">Safety is sourced in your ability to stay with yourself.</p>
            </div>

            <div className="circle-card">
              <div className="circle-number">2</div>
              <h3>Relational Field</h3>
              <p className="circle-subheader">(Attunement)</p>
              <p className="circle-question">Can I stay in real contact with another without performing?</p>
              <p className="circle-context">When two people show up in full presence,
something new forms between them.</p>
            </div>

            <div className="circle-card">
              <div className="circle-number">3</div>
              <h3>Group Field</h3>
              <p className="circle-subheader">(Collective Attunement)</p>
              <p className="circle-question">What does it take for a group to stay coherent under pressure?</p>
              <p className="circle-context">When individuals take responsibility for their impact,
the field holds.</p>
            </div>

            <div className="circle-card">
              <div className="circle-number">4</div>
              <h3>Cultural Field</h3>
              <p className="circle-subheader">(Stewardship)</p>
              <p className="circle-question">How do I carry what I practice here into the world?</p>
              <p className="circle-context">What happens here shows up in how you live.</p>
            </div>
          </div>
        </div>
      </section>

      {/* COLOR CHECK SYSTEM */}
      <section className="vision-section color-check-system">
        <div className="vision-container">
          <h2>The Color Check System</h2>
          <p className="subtitle">Shared language for the collective nervous system</p>
          
          <p className="color-intro">
            The color check system provides shared language to describe a weather report of our nervous system state. When we can name what's happening in our bodies and hearts, we move from isolation into connection.
          </p>

          {/* SPECTRUM VISUALIZATION */}
          <div className="color-spectrum">
            <div className="spectrum-band"></div>
            
            {/* Primary Activation Spectrum */}
            <div className="color-states-row">
              <div className="color-point green">
                <div className="color-dot"></div>
                <div className="color-label">
                  <h4>Green</h4>
                  <p>Regulated and present</p>
                </div>
              </div>

              <div className="color-point chartreuse">
                <div className="color-dot"></div>
                <div className="color-label">
                  <h4>Chartreuse</h4>
                  <p>Slightly activated but managing</p>
                </div>
              </div>

              <div className="color-point yellow">
                <div className="color-dot"></div>
                <div className="color-label">
                  <h4>Yellow</h4>
                  <p>Somewhat activated, may need support</p>
                </div>
              </div>

              <div className="color-point orange">
                <div className="color-dot"></div>
                <div className="color-label">
                  <h4>Orange</h4>
                  <p>Highly activated, immediate support required</p>
                </div>
              </div>

              <div className="color-point red">
                <div className="color-dot"></div>
                <div className="color-label">
                  <h4>Red</h4>
                  <p>Complete reactivity or collapse—danger zone we prevent</p>
                </div>
              </div>
            </div>

            {/* Blue State (Separate) */}
            <div className="color-states-separate">
              <div className="color-point blue">
                <div className="color-dot"></div>
                <div className="color-label">
                  <h4>Blue</h4>
                  <p>Dissociated or numb, may need support</p>
                </div>
              </div>
            </div>
          </div>

          {/* HOW WE USE IT */}
          <div className="color-practice">
            <h4>How We Use It</h4>
            <p>We track our own color and ask others if they might be activated. When you share your color, you're inviting the collective to know you, to adjust, and to care. The facilitator's job is to not lose track of you, creating a safety net to explore difficult areas.</p>
            <p className="color-example"><em>For example: "Yellow and the flavor is nervousness and excitement about what is going to happen during this session."</em></p>
          </div>
        </div>
      </section>

      {/* HOW THE CONTAINER HOLDS UNDER PRESSURE */}
      <section className="vision-section container-pressure">
        <div className="vision-container">
          <h2>How the Container Holds Under Pressure</h2>

          <div className="pressure-intro">
            <p>When intensity rises, the container is revealed in how we respond.</p>

            <p>The field is not held by a single person or role.<br/>
            It is held across layers.</p>

            <p>Some offer grounded presence.<br/>
            Some support emotional regulation.<br/>
            Some step in when situations require deeper skill and authority.</p>

            <p>What matters is not the title,<br/>
            but the ability to recognize what is needed —<br/>
            and respond accordingly.</p>
          </div>

          {/* EMOTIONAL SUPPORT ANGELS */}
          <div className="support-section">
            <h3>Emotional Support Angels</h3>

            <p>
              Emotional Support Angels are available points of contact for participants who need support returning to themselves.
            </p>

            <p>
              When available, they wear a designated wristband.<br/>
              When at capacity, they remove it.
            </p>

            <h4>Role</h4>
            <p>
              Offer grounded, regulated presence that others can orient to when they feel activated, overwhelmed, or disconnected.
            </p>

            <h4>Responsibilities</h4>
            <ul>
              <li>Offer grounded support for nervous system regulation</li>
              <li>Notice when someone may be in a yellow or blue state and check in</li>
              <li>Use the Color Check system to orient to participant state</li>
              <li>Support participants in returning toward green through presence and simple grounding</li>
              <li>Maintain awareness of the surrounding field</li>
            </ul>

            <p className="support-note">
              When activation is high, prioritize regulation over conversation.
            </p>

            <h4>Escalation</h4>
            <ul>
              <li>A participant is in orange or red</li>
              <li>There is significant activation or charge</li>
              <li>A participant reports a boundary crossing or violation</li>
              <li>A situation moves beyond your capacity</li>
            </ul>

            <h4>Limitations</h4>
            <p>
              This role does not include resolving complex situations or processing trauma.
            </p>
          </div>

          {/* INTEGRATION TEAM */}
          <div className="support-section">
            <h3>Integration Team</h3>

            <p>
              The Integration Team holds the deeper layer of support within the container.
            </p>

            <p>
              They work with participants experiencing significant activation, relational rupture, or dysregulation beyond the scope of Emotional Support Angels.
            </p>

            <p>
              This team consists of experienced facilitators trained to work with complex emotional and relational processes.
            </p>

            <p>
              One member of the team is a licensed mental health professional specializing in crisis intervention and clinical assessment.
            </p>

            <h4>Responsibilities</h4>
            <ul>
              <li>Track the overall emotional field</li>
              <li>Receive escalations and assess what is happening</li>
              <li>Work directly with participants in orange or red states</li>
              <li>Support regulation using somatic and relational approaches</li>
              <li>Address boundary violations, relational ruptures, and consent issues</li>
              <li>Support participants processing significant activation</li>
              <li>Coordinate with Emotional Support Angels and provide guidance</li>
              <li>Maintain availability and responsiveness during event hours</li>
              <li>Document significant incidents and ongoing support needs</li>
              <li>Debrief daily to maintain container coherence</li>
            </ul>

            <h4>Licensed Mental Health Professional</h4>
            <ul>
              <li>Provide crisis intervention for highest-need participants</li>
              <li>Support individuals experiencing severe dysregulation or acute distress</li>
              <li>Assist with risk assessment and complex situations</li>
              <li>Coordinate referrals to external care if needed</li>
              <li>Support the Integration Team with clinical perspective</li>
            </ul>
          </div>

        </div>
      </section>

      {/* CLOSING */}
      <section className="vision-section vision-closing">
        <div className="vision-container">
          <p className="closing-text">
            What we're building only works because of how it's held, and because of the people willing to help hold it. We're grateful you're here — not just to participate, but to help shape what REVEL becomes.
          </p>
        </div>
      </section>
    </div>
  )
}

export default TeamVision
