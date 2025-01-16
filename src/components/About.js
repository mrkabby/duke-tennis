import React from "react";
import { useNavigate } from "react-router-dom"; // For navigation
import tennisPlayer from "../images/DukeTennis.jpg"; // Replace with actual path to your image
import Navbar from "./Navbar";
import Footer from "./Footer";
import eventImage1 from "../images/DukeTennis.jpg";
import eventImage2 from "../images/fei-chao-zWhd4tIe_z4-unsplash.jpg"; // Replace with actual event image paths
import eventImage3 from "../images/fei-chao-y-ahbHZbs7Y-unsplash.jpg";

function About() {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <div className="text-gray-700">
        {/* Introduction Section */}
        <div className="flex flex-col md:flex-row items-center md:justify-between px-6 md:px-20 py-10 md:py-20 bg-gray-100">
          {/* Image Section */}
          <div className="w-full md:w-1/2">
            <img
              src={tennisPlayer}
              alt="Tennis Player"
              className="w-full h-auto object-cover py-24"
            />
          </div>

          {/* Text Section */}
          <div className="w-full md:w-1/2 mt-8 md:mt-0 md:pl-10 text-center md:text-left">
            <h2 className="text-3xl font-bold text-gray-800">ABOUT THE CLUB</h2>
            <p className="mt-4 text-gray-600">
              At the award-winning ProShot Tennis Club, lawn tennis is more than
              just a cold-calculated business — it is passion!
            </p>
            <p className="mt-2 text-gray-600">
              Renowned as one of the country's most outstanding facilities by
              the United States Tennis Association, this award-winning complex
              offers a "home away from home" country club setting for resort
              visitors and Maui residents alike.
            </p>
            <div className="mt-6 space-x-4">
              <button
                className="px-6 py-2 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600"
                onClick={() => navigate("/booking")}
              >
                Book Now
              </button>
              <button
                className="px-6 py-2 bg-white text-gray-700 border border-gray-300 font-semibold rounded-lg hover:bg-gray-100"
                onClick={() => navigate("/gallery")}
              >
                Gallery
              </button>
            </div>
          </div>
        </div>

        {/* Statistics Section */}
        <div className="bg-green-500 text-white py-10 md:py-20 px-6 md:px-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
            <div>
              <h3 className="text-4xl font-bold">12</h3>
              <p className="mt-2 text-lg">Tennis Courts</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold">45</h3>
              <p className="mt-2 text-lg">Tournaments/Year</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold">999+</h3>
              <p className="mt-2 text-lg">Club Members</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold">3000+</h3>
              <p className="mt-2 text-lg">Visitors Yearly</p>
            </div>
          </div>
        </div>

        {/* Regions Section */}
        <div className="py-12 px-6 md:px-20 bg-gray-50">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
            Available in 6 Regions of Ghana
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Region Card */}
            {[
              "Greater Accra",
              "Ashanti",
              "Western",
              "Northern",
              "Eastern",
              "Central",
            ].map((region, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-lg p-6 text-center"
              >
                <h3 className="text-xl font-bold text-green-600">{region}</h3>
                <p className="mt-2 text-gray-600">
                  Join our tennis programs in {region} and experience
                  world-class facilities.
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Portfolio of Events Section */}
        <div className="py-10 px-6 md:px-20 bg-green-100 text-center">
          <h2 className="text-3xl font-bold text-green-600">
            Portfolio of Events
          </h2>
          <p className="mt-4 text-gray-600">
            Discover our exciting events and tournaments across regions.
          </p>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Event Cards */}
            {[eventImage1, eventImage2, eventImage3, eventImage1].map(
              (image, index) => (
                <div
                  key={index}
                  className="relative overflow-hidden rounded-lg shadow-lg"
                >
                  <img
                    src={image}
                    alt={`Event ${index + 1}`}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <p className="text-white font-bold text-lg">
                      Event {index + 1}
                    </p>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;
