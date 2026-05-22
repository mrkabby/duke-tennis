import React, { useState, useRef } from 'react';
import emailjs from 'emailjs-com';
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
  FaCheckCircle,
  FaExclamationCircle,
  FaPaperPlane,
} from 'react-icons/fa';
import Navbar from './Navbar';
import Footer from './Footer';

const INFO_CARDS = [
  {
    icon: <FaMapMarkerAlt className="text-volt-400 text-2xl" />,
    title: 'Location',
    lines: ['Rolider Sports Complex', '9 Pacific Street, Shiashie', 'Accra, Ghana'],
  },
  {
    icon: <FaPhoneAlt className="text-volt-400 text-2xl" />,
    title: 'Phone',
    lines: ['(+233) 55 831 5717'],
  },
  {
    icon: <FaEnvelope className="text-volt-400 text-2xl" />,
    title: 'Email',
    lines: ['info@duketennis.org'],
  },
  {
    icon: <FaClock className="text-volt-400 text-2xl" />,
    title: 'Training Hours',
    lines: ['Mon – Fri: 6:00 AM – 8:00 PM', 'Sat – Sun: 7:00 AM – 6:00 PM'],
  },
];

const STATUS = { IDLE: 'idle', LOADING: 'loading', SUCCESS: 'success', ERROR: 'error' };

function Contact() {
  const formRef = useRef(null);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
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
    const templateID = process.env.REACT_APP_EMAILJS_CONTACT_TEMPLATE_ID;
    const userID = process.env.REACT_APP_EMAILJS_USER_ID;

    const templateParams = {
      first_name: formData.firstName,
      last_name: formData.lastName,
      from_email: formData.email,
      phone: formData.phone,
      subject: formData.subject,
      message: formData.message,
    };

    emailjs
      .send(serviceID, templateID, templateParams, userID)
      .then(() => {
        setStatus(STATUS.SUCCESS);
        setFormData({ firstName: '', lastName: '', email: '', phone: '', subject: '', message: '' });
      })
      .catch(() => {
        setStatus(STATUS.ERROR);
      });
  };

  const resetForm = () => setStatus(STATUS.IDLE);

  return (
    <>
      <Navbar />
      <div className="bg-slate-50 min-h-screen pt-[73px]">

        {/* ── Hero Banner ── */}
        <header className="relative bg-darkslate-950 text-white py-28 px-6 text-center overflow-hidden">
          {/* Decorative volt glow blobs */}
          <div className="absolute -top-20 -left-20 w-96 h-96 bg-volt-400/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-volt-400/5 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto">
            <span className="text-volt-400 font-heading font-extrabold text-xs uppercase tracking-widest mb-3 inline-block">
              We'd Love to Hear From You
            </span>
            <h1 className="text-4xl md:text-5xl font-heading font-extrabold text-white tracking-tight">
              Get in Touch
            </h1>
            <p className="mt-4 text-gray-400 font-sans text-base max-w-xl mx-auto leading-relaxed">
              Have a question about our programmes, pricing, or schedules? Drop us a message and we'll get back to you promptly.
            </p>
          </div>
        </header>

        {/* ── Info Cards ── */}
        <section className="max-w-6xl mx-auto px-6 md:px-12 -mt-12 relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {INFO_CARDS.map((card) => (
              <div
                key={card.title}
                className="bg-white border border-slate-100 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col items-center text-center"
              >
                <div className="w-14 h-14 bg-darkslate-950 rounded-xl flex items-center justify-center mb-4 shadow-inner">
                  {card.icon}
                </div>
                <h3 className="font-heading font-extrabold text-darkslate-900 mb-2">{card.title}</h3>
                {card.lines.map((line) => (
                  <p key={line} className="text-sm text-gray-500 font-sans leading-relaxed">{line}</p>
                ))}
              </div>
            ))}
          </div>
        </section>

        {/* ── Form + Map ── */}
        <section className="max-w-6xl mx-auto px-6 md:px-12 py-20">
          <div className="flex flex-col lg:flex-row gap-12 lg:items-start">

            {/* Left: Contact Form */}
            <div className="w-full lg:w-3/5">
              <div className="bg-white border border-slate-100 shadow-xl rounded-3xl p-8 md:p-10 relative overflow-hidden">
                {/* Top colour bar */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-volt-400 to-emerald-500" />

                {status === STATUS.SUCCESS ? (
                  /* ── Success State ── */
                  <div className="flex flex-col items-center justify-center py-16 text-center">
                    <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mb-6 animate-bounce">
                      <FaCheckCircle className="text-emerald-500 text-4xl" />
                    </div>
                    <h2 className="text-2xl font-heading font-extrabold text-darkslate-900 mb-3">
                      Message Sent!
                    </h2>
                    <p className="text-gray-500 font-sans text-sm max-w-xs mx-auto leading-relaxed">
                      Thanks for reaching out. We'll respond to your message within 24 hours.
                    </p>
                    <button
                      onClick={resetForm}
                      className="mt-8 bg-darkslate-900 hover:bg-darkslate-800 text-white font-heading font-bold text-xs uppercase tracking-widest py-3 px-8 rounded-full transition-all duration-300"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <>
                    <div className="flex items-center space-x-3 mb-8">
                      <div className="w-10 h-10 rounded-xl bg-darkslate-950 flex items-center justify-center">
                        <FaPaperPlane className="text-volt-400 w-4 h-4" />
                      </div>
                      <h2 className="text-2xl font-heading font-extrabold text-darkslate-900">
                        Send Us a Message
                      </h2>
                    </div>

                    {status === STATUS.ERROR && (
                      <div className="mb-6 flex items-center gap-3 bg-red-50 border border-red-200 text-red-700 rounded-xl px-4 py-3 text-sm font-sans">
                        <FaExclamationCircle className="flex-shrink-0" />
                        <span>Something went wrong. Please try again or email us directly.</span>
                      </div>
                    )}

                    <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
                      {/* Name row */}
                      <div className="flex flex-col sm:flex-row gap-4">
                        <div className="flex-1">
                          <label className="block text-sm font-heading font-bold text-gray-700 mb-2">
                            First Name
                          </label>
                          <input
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            placeholder="e.g. Kofi"
                            className="w-full bg-slate-50 border border-slate-200 text-slate-800 text-sm rounded-xl p-3.5 focus:bg-white focus:outline-none focus:ring-2 focus:ring-volt-400 focus:border-volt-400 transition-all shadow-inner"
                            required
                          />
                        </div>
                        <div className="flex-1">
                          <label className="block text-sm font-heading font-bold text-gray-700 mb-2">
                            Last Name
                          </label>
                          <input
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            placeholder="e.g. Mensah"
                            className="w-full bg-slate-50 border border-slate-200 text-slate-800 text-sm rounded-xl p-3.5 focus:bg-white focus:outline-none focus:ring-2 focus:ring-volt-400 focus:border-volt-400 transition-all shadow-inner"
                            required
                          />
                        </div>
                      </div>

                      {/* Email & Phone row */}
                      <div className="flex flex-col sm:flex-row gap-4">
                        <div className="flex-1">
                          <label className="block text-sm font-heading font-bold text-gray-700 mb-2">
                            Email Address
                          </label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="you@example.com"
                            className="w-full bg-slate-50 border border-slate-200 text-slate-800 text-sm rounded-xl p-3.5 focus:bg-white focus:outline-none focus:ring-2 focus:ring-volt-400 focus:border-volt-400 transition-all shadow-inner"
                            required
                          />
                        </div>
                        <div className="flex-1">
                          <label className="block text-sm font-heading font-bold text-gray-700 mb-2">
                            Phone <span className="text-gray-400 font-normal">(optional)</span>
                          </label>
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="+233 XX XXX XXXX"
                            className="w-full bg-slate-50 border border-slate-200 text-slate-800 text-sm rounded-xl p-3.5 focus:bg-white focus:outline-none focus:ring-2 focus:ring-volt-400 focus:border-volt-400 transition-all shadow-inner"
                          />
                        </div>
                      </div>

                      {/* Subject */}
                      <div>
                        <label className="block text-sm font-heading font-bold text-gray-700 mb-2">
                          Subject
                        </label>
                        <select
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          className="w-full bg-slate-50 border border-slate-200 text-slate-800 text-sm rounded-xl p-3.5 focus:bg-white focus:outline-none focus:ring-2 focus:ring-volt-400 focus:border-volt-400 transition-all shadow-inner cursor-pointer"
                          required
                        >
                          <option value="">Select a topic...</option>
                          <option value="Programme Enquiry">Programme Enquiry</option>
                          <option value="Pricing & Packages">Pricing &amp; Packages</option>
                          <option value="Kids / Junior Training">Kids / Junior Training</option>
                          <option value="Court Hire">Court Hire</option>
                          <option value="Partnership / Sponsorship">Partnership / Sponsorship</option>
                          <option value="General Question">General Question</option>
                        </select>
                      </div>

                      {/* Message */}
                      <div>
                        <label className="block text-sm font-heading font-bold text-gray-700 mb-2">
                          Message
                        </label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          rows={5}
                          placeholder="Tell us how we can help..."
                          className="w-full bg-slate-50 border border-slate-200 text-slate-800 text-sm rounded-xl p-3.5 focus:bg-white focus:outline-none focus:ring-2 focus:ring-volt-400 focus:border-volt-400 transition-all shadow-inner resize-none"
                          required
                        />
                      </div>

                      {/* Submit */}
                      <button
                        type="submit"
                        disabled={status === STATUS.LOADING}
                        id="contact-submit-btn"
                        className="w-full bg-darkslate-900 hover:bg-darkslate-800 disabled:opacity-60 disabled:cursor-not-allowed text-white font-heading font-bold text-xs uppercase tracking-widest py-4 rounded-xl transition-all duration-300 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-volt-400 mt-2 shadow-md flex items-center justify-center gap-3"
                      >
                        {status === STATUS.LOADING ? (
                          <>
                            <svg className="animate-spin h-4 w-4 text-volt-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                            </svg>
                            Sending…
                          </>
                        ) : (
                          <>
                            <FaPaperPlane className="text-volt-400" />
                            Send Message
                          </>
                        )}
                      </button>
                    </form>
                  </>
                )}
              </div>
            </div>

            {/* Right: Map + Quick Links */}
            <div className="w-full lg:w-2/5 space-y-6">
              {/* Map */}
              <div className="bg-white border border-slate-100 rounded-3xl overflow-hidden shadow-xl">
                <div className="px-6 pt-6 pb-3 flex items-center gap-3">
                  <div className="w-8 h-8 bg-darkslate-950 rounded-lg flex items-center justify-center">
                    <FaMapMarkerAlt className="text-volt-400 text-sm" />
                  </div>
                  <h3 className="font-heading font-extrabold text-darkslate-900">Find Us</h3>
                </div>
                <div className="h-72">
                  <iframe
                    className="w-full h-full"
                    src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d2721.78289108539!2d-0.18759793187295273!3d5.625058638853815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0xfdf9b891566b4b7%3A0xf11e6d745f3394e5!2sJRG7%2B2W%20ROLIDER%20PROPERTY%20-%20SHIASHIE%2C%20Accra!3m2!1d5.625048!2d-0.18518669999999998!5e0!3m2!1sen!2sgh!4v1736990581842!5m2!1sen!2sgh"
                    loading="lazy"
                    title="Duke Tennis Location Map"
                    style={{ border: 0 }}
                    allowFullScreen
                  />
                </div>
                <div className="px-6 py-4 bg-slate-50 border-t border-slate-100">
                  <p className="text-xs text-gray-500 font-sans">
                    Rolider Sports Complex · 9 Pacific St, Shiashie, Accra
                  </p>
                </div>
              </div>

              {/* Quick contact actions */}
              <div className="bg-darkslate-950 rounded-3xl p-6 shadow-xl">
                <h3 className="font-heading font-extrabold text-white mb-4 text-sm uppercase tracking-widest">
                  Prefer Direct Contact?
                </h3>
                <div className="space-y-3">
                  <a
                    href="tel:+233558315717"
                    id="contact-phone-link"
                    className="flex items-center gap-3 bg-white/5 hover:bg-volt-400/10 border border-white/10 hover:border-volt-400/40 rounded-xl px-4 py-3 transition-all duration-300 group"
                  >
                    <FaPhoneAlt className="text-volt-400 flex-shrink-0" />
                    <span className="text-gray-300 group-hover:text-white text-sm font-sans transition-colors">
                      (+233) 55 831 5717
                    </span>
                  </a>
                  <a
                    href="mailto:info@duketennis.org"
                    id="contact-email-link"
                    className="flex items-center gap-3 bg-white/5 hover:bg-volt-400/10 border border-white/10 hover:border-volt-400/40 rounded-xl px-4 py-3 transition-all duration-300 group"
                  >
                    <FaEnvelope className="text-volt-400 flex-shrink-0" />
                    <span className="text-gray-300 group-hover:text-white text-sm font-sans transition-colors">
                      info@duketennis.org
                    </span>
                  </a>
                </div>
              </div>
            </div>

          </div>
        </section>

      </div>
      <Footer />
    </>
  );
}

export default Contact;
