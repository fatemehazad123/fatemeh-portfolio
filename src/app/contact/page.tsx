import type { Metadata } from "next";
import FloralAccent from "@/components/FloralAccent";

export const metadata: Metadata = {
  title: "Contact — Fatemeh Azadbakht",
  description:
    "Get in touch with Fatemeh Azadbakht — Senior Product Designer open to roles in fintech, SaaS, and enterprise.",
  openGraph: {
    title: "Contact — Fatemeh Azadbakht",
    description:
      "Open to senior product design roles in fintech, SaaS, and enterprise.",
    url: "https://www.fatemeh.ca/contact",
  },
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-offwhite">
      {/* Hero */}
      <section
        className="relative overflow-hidden pt-32 pb-24 px-6 md:px-12 lg:px-20"
        style={{ background: "#4FA6A1" }}
      >
        <div
          className="absolute top-0 right-0 pointer-events-none"
          aria-hidden="true"
        >
          <FloralAccent color="#ffffff" opacity={0.08} />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <span className="block h-px w-8 bg-white/40" />
            <span className="font-inter text-[11px] font-medium tracking-[0.2em] uppercase text-white/70">
              Contact
            </span>
          </div>
          <h1 className="font-playfair text-5xl md:text-6xl text-white leading-tight mb-6">
            Let&apos;s build something
            <br />
            <em className="italic">worth using.</em>
          </h1>
          <p className="font-inter text-base font-light text-white/75 max-w-lg">
            Open to senior product design roles in fintech, SaaS, and enterprise.
            I bring 15+ years of experience, deep accessibility expertise, and a
            genuine love for solving complex product challenges.
          </p>
        </div>
      </section>

      {/* Contact content */}
      <section className="py-20 px-6 md:px-12 lg:px-20 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Left: contact info */}
          <div>
            <h2 className="font-playfair text-2xl text-slate mb-8">
              Get in touch
            </h2>

            <div className="space-y-6">
              <div>
                <p className="font-inter text-[10px] font-semibold uppercase tracking-[0.16em] text-teal mb-1">
                  Email
                </p>
                <a
                  href="mailto:hello@fatemeh.ca"
                  className="font-inter text-sm text-slate hover:text-teal transition-colors duration-200"
                >
                  hello@fatemeh.ca
                </a>
              </div>

              <div>
                <p className="font-inter text-[10px] font-semibold uppercase tracking-[0.16em] text-teal mb-1">
                  LinkedIn
                </p>
                <a
                  href="https://linkedin.com/in/fatemehazadbakht"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-inter text-sm text-slate hover:text-teal transition-colors duration-200"
                  aria-label="Visit Fatemeh's LinkedIn profile (opens in new tab)"
                >
                  linkedin.com/in/fatemehazadbakht
                </a>
              </div>

              <div>
                <p className="font-inter text-[10px] font-semibold uppercase tracking-[0.16em] text-teal mb-2">
                  Currently open to
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Senior Product Designer",
                    "Lead Product Designer",
                    "Design System Lead",
                    "Head of Design",
                  ].map((role) => (
                    <span
                      key={role}
                      className="font-inter text-[11px] px-3 py-1.5 border"
                      style={{
                        borderColor: "#4FA6A1",
                        background: "#e8f4f3",
                        color: "#4FA6A1",
                        borderRadius: "2px",
                      }}
                    >
                      {role}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right: what to expect */}
          <div>
            <h2 className="font-playfair text-2xl text-slate mb-8">
              What to expect
            </h2>
            <div className="space-y-6">
              {[
                {
                  step: "01",
                  title: "Introductory call",
                  desc: "A 30-minute conversation to understand the role, team, and product challenges you&apos;re working on.",
                },
                {
                  step: "02",
                  title: "Portfolio walkthrough",
                  desc: "I&apos;ll walk through selected case studies, focusing on process, decisions, and measurable outcomes.",
                },
                {
                  step: "03",
                  title: "Design challenge (if required)",
                  desc: "I approach design exercises as a conversation, not a performance — let&apos;s explore the problem together.",
                },
              ].map((item) => (
                <div key={item.step} className="flex gap-5">
                  <span
                    className="font-playfair font-bold flex-shrink-0 leading-none mt-0.5"
                    style={{ fontSize: "1.5rem", color: "#4FA6A1", opacity: 0.4 }}
                    aria-hidden="true"
                  >
                    {item.step}
                  </span>
                  <div>
                    <h3 className="font-inter text-sm font-semibold text-slate mb-1">
                      {item.title}
                    </h3>
                    <p
                      className="font-inter text-sm text-slate/60 leading-relaxed"
                      dangerouslySetInnerHTML={{ __html: item.desc }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-10">
              <a
                href="mailto:hello@fatemeh.ca"
                className="inline-flex items-center gap-2 font-inter text-sm font-medium bg-slate text-white px-7 py-3.5 hover:bg-slate/80 transition-colors duration-200 rounded-none"
              >
                Send me an email <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
