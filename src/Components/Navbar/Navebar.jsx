import React from 'react'
import './Navbar.css'
const Navbar = () => {
  return (
    <>
    
    <nav className="navbar">
  <div className="nav-logo">
    <a href="/">CMS</a>
  </div>
  
  <ul className="nav-links">
    <li><a href="/" className="active">Home</a></li>
    <li><a href="#" >Pricing</a></li>
    <li><a href="#">About</a></li>
  </ul>

  <div className="nav-cta">
    <a href="#" className="btn-primary">Get Started</a>
  </div>
</nav>
    </>
  )
}

export default Navbar