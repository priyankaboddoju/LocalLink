// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ServiceList from './pages/ServiceList';
import ServiceDetail from './pages/ServiceDetail';
import MapIntegration from './pages/MapIntegration';
import UserReviews from './pages/UserReviews';
import Header from './components/Header'; // Importing the styled Header component

function App() {
  return (
    <Router>
      <Header /> {/* Using the styled Header component */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<ServiceList />} />
        <Route path="/services/:id" element={<ServiceDetail />} />
        <Route path="/map" element={<MapIntegration />} />
        <Route path="/reviews" element={<UserReviews />} />
      </Routes>
    </Router>
  );
}

export default App;
