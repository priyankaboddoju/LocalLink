// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles.css';

const Header = () => {
    return (
        <header className="header">
            <div className="header-title">
                <h1>Local Link</h1>
            </div>
            <nav className="nav-links">
                <Link to="/">Home</Link>
                <Link to="/services">Services</Link>
                <Link to="/map">Map</Link>
                <Link to="/reviews">Reviews</Link>
            </nav>
        </header>
    );
};

export default Header;
