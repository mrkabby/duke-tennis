import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock } from 'react-icons/fa';
import Navbar from './Navbar';
import Footer from './Footer';

function Contact() {
  return (
    <>
    <Navbar />
    <div className="text-gray-700">
      {/* Header Section */}
      <div className="text-center py-24 px-4">
        <h1 className="text-4xl font-bold text-green-600">CONTACT US</h1>
      </div>

      {/* Contact Information */}
      <div className="flex flex-wrap justify-center gap-8 px-4 md:px-20 text-center">
        {/* Location */}
        <div className="w-full sm:w-1/2 md:w-1/4">
          <FaMapMarkerAlt className="text-green-600 text-3xl mx-auto" />
          <h3 className="mt-2 font-bold">Location</h3>
          <p>Rolider sports Complex, 9 Pacific Street, Shiashie-Accra</p>
        </div>

        {/* Phone */}
        <div className="w-full sm:w-1/2 md:w-1/4">
          <FaPhoneAlt className="text-green-600 text-3xl mx-auto" />
          <h3 className="mt-2 font-bold">Phone</h3>
          <p>(+233) 55 8315717</p>
        </div>

        {/* Email */}
        <div className="w-full sm:w-1/2 md:w-1/4">
          <FaEnvelope className="text-green-600 text-3xl mx-auto" />
          <h3 className="mt-2 font-bold">Email</h3>
          <p>info@dukecoach.com</p>
        </div>

        {/* Working Hours */}
        <div className="w-full sm:w-1/2 md:w-1/4">
          <FaClock className="text-green-600 text-3xl mx-auto" />
          <h3 className="mt-2 font-bold">Working Hours</h3>
          <p>Mon - Fri: 9:00 AM - 5:00 PM</p>
        </div>
      </div>

      {/* Contact Form */}
      <div className="mt-10 px-4 md:px-20">
        <h2 className="text-3xl text-center font-bold text-green-600">Send Message</h2>
        <form className="mt-6 max-w-lg mx-auto space-y-4">
          <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
            <input
              type="text"
              placeholder="First Name"
              className="flex-1 p-3 border rounded-lg focus:outline-none focus:border-green-500"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="flex-1 p-3 border rounded-lg focus:outline-none focus:border-green-500"
            />
          </div>
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 border rounded-lg focus:outline-none focus:border-green-500"
          />
          <textarea
            placeholder="Message"
            rows="4"
            className="w-full p-3 border rounded-lg focus:outline-none focus:border-green-500"
          ></textarea>
          <button className="w-full bg-green-500 text-white py-3 rounded-lg font-semibold hover:bg-green-600">
            Send Message
          </button>
        </form>
      </div>

      {/* Map Section */}
      <div className="mt-10 px-4 md:px-20">
        <h2 className="text-3xl text-center font-bold text-green-600 mb-6">Our Location</h2>
        <div className="w-full h-80 bg-gray-300 rounded-lg overflow-hidden">
          {/* Replace this div with an embedded map iframe if needed */}
          <iframe
            className="w-full h-full rounded-lg"
            src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d2721.78289108539!2d-0.18759793187295273!3d5.625058638853815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0xfdf9b891566b4b7%3A0xf11e6d745f3394e5!2sJRG7%2B2W%20ROLIDER%20PROPERTY%20-%20SHIASHIE%2C%20Accra!3m2!1d5.625048!2d-0.18518669999999998!5e0!3m2!1sen!2sgh!4v1736990581842!5m2!1sen!2sgh" 
            loading="lazy"
            title="Location Map"
          ></iframe>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
}

export default Contact;
