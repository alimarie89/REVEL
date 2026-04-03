import React from 'react'

// This is a "component" - a reusable piece of UI
// It receives a "workshop" object and displays it
function WorkshopCard({ workshop }) {
  return (
    <div className="workshop-card">
      <h3>{workshop.name}</h3>
      <p className="facilitator">Led by: {workshop.facilitator}</p>
      <p className="description">{workshop.description}</p>
      <p className="date">{new Date(workshop.date).toLocaleDateString()}</p>
      <button>Learn More</button>
    </div>
  )
}

export default WorkshopCard
