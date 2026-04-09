import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import './globals.css'
import Nav from '@/components/Nav'
import Cursor from '@/components/Cursor'
import PageTransition from '@/components/PageTransition'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
  style: ['normal', 'italic'],
  weight: ['400', '500', '700'],
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  weight: ['300', '400', '500', '600'],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.fatemeh.ca'),
  title: {
    default: 'Fatemeh Azadbakht — Senior Product & Visual Designer',
    template: '%s | Fatemeh Azadbakht',
  },
  description: 'Senior Product and Visual Designer with 15+ years building design systems, fintech UX, and enterprise product experiences. Based in Toronto, Canada. Available for senior and staff designer roles.',
  keywords: [
    'Senior Product Designer Toronto',
    'Senior Visual Designer Toronto',
    'Fintech UX Designer',
    'Design Systems Designer',
    'Enterprise UX Designer',
    'Staff Designer Canada',
    'WCAG Accessibility Designer',
    'Figma Expert Toronto',
    'TD Bank Designer',
    'Portfolio Designer Toronto',
    'Fatemeh Azadbakht',
    'OOBE Studio Toronto',
  ],
  authors: [{ name: 'Fatemeh Azadbakht', url: 'https://www.fatemeh.ca' }],
  creator: 'Fatemeh Azadbakht',
  openGraph: {
    type: 'website',
    locale: 'en_CA',
    url: 'https://www.fatemeh.ca',
    siteName: 'Fatemeh Azadbakht — Portfolio',
    title: 'Fatemeh Azadbakht — Senior Product & Visual Designer',
    description: 'Senior Product and Visual Designer with 15+ years in fintech, enterprise SaaS, and regulated industries. Based in Toronto.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Fatemeh Azadbakht — Senior Product & Visual Designer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fatemeh Azadbakht — Senior Product & Visual Designer',
    description: 'Senior Product and Visual Designer with 15+ years in fintech, enterprise SaaS, and regulated industries. Based in Toronto.',
    images: ['/og-image.jpg'],
  },
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
  alternates: {
    canonical: 'https://www.fatemeh.ca',
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180' },
    ],
    other: [
      { rel: 'manifest', url: '/site.webmanifest' },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#0C0C0A" />
      </head>
      <body className={`${playfair.variable} ${inter.variable}`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Fatemeh Azadbakht",
              "url": "https://www.fatemeh.ca",
              "email": "info@fatemeh.ca",
              "jobTitle": "Senior Product & Visual Designer",
              "description": "Senior Product and Visual Designer with 15+ years building design systems, fintech UX, and enterprise product experiences.",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Toronto",
                "addressRegion": "Ontario",
                "addressCountry": "CA"
              },
              "sameAs": [
                "https://www.fatemeh.ca",
                "https://www.fatemehazadbakht.com",
                "https://linkedin.com/in/fazadbakht"
              ],
              "knowsAbout": [
                "Product Design",
                "Design Systems",
                "Fintech UX",
                "WCAG Accessibility",
                "Figma",
                "Enterprise SaaS Design",
                "Visual Design",
                "Brand Systems"
              ],
              "hasCredential": [
                {
                  "@type": "EducationalOccupationalCredential",
                  "credentialCategory": "certificate",
                  "recognizedBy": {
                    "@type": "Organization",
                    "name": "OCAD University"
                  }
                }
              ],
              "worksFor": {
                "@type": "Organization",
                "name": "OOBE Studio",
                "url": "https://www.fatemeh.ca"
              }
            })
          }}
        />
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <Cursor />
        <Nav />
        <PageTransition>
          {children}
        </PageTransition>
      </body>
    </html>
  )
}
