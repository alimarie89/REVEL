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
    finalCta: 'Are you a key player in this time of great change?'
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
