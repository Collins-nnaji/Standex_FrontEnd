import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="nav-container">
        <div className="logo">
          <Link to="/">
            <img src="/images/logo.svg" alt="Standex Digital Logo" />
          </Link>
        </div>
        <nav>
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/dojo">Dojo</Link></li>
            <li><Link to="/tech-elevate">Tech Elevate</Link></li>
            <li><Link to="/job-board">Job Board</Link></li>
          </ul>
          <ul className="breadcrumb-nav">
            <li className="breadcrumb-item"><Link to="/">Home</Link></li>
            <li className="breadcrumb-item"><Link to="/dojo">Dojo</Link></li>
            <li className="breadcrumb-item"><Link to="/tech-elevate">Tech Elevate</Link></li>
            <li className="breadcrumb-item"><Link to="/job-board">Job Board</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
