export default function SchemaMarkup() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'SkillManthan',
    url: 'https://skillmanthan.com',
    logo: 'https://skillmanthan.com/logo.png',
    description: 'Industry-oriented IT training platform',
    sameAs: [
      'https://www.linkedin.com/company/skillmanthan',
      'https://twitter.com/skillmanthan',
      'https://www.facebook.com/skillmanthan',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      telephone: '+91-9876543210',
      email: 'info@skillmanthan.com',
    },
  }

  const courseSchema = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: 'Industry-Oriented IT Training',
    description: 'Comprehensive IT training programs with expert instructors',
    provider: {
      '@type': 'Organization',
      name: 'SkillManthan',
      sameAs: 'https://skillmanthan.com',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      ratingCount: '1200',
    },
    offers: {
      '@type': 'Offer',
      price: '5000',
      priceCurrency: 'INR',
      availability: 'https://schema.org/InStock',
    },
  }

  const aggregateRatingSchema = {
    '@context': 'https://schema.org',
    '@type': 'AggregateRating',
    bestRating: '5',
    worstRating: '1',
    ratingValue: '4.8',
    ratingCount: '1200',
    reviewCount: '1200',
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aggregateRatingSchema) }}
      />
    </>
  )
}
