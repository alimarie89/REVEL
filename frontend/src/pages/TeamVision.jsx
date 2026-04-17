import React, { useState } from 'react'
import '../styles/TeamVision.css'

function TeamVision() {
  const [activeCircle, setActiveCircle] = useState('individual')

  const handleRingInteraction = (e) => {
    const svg = e.currentTarget;
    const rect = svg.getBoundingClientRect();
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    // Calculate distance from center (normalized to 0-1)
    const distance = Math.sqrt((mouseX - centerX) ** 2 + (mouseY - centerY) ** 2) / Math.min(centerX, centerY);
    
    // Determine which ring based on CSS visual sizes
    let ring = 'cultural'; // default to outermost
    if (distance <= 0.20) {
      ring = 'individual'; // ring-1: 20% width
    } else if (distance <= 0.45) {
      ring = 'relational'; // ring-2: 45% width
    } else if (distance <= 0.70) {
      ring = 'group'; // ring-3: 70% width
    }
    
    setActiveCircle(ring);
  };

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
              This is a team effort. All of us are contributing our time, care, and presence to create something impactful and amazing for ourselves, our communities, and the world.
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
          
          <div className="circles-visualization">
            <div className="circles-rings">
              <div className={`circle-ring ring-1 ${activeCircle === 'individual' ? 'active' : ''}`}>
                <div className="ring-label">Individual</div>
              </div>
              <div className={`circle-ring ring-2 ${activeCircle === 'relational' ? 'active' : ''}`}>
                <div className="ring-label">Relational</div>
              </div>
              <div className={`circle-ring ring-3 ${activeCircle === 'group' ? 'active' : ''}`}>
                <div className="ring-label">Group</div>
              </div>
              <div className={`circle-ring ring-4 ${activeCircle === 'cultural' ? 'active' : ''}`}>
                <div className="ring-label">Cultural</div>
              </div>
              
              {/* Interactive SVG overlay for proper ring detection */}
              <svg 
                className="rings-interactive" 
                viewBox="0 0 400 400"
                onMouseMove={handleRingInteraction}
                onClick={handleRingInteraction}
              >
                <circle cx="200" cy="200" r="200" fill="transparent" pointerEvents="auto" />
              </svg>
            </div>
            
            <div className="circles-detail-panel">
              <div className={`detail-content ${activeCircle === 'individual' ? 'active' : ''}`}>
                <h3>Individual Field</h3>
                <p className="circle-subheader">(Interoception)</p>
                <p className="circle-question">Can I stay present with what is happening inside of me?</p>
                <p className="circle-context">Safety is sourced in your ability to stay with yourself.</p>
              </div>

              <div className={`detail-content ${activeCircle === 'relational' ? 'active' : ''}`}>
                <h3>Relational Field</h3>
                <p className="circle-subheader">(Attunement)</p>
                <p className="circle-question">Can I stay in real contact with another without performing?</p>
                <p className="circle-context">When two people show up in full presence,
something new forms between them.</p>
              </div>

              <div className={`detail-content ${activeCircle === 'group' ? 'active' : ''}`}>
                <h3>Group Field</h3>
                <p className="circle-subheader">(Collective Attunement)</p>
                <p className="circle-question">What does it take for a group to stay coherent under pressure?</p>
                <p className="circle-context">When individuals take responsibility for their impact,
the field holds.</p>
              </div>

              <div className={`detail-content ${activeCircle === 'cultural' ? 'active' : ''}`}>
                <h3>Cultural Field</h3>
                <p className="circle-subheader">(Stewardship)</p>
                <p className="circle-question">How do I carry what I practice here into the world?</p>
                <p className="circle-context">What happens here shows up in how you live.</p>
              </div>
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

              <div className="color-point blue">
                <div className="color-dot"></div>
                <div className="color-label">
                  <h4>Blue</h4>
                  <p>Dissociated or numb, may need support</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW WE ADDRESS ACTIVATION IN THE FIELD */}
      <section className="vision-section container-pressure">
        <div className="vision-container">
          <h2>How We Address Activation in the Field</h2>

          <div className="pressure-intro">
            <p>When intensity rises, the container is revealed in how we respond.<br/>
            <br/>
            Using the Color Check system, we recognize participant activation and match it with the appropriate level of support.<br/>
            <br/>
            Yellow and blue are valid states—Emotional Support Angels check in and ask if someone needs support, offering presence without assuming change is needed.<br/>
            <br/>
            Orange needs to be held in a container—the Integration Team mobilizes to witness and support. Red requires active intervention—we go get them.</p>
          </div>

          {/* EMOTIONAL SUPPORT ANGELS */}
          <div className="support-section">
            <h3>Emotional Support Angels</h3>

            <p>
              Offer grounded, regulated presence that others can orient to when they feel activated, overwhelmed, or disconnected. When available, they wear a designated wristband—when at capacity, they remove it.
            </p>

            <h4>Responsibilities</h4>
            <ul>
              <li>Use the Color Check system to notice participant state and check in with those in yellow or blue</li>
              <li>Offer grounded presence and simple grounding to support participants in returning toward green</li>
            </ul>

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
              The Integration Team holds orange and red states—providing deeper support for complex activation, relational rupture, or dysregulation beyond the scope of Emotional Support Angels. This team consists of experienced facilitators trained to work with complex emotional and relational processes.
            </p>

            <div style={{marginTop: '30px'}}></div>

            <h4>Responsibilities</h4>
            <ul>
              <li>Track the overall emotional field</li>
              <li>Receive escalations and assess what is happening</li>
              <li>Hold and contain orange states; actively intervene in red states</li>
              <li>Support regulation using somatic and relational approaches</li>
              <li>Address boundary violations, relational ruptures, and consent issues</li>
              <li>Support participants processing significant activation</li>
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

      {/* FACILITATOR RESPONSIBILITY */}
      <section className="vision-section facilitator-responsibility">
        <div className="vision-container">
          <h2>Facilitator Responsibility</h2>
          <p>Each workshop requires someone designated to track the field throughout—noticing participants in blue or yellow states and checking in with them. This responsibility ensures that facilitators can remain present in their content while the collective field is being actively held and attended to.</p>
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
