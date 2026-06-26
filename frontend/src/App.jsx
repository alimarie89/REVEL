import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Team from './pages/Team'
import TeamVision from './pages/TeamVision'
import Schedule from './pages/Schedule'
import SchedulePoster from './pages/SchedulePoster'
import FAQ from './pages/FAQ'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/team" element={<Team />} />
        <Route path="/team-vision" element={<TeamVision />} />
        <Route path="/schedule" element={<Schedule />} />
        {/* Print-optimized schedule poster routes */}
        <Route path="/schedule-poster" element={<SchedulePoster />} />
        <Route path="/schedule-poster/:day" element={<SchedulePoster />} />
        <Route path="/faq" element={<FAQ />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
