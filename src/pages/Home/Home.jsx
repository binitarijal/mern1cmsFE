import React from 'react'
import './Home.css'
import Navbar from '../../Components/Navbar/Navebar'


const Home = () => {
  return (
    <>
    <Navbar/>
    <div class="card">
  <div class="card-content">
    <h3 class="card-title">Future of Web Design</h3>
    <p class="card-text">
      Explore the latest trends in UI/UX for 2026, including glassmorphism, 
      dynamic micro-interactions, and AI-driven layouts.
    </p>
    <a href="#" class="card-link">
      See More 
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
    </a>
  </div>
</div>

    </>
  )
}

export default Home