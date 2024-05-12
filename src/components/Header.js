import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Make sure to create this CSS file

function Header() {
    return (
        <header className="header">
            <Link to="/">
                <img src="logo.png" alt="Standex Dojo Logo" className="logo"/>
            </Link>
            <nav>
                <ul className="nav_links">
                    <li><Link to="/">Home</Link></li>

                    <li><Link to="/community">Community</Link></li>
                    <li><Link to="/login">Login/Sign Up</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
