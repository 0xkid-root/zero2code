// import type { Metadata, Viewport } from 'next'
// import { Geist, Geist_Mono } from 'next/font/google'
// import { Analytics } from '@vercel/analytics/next'
// import { Toaster } from "react-hot-toast";
// import './globals.css'

// const _geist = Geist({ subsets: ["latin"] });
// const _geistMono = Geist_Mono({ subsets: ["latin"] });

// export const viewport: Viewport = {
//   width: 'device-width',
//   initialScale: 1,
//   maximumScale: 1,
//   userScalable: false,
//   themeColor: [
//     { media: '(prefers-color-scheme: light)', color: '#FF6B35' },
//     { media: '(prefers-color-scheme: dark)', color: '#FF6B35' },
//   ],
// }

// export const metadata: Metadata = {
//   title: 'ZeroTwoCode - Industry-Oriented IT Training Programs',
//   description: 'Transform your tech career with ZeroTwoCode. Expert-led IT training in AWS, Python, Java, Android, Digital Marketing & Full-Stack development with 98% placement rate.',
//   verification: {
//   google: "wpo_GgXwAbe6484CGxazAPnivA5Z9Gx2srKU_hg0n80",
// },
//   keywords: 'IT training, programming courses, AWS training, Python development, Java training, Full-Stack development, career development, online courses',
//   authors: [{ name: 'ZeroTwoCode' }],
//   creator: 'ZeroTwoCode',
//   publisher: 'ZeroTwoCode',
//   robots: 'index, follow',
//   openGraph: {
//     type: 'website',
//     locale: 'en_IN',
//     url: 'https://zerotwocode.com',
//     siteName: 'ZeroTwoCode',
//     title: 'ZeroTwoCode - Industry-Oriented IT Training Programs',
//     description: 'Transform your tech career with expert-led IT training. 98% placement rate. Courses in AWS, Python, Java, and more.',
//     images: [
//       {
//         url: 'https://zerotwocode.com/og-image.png',
//         width: 1200,
//         height: 630,
//         alt: 'ZeroTwoCode - IT Training',
//       },
//     ],
//   },
//   twitter: {
//     card: 'summary_large_image',
//     title: 'ZeroTwoCode - IT Training Programs',
//     description: 'Transform your career with industry-aligned IT training. 98% placement rate.',
//     images: ['https://zerotwocode.com/twitter-image.png'],
//   },
  
// }



// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode
// }>) {
//   const organizationSchema = {
//     '@context': 'https://schema.org',
//     '@type': 'Organization',
//     name: 'ZeroTwoCode',
//     url: 'https://zerotwocode.com',
//     logo: 'https://zerotwocode.com/logo.png',
//     description: 'Industry-oriented IT training platform',
//     contactPoint: {
//       '@type': 'ContactPoint',
//       contactType: 'Customer Service',
//       telephone: '+91-9876543210',
//       email: 'info@zerotwocode.com',
//     },
//   }

//   return (
//     <html lang="en">
//       <head>
//        <meta name="google-site-verification" content="wpo_GgXwAbe6484CGxazAPnivA5Z9Gx2srKU_hg0n80" />
//         <script
//           type="application/ld+json"
//           dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
//         />
//       </head>
//       <body className="font-sans antialiased">
//         {children}
//          <Toaster
//     position="top-right"
//     toastOptions={{
//       duration: 3000,
//       style: {
//         background: "#1A1A1A",
//         color: "#fff",
//         borderRadius: "10px",
//         fontSize: "14px",
//       },
//     }}
//   />
//         <Analytics />
//       </body>
//     </html>
//   )
// }
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { Toaster } from "react-hot-toast";
import './globals.css'

const geistSans = Geist({ subsets: ["latin"], variable: "--font-geist-sans" });
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" });

// Viewport settings for mobile optimization
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5, // Improved Accessibility: Users should be able to zoom
  themeColor: '#FF6B35',
}

export const metadata: Metadata = {
  // 1. CRITICAL: Base URL for absolute paths (Social images, etc.)
  metadataBase: new URL('https://zerotwocode.com'),
  
  // 2. Dynamic Title Template
  title: {
    default: 'ZeroTwoCode - Industry-Oriented IT Training Programs',
    template: '%s | ZeroTwoCode' 
  },
  
  description: 'Transform your tech career with ZeroTwoCode. Expert-led IT training in AWS, Python, Java, Full-Stack & Digital Marketing with 98% placement rate.',
  
  // 3. Canonical URL (Mandatory for Google)
  alternates: {
    canonical: '/',
  },

  verification: {
    google: "wpo_GgXwAbe6484CGxazAPnivA5Z9Gx2srKU_hg0n80",
  },

  keywords: ['IT training', 'programming courses', 'AWS training', 'Python development', 'Java training', 'Full-Stack development', 'career development', 'online courses', 'ZeroTwoCode India'],
  
  authors: [{ name: 'ZeroTwoCode', url: 'https://zerotwocode.com' }],
  creator: 'ZeroTwoCode',
  publisher: 'ZeroTwoCode',
  
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://zerotwocode.com',
    siteName: 'ZeroTwoCode',
    title: 'ZeroTwoCode - Industry-Oriented IT Training Programs',
    description: 'Master in-demand tech skills with industry experts. 98% placement support guaranteed.',
    images: [
      {
        url: '/og-image.png', // Relative path works because of metadataBase
        width: 1200,
        height: 630,
        alt: 'ZeroTwoCode - Best IT Training Center',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'ZeroTwoCode - Industry-Oriented IT Training',
    description: 'Join the top-rated IT training programs and kickstart your career.',
    images: ['/twitter-image.png'],
    creator: '@zerotwocode',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  
  // Advanced Structured Data (JSON-LD)
  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      '@id': 'https://zerotwocode.com/#organization',
      name: 'ZeroTwoCode',
      url: 'https://zerotwocode.com',
      logo: 'https://zerotwocode.com/logo.png',
      sameAs: [
        'https://www.facebook.com/zerotwocode',
        'https://www.linkedin.com/company/zerotwocode',
        'https://twitter.com/zerotwocode'
      ],
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+91-9876543210',
        contactType: 'customer service',
        areaServed: 'IN',
        availableLanguage: ['en', 'hi']
      }
    },
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      '@id': 'https://zerotwocode.com/#website',
      url: 'https://zerotwocode.com',
      name: 'ZeroTwoCode',
      publisher: { '@id': 'https://zerotwocode.com/#organization' },
      potentialAction: {
        '@type': 'SearchAction',
        target: 'https://zerotwocode.com/search?q={search_term_string}',
        'query-input': 'required name=search_term_string'
      }
    }
  ];

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}>
        {/* Schema Markup Injection */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        
        {children}

        <Toaster
          position="top-right"
          toastOptions={{
            duration: 3000,
            style: {
              background: "#1A1A1A",
              color: "#fff",
              borderRadius: "10px",
              fontSize: "14px",
            },
          }}
        />
        <Analytics />
      </body>
    </html>
  )
}