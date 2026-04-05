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

export const metadata = {
  title: 'Fatemeh Azadbakht - Senior Product Designer',
  description: 'Senior Product and Visual Designer with 15+ years in fintech, enterprise SaaS, and regulated industries. Based in Toronto.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${inter.variable}`}>
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
