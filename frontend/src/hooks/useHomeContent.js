import { useState, useEffect } from 'react'

/**
 * Hook to fetch home page content from Google Docs API
 * Falls back to default content if API fails or not configured
 */
export const useHomeContent = () => {
  const [content, setContent] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  // Default content to use as fallback
  const defaultContent = {
    heroTagline: [
      'More intimate than a festival.',
      'More expansive than a retreat.'
    ],
    orientationLine: 'A 350-person convergence where ritual, dance, embodiment, eros, and cultural awakening meet.',
    cocreateInvitations: [
      'Be real in the moment.',
      'Engage instead of staying at a distance.',
      'Train your capacity to stay present when things get charged.'
    ],
    fieldOfPresence: 'What we practice here becomes the world we live in',
    howTheSpaceHolds: [
      'Create conditions where people feel safe enough to drop their guard.',
      'Direct attention toward what\'s actually happening in the moment.',
      'Interrupt and redirect performance into real contact.',
      'Support people in staying present when intensity rises.',
      'Stabilize the field so connection doesn\'t collapse or scatter.'
    ],
    whatItFeelsLike: [
      'Your morning begins with presence. You wake in a container held by people who know how to do this. There\'s ritual, embodied practice, movement that wakes your body and opens your field.',
      'Throughout the day, you move between intimate circles and collective experience. You dance. You sit in conversation with people who show up as themselves. You taste food that\'s shared with intention. You spend time in nature, feeling the earth and sky.',
      'There are moments of intensity where connection deepens beyond what normally happens. There are moments of softness where you\'re held. You\'re invited into your own aliveness—not performing it, actually living it.',
      'The evening gathers you again. There\'s ritual, music, dance, intimacy. You end each day integrated, more alive, more real.',
      'And through it all, the people holding this space are in it with you—not teaching from the front, but co-creating what\'s alive and possible.'
    ],
    finalInvitation: 'This is not a festival. It is an investment in our cultural evolution.',
    finalCta: 'Are you ready to help shape the culture you want to live inside of?',
    faqCategories: [
      {
        id: 'event-overview',
        title: 'Event Overview',
        faqs: [
          {
            q: 'What is REVEL?',
            a: 'REVEL is a 3-day convergence held at Sunrise Ranch, bringing together the right people, a thoughtfully designed container, and shared leadership to create something alive, relational, and participatory. This is an 18+ event.'
          },
          {
            q: 'How is REVEL different from other events?',
            a: 'More intimate than a festival. More free and expansive than a retreat. REVEL is a culture-making convergence at the intersection of dance, tantra, art, somatics, sexuality, community, and collective evolution.'
          }
        ]
      },
      {
        id: 'what-happens',
        title: 'What Happens at REVEL',
        faqs: [
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
          }
        ]
      },
      {
        id: 'who-its-for',
        title: 'Who It\'s For',
        faqs: [
          {
            q: 'Who is REVEL for?',
            a: 'REVEL is for: Dancers, creatives, lovers, seekers, and community-builders. Those passionate about deepening their dance and tantra practice. Dance Meets Tantra alumni looking for a celebratory, expansive way to gather. People who crave depth and play. Those who want to contribute to the field, not just consume an event. Anyone drawn to safely exploring their edges in a loving, trauma-informed environment. Those who want to drink deeply from the wisdom of leading voices in embodiment, relational intimacy, sacred sexuality, and shadow work.'
          },
          {
            q: 'What\'s the age requirement?',
            a: 'REVEL is 18+.'
          }
        ]
      },
      {
        id: 'whats-included',
        title: 'What\'s Included',
        faqs: [
          {
            q: 'What does my ticket include?',
            a: 'Included with your ticket: All workshops, dances, rituals, concerts, and talks. Opening and closing ceremonies. Access to all grounds and chill spaces. Parking. Camping space.'
          },
          {
            q: 'What\'s not included?',
            a: 'Not included: Indoor lodging (available as an upgrade). Meal plan (incredible farm-to-table meals available for purchase). Camping gear and personal supplies.'
          }
        ]
      },
      {
        id: 'arrival-departure',
        title: 'Arrival & Departure',
        faqs: [
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
        ]
      },
      {
        id: 'camping-facilities',
        title: 'Camping & Facilities',
        faqs: [
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
            a: 'There are very limited built-in shower facilities. You may want to shower at an off peak time if you don\'t want to wait in line.'
          },
          {
            q: 'Can I bring an RV or do car camping?',
            a: 'RV setups, hookups, and car camping are not supported at REVEL. All participants should plan for a tent-based camping setup.'
          },
          {
            q: 'Is indoor lodging available?',
            a: 'Yes. Indoor lodging information can be found on the Humanitix ticket page.'
          }
        ]
      },
      {
        id: 'food-water',
        title: 'Food, Water & Facilities',
        faqs: [
          {
            q: 'Is potable water available?',
            a: 'Yes. Potable water stations will be available. Please bring a reusable water bottle.'
          },
          {
            q: 'What about meals?',
            a: 'We have an optional meal-plan and comfortable eating situation so everyone can eat together if they wish. Incredible farm-to-table meals are available for purchase.'
          }
        ]
      },
      {
        id: 'agreements-safety',
        title: 'Agreements & Safety',
        faqs: [
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
            a: 'We gather in alignment with the following: Substance-free — supporting clarity, presence, and real connection. Trauma-informed — honoring pacing, boundaries, and diverse nervous systems. Consent culture — practicing clear, ongoing, and responsive consent. Eros-positive — welcoming eros as a life force, without making sexuality the focus. "Bottoms stay on" — a shared clothing boundary in public spaces. Permission — to be fully alive, expressed, and human. Safety — grounded in attunement, responsibility, and respect. Vulnerability — creating space to be real, not perform. Treat all beings with respect. Anyone not honoring these agreements may be asked to leave the property.'
          }
        ]
      },
      {
        id: 'participation-support',
        title: 'Participation & Support',
        faqs: [
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
          }
        ]
      },
      {
        id: 'tantra-eros',
        title: 'Tantra & Eros',
        faqs: [
          {
            q: 'What is your relationship to Tantra?',
            a: 'For us, Tantra is the practice and art of being fully alive. There is nothing sexual in nature in the activities we share. Sometimes sexual energy arises, and it is only permitted within the context of consent, agreements, and the container that is set. Our intention is to support individuals in deepening their love, respect, and relationship with themselves, others, and the earth. We believe that dance, eros, and Tantra are fundamental aspects of living a vibrant, empowered, and creative life.'
          },
          {
            q: 'Do you represent classical Tantra?',
            a: 'We hold deep honor and respect for classical Tantra and the lineages from which it originates. While classical Tantra profoundly influences our work, we do not present ourselves as representatives of classical Tantra.'
          },
          {
            q: 'Can I bring my service animal?',
            a: 'No dogs or pets are allowed, unless they are legitimate service animals with proper documentation.'
          }
        ]
      },
      {
        id: 'tickets-transfers',
        title: 'Tickets, Transfers & Refunds',
        faqs: [
          {
            q: 'Are tickets refundable?',
            a: 'All ticket purchases are non-refundable. This is a rain-or-shine event. REVEL is a curated, high-touch convergence with limited capacity. Each spot is intentionally held, and your registration directly supports the financial and relational container we are building together.'
          },
          {
            q: 'Can I transfer my ticket?',
            a: 'If your plans change, you are welcome to transfer your ticket to another person. You can do this by emailing revel@dancemeetstantra.com with your full name and the full name and email address of the person you are transferring your ticket to. All items on the original ticket need to be transferred at once; you cannot transfer only a few items.'
          }
        ]
      },
      {
        id: 'scholarships-worktrade',
        title: 'Scholarships & Worktrade',
        faqs: [
          {
            q: 'Are scholarships available?',
            a: 'At Dance Meets Tantra, we recognize that access is shaped by many factors. We offer two primary pathways for reduced ticket access:'
          },
          {
            q: 'What is the Diverse Backgrounds Partial Scholarship?',
            a: 'For those navigating financial constraints or systemic barriers. This support is not tied to labor or contribution and is typically 15-25% off. Apply on the ticket page.'
          },
          {
            q: 'What is Work-Trade?',
            a: 'For those who prefer to contribute time and energy in exchange for a reduced ticket. Standard work-trade is $100 off per shift (3-4 hours depending on role) and tickets are available directly on the ticket page. If you want to help more than this, you can apply for additional shifts.'
          }
        ]
      },
      {
        id: 'participation-opportunities',
        title: 'Participation Opportunities',
        faqs: [
          {
            q: 'Can I contribute a workshop or talk?',
            a: 'Our presenter team is nearly at capacity. We do still have a few spots remaining for shorter talks, workshops, and creative offerings from within the participant pool. If you feel called to contribute, the best way to be considered is to purchase a ticket and email your proposed offering to revel@dancemeetstantra.com. If you already have a relationship with Spencer, you\'re welcome to reach out to him directly.'
          }
        ]
      },
      {
        id: 'waiver-entry',
        title: 'Waiver & Entry Policies',
        faqs: [
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
        ]
      }
    ]
  }

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const response = await fetch('http://localhost:5001/api/content/home')
        if (!response.ok) {
          throw new Error(`HTTP ${response.status}`)
        }
        const result = await response.json()
        setContent(result.data)
        setError(null)
      } catch (err) {
        console.warn('Could not fetch Google Doc content, using defaults:', err.message)
        setContent(defaultContent)
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchContent()
  }, [])

  // Return content (either from API or default), with loading/error states
  return {
    content: content || defaultContent,
    loading,
    error,
    isUsingDefault: error !== null
  }
}
