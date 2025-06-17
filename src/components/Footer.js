import React from 'react';
import { FaFacebookF, FaInstagram, FaPhoneAlt } from 'react-icons/fa';
import { FaTiktok, FaYoutube } from 'react-icons/fa6';

function Footer() {
  return (
    <footer className="bg-blue-100 text-black p-6">
      <div className="container mx-auto text-center">
        {/* Social Media Links */}
        <div className="flex justify-center space-x-4 mb-4">
          <a href="https://facebook.com/George Duke Nyarkoh" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400">
            <FaFacebookF />
          </a>
          <a href="https://instagram.com/duketennis1" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400">
            <FaInstagram />
          </a>
          <a href="https://tiktok.com/@duketennis10" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400">
            <FaTiktok />
          </a>
          <a href="https://youtube.com/DUKETENNIS-GH" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400">
            <FaYoutube />
          </a>
        </div>

        {/* Contact Info */}
        <p className="mb-2">© {new Date().getFullYear()} DUKETENNIS. All rights reserved.</p>
        <p>
          <FaPhoneAlt className="inline mr-2 text-yellow-400" />
          <span>Call us:(+233) 55 8315717</span>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
