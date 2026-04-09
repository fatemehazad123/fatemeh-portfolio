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
              "@graph": [
                {
                  "@type": "Person",
                  "@id": "https://www.fatemeh.ca/#person",
                  "name": "Fatemeh Azadbakht",
                  "url": "https://www.fatemeh.ca",
                  "image": "https://www.fatemeh.ca/images/portrait.jpg",
                  "email": "info@fatemeh.ca",
                  "telephone": "+16478644030",
                  "jobTitle": "Senior Product & Visual Designer",
                  "description": "Senior Product and Visual Designer with 15+ years building design systems, fintech UX, and enterprise product experiences for regulated industries in Toronto, Canada.",
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
                    "Product Design","UX Design","Design Systems","Fintech UX",
                    "WCAG Accessibility","Figma","Enterprise SaaS Design",
                    "Visual Identity","Brand Systems","Information Architecture",
                    "Interaction Design","AODA Compliance"
                  ],
                  "alumniOf": [
                    {
                      "@type": "CollegeOrUniversity",
                      "name": "OCAD University",
                      "address": { "addressLocality": "Toronto", "addressCountry": "CA" }
                    },
                    {
                      "@type": "CollegeOrUniversity",
                      "name": "Humber College",
                      "address": { "addressLocality": "Toronto", "addressCountry": "CA" }
                    }
                  ],
                  "hasOccupation": {
                    "@type": "Occupation",
                    "name": "Senior Product and Visual Designer",
                    "occupationLocation": { "@type": "City", "name": "Toronto" },
                    "skills": "Product Design, UX Strategy, Design Systems, Figma, WCAG, AODA, Fintech UX, Enterprise SaaS, Visual Identity, Brand Systems, Component Libraries, Design Tokens"
                  },
                  "worksFor": {
                    "@type": "Organization",
                    "name": "OOBE Studio",
                    "url": "https://www.fatemeh.ca",
                    "description": "Multidisciplinary design studio founded by Fatemeh Azadbakht in 2010, delivering brand, product, and digital design across fintech, enterprise SaaS, and civic sectors"
                  }
                },
                {
                  "@type": "WebSite",
                  "@id": "https://www.fatemeh.ca/#website",
                  "url": "https://www.fatemeh.ca",
                  "name": "Fatemeh Azadbakht — Portfolio",
                  "description": "Portfolio of Fatemeh Azadbakht, Senior Product and Visual Designer based in Toronto",
                  "publisher": { "@id": "https://www.fatemeh.ca/#person" },
                  "inLanguage": "en-CA",
                  "potentialAction": {
                    "@type": "SearchAction",
                    "target": "https://www.fatemeh.ca/?s={search_term_string}",
                    "query-input": "required name=search_term_string"
                  }
                },
                {
                  "@type": "ProfilePage",
                  "@id": "https://www.fatemeh.ca/#profilepage",
                  "url": "https://www.fatemeh.ca",
                  "name": "Fatemeh Azadbakht — Senior Product & Visual Designer",
                  "about": { "@id": "https://www.fatemeh.ca/#person" },
                  "mainEntity": { "@id": "https://www.fatemeh.ca/#person" },
                  "inLanguage": "en-CA",
                  "dateModified": "2026-04-09"
                }
              ]
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
