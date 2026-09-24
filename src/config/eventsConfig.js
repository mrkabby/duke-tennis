// Duke Tennis Seasonal Events Configuration
// Centralized config to manage event lifecycle, pricing, details, and auto-expiry.

export const festivalConfig = {
  id: "december-festival",
  slug: "december-festival",
  name: "DUKETENNIS FESTIVAL",
  title: "DUKETENNIS FESTIVAL – The December Experience",
  subtitle: "The December Experience",
  tagline: "Tennis. Resort Getaway. Grand End-of-Year Celebration.",
  dates: "From 1st December to 26th December 2026",
  startDate: "2026-12-01",
  endDate: "2026-12-26",
  
  // Set to true to force active, false to force disabled/expired, or null to auto-expire based on endDate
  forceActive: null,

  location: "Rolider Sports Complex & Atlantic Bay Resort, Ghana",

  // Payment & Contact Info (as specified on official festival flyer)
  momo: {
    number: "0530051334",
    name: "George Nyarkoh / DUKETENNIS",
    network: "MTN Mobile Money",
    instructions: "Send payment with your Full Name + Festival Package as the reference, then share screenshot for instant confirmation."
  },
  contact: {
    phone: "0558315717",
    formattedPhone: "+233 55 831 5717",
    whatsappLink: "https://wa.me/233558315717"
  },
  

  // 3 Signature Programs (Alternating in Hero)
  programs: [
    {
      id: "tennis-sessions",
      number: "01",
      shortTitle: "Thrice-Weekly Tennis (Rolider)",
      title: "Thrice A Week Tennis Sessions",
      venue: "Rolider Sports Complex",
      dates: "Dec 1st – 26th",
      badge: "Dec 1st – 26th",
      tag: "Intensive Training",
      colorTheme: "volt",
      description: "Intensive 3x weekly court sessions designed for match fitness, tactical drills, and high-energy rally games under certified PTR coaching.",
      packageAvailability: "Included in Gold, Silver, and Bronze packages"
    },
    {
      id: "resort-trip",
      number: "02",
      shortTitle: "Atlantic Bay Resort Trip (Dec 4–6)",
      title: "Trip To Atlantic Bay Resort",
      venue: "Atlantic Bay Resort",
      dates: "4th – 6th December 2026",
      badge: "4th – 6th December",
      tag: "Seaside Retreat",
      colorTheme: "emerald",
      description: "A weekend seaside retreat from 4th to 6th December 2026. Inclusive of breakfast, lunch, beachfront relaxation, swimming, and organized team activities.",
      packageAvailability: "Included in Gold & Silver packages"
    },
    {
      id: "party",
      number: "03",
      shortTitle: "End of Year Party (Dec 26)",
      title: "End Of Year Party",
      venue: "Duke Tennis Community",
      dates: "26th December",
      badge: "26th December",
      tag: "Boxing Day Gala",
      colorTheme: "amber",
      description: "Close out the tennis year with dinner, music, recognition awards, and networking on Boxing Day with fellow players, coaches, and the tennis family.",
      packageAvailability: "Included in Gold, Silver, and Party-Only packages"
    }
  ],

  // 4 Festival Pricing Packages
  packages: [
    {
      id: "gold",
      name: "Gold Package",
      price: 4000,
      currency: "Ghc",
      badge: "Full VIP Experience",
      colorTheme: "amber",
      popular: true,
      includes: [
        "2 nights Fun trip at Atlantic Bay Resort",
        "Includes breakfast, lunch and many fun activities",
        "Tennis subscription for December (3X weekly)",
        "Well organized / fun tennis activities & coaching",
        "VIP access to End of Year party (26th Dec)"
      ]
    },
    {
      id: "silver",
      name: "Silver Package",
      price: 2800,
      currency: "Ghc",
      badge: "Great Value",
      colorTheme: "slate",
      popular: false,
      includes: [
        "2 nights Fun trip at Atlantic Bay resort (Shared room)",
        "Includes breakfast, lunch and many fun activities",
        "Tennis subscription for December (3X weekly)",
        "Well organized / fun tennis time & practice matches",
        "Access to End of Year party (26th Dec)"
      ]
    },
    {
      id: "bronze",
      name: "Bronze Package",
      price: 2500,
      currency: "Ghc",
      badge: "Resort & Tennis",
      colorTheme: "emerald",
      popular: false,
      includes: [
        "2 nights Fun trip at Atlantic Bay resort (Shared room)",
        "Includes breakfast, lunch and many fun activities",
        "Tennis subscription for December (3X weekly)",
        "Well organized / fun tennis time"
      ]
    },
    {
      id: "diamond",
      name: "Diamond Package",
      price: 1500,
      currency: "Ghc",
      badge: "Training & Party",
      colorTheme: "cyan",
      popular: false,
      includes: [
        "Tennis subscription for December (3X weekly)",
        "Well organized / fun tennis time throughout December",
        "Access to End of Year party (26th Dec)"
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
  // Active until the end of December 26, 2026 (or 23:59:59 local time)
  const now = new Date();
  const expiryDate = new Date(`${festivalConfig.endDate}T23:59:59`);
  return now <= expiryDate;
};
