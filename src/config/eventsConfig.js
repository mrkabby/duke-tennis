// Duke Tennis Seasonal Events Configuration
// Centralized config to manage event lifecycle, pricing, details, and auto-expiry.

export const festivalConfig = {
  id: "december-festival",
  slug: "december-festival",
  name: "DUKETENNIS FESTIVAL 2026",
  title: "DUKETENNIS FESTIVAL 2026 – The Homecoming",
  subtitle: "The Homecoming • The December Experience",
  tagline: "Tennis. Music. Community. The December Experience.",
  dates: "24th December 2026",
  startDate: "2026-12-24",
  endDate: "2026-12-24",
  startTime: "5:00 PM",
  time: "Starts at 5:00 PM",
  
  // Set to true to force active, false to force disabled/expired, or null to auto-expire based on endDate
  forceActive: null,

  location: "Rolider Sports Complex, Accra, Ghana",
  venue: "Rolider Sports Complex",

  // Early Bird Period
  earlyBird: {
    startDate: "2026-11-09",
    endDate: "2026-11-30",
    label: "From 9th November to 30th November",
    price: 250,
  },

  // Payment & Contact Info (as specified on official festival flyer)
  momo: {
    number: "0530051334",
    name: "George Nyarkoh / DUKETENNIS",
    network: "MTN Mobile Money",
    instructions: "Send payment with your Full Name + Festival 2026 as the reference, then share screenshot for instant confirmation."
  },
  contact: {
    phone: "0558315717",
    formattedPhone: "+233 55 831 5717",
    whatsappLink: "https://wa.me/233558315717"
  },

  // Event Highlights
  programs: [
    {
      id: "tennis-showcase",
      number: "01",
      shortTitle: "The Homecoming Tennis Showcase",
      title: "Homecoming Tennis Showcase & Matches",
      venue: "Rolider Sports Complex",
      dates: "24th December 2026",
      badge: "Starts at 5:00 PM",
      tag: "Feature 1 • Court Play",
      colorTheme: "volt",
      description: "High-octane court action, friendly singles and doubles exhibition matches, and high-energy rally games under the Rolider floodlights.",
      packageAvailability: "Included in all tickets"
    },
    {
      id: "court-games",
      number: "02",
      shortTitle: "Fun Court Games & Skills Challenges",
      title: "Skills Challenges & Interactive Drills",
      venue: "Rolider Sports Complex",
      dates: "24th December 2026",
      badge: "All Levels Welcome",
      tag: "Feature 2 • Challenges",
      colorTheme: "emerald",
      description: "Fast-paced target serving, king-of-the-court challenges, coordination drills, and exciting prize contests for beginner, intermediate, and advanced players.",
      packageAvailability: "Included in all tickets"
    },
    {
      id: "celebration",
      number: "03",
      shortTitle: "Evening Celebration & Networking",
      title: "December Experience Celebration & Networking",
      venue: "Rolider Sports Complex",
      dates: "24th December 2026",
      badge: "Evening Vibe",
      tag: "Feature 3 • Celebration",
      colorTheme: "amber",
      description: "Celebrate the festive season with vibrant music, refreshments, end-of-year recognitions, and community networking with tennis enthusiasts.",
      packageAvailability: "Included in all tickets"
    }
  ],

  // 2 Festival Ticket Tiers
  packages: [
    {
      id: "early-bird",
      name: "Early Bird Ticket",
      price: 250,
      currency: "Ghc",
      badge: "Save Ghc 250 • Limited Time",
      colorTheme: "volt",
      popular: true,
      period: "From 9th November to 30th November",
      includes: [
        "Full access to DukeTennis Festival 2026: The Homecoming",
        "Event Date: 24th December 2026 (Starts at 5:00 PM)",
        "Venue: Rolider Sports Complex, Accra",
        "Court tennis sessions, games & fun challenges",
        "Evening celebration, music, refreshments & networking",
        "Early bird discount (Valid 9th – 30th Nov)"
      ]
    },
    {
      id: "standard",
      name: "Standard Ticket",
      price: 500,
      currency: "Ghc",
      badge: "Late / Regular Pass",
      colorTheme: "slate",
      popular: false,
      period: "Standard / Late Entry",
      includes: [
        "Full access to DukeTennis Festival 2026: The Homecoming",
        "Event Date: 24th December 2026 (Starts at 5:00 PM)",
        "Venue: Rolider Sports Complex, Accra",
        "Court tennis sessions, games & fun challenges",
        "Evening celebration, music, refreshments & networking",
        "Standard event pass"
      ]
    }
  ]
};

/**
 * Checks whether the festival is currently active.
 * Automatically marks as inactive after the event ends,
 * or allows manual override via festivalConfig.forceActive.
 */
export const isFestivalActive = () => {
  if (typeof festivalConfig.forceActive === "boolean") {
    return festivalConfig.forceActive;
  }
  const now = new Date();
  const expiryDate = new Date(`${festivalConfig.endDate}T23:59:59`);
  return now <= expiryDate;
};
