import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-routing-machine';

// Set default icon for Leaflet markers
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

const services = [
    { id: 1, name: "Cafe A", position: [51.505, -0.09], category: "Cafe", address: "123 Street A", rating: 4.5 },
    { id: 2, name: "Gym B", position: [51.515, -0.1], category: "Gym", address: "456 Street B", rating: 4.2 },
    { id: 3, name: "Library C", position: [51.52, -0.12], category: "Library", address: "789 Street C", rating: 4.8 },
    // More services here...
];

const MapControls = ({ location, setRoute, activeService }) => {
    const map = useMap();

    // Routing function
    const addRoute = (destination) => {
        if (setRoute) {
            setRoute((prevRoute) => {
                if (prevRoute) {
                    map.removeControl(prevRoute);
                }
                const newRoute = L.Routing.control({
                    waypoints: [
                        L.latLng(location[0], location[1]),
                        L.latLng(destination[0], destination[1])
                    ],
                    createMarker: () => null, // Disable default markers
                }).addTo(map);
                return newRoute;
            });
        }
    };

    // UseEffect to handle setting the active service and routing
    useEffect(() => {
        if (activeService) {
            addRoute(activeService.position);
        }
    }, [activeService]);

    return null; // This component doesn't need to render anything
};

const MapIntegration = () => {
    const [location, setLocation] = useState([51.505, -0.09]); // default location
    const [activeService, setActiveService] = useState(null);
    const [route, setRoute] = useState(null);
    const [searchQuery, setSearchQuery] = useState("");
    const [filteredServices, setFilteredServices] = useState(services);

    useEffect(() => {
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    setLocation([position.coords.latitude, position.coords.longitude]);
                },
                (error) => {
                    console.error("Error getting location:", error);
                }
            );
        } else {
            console.error("Geolocation is not supported by this browser.");
        }
    }, []);

    // Handle search query
    useEffect(() => {
        const filtered = services.filter(service =>
            service.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setFilteredServices(filtered);
    }, [searchQuery]);

    return (
        <div className="map-container">
            <input
                type="text"
                placeholder="Search for services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search-bar"
            />
            <MapContainer center={location} zoom={13} style={{ height: "80vh", width: "100%" }}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
                />

                {/* User's Location */}
                <Marker position={location}>
                    <Popup>Your Location</Popup>
                </Marker>

                {/* Filtered Service Markers */}
                {filteredServices.map((service) => (
                    <Marker key={service.id} position={service.position}>
                        <Popup>
                            <div>
                                <h3>{service.name}</h3>
                                <p>{service.address}</p>
                                <p>Rating: {service.rating}⭐</p>
                                <button onClick={() => {
                                    setActiveService(service);
                                }}>
                                    Get Directions
                                </button>
                            </div>
                        </Popup>
                    </Marker>
                ))}

                {/* Include the MapControls component */}
                <MapControls location={location} setRoute={setRoute} activeService={activeService} />
            </MapContainer>

            {/* Active Service Details */}
            {activeService && (
                <div className="service-details">
                    <h2>{activeService.name}</h2>
                    <p><strong>Address:</strong> {activeService.address}</p>
                    <p><strong>Rating:</strong> {activeService.rating}⭐</p>
                    <button onClick={() => setActiveService(null)}>Close</button>
                </div>
            )}
        </div>
    );
};

export default MapIntegration;
