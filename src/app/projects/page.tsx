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
        <div
          className="container"
          style={{
            padding: "0 1.5rem",
          }}
        >
          <header style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <h1
              style={{
                fontWeight: 800,
                fontSize: "2.5rem",
                marginBottom: "1.1rem",
                letterSpacing: "-0.03em",
                color: "#111827",
                lineHeight: 1.1,
              }}
            >
              All Projects
            </h1>
            <p
              style={{
                color: "#6b7280",
                fontSize: "1.15rem",
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
                      }}
                    >
                      <h2
                        style={{
                          fontSize: "1.45rem",
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
                      }}
                    >
                      {project.description || "No description provided."}
                    </p>

                    {/* Technical details section */}
                    <div
                      style={{
                        marginBottom: "1.1rem",
                        color: "#6b7280",
                        fontSize: "0.98rem",
                        fontWeight: 400,
                        display: "flex",
                        flexWrap: "wrap",
                        gap: "1.2rem",
                      }}
                    >
                      <span>
                        <strong>Language:</strong> {project.language || "N/A"}
                      </span>
                      <span>
                        <strong>Framework:</strong> Next.js
                      </span>
                      <span>
                        <strong>Stars:</strong> {project.stargazers_count}
                      </span>
                      <span>
                        <strong>Forks:</strong> {project.forks_count}
                      </span>
                      <span>
                        <strong>Issues:</strong> {project.open_issues_count}
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
                        gap: "1.5rem",
                        alignItems: "center",
                      }}
                    >
                      {project.homepage && (
                        <a
                          href={project.homepage}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            color: "#2563eb",
                            textDecoration: "underline",
                            fontWeight: 600,
                            fontSize: "1rem",
                            padding: 0,
                            background: "none",
                            border: "none",
                            transition: "color 0.18s cubic-bezier(.4,0,.2,1)",
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.color = "#1d4ed8";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.color = "#2563eb";
                          }}
                        >
                          Live Demo
                        </a>
                      )}
                      <a
                        href={project.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          color: "#64748b",
                          textDecoration: "underline",
                          fontWeight: 500,
                          fontSize: "1rem",
                          padding: 0,
                          background: "none",
                          border: "none",
                          transition: "color 0.18s cubic-bezier(.4,0,.2,1)",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.color = "#111827";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.color = "#64748b";
                        }}
                      >
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
