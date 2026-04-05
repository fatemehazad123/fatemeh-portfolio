import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getCaseStudyBySlug, caseStudies } from '@/lib/caseStudies'
import CaseStudyContent from '@/components/CaseStudyContent'

interface Props { params: { slug: string } }

export function generateStaticParams() {
  return caseStudies.map(cs => ({ slug: cs.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const study = getCaseStudyBySlug(params.slug)
  if (!study) return { title: 'Not Found' }
  return {
    title: `${study.title} — Fatemeh Azadbakht`,
    description: study.summary,
    openGraph: {
      title: `${study.title} — Fatemeh Azadbakht`,
      description: study.summary,
      url: `https://fatemeh.ca/work/${study.slug}`,
    },
  }
}

export default function CaseStudyPage({ params }: Props) {
  const study = getCaseStudyBySlug(params.slug)
  if (!study) return notFound()
  return <CaseStudyContent study={study} />
}
