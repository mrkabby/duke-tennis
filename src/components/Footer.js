import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { FaTiktok, FaYoutube } from 'react-icons/fa6';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-darkslate-950 text-gray-400 pt-16 pb-8 border-t border-slate-800/40 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
        {/* Brand Bio */}
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <span className="text-white font-heading font-extrabold text-2xl tracking-wider">
              DUKE<span className="text-volt-400">TENNIS</span>
            </span>
          </div>
          <p className="text-sm text-gray-400 leading-relaxed font-sans">
            Elevating tennis skills and fitness across Ghana with world-class, PTR-certified training for juniors, adults, and groups.
          </p>
          {/* Social Icons */}
          <div className="flex space-x-3 pt-2">
            {[
              { icon: <FaFacebookF />, href: "https://facebook.com/George Duke Nyarkoh", color: "hover:bg-blue-600 hover:text-white" },
              { icon: <FaInstagram />, href: "https://instagram.com/duketennis1", color: "hover:bg-pink-600 hover:text-white" },
              { icon: <FaTiktok />, href: "https://tiktok.com/@duketennis10", color: "hover:bg-black hover:text-white hover:border-black" },
              { icon: <FaYoutube />, href: "https://youtube.com/DUKETENNIS-GH", color: "hover:bg-red-600 hover:text-white" },
            ].map((social, idx) => (
              <a
                key={idx}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-10 h-10 rounded-full border border-slate-800 flex items-center justify-center transition-all duration-300 transform hover:-translate-y-1 hover:border-volt-400 hover:shadow-[0_0_15px_rgba(197,242,0,0.3)] text-gray-400 ${social.color}`}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-heading font-bold text-sm uppercase tracking-wider mb-4 border-l-2 border-volt-400 pl-3">
            Quick Links
          </h4>
          <ul className="space-y-2.5 text-sm">
            {[
              { name: "Home", path: "/" },
              { name: "About Us", path: "/about" },
              { name: "Our Services", path: "/services" },
              { name: "Book Session", path: "/booking" },
              { name: "Photo Gallery", path: "/gallery" },
              { name: "Resources & Shop", path: "/resources" },
            ].map((link, idx) => (
              <li key={idx}>
                <Link
                  to={link.path}
                  className="hover:text-volt-400 transition-colors duration-300 flex items-center space-x-1"
                >
                  <span>&rsaquo;</span>
                  <span>{link.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Operating Hours */}
        <div>
          <h4 className="text-white font-heading font-bold text-sm uppercase tracking-wider mb-4 border-l-2 border-volt-400 pl-3">
            Operating Hours
          </h4>
          <ul className="space-y-3 text-sm font-sans">
            <li className="flex justify-between border-b border-slate-900 pb-1.5">
              <span>Monday - Friday</span>
              <span className="text-white font-semibold">6:00 AM - 8:00 PM</span>
            </li>
            <li className="flex justify-between border-b border-slate-900 pb-1.5">
              <span>Saturday</span>
              <span className="text-white font-semibold">6:00 AM - 6:00 PM</span>
            </li>
            <li className="flex justify-between">
              <span>Sunday</span>
              <span className="text-volt-400 italic">By Appointment</span>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-white font-heading font-bold text-sm uppercase tracking-wider mb-4 border-l-2 border-volt-400 pl-3">
            Contact
          </h4>
          <ul className="space-y-3.5 text-sm">
            <li className="flex items-start space-x-3">
              <FaPhoneAlt className="text-volt-400 mt-1" />
              <div>
                <p className="text-white font-semibold">Phone Support</p>
                <a href="tel:+233558315717" className="hover:text-volt-400 transition-colors duration-300">
                  (+233) 55 831 5717
                </a>
              </div>
            </li>
            <li className="flex items-start space-x-3">
              <FaEnvelope className="text-volt-400 mt-1" />
              <div>
                <p className="text-white font-semibold">Email Us</p>
                <a href="mailto:duketennis4@gmail.com" className="hover:text-volt-400 transition-colors duration-300">
                  duketennis4@gmail.com
                </a>
              </div>
            </li>
            <li className="flex items-start space-x-3">
              <FaMapMarkerAlt className="text-volt-400 mt-1" />
              <div>
                <p className="text-white font-semibold">Locations</p>
                <p className="text-gray-400">Rolider Sports complex</p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="max-w-7xl mx-auto pt-8 border-t border-slate-900 flex flex-col md:flex-row items-center justify-between text-xs text-gray-500 font-sans">
        <p>© {currentYear} DUKETENNIS. All rights reserved.</p>
        <p className="mt-2 md:mt-0">
          PTR Certified Tennis Academy
        </p>
      </div>
    </footer>
  );
}

export default Footer;
