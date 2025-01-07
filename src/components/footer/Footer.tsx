import Link from "next/link";
import {
  FaDiscord,
  FaGithub,
  FaRocket,
  FaSatellite,
  FaTwitter,
} from "react-icons/fa";
import { HiSparkles } from "react-icons/hi2";
import "./Footer.css";

const SOCIAL_LINKS = [
  { icon: FaTwitter, href: "#", label: "Twitter" },
  { icon: FaDiscord, href: "#", label: "Discord" },
  { icon: FaGithub, href: "#", label: "GitHub" },
];

const NAV_SECTIONS = [
  {
    title: "Mission Control",
    links: [
      { label: "About Us", href: "#about" },
      { label: "Our Games", href: "#games" },
      { label: "Launch with Us", href: "#pitch" },
      { label: "News & Updates", href: "#news" },
    ],
  },
  {
    title: "Flight Manual",
    links: [
      { label: "Publishing Process", href: "#process" },
      { label: "Developer Resources", href: "#resources" },
      { label: "FAQ", href: "#faq" },
      { label: "Contact", href: "#contact" },
    ],
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative footer-wrapper">
      {/* Simplified background layers */}
      <div className="absolute inset-0 footer-bg">
        <div className="aurora-layer" />
      </div>
      <div className="footer-accent" />

      <div className="container-custom relative z-10 pt-20 pb-12">
        <div className="footer-content">
          {/* Main Footer Content */}
          <div className="footer-grid">
            {/* Brand Column */}
            <div className="brand-column">
              <div className="brand-content">
                <div className="logo-section">
                  <FaSatellite className="text-4xl text-primary mb-4" />
                  <h2 className="text-2xl font-bold cosmic-text mb-4">
                    Fennonauts
                  </h2>
                </div>
                <p className="text-white/70 mb-6">
                  Launching Finnish indie games to the stars! Join our mission
                  to make your game an interstellar success. 🚀
                </p>
                <div className="social-links">
                  {SOCIAL_LINKS.map((social, index) => (
                    <Link
                      key={index}
                      href={social.href}
                      className="social-link"
                      aria-label={social.label}
                    >
                      <social.icon />
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Navigation Columns */}
            {NAV_SECTIONS.map((section, index) => (
              <div key={index} className="nav-column">
                <h3 className="nav-title">
                  <HiSparkles className="title-icon" />
                  {section.title}
                </h3>
                <ul className="nav-links">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link href={link.href} className="footer-link">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Newsletter Column */}
            <div className="newsletter-column">
              <h3 className="nav-title">
                <FaRocket className="title-icon" />
                Mission Updates
              </h3>
              <p className="text-white/70 mb-4">
                Subscribe to receive cosmic news and indie game updates!
              </p>
              <form className="newsletter-form">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="newsletter-input"
                />
                <button type="submit" className="newsletter-button group">
                  <span>Join</span>
                  <FaRocket className="ml-2 group-hover:-translate-y-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="footer-bottom">
            <div className="cosmic-separator" />
            <div className="bottom-content">
              <p className="copyright">
                © {currentYear} Fennonauts. All rights reserved.
              </p>
              <div className="legal-links">
                <Link href="/privacy" className="legal-link">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="legal-link">
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
