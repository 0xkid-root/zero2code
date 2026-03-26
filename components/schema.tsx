export default function SchemaMarkup() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'zerotwocode',
    url: 'https://zerotwocode.com',
    logo: 'https://zerotwocode.com/logo.png',
    description: 'Industry-oriented IT training platform',
    sameAs: [
      'https://www.linkedin.com/company/zerotwocode/',
      'https://twitter.com/zerotwocode',
      'https://www.facebook.com/zerotwocode',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      telephone: '+91-7570082706',
      email: 'zerotwocode.official@gmail.com',
    },
  }

  const courseSchema = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: 'Industry-Oriented IT Training',
    description: 'Comprehensive IT training programs with expert instructors',
    provider: {
      '@type': 'Organization',
      name: 'zerotwocode',
      sameAs: 'https://zerotwocode.com',
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
