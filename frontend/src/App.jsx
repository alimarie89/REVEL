import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Team from './pages/Team'
import TeamVision from './pages/TeamVision'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/team" element={<Team />} />
        <Route path="/team-vision" element={<TeamVision />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
