// src/pages/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import { FaCoffee, FaDumbbell, FaBook } from 'react-icons/fa'; // Importing icons
import '../pages/Home.css'; // Import the new Home CSS

const Home = () => {
    return (
        <div className="container">
            <section className="intro">
                <h1>Welcome to Local Link!</h1>
                <p>Your go-to app for finding essential local services tailored for students.</p>
            </section>

            <section className="service-highlights">
                <Link to="/services" className="card">
                    <FaCoffee size={40} color="#ff7e5f" />
                    <h3>Service Directory</h3>
                    <p>Find and explore a variety of local services, from cafes to gyms, all in one place.</p>
                </Link>

                <Link to="/map" className="card">
                    <FaDumbbell size={40} color="#ff7e5f" />
                    <h3>Map Integration</h3>
                    <p>Locate services with ease using integrated maps that guide you right to the spot.</p>
                </Link>

                <Link to="/reviews" className="card">
                    <FaBook size={40} color="#ff7e5f" />
                    <h3>User Reviews</h3>
                    <p>Get insights from other students to make informed choices on where to go.</p>
                </Link>
            </section>
        </div>
    );
};

export default Home;
