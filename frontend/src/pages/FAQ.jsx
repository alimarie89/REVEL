import React, { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import '../styles/FAQ.css'

function FAQ() {
  const [activeCategory, setActiveCategory] = useState('about')
  const [expandedQuestion, setExpandedQuestion] = useState(null)
  const categoriesRef = useRef({})

  const categories = [
    {
      id: 'about',
      name: 'About REVEL',
      icon: '✦',
      description: 'Learn what REVEL is and what to expect'
    },
    {
      id: 'tantra',
      name: 'Tantra, Temple & Culture',
      icon: '⚜',
      description: 'Understand our approach to tantra and eros'
    },
    {
      id: 'safety',
      name: 'Safety, Consent & Support',
      icon: '♡',
      description: 'Our agreements and support systems'
    },
    {
      id: 'tickets',
      name: 'Tickets & Financial Support',
      icon: '🎟',
      description: 'Tickets, transfers, and scholarships'
    },
    {
      id: 'arrival',
      name: 'Travel & Arrival',
      icon: '→',
      description: 'Logistics and timing'
    },
    {
      id: 'camping',
      name: 'Camping & Lodging',
      icon: '⛺',
      description: 'Accommodations and facilities'
    },
    {
      id: 'food',
      name: 'Food, Water & Site Policies',
      icon: '🌿',
      description: 'Meals and site guidelines'
    }
  ]

  const faqs = {
    about: [
      {
        q: 'What is REVEL?',
        a: 'REVEL is a 3-day convergence held at Sunrise Ranch, bringing together the right people, a thoughtfully designed container, and shared leadership to create something alive, relational, and participatory. This is an 18+ event.'
      },
      {
        q: 'How is REVEL different from other events?',
        a: 'More intimate than a festival. More free and expansive than a retreat. REVEL is a culture-making convergence at the intersection of dance, tantra, art, somatics, sexuality, community, and collective evolution.'
      },
      {
        q: 'What is the format?',
        a: 'REVEL is a choose-your-own-adventure experience, with multiple tracks of programming woven throughout the day and night, so you can follow what calls you, rest when you need to, and go as deep as you want.'
      },
      {
        q: 'What kind of programming?',
        a: 'Programming includes: Dance, embodiment, and connection workshops interspersed with down-time, pool hangs, rituals, talks, and live DJ sets by headliners like The Human Experience. Nighttime offerings include a down-regulation and rest option, and a collective ritual experience held by a world-class guide accompanied by epic DJs and live musicians.'
      },
      {
        q: 'Is there time to rest?',
        a: 'Yes. Time to nourish yourself includes eating incredible farm-fresh food, relaxing by the pool, exploring the land, or taking spacious downtime by yourself or with friends.'
      },
      {
        q: 'Will there be a container-setting experience?',
        a: 'Yes. We will have a required opening ceremony where we establish shared agreements and a strong collective container that carries us through the convergence.'
      },
      {
        q: 'What if I want a more G-rated experience?',
        a: 'While REVEL will be a space with opportunities to explore the full spectrum of our human aliveness, including sensual or erotic nature, there will always be programming available for anyone wanting a more solo or G-rated experience. You will be honored, supported and celebrated for where you\'re at.'
      },
      {
        q: 'Who is REVEL for?',
        a: 'REVEL is for: Dancers, creatives, lovers, seekers, and community-builders. Those passionate about deepening their dance and tantra practice. Dance Meets Tantra alumni looking for a celebratory, expansive way to gather. People who crave depth and play. Those who want to contribute to the field, not just consume an event. Anyone drawn to safely exploring their edges in a loving, trauma-informed environment. Those who want to drink deeply from the wisdom of leading voices in embodiment, relational intimacy, sacred sexuality, and shadow work.'
      },
      {
        q: 'What\'s the age requirement?',
        a: 'REVEL is 18+.'
      },
      {
        q: 'What does my ticket include?',
        a: 'Included with your ticket: All workshops, dances, rituals, concerts, and talks. Opening and closing ceremonies. Access to all grounds and chill spaces. Parking. Camping space.'
      },
      {
        q: 'What\'s not included?',
        a: 'Not included: Indoor lodging (available as an upgrade). Meal plan (incredible farm-to-table meals available for purchase). Camping gear and personal supplies.'
      }
    ],
    tantra: [
      {
        q: 'What is your relationship to Tantra?',
        a: 'For us, Tantra is the practice and art of being fully alive. There is nothing sexual in nature in the activities we share. Sometimes sexual energy arises, and it is only permitted within the context of consent, agreements, and the container that is set. Our intention is to support individuals in deepening their love, respect, and relationship with themselves, others, and the earth. We believe that dance, eros, and Tantra are fundamental aspects of living a vibrant, empowered, and creative life.'
      },
      {
        q: 'Do you represent classical Tantra?',
        a: 'We hold deep honor and respect for classical Tantra and the lineages from which it originates. While classical Tantra profoundly influences our work, we do not present ourselves as representatives of classical Tantra.'
      },
      {
        q: 'Is REVEL a sex event?',
        a: 'REVEL is not a sex event. While we are eros-positive and welcome the full spectrum of human aliveness—including sensuality and the erotic dimension—the focus is on deepening dance, embodiment, tantra as practice, relational connection, and cultural evolution. Sexual activity is not part of the programming or container.'
      },
      {
        q: 'Do I need a partner?',
        a: 'No. REVEL is designed for solo travelers, couples, friend groups, and everyone in between. You will have the choice to partner with others or to journey solo throughout the event.'
      },
      {
        q: 'Can I bring my service animal?',
        a: 'No dogs or pets are allowed, unless they are legitimate service animals with proper documentation.'
      }
    ],
    safety: [
      {
        q: 'Is REVEL substance-free?',
        a: 'REVEL is a substance-free event. No alcohol or drugs are permitted. All attendees must follow local, state, and federal laws.'
      },
      {
        q: 'What items are not allowed?',
        a: 'No weapons, glass, or unapproved vending. No unapproved amplified music, drones, or video recording.'
      },
      {
        q: 'What are the core agreements?',
        a: 'We gather in alignment with the following:\n\n• Substance-free — supporting clarity, presence, and real connection.\n• Trauma-informed — honoring pacing, boundaries, and diverse nervous systems.\n• Consent culture — practicing clear, ongoing, and responsive consent.\n• Eros-positive — welcoming eros as a life force, without making sexuality the focus.\n• "Bottoms stay on" — a shared clothing boundary in public spaces.\n• Permission — to be fully alive, expressed, and human.\n• Safety — grounded in attunement, responsibility, and respect.\n• Vulnerability — creating space to be real, not perform.\n• Treat all beings with respect.\n\nAnyone not honoring these agreements may be asked to leave the property.'
      },
      {
        q: 'Do I have to participate in everything?',
        a: 'No. You are always welcome to witness an exercise, take space, or step out and return when you\'re ready.'
      },
      {
        q: 'Can I stay with my partner?',
        a: 'You and your partner will always have the choice to stay together or to partner with others, depending on what feels right in the moment.'
      },
      {
        q: 'What if I get overwhelmed?',
        a: 'We place a strong emphasis on caring for the collective nervous system. You are encouraged to pause at any time so that growth edges stay within a metabolizable range. We\'ll have emotional support available for anyone who wants support moving through a big experience or finds themselves past an edge. We will have a trauma-informed support team available to work with and support anyone experiencing a challenge or an edge.'
      },
      {
        q: 'Do I need to sign a waiver?',
        a: 'All attendees must sign a waiver before entering, including the Sunrise Ranch waiver.'
      },
      {
        q: 'What about wristbands?',
        a: 'All tickets must be exchanged for a wristband, which must be worn at all times during the event.'
      },
      {
        q: 'Are Dance Meets Tantra and Sunrise Ranch liable for damages?',
        a: 'Dance Meets Tantra and Sunrise Ranch are not responsible for lost items, damages, or personal injury.'
      }
    ],
    tickets: [
      {
        q: 'Are tickets refundable?',
        a: 'All ticket purchases are non-refundable. This is a rain-or-shine event. REVEL is a curated, high-touch convergence with limited capacity. Each spot is intentionally held, and your registration directly supports the financial and relational container we are building together.'
      },
      {
        q: 'Can I transfer my ticket?',
        a: 'If your plans change, you are welcome to transfer your ticket to another person. You can do this by emailing revel@dancemeetstantra.com with your full name and the full name and email address of the person you are transferring your ticket to. All items on the original ticket need to be transferred at once; you cannot transfer only a few items.'
      },
      {
        q: 'Are scholarships available?',
        a: 'At Dance Meets Tantra, we recognize that access is shaped by many factors. We offer two primary pathways for reduced ticket access.'
      },
      {
        q: 'What is the Diverse Backgrounds Partial Scholarship?',
        a: 'For those navigating financial constraints or systemic barriers. This support is not tied to labor or contribution and is typically 15-25% off. Apply on the ticket page.'
      },
      {
        q: 'What is Work-Trade?',
        a: 'For those who prefer to contribute time and energy in exchange for a reduced ticket. Standard work-trade is $100 off per shift (3-4 hours depending on role) and tickets are available directly on the ticket page. If you want to help more than this, you can apply for additional shifts.'
      },
      {
        q: 'Can I contribute a workshop or talk?',
        a: 'Our presenter team is nearly at capacity. We do still have a few spots remaining for shorter talks, workshops, and creative offerings from within the participant pool. If you feel called to contribute, the best way to be considered is to purchase a ticket and email your proposed offering to revel@dancemeetstantra.com. If you already have a relationship with Spencer, you\'re welcome to reach out to him directly.'
      }
    ],
    arrival: [
      {
        q: 'When does camping open?',
        a: 'Camping opens Thursday, July 2 at 1pm.'
      },
      {
        q: 'When is registration and check-in?',
        a: 'Registration & Check-In Hours: July 2 from 1pm – 5pm. If you arrive outside of these windows, you may not be able to check in.'
      },
      {
        q: 'What\'s the departure deadline?',
        a: 'Indoor lodging guests must leave rooms by 11am on Sunday, July 5. All attendees who have not booked extra nights must depart the property by 3pm on Sunday, July 5.'
      },
      {
        q: 'Can I leave and come back?',
        a: 'A small number of in & out passes are available for $50. Email revel@dancemeetstantra.com to get an access code.'
      },
      {
        q: 'Can I extend my stay?',
        a: 'Yes. You can arrange additional nights directly with Sunrise Ranch through their front desk by calling 970-679-4200.'
      }
    ],
    camping: [
      {
        q: 'Are the camping areas shaded?',
        a: 'Some areas have natural shade, though not all sites are fully covered. If you\'re sensitive to heat, we recommend bringing a tarp, canopy, or your own shade structure.'
      },
      {
        q: 'What about restrooms?',
        a: 'Port-a-let style restrooms will be available on site.'
      },
      {
        q: 'Are there shower facilities?',
        a: 'There are no built-in shower facilities. Many participants bring solar showers or other simple rinse setups.'
      },
      {
        q: 'Can I bring an RV or do car camping?',
        a: 'RV setups, hookups, and car camping are not supported at REVEL. All participants should plan for a tent-based camping setup.'
      },
      {
        q: 'Is indoor lodging available?',
        a: 'Yes. Indoor lodging information can be found on the Humanitix ticket page.'
      }
    ],
    food: [
      {
        q: 'Is potable water available?',
        a: 'Yes. Potable water stations will be available. Please bring a reusable water bottle.'
      },
      {
        q: 'What about meals?',
        a: 'We have an optional meal-plan and comfortable eating situation so everyone can eat together if they wish. Incredible farm-to-table meals are available for purchase.'
      }
    ]
  }

  const scrollToCategory = (categoryId) => {
    setActiveCategory(categoryId)
    const element = categoriesRef.current[categoryId]
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const toggleQuestion = (index) => {
    setExpandedQuestion(expandedQuestion === index ? null : index)
  }

  return (
    <div className="faq-page">
      {/* ORBITAL NAVIGATION */}
      <section className="orbital-nav-section">
        <div className="orbital-container">
          <div className="center-circle">
            <div className="center-content">
              <h2>REVEL FAQ</h2>
            </div>
          </div>

          <div className="orbital-ring">
            {categories.map((cat, index) => (
              <motion.div
                key={cat.id}
                className={`orbit-item orbit-item-${index}`}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.08 }}
              >
                <motion.button
                  className={`orbit-circle ${activeCategory === cat.id ? 'active' : ''}`}
                  onClick={() => scrollToCategory(cat.id)}
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="orbit-icon">{cat.icon}</div>
                  <div className="orbit-label">{cat.name}</div>
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ CONTENT SECTIONS */}
      <section className="faq-content">
        {categories.map((category) => (
          <div
            key={category.id}
            ref={(el) => (categoriesRef.current[category.id] = el)}
            className="faq-section"
            id={`section-${category.id}`}
          >
            <div className="section-header">
              <div className="section-icon">{category.icon}</div>
              <div className="section-heading">
                <h2>{category.name}</h2>
                <p className="section-intro">{category.description}</p>
              </div>
            </div>

            <div className="accordion">
              {faqs[category.id].map((faq, index) => (
                <motion.div
                  key={index}
                  className="accordion-item"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <button
                    className={`accordion-question ${expandedQuestion === `${category.id}-${index}` ? 'active' : ''}`}
                    onClick={() => toggleQuestion(`${category.id}-${index}`)}
                  >
                    <span className="question-text">{faq.q}</span>
                    <span className="toggle-icon">
                      <motion.div
                        initial={{ rotate: 0 }}
                        animate={{
                          rotate: expandedQuestion === `${category.id}-${index}` ? 180 : 0
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        ▼
                      </motion.div>
                    </span>
                  </button>

                  <AnimatePresence>
                    {expandedQuestion === `${category.id}-${index}` && (
                      <motion.div
                        className="accordion-answer"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="answer-content">
                          {faq.a.split('\n').map((paragraph, i) => (
                            <p key={i}>{paragraph}</p>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>

            {category.id !== categories[categories.length - 1].id && (
              <div className="section-divider" />
            )}
          </div>
        ))}
      </section>

      {/* SUPPORT SECTION */}
      <section className="faq-support">
        <div className="support-content">
          <h2>Still have a question?</h2>
          <p>Reach out to our team and we'll help you find your way.</p>
          <a href="mailto:revel@dancemeetstantra.com" className="support-button">
            Contact REVEL
          </a>
        </div>
      </section>
    </div>
  )
}

export default FAQ
