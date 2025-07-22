"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const iconStyle = {
  width: 22,
  height: 22,
  display: "inline-block",
  verticalAlign: "middle",
  marginRight: 12,
  color: "#000",
  flexShrink: 0,
};

const buttonStyle = {
  display: "flex",
  alignItems: "center",
  gap: 14,
  fontSize: 20,
  color: "#fff",
  background: "#000",
  textDecoration: "none",
  fontWeight: 600,
  border: "none",
  borderRadius: 8,
  padding: "12px 28px",
  margin: 0,
  cursor: "pointer",
  justifyContent: "center",
  minWidth: 140,
  transition: "none",
  boxShadow: "none",
};

export default function ContactPage() {
  return (
    <>
      <Navigation />
      <main
        style={{
          minHeight: "80vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "Inter, Arial, sans-serif",
          padding: 24,
        }}
      >
        <h1
          style={{
            fontSize: 38,
            fontWeight: 800,
            margin: 0,
            color: "#000",
            letterSpacing: -1,
            textAlign: "center",
            lineHeight: 1.1,
          }}
        >
          Contact
        </h1>
        <p
          style={{
            color: "#000",
            fontSize: 18,
            margin: "32px 0 44px 0",
            textAlign: "center",
            fontWeight: 400,
            maxWidth: 420,
            lineHeight: 1.5,
          }}
        >
          Have a project in mind? Let’s connect.
        </p>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "100%",
            maxWidth: 480,
            gap: 36,
          }}
        >
          {/* Email (keep as text link) */}
          <a
            href="mailto:mwheeler.dev@gmail.com"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 14,
              fontSize: 20,
              color: "#000",
              textDecoration: "none",
              fontWeight: 500,
              padding: "6px 0",
              position: "relative",
              justifyContent: "center",
              width: "100%",
              maxWidth: 420,
            }}
          >
            <span style={{ display: "flex", alignItems: "center" }}>
              <svg
                style={iconStyle}
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                viewBox="0 0 24 24"
              >
                <rect width="20" height="16" x="2" y="4" rx="4" />
                <path d="M4 6.5 12 13l8-6.5" />
              </svg>
              Email
            </span>
            <span
              style={{
                color: "#000",
                fontWeight: 400,
                fontSize: 17,
                marginLeft: 10,
                wordBreak: "break-all",
              }}
            >
              mwheeler.dev@gmail.com
            </span>
          </a>
          {/* Social buttons */}
          <div
            style={{
              display: "flex",
              gap: 18,
              flexWrap: "wrap",
              justifyContent: "center",
              width: "100%",
            }}
          >
            <a
              href="https://www.linkedin.com/in/michael-wheeler12/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ ...buttonStyle }}
            >
              <svg
                style={{ ...iconStyle, color: "#fff", marginRight: 10 }}
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.27c-.97 0-1.75-.79-1.75-1.76s.78-1.76 1.75-1.76 1.75.79 1.75 1.76-.78 1.76-1.75 1.76zm15.5 11.27h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.7h-3v-10h2.88v1.36h.04c.4-.75 1.38-1.54 2.85-1.54 3.05 0 3.61 2.01 3.61 4.62v5.56z" />
              </svg>
              LinkedIn
            </a>
            <a
              href="https://github.com/mwheeler2244"
              target="_blank"
              rel="noopener noreferrer"
              style={{ ...buttonStyle }}
            >
              <svg
                style={{ ...iconStyle, color: "#fff", marginRight: 10 }}
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.113.82-.263.82-.582 0-.288-.012-1.243-.017-2.25-3.338.726-4.042-1.415-4.042-1.415-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.729.083-.729 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.606-2.665-.304-5.466-1.332-5.466-5.93 0-1.31.468-2.38 1.236-3.22-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23.96-.267 1.98-.399 3-.404 1.02.005 2.04.137 3 .404 2.29-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.873.12 3.176.77.84 1.235 1.91 1.235 3.22 0 4.61-2.803 5.624-5.475 5.92.43.37.823 1.102.823 2.222 0 1.606-.015 2.898-.015 3.293 0 .322.218.699.825.58C20.565 21.796 24 17.297 24 12c0-6.63-5.37-12-12-12z" />
              </svg>
              GitHub
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
