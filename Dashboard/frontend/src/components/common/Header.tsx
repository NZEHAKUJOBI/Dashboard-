import React from 'react'
import { Link } from 'react-router-dom';


function Header() {
  return (
    <div>
        <div>
            <Link to="/">Dashboard</Link>
            <Link to="/home">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/login">Login</Link>
        </div>
      
    </div>
  )
}

export default Header
