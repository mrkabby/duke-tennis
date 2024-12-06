import React, { useState } from 'react';
import tennisImage from '../images/rezli-FtNEYu8PTv0-unsplash.jpg'; // Replace with your actual image path
import Navbar from './Navbar';
import Footer from './Footer';

function Resources() {
  const [activeTab, setActiveTab] = useState("Banquets & Events");

  // Tab content based on active selection
  const tabContent = {
    "Banquets & Events": "Discreetly located in the charming neighborhood of Madison Park, the picturesque scenery at our Tennis Club offers an exceptional venue. Since 1890, elegant and unforgettable occasions have been hosted here in the timeless tradition of cultivated taste, offering unrivaled service and exceptional cuisine.",
    "Classes for Adults": "Our adult classes are designed to improve your skills, no matter your level. From beginners to seasoned players, we offer a supportive environment that helps you get the most out of your time on the court.",
    "Classes for Kids": "We provide fun and engaging classes for kids, teaching them the fundamentals of tennis in an encouraging environment. Our coaches focus on building both skills and confidence on the court.",
  };

  return (
    <>
    <Navbar />
    <div className="flex flex-col md:flex-row items-center md:justify-between px-6 md:px-20 py-10 md:py-20 bg-gray-50">
      {/* Text Section */}
      <div className="w-full md:w-1/2 text-center md:text-left">
        <h2 className="text-2xl font-bold text-gray-800">DO MORE THAN</h2>
        <h3 className="text-4xl font-bold text-gray-900">JUST PLAYING TENNIS</h3>

        {/* Tabs */}
        <div className="flex space-x-4 mt-6 border-b-2 border-gray-300">
          {["Banquets & Events", "Classes for Adults", "Classes for Kids"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-2 ${
                activeTab === tab
                  ? "border-b-4 border-green-500 text-green-600 font-semibold"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Tab Description */}
        <p className="mt-6 text-gray-600">{tabContent[activeTab]}</p>
      </div>

      {/* Image Section */}
      <div className="w-full md:w-1/2 mt-8 md:mt-0 md:pl-10">
        <img src={tennisImage} alt="Tennis Event" className="w-full h-auto object-cover rounded-lg shadow-lg" />
      </div>
    </div>
    <Footer />
    </>
  );
}

export default Resources;
