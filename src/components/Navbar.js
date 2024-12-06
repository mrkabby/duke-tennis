import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { GiTennisRacket, GiHamburgerMenu } from 'react-icons/gi';
import { FaTimes } from 'react-icons/fa';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-blue-100 text-black p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <GiTennisRacket className="text-yellow-400 mr-2 text-2xl" />
          <Link to="/" className="text-2xl font-bold">Duke Tennis</Link>
        </div>
        
        {/* Hamburger Menu Icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            {isOpen ? <FaTimes className="text-2xl" /> : <GiHamburgerMenu className="text-2xl" />}
          </button>
        </div>

        {/* Links */}
        <div className={`flex-col md:flex md:flex-row md:space-x-4 md:items-center ${isOpen ? 'flex' : 'hidden'} md:flex`}>
          <Link to="/" className="hover:underline py-2 md:py-0">Home</Link>
          <Link to="/about" className="hover:underline py-2 md:py-0">About</Link>
          <Link to="/services" className="hover:underline py-2 md:py-0">Services</Link>
          <Link to="/programs" className="hover:underline py-2 md:py-0">Programs</Link>
          <Link to="/booking" className="hover:underline py-2 md:py-0">Booking</Link>
          
          <Link to="/resources" className="hover:underline py-2 md:py-0">Resources</Link>
          
          <Link to="/contact" className="hover:underline py-2 md:py-0">Contact</Link>
          
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
