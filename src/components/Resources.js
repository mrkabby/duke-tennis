import React, { useState } from "react";
import tennisImage from "../images/One.jpg";
import racketImage from "../images/new racket.jpg";
import oldracketImage from "../images/used racket.jpg";
import shirtImage from "../images/shirt.jpg";
import TshirtImage from "../images/roundneck.jpg";
import ballImage from "../images/balls.jpg";
import socksImage from "../images/socks.jpg";
import gripImage from "../images/grips.jpg";
import capImage from "../images/cap.jpg";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { FaWhatsapp, FaChevronRight } from "react-icons/fa";

const products = [
  {
    name: "New Tennis Racket",
    price: "GHS 2000–4000",
    description: "Premium high-modulus graphite rackets optimized for modern power and extreme control.",
    image: racketImage,
    message: "Hi George! I'm interested in buying a new tennis racket.",
    tag: "Pro Equipment"
  },
  {
    name: "Used Tennis Racket",
    price: "GHS 800–2000",
    description: "Inspected and re-strung pre-owned rackets for budget-conscious tournament players.",
    image: oldracketImage,
    message: "Hi George! I'm interested in buying a used tennis racket.",
    tag: "Budget Friendly"
  },
  {
    name: "Kids Tennis Racket",
    price: "GHS 400–1000",
    description: "Ultra lightweight composite frames engineered to fit junior stroke architectures.",
    image: racketImage,
    message: "Hi George! I'm interested in buying a kids tennis racket.",
    tag: "Junior Series"
  },
  {
    name: "Grips",
    price: "GHS 40",
    description: "Durable sweat-absorbent replacement overgrips offering high traction feel.",
    image: gripImage,
    message: "Hi George! I'm interested in buying tennis grips.",
    tag: "Essentials"
  },
  {
    name: "Socks",
    price: "GHS 30–100",
    description: "Reinforced breathable cotton socks engineered for intense lateral court slides.",
    image: socksImage,
    message: "Hi George! I'm interested in buying tennis socks.",
    tag: "Athletic Wear"
  },
  {
    name: "Balls",
    price: "GHS 100",
    description: "Heavy-duty pressurized balls optimized for hard courts and consistent bounce profiles.",
    image: ballImage,
    message: "Hi George! I'm interested in buying tennis balls.",
    tag: "Match Ball"
  },
  {
    name: "Caps",
    price: "GHS 90",
    description: "Sun-protective quick-dry athletic caps featuring classic structured fits.",
    image: capImage,
    message: "Hi George! I'm interested in buying tennis caps.",
    tag: "Apparel"
  },
  {
    name: "Duke Tennis T-shirt",
    price: "GHS 80",
    description: "Lightweight performance roundnecks designed with premium sweat-wicking materials.",
    image: TshirtImage,
    message: "Hi George! I'm interested in a Duke Tennis t-shirt.",
    tag: "Official Merch"
  },
  {
    name: "Duke Lacoste Shirt",
    price: "GHS 100",
    description: "Premium collared Lacoste shirts suited for high-class match days and casual club wear.",
    image: shirtImage,
    message: "Hi George! I'm interested in the Duke Lacoste shirt.",
    tag: "Premium Club"
  },
];

function Resources() {
  const [activeTab, setActiveTab] = useState("Private Lessons");

  const tabContent = {
    "Private Lessons":
      "Accelerate your athletic progression with tailored, one-on-one professional coaching designed specifically around your physical stats, stroke technique, and match tactics.",
    "Group Lessons":
      "Join our high-energy monthly cohorts for structured tactical drills, interactive matches, and a fun way to improve court stamina alongside other tennis enthusiasts.",
    "Kids Training":
      "Establish absolute sportsmanship and strong fundamental hand-eye motor mechanics with safe, engaging, and age-calibrated junior training sessions.",
    "Cardio Tennis":
      "Combine metabolic interval conditioning with intense lateral baseline drills to burn calories while honing consistent, powerful strokes.",
    "Hitting Partner":
      "Sharpen your competitive baseline rallying, serve returns, and real-time positioning by hitting with a highly trained professional player.",
  };

  return (
    <div className="bg-slate-50 min-h-screen pt-[73px]">
      <Navbar />

      {/* Tabs & Intro Section */}
      <section className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 px-6 md:px-12 py-20 lg:py-24 bg-white rounded-3xl border border-slate-100/80 shadow-sm mt-8">
        <div className="w-full lg:w-1/2 text-left">
          <span className="text-volt-600 font-heading font-extrabold text-xs uppercase tracking-widest mb-3 inline-block">
            Coaching Resources
          </span>
          <h2 className="text-4xl font-heading font-extrabold text-darkslate-900 leading-none mb-8">
            Explore Tennis Hub
          </h2>

          {/* Tab slider control pill panel */}
          <div className="flex flex-wrap gap-2 p-1.5 bg-slate-100 rounded-2xl border border-slate-200/50 mb-8 max-w-lg">
            {Object.keys(tabContent).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2.5 rounded-xl font-heading font-bold text-xs uppercase tracking-wider transition-all duration-300 ${
                  activeTab === tab
                    ? "bg-darkslate-900 text-white shadow-md"
                    : "text-gray-500 hover:text-slate-800 hover:bg-slate-50"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Active Tab Panel details */}
          <div className="bg-slate-50 border border-slate-100 rounded-2xl p-6 md:p-8 min-h-[160px] flex flex-col justify-between">
            <div>
              <h4 className="font-heading font-extrabold text-xl text-emerald-700 mb-3">{activeTab}</h4>
              <p className="text-gray-600 text-sm leading-relaxed font-sans">{tabContent[activeTab]}</p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-200/50">
              <button 
                onClick={() => (window.location.href = '/booking')}
                className="flex items-center text-xs font-heading font-extrabold text-emerald-600 hover:text-volt-600 tracking-wider uppercase transition-colors"
              >
                Book this program <FaChevronRight className="ml-1 w-2.5 h-2.5" />
              </button>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/2 relative group">
          <div className="absolute -inset-1.5 bg-gradient-to-r from-volt-400 to-emerald-500 rounded-2xl blur opacity-20 group-hover:opacity-35 transition duration-1000"></div>
          <div className="relative bg-white rounded-2xl p-2.5 shadow-xl">
            <img
              src={tennisImage}
              alt="Tennis Activity"
              className="w-full h-[360px] object-cover rounded-xl shadow-inner"
            />
          </div>
        </div>
      </section>

      {/* Nike/Wilson Style E-Commerce Equipment Section */}
      <section className="max-w-7xl mx-auto py-24 px-6 md:px-12">
        <div className="text-center mb-16">
          <span className="text-volt-600 font-heading font-bold text-xs uppercase tracking-widest mb-3 inline-block">
            Professional Catalog
          </span>
          <h2 className="text-4xl font-heading font-extrabold text-darkslate-900">
            Tennis Equipment & Apparel
          </h2>
          <p className="text-gray-500 font-sans max-w-md mx-auto mt-3">
            Elite court apparel, heavy-duty balls, and certified tennis rackets hand-selected to elevate your baseline performance.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {products.map((item, index) => (
            <div
              key={index}
              className="group bg-white rounded-3xl border border-slate-100 hover:border-volt-300 shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col justify-between transform hover:-translate-y-1.5"
            >
              <div className="h-64 overflow-hidden relative bg-slate-50">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-4 left-4 bg-darkslate-950 text-volt-400 font-heading font-extrabold text-[10px] uppercase tracking-widest px-3 py-1.5 rounded-full border border-slate-800">
                  {item.tag}
                </span>
              </div>

              <div className="p-6 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-heading font-extrabold text-darkslate-900 mb-2 group-hover:text-emerald-700 transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-xs text-gray-500 leading-relaxed font-sans">{item.description}</p>
                </div>
                
                <div className="mt-4 pt-4 border-t border-slate-100">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-heading font-extrabold uppercase tracking-widest text-gray-400">Price Range</span>
                    <span className="text-emerald-600 font-heading font-extrabold text-sm bg-emerald-50 px-2.5 py-1 rounded-md">{item.price}</span>
                  </div>
                </div>
              </div>

              <div className="px-6 pb-6">
                <a
                  href={`https://wa.me/+233558315717?text=${encodeURIComponent(item.message)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#25D366] hover:bg-[#20ba5a] text-white font-heading font-bold text-xs uppercase tracking-widest py-3.5 rounded-xl transition-all duration-300 flex items-center justify-center space-x-2 shadow-md hover:shadow-lg"
                >
                  <FaWhatsapp className="w-4.5 h-4.5" />
                  <span>Buy Now</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Resources;
