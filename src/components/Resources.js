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

const products = [
  {
    name: "New Tennis Racket",
    price: "GHS 2000–4000",
    description: "Premium racket for optimal performance.",
    image: racketImage,
    message: "Hi, I'm interested in buying a new tennis racket.",
  },
  {
    name: "Used Tennis Racket",
    price: "GHS 800–2000",
    description: "Quality used racket for budget-conscious players.",
    image: oldracketImage,
    message: "Hi, I'm interested in a used tennis racket.",
  },
  {
    name: "Kids Tennis Racket",
    price: "GHS 400–1000",
    description: "Lightweight rackets perfect for juniors.",
    image: racketImage,
    message: "Hi, I'm interested in a kids tennis racket.",
  },
  {
    name: "Grips",
    price: "GHS 40",
    description: "Improve your hold with quality grips.",
    image: gripImage,
    message: "Hi, I'm interested in tennis grips.",
  },
  {
    name: "Socks",
    price: "GHS 30–100",
    description: "Breathable tennis socks for comfort.",
    image: socksImage,
    message: "Hi, I'm interested in tennis socks.",
  },
  {
    name: "Balls",
    price: "GHS 100",
    description: "Durable balls suitable for matches and training.",
    image: ballImage,
    message: "Hi, I'm interested in tennis balls.",
  },
  {
    name: "Caps",
    price: "GHS 90",
    description: "Sun-protective caps for on-court play.",
    image: capImage,
    message: "Hi, I'm interested in tennis caps.",
  },
  {
    name: "Duke Tennis T-shirt",
    price: "GHS 80",
    description: "Stylish t-shirt for casual and match wear.",
    image: TshirtImage,
    message: "Hi, I'm interested in a Duke Tennis t-shirt.",
  },
  {
    name: "Duke Lacoste Shirt",
    price: "GHS 100",
    description: "Premium Lacoste shirt for players.",
    image: shirtImage,
    message: "Hi, I'm interested in the Duke Lacoste shirt.",
  },
];

function Resources() {
  const [activeTab, setActiveTab] = useState("Private Lessons");

  const tabContent = {
    "Private Lessons":
      "Our private lessons offer personalized, one-on-one coaching tailored to your skill level.",
    "Group Lessons":
      "Join our group classes for a dynamic and social tennis experience.",
    "Kids Training":
      "Fun, engaging sessions to teach young players the fundamentals of tennis.",
    "Cardio Tennis":
      "High-energy tennis workouts that improve both fitness and technique.",
    "Hitting Partner":
      "Sharpen your skills through consistent rallies with a trained partner.",
  };

  return (
    <>
      <Navbar />
      <div className="bg-gray-50 text-gray-800">
        {/* Coaching Tabs Section */}
        <div className="flex flex-col md:flex-row items-center md:justify-between px-6 md:px-20 py-24">
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h2 className="text-2xl font-bold text-green-600">EXPLORE OUR</h2>
            <h3 className="text-4xl font-bold text-gray-900">TENNIS RESOURCES</h3>

            <div className="flex flex-wrap space-x-4 mt-6 border-b-2 border-gray-300">
              {Object.keys(tabContent).map((tab) => (
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

            <p className="mt-6 text-gray-600">{tabContent[activeTab]}</p>
          </div>

          <div className="w-full md:w-1/2 mt-10 md:mt-0 md:pl-10">
            <img
              src={tennisImage}
              alt="Tennis Activity"
              className="w-full h-auto object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Tennis Equipment Section */}
        <div className="py-12 px-6 md:px-20 bg-green-50">
          <h2 className="text-3xl font-bold text-center text-green-600">
            Tennis Equipment & Apparel
          </h2>
          <p className="text-center text-gray-600 mt-2">
            High-quality gear and clothing to boost your game.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-10">
            {products.map((item, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full object-cover h-full"
                />
                <div className="p-4 flex-grow">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">
                    {item.name}
                  </h3>
                  <p className="text-sm text-gray-600">{item.description}</p>
                  <p className="text-green-600 font-semibold mt-2">{item.price}</p>
                </div>
                <div className="p-4 pt-0">
                  <a
                    href={`https://wa.me/+233558315717?text=${encodeURIComponent(item.message)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-center bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded-md transition"
                  >
                    Buy Now
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Resources;
