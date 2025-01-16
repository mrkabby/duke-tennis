import React, { useState } from "react";
import tennisImage from "../images/rezli-FtNEYu8PTv0-unsplash.jpg"; // Replace with your actual image path
import racketImage from "../images/yelitsa-suazo-QWbslY1FbF0-unsplash.jpg"; // Replace with actual image path for equipment
import shoesImage from "../images/skye-studios-vt9yGEvu9dM-unsplash.jpg"; // Replace with actual image path for equipment
import ballImage from "../images/richard-sagredo-Fp_V3HLbCLc-unsplash.jpg"; // Replace with actual image path for equipment
import Navbar from "./Navbar";
import Footer from "./Footer";

function Resources() {
  const [activeTab, setActiveTab] = useState("Private Lessons");

  // Tab content based on active selection
  const tabContent = {
    "Private Lessons":
      "Our private lessons offer personalized, one-on-one coaching tailored to your skill level. Whether you're a beginner or an advanced player, you'll receive focused training to rapidly improve your game.",
    "Group Lessons":
      "Join our group classes for a dynamic and social tennis experience. Perfect for players looking to learn in a fun, interactive environment while improving their skills.",
    "Kids Training":
      "Designed for young players, our kids' training sessions are fun, engaging, and tailored to teach the fundamentals of tennis while building confidence on the court.",
    "Cardio Tennis":
      "Cardio Tennis combines tennis drills with a high-energy workout. It’s a fun, social way to improve your fitness while playing the sport you love.",
    "Hitting Partner":
      "Practice and refine your game with a hitting partner. Great for rally practice and enhancing your on-court consistency.",
  };

  return (
    <>
      <Navbar />
      <div className="bg-gray-50 text-gray-800">
        {/* Introduction Section */}
        <div className="flex flex-col md:flex-row items-center md:justify-between px-6 md:px-20 py-10 md:py-20">
          {/* Text Section */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h2 className="text-2xl font-bold text-green-600">EXPLORE OUR</h2>
            <h3 className="text-4xl font-bold text-gray-900">TENNIS RESOURCES</h3>

            {/* Tabs */}
            <div className="flex flex-wrap space-x-4 mt-6 border-b-2 border-gray-300">
              {[
                "Private Lessons",
                "Group Lessons",
                "Kids Training",
                "Cardio Tennis",
                "Hitting Partner",
              ].map((tab) => (
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
            <img
              src={tennisImage}
              alt="Tennis Event"
              className="w-full h-auto object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Tennis Equipment and Apparel Section */}
        <div className="py-12 px-6 md:px-20 bg-green-50">
          <h2 className="text-3xl font-bold text-center text-green-600">
            Tennis Equipment & Apparel
          </h2>
          <p className="text-center text-gray-600 mt-2">
            High-quality equipment and apparel to enhance your game.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            {/* Card 1 */}
            <div
              className="bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer"
              onClick={() =>
                window.open(
                  "https://wa.me/+233558315717?text=Hi,%20I'm%20interested%20in%20the%20tennis%20racket.",
                  "_blank"
                )
              }
            >
              <img
                src={racketImage}
                alt="Tennis Racket"
                className="w-full h-64 object-cover"
              />
              <div className="p-4 text-center">
                <h3 className="text-lg font-bold text-gray-800">Tennis Racket</h3>
                <p className="text-sm text-gray-600">Premium racket for optimal performance.</p>
                <p className="text-green-600 font-semibold mt-2">$120</p>
              </div>
            </div>

            {/* Card 2 */}
            <div
              className="bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer"
              onClick={() =>
                window.open(
                  "https://wa.me/+233558315717?text=Hi,%20I'm%20interested%20in%20the%20tennis%20shoes.",
                  "_blank"
                )
              }
            >
              <img
                src={shoesImage}
                alt="Tennis Shoes"
                className="w-full h-64 object-cover"
              />
              <div className="p-4 text-center">
                <h3 className="text-lg font-bold text-gray-800">Tennis Shoes</h3>
                <p className="text-sm text-gray-600">Comfortable shoes for the perfect game.</p>
                <p className="text-green-600 font-semibold mt-2">$80</p>
              </div>
            </div>

            {/* Card 3 */}
            <div
              className="bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer"
              onClick={() =>
                window.open(
                  "https://wa.me/+23355831571?text=Hi,%20I'm%20interested%20in%20the%20tennis%20balls.",
                  "_blank"
                )
              }
            >
              <img
                src={ballImage}
                alt="Tennis Balls"
                className="w-full h-64 object-cover"
              />
              <div className="p-4 text-center">
                <h3 className="text-lg font-bold text-gray-800">Tennis Balls</h3>
                <p className="text-sm text-gray-600">Durable tennis balls for every match.</p>
                <p className="text-green-600 font-semibold mt-2">$15</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Resources;
