import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='navbar'>
      <Link to={'/'} className="container">
        <img className='navbar-image' src="/garden.svg" alt="navbar-image" />
        <h4>Garden</h4>
      </Link>
    </div>
  )
}

export default Navbar
