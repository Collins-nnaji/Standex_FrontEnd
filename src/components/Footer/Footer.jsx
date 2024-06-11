import React from 'react';
import './footer.css'; // Ensure the case matches the actual file name

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2024 Standex Digital. All rights reserved.</p>
        <div className="social-media">
          <a href="https://www.instagram.com/standexdigital/" target="_blank" rel="noopener noreferrer">
            <img src="/icons/instagram.png" alt="Instagram" className="social-icon" />
          </a>
          <a href="https://x.com/standexdigital" target="_blank" rel="noopener noreferrer">
            <img src="/icons/twitter.png" alt="Twitter" className="social-icon" />
          </a>
          <a href="https://www.linkedin.com/company/standex-digital/" target="_blank" rel="noopener noreferrer">
            <img src="/icons/linkedin.png" alt="LinkedIn" className="social-icon" />
          </a>
          <a href="https://wa.me/+2348074090677" target="_blank" rel="noopener noreferrer">
            <img src="/icons/whatsapp.png" alt="WhatsApp" className="social-icon" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
