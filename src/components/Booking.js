import React, { useState } from "react";

import emailjs from "emailjs-com";
import Navbar from "./Navbar";
import Footer from "./Footer";


const BookingPage = () => {
  // For navigating to the form
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    program: "",
    date: "",
  });

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // EmailJS parameters
    const emailParams = {
      name: formData.name,
      email: formData.email,
      program: formData.program,
      date: formData.date,
    };

    // Access EmailJS credentials from .env file
    const serviceID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const templateID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const userID = process.env.REACT_APP_EMAILJS_USER_ID;

    emailjs
      .send(serviceID, templateID, emailParams, userID)
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          alert("Booking confirmed! A confirmation email has been sent.");
          setFormData({ name: "", email: "", program: "", date: "" }); // Reset form
        },
        (error) => {
          console.log("FAILED...", error);
          alert("There was an error with your booking. Please try again.");
        }
      );
  };

  // Navigate to the form
  const goToForm = () => {
    const formSection = document.getElementById("bookingForm");
    if (formSection) {
      formSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Navbar />
      <div className="bg-gray-50 text-gray-800 min-h-screen">
        {/* Header Section */}
        <header
          className="relative bg-cover bg-center text-white text-center py-16 px-6"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1530915534664-4ac6423816b7?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJvb2tpbmclMjB0ZW5uaXN8ZW58MHx8MHx8fDA%3D')",
          }}
        >
          <div className="absolute inset-0 bg-green-600 bg-opacity-50"></div>
          <div className="relative z-10">
            <h1 className="text-4xl font-bold">Book Your Tennis Class</h1>
            <p className="mt-4 text-lg">
              Flexible schedules and tailored training for all ages and skill levels.
            </p>
            <button
              onClick={goToForm}
              className="mt-6 bg-white text-green-600 font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-green-100 transition duration-300"
            >
              Book Now
            </button>
          </div>
        </header>

        {/* Booking Form */}
        <section id="bookingForm" className="py-12 px-6">
          <h2 className="text-3xl font-bold text-center mb-10">Reserve Your Spot</h2>
          <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8">
            <form className="space-y-6" onSubmit={handleSubmit}>
              {/* Name */}
              <div>
                <label className="block text-lg font-semibold text-gray-600">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-lg font-semibold text-gray-600">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                />
              </div>

              {/* Program */}
              <div>
                <label className="block text-lg font-semibold text-gray-600">Select Program</label>
                <select
                  name="program"
                  value={formData.program}
                  onChange={handleChange}
                  className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                >
                  <option value="">Choose a program...</option>
                  <option value="kids">Kids Tennis Classes</option>
                  <option value="adults">Adult Training Sessions</option>
                  <option value="advanced">Advanced Coaching</option>
                  <option value="family">Family Tennis Events</option>
                </select>
              </div>

              {/* Date */}
              <div>
                <label className="block text-lg font-semibold text-gray-600">Preferred Date</label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-green-600 text-white font-bold py-3 rounded-md hover:bg-green-700 transition duration-300"
              >
                Confirm Booking
              </button>
            </form>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default BookingPage;
