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
  keyDecision?: string
  tradeoff?: string
  retrospective?: string
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
    slug: 'muzzomo-brand-system',
    number: '01',
    title: 'Muzzomo Brand and Product System',
    subtitle: 'Visual Identity, Design Tokens, and a Dark Mode Reimagined for a Canadian Home Services Marketplace',
    client: 'Muzzomo',
    year: '2026',
    role: 'Brand and Product Design Lead',
    tags: ['Brand Identity', 'Design Systems', 'Dark Mode', 'Product Design'],
    cardDescription:
      'A complete brand and product identity for a Canadian marketplace connecting homeowners with licensed trades. Built as a full design system from concept through dark-mode-ready tokens, with the brand idea deepening rather than dimming in dark mode.',
    statLine: '6 tokens · 6-tier type system · WCAG AA verified',
    cardColor: '#082B1B',
    cardTextColor: '#F0A500',
    heroImage: '/images/work/muzzomo-hero.jpg',
    summary:
      'Muzzomo sits in a difficult position in the Canadian home services market. Mass directories are cheap but untrusted. Premium agencies are credible but inaccessible. Muzzomo is the trustworthy middle, and the brand had to express that without leaning on either extreme. I built the complete identity and product system as one continuous piece of design: foundations, mark, color, type, dark mode, and applications. The dark mode is the part I am proudest of. It is not an inversion. It is a reimagining where the brand idea actually deepens.',
    problem:
      'A home services marketplace lives or dies on trust. The brand had to feel as dependable as the trades it represents, without slipping into either generic-corporate sterility or folksy informality.',
    problemDetails: [
      'No existing visual system. The starting point was a name, a founder, and an audience. Everything else had to be built from first principles.',
      'Three audiences with different needs: homeowners want clarity and reassurance, tradespeople want credibility, property managers want efficiency. One brand had to serve all three.',
      'A marketplace product spans multiple surfaces: marketing site, mobile app, dashboards, embroidered patches, vehicle wraps. A logo alone could not carry that load. The system had to.',
      'Dark mode could not be an afterthought. The product audience expects it as a first-class experience, but most brand systems treat it as a CSS inversion that flattens the original idea.',
      'The system had to be engineering-ready: tokens, type scale, contrast ratios, font loading strategy, fallback stacks. A handoff that depended on me being in the room would not survive past month one.',
    ],
    myRole:
      'I led the complete brand and product system end to end. Concept development including three distinct directions and one mascot exploration, logo system with four lockups, six-token color system, four-tier dark mode surface architecture, six-tier typographic ladder, WCAG AA verification across all token combinations, font loading and fallback strategy, voice and tone guidelines, and full application suite from app screens to vehicle wraps. Delivered as a nineteen-page brand book and a set of production-ready assets.',
    process: [
      {
        title: 'Positioning Before Aesthetics',
        description:
          'I started with a market map, not a moodboard. Where does Muzzomo sit between mass directories, local listings, and premium agencies? The answer was the trustworthy middle, local and accountable but not boutique. That position became the brief for every visual decision that followed. A brand that wants to be everything to everyone fails the marketplace it serves.',
      },
      {
        title: 'Concept Exploration in Three Directions',
        description:
          'I developed three distinct concept directions before locking the final mark, including a mascot route. The mascot was honest work, not a token alternative. It got rejected for the right reason: a marketplace built on trust between strangers needs a calm, structural identity, not a character that distracts from the trades themselves. The selected concept reads as a home with the M as an open door. Two trades, one address.',
      },
      {
        title: 'A Complete System, Not a Logo',
        description:
          'I built four lockups for different uses, defined clear-space rules anchored to the M-stem height, specified minimum sizes for print and digital, and produced a set of usage rules with six explicit do-not patterns. The system was designed so that someone six months into a Muzzomo job could reach for the right file without asking me.',
      },
      {
        title: 'Dark Mode as a Reimagining',
        description:
          'Most dark modes invert. I treated dark mode as a parallel design language. The primary deep green moves from background to surface. A four-tier surface system replaces the single cream paper of light mode. Cream itself gets warmer to compensate for the loss of paper warmth. Two tokens that failed WCAG AA against the new surfaces were retired entirely. The logo flips inside out: the cream silhouette becomes the body of the house, the M-door is cut through to reveal the canvas behind it. The brand idea deepens in dark mode rather than just adapting to it.',
      },
      {
        title: 'Type as a Conversation Between Two Voices',
        description:
          'Fraunces carries the emotional warmth of the brand. Inter does the functional work at every screen size, with tabular numerals for prices and ETAs. Outfit is retained only for the wordmark, locked as a logo asset. I built a six-tier type ladder from display down to mono, with three protective rules: italic is reserved for two or three brand moments per page, tabular for data and proportional for prose, and a font loading strategy that lands the system in under two-hundred-thirty kilobytes total.',
      },
      {
        title: 'Production-Ready Handoff',
        description:
          'The system was delivered as design tokens ready for implementation, with explicit CSS custom property names, fallback font stacks, and WCAG AA verified contrast ratios across all six combinations. A nineteen-page brand book documents every decision and shows the system at work across vehicle wraps, embroidered patches, mobile screens, packaging, and signage.',
      },
    ],
    solution:
      'A complete brand and product system built as one continuous piece of design, with a dark mode that reimagines the brand instead of inverting it.',
    solutionPoints: [
      'Strategic positioning as the trustworthy middle between mass directories and premium agencies, with a market map driving every subsequent visual decision',
      'Concept system built around the home-with-open-door idea, selected from three explored directions including a rejected mascot route',
      'Four logo lockups with clear-space rules, minimum sizes, and six explicit do-not patterns',
      'Six-token color system with documented distribution percentages calibrated for both light and dark modes',
      'Four-tier dark mode surface architecture replacing the cream-paper warmth of light mode without flattening the brand',
      'Six-tier typographic ladder pairing Fraunces and Inter, with three protective rules governing italic use, numerals, and font loading',
      'WCAG AA verified across all token combinations, with two tokens retired in dark mode for failing contrast requirements',
      'Nineteen-page brand book delivered as a production-ready system, from foundations through applications',
    ],
    outcomes: [
      {
        metric: '0 → 1',
        label: 'Brand and Product System',
        description:
          'Complete system designed from a name and a brief, including identity, design tokens, dark mode, and engineering handoff specs',
      },
      {
        metric: 'Light + Dark',
        label: 'Designed in Parallel',
        description:
          'Dark mode reimagined as a parallel design language rather than an inverted palette, with two tokens retired for failing WCAG AA contrast',
      },
      {
        metric: 'WCAG AA',
        label: 'Accessibility Verified',
        description:
          'Every token combination audited and verified against AA contrast standards across both light and dark modes',
      },
    ],
    keyDecision:
      'The decision to design dark mode as a parallel language rather than a CSS inversion. The brand idea was warmth and hospitality, and a literal inversion would have killed it. Instead I rebuilt the surface system from the ground up, retired tokens that failed the new contrast environment, and flipped the logo so the door becomes negative space. Dark mode deepens the brand instead of dimming it.',
    tradeoff:
      'A parallel dark mode system takes significantly more work than inverting a light mode palette. Two color tokens had to be retired entirely, every contrast ratio had to be re-verified, and the logo needed a second construction. The upfront cost is real. The payoff is a product surface that does not feel like the brand turned off when the user switched themes.',
    retrospective:
      'The mascot direction I rejected taught me more than the one I kept. Building it fully before discarding it is what proved the door-as-M concept was actually the right answer. A token alternative that exists only to make the preferred direction look better is a waste of the work it took to build it. Both directions had to be real for the choice to mean anything.',
    confidentialityNote:
      'Muzzomo is currently in concept review stage. Outcomes describe the depth and completeness of the system as delivered, not post-launch metrics. The full brand book is available on request.',
    images: [
      '/images/work/muzzomo-hero.jpg',
      '/images/work/muzzomo-01-concepts.jpg',
    ],
    tools: ['Figma', 'Adobe Illustrator', 'Adobe Photoshop', 'Adobe InDesign'],
    nextSlug: 'td-bank-cybersecurity',
    nextTitle: 'TD Bank Cybersecurity Report',
  },

  {
    slug: 'td-bank-cybersecurity',
    number: '02',
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
    keyDecision: 'The decision not to simplify the cybersecurity content, but to layer it. A version written entirely for executives would have failed teams. A version written for teams would have failed frontline employees. The architecture had to serve all three without anyone feeling like they were reading the wrong document.',
    tradeoff: 'Modular systems take longer to build than one-off layouts. The annual scalability was not visible in the first edition. That upfront cost was the right investment, but it required stakeholder trust that the value would compound over time.',
    retrospective: 'If I were starting again, I would involve team leads in the content hierarchy review earlier. Their feedback in the first edition shaped several structural decisions that I arrived at too late in the process.',
    tools: ['Figma', 'Adobe InDesign', 'Adobe Illustrator', 'Adobe Photoshop'],
    nextSlug: 'little-iran-identity',
    nextTitle: 'Little Iran Cultural District',
  },

  {
    slug: 'little-iran-identity',
    number: '03',
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
    keyDecision: 'The decision to derive geometry from structural logic rather than surface imagery. It would have been faster to reference Persian decorative motifs. It produced a system instead of a pastiche.',
    tradeoff: 'The abstraction that made the system municipally viable and culturally defensible also made it less immediately recognizable to people unfamiliar with the structural logic of Persian design. That tension is real and I made a deliberate choice to favor longevity over instant legibility.',
    retrospective: 'A system installed in permanent public infrastructure teaches you what endurance means in design. Knowing it would be there for years made every decision more careful than it would have been otherwise.',
    tools: ['Figma', 'Adobe Illustrator', 'Adobe InDesign'],
    nextSlug: 'first-insurance-portal',
    nextTitle: 'FIRST Insurance Design System',
  },

  {
    slug: 'first-insurance-portal',
    number: '04',
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
    keyDecision: 'The decision to build a new token system each year rather than extending the previous one. Consistency came from structural rules, not repeated visual elements. This kept the brand fresh while keeping it coherent.',
    tradeoff: 'Annual redesign created learning curves for external vendors and internal stakeholders at the start of each cycle. The freshness was worth it, but the transition cost was real and required clear documentation and handoffs every year.',
    retrospective: 'Eleven years in one system teaches you that governance is the hardest design problem. The technical work of building each year\'s system was simpler than the organizational work of maintaining alignment around standards.',
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
    keyDecision: 'The decision to build the system around three abstract principles before making any visual choices. Flow, Connection, and Layered Cultural Motifs became filters rather than references. Every subsequent decision could be evaluated against them rather than against subjective aesthetic preference.',
    tradeoff: 'Abstract design principles are harder to sell in a client presentation than a vivid visual direction. The rationale required more explanation. But it produced a system that vendors could interpret correctly without constant oversight, which under live event timelines, was the entire point.',
    retrospective: 'The six-week timeline forced decisions that a longer process might have second-guessed. In retrospect, the constraint improved the work. Fewer revision cycles meant the system remained internally consistent instead of being refined into compromise.',
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
    keyDecision: 'The decision to develop two genuinely different directions rather than a safe option and a bold option. Both had to be defensible. This gave the client a real choice and produced better work, because both directions had to be fully resolved before presentation.',
    tradeoff: 'Two complete direction proposals doubles the conceptual workload before any production begins. The investment is only justified if both directions are real. A token alternative that exists only to make the preferred direction look better is a waste of client trust.',
    retrospective: 'Being selected again for the 2025 annual mission event confirmed that the institutional credibility built in this project was the value that mattered most to this client. That shaped how I approach every institutional brief since.',
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
    nextSlug: 'muzzomo-brand-system',
    nextTitle: 'Muzzomo Brand and Product System',
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