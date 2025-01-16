import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaPhoneAlt } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-blue-100 text-black p-6">
      <div className="container mx-auto text-center">
        {/* Social Media Links */}
        <div className="flex justify-center space-x-4 mb-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400">
            <FaFacebookF />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400">
            <FaInstagram />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400">
            <FaTwitter />
          </a>
        </div>

        {/* Contact Info */}
        <p className="mb-2">© {new Date().getFullYear()} Duke Tennis. All rights reserved.</p>
        <p>
          <FaPhoneAlt className="inline mr-2 text-yellow-400" />
          <span>Call us:(+233) 55 8315717</span>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
