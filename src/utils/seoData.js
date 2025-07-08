// SEO data for different pages
export const seoData = {
  home: {
    title: 'Duke Tennis - Professional Tennis Coaching in Ghana',
    description: 'Professional tennis coaching with George Duke Nyarkoh in Ghana. Expert PTR certified coach offering private lessons, group coaching, and tennis programs across 6 regions.',
    keywords: 'tennis coaching Ghana, tennis lessons Accra, Duke Tennis, George Duke Nyarkoh, PTR certified coach, tennis training, private tennis lessons, group tennis coaching, tennis club Ghana',
    image: '/logo512.png',
    url: '/',
    schema: {
      "@context": "https://schema.org",
      "@type": "SportsOrganization",
      "name": "Duke Tennis",
      "description": "Professional tennis coaching with George Duke Nyarkoh in Ghana. Expert PTR certified coach offering private lessons, group coaching, and tennis programs across 6 regions.",
      "url": "https://duketennis.org",
      "logo": "https://duketennis.org/logo512.png",
      "founder": {
        "@type": "Person",
        "name": "George Duke Nyarkoh",
        "jobTitle": "Professional Tennis Coach",
        "description": "PTR Certified Tennis Coach with over 10 years of coaching experience"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "customer service",
        "areaServed": "Ghana",
        "availableLanguage": "English"
      },
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "Ghana",
        "addressRegion": "Greater Accra"
      },
      "offers": {
        "@type": "Offer",
        "description": "Professional tennis coaching services including private lessons, group coaching, and tennis programs",
        "areaServed": "Ghana"
      }
    }
  },
  about: {
    title: 'About George Duke Nyarkoh - Professional Tennis Coach',
    description: 'Learn about George Duke Nyarkoh, PTR certified tennis coach with over 10 years of coaching experience and 20 years of playing experience in Ghana.',
    keywords: 'George Duke Nyarkoh, tennis coach biography, PTR certified coach, tennis coaching experience Ghana',
    image: '/george.jpg',
    url: '/about',
    schema: {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "George Duke Nyarkoh",
      "jobTitle": "Professional Tennis Coach",
      "description": "PTR Certified Tennis Coach with over 10 years of coaching experience and 20 years of playing experience",
      "url": "https://duketennis.org/about",
      "image": "https://duketennis.org/george.jpg",
      "worksFor": {
        "@type": "Organization",
        "name": "Duke Tennis"
      },
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "Ghana",
        "addressRegion": "Greater Accra"
      },
      "knowsAbout": [
        "Tennis Coaching",
        "Tennis Training",
        "Sports Education",
        "Player Development"
      ]
    }
  },
  services: {
    title: 'Tennis Coaching Services - Private & Group Lessons',
    description: 'Professional tennis coaching services including private lessons, group coaching, beginner to advanced programs, and specialized training across Ghana.',
    keywords: 'tennis coaching services, private tennis lessons, group tennis coaching, tennis training programs, tennis lessons Ghana',
    image: '/services.jpg',
    url: '/services',
    schema: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Tennis Coaching Services",
      "description": "Professional tennis coaching services including private lessons, group coaching, beginner to advanced programs",
      "url": "https://duketennis.org/services",
      "provider": {
        "@type": "Organization",
        "name": "Duke Tennis"
      },
      "areaServed": "Ghana",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Tennis Coaching Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Private Tennis Lessons",
              "description": "One-on-one tennis coaching sessions"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Group Tennis Coaching",
              "description": "Tennis coaching for groups and teams"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Tennis Training Programs",
              "description": "Comprehensive tennis training programs for all levels"
            }
          }
        ]
      }
    }
  },
  booking: {
    title: 'Book Tennis Lessons - Schedule Your Coaching Session',
    description: 'Book your tennis coaching session with George Duke Nyarkoh. Schedule private lessons, group coaching, or training programs across Ghana.',
    keywords: 'book tennis lessons, schedule tennis coaching, tennis lesson booking Ghana, tennis coaching appointment',
    image: '/booking.jpg',
    url: '/booking',
    schema: {
      "@context": "https://schema.org",
      "@type": "ReservationService",
      "name": "Tennis Lesson Booking",
      "description": "Book your tennis coaching session with George Duke Nyarkoh",
      "url": "https://duketennis.org/booking",
      "provider": {
        "@type": "Organization",
        "name": "Duke Tennis"
      },
      "areaServed": "Ghana"
    }
  },
  gallery: {
    title: 'Tennis Coaching Gallery - Photos & Videos',
    description: 'View photos and videos from Duke Tennis coaching sessions, training programs, and student achievements in Ghana.',
    keywords: 'tennis coaching photos, tennis training videos, Duke Tennis gallery, tennis coaching Ghana images',
    image: '/gallery.jpg',
    url: '/gallery',
    schema: {
      "@context": "https://schema.org",
      "@type": "ImageGallery",
      "name": "Duke Tennis Gallery",
      "description": "Photos and videos from Duke Tennis coaching sessions and training programs",
      "url": "https://duketennis.org/gallery",
      "publisher": {
        "@type": "Organization",
        "name": "Duke Tennis"
      }
    }
  },
  resources: {
    title: 'Tennis Resources - Tips, Equipment & Training Materials',
    description: 'Tennis resources including training tips, equipment recommendations, and educational materials for tennis players in Ghana.',
    keywords: 'tennis resources, tennis training tips, tennis equipment, tennis education Ghana, tennis materials',
    image: '/resources.jpg',
    url: '/resources',
    schema: {
      "@context": "https://schema.org",
      "@type": "EducationalOrganization",
      "name": "Duke Tennis Resources",
      "description": "Tennis resources including training tips, equipment recommendations, and educational materials",
      "url": "https://duketennis.org/resources",
      "provider": {
        "@type": "Organization",
        "name": "Duke Tennis"
      },
      "educationalCredentialAwarded": "Tennis Training Knowledge"
    }
  },
  contact: {
    title: 'Contact Duke Tennis - Get in Touch',
    description: 'Contact George Duke Nyarkoh and Duke Tennis for tennis coaching inquiries, lesson bookings, and more information about our services in Ghana.',
    keywords: 'contact Duke Tennis, tennis coaching contact, George Duke Nyarkoh contact, tennis lessons inquiry Ghana',
    image: '/contact.jpg',
    url: '/contact',
    schema: {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      "name": "Contact Duke Tennis",
      "description": "Contact George Duke Nyarkoh and Duke Tennis for tennis coaching inquiries",
      "url": "https://duketennis.org/contact",
      "mainEntity": {
        "@type": "Organization",
        "name": "Duke Tennis",
        "contactPoint": {
          "@type": "ContactPoint",
          "contactType": "customer service",
          "areaServed": "Ghana",
          "availableLanguage": "English"
        }
      }
    }
  }
};

// Helper function to get SEO data for a specific page
export const getSEOData = (page) => {
  return seoData[page] || seoData.home;
};
