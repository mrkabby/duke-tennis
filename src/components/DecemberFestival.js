import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import SEO from "./SEO";
import emailjs from "emailjs-com";
import { festivalConfig, isFestivalActive } from "../config/eventsConfig";
import semiPic from "../images/session1.jpeg";
import teamPic from "../images/session2.png";
import coachPic from "../images/duke.jpg";
import festivalHeroImg from "../images/girls.jpg";
import festivalFlyerImg from "../images/festival-2026-flyer.jpg";
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
  FaClock,
  FaTicketAlt,
  FaTshirt,
  FaGlassCheers,
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
    : "early-bird";

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

  // Countdown timer calculation towards Dec 24th, 2026 at 7:00 AM (Kickoff of Session 1)
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const targetDate = new Date("2026-12-24T07:00:00");
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
      program: `[DECEMBER FESTIVAL 2026] ${currentPkgDetails ? currentPkgDetails.name + " (" + currentPkgDetails.currency + " " + currentPkgDetails.price + ")" : formData.packageId}`,
      date: "24th December 2026 (Session 1: 7am-12pm | Session 2: 8pm TYD)",
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
    const pkgName = currentPkgDetails ? `${currentPkgDetails.name} (Ghc ${currentPkgDetails.price})` : "Festival Pass";
    const text = `Hi Coach Duke! I would like to book the *${pkgName}* for the *DukeTennis Festival 2026 (The Homecoming, 24th Dec: The Tennis Carnival & Party Night)*.\n\nName: ${formData.name || "[My Name]"}\nPhone: ${formData.phone || "[My Phone]"}\nNotes: ${formData.notes || "Ready to join!"}`;
    return `https://wa.me/233558315717?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="bg-white min-h-screen pt-[73px]">
      <SEO
        title="DukeTennis Festival 2026 – The Homecoming | 24th December 2026"
        description="Join the 2026 DukeTennis Festival (The Homecoming) on 24th December! 2 Sessions: The Tennis Carnival (7am-12pm, Tennis Attire) & Party Night (8pm TYD, No Tennis Outfit) at Rolider Sports Complex, Ghana. Early Bird: Ghc250, Standard: Ghc500."
        keywords="Duke Tennis Festival 2026, The Homecoming, Tennis Carnival, Party Night, December Experience Ghana, Rolider Sports Complex, George Duke Nyarkoh"
        url="/december-festival"
      />
      <Navbar />

      {/* ── Hero Header Section with Image Background ── */}
      <div className="relative bg-darkslate-950 text-white py-28 px-6 overflow-hidden text-center">
        {/* Full-bleed background image with smooth zoom & opacity */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-45 scale-105 transition-transform duration-1000"
          style={{ backgroundImage: `url(${festivalHeroImg})` }}
        />
        {/* Multi-layer gradient overlays for contrast & legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-darkslate-950/75 via-darkslate-900/60 to-darkslate-950/90" />
        <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-volt-400/10 rounded-full filter blur-[120px] pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-volt-400/15 border border-volt-400/40 px-4 py-1.5 rounded-full mb-4">
            <span className="w-2 h-2 rounded-full bg-volt-400 animate-ping" />
            <span className="text-volt-300 font-heading font-extrabold text-xs uppercase tracking-widest">
              24th December 2026 • 2 Epic Sessions in 1 Day • Ghana 🇬🇭
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-heading font-extrabold tracking-tight text-white mb-2">
            DUKETENNIS <span className="text-transparent bg-clip-text bg-gradient-to-r from-volt-300 via-volt-400 to-emerald-400">FESTIVAL 2026</span>
          </h1>
          <p className="text-emerald-300 font-heading font-semibold text-xl md:text-2xl italic mb-6">
            — THE HOMECOMING • THE DECEMBER EXPERIENCE —
          </p>
          <p className="text-gray-200 text-base md:text-lg font-sans max-w-2xl mx-auto leading-relaxed mb-8">
            We are pleased to announce that the <strong>2026 DUKETENNIS Festival</strong> is going to be on <strong>24th December, 2026</strong>, at <strong>Rolider Sports Complex</strong>, Ghana 🇬🇭, Africa. Two massive sessions in one unforgettable day! Y’all ready?
          </p>

          {/* Quick Sessions Overview Banner in Hero */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-2xl mx-auto mb-8 text-left">
            <div className="bg-white/10 border border-white/20 rounded-2xl p-4 backdrop-blur-md">
              <div className="flex items-center justify-between mb-1">
                <span className="text-volt-400 font-heading font-extrabold text-[11px] uppercase tracking-wider">
                  Session 1 (Day)
                </span>
                <span className="text-white text-xs font-mono font-bold">7am – 12 noon</span>
              </div>
              <p className="font-heading font-extrabold text-white text-base">The Tennis Carnival</p>
              <p className="text-xs text-volt-300 mt-1 flex items-center gap-1.5 font-sans font-semibold">
                <FaTshirt className="text-xs" /> Dress Code: Tennis Attire
              </p>
            </div>

            <div className="bg-white/10 border border-white/20 rounded-2xl p-4 backdrop-blur-md">
              <div className="flex items-center justify-between mb-1">
                <span className="text-amber-400 font-heading font-extrabold text-[11px] uppercase tracking-wider">
                  Session 2 (Night)
                </span>
                <span className="text-white text-xs font-mono font-bold">8pm till you drop</span>
              </div>
              <p className="font-heading font-extrabold text-white text-base">Party Night</p>
              <p className="text-xs text-amber-300 mt-1 flex items-center gap-1.5 font-sans font-semibold">
                <FaGlassCheers className="text-xs" /> Dress Code: No Tennis Outfit
              </p>
            </div>
          </div>

          {/* Countdown Clock */}
          <div className="bg-white/95 border border-slate-200 rounded-2xl p-4 max-w-lg mx-auto mb-8 shadow-xl">
            <div className="text-[11px] uppercase tracking-widest font-heading font-bold text-gray-600 mb-2 flex items-center justify-between px-2">
              <span>Festival Kickoff Countdown</span>
              <span className="text-emerald-700 font-extrabold">Dec 24th, 2026 • 7:00 AM</span>
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
              Get Festival Tickets <FaChevronRight className="w-2.5 h-2.5" />
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

      {/* ── Official Flyer & Event Overview Section ── */}
      <section className="py-20 px-6 md:px-12 bg-slate-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
          {/* Official Flyer Poster */}
          <div className="w-full lg:w-5/12 flex justify-center">
            <div className="relative group max-w-sm rounded-3xl overflow-hidden shadow-2xl border-4 border-white transition-transform duration-500 hover:scale-[1.02]">
              <img
                src={festivalFlyerImg}
                alt="DukeTennis Festival 2026 - The Homecoming Official Flyer"
                className="w-full h-auto object-cover"
              />
              <div className="absolute top-4 right-4 bg-darkslate-950/90 text-volt-400 font-heading font-extrabold text-[10px] uppercase tracking-widest px-3 py-1.5 rounded-full border border-slate-800">
                Official Flyer
              </div>
            </div>
          </div>

          {/* Event Quick Brief */}
          <div className="w-full lg:w-7/12 space-y-6">
            <span className="text-emerald-600 font-heading font-bold text-xs uppercase tracking-widest inline-block">
              The December Experience
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-darkslate-900 tracking-tight">
              TWO SESSIONS. ONE EPIC DAY.
            </h2>
            <p className="text-gray-600 font-sans text-base leading-relaxed">
              DukeTennis is bringing you the ultimate tennis lifestyle festival on <strong>24th December 2026</strong> at <strong>Rolider Sports Complex</strong>. We kick off in the morning with <strong>The Tennis Carnival</strong> and close out the night with an electric <strong>Party Night</strong> celebration!
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-volt-50 flex items-center justify-center flex-shrink-0 text-emerald-600">
                  <FaCalendarAlt className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs uppercase font-heading font-bold text-gray-400">Date</p>
                  <p className="font-heading font-bold text-darkslate-900 text-sm">24th December 2026</p>
                  <p className="text-xs text-gray-500">Full Day Experience</p>
                </div>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center flex-shrink-0 text-emerald-600">
                  <FaMapMarkerAlt className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs uppercase font-heading font-bold text-gray-400">Venue</p>
                  <p className="font-heading font-bold text-darkslate-900 text-sm">Rolider Sports Complex</p>
                  <p className="text-xs text-gray-500">Accra, Ghana 🇬🇭</p>
                </div>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center flex-shrink-0 text-amber-600">
                  <FaTicketAlt className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs uppercase font-heading font-bold text-gray-400">Early Bird Ticket</p>
                  <p className="font-heading font-bold text-darkslate-900 text-sm">Ghc 250 Only</p>
                  <p className="text-xs text-gray-500">Valid 9th – 30th November</p>
                </div>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center flex-shrink-0 text-darkslate-900">
                  <FaClock className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs uppercase font-heading font-bold text-gray-400">Late / Regular Ticket</p>
                  <p className="font-heading font-bold text-darkslate-900 text-sm">Ghc 500</p>
                  <p className="text-xs text-gray-500">Standard entry ticket</p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => {
                  const el = document.getElementById("sessions-section");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                className="bg-darkslate-900 hover:bg-darkslate-800 text-white font-heading font-bold text-xs uppercase tracking-widest py-3.5 px-8 rounded-full transition shadow-md flex items-center gap-2"
              >
                <span>View Session Details</span>
                <FaChevronRight className="text-volt-400 text-xs" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── Two Official Sessions Section ── */}
      <section id="sessions-section" className="max-w-7xl mx-auto px-6 md:px-12 py-24">
        <div className="text-center mb-16">
          <span className="text-emerald-600 font-heading font-bold text-xs uppercase tracking-widest mb-3 inline-block">
            Full Event Schedule
          </span>
          <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-darkslate-900 mb-4 tracking-tight">
            THE TWO SESSIONS
          </h2>
          <p className="text-gray-600 font-sans text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            One ticket grants you access to both sessions on 24th December 2026. Note the distinct schedule and dress codes below!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Session 1 Card */}
          <div className="group bg-white rounded-3xl border-2 border-slate-100 hover:border-volt-400 shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col justify-between transform hover:-translate-y-2">
            <div>
              <div className="h-64 overflow-hidden relative">
                <img
                  src={semiPic}
                  alt="The Tennis Carnival"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-4 left-4 bg-darkslate-950/90 backdrop-blur-md text-volt-400 font-heading font-extrabold text-[10px] uppercase tracking-widest px-3.5 py-1.5 rounded-full border border-slate-800">
                  SESSION 1 • DAY
                </span>
                <span className="absolute bottom-4 right-4 bg-volt-400 text-darkslate-950 font-heading font-extrabold text-xs px-3.5 py-1 rounded-full shadow">
                  7:00 AM – 12:00 NOON
                </span>
              </div>

              <div className="p-8">
                <div className="flex items-center gap-2 text-emerald-700 font-heading font-bold text-xs uppercase tracking-wider mb-2">
                  <FaClock className="text-sm" /> 7:00 AM to 12:00 Noon
                </div>
                <h3 className="text-2xl md:text-3xl font-heading font-extrabold text-darkslate-900 group-hover:text-emerald-700 transition-colors duration-300 mb-3">
                  The Tennis Carnival
                </h3>

                {/* Dress Code Highlight */}
                <div className="bg-volt-50 border border-volt-300 text-darkslate-950 rounded-2xl px-4 py-3 mb-5 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-volt-400 flex items-center justify-center flex-shrink-0 text-darkslate-950">
                    <FaTshirt />
                  </div>
                  <div>
                    <span className="text-[10px] font-heading font-extrabold uppercase tracking-widest block text-emerald-800">
                      Dress Code
                    </span>
                    <span className="font-heading font-extrabold text-sm text-darkslate-900">
                      Tennis Attire
                    </span>
                  </div>
                </div>

                <p className="text-sm text-gray-600 leading-relaxed font-sans mb-6">
                  High-energy court action, interactive drills, friendly singles and doubles exhibition matches, target serving challenges, and fun rally games under certified PTR coaching.
                </p>

                <div className="space-y-2.5 pt-4 border-t border-slate-100 text-xs text-gray-600 font-sans">
                  <div className="flex items-center gap-2">
                    <FaCheckCircle className="text-emerald-500 flex-shrink-0" />
                    <span>Friendly exhibition matches &amp; rallies</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaCheckCircle className="text-emerald-500 flex-shrink-0" />
                    <span>Skills challenges &amp; court drills for all levels</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaCheckCircle className="text-emerald-500 flex-shrink-0" />
                    <span>King of the court mini-contests &amp; prizes</span>
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
                className="w-full bg-darkslate-950 hover:bg-darkslate-800 text-white font-heading font-bold text-xs uppercase tracking-widest py-3.5 rounded-full transition-all duration-300 flex items-center justify-center space-x-1.5"
              >
                <span>Book Festival Pass</span>
                <FaChevronRight className="w-2.5 h-2.5 text-volt-400" />
              </button>
            </div>
          </div>

          {/* Session 2 Card */}
          <div className="group bg-white rounded-3xl border-2 border-slate-100 hover:border-amber-400 shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col justify-between transform hover:-translate-y-2">
            <div>
              <div className="h-64 overflow-hidden relative">
                <img
                  src={teamPic}
                  alt="Party Night"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-4 left-4 bg-darkslate-950/90 backdrop-blur-md text-amber-400 font-heading font-extrabold text-[10px] uppercase tracking-widest px-3.5 py-1.5 rounded-full border border-slate-800">
                  SESSION 2 • NIGHT
                </span>
                <span className="absolute bottom-4 right-4 bg-amber-400 text-darkslate-950 font-heading font-extrabold text-xs px-3.5 py-1 rounded-full shadow">
                  8:00 PM TILL YOU DROP
                </span>
              </div>

              <div className="p-8">
                <div className="flex items-center gap-2 text-amber-600 font-heading font-bold text-xs uppercase tracking-wider mb-2">
                  <FaClock className="text-sm" /> 8:00 PM till you drop (TYD)
                </div>
                <h3 className="text-2xl md:text-3xl font-heading font-extrabold text-darkslate-900 group-hover:text-amber-600 transition-colors duration-300 mb-3">
                  Party Night
                </h3>

                {/* Dress Code Highlight */}
                <div className="bg-amber-50 border border-amber-300 text-darkslate-950 rounded-2xl px-4 py-3 mb-5 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-amber-400 flex items-center justify-center flex-shrink-0 text-darkslate-950">
                    <FaGlassCheers />
                  </div>
                  <div>
                    <span className="text-[10px] font-heading font-extrabold uppercase tracking-widest block text-amber-800">
                      Dress Code
                    </span>
                    <span className="font-heading font-extrabold text-sm text-darkslate-900">
                      No Tennis Outfit (Dress to Party)
                    </span>
                  </div>
                </div>

                <p className="text-sm text-gray-600 leading-relaxed font-sans mb-6">
                  Switch out of your tennis kits and dress up for an unforgettable night! Great DJ music, food, drinks, end-of-year recognitions, dancing, and holiday celebration with the tennis family.
                </p>

                <div className="space-y-2.5 pt-4 border-t border-slate-100 text-xs text-gray-600 font-sans">
                  <div className="flex items-center gap-2">
                    <FaCheckCircle className="text-emerald-500 flex-shrink-0" />
                    <span>Live DJ, music &amp; entertainment</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaCheckCircle className="text-emerald-500 flex-shrink-0" />
                    <span>Food, refreshments &amp; holiday drinks</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaCheckCircle className="text-emerald-500 flex-shrink-0" />
                    <span>End-of-year awards, dancing &amp; networking</span>
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
                className="w-full bg-darkslate-950 hover:bg-darkslate-800 text-white font-heading font-bold text-xs uppercase tracking-widest py-3.5 rounded-full transition-all duration-300 flex items-center justify-center space-x-1.5"
              >
                <span>Book Festival Pass</span>
                <FaChevronRight className="w-2.5 h-2.5 text-volt-400" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── Pricing / Ticket Tiers Section ── */}
      <section id="packages-section" className="bg-slate-50 py-24 px-6 md:px-12 relative overflow-hidden border-t border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-volt-600 font-heading font-bold text-xs uppercase tracking-widest mb-3 inline-block">
              All-Inclusive Festival Access
            </span>
            <h2 className="text-4xl font-heading font-extrabold text-darkslate-900 mb-4">
              FESTIVAL TICKETS &amp; REGISTRATION
            </h2>
            <p className="text-gray-600 font-sans text-base md:text-lg max-w-2xl mx-auto">
              Every ticket includes full admission to <strong>both Session 1 (The Tennis Carnival)</strong> and <strong>Session 2 (Party Night)</strong>!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
            {festivalConfig.packages.map((pkg) => {
              const isSelected = selectedPackage === pkg.id;
              const isEarlyBird = pkg.id === "early-bird";

              return (
                <div
                  key={pkg.id}
                  className={`bg-white rounded-3xl border transition-all duration-300 shadow-md hover:shadow-xl p-8 flex flex-col justify-between relative transform hover:-translate-y-1.5 ${
                    isEarlyBird
                      ? "border-2 border-volt-400 ring-4 ring-volt-400/20"
                      : isSelected
                      ? "border-2 border-darkslate-900 ring-2 ring-darkslate-900/10"
                      : "border-slate-100"
                  }`}
                >
                  {isEarlyBird && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-volt-400 text-darkslate-950 px-4 py-1 rounded-full text-[10px] font-heading font-black uppercase tracking-widest flex items-center gap-1.5 shadow-md">
                      <FaCrown className="text-xs" /> Limited Time • Save 50%
                    </div>
                  )}

                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className={`text-[11px] uppercase font-heading font-bold px-3 py-1 rounded-full ${isEarlyBird ? 'bg-volt-50 text-darkslate-900 border border-volt-200' : 'bg-slate-100 text-slate-700'}`}>
                        {pkg.badge}
                      </span>
                      <span className="text-xs text-gray-500 font-bold">{pkg.period}</span>
                    </div>

                    <h3 className="text-3xl font-heading font-extrabold text-darkslate-900 mb-2">
                      {pkg.name}
                    </h3>

                    <div className="mb-6 pt-2">
                      <div className="flex items-baseline gap-1">
                        <span className="text-base font-bold text-emerald-600">{pkg.currency}</span>
                        <span className="text-5xl font-heading font-extrabold text-darkslate-900">
                          {pkg.price.toLocaleString()}
                        </span>
                      </div>
                      <span className="text-xs text-gray-500 font-sans mt-1 block">
                        {isEarlyBird ? "Available from 9th Nov to 30th Nov" : "Late / Standard entry pass"}
                      </span>
                    </div>

                    <div className="border-t border-slate-100 pt-5 mb-6">
                      <p className="text-xs uppercase font-heading font-bold text-gray-500 mb-3">Ticket Includes:</p>
                      <ul className="space-y-3 text-sm text-gray-600 font-sans">
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
                    className={`w-full py-4 rounded-full font-heading font-extrabold text-xs uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-2 ${
                      isEarlyBird
                        ? "bg-volt-400 hover:bg-volt-300 text-darkslate-950 shadow-md glow-volt-hover"
                        : isSelected
                        ? "bg-darkslate-950 text-white font-black shadow-md"
                        : "bg-slate-900 hover:bg-slate-800 text-white"
                    }`}
                  >
                    {isSelected ? "Selected ✓" : `Book ${pkg.name}`}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Booking Form & MoMo Payment Instructions ── */}
      <section id="festival-booking-form" className="py-24 px-6 md:px-12 bg-white relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-emerald-600 font-heading font-bold text-xs uppercase tracking-widest mb-3 inline-block">
              Registration &amp; Payment
            </span>
            <h2 className="text-4xl font-heading font-extrabold text-darkslate-900 mb-3">
              RESERVE YOUR FESTIVAL SPOT
            </h2>
            <p className="text-gray-600 font-sans text-base max-w-2xl mx-auto">
              Fill in your details below and confirm via MTN Mobile Money. For instant confirmation, connect directly via WhatsApp.
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
                    Thank you! We've recorded your registration for the DukeTennis Festival 2026. Please complete your payment via MTN MoMo to secure your ticket.
                  </p>
                  
                  <div className="bg-volt-50 border border-volt-200 rounded-2xl p-5 w-full max-w-md text-left mb-6 text-sm">
                    <p className="font-bold text-darkslate-900 mb-2">Next Steps:</p>
                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                      <li>Send payment via MTN MoMo to <strong>0530051334</strong></li>
                      <li>Reference: <strong>[Your Name] - Festival 2026</strong></li>
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
                          ? "Please select a ticket before submitting."
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
                        <FaCrown className="text-gray-400 w-3.5 h-3.5" /> Select Ticket
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
                      <option value="" disabled>— Select a ticket —</option>
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
                      Additional Notes (Optional)
                    </label>
                    <textarea
                      name="notes"
                      rows={3}
                      value={formData.notes}
                      onChange={handleInputChange}
                      placeholder="e.g. Bringing a racket, tennis level, group notes..."
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
                    Use the details below to complete payment for your chosen ticket. Tickets are confirmed upon payment receipt.
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
                      className="p-3 bg-white hover:bg-slate-100 text-darkslate-900 border border-slate-200 rounded-xl transition flex items-center gap-1.5 text-xs font-heading font-bold shadow-sm cursor-pointer"
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
                      <strong className="text-darkslate-900">Reference:</strong> [Your Name] - Festival 2026
                    </p>
                  </div>

                  {/* Verification Contact */}
                  <div className="border-t border-slate-100 pt-5">
                    <p className="text-xs text-gray-500 mb-2 font-sans">
                      For inquiries &amp; payment confirmation:
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
                    Head Coach &amp; Festival Organizer
                  </p>
                  <div className="flex items-center gap-2 text-xs text-gray-500 mt-1">
                    <FaMapMarkerAlt className="text-slate-400" /> Rolider Sports Complex, Ghana
                  </div>
                </div>
              </div>

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
