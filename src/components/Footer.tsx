"use client";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-enhanced">
      <div className="container">
        {/* Newsletter Section */}

        {/* Main Footer Content */}
        <div className="footer-content-enhanced">
          {/* Brand Section */}
          <div className="footer-section-enhanced footer-brand-enhanced">
            <div className="footer-logo-enhanced">
              <div className="footer-logo-icon-enhanced">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <rect
                    x="4"
                    y="4"
                    width="24"
                    height="24"
                    rx="6"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                  />
                  <circle cx="16" cy="16" r="3" fill="currentColor" />
                  <path
                    d="M12 12h8M12 20h8"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <div className="footer-logo-text-enhanced">
                <span className="footer-logo-name-enhanced">
                  MICHAEL WHEELER
                </span>
                <span className="footer-logo-subtitle-enhanced">
                  Full Stack Developer
                </span>
              </div>
            </div>
            <p className="footer-brand-description-enhanced">
              Crafting digital experiences with precision and creativity.
              Specialized in modern web applications that drive meaningful
              results.
            </p>

            {/* Availability Status */}
            <div className="footer-availability-enhanced">
              <div className="availability-indicator-enhanced">
                <div className="availability-dot-enhanced"></div>
                <span>Available for new projects</span>
              </div>
              <div className="availability-location-enhanced">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path
                    d="M7 1.5C4.5 1.5 2.5 3.5 2.5 6c0 2.5 4.5 6.5 4.5 6.5s4.5-4 4.5-6.5c0-2.5-2-4.5-4.5-4.5z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    fill="none"
                  />
                  <circle
                    cx="7"
                    cy="6"
                    r="1.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    fill="none"
                  />
                </svg>
                <span>Remote & On-site</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section-enhanced">
            <h4>Navigation</h4>
            <nav className="footer-nav-enhanced">
              <a href="#about" className="footer-link-enhanced">
                <span>About</span>
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                  <path
                    d="M2 5h6M5 2l3 3-3 3"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
              <a href="#projects" className="footer-link-enhanced">
                <span>Projects</span>
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                  <path
                    d="M2 5h6M5 2l3 3-3 3"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
              <a href="/blog" className="footer-link-enhanced">
                <span>Blog</span>
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                  <path
                    d="M2 5h6M5 2l3 3-3 3"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
              <a href="/contact" className="footer-link-enhanced">
                <span>Contact</span>
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                  <path
                    d="M2 5h6M5 2l3 3-3 3"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </nav>
          </div>

          {/* Services */}
          <div className="footer-section-enhanced">
            <h4>Services</h4>
            <div className="footer-services-enhanced">
              <div className="service-item-enhanced">
                <span>Web Development</span>
              </div>
              <div className="service-item-enhanced">
                <span>UI/UX Design</span>
              </div>
              <div className="service-item-enhanced">
                <span>Full-Stack Solutions</span>
              </div>
              <div className="service-item-enhanced">
                <span>Technical Consulting</span>
              </div>
            </div>
          </div>

          {/* Connect */}
          <div className="footer-section-enhanced">
            <h4>Connect</h4>
            <div className="footer-social-enhanced">
              <a
                href="https://www.linkedin.com/in/michael-wheeler12/"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link-enhanced"
              >
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path
                    d="M14.625 2.25H3.375C2.754 2.25 2.25 2.754 2.25 3.375v11.25c0 .621.504 1.125 1.125 1.125h11.25c.621 0 1.125-.504 1.125-1.125V3.375c0-.621-.504-1.125-1.125-1.125zM6.75 12.938H5.063V7.313H6.75v5.625zM5.906 6.581A.984.984 0 014.922 5.597a.984.984 0 01.984-.984c.543 0 .984.441.984.984a.984.984 0 01-.984.984zM14.063 12.938h-1.688v-2.813c0-.562-.113-1.125-.844-1.125s-.956.563-.956 1.125v2.813H8.888V7.313h1.687v.563c.225-.338.788-.563 1.35-.563 1.463 0 2.138.956 2.138 2.25v3.375z"
                    fill="currentColor"
                  />
                </svg>
                <span>LinkedIn</span>
              </a>
              <a
                href="https://github.com/mwheeler2244"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link-enhanced"
              >
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path
                    d="M9 2.25C5.247 2.25 2.25 5.247 2.25 9c0 2.982 1.935 5.513 4.613 6.41.338.056.45-.169.45-.338 0-.169-.056-.731-.056-1.35-1.688.338-2.138-.844-2.138-.844-.307-.731-.731-1.125-.731-1.125-.562-.394 0-.394 0-.394.619.056 1.013.619 1.013.619.563.956 1.406.675 1.688.563.056-.394.225-.675.394-.844-1.35-.169-2.756-.675-2.756-2.981 0-.675.225-1.181.619-1.594-.056-.169-.281-.844.056-1.688 0 0 .506-.169 1.688.619.488-.131.994-.194 1.5-.194s1.012.063 1.5.194c1.182-.788 1.688-.619 1.688-.619.337.844.112 1.519.056 1.688.394.413.619.919.619 1.594 0 2.306-1.406 2.812-2.756 2.981.225.194.394.563.394.956 0 .675-.056 1.219-.056 1.388 0 .169.112.394.45.338A6.752 6.752 0 0015.75 9c0-3.753-2.997-6.75-6.75-6.75z"
                    fill="currentColor"
                  />
                </svg>
                <span>GitHub</span>
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom-enhanced">
          <div className="footer-bottom-left-enhanced">
            <p>© {currentYear} Michael Wheeler. All rights reserved.</p>
            <div className="footer-bottom-links-enhanced">
              <a href="/privacy" className="footer-bottom-link-enhanced">
                Privacy Policy
              </a>
              <span className="link-separator">•</span>
              <a href="/terms" className="footer-bottom-link-enhanced">
                Terms of Service
              </a>
            </div>
          </div>
          <div className="footer-bottom-right-enhanced">
            <div className="footer-stats-enhanced">
              <div className="footer-stat-enhanced">
                <span className="footer-stat-number-enhanced">15+</span>
                <span className="footer-stat-label-enhanced">Projects</span>
              </div>
              <div className="footer-stat-enhanced">
                <span className="footer-stat-number-enhanced">3+</span>
                <span className="footer-stat-label-enhanced">Years</span>
              </div>
              <div className="footer-stat-enhanced">
                <span className="footer-stat-number-enhanced">100%</span>
                <span className="footer-stat-label-enhanced">Satisfaction</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
