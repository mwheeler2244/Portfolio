"use client";

import { useEffect, useState, useRef } from "react";

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);

          // Animate stats
          const animateStats = () => {
            const stats = [
              { key: "projects", end: 15, duration: 2000 },
              { key: "years", end: 3, duration: 1500 },
              { key: "clients", end: 8, duration: 1800 },
            ];

            stats.forEach(({ key, end, duration }) => {
              let start = 0;
              const increment = end / (duration / 16);

              const timer = setInterval(() => {
                start += increment;
                if (start >= end) {
                  // setStatNumbers((prev) => ({ ...prev, [key]: end })); // This line was removed
                  clearInterval(timer);
                } else {
                  // setStatNumbers((prev) => ({ // This line was removed
                  //   ...prev,
                  //   [key]: Math.floor(start),
                  // }));
                }
              }, 16);
            });
          };

          setTimeout(animateStats, 500);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const skills = [
    "React & Next.js",
    "TypeScript",
    "Node.js",
    "PostgreSQL",
    "Prisma ORM",
    "Git & GitHub",
    "Responsive Design",
    "API Development",
  ];

  const certifications = [
    "University of Nebraska - Bachelor of Business Administration",
    "Harvard Online - CS50 Intro to Computer Science",
    "Google Coursera - Project Management",
    "IBM - Databases and SQL for Data Science with Python",
    "Google Coursera - IT Technical Support Fundamentals",
  ];

  return (
    <section
      id="about"
      className={`about-section-minimal ${isVisible ? "visible" : ""}`}
      ref={sectionRef}
    >
      <div className="container">
        {/* Header */}
        <div className="section-label">ABOUT ME</div>

        <h2 className="about-main-title">Building Digital Experiences</h2>

        <p className="about-lead">
          Full-stack developer with a unique blend of technical expertise and
          leadership skills, passionate about creating exceptional digital
          experiences.
        </p>

        <div className="about-content-minimal">
          {/* Main Content */}
          <div className="about-main-minimal">
            {/* Story */}
            <div className="about-story-minimal">
              <h3>Background</h3>
              <p>
                My name is Mike Wheeler. I bring a unique blend of technical
                expertise and leadership skills to every project. My background
                spans diverse roles, from web development to managing
                cross-functional teams in international settings.
              </p>
              <p>
                I'm passionate about creating user-friendly web experiences and
                continuously expanding my knowledge in cutting-edge
                technologies. This drive for learning and improvement reflects
                in every project I undertake.
              </p>
            </div>

            {/* Skills */}
            <div className="about-skills-minimal">
              <h3>Technologies</h3>
              <div className="skills-minimal">
                {skills.map((skill, index) => (
                  <span
                    key={skill}
                    className="skill-minimal"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div className="about-certifications-minimal">
              <h3>Education</h3>
              <div className="certifications-minimal">
                {certifications.map((cert, index) => (
                  <div
                    key={cert}
                    className="certification-minimal"
                    style={{ animationDelay: `${index * 0.1 + 0.3}s` }}
                  >
                    {cert}
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
          </div>
        </div>
      </div>
    </section>
  );
}
