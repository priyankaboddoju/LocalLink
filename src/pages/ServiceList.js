// src/pages/ServiceList.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles.css';

const ServiceList = () => {
    const services = [
        { id: 1, name: "Cafe", description: "Find the best cafes around." },
        { id: 2, name: "Gym", description: "Explore top gyms for students." },
        { id: 3, name: "Library", description: "Locate the nearest libraries." }
    ];

    return (
        <div className="service-list-container">
            <h1>Our Services</h1>
            <div className="service-cards">
                {services.map((service) => (
                    <Link to={`/services/${service.id}`} key={service.id} className="service-card">
                        <h3>{service.name}</h3>
                        <p>{service.description}</p>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default ServiceList;
