// src/pages/ServiceDetail.js
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import serviceData from '../data/services.json';
import './ServiceDetail.css';

const ServiceDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const service = serviceData[id];

    return (
        <div className="service-detail-container">
            {service ? (
                <>
                    <h1 className="service-name">{service.name}</h1>
                    <p className="service-description">{service.description}</p>

                    <div className="service-info">
                        <div className="service-item">
                            <strong>Hours:</strong> {service.hours}
                        </div>
                        <div className="service-item">
                            <strong>Address:</strong> {service.address}
                        </div>
                        <div className="service-item">
                            <strong>Contact:</strong> {service.contact}
                        </div>
                    </div>

                    <div className="service-features">
                        <h3>Features</h3>
                        <ul>
                            {service.features.map((feature, index) => (
                                <li key={index}>{feature}</li>
                            ))}
                        </ul>
                    </div>

                    <div className="nearby-locations">
                        <h3>Nearby {service.name}s</h3>
                        <ul>
                            {service.nearbyLocations.map((location, index) => (
                                <li key={index} className="location-item">
                                    <div className="location-name">{location.name}</div>
                                    <div className="location-details">
                                        <span>{location.distance}</span> | <span>Rating: {location.rating}⭐</span>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <button onClick={() => navigate('/services')} className="back-button">Back to Services</button>
                </>
            ) : (
                <p>Service not found.</p>
            )}
        </div>
    );
};

export default ServiceDetail;
