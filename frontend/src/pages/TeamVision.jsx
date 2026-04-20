import React, { useState } from 'react'
import '../styles/TeamVision.css'

function TeamVision() {
  const [selectedCircle, setSelectedCircle] = useState('individual')
  const [hoveredCircle, setHoveredCircle] = useState(null)

  // Determine which level is displayed (hovered > selected > default)
  const displayedCircle = hoveredCircle || selectedCircle || 'individual'

  // Calculate which ring based on distance from center
  const getRingFromDistance = (distance) => {
    // Ring zones: 0-0.25 (with enlarged hit area for center), 0.25-0.50, 0.50-0.77, 0.77-1.0
    if (distance <= 0.25) return 'individual'
    if (distance <= 0.50) return 'relational'
    if (distance <= 0.77) return 'group'
    return 'cultural'
  }

  // Handle mouse movement on SVG overlay
  const handleRingHover = (e) => {
    const svg = e.currentTarget;
    const rect = svg.getBoundingClientRect();
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    const distance = Math.sqrt((mouseX - centerX) ** 2 + (mouseY - centerY) ** 2) / Math.min(centerX, centerY);
    const ring = getRingFromDistance(distance);
    setHoveredCircle(ring);
  }

  // Handle mouse leaving SVG
  const handleRingLeave = () => {
    setHoveredCircle(null)
  }

  // Handle click to lock selection
  const handleRingClick = (e) => {
    const svg = e.currentTarget;
    const rect = svg.getBoundingClientRect();
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    const distance = Math.sqrt((mouseX - centerX) ** 2 + (mouseY - centerY) ** 2) / Math.min(centerX, centerY);
    const ring = getRingFromDistance(distance);
    setSelectedCircle(ring);
  }

  // Handle label clicks for alternative interaction path
  const handleLabelClick = (level) => {
    setSelectedCircle(level)
    setHoveredCircle(null)
  }

  const handleLabelHover = (level) => {
    setHoveredCircle(level)
  }

  const handleLabelLeave = () => {
    setHoveredCircle(null)
  }

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

      {/* FLOODING & FIELD COHERENCE SECTION */}
      <section className="vision-section flooding-coherence">
        <div className="vision-container">
          <div className="transition-text">
            <p>These commitments matter most when the field is under pressure.</p>
            <p>These commitments are easy when we're resourced.
Under pressure, most people don't rise to their values — they default to familiar patterns like overexplaining, defending, or persuading.
Often, this floods the field.</p>
          </div>

          <h2>Flooding & Field Coherence</h2>

          <div className="flooding-content">
            <p>Intensity is welcome. Emotion is welcome. Activation is part of the work.</p>
            <p>What we are practicing is the ability to stay in contact without overwhelming the field.</p>

            <p>Flooding happens when activation moves faster than it can be held. It often looks like:</p>
            <div className="flooding-signs">
              <p>urgency that pressures others</p>
              <p>rapid escalation without pause</p>
              <p>repeating or intensifying without resolution</p>
              <p>tone that transfers stress rather than communicates clearly</p>
            </div>

            <p>It can also show up as discharge — releasing activation into the field in a way that seeks relief, but creates pressure for others.</p>

            <p>When flooding happens, connection breaks down and people begin to brace instead of relate.</p>

            <h3 className="subheading-title">The Practice</h3>

            <div className="practice-group">
              <p>We slow down before we spill over.
We allow ourselves to be paused.
We return to presence before continuing.</p>

              <p><em>When impact is named:</em></p>
              <p>We take responsibility for our impact before explaining our experience.</p>
            </div>

            <h3 className="subheading-title">In the Moment</h3>

            <p>Anyone can pause the field.</p>

            <p className="simple-cues-label">Simple cues:</p>
            <div className="simple-cues">
              <p>"Pause"</p>
              <p>"Can we slow this down?"</p>
              <p>"Let's soften"</p>
            </div>

            <p><em>When a pause is called:</em></p>
            <p>we stop, breathe, and reset tone and pacing before continuing.</p>

            <h3 className="subheading-title">The Standard</h3>

            <p>We are not trying to eliminate intensity.</p>

            <p>We are building the capacity for intensity to exist without destabilizing connection.</p>
          </div>
        </div>
      </section>

      {/* CONCENTRIC CIRCLES OF PRESENCE */}
      <section className="vision-section concentric-circles">
        <div className="vision-container">
          <h2>The Concentric Circles of Presence</h2>
          <p className="subtitle">What we model and teach here becomes the world we live in</p>
          
          <div className="circles-visualization">
            <div className="circles-column">
              <div className="circles-rings">
                <div className={`circle-ring ring-1 ${displayedCircle === 'individual' ? 'active' : ''} ${selectedCircle === 'individual' ? 'selected' : ''}`}>
                </div>
                <div className={`circle-ring ring-2 ${displayedCircle === 'relational' ? 'active' : ''} ${selectedCircle === 'relational' ? 'selected' : ''}`}>
                </div>
                <div className={`circle-ring ring-3 ${displayedCircle === 'group' ? 'active' : ''} ${selectedCircle === 'group' ? 'selected' : ''}`}>
                </div>
                <div className={`circle-ring ring-4 ${displayedCircle === 'cultural' ? 'active' : ''} ${selectedCircle === 'cultural' ? 'selected' : ''}`}>
                </div>
                
                {/* Interactive SVG overlay for precise ring zones */}
                <svg 
                  className="rings-interactive" 
                  viewBox="0 0 400 400"
                  onMouseMove={handleRingHover}
                  onMouseLeave={handleRingLeave}
                  onClick={handleRingClick}
                >
                  <circle cx="200" cy="200" r="200" fill="transparent" pointerEvents="auto" />
                </svg>
              </div>

              {/* Ring labels as alternative interaction path */}
              <div className="circles-labels">
                <button 
                  className={`circle-label-btn ${displayedCircle === 'individual' ? 'active' : ''} ${selectedCircle === 'individual' ? 'selected' : ''}`}
                  onMouseEnter={() => handleLabelHover('individual')}
                  onMouseLeave={handleLabelLeave}
                  onClick={() => handleLabelClick('individual')}
                >
                  Self
                </button>
                <button 
                  className={`circle-label-btn ${displayedCircle === 'relational' ? 'active' : ''} ${selectedCircle === 'relational' ? 'selected' : ''}`}
                  onMouseEnter={() => handleLabelHover('relational')}
                  onMouseLeave={handleLabelLeave}
                  onClick={() => handleLabelClick('relational')}
                >
                  Relational
                </button>
                <button 
                  className={`circle-label-btn ${displayedCircle === 'group' ? 'active' : ''} ${selectedCircle === 'group' ? 'selected' : ''}`}
                  onMouseEnter={() => handleLabelHover('group')}
                  onMouseLeave={handleLabelLeave}
                  onClick={() => handleLabelClick('group')}
                >
                  Group
                </button>
                <button 
                  className={`circle-label-btn ${displayedCircle === 'cultural' ? 'active' : ''} ${selectedCircle === 'cultural' ? 'selected' : ''}`}
                  onMouseEnter={() => handleLabelHover('cultural')}
                  onMouseLeave={handleLabelLeave}
                  onClick={() => handleLabelClick('cultural')}
                >
                  Cultural
                </button>
              </div>
            </div>
            
            <div className="circles-detail-panel">
              <div className={`detail-content ${displayedCircle === 'individual' ? 'active' : ''}`} key="individual">
                <h3>Individual Field</h3>
                <p className="circle-subheader">(Interoception)</p>
                <p className="circle-question">Can I stay present with what is happening inside of me?</p>
                <p className="circle-context">Safety is sourced in your ability to stay with yourself.</p>
              </div>

              <div className={`detail-content ${displayedCircle === 'relational' ? 'active' : ''}`} key="relational">
                <h3>Relational Field</h3>
                <p className="circle-subheader">(Attunement)</p>
                <p className="circle-question">Can I stay in real contact with another without performing?</p>
                <p className="circle-context">When two people show up in full presence,
something new forms between them.</p>
              </div>

              <div className={`detail-content ${displayedCircle === 'group' ? 'active' : ''}`} key="group">
                <h3>Group Field</h3>
                <p className="circle-subheader">(Collective Attunement)</p>
                <p className="circle-question">What does it take for a group to stay coherent under pressure?</p>
                <p className="circle-context">When individuals take responsibility for their impact,
the field holds.</p>
              </div>

              <div className={`detail-content ${displayedCircle === 'cultural' ? 'active' : ''}`} key="cultural">
                <h3>Cultural Field</h3>
                <p className="circle-subheader">(Stewardship)</p>
                <p className="circle-question">How do I carry what I practice here into the world?</p>
                <p className="circle-context">Take responsibility for modeling this presence in your daily life.</p>
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

      {/* FACILITATOR RESPONSIBILITIES */}
      <section className="vision-section facilitator-responsibility">
        <div className="vision-container">
          <h2>Facilitator Responsibilities</h2>
          
          <p>Each workshop requires someone designated to track the field throughout—noticing participants in blue or yellow states and checking in with them. This responsibility ensures that facilitators can remain present in their content while the collective field is being actively held and attended to.</p>

          <div className="facilitator-sections">
            <div className="facilitator-subsection">
              <h3>Preparation</h3>
              <p>Two 90-minute live prep calls will be held for all core and support team members prior to REVEL 2026.</p>
              <ul>
                <li><strong>First Prep Call (Relational)</strong><br/>Thursday, 5/21, 2–3:30pm MDT</li>
                <li><strong>Second Prep Call (Final Preparation)</strong><br/>Thursday, 6/18, 2–3:30pm MDT</li>
              </ul>
            </div>

            <div className="facilitator-subsection">
              <h3>Preparatory Materials</h3>
              <p>Prior to the event, support team members will receive materials outlining shared language used at REVEL 2026. Support team members are expected to review these materials before arrival.</p>
            </div>

            <div className="facilitator-subsection">
              <h3>Support Team Meeting (Onsite)</h3>
              <p>All support team members are expected to attend a live support team meeting at the beginning of REVEL 2026.</p>
              <ul>
                <li><strong>Thursday, 7/2, 11am–1pm MDT</strong></li>
              </ul>
            </div>

            <div className="facilitator-subsection">
              <h3>Debrief & Staff Integration</h3>
              <p>A 90-minute debrief call will be scheduled for all core and support team members to integrate the experience.</p>
              <ul>
                <li><strong>Thursday, 7/23, 2–3:30pm MDT</strong></li>
              </ul>
            </div>
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
