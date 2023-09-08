import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../App.css';

const Navbar = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav>
      <div className={`mobile-toggle ${isMobileMenuOpen ? 'active' : ''}`} onClick={toggleMobileMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <div className={`nav-links ${isMobileMenuOpen ? 'open' : ''}`}>
        <Link to='/' className={location.pathname === '/' ? 'active' : ''}>Home</Link>
        <Link to='/about' className={location.pathname === '/about' ? 'active' : ''}>About</Link>
        <Link to='/contact' className={location.pathname === '/contact' ? 'active' : ''}>Contact</Link>
        <Link to='/pricing' className={location.pathname === '/pricing'? 'active' : ''}>Pricing</Link>
        <Link to='/blogs' className={location.pathname === '/blogs' ? 'active' : ''}>Blogs</Link>
        <Link to='/signin' className={location.pathname === '/signin'? 'active' : ''}>Login</Link>
      </div>
    </nav>
  );
};

export default Navbar;
