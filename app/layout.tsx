import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { Toaster } from "react-hot-toast";
import './globals.css'
import Script from 'next/script'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#FF6B35' },
    { media: '(prefers-color-scheme: dark)', color: '#FF6B35' },
  ],
}

export const metadata: Metadata = {
  title: 'ZeroTwoCode - Industry-Oriented IT Training Programs',
  description: 'Transform your tech career with ZeroTwoCode. Expert-led IT training in AWS, Python, Java, Android, Digital Marketing & Full-Stack development with 98% placement rate.',
  verification: {
  google: "wpo_GgXwAbe6484CGxazAPnivA5Z9Gx2srKU_hg0n80",
},
  keywords: 'IT training, programming courses, AWS training, Python development, Java training, Full-Stack development, career development, online courses',
  authors: [{ name: 'ZeroTwoCode' }],
  creator: 'ZeroTwoCode',
  publisher: 'ZeroTwoCode',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://zerotwocode.com',
    siteName: 'ZeroTwoCode',
    title: 'ZeroTwoCode - Industry-Oriented IT Training Programs',
    description: 'Transform your tech career with expert-led IT training. 98% placement rate. Courses in AWS, Python, Java, and more.',
    images: [
      {
        url: 'https://zerotwocode.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'ZeroTwoCode - IT Training',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ZeroTwoCode - IT Training Programs',
    description: 'Transform your career with industry-aligned IT training. 98% placement rate.',
    images: ['https://zerotwocode.com/twitter-image.png'],
  },
  
}



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'ZeroTwoCode',
    url: 'https://zerotwocode.com',
    logo: 'https://zerotwocode.com/logo.png',
    description: 'Industry-oriented IT training platform',
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      telephone: '+91-9876543210',
      email: 'info@zerotwocode.com',
    },
  }

  return (
    <html lang="en">
      <head>
       <meta name="google-site-verification" content="wpo_GgXwAbe6484CGxazAPnivA5Z9Gx2srKU_hg0n80" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
  {/* Google Analytics */}
  <Script
    src="https://www.googletagmanager.com/gtag/js?id=G-JBCPZKQ9P6"
    strategy="afterInteractive"
  />
  <Script id="google-analytics" strategy="afterInteractive">
    {`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-JBCPZKQ9P6');
    `}
  </Script>

  {/* Your existing schema */}
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
  />
</head>
      <body className="font-sans antialiased">
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
