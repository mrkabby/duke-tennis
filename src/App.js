import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';

import Booking from './components/Booking';
import Testimonials from './components/Testimonials';
import Resources from './components/Resources';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import FAQ from './components/FAQ';
import Blog from './components/Blog';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
         
          <Route path="/booking" element={<Booking />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
