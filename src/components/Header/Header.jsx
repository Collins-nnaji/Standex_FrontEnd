import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="nav-container">
        <div className="logo">
          <Link to="/">
            <img src="/images/logo.svg" alt="Standex Digital Logo" />
          </Link>
        </div>
        <nav className={isMenuOpen ? 'open' : ''}>
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/dojo">Dojo</Link></li>
            <li><Link to="/tech-elevate">Tech Elevate</Link></li>
            <li><Link to="/job-board">Job Board</Link></li>
          </ul>
        </nav>
        <button className="menu-toggle" onClick={toggleMenu}>
          <span className="menu-icon"></span>
        </button>
      </div>
    </header>
  );
};

export default Header;
