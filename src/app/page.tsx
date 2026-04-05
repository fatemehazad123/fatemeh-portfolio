import Hero from '@/components/Hero'
import Ticker from '@/components/Ticker'
import Work from '@/components/Work'
import Process from '@/components/Process'
import About from '@/components/About'
import Contact from '@/components/Contact'
import FadeIn from '@/components/FadeIn'

export default function Home() {
  return (
    <main id="main-content">
      <Hero />
      <Ticker />
      <FadeIn><Work /></FadeIn>
      <FadeIn><Process /></FadeIn>
      <FadeIn><About /></FadeIn>
      <FadeIn><Contact /></FadeIn>
    </main>
  )
}
