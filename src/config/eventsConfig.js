// Duke Tennis Seasonal Events Configuration
// Centralized config to manage event lifecycle, pricing, details, and auto-expiry.

export const festivalConfig = {
  id: "december-festival",
  slug: "december-festival",
  name: "DUKETENNIS FESTIVAL 2026",
  title: "DUKETENNIS FESTIVAL 2026 – The Homecoming",
  subtitle: "The Homecoming • The December Experience",
  tagline: "Two Sessions in One Day: The Tennis Carnival & Party Night.",
  dates: "24th December 2026",
  startDate: "2026-12-24",
  endDate: "2026-12-24",
  startTime: "7:00 AM",
  scheduleOverview: "Two Sessions: 7:00 AM – 12:00 PM & 8:00 PM till you drop",
  
  // Set to true to force active, false to force disabled/expired, or null to auto-expire based on endDate
  forceActive: null,

  location: "Rolider Sports Complex, Accra, Ghana",
  venue: "Rolider Sports Complex",

  // Two Official Festival Sessions on 24th December
  sessions: [
    {
      id: "session-1",
      number: "01",
      name: "The Tennis Carnival",
      time: "7:00 AM – 12:00 Noon",
      dressCode: "Tennis Attire",
      venue: "Rolider Sports Complex",
      tag: "Session 1 • Day Session",
      badge: "7:00 AM – 12:00 PM",
      colorTheme: "volt",
      description: "High-octane court action, interactive tennis drills, friendly matches, target serving challenges, and fun rally games under certified PTR coaching.",
      highlights: [
        "Friendly matches & open court play",
        "Target serving & rally challenges",
        "King of the Court mini-tourney",
        "Interactive drills for all skill levels"
      ]
    },
    {
      id: "session-2",
      number: "02",
      name: "Party Night",
      time: "8:00 PM till you drop (TYD)",
      dressCode: "No Tennis Outfit",
      venue: "Rolider Sports Complex",
      tag: "Session 2 • Night Party",
      badge: "8:00 PM till you drop",
      colorTheme: "amber",
      description: "Let loose and celebrate the holidays! Vibrant DJ music, delicious food & refreshments, year-end recognitions, dancing, and networking with the tennis family.",
      highlights: [
        "DJ music & party entertainment",
        "Delicious refreshments & drinks",
        "End-of-year community awards",
        "Networking & celebration into the night"
      ]
    }
  ],

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

  // 2 Festival Ticket Tiers (both include access to both sessions)
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
        "Full access to BOTH Sessions on 24th December 2026",
        "Session 1: The Tennis Carnival (7:00 AM – 12:00 Noon • Tennis Attire)",
        "Session 2: Party Night (8:00 PM till you drop • No Tennis Outfit)",
        "Venue: Rolider Sports Complex, Accra, Ghana",
        "Court games, rally challenges & matches",
        "Music, refreshments, dancing & party networking",
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
        "Full access to BOTH Sessions on 24th December 2026",
        "Session 1: The Tennis Carnival (7:00 AM – 12:00 Noon • Tennis Attire)",
        "Session 2: Party Night (8:00 PM till you drop • No Tennis Outfit)",
        "Venue: Rolider Sports Complex, Accra, Ghana",
        "Court games, rally challenges & matches",
        "Music, refreshments, dancing & party networking",
        "Standard festival entry pass"
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
