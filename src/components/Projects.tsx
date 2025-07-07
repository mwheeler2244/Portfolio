"use client";

import { useEffect, useState, useCallback } from "react";

export default function Projects() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [visibleProjects, setVisibleProjects] = useState<number[]>([]);

  const projects = [
    {
      title: "BRIDGE MASTER",
      subtitle: "Precision Platform Game",
      description:
        "Addictive precision-based platform game featuring smooth 60fps canvas animation, progressive scoring system, and charming visual design.",
      image: "/assets/gamess.png",
      tags: ["Next.js", "TypeScript", "Canvas API", "Game Dev"],
      github: "https://github.com/mwheeler2244/Stick-Game",
      live: "https://stick-game-zeta.vercel.app/",
      category: "Interactive Gaming",
      year: "2024",
    },
    {
      title: "SERVICESWAP",
      subtitle: "Community Service Exchange Platform",
      description:
        "Modern full-stack service marketplace featuring real-time messaging, smart scheduling, and intelligent service matching with responsive design.",
      image: "/assets/servicess.png",
      tags: ["Next.js 14", "TypeScript", "Real-time", "Full-Stack"],
      github: "https://github.com/mwheeler2244/Service-Swap",
      live: "https://service-swap-platform.vercel.app/",
      category: "Marketplace Platform",
      year: "2024",
    },
    {
      title: "CONVERSATIONAL AI",
      subtitle: "Intelligent Chat Interface",
      description:
        "Sophisticated ChatGPT-inspired conversational interface built with modern web technologies and seamless AI integration.",
      image: "/assets/gptss.png",
      tags: ["Next.js", "TypeScript", "AI Integration", "Tailwind CSS"],
      github: "https://github.com/mwheeler2244/ChatGPT-clone",
      live: "https://chat-gpt-clone-zeta-nine.vercel.app/",
      category: "AI & Machine Learning",
      year: "2024",
    },
    {
      title: "MUSICLY PLATFORM",
      subtitle: "Music Discovery & Community Hub",
      description:
        "Global music discovery platform connecting users with emerging artists from 50+ countries with SEO-optimized architecture.",
      image: "/assets/musicss.png",
      tags: ["Next.js 15", "TypeScript", "Community Platform", "SEO"],
      github: "https://github.com/mwheeler2244/Music-Discovery-App",
      live: "https://music-discovery-app-gilt.vercel.app/",
      category: "Content & Community",
      year: "2024",
    },
  ];

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % projects.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, projects.length]);

  // Navigation functions
  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % projects.length);
    setIsAutoPlaying(false);
  }, [projects.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + projects.length) % projects.length);
    setIsAutoPlaying(false);
  }, [projects.length]);

  const goToSlide = useCallback((index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prevSlide();
      if (e.key === "ArrowRight") nextSlide();
      if (e.key === " ") {
        e.preventDefault();
        setIsAutoPlaying(!isAutoPlaying);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [nextSlide, prevSlide, isAutoPlaying]);

  // Intersection observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setVisibleProjects([0, 1, 2, 3]);
            }, 200);
          }
        });
      },
      { threshold: 0.2 }
    );

    const sectionElement = document.querySelector(".projects-cards-carousel");
    if (sectionElement) observer.observe(sectionElement);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" className="projects-cards-carousel">
      <div className="container">
        {/* Left-aligned Header */}
        <div className="projects-header-left">
          <div className="section-label-left">FEATURED PROJECTS</div>
          <h2 className="projects-title-left">
            SELECTED
            <br />
            <span className="text-accent">WORK</span>
          </h2>
          <p className="projects-description-left">
            Navigate through my curated collection of modern applications
            showcasing full-stack development, AI integration, and innovative
            user experiences.
          </p>

          {/* Carousel Controls */}
          <div className="carousel-controls-left">
            <div className="carousel-counter-left">
              <span className="current-slide-left">
                {String(currentSlide + 1).padStart(2, "0")}
              </span>
              <span className="slide-separator-left">/</span>
              <span className="total-slides-left">
                {String(projects.length).padStart(2, "0")}
              </span>
            </div>

            <div className="carousel-navigation-left">
              <button
                className="carousel-nav-left prev"
                onClick={prevSlide}
                aria-label="Previous project"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M15 18L9 12L15 6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              <button
                className={`autoplay-toggle-left ${
                  isAutoPlaying ? "playing" : "paused"
                }`}
                onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                aria-label={
                  isAutoPlaying ? "Pause autoplay" : "Resume autoplay"
                }
              >
                {isAutoPlaying ? (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M6 4H10V20H6V4ZM14 4H18V20H14V4Z"
                      fill="currentColor"
                    />
                  </svg>
                ) : (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M8 5V19L19 12L8 5Z" fill="currentColor" />
                  </svg>
                )}
              </button>

              <button
                className="carousel-nav-left next"
                onClick={nextSlide}
                aria-label="Next project"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M9 18L15 12L9 6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Cards Carousel */}
        <div className="cards-carousel-container">
          <div className="cards-carousel-wrapper">
            <div
              className="cards-carousel-track"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {projects.map((project, index) => (
                <div
                  key={project.title}
                  className={`project-card-carousel ${
                    visibleProjects.includes(index) ? "visible" : ""
                  }`}
                >
                  {/* Project Number */}
                  <div className="project-number-card">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  {/* Project Image */}
                  <div className="project-image-card">
                    <img src={project.image} alt={project.title} />
                    <div className="project-overlay-card">
                      <div className="project-links-card">
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-link-card primary"
                        >
                          <span>View Live</span>
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              d="M7 17L17 7M17 7H7M17 7V17"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </a>
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-link-card secondary"
                        >
                          <span>Source Code</span>
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              d="M16 22V18.13C16.04 17.62 15.95 17.11 15.74 16.64C15.53 16.17 15.21 15.77 14.8 15.48C17.5 15.17 20.34 14.16 20.34 9.48C20.34 8.38 19.93 7.33 19.21 6.52C19.56 5.56 19.53 4.5 19.13 3.56C19.13 3.56 18.16 3.24 15.97 4.73C14.14 4.23 12.21 4.23 10.38 4.73C8.19 3.24 7.22 3.56 7.22 3.56C6.82 4.5 6.79 5.56 7.14 6.52C6.42 7.33 6.01 8.38 6.01 9.48C6.01 14.15 8.85 15.16 11.55 15.49C11.15 15.78 10.83 16.17 10.62 16.63C10.41 17.09 10.32 17.6 10.36 18.11V22"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="project-content-card">
                    <div className="project-meta-card">
                      <span className="project-category-card">
                        {project.category}
                      </span>
                      <span className="project-year-card">{project.year}</span>
                    </div>

                    <h3 className="project-title-card">{project.title}</h3>
                    <p className="project-subtitle-card">{project.subtitle}</p>
                    <p className="project-description-card">
                      {project.description}
                    </p>

                    <div className="project-tags-card">
                      {project.tags.map((tag) => (
                        <span key={tag} className="project-tag-card">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Carousel Dots */}
          <div className="carousel-dots-card">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`carousel-dot-card ${
                  index === currentSlide ? "active" : ""
                }`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to project ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Enhanced CTA */}
        <div className="projects-cta-enhanced">
          <div className="cta-background-pattern"></div>

          <div className="cta-content-wrapper">
            <div className="cta-main-content">
              <div className="cta-badge">LET'S COLLABORATE</div>
              <h3 className="cta-title">
                Turn Your Vision Into
                <br />
                <span className="cta-title-accent">Digital Reality</span>
              </h3>
              <p className="cta-description">
                Ready to build something extraordinary? I specialize in creating
                modern, scalable applications that drive results. From concept
                to deployment, let's bring your ideas to life with cutting-edge
                technology.
              </p>

              <div className="cta-stats">
                <div className="cta-stat">
                  <span className="cta-stat-number">24h</span>
                  <span className="cta-stat-label">Response Time</span>
                </div>
                <div className="cta-stat">
                  <span className="cta-stat-number">100%</span>
                  <span className="cta-stat-label">Project Success</span>
                </div>
              </div>
            </div>

            <div className="cta-actions-enhanced">
              <a href="/contact" className="cta-btn-enhanced primary">
                <span className="cta-btn-text">Start Your Project</span>

                <div className="cta-btn-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M22 2L11 13M22 2L15 22L11 13M22 2L2 9L11 13"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </a>

              <a href="/projects" className="cta-btn-enhanced secondary">
                <span className="cta-btn-text">View All Work</span>

                <div className="cta-btn-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M9 18L15 12L9 6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </a>
            </div>
          </div>

          <div className="cta-footer-info">
            <div className="cta-contact-methods">
              <div className="cta-contact-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <polyline
                    points="22,6 12,13 2,6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>hello@yourportfolio.com</span>
              </div>

              <div className="cta-contact-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M9 11C9 12.66 10.34 14 12 14C13.66 14 15 12.66 15 12C15 10.34 13.66 9 12 9C10.34 9 9 10.34 9 11Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M17.657 16.657L13.414 20.9C13.039 21.275 12.53 21.486 12 21.486C11.47 21.486 10.961 21.275 10.586 20.9L6.343 16.657C5.22 15.535 4.586 14.04 4.586 12.485C4.586 10.93 5.22 9.435 6.343 8.313C7.465 7.19 8.96 6.556 10.515 6.556C12.07 6.556 13.565 7.19 14.687 8.313C15.81 9.435 16.444 10.93 16.444 12.485C16.444 14.04 15.81 15.535 14.687 16.657H17.657Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>Available Worldwide</span>
              </div>
            </div>

            <div className="cta-availability">
              <div className="cta-status-indicator"></div>
              <span>Currently available for new projects</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
