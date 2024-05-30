import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './navigation.css';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navigation">
      <div className="nav-container">
        <div className="logo">
          <Link to="/">
            <img src="/images/logo.svg" alt="Standex Digital Logo" />
          </Link>
        </div>
        <button className="menu-toggle" onClick={toggleMenu}>
          <span className="menu-icon"></span>
        </button>
        <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/dojo">Dojo</Link></li>
          <li><Link to="/tech-elevate">Tech Elevate</Link></li>
          <li><Link to="/job-board">Job Board</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
