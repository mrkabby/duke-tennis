// SEO Configuration for Duke Tennis
export const seoConfig = {
  // Basic site information
  siteName: 'Duke Tennis',
  siteUrl: 'https://duketennis.org',
  defaultTitle: 'Duke Tennis - Professional Tennis Coaching in Ghana',
  defaultDescription: 'Professional tennis coaching with George Duke Nyarkoh in Ghana. Expert PTR certified coach offering private lessons, group coaching, and tennis programs across 6 regions.',
  defaultKeywords: 'tennis coaching Ghana, tennis lessons Accra, Duke Tennis, George Duke Nyarkoh, PTR certified coach, tennis training, private tennis lessons, group tennis coaching, tennis club Ghana',
  defaultImage: '/logo512.png',
  
  // Social media
  social: {
    facebook: 'https://www.facebook.com/duketennis',
    instagram: 'https://www.instagram.com/duketennis',
    twitter: 'https://www.twitter.com/duketennis',
    linkedin: 'https://www.linkedin.com/company/duketennis'
  },
  
  // Contact information
  contact: {
    phone: '+233-XXX-XXX-XXX',
    email: 'info@duketennis.org',
    address: {
      country: 'Ghana',
      region: 'Greater Accra',
      coordinates: {
        latitude: 5.6037,
        longitude: -0.1870
      }
    }
  },
  
  // Business information
  business: {
    type: 'SportsOrganization',
    priceRange: '$$',
    openingHours: 'Mo-Sa 06:00-20:00',
    areasServed: [
      'Greater Accra',
      'Ashanti',
      'Western',
      'Eastern',
      'Central',
      'Northern'
    ]
  },
  
  // Analytics
  analytics: {
    googleAnalyticsId: process.env.REACT_APP_GA_TRACKING_ID || 'G-XXXXXXXXXX',
    googleTagManagerId: process.env.REACT_APP_GTM_ID || 'GTM-XXXXXXX',
    facebookPixelId: process.env.REACT_APP_FB_PIXEL_ID || 'XXXXXXXXXXXXXXX'
  },
  
  // Additional meta tags
  additionalMeta: {
    'theme-color': '#10b981',
    'msapplication-navbutton-color': '#10b981',
    'apple-mobile-web-app-status-bar-style': 'black-translucent',
    'msapplication-starturl': '/',
    'mobile-web-app-capable': 'yes',
    'application-name': 'Duke Tennis'
  }
};

// Helper function to generate structured data
export const generateStructuredData = (type, data) => {
  const baseData = {
    '@context': 'https://schema.org',
    '@type': type,
    name: seoConfig.siteName,
    url: seoConfig.siteUrl,
    description: seoConfig.defaultDescription,
    image: `${seoConfig.siteUrl}${seoConfig.defaultImage}`,
    ...data
  };
  
  return baseData;
};

// Helper function to generate OpenGraph data
export const generateOpenGraphData = (title, description, image, url) => {
  return {
    'og:site_name': seoConfig.siteName,
    'og:type': 'website',
    'og:title': title || seoConfig.defaultTitle,
    'og:description': description || seoConfig.defaultDescription,
    'og:image': `${seoConfig.siteUrl}${image || seoConfig.defaultImage}`,
    'og:url': `${seoConfig.siteUrl}${url || '/'}`,
    'og:locale': 'en_US'
  };
};

// Helper function to generate Twitter Card data
export const generateTwitterCardData = (title, description, image, url) => {
  return {
    'twitter:card': 'summary_large_image',
    'twitter:site': '@duketennis',
    'twitter:creator': '@duketennis',
    'twitter:title': title || seoConfig.defaultTitle,
    'twitter:description': description || seoConfig.defaultDescription,
    'twitter:image': `${seoConfig.siteUrl}${image || seoConfig.defaultImage}`,
    'twitter:url': `${seoConfig.siteUrl}${url || '/'}`
  };
};
