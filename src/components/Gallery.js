import React, { useState, useEffect, useCallback } from "react";
import img1 from "../images/group.jpg";
import img2 from "../images/girls.jpg";
import img3 from "../images/cardio.jpg";
import img4 from "../images/Kid.jpg";
import img5 from "../images/One.jpg";
import img6 from "../images/balls.jpg"; // Swapped out logo.png for premium tennis balls photo
import img7 from "../images/another guy.jpg";
import img8 from "../images/guy.jpg";
import img9 from "../images/dukeback.jpg";
import img10 from "../images/another lady.png";
import img11 from "../images/pink.jpg";
import img12 from "../images/lady.jpg";
import img13 from "../images/lowcut.jpg";
import img14 from "../images/people.jpg";
import img15 from "../images/after seesion.jpeg";
import img16 from "../images/group training.jpeg";
import img17 from "../images/female session.jpeg";
import img18 from "../images/team photo.jpeg";
import img19 from "../images/clients photo.jpeg";

import Navbar from "./Navbar";
import Footer from "./Footer";
import { FaSearchPlus, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { HiX } from "react-icons/hi";

const GALLERY_ITEMS = [
  { id: 1, src: img1, title: "Elite Academy Group Drills", category: "Academy Life", desc: "Fostering camaraderie, strategic matchups, and community dynamics under Coach Duke's close guidance." },
  { id: 2, src: img2, title: "Junior Performance Camp", category: "Junior Lessons", desc: "Developing strong tennis foundations, physical literacy, and hand-eye coordination for future champions." },
  { id: 3, src: img3, title: "Aerobic Cardio Tennis", category: "Cardio Tennis", desc: "High-tempo workout combining heart-pumping physical conditioning with high-volume hitting repetitions." },
  { id: 4, src: img4, title: "Future Stars Foundation", category: "Junior Lessons", desc: "Introducing young athletes to high-performance swing paths, positive footwork habits, and court play." },
  { id: 5, src: img5, title: "Private Technical Mastery", category: "Private Lessons", desc: "Focused 1-on-1 development prioritizing stroke biomechanics, spin generation, and point progression." },
  { id: 6, src: img6, title: "Pro Ball Drills Setup", category: "Academy Life", desc: "Top-grade tournament tennis balls prepped for intense ball machine and heavy basket drills." },
  { id: 7, src: img7, title: "Elite Adult Private Class", category: "Private Lessons", desc: "Customized modern tennis instruction emphasizing aggressive shot-making, pace absorption, and patterns." },
  { id: 8, src: img8, title: "Tactical Match-Play Lesson", category: "Private Lessons", desc: "Developing real-game simulation, service dominance, pressure baseline play, and situational strategies." },
  { id: 9, src: img9, title: "High-Altitude Serve Release", category: "Action Shots", desc: "Analyzing serve mechanics, shoulder rotation, explosive vertical load, and optimal contact point." },
  { id: 10, src: img10, title: "Topspin Forehand Drive", category: "Action Shots", desc: "Executing a deep, high-topspin forehand targeting the opponent's weak side during pressure rallies." },
  { id: 11, src: img11, title: "Cardio Agility Training", category: "Cardio Tennis", desc: "Rapid ladder drills and reactive agility routines to perfect lateral explosive court coverage." },
  { id: 12, src: img12, title: "Closed Stance Backhand", category: "Action Shots", desc: "Capturing linear power transfer and racket head speed on a crisp, down-the-line backhand drive." },
  { id: 13, src: img13, title: "Net Attack & Volley Finish", category: "Action Shots", desc: "Perfecting aggressive transitional footwork, split steps, and sharp angle volley execution." },
  { id: 14, src: img14, title: "Duke Tennis Community Cup", category: "Academy Life", desc: "Celebrating local tennis enthusiasts, sportsmanship, and outstanding player milestones at the academy." },
  { id: 15, src: img15, title: "Post-Training Session Celebration", category: "Academy Life", desc: "Capturing the energy and camaraderie after an intensive training session." },
  { id: 16, src: img16, title: "Group Training in Action", category: "Academy Life", desc: "Dynamic collaborative training showcasing team development and competitive practice." },
  { id: 17, src: img17, title: "Female Player Advanced Techniques", category: "Junior Lessons", desc: "Empowering women through specialized skill development and tactical training." },
  { id: 18, src: img18, title: "Duke Tennis Team Gathering", category: "Academy Life", desc: "United team moment celebrating collective progress and academy spirit." },
  { id: 19, src: img19, title: "Client Success Showcase", category: "Academy Life", desc: "Testimonial featuring dedicated clients achieving their tennis goals at Duke Tennis." },
];

const CATEGORIES = ["All", "Action Shots", "Junior Lessons", "Private Lessons", "Cardio Tennis", "Academy Life"];

const Gallery = () => {
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  // Simulate premium asset pre-loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setImagesLoaded(true);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  const filteredItems = activeCategory === "All"
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === activeCategory);

  const openLightbox = (id) => {
    const index = filteredItems.findIndex((item) => item.id === id);
    if (index !== -1) {
      setLightboxIndex(index);
      setLightboxOpen(true);
    }
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const nextImage = useCallback((e) => {
    if (e) e.stopPropagation();
    setLightboxIndex((prev) => (prev + 1) % filteredItems.length);
  }, [filteredItems.length]);

  const prevImage = useCallback((e) => {
    if (e) e.stopPropagation();
    setLightboxIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
  }, [filteredItems.length]);

  // Keyboard navigation for Lightbox Accessibility
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!lightboxOpen) return;
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "Escape") closeLightbox();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxOpen, lightboxIndex, filteredItems, nextImage, prevImage]);

  return (
    <div className="bg-slate-950 min-h-screen text-white">
      <Navbar />

      {/* Hero Section */}
      <div
        className="relative h-[45vh] bg-cover bg-center flex items-center justify-center pt-[73px]"
        style={{ backgroundImage: `url(${img9})` }}
      >
        {/* Dark radial and linear overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/75 to-black/80 z-0"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(7,10,16,0.9))] z-0"></div>

        {/* Text content */}
        <div className="relative z-10 text-center px-4 max-w-3xl">
          <span className="text-volt-400 font-heading font-extrabold text-xs md:text-sm uppercase tracking-widest mb-3 inline-block border-b-2 border-volt-400 pb-1">
            Visual Showcase
          </span>
          <h1 className="text-4xl md:text-6xl font-heading font-extrabold text-white leading-tight">
            Academy <span className="text-transparent bg-clip-text bg-gradient-to-r from-volt-300 to-emerald-400">Gallery</span>
          </h1>
          <p className="mt-4 text-sm md:text-base text-slate-300 font-sans max-w-lg mx-auto leading-relaxed">
            Step onto our high-performance courts, witness athletic drive, and explore our specialized development programs in action.
          </p>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="px-6 py-20 md:px-12 lg:px-20 relative overflow-hidden bg-gradient-to-b from-slate-950 to-darkslate-950">
        {/* Ambient background glows */}
        <div className="absolute top-1/4 left-1/4 w-[40vw] h-[40vw] bg-volt-400/5 rounded-full filter blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[40vw] h-[40vw] bg-emerald-500/5 rounded-full filter blur-[120px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto">
          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-16 relative z-10">
            {CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => {
                  setActiveCategory(category);
                  setLightboxIndex(0);
                }}
                className={`px-5 py-2.5 rounded-full text-[10px] md:text-xs font-heading font-bold uppercase tracking-widest transition-all duration-300 border ${
                  activeCategory === category
                    ? "bg-volt-400 text-darkslate-950 border-volt-400 shadow-lg shadow-volt-400/20 scale-105"
                    : "bg-slate-900/50 text-slate-400 border-slate-800/80 hover:bg-slate-850 hover:text-white hover:border-slate-700"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          {imagesLoaded ? (
            filteredItems.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 relative z-10">
                {filteredItems.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => openLightbox(item.id)}
                    className="group relative overflow-hidden rounded-2xl border border-slate-800/80 bg-slate-900/30 shadow-xl cursor-pointer hover:shadow-volt/10 transition-all duration-500 hover:-translate-y-1.5 hover:border-slate-700"
                  >
                    {/* Image Box */}
                    <div className="relative aspect-[4/3] overflow-hidden bg-slate-900">
                      <img
                        src={item.src}
                        alt={item.title}
                        className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-110 group-hover:blur-[2px] group-hover:brightness-50"
                        loading="lazy"
                      />
                      
                      {/* Static Corner Badge (Hidden on Hover) */}
                      <span className="absolute top-4 left-4 bg-slate-950/85 backdrop-blur-md text-volt-300 border border-slate-850 text-[9px] font-heading font-extrabold uppercase tracking-wider px-3 py-1 rounded-full group-hover:opacity-0 transition-opacity duration-300">
                        {item.category}
                      </span>
                    </div>

                    {/* Smooth Reveal Hover Detail Panel */}
                    <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0 bg-gradient-to-t from-slate-950 via-slate-950/90 to-transparent">
                      <span className="bg-volt-400/10 text-volt-300 border border-volt-400/20 text-[9px] font-heading font-extrabold uppercase tracking-widest px-2.5 py-1 rounded inline-block w-fit mb-2">
                        {item.category}
                      </span>
                      <h3 className="text-lg font-heading font-extrabold text-white mb-1.5 leading-tight">
                        {item.title}
                      </h3>
                      <p className="text-xs text-slate-300 font-sans line-clamp-3 mb-4 leading-relaxed">
                        {item.desc}
                      </p>
                      <span className="text-[10px] text-volt-400 font-heading font-extrabold uppercase tracking-wider flex items-center gap-1.5 hover:text-white transition-colors">
                        <FaSearchPlus className="w-3.5 h-3.5" /> Zoom View
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-20 text-slate-400 relative z-10">
                <p className="text-lg font-heading">No items found in this category.</p>
              </div>
            )
          ) : (
            /* Premium Neon Spinner Loader */
            <div className="flex flex-col items-center justify-center min-h-[45vh] text-slate-400 relative z-10">
              <div className="relative w-16 h-16">
                <div className="absolute inset-0 rounded-full border-4 border-slate-900"></div>
                <div className="absolute inset-0 rounded-full border-4 border-volt-400 border-t-transparent animate-spin"></div>
                <div className="absolute inset-2 rounded-full bg-slate-950 flex items-center justify-center">
                  <svg className="w-6 h-6 text-volt-400 animate-pulse" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                  </svg>
                </div>
              </div>
              <p className="mt-6 text-xs font-heading font-bold uppercase tracking-widest text-volt-300 animate-pulse">Loading Elite Gallery...</p>
            </div>
          )}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxOpen && filteredItems.length > 0 && (
        <div 
          className="fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-md flex items-center justify-center p-4 md:p-8 select-none"
          onClick={closeLightbox}
        >
          {/* Close button top right */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 z-50 bg-slate-900/60 hover:bg-slate-900 text-white hover:text-volt-400 p-3 rounded-full transition-all border border-slate-800 hover:border-volt-400/30 flex items-center justify-center shadow-lg"
            aria-label="Close Lightbox"
          >
            <HiX className="w-6 h-6" />
          </button>

          {/* Previous Button */}
          <button
            onClick={prevImage}
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-50 bg-slate-900/50 hover:bg-slate-900 text-white hover:text-volt-400 p-4 rounded-full transition-all border border-slate-800/80 hover:border-volt-400/30 flex items-center justify-center shadow-lg hover:scale-105"
            aria-label="Previous Image"
          >
            <FaArrowLeft className="w-5 h-5" />
          </button>

          {/* Next Button */}
          <button
            onClick={nextImage}
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-50 bg-slate-900/50 hover:bg-slate-900 text-white hover:text-volt-400 p-4 rounded-full transition-all border border-slate-800/80 hover:border-volt-400/30 flex items-center justify-center shadow-lg hover:scale-105"
            aria-label="Next Image"
          >
            <FaArrowRight className="w-5 h-5" />
          </button>

          {/* Lightbox Content Container */}
          <div 
            className="w-full max-w-4xl flex flex-col items-center"
            onClick={(e) => e.stopPropagation()} // Prevent clicking elements inside from closing lightbox
          >
            {/* Image Container with Glow */}
            <div className="relative max-h-[70vh] flex items-center justify-center mb-6 overflow-hidden rounded-2xl border border-slate-850 shadow-2xl bg-black/40">
              <img
                src={filteredItems[lightboxIndex].src}
                alt={filteredItems[lightboxIndex].title}
                className="max-h-[65vh] max-w-full rounded-2xl object-contain shadow-2xl shadow-volt-400/5"
              />
              {/* Float Badge */}
              <span className="absolute top-4 left-4 bg-slate-950/85 backdrop-blur-md text-volt-300 border border-slate-850 text-xs font-heading font-extrabold uppercase tracking-widest px-3.5 py-1.5 rounded-full">
                {filteredItems[lightboxIndex].category}
              </span>
            </div>

            {/* Metadata */}
            <div className="text-center max-w-2xl px-4">
              <h2 className="text-xl md:text-2xl font-heading font-extrabold text-white mb-2 leading-tight">
                {filteredItems[lightboxIndex].title}
              </h2>
              <p className="text-sm text-slate-300 font-sans leading-relaxed mb-3">
                {filteredItems[lightboxIndex].desc}
              </p>
              <span className="text-xs font-heading text-slate-500 uppercase tracking-widest font-extrabold">
                Image {lightboxIndex + 1} of {filteredItems.length}
              </span>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Gallery;

