import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <img src="/images/logo.png" alt="Standex Digital Logo" className="logo" />
      <p>&copy; 2024 Standex Digital. All rights reserved.</p>
      <div className="social-media">
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </div>
    </footer>
  );
};

export default Footer;
