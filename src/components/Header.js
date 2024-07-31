import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Header.css'; // Ensure the CSS file is imported

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar">
            <div className="logo">
                <img src="/images/ecube.png" alt="Logo" />
                E-Cube
            </div>
            <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/Trailers">Watch Trailers</Link></li>
                <li><Link to="/LatestMovies">What’s Hot Now</Link></li>
                <li><Link to="/Upcoming">Upcoming</Link></li>
                <li><Link to="/Events">Events</Link></li>
                
            </ul>
            <div className="burger" onClick={handleToggle}>
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>
        </nav>
    );
}

export default Header;
