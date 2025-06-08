import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import KidPic from "../images/Kid.jpg";
import AdultsPic from "../images/people.jpg";
import TravelPic from "../images/another lady.png";

function Services() {
  const navigate = useNavigate(); // For navigation

  return (
    <>
      <Navbar />
      <div className="text-gray-700">
        {/* Header Section */}
        <div className="text-center py-24">
          <h1 className="text-4xl font-bold text-green-600">SERVICES</h1>
          <p className="mt-2 text-xl font-semibold text-black">
            High-quality tennis coaching tailored for everyone
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-10 md:px-20">
          {/* Service Card 1 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src={TravelPic}
              alt="Private Lessons"
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <h3 className="text-lg font-bold">Private Lessons</h3>
              <p className="text-sm text-gray-500 mt-2">
                One-on-one coaching tailored to improve your skills rapidly.
              </p>
              <button
                onClick={() => navigate("/booking")}
                className="text-green-500 font-semibold mt-4"
              >
                Book Now
              </button>
            </div>
          </div>

          {/* Service Card 2 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src={AdultsPic}
              alt="Group Lessons"
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <h3 className="text-lg font-bold">Group Lessons</h3>
              <p className="text-sm text-gray-500 mt-2">
                Join a group of players for interactive and fun training
                sessions.
              </p>
              <button
                onClick={() => navigate("/booking")}
                className="text-green-500 font-semibold mt-4"
              >
                Book Now
              </button>
            </div>
          </div>

          {/* Service Card 3 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src={KidPic}
              alt="Kids Training"
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <h3 className="text-lg font-bold">Kids Training</h3>
              <p className="text-sm text-gray-500 mt-2">
                Fun, safe, and engaging tennis classes designed for children.
              </p>
              <button
                onClick={() => navigate("/booking")}
                className="text-green-500 font-semibold mt-4"
              >
                Book Now
              </button>
            </div>
          </div>
        </div>

        {/* Additional Services Section */}
        <div className="mt-20 bg-green-50 p-10 md:p-20">
          <h2 className="text-3xl font-bold text-green-600">Additional Services</h2>
          <p className="mt-4 text-blue-900 font-semibold">Explore more options</p>
          <ul className="mt-6 space-y-6">
            <li className="flex items-start">
              <span className="text-2xl font-bold text-green-600 mr-4">01</span>
              <div>
                <h3 className="font-bold text-lg">Cardio Tennis</h3>
                <p className="text-sm text-gray-600">
                  Get fit while playing tennis with music, fun, and energy.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-2xl font-bold text-green-600 mr-4">02</span>
              <div>
                <h3 className="font-bold text-lg">Warm up Drills</h3>
                <p className="text-sm text-gray-600">
                  Practice rallies and improve your gameplay with a hitting
                  partner.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-2xl font-bold text-green-600 mr-4">03</span>
              <div>
                <h3 className="font-bold text-lg">Introduction of Tennis and Tournaments for Organisations</h3>
                <p className="text-sm text-gray-600">
                  Advanced tactical training to elevate your game strategy.
                </p>
              </div>
            </li>
          </ul>
        </div>

        
          
      </div>
      <section className="bg-gray-100 py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">Why Train with Us?</h2>
        <div className="grid md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-green-600 text-4xl mb-4">🎾</div>
            <h4 className="text-lg font-bold">Modern Equipment</h4>
            <p className="text-gray-600">Top-quality tennis gear for every session.</p>
          </div>
          <div>
            <div className="text-green-600 text-4xl mb-4">🏆</div>
            <h4 className="text-lg font-bold">Competitive Matches</h4>
            <p className="text-gray-600">Regular tournaments to test your skills.</p>
          </div>
          <div>
            <div className="text-green-600 text-4xl mb-4">👟</div>
            <h4 className="text-lg font-bold">Personalized Coaching</h4>
            <p className="text-gray-600">Programs tailored to your goals.</p>
          </div>
          <div>
            <div className="text-green-600 text-4xl mb-4">🌟</div>
            <h4 className="text-lg font-bold">All Levels Welcome</h4>
            <p className="text-gray-600">Programs for beginners to advanced players.</p>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-16 px-6 text-center text-">
        <h2 className="text-3xl font-bold">Everyone is Welcome at Our Tennis Club!</h2>
        <p className="mt-4">
          Whether you're a beginner or a pro, we have something for everyone. Join us to learn, play, and grow.
        </p>
        <button  onClick={() => navigate('/booking')}className="mt-6 bg-green-500 text-white font-semibold py-2 px-4 rounded shadow-lg hover:bg-green-700">
          Get Started
        </button>
      </section>
      <Footer />
    </>
  );
}

export default Services;
