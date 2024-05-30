import React from 'react';
import { Link } from 'react-router-dom';
import './navigation.css';

const Navigation = () => {
  return (
    <nav className="navigation">
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/dojo">Dojo</Link></li>
        <li><Link to="/tech-elevate">Tech Elevate</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/job-board">Job Board</Link></li>
      </ul>
      <ul className="breadcrumb-nav">
        <li className="breadcrumb-item"><Link to="/">Home</Link></li>
        <li className="breadcrumb-item"><Link to="/dojo">Dojo</Link></li>
        <li className="breadcrumb-item"><Link to="/tech-elevate">Tech Elevate</Link></li>
        <li className="breadcrumb-item"><Link to="/services">Services</Link></li>
        <li className="breadcrumb-item"><Link to="/job-board">Job Board</Link></li>
      </ul>
    </nav>
  );
};

export default Navigation;
