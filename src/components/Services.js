import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import KidPic from "../images/Kid.jpg";
import AdultsPic from "../images/semi.jpg";
import TravelPic from "../images/another lady.png";
import CardioPic from "../images/cardio.jpg";
import CompanyPic from "../images/people.jpg";

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
                One-on-one coaching to improve your skills and technique.
                 Availabe Mornings and Weekends for private lessons
                
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
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src={CardioPic}
              alt="Cardio and Warm Up Drills"
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <h3 className="text-lg font-bold">Cardio and Warm Up Drills</h3>
              <p className="text-sm text-gray-500 mt-2">
                Get your heart pumping with cardio tennis and warm-up drills
                that enhance your skills while keeping you fit.
              </p>
              <button
                onClick={() => navigate("/booking")}
                className="text-green-500 font-semibold mt-4"
              >
                Book Now
              </button>
            </div>
          </div>
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src={CompanyPic}
              alt="Introduction of Tennis and Tournaments for Organisations"
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <h3 className="text-lg font-bold">
                Introduction of Tennis and Tournaments for Organisations
              </h3>
              <p className="text-sm text-gray-500 mt-2">
                A full tennis program for organizations or group who want an
                introduction of the game. We introduce the game to you by taking
                you through the basics of the game and a fun mini tournament to
                have a feel of the competitive aspect of the game
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

      </div>
      <section className="bg-gray-100 py-16 px-6 mt-7">
        <h2 className="text-3xl font-bold text-center mb-10">
          Why Train with Us?
        </h2>
        <div className="grid md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-green-600 text-4xl mb-4">🎾</div>
            <h4 className="text-lg font-bold">Modern Equipment</h4>
            <p className="text-gray-600">
              Top-quality tennis gear for every session.
            </p>
          </div>
          <div>
            <div className="text-green-600 text-4xl mb-4">🏆</div>
            <h4 className="text-lg font-bold">Competitive Matches</h4>
            <p className="text-gray-600">
              Regular tournaments to test your skills.
            </p>
          </div>
          <div>
            <div className="text-green-600 text-4xl mb-4">👟</div>
            <h4 className="text-lg font-bold">Personalized Coaching</h4>
            <p className="text-gray-600">Programs tailored to your goals.</p>
          </div>
          <div>
            <div className="text-green-600 text-4xl mb-4">🌟</div>
            <h4 className="text-lg font-bold">All Levels Welcome</h4>
            <p className="text-gray-600">
              Programs for beginners to advanced players.
            </p>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-16 px-6 text-center text-">
        <h2 className="text-3xl font-bold">
          Everyone is Welcome at Our Tennis School
        </h2>
        <p className="mt-4">
          Whether you're a beginner or an experienced player, our tennis school
          offers a welcoming environment for everyone. Join us to improve your
          skills, meet new friends, and enjoy the game of tennis!
        </p>
        <button
          onClick={() => navigate("/booking")}
          className="mt-6 bg-green-500 text-white font-semibold py-2 px-4 rounded shadow-lg hover:bg-green-700"
        >
          Get Started
        </button>
      </section>
      <Footer />
    </>
  );
}

export default Services;
