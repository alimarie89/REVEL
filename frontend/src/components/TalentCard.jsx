import React from 'react'
import './TalentCard.css'

function TalentCard({ person }) {
  return (
    <div className="talent-card">
      {person.image && <img src={person.image} alt={person.name} />}
      <h3>{person.name}</h3>
      <p className="role">{person.role}</p>
      {person.bio && <p className="bio">{person.bio}</p>}
      {person.social && (
        <div className="social-links">
          {person.social.instagram && (
            <a href={person.social.instagram} target="_blank" rel="noopener noreferrer">Instagram</a>
          )}
          {person.social.website && (
            <a href={person.social.website} target="_blank" rel="noopener noreferrer">Website</a>
          )}
        </div>
      )}
    </div>
  )
}

export default TalentCard
