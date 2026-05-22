import React, { useState } from "react";
import cardioImage from "../images/people.jpg";
import emailjs from "emailjs-com";
import Navbar from "./Navbar";
import Footer from "./Footer";
import {
  FaCalendarAlt,
  FaCheckCircle,
  FaExclamationCircle,
  FaUserAlt,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";

const STATUS = { IDLE: "idle", LOADING: "loading", SUCCESS: "success", ERROR: "error" };

const PACKAGES = [
  { label: "3x Weekly – GHC 1,500 (Intensive)", value: "3x Weekly – GHC 1500 (Intensive)" },
  { label: "2x Weekly – GHC 1,200 (Semi-Intensive)", value: "2x Weekly – GHC 1200 (Semi-Intensive)" },
  { label: "1x Weekly – GHC 700 (Regular)", value: "1x Weekly – GHC 700 (Regular)" },
  { label: "Walk-In Group – GHC 200/session", value: "Walk-In – GHC 200" },
  { label: "One-on-One – GHC 500/session", value: "One-on-One – GHC 500" },
  { label: "One-on-One Monthly – GHC 2,000", value: "One-on-One Monthly – GHC 2000" },
  { label: "Kids Lessons 2x a Week – GHC 1,000", value: "Kids Lessons 2x a Week – GHC 1000" },
];

const TERMS = [
  "Booking & payment must be made at least 48 hrs in advance.",
  "First-come, first-serve basis – payment confirms your slot.",
  "No session extension if client arrives late to court.",
  "Cancellations under 6 hrs notice count as a completed session.",
  "Weather-related cancellations will be rescheduled at no extra cost.",
  "Bookings are non-transferable between players.",
  "Payment accepted via bank transfer or mobile money.",
];

const CheckIcon = () => (
  <svg
    className="w-5 h-5 text-volt-400 mr-2.5 flex-shrink-0 mt-0.5"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);

const InputField = ({ label, icon: Icon, children }) => (
  <div>
    <label className="block text-sm font-heading font-bold text-gray-700 mb-2 flex items-center gap-2">
      {Icon && <Icon className="text-gray-400 w-3.5 h-3.5" />}
      {label}
    </label>
    {children}
  </div>
);

const BookingPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    program: "",
    date: "",
    notes: "",
  });
  const [status, setStatus] = useState(STATUS.IDLE);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus(STATUS.LOADING);

    const serviceID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    console.log('EmailJS Service ID:', serviceID);
    const templateID = process.env.REACT_APP_EMAILJS_BOOKING_TEMPLATE_ID;
    console.log('EmailJS Booking Template ID:', templateID);
    const userID = process.env.REACT_APP_EMAILJS_USER_ID;
    console.log('EmailJS User ID:', userID);

    const emailParams = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      program: formData.program,
      date: formData.date,
      notes: formData.notes || "None",
    };

    emailjs
      .send(serviceID, templateID, emailParams, userID)
      .then(() => {
        setStatus(STATUS.SUCCESS);
        setFormData({ name: "", email: "", phone: "", program: "", date: "", notes: "" });
      })
      .catch((error) => {
        console.error('EmailJS Error:', error);
        setStatus(STATUS.ERROR);
      });
  };

  const resetForm = () => setStatus(STATUS.IDLE);

  const goToForm = () => {
    const el = document.getElementById("bookingForm");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  /* today's date string for min attribute */
  const today = new Date().toISOString().split("T")[0];

  return (
    <div className="bg-slate-50 min-h-screen pt-[73px]">
      <Navbar />

      {/* ── Hero Banner ── */}
      <header
        className="relative bg-cover bg-center text-white py-28 px-6 text-center overflow-hidden"
        style={{ backgroundImage: `url(${cardioImage})` }}
      >
        <div className="absolute inset-0 bg-darkslate-950/80 z-0" />
        <div className="relative z-10 max-w-3xl mx-auto">
          <span className="text-volt-400 font-heading font-extrabold text-xs uppercase tracking-widest mb-3 inline-block">
            Start Your Journey
          </span>
          <h1 className="text-4xl md:text-5xl font-heading font-extrabold text-white tracking-tight">
            Book Your Tennis Class
          </h1>
          <p className="mt-4 text-gray-300 font-sans text-base max-w-xl mx-auto leading-relaxed">
            Flexible schedules, world-class athletic facilities, and tailored
            high-performance training plans across all ages.
          </p>
          <button
            onClick={goToForm}
            id="booking-hero-cta"
            className="mt-8 bg-volt-400 hover:bg-volt-300 text-darkslate-950 font-heading font-bold text-xs uppercase tracking-widest py-4 px-8 rounded-full transition-all duration-300 shadow-lg glow-volt-hover hover:scale-105"
          >
            Reserve Your Slot
          </button>
        </div>
      </header>

      {/* ── Form + Pricing ── */}
      <section id="bookingForm" className="max-w-7xl mx-auto py-20 px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-12 lg:items-start">

          {/* ── Left Panel: Booking Form ── */}
          <div className="w-full lg:w-1/2 bg-white border border-slate-100 shadow-xl rounded-3xl p-8 md:p-10 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-volt-400 to-emerald-500" />

            {status === STATUS.SUCCESS ? (
              /* Success State */
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <div className="w-24 h-24 bg-green-50 rounded-full flex items-center justify-center mb-6">
                  <FaCheckCircle className="text-emerald-500 text-5xl" />
                </div>
                <h2 className="text-2xl font-heading font-extrabold text-darkslate-900 mb-3">
                  Booking Received!
                </h2>
                <p className="text-gray-500 font-sans text-sm max-w-xs mx-auto leading-relaxed">
                  We've received your request and will send a confirmation email
                  shortly. Please await payment instructions to secure your slot.
                </p>
                <div className="mt-6 bg-volt-50 border border-volt-200 rounded-2xl px-5 py-4 text-sm text-gray-700 font-sans text-left w-full max-w-sm">
                  <p className="font-bold text-darkslate-900 mb-1">Next steps:</p>
                  <ul className="list-disc list-inside space-y-1 text-gray-600">
                    <li>Check your inbox for our confirmation</li>
                    <li>Complete payment via MoMo or bank transfer</li>
                    <li>Arrive 10 minutes before your session</li>
                  </ul>
                </div>
                <button
                  onClick={resetForm}
                  className="mt-8 bg-darkslate-900 hover:bg-darkslate-800 text-white font-heading font-bold text-xs uppercase tracking-widest py-3 px-8 rounded-full transition-all duration-300"
                >
                  Make Another Booking
                </button>
              </div>
            ) : (
              <>
                <div className="flex items-center space-x-3 mb-8">
                  <div className="w-10 h-10 rounded-xl bg-darkslate-950 flex items-center justify-center">
                    <FaCalendarAlt className="text-volt-400 w-4 h-4" />
                  </div>
                  <h2 className="text-2xl font-heading font-extrabold text-darkslate-900">
                    Reserve Your Spot
                  </h2>
                </div>

                {status === STATUS.ERROR && (
                  <div className="mb-6 flex items-center gap-3 bg-red-50 border border-red-200 text-red-700 rounded-xl px-4 py-3 text-sm font-sans">
                    <FaExclamationCircle className="flex-shrink-0" />
                    <span>Something went wrong. Please try again or call us directly.</span>
                  </div>
                )}

                <form className="space-y-5" onSubmit={handleSubmit}>
                  {/* Full Name */}
                  <InputField label="Full Name" icon={FaUserAlt}>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Kofi Mensah"
                      className="w-full bg-slate-50 border border-slate-200 text-slate-800 text-sm rounded-xl p-3.5 focus:bg-white focus:outline-none focus:ring-2 focus:ring-volt-400 focus:border-volt-400 transition-all shadow-inner"
                      required
                    />
                  </InputField>

                  {/* Email & Phone */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <InputField label="Email Address" icon={FaEnvelope}>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="you@example.com"
                        className="w-full bg-slate-50 border border-slate-200 text-slate-800 text-sm rounded-xl p-3.5 focus:bg-white focus:outline-none focus:ring-2 focus:ring-volt-400 focus:border-volt-400 transition-all shadow-inner"
                        required
                      />
                    </InputField>
                    <InputField label="Phone Number" icon={FaPhoneAlt}>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+233 XX XXX XXXX"
                        className="w-full bg-slate-50 border border-slate-200 text-slate-800 text-sm rounded-xl p-3.5 focus:bg-white focus:outline-none focus:ring-2 focus:ring-volt-400 focus:border-volt-400 transition-all shadow-inner"
                        required
                      />
                    </InputField>
                  </div>

                  {/* Program */}
                  <InputField label="Select Programme Package">
                    <select
                      name="program"
                      value={formData.program}
                      onChange={handleChange}
                      className="w-full bg-slate-50 border border-slate-200 text-slate-800 text-sm rounded-xl p-3.5 focus:bg-white focus:outline-none focus:ring-2 focus:ring-volt-400 focus:border-volt-400 transition-all shadow-inner cursor-pointer"
                      required
                    >
                      <option value="">Choose a package…</option>
                      {PACKAGES.map((p) => (
                        <option key={p.value} value={p.value}>
                          {p.label}
                        </option>
                      ))}
                    </select>
                  </InputField>

                  {/* Preferred Date */}
                  <InputField label="Preferred Start Date">
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      min={today}
                      onChange={handleChange}
                      className="w-full bg-slate-50 border border-slate-200 text-slate-800 text-sm rounded-xl p-3.5 focus:bg-white focus:outline-none focus:ring-2 focus:ring-volt-400 focus:border-volt-400 transition-all shadow-inner cursor-pointer"
                      required
                    />
                  </InputField>

                  {/* Notes */}
                  <InputField label="Additional Notes (optional)">
                    <textarea
                      name="notes"
                      value={formData.notes}
                      onChange={handleChange}
                      rows={3}
                      placeholder="E.g. experience level, preferred time slot, injuries..."
                      className="w-full bg-slate-50 border border-slate-200 text-slate-800 text-sm rounded-xl p-3.5 focus:bg-white focus:outline-none focus:ring-2 focus:ring-volt-400 focus:border-volt-400 transition-all shadow-inner resize-none"
                    />
                  </InputField>

                  {/* Submit */}
                  <button
                    type="submit"
                    id="booking-submit-btn"
                    disabled={status === STATUS.LOADING}
                    className="w-full bg-darkslate-900 hover:bg-darkslate-800 disabled:opacity-60 disabled:cursor-not-allowed text-white font-heading font-bold text-xs uppercase tracking-widest py-4 rounded-xl transition-all duration-300 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-volt-400 mt-2 shadow-md flex items-center justify-center gap-3"
                  >
                    {status === STATUS.LOADING ? (
                      <>
                        <svg
                          className="animate-spin h-4 w-4 text-volt-400"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8v8z"
                          />
                        </svg>
                        Processing…
                      </>
                    ) : (
                      <>
                        <FaCalendarAlt className="text-volt-400" />
                        Confirm Booking
                      </>
                    )}
                  </button>
                </form>
              </>
            )}
          </div>

          {/* ── Right Panel: Packages & Terms ── */}
          <div className="w-full lg:w-1/2 space-y-8">
            {/* Pricing */}
            <div>
              <span className="text-emerald-600 font-heading font-bold text-xs uppercase tracking-widest mb-3 inline-block">
                Academy Pricing
              </span>
              <h3 className="text-3xl font-heading font-extrabold text-darkslate-900 mb-8">
                Training Packages
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Group Monthly */}
                <div className="bg-white border border-slate-100 p-6 rounded-2xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                  <h4 className="font-heading font-extrabold text-darkslate-900 border-b border-slate-100 pb-3 mb-4">
                    Group Monthly
                  </h4>
                  <ul className="space-y-3.5 text-sm text-gray-600 font-sans">
                    {[
                      ["3x Weekly", "GHC 1,500"],
                      ["2x Weekly", "GHC 1,200"],
                      ["1x Weekly", "GHC 700"],
                    ].map(([label, price]) => (
                      <li key={label} className="flex justify-between">
                        <span>{label}:</span>
                        <span className="font-bold text-darkslate-900">{price}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Special Training */}
                <div className="bg-white border border-slate-100 p-6 rounded-2xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                  <h4 className="font-heading font-extrabold text-darkslate-900 border-b border-slate-100 pb-3 mb-4">
                    Special Training
                  </h4>
                  <ul className="space-y-3.5 text-sm text-gray-600 font-sans">
                    {[
                      ["Walk-In Group", "GHC 200/s"],
                      ["One-on-One", "GHC 500/s"],
                      ["Kids (2x/wk)", "GHC 1,000"],
                    ].map(([label, price]) => (
                      <li key={label} className="flex justify-between">
                        <span>{label}:</span>
                        <span className="font-bold text-darkslate-900">{price}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <p className="text-xs font-bold text-gray-500 italic mt-3.5 pl-1">
                * Court booking fees are not included in monthly package pricing.
              </p>
            </div>

            {/* Terms */}
            <div className="bg-white border border-slate-100 rounded-3xl p-6 md:p-8 shadow-sm">
              <h4 className="font-heading font-extrabold text-lg text-emerald-700 mb-6 flex items-center gap-2">
                <FaExclamationCircle className="text-volt-500" />
                Booking &amp; Cancellation Terms
              </h4>
              <ul className="grid grid-cols-1 gap-3.5 text-sm">
                {TERMS.map((term, idx) => (
                  <li key={idx} className="flex items-start text-gray-600 leading-normal">
                    <CheckIcon />
                    <span>{term}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 pt-6 border-t border-slate-100 flex items-center gap-2.5 text-xs text-gray-500 font-bold italic">
                <FaCheckCircle className="text-volt-500 w-4 h-4 flex-shrink-0" />
                <span>By booking, you agree to these terms and conditions.</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BookingPage;
