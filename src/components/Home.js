import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import heroImage from '../images/girls.jpg'; 
import coachImage from '../images/duke.jpg'; 
import serviceImage1 from '../images/semi.jpg';
import serviceImage2 from '../images/pink.jpg';
import serviceImage3 from '../images/people.jpg';
import { FaChevronRight } from 'react-icons/fa';

function HomePage() {
  const navigate = useNavigate();

  const RacketCheckIcon = () => (
    <svg className="w-5 h-5 text-volt-400 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );

  return (
    <div className="bg-white min-h-screen pt-[73px]">
      <Navbar />

      {/* Hero Section */}
      <div className="relative h-[calc(100vh-73px)] w-full overflow-hidden">
        {/* Full-bleed background image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        {/* Dark linear gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-darkslate-950 via-darkslate-950/80 to-darkslate-950/30" />
        
        {/* Hero Content */}
        <div className="absolute inset-0 max-w-7xl mx-auto px-6 md:px-12 flex flex-col justify-center items-start text-left z-10">
          <span className="text-volt-400 font-heading font-extrabold text-sm uppercase tracking-widest mb-4 inline-block border-b-2 border-volt-400 pb-1">
            Elite Tennis Coaching in Ghana
          </span>
          <h1 className="text-5xl md:text-7xl font-heading font-extrabold text-white leading-none max-w-3xl">
            Elevate <span className="text-transparent bg-clip-text bg-gradient-to-r from-volt-300 to-emerald-400">Your Game</span> <br />
            With Professional Coaching
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-xl leading-relaxed font-sans">
            Train with George Duke Nyarkoh, a highly experienced PTR-certified coach dedicated to developing skills for players of all levels.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => navigate("/booking")}
              className="bg-volt-400 hover:bg-volt-300 text-darkslate-950 px-8 py-4 rounded-full font-heading font-bold text-sm uppercase tracking-widest transition-all duration-300 hover:scale-105 shadow-lg glow-volt-hover"
            >
              Book a Session
            </button>
            <button
              onClick={() => navigate("/about")}
              className="bg-transparent hover:bg-white/10 text-white border border-white/30 hover:border-white px-8 py-4 rounded-full font-heading font-bold text-sm uppercase tracking-widest transition-all duration-300"
            >
              Explore Academy
            </button>
          </div>
        </div>

        {/* Diagonal aesthetic design accent */}
        <div className="absolute bottom-0 right-0 w-1/3 h-16 bg-volt-400 transform skew-x-[-30deg] origin-bottom-right hidden lg:block opacity-75"></div>
      </div>

      {/* Coach Bio Section */}
      <section className="py-24 px-6 md:px-12 bg-slate-50 text-slate-800 relative overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          {/* Overlapping grid / Asymmetrical image wrapper */}
          <div className="w-full lg:w-5/12 relative group">
            <div className="absolute -inset-2 bg-gradient-to-r from-volt-400 to-emerald-500 rounded-2xl blur-lg opacity-20 group-hover:opacity-35 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative bg-white rounded-2xl p-3 shadow-xl">
              <img
                src={coachImage}
                alt="Coach George Duke Nyarkoh"
                className="w-full h-auto rounded-xl object-cover aspect-[4/5] filter grayscale hover:grayscale-0 transition-all duration-500"
              />
              <span className="absolute top-6 right-6 bg-darkslate-950 text-volt-400 font-heading font-extrabold text-xs uppercase tracking-widest px-4 py-2 rounded-full shadow-lg border border-slate-800">
                ★ PTR Certified
              </span>
            </div>
          </div>

          {/* Coach Bio Text Section */}
          <div className="w-full lg:w-7/12">
            <span className="text-emerald-600 font-heading font-bold text-xs uppercase tracking-widest mb-3 inline-block">
              Meet Your Head Coach
            </span>
            <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-darkslate-900 leading-tight">
              George Duke Nyarkoh
            </h2>
            <p className="mt-6 text-gray-600 leading-relaxed font-sans text-base">
              Duke is a premium professional tennis coach in Ghana with over 10 years of coaching and 20 years of competitive playing experience. He brings massive passion, deep tactical strategy, and professional PTR certification to every court. Under his guidance, you will build technical foundations and develop dynamic footwork and execution.
            </p>

            {/* Experience Checklist */}
            <div className="mt-8 bg-white p-8 rounded-2xl border border-slate-100 shadow-lg glow-volt">
              <h3 className="text-xl font-heading font-bold text-darkslate-900 mb-6 flex items-center">
                <span className="w-8 h-8 rounded-full bg-volt-100 flex items-center justify-center text-darkslate-950 font-bold mr-3 text-sm">✓</span>
                Coaching Credentials
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Over 10 years coaching expertise",
                  "20+ years of active play",
                  "Certified PTR Coach",
                  "Junior & Adult developments",
                  "Physical stamina & footwork",
                  "Mental match preparation"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start text-sm text-gray-700">
                    <RacketCheckIcon />
                    <p className="font-semibold">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 px-6 md:px-12 text-center bg-white">
        <div className="max-w-7xl mx-auto">
          <span className="text-volt-600 font-heading font-bold text-xs uppercase tracking-widest mb-3 inline-block">
            High-Performance Programs
          </span>
          <h2 className="text-4xl font-heading font-extrabold text-darkslate-900 mb-12">
            High-Quality Tennis Services
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Group Lessons",
                img: serviceImage1,
                desc: "Join our dynamic group classes for an interactive, structured, and fun way to build your tennis skills with peers."
              },
              {
                title: "Personal Training",
                img: serviceImage2,
                desc: "Get elite, customized training sessions engineered to accelerate your personal skill level, fitness, and tactical vision."
              },
              {
                title: "Children's Classes",
                img: serviceImage3,
                desc: "Instill sportsmanship, fitness, and correct visual coordination with safe, fun, and highly engaging junior programs."
              }
            ].map((srv, idx) => (
              <div key={idx} className="group bg-white rounded-2xl border border-slate-100 hover:border-volt-300 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden transform hover:-translate-y-1.5 flex flex-col">
                <div className="h-60 overflow-hidden relative">
                  <img
                    src={srv.img}
                    alt={srv.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-darkslate-950/40 to-transparent"></div>
                </div>
                <div className="p-8 flex-grow flex flex-col justify-between text-left">
                  <div>
                    <h3 className="text-xl font-heading font-bold text-darkslate-900 mb-3">{srv.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed font-sans">{srv.desc}</p>
                  </div>
                  <button
                    onClick={() => navigate('/services')}
                    className="flex items-center text-emerald-600 group-hover:text-volt-600 font-heading font-bold text-sm mt-6 transition-colors duration-300"
                  >
                    Learn More <FaChevronRight className="ml-1 w-3 h-3 transform group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Tips Section */}
      <section className="py-24 px-6 md:px-12 bg-darkslate-900 text-white text-center relative overflow-hidden">
        {/* Subtle geometric shape decoration */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-volt-400/5 rounded-full filter blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-500/5 rounded-full filter blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <span className="text-volt-400 font-heading font-bold text-xs uppercase tracking-widest mb-3 inline-block">
            Pro Video Insights
          </span>
          <h2 className="text-4xl font-heading font-extrabold text-white mb-4">
            Video Tennis Tips
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto mb-16 font-sans">
            Improve your positioning, groundstrokes, and match dynamics with high-definition video tips from the court.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {[
              { id: "vyP9VHCqWBw", title: "Forehand Topspin Secrets" },
              { id: "upARuo1IoBA", title: "Serving Power & Motion" },
              { id: "nXiqzSp_ly0", title: "Footwork & Lateral Court Drills" },
              { id: "zaw_13yigUQ", title: "Strategic Backhand Positioning" }
            ].map((tip, idx) => (
              <div key={idx} className="group bg-darkslate-950/60 p-4 rounded-3xl border border-slate-800/80 hover:border-volt-400/40 shadow-xl transition-all duration-500 hover:shadow-[0_0_30px_rgba(197,242,0,0.1)] text-left">
                <h3 className="font-heading font-bold text-lg text-slate-200 mb-4 group-hover:text-volt-400 transition-colors pl-1">
                  {tip.title}
                </h3>
                <div className="aspect-video w-full rounded-2xl overflow-hidden shadow-inner bg-darkslate-900 border border-slate-800">
                  <iframe
                    className="w-full h-full"
                    src={`https://www.youtube.com/embed/${tip.id}`}
                    title={tip.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default HomePage;
