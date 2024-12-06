import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import heroImage from '../images/richard-sagredo-oDlLU_1hZwM-unsplash.jpg'; // Replace with actual hero image path
import coachImage from '../images/george.jpg'; // Replace with actual coach image path
import serviceImage1 from '../images/rezli-WgqEXkbrvOg-unsplash.jpg';
import serviceImage2 from '../images/fei-chao-y-ahbHZbs7Y-unsplash.jpg';
import serviceImage3 from '../images/fei-chao-zWhd4tIe_z4-unsplash.jpg';
import videoImage1 from '../images/DukeTennis.jpg';
import eventImage1 from '../images/DukeTennis.jpg';

function HomePage() {
  return (
    <>
  <Navbar />
    <div className="text-gray-700">
      {/* Hero Section */}
      <div
        className="h-screen bg-cover bg-center flex items-center justify-center "
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <h1 className="text-5xl font-bold text-white text-center">Tennis <span className="text-green-400">Coaching</span></h1>
      </div>

      {/* Coach Bio Section */}
<div className="py-10 px-6 md:px-20 bg-gray-100 flex flex-col md:flex-row items-center">
  {/* Coach Image */}
  <div className="w-full md:w-1/3 mb-8 md:mb-0">
    <img src={coachImage} alt="Coach Yoav Saarony" className="w-full h-auto rounded-lg shadow-lg" />
  </div>
  
  {/* Coach Text Section */}
  <div className="w-full md:w-2/3 md:pl-10 text-center md:text-left">
    <h2 className="text-3xl font-bold text-gray-800">George Duke Nyarko </h2>
    <p className="mt-4 text-gray-600">
      Duke is a professional tennis coach with years of experience in both playing and coaching. Dedicated to developing tennis skills for all levels, Yoav brings a passion for the game and a deep understanding of techniques and strategies.
    </p>
  {/* Experience Section */}
<div className="mt-6 bg-green-50 p-6 rounded-lg shadow-lg">
  <h3 className="text-xl font-bold text-green-600">Experience</h3>
  <ul className="mt-4 space-y-2">
    <li className="flex items-start">
      <span className="text-green-500 mr-2">•</span>
      <p>Over 10 years of coaching experience</p>
    </li>
    <li className="flex items-start">
      <span className="text-green-500 mr-2">•</span>
      <p>Professional player for 5 years</p>
    </li>
    <li className="flex items-start">
      <span className="text-green-500 mr-2">•</span>
      <p>Certified by the National Tennis Federation</p>
    </li>
    <li className="flex items-start">
      <span className="text-green-500 mr-2">•</span>
      <p>Specialized in junior and adult  programs</p>
    </li>
  </ul>
</div>

</div>
</div>


      {/* Services Section */}
      <div className="py-10 px-6 md:px-20 text-center">
        <h2 className="text-3xl font-bold text-green-600">Tennis Coaching offers high level services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img src={serviceImage1} alt="Service 1" className="w-full h-56 object-cover" />
            <div className="p-6">
              <h3 className="text-lg font-bold">Travel Coaching</h3>
              <p className="text-sm text-gray-500 mt-2">Professional coaching on the go, wherever you need.</p>
              <button className="text-green-500 font-semibold mt-4">Learn More</button>
            </div>
          </div>

          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img src={serviceImage2} alt="Service 2" className="w-full h-56 object-cover" />
            <div className="p-6">
              <h3 className="text-lg font-bold">Personal Training</h3>
              <p className="text-sm text-gray-500 mt-2">Tailored training sessions for individuals.</p>
              <button className="text-green-500 font-semibold mt-4">Learn More</button>
            </div>
          </div>

          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img src={serviceImage3} alt="Service 3" className="w-full h-56 object-cover" />
            <div className="p-6">
              <h3 className="text-lg font-bold">Children's Classes</h3>
              <p className="text-sm text-gray-500 mt-2">Fun and engaging tennis classes for kids.</p>
              <button className="text-green-500 font-semibold mt-4">Learn More</button>
            </div>
          </div>
        </div>
      </div>

      {/* Video Tips Section */}
      <div className="py-10 px-6 md:px-20 bg-green-50 text-center">
        <h2 className="text-3xl font-bold text-green-600">Video Tennis Tips</h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-8">
          <img src={videoImage1} alt="Video Tip 1" className="w-full h-64 object-cover rounded-lg shadow-lg" />
          <img src={videoImage1} alt="Video Tip 1" className="w-full h-64 object-cover rounded-lg shadow-lg" />
          <img src={videoImage1} alt="Video Tip 1" className="w-full h-64 object-cover rounded-lg shadow-lg" />
          
          {/* Add more video images as needed */}
        </div>
      </div>

      {/* Portfolio of Events Section */}
      <div className="py-10 px-6 md:px-20 bg-green-100 text-center">
        <h2 className="text-3xl font-bold text-green-600">Portfolio of Events</h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-8">
          <img src={eventImage1} alt="Event 1" className="w-full h-64 object-cover rounded-lg shadow-lg" />
          <img src={eventImage1} alt="Event 1" className="w-full h-64 object-cover rounded-lg shadow-lg" />
          <img src={eventImage1} alt="Event 1" className="w-full h-64 object-cover rounded-lg shadow-lg" />
          <img src={eventImage1} alt="Event 1" className="w-full h-64 object-cover rounded-lg shadow-lg" />
          {/* Add more event images as needed */}
        </div>
      </div>

      {/* Subscription Section */}
      <div className="py-10 px-6 md:px-20 bg-blue-700 text-white text-center">
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

export default HomePage;
