import express from 'express'

const router = express.Router()

// Example workshop data (later this will come from a database)
const workshops = [
  {
    id: 1,
    name: 'Mindfulness Basics',
    facilitator: 'Sarah Smith',
    description: 'Learn the fundamentals of mindfulness practice',
    date: '2026-04-15'
  },
  {
    id: 2,
    name: 'Creative Expression',
    facilitator: 'Marcus Johnson',
    description: 'Explore your creativity through art and movement',
    date: '2026-04-22'
  },
  {
    id: 3,
    name: 'Community Building',
    facilitator: 'Jamie Lee',
    description: 'Connect with others and build meaningful relationships',
    date: '2026-05-01'
  }
]

// GET all workshops
router.get('/', (req, res) => {
  res.json(workshops)
})

// GET a specific workshop
router.get('/:id', (req, res) => {
  const workshop = workshops.find(w => w.id === parseInt(req.params.id))
  if (!workshop) {
    return res.status(404).json({ error: 'Workshop not found' })
  }
  res.json(workshop)
})

// POST a new workshop (admin only - you'll add authentication later)
router.post('/', (req, res) => {
  const newWorkshop = {
    id: workshops.length > 0 ? Math.max(...workshops.map(w => w.id)) + 1 : 1,
    ...req.body
  }
  workshops.push(newWorkshop)
  res.status(201).json(newWorkshop)
})

export default router
