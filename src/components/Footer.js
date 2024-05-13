import React from 'react';
import './Footer.css'; // Make sure to create this CSS file

function Footer() {
    return (
        <footer className="footer">
            <img src="/logo2.png" alt="Standex Dojo Logo" className="footer-logo" />
            <p>© 2024 Standex Dojo. All rights reserved.</p>
            <div className="social_links">
                <a href="https://twitter.com/standexdigital" target="_blank" rel="noopener noreferrer">Twitter</a>
                <a href="https://www.instagram.com/standexdigital/" target="_blank" rel="noopener noreferrer">Instagram</a>
                <a href="https://www.linkedin.com/company/standex-digital/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
        </footer>
    );
}

export default Footer;
