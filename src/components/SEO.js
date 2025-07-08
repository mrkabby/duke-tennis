import React from 'react';
import { Helmet } from 'react-helmet';

const SEO = ({ 
  title, 
  description, 
  keywords, 
  image, 
  url, 
  type = 'website',
  schemaData 
}) => {
  const defaultTitle = 'Duke Tennis - Professional Tennis Coaching in Ghana';
  const defaultDescription = 'Professional tennis coaching with George Duke Nyarkoh in Ghana. Expert PTR certified coach offering private lessons, group coaching, and tennis programs across 6 regions.';
  const defaultKeywords = 'tennis coaching Ghana, tennis lessons Accra, Duke Tennis, George Duke Nyarkoh, PTR certified coach, tennis training, private tennis lessons, group tennis coaching, tennis club Ghana';
  const defaultImage = '/logo512.png';
  const siteUrl = 'https://duketennis.org';

  const seoTitle = title ? `${title} | Duke Tennis` : defaultTitle;
  const seoDescription = description || defaultDescription;
  const seoKeywords = keywords || defaultKeywords;
  const seoImage = image || defaultImage;
  const seoUrl = url ? `${siteUrl}${url}` : siteUrl;

  // Default structured data for the organization
  const defaultSchemaData = {
    "@context": "https://schema.org",
    "@type": "SportsOrganization",
    "name": "Duke Tennis",
    "description": seoDescription,
    "url": siteUrl,
    "logo": `${siteUrl}/logo512.png`,
    "image": `${siteUrl}${seoImage}`,
    "founder": {
      "@type": "Person",
      "name": "George Duke Nyarkoh",
      "jobTitle": "Professional Tennis Coach",
      "description": "PTR Certified Tennis Coach with expertise in private lessons, group coaching, and tennis programs"
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
    "sameAs": [
      "https://www.facebook.com/duketennis",
      "https://www.instagram.com/duketennis",
      "https://www.twitter.com/duketennis"
    ],
    "offers": {
      "@type": "Offer",
      "description": "Professional tennis coaching services including private lessons, group coaching, and tennis programs",
      "areaServed": "Ghana"
    }
  };

  const finalSchemaData = schemaData || defaultSchemaData;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{seoTitle}</title>
      <meta name="title" content={seoTitle} />
      <meta name="description" content={seoDescription} />
      <meta name="keywords" content={seoKeywords} />
      <link rel="canonical" href={seoUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={seoUrl} />
      <meta property="og:title" content={seoTitle} />
      <meta property="og:description" content={seoDescription} />
      <meta property="og:image" content={`${siteUrl}${seoImage}`} />
      <meta property="og:site_name" content="Duke Tennis" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={seoUrl} />
      <meta property="twitter:title" content={seoTitle} />
      <meta property="twitter:description" content={seoDescription} />
      <meta property="twitter:image" content={`${siteUrl}${seoImage}`} />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(finalSchemaData)}
      </script>
    </Helmet>
  );
};

export default SEO;
