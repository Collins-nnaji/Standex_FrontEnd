import React from 'react';
import './header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <img src="/images/logo.png" alt="Standex Digital Logo" className="logo" />
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/dojo">Dojo</Link></li>
          <li><Link to="/resume-builder">Resume Builder</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/job-board">Job Board</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
