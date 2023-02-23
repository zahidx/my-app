import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const navbar = () => {
  return <nav>

    <NavLink to = "/" className='nav-link' >Home</NavLink>
    <NavLink to = "/blogs" className='nav-link' >Blogs</NavLink>
    <NavLink to = "/contact" className='nav-link' >Contact</NavLink>
    <NavLink to = "/preservey" className='nav-link' >Pre Servey</NavLink>
    <NavLink to = "/postservey" className='nav-link' >Post Servey</NavLink>
    <NavLink to = "/message" className='nav-link' >Message</NavLink>
    <NavLink to = "/about" className='nav-link' >About Us</NavLink>

    





  </nav>
    
  
};

export default navbar