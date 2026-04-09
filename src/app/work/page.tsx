import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { caseStudies } from '@/lib/caseStudies'

export const metadata: Metadata = {
  title: 'Work — Fatemeh Azadbakht',
  description:
    'Selected case studies by Fatemeh Azadbakht — product design work in fintech, SaaS, and enterprise.',
  openGraph: {
    title: 'Work — Fatemeh Azadbakht',
    description: 'Selected case studies in fintech, SaaS, and enterprise.',
    url: 'https://www.fatemeh.ca/work',
  },
}

/* Derive a light background from the card accent color */
const lightBgMap: Record<string, string> = {
  '#4FA6A1': '#e8f4f3',
  '#C96A4A': '#f5ede9',
  '#BFCFC6': '#edf2f0',
}

export default function WorkPage() {
  return (
    <div className="min-h-screen bg-offwhite">
      {/* Page header */}
      <div className="pt-32 pb-16 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-5">
          <span className="block h-px w-8" style={{ background: '#4FA6A1' }} />
          <span className="font-inter text-[11px] font-medium tracking-[0.2em] uppercase text-teal">
            Selected Work
          </span>
        </div>
        <h1 className="font-playfair text-5xl md:text-6xl text-slate mb-4">
          Case Studies
        </h1>
        <p className="font-inter text-sm text-slate/55 max-w-md">
          End-to-end product experiences, from discovery to delivery.
          Each project reflects a commitment to research-led thinking,
          systems design, and inclusive outcomes.
        </p>
      </div>

      {/* Case studies list */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 pb-32">
        <div className="flex flex-col gap-6">
          {caseStudies.map((study, i) => {
            const lightBg = lightBgMap[study.cardTextColor] ?? '#e8f4f3'
            return (
              <Link
                key={study.slug}
                href={`/work/${study.slug}`}
                className="group block"
                aria-label={`View case study: ${study.title}`}
              >
                <article className="grid grid-cols-1 md:grid-cols-12 gap-0 bg-white rounded-[4px] overflow-hidden hover:shadow-[0_12px_40px_rgba(46,46,44,0.12)] transition-all duration-300 hover:-translate-y-1">
                  {/* Visual */}
                  <div
                    className="md:col-span-4 relative overflow-hidden"
                    style={{ minHeight: '200px', background: lightBg }}
                    aria-hidden="true"
                  >
                    {study.heroImage ? (
                      <Image
                        src={study.heroImage}
                        alt={study.title}
                        fill
                        quality={100}
                        sizes="(max-width: 768px) 100vw, 33vw"
                        style={{ objectFit: 'cover', objectPosition: 'center top' }}
                      />
                    ) : (
                      <span
                        className="font-playfair font-bold select-none absolute inset-0 flex items-center justify-center"
                        style={{
                          fontSize: '5rem',
                          color:    study.cardTextColor,
                          opacity:  0.15,
                        }}
                      >
                        0{i + 1}
                      </span>
                    )}
                  </div>

                  {/* Content */}
                  <div className="md:col-span-8 p-8 md:p-10 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-3 mb-3">
                        <span
                          className="font-inter text-[10px] font-semibold uppercase tracking-[0.18em]"
                          style={{ color: study.cardTextColor }}
                        >
                          {study.tags[0]}
                        </span>
                        <span className="font-inter text-[10px] text-slate/40">
                          · {study.client} · {study.year}
                        </span>
                      </div>
                      <h2 className="font-playfair text-2xl md:text-3xl text-slate mb-3">
                        {study.title}
                      </h2>
                      <p className="font-inter text-sm text-slate/60 leading-relaxed max-w-xl mb-5">
                        {study.cardDescription}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {study.outcomes.map(o => (
                          <span
                            key={o.label}
                            className="font-inter text-[11px] px-2.5 py-1 rounded-full"
                            style={{ background: lightBg, color: study.cardTextColor }}
                          >
                            {o.label}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div
                      className="flex items-center gap-2 mt-6 font-inter text-sm font-medium group-hover:gap-3 transition-all duration-200"
                      style={{ color: study.cardTextColor }}
                    >
                      View Case Study
                      <span aria-hidden="true">→</span>
                    </div>
                  </div>
                </article>
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}
