import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import workshopRoutes from './routes/workshops.js'
import talentRoutes from './routes/talent.js'
import contentRoutes from './routes/content.js'

const app = express()
const PORT = process.env.PORT || 5001

// Middleware
app.use(cors())
app.use(express.json())
app.use(express.static('public'))

// API Routes
app.use('/api/workshops', workshopRoutes)
app.use('/api/talent', talentRoutes)
app.use('/api/content', contentRoutes)

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'Server is running!' })
})

// Start server
app.listen(PORT, () => {
  console.log(`🚀 REVEL Backend running on http://localhost:${PORT}`)
})
