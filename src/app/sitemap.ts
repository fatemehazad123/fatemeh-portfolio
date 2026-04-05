import { MetadataRoute } from 'next'
import { caseStudies } from '@/lib/caseStudies'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://fatemeh.ca'

  const caseStudyPages = caseStudies
    .filter(s => s.slug !== 'first-insurance-portal')
    .map(s => ({
      url: `${base}/work/${s.slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    }))

  return [
    {
      url: base,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1.0,
    },
    {
      url: `${base}/resume`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    ...caseStudyPages,
  ]
}
