import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import SEO from "./SEO";
import { getSEOData } from "../utils/seoData";
import KidPic from "../images/Kid.jpg";
import AdultsPic from "../images/semi.jpg";
import TravelPic from "../images/another lady.png";
import CardioPic from "../images/cardio.jpg";
import CompanyPic from "../images/people.jpg";
import { FaClock, FaTag, FaChevronRight } from "react-icons/fa";

function Services() {
  const navigate = useNavigate();
  const seoData = getSEOData('services');

  const features = [
    {
      title: "Modern Equipment",
      desc: "Top-quality professional tennis gear, ball machines, and training helpers for every single session.",
      svg: (
        <svg className="w-6 h-6 text-volt-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10" strokeDasharray="3 3" />
          <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10M12 2a15.3 15.3 0 00-4 10 15.3 15.3 0 004 10M2 12h20" />
        </svg>
      )
    },
    {
      title: "Competitive Matches",
      desc: "Regular high-energy academy ladder tournaments, single matches, and group mini-cups to test your limits.",
      svg: (
        <svg className="w-6 h-6 text-volt-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V6a2 2 0 10-2 2h2zm0 0h4m-4 0H8m12 3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Personalized Coaching",
      desc: "Carefully calibrated workout regimens and tactical blueprints structured exclusively around your metrics.",
      svg: (
        <svg className="w-6 h-6 text-volt-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: "All Levels Welcome",
      desc: "Tailored programs designed to welcome beginners and push competitive players to international PTR levels.",
      svg: (
        <svg className="w-6 h-6 text-volt-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      )
    }
  ];

  return (
    <div className="bg-white min-h-screen pt-[73px]">
      <SEO 
        title={seoData.title}
        description={seoData.description}
        keywords={seoData.keywords}
        url={seoData.url}
        schemaData={seoData.schema}
      />
      <Navbar />

      {/* Geometric Header Section */}
      <div className="relative bg-darkslate-900 text-white py-24 px-6 overflow-hidden text-center">
        <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] opacity-20"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-volt-400/5 rounded-full filter blur-[100px] pointer-events-none"></div>

        <div className="relative z-10 max-w-3xl mx-auto">
          <span className="text-volt-400 font-heading font-extrabold text-xs uppercase tracking-widest mb-3 inline-block">
            Elite Court Performance
          </span>
          <h1 className="text-5xl font-heading font-extrabold tracking-tight text-white mb-4">
            OUR SERVICES
          </h1>
          <p className="text-gray-400 text-lg md:text-xl font-sans max-w-xl mx-auto">
            High-quality professional tennis coaching tailored to unlock the athlete in everyone.
          </p>
        </div>
      </div>

      {/* Luxury Service Cards */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Private Lessons",
              img: TravelPic,
              desc: "Elite one-on-one professional coaching to rapidly upgrade your technical strokes, court speed, and game strategy.",
              pricing: "GHS 500 / Session",
              duration: "Flexible Scheduling",
              tag: "Best for Rapid Growth"
            },
            {
              title: "Group Lessons",
              img: AdultsPic,
              desc: "Join our dynamic, high-energy group coaching cohorts for an interactive, technical, and social tennis routine.",
              pricing: "GHS 700 / Month",
              duration: "1x - 3x Weekly",
              tag: "Popular Choice"
            },
            {
              title: "Kids Training",
              img: KidPic,
              desc: "Fun, safe, and highly structured developmental programs tailored to build coordination, speed, and fundamental strokes.",
              pricing: "GHS 1000 / Month",
              duration: "2x Weekly",
              tag: "Ages 5 - 16"
            },
            {
              title: "Cardio & Warm-up Drills",
              img: CardioPic,
              desc: "Get your heart rate pumping with high-intensity court tennis intervals combined with agility footwork training.",
              pricing: "GHS 200 / Session",
              duration: "60 Mins",
              tag: "Cardio Focus"
            },
            {
              title: "Corporate Tennis & Tournaments",
              img: CompanyPic,
              desc: "Engineered packages for organizations. We guide your team through raw basics, strategy, and conclude with a fun mini tournament.",
              pricing: "Custom Pricing",
              duration: "Single / Multi Day",
              tag: "Team Building"
            }
          ].map((srv, idx) => (
            <div key={idx} className="group bg-white rounded-3xl border border-slate-100 hover:border-volt-300 shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2 flex flex-col justify-between">
              <div>
                <div className="h-60 overflow-hidden relative">
                  <img
                    src={srv.img}
                    alt={srv.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-4 left-4 bg-darkslate-950/90 backdrop-blur-md text-volt-400 font-heading font-extrabold text-[10px] uppercase tracking-widest px-3 py-1.5 rounded-full border border-slate-800">
                    {srv.tag}
                  </span>
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-heading font-extrabold text-darkslate-900 group-hover:text-emerald-700 transition-colors duration-300 mb-4">
                    {srv.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed font-sans mb-6">
                    {srv.desc}
                  </p>

                  <div className="space-y-3 pt-4 border-t border-slate-100 text-sm">
                    <div className="flex items-center text-gray-700">
                      <FaTag className="text-emerald-600 mr-2.5 w-4 h-4" />
                      <span className="font-semibold text-darkslate-900">{srv.pricing}</span>
                    </div>
                    <div className="flex items-center text-gray-500">
                      <FaClock className="text-slate-400 mr-2.5 w-4 h-4" />
                      <span>{srv.duration}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="px-8 pb-8 pt-2">
                <button
                  onClick={() => navigate("/booking")}
                  className="w-full bg-volt-400 hover:bg-volt-300 text-darkslate-950 font-heading font-bold text-xs uppercase tracking-widest py-3.5 rounded-full transition-all duration-300 glow-volt-hover flex items-center justify-center space-x-1.5"
                >
                  <span>Book Now</span>
                  <FaChevronRight className="w-2.5 h-2.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Class Schedule Section */}
      <section className="bg-slate-50 py-24 px-6 md:px-12 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-volt-600 font-heading font-bold text-xs uppercase tracking-widest mb-3 inline-block">
              Class Schedule & Locations
            </span>
            <h2 className="text-4xl font-heading font-extrabold text-darkslate-900 mb-4">
              DUKETENNIS Training Groups
            </h2>
            <p className="text-gray-600 font-sans text-lg max-w-2xl mx-auto">
              Flexible schedules designed for all skill levels. Train at Rolider Sports Complex or join our morning sessions at Campus Hub.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Working Days Group */}
            <div className="bg-white rounded-3xl border border-slate-100 shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden">
              <div className="bg-gradient-to-r from-volt-400 to-emerald-500 p-6 text-white">
                <h3 className="text-2xl font-heading font-extrabold">
                  Working Days Group
                </h3>
              </div>
              <div className="p-8 space-y-6">
                <div className="border-l-4 border-volt-400 pl-6">
                  <p className="font-heading font-bold text-darkslate-900 mb-2">
                    Mondays & Wednesdays (Beginners Only)
                  </p>
                  <p className="text-gray-600">5:30pm - 7:00pm</p>
                </div>
                <div className="border-l-4 border-emerald-500 pl-6">
                  <p className="font-heading font-bold text-darkslate-900 mb-2">
                    Tuesdays & Thursdays (Intermediate & Advance)
                  </p>
                  <p className="text-gray-600">5:30pm - 10:00pm</p>
                </div>
                <div className="border-l-4 border-volt-400 pl-6">
                  <p className="font-heading font-bold text-darkslate-900 mb-2">
                    Fridays (All Levels)
                  </p>
                  <p className="text-gray-600">5:30pm - 10:00pm</p>
                </div>
                <div className="bg-slate-50 rounded-2xl p-4 mt-6">
                  <p className="text-sm font-heading font-bold text-darkslate-900">
                    Location: Rolider Sports Complex
                  </p>
                  <p className="text-xs text-gray-600 mt-1">
                    Premium tennis facility with professional courts
                  </p>
                </div>
              </div>
            </div>

            {/* Weekend & Morning Sessions */}
            <div className="space-y-8">
              {/* Weekend Group */}
              <div className="bg-white rounded-3xl border border-slate-100 shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden">
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-6 text-white">
                  <h3 className="text-2xl font-heading font-extrabold">Weekend Group</h3>
                </div>
                <div className="p-8 space-y-5">
                  <div>
                    <p className="font-heading font-bold text-darkslate-900 mb-2">
                      Adult Sessions
                    </p>
                    <p className="text-sm text-gray-600 ml-2">
                      <span className="font-semibold">Saturdays & Sundays:</span> 5:30pm - 7:00pm
                    </p>
                  </div>
                  <div className="border-t border-slate-100 pt-5">
                    <p className="font-heading font-bold text-darkslate-900 mb-2">
                      Kids Sessions
                    </p>
                    <p className="text-sm text-gray-600 ml-2">
                      <span className="font-semibold">Saturdays & Sundays:</span> 5:00pm - 6:00pm
                    </p>
                  </div>
                  <div className="bg-slate-50 rounded-2xl p-4 mt-6">
                    <p className="text-sm text-gray-600">
                      <span className="font-heading font-bold text-darkslate-900">Rolider Sports Complex</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Morning Sessions */}
              <div className="bg-white rounded-3xl border border-slate-100 shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden">
                <div className="bg-gradient-to-r from-sky-400 to-blue-600 p-6 text-white">
                  <h3 className="text-2xl font-heading font-extrabold">Morning Sessions</h3>
                </div>
                <div className="p-8 space-y-4">
                  <div>
                    <p className="font-heading font-bold text-darkslate-900 mb-2">
                      All Levels Welcome
                    </p>
                    <p className="text-sm text-gray-600 ml-2">
                      <span className="font-semibold">Tuesdays, Thursdays & Fridays</span>
                    </p>
                    <p className="text-sm text-gray-600 ml-2 font-semibold">
                      7:00am - 8:30am
                    </p>
                  </div>
                  <div className="bg-slate-50 rounded-2xl p-4 mt-6">
                    <p className="text-sm font-heading font-bold text-darkslate-900">
                      Campus Hub Restaurant
                    </p>
                    <p className="text-xs text-gray-600 mt-1">
                      University of Ghana, Legon
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Pricing & Add-ons */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Monthly Pricing */}
            <div className="bg-white rounded-3xl border border-slate-100 shadow-md p-8">
              <h3 className="text-xl font-heading font-extrabold text-darkslate-900 mb-6">
                Monthly Rates
              </h3>
              <div className="space-y-4 text-sm">
                <div className="flex justify-between items-center pb-3 border-b border-slate-100">
                  <span className="text-gray-600">3x a Week</span>
                  <span className="font-heading font-bold text-darkslate-900">GHS 1,500</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-slate-100">
                  <span className="text-gray-600">2x a Week</span>
                  <span className="font-heading font-bold text-darkslate-900">GHS 1,200</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-slate-100">
                  <span className="text-gray-600">Once a Week</span>
                  <span className="font-heading font-bold text-darkslate-900">GHS 700</span>
                </div>
              </div>
            </div>

            {/* Additional Services */}
            <div className="bg-white rounded-3xl border border-slate-100 shadow-md p-8">
              <h3 className="text-xl font-heading font-extrabold text-darkslate-900 mb-6">
                Additional Services
              </h3>
              <div className="space-y-4 text-sm">
                <div className="flex justify-between items-center pb-3 border-b border-slate-100">
                  <span className="text-gray-600">Walk-In Group Session</span>
                  <span className="font-heading font-bold text-darkslate-900">GHS 200</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-slate-100">
                  <span className="text-gray-600">One-on-One Lesson</span>
                  <span className="font-heading font-bold text-darkslate-900">GHS 500</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-slate-100">
                  <span className="text-gray-600">Racket Rental / Session</span>
                  <span className="font-heading font-bold text-darkslate-900">GHS 50</span>
                </div>
                <div className="flex justify-between items-center pt-3">
                  <span className="text-gray-600">Event/Organization Bookings</span>
                  <span className="font-heading font-bold text-darkslate-900">From GHS 7,000</span>
                </div>
              </div>
              <p className="text-xs text-gray-500 italic mt-4 pt-4 border-t border-slate-100">
                * Prices vary based on event size and requirements
              </p>
            </div>
          </div>

          {/* CTA Button */}
          <div className="mt-12 text-center">
            <button
              onClick={() => navigate("/booking")}
              className="bg-darkslate-900 hover:bg-darkslate-800 text-white font-heading font-bold text-sm uppercase tracking-widest py-4 px-10 rounded-full shadow-lg transition-all duration-300 hover:scale-105"
            >
              Book Your Class Today
            </button>
          </div>
        </div>
      </section>
            
      {/* Feature Icons Section ("Why Train with Us?") */}
      <section className="bg-slate-50 py-24 px-6 md:px-12 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <span className="text-volt-600 font-heading font-bold text-xs uppercase tracking-widest mb-3 inline-block text-center w-full">
            The Duke Advantage
          </span>
          <h2 className="text-4xl font-heading font-extrabold text-center text-darkslate-900 mb-16">
            Why Train with Us?
          </h2>

          <div className="grid md:grid-cols-4 gap-8">
            {features.map((feat, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm transition-all duration-300 hover:border-volt-300 hover:shadow-lg text-left flex flex-col justify-between">
                <div>
                  <div className="w-14 h-14 bg-darkslate-900 rounded-2xl flex items-center justify-center mb-6 shadow-md shadow-darkslate-900/10">
                    {feat.svg}
                  </div>
                  <h4 className="text-lg font-heading font-extrabold text-darkslate-900 mb-3">
                    {feat.title}
                  </h4>
                  <p className="text-gray-500 text-sm leading-relaxed font-sans">
                    {feat.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* High-Conversion CTA Section */}
      <section className="py-24 px-6 text-center bg-white relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-volt-400/5 rounded-full filter blur-[100px] pointer-events-none"></div>

        <div className="relative z-10 max-w-2xl mx-auto">
          <h2 className="text-4xl font-heading font-extrabold text-darkslate-900 leading-tight">
            Everyone is Welcome at Our Tennis School
          </h2>
          <p className="mt-4 text-gray-500 font-sans leading-relaxed">
            From first-time beginners to seasoned tournament players, our coaching environment is geared for progression, health, and sport excellence. Let's make an impact on your game.
          </p>
          <button
            onClick={() => navigate("/booking")}
            className="mt-8 bg-darkslate-900 hover:bg-darkslate-800 text-white font-heading font-bold text-xs uppercase tracking-widest py-4 px-8 rounded-full shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-volt-500/20"
          >
            Get Started Today
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Services;
