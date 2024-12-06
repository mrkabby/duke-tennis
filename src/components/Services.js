import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import KidPic from '../images/fei-chao-y-ahbHZbs7Y-unsplash.jpg';
import AdultsPic from '../images/fei-chao-zWhd4tIe_z4-unsplash.jpg'
import TravelPic from '../images/richard-sagredo-oDlLU_1hZwM-unsplash.jpg'

function Services() {
  return (
    <>
    <Navbar />
    <div className="text-gray-700">
      {/* Header Section */}
      <div className="text-center py-10">
        <h1 className="text-4xl font-bold text-green-600">SERVICES</h1>
        <p className="mt-2 text-xl font-semibold text-blue-900">
          Tennis Coaching offers high level services
        </p>
      </div>

      {/* Service Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-10 md:px-20">
        {/* Service Card 1 */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img src={TravelPic} alt="Travel Coaching" className="w-full h-56 object-cover" />
          <div className="p-6">
            <h3 className="text-lg font-bold">Travel Coaching</h3>
            <p className="text-sm text-gray-500 mt-2">Professional coaching on the go, wherever you need.</p>
            <button className="text-green-500 font-semibold mt-4">Learn More</button>
          </div>
        </div>

        {/* Service Card 2 */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img src={AdultsPic} alt="Personal Training" className="w-full h-56 object-cover" />
          <div className="p-6">
            <h3 className="text-lg font-bold">Personal Training</h3>
            <p className="text-sm text-gray-500 mt-2">Tailored training sessions for individuals.</p>
            <button className="text-green-500 font-semibold mt-4">Learn More</button>
          </div>
        </div>

        {/* Service Card 3 */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img src={KidPic} alt="Children's Classes" className="w-full h-56 object-cover" />
          <div className="p-6">
            <h3 className="text-lg font-bold">Children's Classes</h3>
            <p className="text-sm text-gray-500 mt-2">Fun and engaging tennis classes for kids.</p>
            <button className="text-green-500 font-semibold mt-4">Learn More</button>
          </div>
        </div>
      </div>

      {/* Additional Services Section */}
      <div className="mt-20 bg-green-50 p-10 md:p-20">
        <h2 className="text-3xl font-bold text-green-600">Additional Services</h2>
        <p className="mt-4 text-blue-900 font-semibold">For your convenience</p>
        <ul className="mt-6 space-y-6">
          <li className="flex items-start">
            <span className="text-2xl font-bold text-green-600 mr-4">01</span>
            <div>
              <h3 className="font-bold text-lg">Fitness and Gym</h3>
              <p className="text-sm text-gray-600">Access to a fully equipped gym for fitness training.</p>
            </div>
          </li>
          <li className="flex items-start">
            <span className="text-2xl font-bold text-green-600 mr-4">02</span>
            <div>
              <h3 className="font-bold text-lg">Swimming Pool</h3>
              <p className="text-sm text-gray-600">Relax and refresh in our on-site swimming pool.</p>
            </div>
          </li>
          <li className="flex items-start">
            <span className="text-2xl font-bold text-green-600 mr-4">03</span>
            <div>
              <h3 className="font-bold text-lg">Tactic Tennis</h3>
              <p className="text-sm text-gray-600">Advanced tactical training sessions for all levels.</p>
            </div>
          </li>
        </ul>
      </div>

      {/* Subscription Section */}
      <div className="mt-20 bg-blue-700 text-white text-center py-10">
        <h3 className="text-lg font-bold">Subscribe for Members</h3>
        <p className="mt-2">Receive Latest News and Special Offers</p>
        <div className="mt-6 flex justify-center">
          <input
            type="email"
            placeholder="Your Email"
            className="p-2 w-1/3 rounded-l-lg focus:outline-none text-gray-700"
          />
          <button className="bg-green-500 px-4 rounded-r-lg">Subscribe</button>
        </div>
      </div>
    </div>
    <Footer />
    </>

  );
}

export default Services;
