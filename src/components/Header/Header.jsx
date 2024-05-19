import React from 'react';
import { Link } from 'react-router-dom';
import './header.css'; // Ensure the case matches the actual file name

const Header = () => {
  return (
    <header className="header">
      <div className="nav-container">
        <div className="logo">
          <Link to="/">
            <img src="/images/logo.png" alt="Standex Digital Logo" />
          </Link>
        </div>
        <nav>
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/dojo">Dojo</Link></li>
            <li><Link to="/resume-builder">Resume Builder</Link></li>
            <li><Link to="/job-board">Job Board</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
