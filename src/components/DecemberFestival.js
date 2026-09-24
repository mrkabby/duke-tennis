import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import SEO from "./SEO";
import emailjs from "emailjs-com";
import { festivalConfig, isFestivalActive } from "../config/eventsConfig";
import peoplePic from "../images/people.jpg";
import semiPic from "../images/semi.jpg";
import teamPic from "../images/team photo.jpeg";
import coachPic from "../images/duke.jpg";
import festivalHeroImg from "../images/girls.jpg";
import {
  FaCalendarAlt,
  FaCheckCircle,
  FaExclamationCircle,
  FaUserAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaWhatsapp,
  FaCopy,
  FaCheck,
  FaCrown,
  FaMapMarkerAlt,
  FaChevronRight,
} from "react-icons/fa";

const STATUS = { IDLE: "idle", LOADING: "loading", SUCCESS: "success", ERROR: "error" };

const DecemberFestival = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const active = isFestivalActive();

  const queryParams = new URLSearchParams(location.search);
  const requestedPkg = queryParams.get("package");
  const initialPkg = festivalConfig.packages.some((p) => p.id === requestedPkg)
    ? requestedPkg
    : null;

  // Package pre-selection state
  const [selectedPackage, setSelectedPackage] = useState(initialPkg);
  const [copiedMoMo, setCopiedMoMo] = useState(false);
  const [status, setStatus] = useState(STATUS.IDLE);

  // Form State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    packageId: initialPkg,
    notes: "",
  });

  useEffect(() => {
    if (requestedPkg && festivalConfig.packages.some((p) => p.id === requestedPkg)) {
      setSelectedPackage(requestedPkg);
      setFormData((prev) => ({ ...prev, packageId: requestedPkg }));
    }
  }, [requestedPkg]);

  // Countdown timer calculation towards Dec 1st
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const targetDate = new Date("2026-12-01T00:00:00");
    const interval = setInterval(() => {
      const now = new Date();
      const diff = targetDate.getTime() - now.getTime();

      if (diff > 0) {
        setTimeLeft({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((diff / 1000 / 60) % 60),
          seconds: Math.floor((diff / 1000) % 60),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handlePackageSelect = (pkgId) => {
    setSelectedPackage(pkgId);
    setFormData((prev) => ({ ...prev, packageId: pkgId }));
    const formElement = document.getElementById("festival-booking-form");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (name === "packageId") {
      setSelectedPackage(value);
    }
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setCopiedMoMo(true);
    setTimeout(() => setCopiedMoMo(false), 2500);
  };

  const currentPkgDetails = festivalConfig.packages.find((p) => p.id === (formData.packageId || selectedPackage));

  const handleSubmit = (e) => {
    e.preventDefault();

    // Require a package to be selected before submitting
    if (!formData.packageId) {
      setStatus(STATUS.ERROR);
      return;
    }

    setStatus(STATUS.LOADING);

    const serviceID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const templateID = process.env.REACT_APP_EMAILJS_BOOKING_TEMPLATE_ID;
    const userID = process.env.REACT_APP_EMAILJS_USER_ID;

    const emailParams = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      program: `[DECEMBER FESTIVAL] ${currentPkgDetails ? currentPkgDetails.name + " (" + currentPkgDetails.currency + " " + currentPkgDetails.price + ")" : formData.packageId}`,
      date: "Dec 1st – 26th, 2026",
      notes: formData.notes || "None specified",
    };

    if (serviceID && templateID && userID) {
      emailjs
        .send(serviceID, templateID, emailParams, userID)
        .then(() => {
          setStatus(STATUS.SUCCESS);
          setFormData({ name: "", email: "", phone: "", packageId: selectedPackage, notes: "" });
        })
        .catch((error) => {
          console.error("EmailJS Error:", error);
          setStatus(STATUS.ERROR);
        });
    } else {
      setTimeout(() => {
        setStatus(STATUS.SUCCESS);
        setFormData({ name: "", email: "", phone: "", packageId: selectedPackage, notes: "" });
      }, 700);
    }
  };

  const generateWhatsAppUrl = () => {
    const pkgName = currentPkgDetails ? `${currentPkgDetails.name} (Ghc ${currentPkgDetails.price})` : "Festival Package";
    const text = `Hi Coach Duke! I would like to book the *${pkgName}* for the *DukeTennis Festival (The December Experience)*.\n\nName: ${formData.name || "[My Name]"}\nPhone: ${formData.phone || "[My Phone]"}\nNotes: ${formData.notes || "Ready to join!"}`;
    return `https://wa.me/233558315717?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="bg-white min-h-screen pt-[73px]">
      <SEO
        title="DukeTennis Festival – The December Experience | Accra & Atlantic Bay Resort"
        description="Join the DukeTennis Festival this December! Intensive tennis sessions at Rolider Sports Complex, 2-night getaway at Atlantic Bay Resort, and an unforgettable End of Year Party."
        keywords="Duke Tennis Festival, December Experience Ghana, tennis vacation Accra, Atlantic Bay Resort tennis, Rolider Sports Complex, George Duke Nyarkoh"
        url="/december-festival"
      />
      <Navbar />

      {/* ── Hero Header Section with Image Background ── */}
      <div className="relative bg-darkslate-950 text-white py-28 px-6 overflow-hidden text-center">
        {/* Full-bleed background image with smooth zoom & opacity */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-55 scale-105 transition-transform duration-1000"
          style={{ backgroundImage: `url(${festivalHeroImg})` }}
        />
        {/* Multi-layer gradient overlays for contrast & legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-darkslate-950/70 via-darkslate-900/50 to-darkslate-950/80" />
        <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-volt-400/10 rounded-full filter blur-[120px] pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto">
          <span className="text-volt-400 font-heading font-extrabold text-xs uppercase tracking-widest mb-3 inline-block">
            Special December Experience • From 1st to 26th December
          </span>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-heading font-extrabold tracking-tight text-white mb-2">
            DUKETENNIS <span className="text-transparent bg-clip-text bg-gradient-to-r from-volt-300 via-volt-400 to-emerald-400">FESTIVAL</span>
          </h1>
          <p className="text-emerald-300 font-heading font-semibold text-xl md:text-2xl italic mb-6">
            — The December Experience —
          </p>
          <p className="text-gray-300 text-base md:text-lg font-sans max-w-2xl mx-auto leading-relaxed mb-8">
            Ghana's premier tennis lifestyle event. Experience high-octane sessions at Rolider Sports Complex, a 2-night coastal getaway to Atlantic Bay Resort, and our grand End of Year Party!
          </p>

          {/* Countdown Clock */}
          <div className="bg-white/95 border border-slate-200 rounded-2xl p-4 max-w-lg mx-auto mb-8 shadow-xl">
            <div className="text-[11px] uppercase tracking-widest font-heading font-bold text-gray-600 mb-2 flex items-center justify-between px-2">
              <span>Kickoff Countdown</span>
              <span className="text-emerald-700 font-extrabold">Dec 1st, 2026</span>
            </div>
            <div className="grid grid-cols-4 gap-2 text-center">
              {[
                { label: "Days", val: timeLeft.days },
                { label: "Hours", val: timeLeft.hours },
                { label: "Minutes", val: timeLeft.minutes },
                { label: "Seconds", val: timeLeft.seconds },
              ].map((item, idx) => (
                <div key={idx} className="bg-slate-50 rounded-xl py-2 px-1 border border-slate-200 shadow-sm">
                  <div className="text-2xl md:text-3xl font-heading font-extrabold text-darkslate-900">
                    {String(item.val).padStart(2, "0")}
                  </div>
                  <div className="text-[10px] uppercase font-bold text-gray-500 tracking-wider">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap gap-4 justify-center items-center">
            <button
              onClick={() => {
                const el = document.getElementById("packages-section");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="bg-volt-400 hover:bg-volt-300 text-darkslate-950 font-heading font-extrabold text-xs uppercase tracking-widest py-4 px-8 rounded-full transition-all duration-300 shadow-lg glow-volt-hover hover:scale-105 flex items-center gap-2"
            >
              Explore Packages & Book <FaChevronRight className="w-2.5 h-2.5" />
            </button>
            <a
              href={generateWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-600 hover:bg-emerald-500 text-white font-heading font-extrabold text-xs uppercase tracking-widest py-4 px-7 rounded-full transition shadow-lg flex items-center gap-2"
            >
              <FaWhatsapp className="text-base" /> Quick WhatsApp Booking
            </a>
          </div>
        </div>
      </div>

      {/* ── 3 Main Programs Section (Matching Luxury Cards in Services.js) ── */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-24">
        <div className="text-center mb-16">
          <span className="text-emerald-600 font-heading font-bold text-xs uppercase tracking-widest mb-3 inline-block">
            Festival Highlights
          </span>
          <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-darkslate-900 mb-4">
            THREE SIGNATURE PROGRAMS
          </h2>
          <p className="text-gray-600 font-sans text-base md:text-lg max-w-2xl mx-auto">
            A curated blend of world-class tennis training, beachfront resort leisure, and year-end celebrations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              number: "1",
              title: "Thrice A Week Tennis Sessions",
              img: semiPic,
              desc: "Intensive 3x weekly court sessions designed for match fitness, tactical drills, and high-energy rally games under certified PTR coaching.",
              venue: "Rolider Sports Complex",
              badge: "Dec 1st – 26th",
              tag: "Program 1 • Training"
            },
            {
              number: "2",
              title: "Trip To Atlantic Bay Resort",
              img: peoplePic,
              desc: "A weekend seaside retreat from 4th to 6th December 2026. Inclusive of breakfast, lunch, beachfront relaxation, swimming, and organized team activities.",
              venue: "Atlantic Bay Resort",
              badge: "4th – 6th December",
              tag: "Program 2 • 2 Nights"
            },
            {
              number: "3",
              title: "End Of Year Party",
              img: teamPic,
              desc: "Close out the tennis year with dinner, music, recognition awards, and networking on Boxing Day with fellow players, coaches, and the tennis family.",
              venue: "Duke Tennis Community",
              badge: "26th December",
              tag: "Program 3 • Celebration"
            }
          ].map((prog, idx) => (
            <div
              key={idx}
              className="group bg-white rounded-3xl border border-slate-100 hover:border-volt-400 shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2 flex flex-col justify-between"
            >
              <div>
                <div className="h-60 overflow-hidden relative">
                  <img
                    src={prog.img}
                    alt={prog.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-4 left-4 bg-darkslate-950/90 backdrop-blur-md text-volt-400 font-heading font-extrabold text-[10px] uppercase tracking-widest px-3 py-1.5 rounded-full border border-slate-800">
                    {prog.tag}
                  </span>
                  <span className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-md text-darkslate-900 font-heading font-bold text-xs px-3 py-1 rounded-full shadow">
                    {prog.badge}
                  </span>
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-heading font-extrabold text-darkslate-900 group-hover:text-emerald-700 transition-colors duration-300 mb-3">
                    {prog.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed font-sans mb-6">
                    {prog.desc}
                  </p>

                  <div className="space-y-3 pt-4 border-t border-slate-100 text-sm">
                    <div className="flex items-center text-gray-700">
                      <FaMapMarkerAlt className="text-emerald-600 mr-2.5 w-4 h-4" />
                      <span className="font-semibold text-darkslate-900">{prog.venue}</span>
                    </div>
                    <div className="flex items-center text-gray-500">
                      <FaCalendarAlt className="text-slate-400 mr-2.5 w-4 h-4" />
                      <span>{prog.badge}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="px-8 pb-8 pt-2">
                <button
                  onClick={() => {
                    const el = document.getElementById("packages-section");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="w-full bg-slate-900 hover:bg-slate-800 text-white font-heading font-bold text-xs uppercase tracking-widest py-3.5 rounded-full transition-all duration-300 flex items-center justify-center space-x-1.5"
                >
                  <span>Select Package</span>
                  <FaChevronRight className="w-2.5 h-2.5 text-volt-400" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── 4 Pricing Packages Section (Matching Services.js Schedule/Pricing) ── */}
      <section id="packages-section" className="bg-slate-50 py-24 px-6 md:px-12 relative overflow-hidden border-t border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-volt-600 font-heading font-bold text-xs uppercase tracking-widest mb-3 inline-block">
              Festival Packages & Rates
            </span>
            <h2 className="text-4xl font-heading font-extrabold text-darkslate-900 mb-4">
              CHOOSE YOUR DECEMBER PACKAGE
            </h2>
            <p className="text-gray-600 font-sans text-base md:text-lg max-w-2xl mx-auto">
              From all-inclusive luxury resort trips to intensive tennis subscriptions, select the package that fits your December schedule.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {festivalConfig.packages.map((pkg) => {
              const isSelected = selectedPackage === pkg.id;
              const isGold = pkg.id === "gold";

              return (
                <div
                  key={pkg.id}
                  className={`bg-white rounded-3xl border transition-all duration-300 shadow-md hover:shadow-xl p-7 flex flex-col justify-between relative transform hover:-translate-y-1 ${
                    isGold
                      ? "border-2 border-amber-400 ring-2 ring-amber-400/20"
                      : isSelected
                      ? "border-2 border-volt-400 ring-2 ring-volt-400/20"
                      : "border-slate-100"
                  }`}
                >
                  {isGold && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-amber-400 text-darkslate-950 px-4 py-1 rounded-full text-[10px] font-heading font-black uppercase tracking-widest flex items-center gap-1.5 shadow-md">
                      <FaCrown className="text-xs" /> Full VIP Experience
                    </div>
                  )}

                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[11px] uppercase font-heading font-bold px-3 py-1 rounded-full bg-slate-100 text-slate-700">
                        {pkg.badge}
                      </span>
                    </div>

                    <h3 className="text-2xl font-heading font-extrabold text-darkslate-900 mb-2">
                      {pkg.name}
                    </h3>

                    <div className="mb-6 pt-2">
                      <div className="flex items-baseline gap-1">
                        <span className="text-sm font-bold text-emerald-600">{pkg.currency}</span>
                        <span className="text-4xl font-heading font-extrabold text-darkslate-900">
                          {pkg.price.toLocaleString()}
                        </span>
                      </div>
                      <span className="text-xs text-gray-500 font-sans">Single payment • Full December</span>
                    </div>

                    <div className="border-t border-slate-100 pt-5 mb-6">
                      <p className="text-xs uppercase font-heading font-bold text-gray-500 mb-3">Package Includes:</p>
                      <ul className="space-y-3 text-xs text-gray-600 font-sans">
                        {pkg.includes.map((feature, i) => (
                          <li key={i} className="flex items-start gap-2.5">
                            <FaCheckCircle className="text-emerald-500 flex-shrink-0 mt-0.5" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <button
                    onClick={() => handlePackageSelect(pkg.id)}
                    className={`w-full py-3.5 rounded-full font-heading font-extrabold text-xs uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-2 ${
                      isGold
                        ? "bg-amber-400 hover:bg-amber-300 text-darkslate-950 shadow-md glow-volt-hover"
                        : isSelected
                        ? "bg-volt-400 text-darkslate-950 font-black shadow-md"
                        : "bg-slate-900 hover:bg-slate-800 text-white"
                    }`}
                  >
                    {isSelected ? "Selected ✓" : "Book This Tier"}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Booking Form & MoMo Payment Instructions (Matching Clean Form Style) ── */}
      <section id="festival-booking-form" className="py-24 px-6 md:px-12 bg-white relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-emerald-600 font-heading font-bold text-xs uppercase tracking-widest mb-3 inline-block">
              Registration & Payment
            </span>
            <h2 className="text-4xl font-heading font-extrabold text-darkslate-900 mb-3">
              RESERVE YOUR FESTIVAL SPOT
            </h2>
            <p className="text-gray-600 font-sans text-base max-w-2xl mx-auto">
              Fill in your details below and confirm via MTN Mobile Money. For instant confirmation, you can also connect directly via WhatsApp.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Left: Registration Form (7 cols) */}
            <div className="lg:col-span-7 bg-white border border-slate-100 shadow-xl rounded-3xl p-8 md:p-10 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-volt-400 to-emerald-500" />

              {status === STATUS.SUCCESS ? (
                <div className="py-14 text-center flex flex-col items-center">
                  <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center text-4xl text-emerald-500 mb-5">
                    <FaCheckCircle />
                  </div>
                  <h3 className="text-2xl font-heading font-extrabold text-darkslate-900 mb-2">
                    Booking Request Received!
                  </h3>
                  <p className="text-gray-600 text-sm max-w-md mx-auto mb-6">
                    Thank you! We've recorded your registration for the DukeTennis Festival. Please ensure payment is transferred to the MoMo number to confirm your reservation.
                  </p>
                  
                  <div className="bg-volt-50 border border-volt-200 rounded-2xl p-5 w-full max-w-md text-left mb-6 text-sm">
                    <p className="font-bold text-darkslate-900 mb-2">Next Steps:</p>
                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                      <li>Send payment via MTN MoMo to <strong>0530051334</strong></li>
                      <li>Reference: <strong>[Your Name] - Festival</strong></li>
                      <li>Send payment screenshot via WhatsApp to <strong>0558315717</strong></li>
                    </ul>
                  </div>

                  <a
                    href={generateWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-emerald-600 hover:bg-emerald-500 text-white font-heading font-bold text-xs uppercase tracking-widest px-8 py-3.5 rounded-full transition-all flex items-center gap-2 mb-4 shadow"
                  >
                    <FaWhatsapp className="text-base" /> Send Screenshot on WhatsApp
                  </a>

                  <button
                    onClick={() => setStatus(STATUS.IDLE)}
                    className="text-gray-500 hover:text-darkslate-900 text-xs underline font-sans"
                  >
                    Make another booking
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {status === STATUS.ERROR && (
                    <div className="flex items-center gap-3 bg-red-50 border border-red-200 text-red-700 rounded-xl p-4 text-xs font-sans">
                      <FaExclamationCircle className="text-red-500 text-base flex-shrink-0" />
                      <span>
                        {!formData.packageId
                          ? "Please select a package before submitting."
                          : "An error occurred while submitting. You can proceed directly using the WhatsApp booking button below!"}
                      </span>
                    </div>
                  )}

                  {/* Full Name */}
                  <div>
                    <label className="block text-sm font-heading font-bold text-gray-700 mb-2 flex items-center gap-2">
                      <FaUserAlt className="text-gray-400 w-3.5 h-3.5" /> Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="e.g. Kwame Mensah"
                      required
                      className="w-full bg-slate-50 border border-slate-200 text-slate-800 text-sm rounded-xl p-3.5 focus:bg-white focus:outline-none focus:ring-2 focus:ring-volt-400 focus:border-volt-400 transition-all shadow-inner"
                    />
                  </div>

                  {/* Email & Phone */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-heading font-bold text-gray-700 mb-2 flex items-center gap-2">
                        <FaEnvelope className="text-gray-400 w-3.5 h-3.5" /> Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="kwame@example.com"
                        required
                        className="w-full bg-slate-50 border border-slate-200 text-slate-800 text-sm rounded-xl p-3.5 focus:bg-white focus:outline-none focus:ring-2 focus:ring-volt-400 focus:border-volt-400 transition-all shadow-inner"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-heading font-bold text-gray-700 mb-2 flex items-center gap-2">
                        <FaPhoneAlt className="text-gray-400 w-3.5 h-3.5" /> Phone / WhatsApp
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="05X XXX XXXX"
                        required
                        className="w-full bg-slate-50 border border-slate-200 text-slate-800 text-sm rounded-xl p-3.5 focus:bg-white focus:outline-none focus:ring-2 focus:ring-volt-400 focus:border-volt-400 transition-all shadow-inner"
                      />
                    </div>
                  </div>

                  {/* Selected Package */}
                  <div>
                    <label className="block text-sm font-heading font-bold text-gray-700 mb-2 flex items-center justify-between">
                      <span className="flex items-center gap-2">
                        <FaCrown className="text-gray-400 w-3.5 h-3.5" /> Selected Package Tier
                      </span>
                      {currentPkgDetails && (
                        <span className="text-emerald-700 font-extrabold text-sm">
                          Ghc {currentPkgDetails.price.toLocaleString()}
                        </span>
                      )}
                    </label>
                    <select
                      name="packageId"
                      value={formData.packageId || ""}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-slate-50 border border-slate-200 text-slate-800 text-sm rounded-xl p-3.5 focus:bg-white focus:outline-none focus:ring-2 focus:ring-volt-400 focus:border-volt-400 transition-all shadow-inner cursor-pointer"
                    >
                      <option value="" disabled>— Select a package —</option>
                      {festivalConfig.packages.map((pkg) => (
                        <option key={pkg.id} value={pkg.id}>
                          {pkg.name} — Ghc {pkg.price.toLocaleString()} ({pkg.badge})
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Additional Notes */}
                  <div>
                    <label className="block text-sm font-heading font-bold text-gray-700 mb-2">
                      Special Requests / Rooming Preference (Optional)
                    </label>
                    <textarea
                      name="notes"
                      rows={3}
                      value={formData.notes}
                      onChange={handleInputChange}
                      placeholder="e.g. Dietary preferences, who you want to share a room with, tennis playing experience..."
                      className="w-full bg-slate-50 border border-slate-200 text-slate-800 text-sm rounded-xl p-3.5 focus:bg-white focus:outline-none focus:ring-2 focus:ring-volt-400 focus:border-volt-400 transition-all shadow-inner resize-none"
                    />
                  </div>

                  {/* Action Buttons */}
                  <div className="space-y-3 pt-2">
                    <button
                      type="submit"
                      disabled={status === STATUS.LOADING}
                      className="w-full bg-darkslate-900 hover:bg-darkslate-800 disabled:opacity-50 text-white font-heading font-extrabold text-xs uppercase tracking-widest py-4 rounded-xl transition duration-300 shadow-md flex items-center justify-center gap-2"
                    >
                      {status === STATUS.LOADING ? "Registering..." : `Confirm & Register (${currentPkgDetails ? "Ghc " + currentPkgDetails.price.toLocaleString() : ""})`}
                    </button>

                    <a
                      href={generateWhatsAppUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-heading font-bold text-xs uppercase tracking-widest py-3.5 rounded-xl transition duration-300 flex items-center justify-center gap-2 shadow"
                    >
                      <FaWhatsapp className="text-base" /> Book Instantly via WhatsApp
                    </a>
                  </div>
                </form>
              )}
            </div>

            {/* Right: Payment Details Card (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* MoMo Box */}
              <div className="bg-white border border-slate-100 rounded-3xl overflow-hidden shadow-xl">
                <div className="bg-gradient-to-r from-amber-500 to-amber-600 p-6 text-white">
                  <div className="flex items-center justify-between mb-2">
                    <span className="bg-white/20 backdrop-blur-md text-white font-heading font-extrabold text-[10px] uppercase tracking-widest px-3 py-1 rounded-full">
                      Official Payment Method
                    </span>
                    <span className="text-xs text-white/90 font-sans font-semibold">MTN Mobile Money</span>
                  </div>
                  <h3 className="text-2xl font-heading font-extrabold text-white">
                    MTN MoMo Transfer
                  </h3>
                </div>

                <div className="p-8">
                  <p className="text-xs text-gray-500 mb-6 leading-relaxed font-sans">
                    Use the details below to complete payment for your chosen package. Spots are allocated upon payment confirmation.
                  </p>

                  {/* MoMo Number Box */}
                  <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 flex items-center justify-between mb-4">
                    <div>
                      <span className="text-[10px] uppercase font-bold text-gray-500 block tracking-wider">
                        MTN MoMo Number
                      </span>
                      <span className="text-2xl font-heading font-extrabold text-darkslate-900 tracking-wider">
                        {festivalConfig.momo.number}
                      </span>
                    </div>
                    <button
                      type="button"
                      onClick={() => copyToClipboard(festivalConfig.momo.number)}
                      className="p-3 bg-white hover:bg-slate-100 text-darkslate-900 border border-slate-200 rounded-xl transition flex items-center gap-1.5 text-xs font-heading font-bold shadow-sm"
                      title="Copy MoMo number"
                    >
                      {copiedMoMo ? (
                        <>
                          <FaCheck className="text-emerald-600" /> Copied!
                        </>
                      ) : (
                        <>
                          <FaCopy /> Copy
                        </>
                      )}
                    </button>
                  </div>

                  <div className="bg-slate-50 border border-slate-100 rounded-xl p-4 text-xs text-gray-600 font-sans space-y-2 mb-6">
                    <p>
                      <strong className="text-darkslate-900">Account Name:</strong> {festivalConfig.momo.name}
                    </p>
                    <p>
                      <strong className="text-darkslate-900">Reference:</strong> [Your Name] - Festival
                    </p>
                  </div>

                  {/* Verification Contact */}
                  <div className="border-t border-slate-100 pt-5">
                    <p className="text-xs text-gray-500 mb-2 font-sans">
                      For inquiries & payment confirmation:
                    </p>
                    <a
                      href={`tel:${festivalConfig.contact.phone}`}
                      className="inline-flex items-center gap-2 text-darkslate-900 font-heading font-bold text-lg hover:text-emerald-700 transition"
                    >
                      <FaPhoneAlt className="text-emerald-600 text-sm" /> {festivalConfig.contact.phone}
                    </a>
                  </div>
                </div>
              </div>

              {/* Coach & Location Badge */}
              <div className="bg-white border border-slate-100 rounded-3xl p-6 flex items-center gap-4 shadow-sm">
                <img
                  src={coachPic}
                  alt="Coach George Duke Nyarkoh"
                  className="w-16 h-16 rounded-2xl object-cover border border-slate-200 shadow-sm"
                />
                <div>
                  <h4 className="font-heading font-bold text-darkslate-900 text-base">
                    Coach George Duke Nyarkoh
                  </h4>
                  <p className="text-xs text-emerald-600 font-sans font-semibold">
                    Head Coach & Festival Organizer
                  </p>
                  <div className="flex items-center gap-2 text-xs text-gray-500 mt-1">
                    <FaMapMarkerAlt className="text-slate-400" /> Rolider Sports Complex, Ghana
                  </div>
                </div>
              </div>

              {/* Hashtags (if defined) */}
              {festivalConfig.hashtags && festivalConfig.hashtags.length > 0 && (
                <div className="flex flex-wrap gap-2 pt-2">
                  {festivalConfig.hashtags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-[11px] font-heading font-semibold text-gray-600 bg-white border border-slate-200 px-3 py-1 rounded-full shadow-2xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}

            </div>

          </div>
        </div>
      </section>

      {/* ── Concluded State Message (if not active) ── */}
      {!active && (
        <section className="bg-amber-50 border-t border-amber-200 py-12 px-6 text-center">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-heading font-extrabold text-amber-900 mb-2">
              The 2026 December Experience Has Concluded!
            </h3>
            <p className="text-gray-600 text-sm font-sans mb-6">
              Thank you to all who participated! Regular year-round coaching and group sessions continue at Rolider Sports Complex.
            </p>
            <button
              onClick={() => navigate("/booking")}
              className="bg-darkslate-900 hover:bg-darkslate-800 text-white font-heading font-extrabold text-xs uppercase tracking-widest px-8 py-3.5 rounded-full transition shadow"
            >
              Explore Year-Round Training
            </button>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
};

export default DecemberFestival;
