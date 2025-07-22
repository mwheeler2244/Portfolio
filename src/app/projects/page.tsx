"use client";
import React, { useEffect, useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

type Project = {
  id: number;
  name: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  open_issues_count: number;
  license?: { spdx_id: string };
  updated_at: string;
  homepage?: string;
  html_url: string;
};

export default function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchRepos() {
      setLoading(true);
      setError("");
      try {
        const res = await fetch(
          "https://api.github.com/users/mwheeler2244/repos?sort=updated&per_page=14"
        );
        if (!res.ok) throw new Error("Failed to fetch repos");
        const data = await res.json();
        setProjects(data);
      } catch {
        setError("Could not load projects from GitHub.");
      } finally {
        setLoading(false);
      }
    }
    fetchRepos();
  }, []);

  return (
    <>
      <div className="container" style={{}}>
        <Navigation />
      </div>
      <main
        className="section"
        style={{
          background: "var(--color-beige)",
          minHeight: "100vh",
        }}
      >
        <div className="container" style={{}}>
          <header style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <h1>All Projects</h1>
            <p
              style={{
                color: "#6b7280",
                fontSize: "1.18rem",
                lineHeight: 1.7,
                fontWeight: 400,
                maxWidth: 520,
                margin: "0 auto",
              }}
            >
              A curated selection of my latest work in web development, fetched
              live from my GitHub profile.
            </p>
          </header>

          {loading && (
            <p style={{ textAlign: "center" }}>Loading projects...</p>
          )}
          {error && (
            <p style={{ color: "red", textAlign: "center" }}>{error}</p>
          )}

          {!loading && !error && (
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {projects
                .filter(
                  (project) =>
                    project.name.toLowerCase() !== "portfolio" &&
                    project.name.toLowerCase() !== "mwheeler2244" &&
                    project.name.toLowerCase() !== "service-swap"
                )
                .map((project, idx) => (
                  <li
                    key={project.id}
                    style={{
                      padding: idx === 0 ? "0 0 2.5rem 0" : "2.5rem 0",
                      borderTop: idx === 0 ? "none" : "1px solid #e5e7eb",
                      margin: 0,
                      transition: "background 0.2s cubic-bezier(.4,0,.2,1)",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "baseline",
                        justifyContent: "space-between",
                        gap: 16,
                        marginBottom: 6,
                      }}
                    >
                      <h2
                        style={{
                          fontSize: "1.32rem",
                          fontWeight: 700,
                          margin: 0,
                          color: "#111827",
                          letterSpacing: "-0.01em",
                          lineHeight: 1.2,
                        }}
                      >
                        {project.name}
                      </h2>
                      <span
                        style={{
                          fontSize: "0.92rem",
                          color: "#cbd5e1",
                          fontWeight: 600,
                          letterSpacing: "0.05em",
                          minWidth: 32,
                          textAlign: "right",
                        }}
                      >
                        {String(idx + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <p
                      style={{
                        color: "#374151",
                        margin: "0.7rem 0 1.1rem 0",
                        fontSize: "1.08rem",
                        lineHeight: 1.6,
                        fontWeight: 400,
                        minHeight: 48,
                      }}
                    >
                      {project.description || "No description provided."}
                    </p>
                    {/* Technical details section with icons */}
                    <div
                      style={{
                        marginBottom: "1.1rem",
                        color: "#6b7280",
                        fontSize: "0.98rem",
                        fontWeight: 400,
                        display: "flex",
                        flexWrap: "wrap",
                        gap: "1.1rem 1.7rem",
                        alignItems: "center",
                      }}
                    >
                      <span>
                        <strong>Language:</strong> {project.language || "N/A"}
                      </span>
                      <span>
                        <strong>Framework:</strong> Next.js
                      </span>
                      <span
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: 4,
                        }}
                      >
                        <svg
                          width="16"
                          height="16"
                          fill="none"
                          viewBox="0 0 20 20"
                          style={{ marginRight: 2 }}
                        >
                          <path
                            fill="#fbbf24"
                            d="M10 15.27L16.18 19l-1.64-7.03L20 7.24l-7.19-.61L10 0 7.19 6.63 0 7.24l5.46 4.73L3.82 19z"
                          />
                        </svg>
                        {project.stargazers_count}
                      </span>
                      <span
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: 4,
                        }}
                      >
                        <svg
                          width="16"
                          height="16"
                          fill="none"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fill="#38bdf8"
                            d="M5 3a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5zm0 2h10v10H5V5zm2 2v2h6V7H7zm0 4v2h4v-2H7z"
                          />
                        </svg>
                        {project.forks_count}
                      </span>
                      <span
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: 4,
                        }}
                      >
                        <svg
                          width="16"
                          height="16"
                          fill="none"
                          viewBox="0 0 20 20"
                        >
                          <circle cx="10" cy="10" r="8" fill="#ef4444" />
                          <text
                            x="10"
                            y="15"
                            textAnchor="middle"
                            fontSize="12"
                            fill="#fff"
                          >
                            !
                          </text>
                        </svg>
                        {project.open_issues_count}
                      </span>
                      {project.license &&
                        project.license.spdx_id !== "NOASSERTION" && (
                          <span>
                            <strong>License:</strong> {project.license.spdx_id}
                          </span>
                        )}
                      <span>
                        <strong>Last updated:</strong>{" "}
                        {new Date(project.updated_at).toLocaleDateString()}
                      </span>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        gap: "1.3rem",
                        alignItems: "center",
                        marginTop: "auto",
                      }}
                    >
                      {project.homepage && (
                        <a
                          href={project.homepage}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            color: "#2563eb",
                            textDecoration: "none",
                            fontWeight: 600,
                            fontSize: "1rem",
                            padding: "0.18rem 0.7rem",
                            borderRadius: 6,
                            background: "#f1f5fd",
                            border: "1px solid #dbeafe",
                            display: "flex",
                            alignItems: "center",
                            gap: 5,
                            transition: "background 0.18s, color 0.18s",
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.background = "#dbeafe";
                            e.currentTarget.style.color = "#1d4ed8";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.background = "#f1f5fd";
                            e.currentTarget.style.color = "#2563eb";
                          }}
                        >
                          <svg
                            width="16"
                            height="16"
                            fill="none"
                            viewBox="0 0 20 20"
                            style={{ marginRight: 3 }}
                          >
                            <path
                              stroke="#2563eb"
                              strokeWidth="1.5"
                              d="M7 13l6-6m0 0H8m5-0v5"
                            />
                          </svg>
                          Live Demo
                        </a>
                      )}
                      <a
                        href={project.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          color: "#64748b",
                          textDecoration: "none",
                          fontWeight: 500,
                          fontSize: "1rem",
                          padding: "0.18rem 0.7rem",
                          borderRadius: 6,
                          background: "#f3f4f6",
                          border: "1px solid #e5e7eb",
                          display: "flex",
                          alignItems: "center",
                          gap: 5,
                          transition: "background 0.18s, color 0.18s",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = "#e5e7eb";
                          e.currentTarget.style.color = "#111827";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = "#f3f4f6";
                          e.currentTarget.style.color = "#64748b";
                        }}
                      >
                        <svg
                          width="16"
                          height="16"
                          fill="none"
                          viewBox="0 0 20 20"
                          style={{ marginRight: 3 }}
                        >
                          <path
                            stroke="#64748b"
                            strokeWidth="1.5"
                            d="M7 13l6-6m0 0H8m5-0v5"
                          />
                        </svg>
                        View Code
                      </a>
                    </div>
                  </li>
                ))}
            </ul>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
