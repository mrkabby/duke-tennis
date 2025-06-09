import React from "react";
import { useNavigate } from "react-router-dom"; // For navigation
import tennisPlayer from "../images/DukeTennis.jpg"; // Replace with actual path to your image
import Navbar from "./Navbar";
import Footer from "./Footer";


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
            <h2 className="text-3xl font-bold text-gray-800">ABOUT DUKETENNIS</h2>
            <p className="mt-4 text-gray-600">
              DUKETENNIS is a premier tennis club in Ghana, offering world-class
              facilities and coaching. Our mission is to promote tennis as a
              sport for all ages and skill levels, providing a welcoming
              environment for both players and spectators.
            </p>
            <p className="mt-2 text-gray-600">
              Whether you're a beginner looking to learn the basics or an
              experienced player seeking advanced training, DUKETENNIS has
              something for everyone. Join us to improve your skills, compete in
              tournaments, and be part of a vibrant tennis community.
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
        <div className=" text py-10 md:py-20 px-6 md:px-20">
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

       
      </div>
      <Footer />
    </>
  );
}

export default About;
