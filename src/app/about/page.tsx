import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About — Fatemeh Azadbakht",
  description:
    "Fatemeh Azadbakht is a Senior Product Designer with 15+ years of experience designing accessible, scalable digital products for fintech, SaaS, and enterprise clients.",
  openGraph: {
    title: "About — Fatemeh Azadbakht",
    description:
      "Senior Product Designer specializing in design systems, UX strategy, and accessibility.",
    url: "https://fatemeh.ca/about",
  },
};

const timeline = [
  {
    year: "2022–Present",
    role: "Senior Product Designer",
    company: "FIRST Insurance Funding of Canada",
    description:
      "Leading product design across customer-facing portal, broker tools, and internal admin systems. Established the company's first accessibility programme achieving WCAG AA compliance.",
  },
  {
    year: "2020–2022",
    role: "Lead Product Designer",
    company: "OOBE Studio",
    description:
      "Designed and maintained a multi-brand design system serving three product teams. Reduced cross-team design inconsistencies and accelerated delivery cycles by 60%.",
  },
  {
    year: "2017–2020",
    role: "UX Designer",
    company: "Enterprise SaaS",
    description:
      "End-to-end UX design for a B2B SaaS platform serving 200+ enterprise accounts. Spearheaded the accessible onboarding redesign that became AODA compliant.",
  },
  {
    year: "2010–2017",
    role: "Digital Product Designer",
    company: "Various Clients",
    description:
      "Built experience across e-commerce, financial services, and healthcare — developing a strong foundation in user research, information architecture, and interaction design.",
  },
];

const values = [
  {
    title: "Clarity over complexity",
    description:
      "The best design solutions are often the simplest ones. I push for clarity at every layer — visual, interactive, and structural.",
  },
  {
    title: "Accessibility as craft",
    description:
      "Inclusive design is not a compliance checkbox. It is a signal of respect for users, and it consistently leads to better products for everyone.",
  },
  {
    title: "Systems thinking",
    description:
      "I design components and patterns, not just screens. Every decision I make considers its downstream impact on consistency and scalability.",
  },
  {
    title: "Research-informed intuition",
    description:
      "Fifteen years of user research has trained an instinct I trust — but I always validate it. Curiosity and rigour, together.",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-offwhite">
      {/* Hero */}
      <section className="pt-32 pb-20 px-6 md:px-12 lg:px-20 max-w-5xl mx-auto">
        <div className="flex items-center gap-4 mb-6">
          <span className="block h-px w-8" style={{ background: "#4FA6A1" }} />
          <span className="font-inter text-[11px] font-medium tracking-[0.2em] uppercase text-teal">
            About
          </span>
        </div>
        <h1 className="font-playfair text-5xl md:text-6xl text-slate mb-8 leading-tight">
          Designing with
          <br />
          <em className="italic text-teal">intention</em>
        </h1>
        <p className="font-inter text-base font-light text-slate/65 max-w-2xl leading-relaxed">
          I&apos;m Fatemeh Azadbakht — a Senior Product Designer with over
          15 years of experience creating digital products that are
          accessible, scalable, and grounded in genuine user understanding.
          My work spans fintech, enterprise SaaS, and complex B2B platforms,
          with a consistent focus on design systems, UX strategy, and
          inclusive design.
        </p>
      </section>

      {/* Values */}
      <section
        aria-labelledby="values-heading"
        className="py-20"
        style={{ background: "#2E2E2C" }}
      >
        <div className="max-w-5xl mx-auto px-6 md:px-12 lg:px-20">
          <h2
            id="values-heading"
            className="font-playfair text-3xl md:text-4xl text-white mb-12"
          >
            What I believe
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {values.map((v) => (
              <div key={v.title} className="border-l-2 border-teal pl-6">
                <h3 className="font-playfair text-xl text-white mb-3">
                  {v.title}
                </h3>
                <p className="font-inter text-sm text-white/55 leading-relaxed">
                  {v.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section
        aria-labelledby="experience-heading"
        className="py-20 bg-offwhite"
      >
        <div className="max-w-5xl mx-auto px-6 md:px-12 lg:px-20">
          <h2
            id="experience-heading"
            className="font-playfair text-3xl md:text-4xl text-slate mb-12"
          >
            Experience
          </h2>
          <ol className="flex flex-col gap-10 list-none m-0 p-0">
            {timeline.map((item, i) => (
              <li
                key={i}
                className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 pb-10 border-b border-sage/30 last:border-b-0"
              >
                <div className="md:col-span-3">
                  <span className="font-inter text-[11px] font-semibold uppercase tracking-[0.14em] text-teal">
                    {item.year}
                  </span>
                </div>
                <div className="md:col-span-9">
                  <h3 className="font-playfair text-xl text-slate mb-1">
                    {item.role}
                  </h3>
                  <p className="font-inter text-sm font-medium text-teal mb-3">
                    {item.company}
                  </p>
                  <p className="font-inter text-sm text-slate/60 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20" style={{ background: "#e8f4f3" }}>
        <div className="max-w-5xl mx-auto px-6 md:px-12 lg:px-20 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <h2 className="font-playfair text-3xl text-slate mb-2">
              Let&apos;s work together
            </h2>
            <p className="font-inter text-sm text-slate/60">
              Open to senior product design roles in fintech, SaaS, and enterprise.
            </p>
          </div>
          <Link
            href="/#contact"
            className="font-inter text-sm font-medium bg-teal text-white px-7 py-3.5 hover:bg-teal/80 transition-colors duration-200 rounded-none flex-shrink-0"
          >
            Get in Touch →
          </Link>
        </div>
      </section>
    </div>
  );
}
