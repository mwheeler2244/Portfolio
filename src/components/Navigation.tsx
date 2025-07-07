"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 20;
      setIsScrolled(scrolled);

      // Calculate scroll progress
      const winScroll =
        document.body.scrollTop || document.documentElement.scrollTop;
      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrolled_percentage = (winScroll / height) * 100;
      setScrollProgress(scrolled_percentage);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (href.startsWith("#")) {
      e.preventDefault();

      // Check if we're on the home page
      if (window.location.pathname === "/") {
        // On home page - do smooth scroll
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      } else {
        // Not on home page - navigate to home with hash
        window.location.href = "/" + href;
      }
    }
    closeMenu();
  };

  return (
    <>
      {/* Enhanced Scroll Progress Indicator */}
      <div className="scroll-indicator-modern">
        <div
          className="scroll-progress-modern"
          style={{ transform: `scaleX(${scrollProgress / 100})` }}
        />
      </div>

      <header className={`nav-modern ${isScrolled ? "scrolled" : ""}`}>
        <div className="container">
          <div className="nav-container-modern">
            {/* Enhanced Logo with Icon */}
            <Link href="/" className="nav-logo-modern">
              <div className="logo-icon">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <rect
                    x="4"
                    y="4"
                    width="24"
                    height="24"
                    rx="6"
                    fill="currentColor"
                  />
                  <path d="M10 12h12v8H10z" fill="white" />
                  <circle cx="16" cy="16" r="2" fill="currentColor" />
                </svg>
              </div>
              <div className="logo-text">
                <span className="logo-name">MICHAEL</span>
                <span className="logo-subtitle">WHEELER</span>
              </div>
            </Link>

            {/* Enhanced Mobile Menu Toggle */}
            <button
              className="mobile-menu-toggle-modern"
              onClick={toggleMenu}
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              <span
                className={`hamburger-line ${isMenuOpen ? "active" : ""}`}
              ></span>
              <span
                className={`hamburger-line ${isMenuOpen ? "active" : ""}`}
              ></span>
              <span
                className={`hamburger-line ${isMenuOpen ? "active" : ""}`}
              ></span>
            </button>

            {/* Enhanced Navigation Menu */}
            <nav className={`nav-menu-modern ${isMenuOpen ? "active" : ""}`}>
              <div className="nav-links-modern">
                <Link
                  className="nav-link-modern"
                  href="#projects"
                  onClick={(e) => handleNavClick(e, "#projects")}
                >
                  <span className="nav-link-text">Work</span>
                  <span className="nav-link-number">01</span>
                </Link>
                <Link
                  className="nav-link-modern"
                  href="#about"
                  onClick={(e) => handleNavClick(e, "#about")}
                >
                  <span className="nav-link-text">About</span>
                  <span className="nav-link-number">02</span>
                </Link>
                <Link
                  className="nav-link-modern"
                  href="/blog"
                  onClick={closeMenu}
                >
                  <span className="nav-link-text">Blog</span>
                  <span className="nav-link-number">03</span>
                </Link>
                <Link
                  className="nav-link-modern nav-link-cta"
                  href="/contact"
                  onClick={closeMenu}
                >
                  <span className="nav-link-text">Contact</span>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path
                      d="M8 1L15 8L8 15M15 8H1"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              </div>

              {/* Mobile Menu Footer */}
              <div className="nav-menu-footer">
                <div className="nav-social-links">
                  <a
                    href="https://www.linkedin.com/in/michael-wheeler12/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn
                  </a>
                  <a
                    href="https://github.com/mwheeler2244"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                  <a
                    href="https://x.com/Michael68374214"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Twitter
                  </a>
                </div>
                <div className="nav-menu-contact">
                  <span>Ready to start a project?</span>
                  <a href="mailto:your-email@example.com">Get in touch</a>
                </div>
              </div>
            </nav>

            {/* Menu Overlay */}
            {isMenuOpen && (
              <div className="nav-overlay" onClick={closeMenu}></div>
            )}
          </div>
        </div>
      </header>
    </>
  );
}
