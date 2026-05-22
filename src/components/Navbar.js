import React, { useState } from "react";
import logo from "../images/logo.png";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (path) => location.pathname === path;

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Booking", path: "/booking" },
    { name: "Gallery", path: "/gallery" },
    { name: "Resources", path: "/resources" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="fixed w-full top-0 left-0 z-50 transition-all duration-300 backdrop-blur-md bg-darkslate-900/80 border-b border-slate-800/60 shadow-lg px-6 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center space-x-3">
          <div className="h-12 w-12 transform hover:scale-105 transition-transform duration-300 cursor-pointer">
            <img
              src={logo}
              alt="Duke Tennis Logo"
              className="h-full w-full object-contain filter drop-shadow-[0_0_8px_rgba(197,242,0,0.3)]"
              onClick={() => navigate("/")}
            />
          </div>
          <span 
            className="text-white font-heading font-extrabold text-xl tracking-wider cursor-pointer"
            onClick={() => navigate("/")}
          >
            DUKE<span className="text-volt-400">TENNIS</span>
          </span>
        </div>

        {/* Navigation Links for Desktop */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`relative py-1 font-heading font-semibold text-sm tracking-wide transition-colors duration-300 group ${
                isActive(link.path) ? "text-volt-400" : "text-gray-300 hover:text-white"
              }`}
            >
              {link.name}
              <span
                className={`absolute bottom-0 left-0 w-full h-[2px] bg-volt-400 transition-transform duration-300 origin-left ${
                  isActive(link.path) ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                }`}
              />
            </Link>
          ))}
        </div>

        {/* Primary CTA (Book a Session) for Desktop */}
        <div className="hidden md:block">
          <button
            onClick={() => navigate("/booking")}
            className="bg-volt-400 hover:bg-volt-300 text-darkslate-950 px-5 py-2 rounded-full font-heading font-bold text-xs uppercase tracking-widest transition-all duration-300 glow-volt-hover hover:scale-105"
          >
            Book Session
          </button>
        </div>

        {/* Hamburger Menu Toggle for Mobile */}
        <div className="flex md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none hover:text-volt-400 transition-colors duration-300">
            {isMenuOpen ? (
              <HiX className="w-8 h-8" />
            ) : (
              <HiMenuAlt3 className="w-8 h-8" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Full-Screen Drawer Menu */}
      <div
        className={`fixed inset-0 top-[73px] w-full h-[calc(100vh-73px)] bg-darkslate-950/95 backdrop-blur-lg z-40 flex flex-col items-center justify-center space-y-6 transition-all duration-300 ease-in-out md:hidden ${
          isMenuOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full pointer-events-none"
        }`}
      >
        {navLinks.map((link, index) => (
          <Link
            key={link.path}
            to={link.path}
            className={`font-heading font-bold text-2xl tracking-wider transition-all duration-300 ${
              isActive(link.path) ? "text-volt-400 scale-105" : "text-gray-300 hover:text-white"
            }`}
            style={{ 
              transitionDelay: isMenuOpen ? `${index * 50}ms` : '0ms',
              transform: isMenuOpen ? 'translateY(0)' : 'translateY(20px)',
              opacity: isMenuOpen ? 1 : 0
            }}
            onClick={() => setIsMenuOpen(false)}
          >
            {link.name}
          </Link>
        ))}
        <button
          onClick={() => {
            setIsMenuOpen(false);
            navigate("/booking");
          }}
          className="bg-volt-400 hover:bg-volt-300 text-darkslate-950 px-8 py-3 rounded-full font-heading font-bold text-sm uppercase tracking-widest transition-all duration-300 glow-volt-hover mt-4"
          style={{ 
            transform: isMenuOpen ? 'translateY(0)' : 'translateY(20px)',
            opacity: isMenuOpen ? 1 : 0,
            transitionDelay: `${navLinks.length * 50}ms`
          }}
        >
          Book Session
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
