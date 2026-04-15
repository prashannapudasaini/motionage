import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function SEO({ title, description, url }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "MotionAge IT Solutions",
    "image": "https://yourdomain.com/logo.png",
    "url": url || "https://yourdomain.com",
    "telephone": "+9779812340170",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Koteshwor - 32",
      "addressLocality": "Kathmandu",
      "addressCountry": "NP"
    },
    "description": description
  };

  return (
    <Helmet>
      <title>{title ? `${title} | MotionAge IT Solutions` : 'MotionAge | Premium Digital Agency'}</title>
      <meta name="description" content={description || "We transform complex business challenges into scalable, high-performance digital ecosystems."} />
      <meta property="og:title" content={title || "MotionAge | Premium Digital Agency"} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
}