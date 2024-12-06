import React from "react";
import Photo from "../images/richard-sagredo-oDlLU_1hZwM-unsplash.jpg";
import Navbar from "./Navbar";
import Footer from "./Footer";

const ProgramsPage = () => {
  return (
    <>
    <Navbar />
    
    <div className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <header
        className="relative bg-cover bg-center text-white text-center py-16 px-6"
        style={{
          backgroundImage: `url(${Photo})`, // Correctly format the image as a background URL
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-blue-600 bg-opacity-30"></div>

        {/* Content */}
        <div className="relative z-10">
          <h1 className="text-4xl font-bold">Learn Tennis with Our Training</h1>
          <p className="mt-4 text-lg">Professional coaching for all ages and skill levels.</p>
          <button className="mt-6 bg-white text-green-600 font-semibold py-2 px-4 rounded shadow-lg hover:bg-green-100">
            Book a Class
          </button>
        </div>
      </header>

      {/* Programs Section */}
      <section className="py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">Our Programs</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Program Card */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-2xl font-bold text-green-600">Kids Tennis Classes</h3>
            <p className="mt-2 text-gray-700">
              Fun and engaging lessons designed for kids aged 5-12, focusing on coordination, skills, and confidence.
            </p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-2xl font-bold text-green-600">Adult Training Sessions</h3>
            <p className="mt-2 text-gray-700">
              Improve your skills or learn tennis as a beginner. Flexible timings for busy schedules.
            </p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-2xl font-bold text-green-600">Advanced Coaching</h3>
            <p className="mt-2 text-gray-700">
              Designed for competitive players who want to take their game to the next level.
            </p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-2xl font-bold text-green-600">Family Tennis Events</h3>
            <p className="mt-2 text-gray-700">
              Enjoy tennis as a family activity with our specially curated sessions for all ages.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
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
      <section className="py-16 px-6 text-center bg-green-400 text-white">
        <h2 className="text-3xl font-bold">Everyone is Welcome at Our Tennis Club!</h2>
        <p className="mt-4">
          Whether you're a beginner or a pro, we have something for everyone. Join us to learn, play, and grow.
        </p>
        <button className="mt-6 bg-white text-green-600 font-semibold py-2 px-4 rounded shadow-lg hover:bg-green-100">
          Get Started
        </button>
      </section>
    </div>
    
    <Footer />
    </>
  );
};

export default ProgramsPage;
