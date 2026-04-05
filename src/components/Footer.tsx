export default function Footer() {
  return (
    <footer
      role="contentinfo"
      className="py-10"
      style={{ background: "#2E2E2C" }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          {/* Left: name */}
          <div>
            <span className="font-playfair text-base font-medium text-sage/60">
              Fatemeh Azadbakht
            </span>
          </div>

          {/* Center: social links */}
          <nav
            aria-label="Social links"
            className="flex items-center justify-start md:justify-center gap-6"
          >
            <a
              href="https://linkedin.com/in/fazadbakht"
              target="_blank"
              rel="noopener noreferrer"
              className="font-inter text-xs text-sage/50 hover:text-sage/90 transition-colors duration-200 uppercase tracking-wider"
              aria-label="Fatemeh's LinkedIn profile (opens in new tab)"
            >
              LinkedIn
            </a>
            <a
              href="/resume"
              className="font-inter text-xs text-sage/50 hover:text-sage/90 transition-colors duration-200 uppercase tracking-wider"
              aria-label="View Fatemeh's resume"
            >
              Resume
            </a>
            <a
              href="mailto:info@fatemeh.ca"
              className="font-inter text-xs text-sage/50 hover:text-sage/90 transition-colors duration-200 uppercase tracking-wider"
              aria-label="Email Fatemeh"
            >
              Email
            </a>
          </nav>

          {/* Right: copyright */}
          <div className="md:text-right">
            <span className="font-inter text-xs text-sage/40">
              © 2026 Fatemeh Azadbakht
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
