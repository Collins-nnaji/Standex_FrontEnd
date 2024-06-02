import React from 'react';
import './footer.css'; // Ensure the case matches the actual file name

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2024 Standex Digital. All rights reserved.</p>
        <div className="social-media">
          <a href="https://www.instagram.com/standexdigital/" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="https://x.com/standexdigital" target="_blank" rel="noopener noreferrer">Twitter</a>
          <a href="https://www.linkedin.com/company/standex-digital/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
