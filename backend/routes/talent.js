import express from 'express'

const router = express.Router()

// Example talent data (you'll edit this to add your actual talent)
const talent = [
  {
    id: 1,
    name: 'The Human Experience',
    role: 'DJ',
    bio: 'Headliner DJ bringing world-class beats and presence',
    image: null,
    social: {
      instagram: null,
      website: null
    }
  }
]

// GET all talent
router.get('/', (req, res) => {
  res.json(talent)
})

// GET a specific talent member
router.get('/:id', (req, res) => {
  const person = talent.find(t => t.id === parseInt(req.params.id))
  if (!person) {
    return res.status(404).json({ error: 'Talent not found' })
  }
  res.json(person)
})

// POST a new talent member (you'll add authentication later)
router.post('/', (req, res) => {
  const newPerson = {
    id: talent.length > 0 ? Math.max(...talent.map(t => t.id)) + 1 : 1,
    ...req.body
  }
  talent.push(newPerson)
  res.status(201).json(newPerson)
})

export default router
