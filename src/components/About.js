import React from "react";
import { useNavigate } from "react-router-dom";
import tennisPlayer from "../images/DukeTennis.jpg";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { FaMapMarkerAlt, FaChevronRight } from "react-icons/fa";

function About() {
  const navigate = useNavigate();

  return (
    <div className="bg-white min-h-screen pt-[73px]">
      <Navbar />

      {/* Introduction Section */}
      <div className="flex flex-col lg:flex-row items-center gap-16 px-6 md:px-12 py-20 lg:py-28 bg-slate-50 relative overflow-hidden">
        {/* Decorative subtle gradient background */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-volt-400/5 rounded-full filter blur-3xl pointer-events-none"></div>

        {/* Image Section */}
        <div className="w-full lg:w-1/2 relative group">
          <div className="absolute -inset-1.5 bg-gradient-to-r from-volt-400 to-emerald-500 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
          <div className="relative bg-white rounded-2xl p-2.5 shadow-xl">
            <img
              src={tennisPlayer}
              alt="Duke Tennis Court Training"
              className="w-full h-[450px] object-cover rounded-xl shadow-inner"
            />
          </div>
        </div>

        {/* Text Section */}
        <div className="w-full lg:w-1/2 text-left relative z-10">
          <span className="text-emerald-600 font-heading font-bold text-xs uppercase tracking-widest mb-3 inline-block">
            Who We Are
          </span>
          <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-darkslate-900 leading-tight">
            About DUKETENNIS
          </h2>
          <p className="mt-6 text-gray-600 leading-relaxed font-sans text-base">
            DUKETENNIS is a premier tennis club and training program in Ghana, dedicated to offering elite-level coaching and high-performance development. Our mission is to promote tennis as a high-visibility sport for all age brackets and skill ranges, supplying a welcoming, rigorous, and inspiring environment for players and families alike.
          </p>
          <p className="mt-4 text-gray-600 leading-relaxed font-sans text-base">
            Whether you are a complete beginner picking up a racket for the first time or a competitive tournament player aiming to master tactical strategies, DUKETENNIS offers the expertise to take you there. Join our vibrant, high-energy community to unlock your full athletic potential.
          </p>
          <div className="mt-10 flex gap-4">
            <button
              className="px-8 py-3.5 bg-volt-400 hover:bg-volt-300 text-darkslate-950 font-heading font-bold text-xs uppercase tracking-widest rounded-full transition-all duration-300 shadow-md glow-volt-hover hover:scale-105"
              onClick={() => navigate("/booking")}
            >
              Book Lesson
            </button>
            <button
              className="px-8 py-3.5 bg-white text-darkslate-900 border border-slate-200 font-heading font-bold text-xs uppercase tracking-widest rounded-full hover:bg-slate-50 transition-all duration-300"
              onClick={() => navigate("/gallery")}
            >
              View Gallery
            </button>
          </div>
        </div>
      </div>

      {/* High-Impact Statistics Grid Section */}
      <div className="bg-darkslate-900 py-20 px-6 md:px-12 text-white relative overflow-hidden">
        {/* Neon green glowing background elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-7xl h-48 bg-volt-400/5 rounded-full filter blur-[120px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center relative z-10">
          {[
            { value: "12", label: "Tennis Courts" },
            { value: "45", label: "Tournaments / Yr" },
            { value: "999+", label: "Club Members" },
            { value: "3000+", label: "Visitors Yearly" }
          ].map((stat, idx) => (
            <div key={idx} className="group bg-darkslate-950/50 border border-slate-800/80 p-8 rounded-2xl transition-all duration-300 hover:border-volt-400/30 hover:scale-105">
              <h3 className="text-4xl md:text-5xl font-heading font-extrabold text-volt-400 tracking-tight group-hover:scale-110 transition-transform duration-300 drop-shadow-[0_0_12px_rgba(197,242,0,0.2)]">
                {stat.value}
              </h3>
              <p className="mt-3 text-sm md:text-base font-heading font-semibold text-gray-400 uppercase tracking-widest">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Regions Section */}
      <div className="py-24 px-6 md:px-12 bg-white text-center">
        <div className="max-w-7xl mx-auto">
          <span className="text-emerald-600 font-heading font-bold text-xs uppercase tracking-widest mb-3 inline-block">
            Nationwide Coverage
          </span>
          <h2 className="text-4xl font-heading font-extrabold text-darkslate-900 mb-4">
            Available in 6 Regions of Ghana
          </h2>
          <p className="text-gray-500 font-sans max-w-xl mx-auto mb-16">
            We deliver elite coaching programs at top-tier facilities in leading metropolitan hubs across the nation.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
                className="group relative bg-slate-50 border border-slate-100 hover:border-volt-300 rounded-2xl p-8 text-left transition-all duration-300 transform hover:-translate-y-1.5 hover:shadow-xl flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 bg-volt-100 rounded-xl flex items-center justify-center text-darkslate-950 mb-6 group-hover:bg-volt-400 transition-colors duration-300">
                    <FaMapMarkerAlt className="w-5 h-5 text-emerald-700 group-hover:text-darkslate-950 transition-colors duration-300" />
                  </div>
                  <h3 className="text-2xl font-heading font-extrabold text-darkslate-900 group-hover:text-emerald-700 transition-colors duration-300">
                    {region}
                  </h3>
                  <p className="mt-3 text-sm text-gray-500 leading-relaxed font-sans">
                    Join our premier tennis coaching and tournament programs in {region} and experience world-class athletic guidance.
                  </p>
                </div>
                <button
                  onClick={() => navigate("/booking")}
                  className="flex items-center text-xs font-heading font-extrabold uppercase tracking-widest text-emerald-600 hover:text-volt-600 mt-6 group-hover:translate-x-1.5 transition-all"
                >
                  Join Here <FaChevronRight className="ml-1.5 w-2.5 h-2.5" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default About;
