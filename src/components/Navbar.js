import React, { useState } from "react";
import logo from "../images/logo.png";
import { Link, useNavigate } from "react-router-dom";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navigate = useNavigate();

  return (
    <nav className="flex items-center justify-between bg-blue-100 px-4 py-2 fixed w-full top-0 z-50 shadow-md">
      {/* Logo */}
      <div className="h-16 w-16">
        <img
          src={logo}
          alt="Duke Tennis Logo"
          className="h-full w-full cursor-pointer"
          onClick={() => navigate("/")}
        />
      </div>

      {/* Hamburger Menu for Mobile */}
      <div className="flex md:hidden">
        <button onClick={toggleMenu} className="focus:outline-none">
          <img
            src={
              !isMenuOpen
                ? "https://img.icons8.com/fluent-systems-regular/2x/menu-squared-2.png"
                : "https://img.icons8.com/fluent-systems-regular/2x/close-window.png"
            }
            width="30"
            height="30"
            alt="Menu Toggle"
          />
        </button>
      </div>

      {/* Navigation Links */}
      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } absolute top-16 left-0 w-full bg-blue-100 md:relative md:top-0 md:left-0 md:w-auto md:bg-transparent md:flex items-center`}
      >
        <div className="flex flex-col md:flex-row md:space-x-6 text-center md:text-left">
          <Link
            to="/"
            className="block py-2 px-4 text-lg hover:text-blue-700 md:inline-block"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="block py-2 px-4 text-lg hover:text-blue-700 md:inline-block"
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </Link>
          <Link
            to="/services"
            className="block py-2 px-4 text-lg hover:text-blue-700 md:inline-block"
            onClick={() => setIsMenuOpen(false)}
          >
            Services
          </Link>
          <Link
            to="/booking"
            className="block py-2 px-4 text-lg hover:text-blue-700 md:inline-block"
            onClick={() => setIsMenuOpen(false)}
          >
            Booking
          </Link>
          <Link
            to="/resources"
            className="block py-2 px-4 text-lg hover:text-blue-700 md:inline-block"
            onClick={() => setIsMenuOpen(false)}
          >
            Resources
          </Link>
          <Link
            to="/contact"
            className="block py-2 px-4 text-lg hover:text-blue-700 md:inline-block"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </Link>
        </div>
      </div>

      
    </nav>
  );
};

export default NavBar;
