import React from 'react';
import './Footer.css'; // Make sure to create this CSS file

function Footer() {
    return (
        <footer className="footer">
            <p>© 2024 Standex Dojo. All rights reserved.</p>
            <div className="social_links">
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
        </footer>
    );
}

export default Footer;
