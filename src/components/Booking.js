import React, { useState } from "react";
import cardioImage from "../images/people.jpg";
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
  className="relative bg-cover bg-center text-white text-center py-24 px-6"
  style={{
    backgroundImage: `url(${cardioImage})`,
  }}
>
  <div className="absolute inset-0 bg-black bg-opacity-50"></div>
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
        <section id="bookingForm" className="py-12 px-6 md:px-20">
  <h2 className="text-3xl font-bold text-center mb-10">Reserve Your Spot</h2>
  
  <div className="flex flex-col lg:flex-row gap-10 lg:items-start">
    {/* Left: Booking Form */}
    <div className="w-full lg:w-1/2 bg-white shadow-lg rounded-lg p-8">
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
  <option value="">Choose a package...</option>
  <option value="3x Weekly – GHC 1500 (Intensive)">3x Weekly – GHC 1500 (Intensive)</option>
  <option value="2x Weekly – GHC 1200 (Semi-Intensive)">2x Weekly – GHC 1200 (Semi-Intensive)</option>
  <option value="1x Weekly – GHC 700 (Regular)">1x Weekly – GHC 700 (Regular)</option>
  <option value="Walk-In – GHC 200">Walk-In – GHC 200</option>
  <option value="One-on-One – GHC 300">One-on-One – GHC 300</option>
  <option value="One-on-One Monthly – GHC 2000">One-on-One Monthly – GHC 2000</option>
  <option value="Kids Lessons 2x a Week – GHC 1000">Kids Lessons 2x a Week – GHC 1000</option>
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

    {/* Right: Packages & Terms */}
    <div className="w-full lg:w-1/2">
      <h3 className="text-2xl font-bold text-green-600 mb-6">Training Packages</h3>
      <div className="grid grid-cols-1 gap-8 text-sm md:text-base">
        <div className="bg-white p-6 rounded-lg shadow">
          <h4 className="text-lg font-semibold mb-2">Group Monthly Packages</h4>
          <ul className="space-y-2">
            <li>• 3x Weekly (Intensive): GHC 1500</li>
            <li>• 2x Weekly (Semi-Intensive): GHC 1200</li>
            <li>• 1x Weekly (Regular): GHC 700</li>
          </ul>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h4 className="text-lg font-semibold mb-2">Other Options</h4>
          <ul className="space-y-2">
            <li>• Walk-In Group: GHC 200/session</li>
            <li>• One-on-One: GHC 300/session or GHC 2000/month (8 sessions)</li>
            <li>• Kids Lessons (2x a week): GHC 1000/month</li>
            <li className="text-xs font-bold italic">*Court fees not included</li>
          </ul>
        </div>
      </div>

      <div className="mt-6 bg-white pt-6 text-gray-700 text-sm leading-6 border-t">
        <h4 className="font-semibold text-green-600 mb-2 text-center">Booking & Cancellation Terms</h4>
        <ul className="list-disc ml-6 space-y-2">
          <li>Booking & payment must be made at least 48hrs in advance.</li>
          <li>First-come, first-serve basis – payment confirms slot.</li>
          <li>No session extension if client is late.</li>
          <li>Cancellations under 6hrs notice count as completed.</li>
          <li>Weather-related cancellations will be rescheduled.</li>
          <li>Bookings are non-transferable.</li>
          <li>Payment accepted via bank transfer or mobile money.</li>
        </ul>
        <p className="mt-4 italic font-bold">
          *By booking, you agree to these terms and conditions.
        </p>
      </div>
    </div>
  </div>
</section>

      </div>
      <Footer />
    </>
  );
};

export default BookingPage;
