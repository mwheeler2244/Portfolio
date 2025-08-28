"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section
      className="hero"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        padding: "6rem 0 2rem 0",
        position: "relative",
      }}
    >
      <div className="container" style={{ width: "100%" }}>
        {/* Main Hero Content */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "4rem",
            alignItems: "center",
            marginBottom: "4rem",
          }}
        >
          {/* Left Side - Typography */}
          <div>
            <h1
              style={{
                fontSize: "clamp(4rem, 8vw, 8rem)",
                fontWeight: "900",
                lineHeight: "0.9",
                letterSpacing: "-0.02em",
                marginBottom: "2rem",
                marginTop: "2rem",
                color: "var(--color-black)",
                textTransform: "uppercase",
                paddingRight: "1.5rem",
              }}
            >
              FULL STACK
            </h1>

            <h2
              style={{
                fontSize: "clamp(3rem, 6vw, 6rem)",
                fontWeight: "100",
                lineHeight: "0.9",
                letterSpacing: "0.1em",
                color: "var(--color-black)",
                textTransform: "uppercase",
                border: "2px solid var(--color-black)",
                padding: "1rem 2rem",
                display: "inline-block",
                marginBottom: "0",
                marginRight: "1rem",
              }}
            >
              DEVELOPER
            </h2>
          </div>

          {/* Right Side - Empty for spacing */}
          <div></div>
        </div>

        {/* Bottom Section - Portrait and Description */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "auto 1fr",
            gap: "6rem",
            alignItems: "center",
          }}
        >
          {/* Portrait Image with Badge */}
          <div style={{ position: "relative" }}>
            <div
              style={{
                width: "300px",
                height: "400px",
                background: "var(--color-gray-800)",
                borderRadius: "0",
                overflow: "hidden",
                position: "relative",
              }}
            >
              <Image
                src="/assets/portfolioProfile.jpg"
                alt="Mike Wheeler"
                width={300}
                height={400}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  filter: "grayscale(100%)",
                }}
              />
            </div>

            {/* Green Circular Badge */}
          </div>

          {/* Description Text */}
          <div style={{ maxWidth: "500px" }}>
            <p
              style={{
                fontSize: "1.125rem",
                lineHeight: "1.8",
                color: "var(--color-gray-600)",
                marginBottom: "var(--space-8)",
              }}
            >
              I am a full-stack developer specializing in designing and building
              responsive, user-friendly websites and applications. I focus on
              using React.js and Next.js to create modern, seamless, and
              interactive experiences, ensuring high performance and scalability
              across the entire development process.
            </p>

            {/* Social Links */}
            <div
              style={{
                display: "flex",
                gap: "var(--space-6)",
                alignItems: "center",
              }}
            >
              <a
                href="https://github.com/mwheeler2244"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "var(--space-3)",
                  color: "var(--color-black)",
                  textDecoration: "none",
                  fontSize: "1rem",
                  fontWeight: "600",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  transition: "var(--transition-fast)",
                  padding: "var(--space-3) var(--space-4)",
                  border: "1px solid var(--color-black)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "var(--color-black)";
                  e.currentTarget.style.color = "var(--color-white)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "transparent";
                  e.currentTarget.style.color = "var(--color-black)";
                }}
              >
                <i
                  className="fa-brands fa-github"
                  style={{ fontSize: "1.25rem" }}
                ></i>
                <span>GitHub</span>
              </a>

              <a
                href="https://linkedin.com/in/mwheeler2244"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "var(--space-3)",
                  color: "var(--color-black)",
                  textDecoration: "none",
                  fontSize: "1rem",
                  fontWeight: "600",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  transition: "var(--transition-fast)",
                  padding: "var(--space-3) var(--space-4)",
                  border: "1px solid var(--color-black)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "var(--color-black)";
                  e.currentTarget.style.color = "var(--color-white)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "transparent";
                  e.currentTarget.style.color = "var(--color-black)";
                }}
              >
                <i
                  className="fa-brands fa-linkedin"
                  style={{ fontSize: "1.25rem" }}
                ></i>
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Responsive Design */}
      <style jsx>{`
        @media (max-width: 768px) {
          .hero > .container > div:first-child {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
            text-align: center;
          }

          .hero > .container > div:last-child {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
            text-align: center;
          }

          .hero > .container > div:last-child > div:first-child {
            justify-self: center;
          }
        }
      `}</style>
    </section>
  );
}
