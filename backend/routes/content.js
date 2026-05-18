import express from 'express'
import { google } from 'googleapis'

const router = express.Router()

// Simple in-memory cache with expiration
const cache = {
  data: null,
  timestamp: null,
  ttl: 30000 // 30 seconds in milliseconds
}

// Check if cache is still valid
const isCacheValid = () => {
  return cache.data && cache.timestamp && (Date.now() - cache.timestamp < cache.ttl)
}

// Get OAuth2 client with refresh token
const getAuthClient = () => {
  const oauth2Client = new google.auth.OAuth2(
    process.env.GOOGLE_CLIENT_ID,
    process.env.GOOGLE_CLIENT_SECRET
  )

  oauth2Client.setCredentials({
    refresh_token: process.env.GOOGLE_REFRESH_TOKEN
  })

  return oauth2Client
}

// Parse Google Doc content into structured sections
const parseGoogleDocContent = (content) => {
  // Extract key sections from the document
  const sections = {
    heroTagline: [],
    orientationLine: '',
    cocreateInvitations: [],
    fieldOfPresence: '',
    howTheSpaceHolds: [],
    whatItFeelsLike: [],
    finalInvitation: '',
    finalCta: ''
  }

  const lines = content.split('\n').filter(line => line.trim())

  // Simple parser - you can customize based on your doc structure
  // Look for section headers or use line patterns
  let currentSection = null

  lines.forEach(line => {
    const trimmed = line.trim()

    // Detect sections by keywords in the doc
    if (trimmed.toLowerCase().includes('hero tagline')) {
      currentSection = 'heroTagline'
    } else if (trimmed.toLowerCase().includes('orientation')) {
      currentSection = 'orientationLine'
    } else if (trimmed.toLowerCase().includes('cocreate')) {
      currentSection = 'cocreateInvitations'
    } else if (trimmed.toLowerCase().includes('field of presence')) {
      currentSection = 'fieldOfPresence'
    } else if (trimmed.toLowerCase().includes('how the space')) {
      currentSection = 'howTheSpaceHolds'
    } else if (trimmed.toLowerCase().includes('what it feels')) {
      currentSection = 'whatItFeelsLike'
    } else if (trimmed.toLowerCase().includes('final invitation')) {
      currentSection = 'finalInvitation'
    } else if (trimmed.toLowerCase().includes('final cta')) {
      currentSection = 'finalCta'
    } else if (currentSection && trimmed) {
      // Add content to current section
      if (Array.isArray(sections[currentSection])) {
        sections[currentSection].push(trimmed)
      } else if (typeof sections[currentSection] === 'string') {
        sections[currentSection] = trimmed
      }
    }
  })

  return sections
}

// GET /api/content/home - Fetch home page content from Google Doc
router.get('/home', async (req, res) => {
  try {
    // Return cached data if valid
    if (isCacheValid()) {
      console.log('📦 Returning cached home content')
      return res.json({ data: cache.data, cached: true })
    }

    const docId = process.env.GOOGLE_DOC_HOME_PAGE_ID
    if (!docId) {
      return res.status(400).json({
        error: 'GOOGLE_DOC_HOME_PAGE_ID not configured',
        message: 'Please set GOOGLE_DOC_HOME_PAGE_ID environment variable with your Google Doc ID'
      })
    }

    // Get OAuth2 client
    const auth = getAuthClient()
    
    // Ensure we have a fresh access token with the right scope
    await auth.getAccessToken()

    // Initialize Google Docs API
    const docs = google.docs({
      version: 'v1',
      auth: auth
    })

    // Fetch the document
    const doc = await docs.documents.get({
      documentId: docId
    })

    // Extract text content
    let content = ''
    if (doc.data.body && doc.data.body.content) {
      doc.data.body.content.forEach(element => {
        if (element.paragraph && element.paragraph.elements) {
          element.paragraph.elements.forEach(el => {
            if (el.textRun) {
              content += el.textRun.content
            }
          })
        }
        if (element.table) {
          // Handle tables if present
          element.table.tableRows.forEach(row => {
            row.tableCells.forEach(cell => {
              if (cell.content) {
                cell.content.forEach(cellContent => {
                  if (cellContent.paragraph && cellContent.paragraph.elements) {
                    cellContent.paragraph.elements.forEach(el => {
                      if (el.textRun) {
                        content += el.textRun.content
                      }
                    })
                  }
                })
              }
            })
          })
        }
      })
    }

    // Parse the content into sections
    const sections = parseGoogleDocContent(content)

    // Cache the result
    cache.data = sections
    cache.timestamp = Date.now()

    console.log('✅ Fetched and cached home content from Google Doc')
    res.json({ data: sections, cached: false })
  } catch (error) {
    console.error('❌ Error fetching home content:', error.message)
    res.status(500).json({
      error: 'Failed to fetch content from Google Doc',
      message: error.message
    })
  }
})

// GET /api/content/get-code - Get authorization code (copy from URL after login)
router.get('/get-code', (req, res) => {
  const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${process.env.GOOGLE_CLIENT_ID}&redirect_uri=http://localhost:5001/api/content/auth-callback&response_type=code&scope=https://www.googleapis.com/auth/documents.readonly&access_type=offline`
  
  res.json({ 
    message: 'Open the URL below in your browser',
    authUrl,
    instruction: 'After authorizing, you will be redirected and shown a refresh token'
  })
})

// GET /api/content/auth-callback - OAuth callback handler
router.get('/auth-callback', async (req, res) => {
  const code = req.query.code
  const error = req.query.error
  
  if (error) {
    return res.status(400).json({ error: error, error_description: req.query.error_description })
  }
  
  if (!code) {
    return res.status(400).json({ error: 'No authorization code provided' })
  }

  const oauth2Client = new google.auth.OAuth2(
    process.env.GOOGLE_CLIENT_ID,
    process.env.GOOGLE_CLIENT_SECRET,
    'http://localhost:5001/api/content/auth-callback'
  )

  try {
    const { tokens } = await oauth2Client.getToken(code)
    res.json({
      message: 'Authorization successful!',
      refreshToken: tokens.refresh_token,
      instruction: 'Update your .env file with: GOOGLE_REFRESH_TOKEN=' + tokens.refresh_token,
      nextStep: 'Then restart the backend with: npm run dev'
    })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

// GET /api/content/exchange-code - Exchange code for refresh token (alternative method)
router.get('/exchange-code', async (req, res) => {
  const code = req.query.code
  if (!code) {
    return res.status(400).json({ error: 'No authorization code provided. Use /api/content/get-code first.' })
  }

  const oauth2Client = new google.auth.OAuth2(
    process.env.GOOGLE_CLIENT_ID,
    process.env.GOOGLE_CLIENT_SECRET,
    'urn:ietf:wg:oauth:2.0:oob'
  )

  try {
    const { tokens } = await oauth2Client.getToken(code)
    res.json({
      message: 'Authorization successful!',
      refreshToken: tokens.refresh_token,
      instruction: 'Update your .env file with: GOOGLE_REFRESH_TOKEN=' + tokens.refresh_token,
      nextStep: 'Then restart the backend with: npm run dev'
    })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

export default router
