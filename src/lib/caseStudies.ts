export interface CaseStudy {
  slug: string
  number: string
  title: string
  subtitle: string
  client: string
  year: string
  role: string
  tags: string[]
  cardDescription: string
  statLine?: string
  cardColor: string
  cardTextColor: string
  heroImage?: string
  heroVideo?: string
  summary: string
  problem: string
  problemDetails: string[]
  myRole: string
  process: ProcessStep[]
  solution: string
  solutionPoints: string[]
  outcomes: Outcome[]
  testimonial?: Testimonial
  confidentialityNote?: string
  images?: string[]
  tools: string[]
  nextSlug: string
  nextTitle: string
}

interface ProcessStep {
  title: string
  description: string
}

interface Outcome {
  metric: string
  label: string
  description: string
}

interface Testimonial {
  quote: string
  name: string
  role: string
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 'td-bank-cybersecurity',
    number: '01',
    title: 'TD Bank Cybersecurity Report',
    subtitle: 'Annual Report Design for TD Bank',
    client: 'TD Bank',
    year: '2024',
    role: 'Design Lead, Publication and Information Design',
    tags: ['Information Architecture', 'UX Strategy', 'Enterprise'],
    cardDescription:
      'Translating complex cybersecurity strategy into a clear, executive-ready information system for 88,000+ TD employees across multiple audience types.',
    statLine: '88,000+ employees · Multi-audience system',
    cardColor: '#1a3a38',
    cardTextColor: '#4FA6A1',
    heroImage: '/images/work/td-bank-hero.png',
    summary:
      "TD Bank's annual cybersecurity report reached 88,000 employees but was not working for any of them. Executives could not scan it for direction. Teams could not extract operational priorities. Frontline employees found it too technical to act on. I redesigned it as a layered information system where each audience could find what they needed without the report failing the others.",
    problem:
      'The report was trying to be one thing for three fundamentally different readers, and succeeding for none of them.',
    problemDetails: [
      'Executives needed strategic signals in under 60 seconds. The existing format buried them in operational detail.',
      'Team leads needed clear priority frameworks. These were scattered across the document with no consistent structure.',
      '88,000 employees needed practical, human guidance. Technical language made the content inaccessible to most of them.',
      'No visual hierarchy to signal what was directional versus operational versus educational.',
      'No modular architecture meant every annual edition required a full redesign from scratch.',
    ],
    myRole:
      'I led information architecture, visual system design, and production for the complete publication redesign. I worked directly with TD Bank cybersecurity leadership to map audience needs, define the content hierarchy, and translate their strategy into a system that served three reader types simultaneously.',
    process: [
      {
        title: 'Audience Needs Mapping',
        description:
          'I mapped three distinct reader profiles before opening any design software. What does an executive need in the first 30 seconds? What does a team lead need to walk away with? What does a frontline employee need to actually change their behavior? These three questions became the design brief.',
      },
      {
        title: 'Content Hierarchy Redesign',
        description:
          'I restructured the information architecture to create three distinct entry points within a single publication. Executive summaries surface at chapter openers. Operational frameworks are consistently structured. Employee guidance is written and designed separately to feel human and actionable rather than corporate and abstract.',
      },
      {
        title: 'Visual System Construction',
        description:
          'I built a modular layout system with seven typographic levels, consistent chapter architecture, and a visual language for representing cybersecurity concepts that prioritizes relationships and structure over decoration. Every diagram was evaluated against one question: does this make the concept clearer or just more visual?',
      },
      {
        title: 'Scalable Framework Delivery',
        description:
          'I delivered a modular design system alongside the finished publication so future editions could be produced without requiring a redesign. Templates, style guides, and component documentation were part of the final deliverable.',
      },
    ],
    solution:
      'A layered publication redesigned as an information product with three distinct reading modes built into one coherent system.',
    solutionPoints: [
      'Three audience entry points: executive summary, team operational brief, and employee guide, all within one publication',
      'Seven-level typographic hierarchy calibrated for both fast scanning and deep reading',
      'Visual frameworks translating cybersecurity concepts into navigable systems without oversimplifying them',
      'Modular chapter architecture enabling annual updates without full redesign',
      'Production-ready design system and templates delivered alongside the finished report',
    ],
    outcomes: [
      {
        metric: '88,000+',
        label: 'Employees Reached',
        description:
          'A single publication serving the full TD Bank organization across all levels of technical literacy',
      },
      {
        metric: '3',
        label: 'Audience Types, One System',
        description:
          'Executive, team, and employee reading modes designed into a single coherent publication architecture',
      },
      {
        metric: 'Annual',
        label: 'Scalable System',
        description:
          'Modular framework enabling future editions without requiring a redesign from scratch each year',
      },
    ],
    testimonial: {
      quote:
        'I had the opportunity to work with Fatemeh on a mission critical project. Her dedication, speed and collaborative skills were exceptional. She is creative, highly skilled and fantastic at communicating and interpreting complexity. I would recommend her without hesitation and look forward to working with her again.',
      name: 'Dwayne Matthews O.C.T',
      role: 'Keynote Speaker, Innovation Evangelist, Future Strategist',
    },
    confidentialityNote:
      'This case study includes selected and anonymized visuals. Sensitive content has been edited for confidentiality while preserving the design system, structure, and intent.',
    images: [
      '/images/work/td-bank-hero.png',
      '/images/work/td-bank-02.jpg',
      '/images/work/td-bank-03.jpeg',
      '/images/work/td-bank-04.jpeg',
      '/images/work/td-bank-05.jpeg',
      '/images/work/td-bank-06.jpeg',
    ],
    tools: ['Figma', 'Adobe InDesign', 'Adobe Illustrator', 'Adobe Photoshop'],
    nextSlug: 'little-iran-identity',
    nextTitle: 'Little Iran Cultural District',
  },

  {
    slug: 'little-iran-identity',
    number: '02',
    title: 'Little Iran Cultural District',
    subtitle: 'Public Space Identity System for the City of Toronto',
    client: 'City of Toronto',
    year: '2025',
    role: 'Design Lead, Visual Identity and Public Space',
    tags: ['Design Systems', 'Public Space', 'Civic Design'],
    cardDescription:
      "A scalable identity system for Toronto's Iranian cultural district, designed within strict municipal constraints to balance cultural expression with civic infrastructure.",
    statLine: 'City-recognized · Permanent civic infrastructure',
    cardColor: '#2d1a0a',
    cardTextColor: '#C96A4A',
    heroImage: '/images/work/little-iran-hero.jpg',
    summary:
      'Designing a cultural district identity for the City of Toronto meant navigating a tension most branding projects never face: how do you represent a complex living culture in a civic context without reducing it to a symbol, or disappearing it into neutrality? I resolved this by treating it as a public design system problem rather than a branding problem.',
    problem:
      'Cultural identity systems for public space fail in one of two directions: they stereotype the culture they represent, or they sanitize it into irrelevance. Neither was acceptable for a community that had fought for this recognition.',
    problemDetails: [
      'Municipal approval required meeting strict civic design standards while maintaining genuine cultural expression',
      'Iranian culture is not a single visual tradition. Representing it required research and abstraction, not literal symbols',
      'The system needed to operate across banner, signage, streetscape, and future city applications with no redesign',
      'Outdoor durability requirements for a high-traffic Toronto street environment',
      'Community accountability to Iranian-Canadians who had advocated for this recognition',
    ],
    myRole:
      'I led the project from cultural research through municipal submission. I defined the design principles, built the visual system, produced all format applications, and managed the City of Toronto approval process. I was the sole designer on the project.',
    process: [
      {
        title: 'Structural Research Over Visual Search',
        description:
          'I deliberately avoided searching for Iranian visual references at first. Instead I studied the structural logic of Persian design traditions: how geometry functions, how rhythm and repetition create meaning, how modularity operates in architectural and textile contexts. This gave me principles to design from rather than images to copy.',
      },
      {
        title: 'Constraint as Creative Framework',
        description:
          'I mapped every municipal requirement before beginning: legibility at distance, outdoor material compatibility, color reproduction in UV conditions, and compliance with the city public space framework. These constraints became the brief, not obstacles to the brief.',
      },
      {
        title: 'Modular System Architecture',
        description:
          'The visual language was built as a system of combinable elements rather than fixed compositions. Any element could scale, rotate, combine, or adapt to a new format without losing its structural logic. This is what makes it a system rather than a logo.',
      },
      {
        title: 'Multi-format Verification',
        description:
          'Before any municipal submission, I tested the complete system at scale across all required applications. A system that works on a business card but fails on a 20-foot banner is not a public space system.',
      },
    ],
    solution:
      'A geometry-based public design system derived from Persian structural principles, scalable across all civic formats, and approved through the City of Toronto review process.',
    solutionPoints: [
      'Design principles extracted from Persian architectural geometry rather than decorative surface references',
      'Modular visual language with no fixed compositions, enabling infinite format adaptation without redesign',
      'Outdoor-calibrated color system with verified reproduction across material types',
      'Full application suite: banners, signage, streetscape, and digital formats',
      'Municipal-compliant system approved through the City of Toronto review process',
    ],
    outcomes: [
      {
        metric: 'City',
        label: 'Formally Recognized',
        description: "Adopted as part of Toronto's official cultural district framework",
      },
      {
        metric: 'Permanent',
        label: 'Public Space Presence',
        description: 'Implemented in the permanent streetscape of Yonge Street, Toronto',
      },
      {
        metric: 'Foundation',
        label: 'For Future Expansion',
        description:
          'System architecture designed to support additional city-led applications as the district grows',
      },
    ],
    images: [
      '/images/work/little-iran-hero.jpg',
      '/images/work/little-iran-01.jpg',
      '/images/work/little-iran-02.jpg',
      '/images/work/little-iran-03.jpg',
      '/images/work/little-iran-04.jpg',
      '/images/work/little-iran-05.jpg',
      '/images/work/little-iran-06.jpg',
    ],
    tools: ['Figma', 'Adobe Illustrator', 'Adobe InDesign'],
    nextSlug: 'first-insurance-portal',
    nextTitle: 'FIRST Insurance Design System',
  },

  {
    slug: 'first-insurance-portal',
    number: '03',
    title: 'FIRST Insurance: 11 Years of Product and Design Systems',
    subtitle: 'Design Systems, Fintech UX, and Brand Governance Across a Regulated Financial Enterprise',
    client: 'FIRST Insurance Funding of Canada',
    year: '2015 - 2026',
    role: 'Senior Designer, Product and Brand Systems',
    tags: ['Product Design', 'Design Systems', 'Fintech UX', 'WCAG AA', 'Brand Governance'],
    cardDescription:
      "Eleven years building and governing the complete design and product system for one of Canada's leading insurance funding companies, including fintech product UX, bilingual design, and enterprise brand governance across every customer touchpoint.",
    statLine: '60% faster design cycles · 3 teams adopted',
    cardColor: '#0d1f1e',
    cardTextColor: '#4FA6A1',
    heroImage: '/images/work/first-hero.jpg',
    heroVideo: '/images/work/first-hero.mp4',
    summary:
      'Eleven years of designing in a regulated financial environment teaches you something no design course does: trust is a visual property. At FIRST Insurance Funding of Canada, I owned the complete design and product system from brand governance to fintech UX wireframing. I redesigned a payment form from a static PDF into a dynamic white-label product used inside client dashboards. I audited and migrated an entire website to the US market. I built annual design systems that scaled across print, digital, video, and event environments. And I did all of it in both English and French.',
    problem:
      'A growing regulated financial company needed one designer to own everything: brand consistency across 50+ annual touchpoints, UX for a fintech product used by thousands of brokers, and a design system that could scale without fragmenting.',
    problemDetails: [
      'No unified design system meant visual inconsistency across customer-facing and internal materials, eroding trust in a regulated financial context',
      'First InSite payment form was a static PDF that could not scale as new payment methods were added, creating friction for brokers and their clients',
      'The online payment form needed to adapt to each client\'s branding dynamically, requiring a white-label theming system within the product',
      'Website migration to the US market required a full information architecture audit across all pages, navigation, and assets for desktop, tablet, and mobile',
      'All designed materials required bilingual delivery in both English and French',
    ],
    myRole:
      'I was the sole designer responsible for the complete visual and product design system at FIRST Insurance for 11 years. My scope included fintech product UX wireframing, brand system governance, annual campaign design, executive presentation design, bilingual material production, website IA audit, video editing, and AI-augmented workflow integration. I worked directly with marketing, sales, operations, and the Solution team to ensure every design decision served real user and business needs.',
    process: [
      {
        title: 'Annual Design System with Seasonal Tokens',
        description:
          'At the start of each year I designed an annual branded theme that served as a design token system for every event and campaign the company would run. This theme scaled across email, social media, PR publications, video, website, posters, backdrops, ballot boxes, prize displays, sales sheets, contact sheets, and catalogues. One system. Every touchpoint. Zero inconsistency.',
      },
      {
        title: 'First InSite Fintech Product UX',
        description:
          'I wireframed the user experience for First InSite Lite and First InSite Enhanced, FIRST Insurance\'s broker-facing fintech products. I conducted ongoing user research by interviewing the Solution team to identify bottlenecks in the user experience and prioritize improvements. This direct feedback loop between design and the people closest to users drove every UX iteration.',
      },
      {
        title: 'Payment Form Redesign',
        description:
          'The Payment Options Form began as a simple three-option PDF. As payment methods expanded, the PDF model broke. I redesigned it as a dynamic online form that lived inside the user dashboard and adapted its visual design to each client\'s branding and colors automatically. A static document became a white-label product feature.',
      },
      {
        title: 'US Website Migration and IA Audit',
        description:
          'For the US market migration I conducted a full information architecture audit of the existing website. I exported the complete sitemap, categorized every page by navigation structure, saved all assets in correct sizing and padding for desktop, tablet, and mobile, identified every missing element and visual inconsistency, and presented findings to management before executing the fixes.',
      },
    ],
    solution:
      'A comprehensive design and product system that maintained consistency, governed brand standards, improved fintech product UX, and scaled across every format and language for 11 continuous years in a regulated financial environment.',
    solutionPoints: [
      'Annual design token system scaling across 50+ touchpoints including print, digital, event, and video formats each year',
      'First InSite fintech product UX wireframes for Lite and Enhanced versions with ongoing user research driving improvements',
      'Payment Options Form redesigned from static PDF to dynamic white-label online form adapting to client branding automatically',
      'Full US website IA audit covering sitemap, navigation, assets, and responsive sizing across desktop, tablet, and mobile',
      'WCAG AA accessibility standards applied across all digital products and materials',
      'Complete bilingual delivery in English and French for all designed materials',
      'AI-augmented workflows for brainstorming, concept development, and video creation integrated into production process',
    ],
    outcomes: [
      {
        metric: '11',
        label: 'Years of System Ownership',
        description:
          'Complete design and product system built, governed, and evolved across 11 years of organizational growth without losing coherence',
      },
      {
        metric: 'PDF to Product',
        label: 'Payment Form Redesign',
        description:
          'Static three-option PDF redesigned as a dynamic white-label online form adapting to client branding inside the user dashboard',
      },
      {
        metric: 'EN + FR',
        label: 'Bilingual Design System',
        description:
          'Every designed material produced in both English and French across all formats and touchpoints',
      },
    ],
    images: [
      '/images/work/first-hero.jpg',
      '/images/work/first-01.jpg',
      '/images/work/first-02.jpg',
      '/images/work/first-03.jpg',
      '/images/work/first-04.jpg',
      '/images/work/first-05.jpg',
      '/images/work/first-06.jpg',
    ],
    tools: ['Figma', 'Adobe CC', 'Adobe InDesign', 'Adobe Illustrator'],
    nextSlug: 'silk-road-identity',
    nextTitle: 'Silk Road Event Identity',
  },

  {
    slug: 'silk-road-identity',
    number: '05',
    title: 'Silk Road Event Identity',
    subtitle: 'Experiential Identity System Across Two Major Cultural Events',
    client: 'Silk Road Events',
    year: '2025',
    role: 'Lead Visual Designer, Brand Identity and Visual Systems',
    tags: ['Experiential Design', 'Design Systems', 'Multi-touchpoint'],
    cardDescription:
      'A unified visual identity system for Silk Road 2 and Beyond the Silk Concert, translating cultural exchange into a scalable design language operating across stage environments, print, and digital media.',
    statLine: '2 events · 6 weeks · Every touchpoint',
    cardColor: '#1a0d1a',
    cardTextColor: '#C96A4A',
    heroImage: '/images/work/silk-road-hero.jpg',
    summary:
      'Cultural event identity design is a systems problem disguised as a branding problem. For Silk Road 2 and Beyond the Silk Concert, the challenge was building one visual language that could authentically represent diverse cultural heritage, scale from a pocket program to a full stage backdrop, and survive six weeks of multi-partner production without losing coherence.',
    problem:
      'A cultural event identity that only works in one format, at one scale, or under ideal production conditions is not a system. It is a poster, not a system.',
    problemDetails: [
      'Single identity representing multiple distinct cultural traditions without creating hierarchy between them',
      'Scale requirements from pocket program to full stage backdrop within one system',
      'Six-week production timeline with multiple external vendors working simultaneously from shared assets',
      'Print and digital applications with fundamentally different production requirements',
      'Cultural accountability to the communities represented by the events',
    ],
    myRole:
      'I led the complete identity system from design principles through production-ready delivery. I defined the conceptual framework, built the visual language, directed all format applications, and managed the system handoff to external production partners working under live event conditions. Delivered within six weeks.',
    process: [
      {
        title: 'Principle Before Aesthetic',
        description:
          'I derived three design principles from the historical Silk Road narrative before making any visual decisions: Flow representing movement and exchange, Connection representing the network between cultures, and Layered Cultural Motifs representing the blending of traditions. These principles became the filter for every subsequent decision.',
      },
      {
        title: 'Modular System Architecture',
        description:
          'I built the visual language as a system of combinable elements rather than fixed compositions. Curved flow forms, network structures, and layered pattern elements could be combined in any configuration without losing coherence. This modularity was not a style choice. It was the only architecture that could survive multi-partner production at scale.',
      },
      {
        title: 'Production Reality Testing',
        description:
          'The system was tested across all required formats simultaneously before any production began. Stage projection, print poster, digital header, large-format banner, and sponsor collateral. A system that fails at any one of these is not complete.',
      },
      {
        title: 'Partner Handoff System',
        description:
          'I built production-ready asset libraries and usage documentation that allowed external vendors to produce materials independently without creating inconsistency. Under live event conditions, the clarity of your handoff determines whether the system survives.',
      },
    ],
    solution:
      'A modular event identity system built on three cultural design principles, scalable from pocket program to stage backdrop, and resilient enough for six weeks of multi-partner production.',
    solutionPoints: [
      'Three-principle design framework: Flow, Connection, and Layered Cultural Motifs, derived from historical research not decorative reference',
      'Modular graphic language scaling without redesign from print to stage projection',
      'Production-ready asset library enabling external vendor independence under live event timelines',
      'Unified color and typography system calibrated for both screen and print reproduction requirements',
      'Full event ecosystem: posters, banners, signage, social, stage, and sponsor materials',
    ],
    outcomes: [
      {
        metric: '2',
        label: 'Major Events, One System',
        description:
          'Silk Road 2 and Beyond the Silk Concert unified under a single coherent identity',
      },
      {
        metric: '6',
        label: 'Week Delivery',
        description:
          'Complete identity system designed, produced, and handed off within six weeks',
      },
      {
        metric: 'Recognized',
        label: 'For Clarity and Reliability',
        description:
          'Cited by event organizers for coherence across all touchpoints under live production conditions',
      },
    ],
    testimonial: {
      quote:
        'Fatemeh demonstrated exceptional attention to detail, clarity in her design decisions, and a disciplined approach under tight timelines. She was reliable, thoughtful, and highly collaborative throughout the process, delivering work that met both creative and production requirements with precision.',
      name: 'Orkideh Salehi',
      role: 'Director, Founder and CEO, Silk Road Event and Orkid Gallery Collection',
    },
    tools: ['Figma', 'Adobe Illustrator', 'Adobe InDesign', 'Adobe Photoshop'],
    images: [
      '/images/work/silk-road-hero.jpg',
      '/images/work/silk-road-01.jpg',
      '/images/work/silk-road-02.jpg',
      '/images/work/silk-road-03.jpg',
      '/images/work/silk-road-04.jpg',
      '/images/work/silk-road-05.jpg',
      '/images/work/silk-road-06.jpg',
      '/images/work/silk-road-07.jpg',
      '/images/work/silk-road-08.jpg',
      '/images/work/silk-road-09.jpg',
      '/images/work/silk-road-10.jpg',
    ],
    nextSlug: 'law-society-ontario',
    nextTitle: 'Law Society of Ontario',
  },

  {
    slug: 'law-society-ontario',
    number: '06',
    title: 'Law Society of Ontario',
    subtitle: 'Experiential Identity for an Institutional Cultural Event',
    client: 'Law Society of Ontario',
    year: '2025',
    role: 'Design Lead, Visual Identity System',
    tags: ['Institutional Design', 'Visual Systems', 'Regulated Environment'],
    cardDescription:
      'A disciplined visual identity system for an India-themed institutional event by the Law Society of Ontario, balancing cultural expression with the credibility and restraint required in a highly regulated professional environment.',
    statLine: '50,000 legal professionals · Institutional identity',
    cardColor: '#0d0a1a',
    cardTextColor: '#BFCFC6',
    heroImage: '/images/work/lso-hero.png',
    summary:
      'Designing for the Law Society of Ontario means designing for an institution that regulates over 50,000 legal professionals in Canada. Every visual decision carries institutional weight. When they commissioned a cultural event identity, the brief was not to make it beautiful. It was to make it credible, appropriate, and capable of honoring a rich cultural theme without compromising the institution\'s standing.',
    problem:
      'Cultural expression and institutional credibility are often treated as opposites. The real design challenge was proving they are not, by building a system that achieved both simultaneously.',
    problemDetails: [
      'Highly regulated institutional context with zero tolerance for visual decisions that undermine professional credibility',
      'India-inspired theme requiring genuine cultural engagement rather than surface decoration',
      'Formal audience of legal professionals with high expectations for visual restraint and quality',
      'Multiple deliverables across print and digital requiring consistent institutional tone throughout',
      'Two distinct visual directions required before stakeholder selection',
    ],
    myRole:
      'I served as Design Lead for the complete visual identity system. I conducted institutional research, developed two distinct direction proposals, led the stakeholder review process, refined the selected direction into a production-ready system, and oversaw delivery across all event touchpoints.',
    process: [
      {
        title: 'Institutional Context as Brief',
        description:
          'Before any design exploration, I studied what the Law Society of Ontario represents to its members and to the public: rigor, fairness, professional accountability. These qualities became the invisible frame that every visual decision had to fit within. The cultural theme would express itself through this frame, not despite it.',
      },
      {
        title: 'Two Genuine Directions',
        description:
          'I developed two distinct visual directions that represented genuinely different interpretations of the brief. Not a conservative option and a safe option, but two viable systems that made different bets about where the balance between cultural expression and institutional restraint should sit. This gave the client a real choice.',
      },
      {
        title: 'Refinement Under Restraint',
        description:
          'The selected direction was refined through the lens of institutional appropriateness at every stage. Color decisions were checked against formality requirements. Typography was evaluated for both cultural resonance and professional credibility. Every element earned its place by serving both requirements simultaneously.',
      },
      {
        title: 'Reliable Delivery',
        description:
          'The final system was produced and handed off on schedule across all deliverables. In institutional contexts, reliability is part of the design quality. A system delivered late is a system that has already failed one of its requirements.',
      },
    ],
    solution:
      "A visual identity system that honors cultural richness through restraint, built for one of Canada's most prominent regulated institutions and delivered reliably on an institutional timeline.",
    solutionPoints: [
      'India-inspired visual language filtered through institutional design standards without losing cultural authenticity',
      'Controlled color system balancing cultural warmth with the professional credibility required in a formal legal context',
      'Two genuine direction proposals giving stakeholders a real informed choice',
      'Typography hierarchy functioning across both formal documents and event environments',
      'Complete delivery on institutional timeline enabling smooth event execution',
    ],
    outcomes: [
      {
        metric: 'LSO',
        label: 'Ongoing Client',
        description:
          "Selected again for the Law Society of Ontario's 2025 annual mission event based on the quality of this work",
      },
      {
        metric: '50,000+',
        label: 'Legal Professionals Represented',
        description:
          'Identity system designed for an institution regulating over 50,000 lawyers and paralegals across Ontario',
      },
      {
        metric: 'On Time',
        label: 'Institutional Delivery',
        description:
          'Complete system produced and handed off on schedule enabling all stakeholders to execute without delay',
      },
    ],
    tools: ['Figma', 'Adobe Illustrator', 'Adobe InDesign'],
    images: [
      '/images/work/lso-hero.png',
      '/images/work/lso-01.jpg',
      '/images/work/lso-02.jpg',
      '/images/work/lso-03.jpg',
      '/images/work/lso-04.jpg',
      '/images/work/lso-05.jpg',
      '/images/work/lso-06.jpg',
    ],
    nextSlug: 'td-bank-cybersecurity',
    nextTitle: 'TD Bank Cybersecurity Report',
  },
]

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find(cs => cs.slug === slug)
}

export function getAdjacentCaseStudy(currentSlug: string): CaseStudy | undefined {
  const current = caseStudies.find(cs => cs.slug === currentSlug)
  if (!current) return undefined
  return caseStudies.find(cs => cs.slug === current.nextSlug)
}
