import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Booking from './components/Booking';
import Resources from './components/Resources';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import SEO from './components/SEO';
import GoogleAnalytics from './components/GoogleAnalytics';
import { seoConfig } from './config/seoConfig';

function App() {
  return (
    <Router>
      <div className="App">
        <SEO />
        <GoogleAnalytics trackingId={seoConfig.analytics.googleAnalyticsId} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
