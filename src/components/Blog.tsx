"use client";

import { useState } from "react";

export default function Blog() {
  const [showAllPosts] = useState(false);

  const blogPosts = [
    {
      id: 1,
      title: "Learning JavaScript with Brad Traversy",
      description:
        "A Comprehensive Guide to mastering JavaScript through practical projects and modern features",
      category: "JavaScript",
      date: "Nov 2024",
      readTime: "8 min read",
      image: "/blog/assets/bradTraversy.png",
      link: "/blog/javascript-brad-traversy",
      badge: undefined,
    },
    {
      id: 2,
      title: "Top 5 Essential JavaScript Books",
      description:
        "A Must-Read List for Every Aspiring JavaScript Developer - From beginner to advanced",
      category: "JavaScript",
      date: "Oct 2024",
      readTime: "5 min read",
      image: "/blog/assets/JavaScript-logo.png",
      link: "/blog/javascript-essential-books",
      badge: undefined,
    },
    {
      id: 3,
      title: "Learning CSS with freeCodeCamp",
      description:
        "Mastering CSS with Dave Gray - A comprehensive 8-hour course breakdown",
      category: "CSS",
      date: "Sep 2024",
      readTime: "6 min read",
      image: "/blog/assets/blogCSS-2.jpg",
      link: "/blog/css-freecodecamp-dave-gray",
      badge: undefined,
    },
  ];

  const displayedPosts = showAllPosts ? blogPosts : blogPosts.slice(0, 3);

  return (
    <section id="blog" className="blog-section">
      <div className="container">
        <h2 style={{ marginBottom: "var(--space-4)" }}>
          BLOGS
          <br />
        </h2>

        <p
          style={{
            fontSize: "1.125rem",
            color: "var(--color-gray-600)",
            marginBottom: "var(--space-20)",
            maxWidth: "600px",
          }}
        >
          Insights from my web development learning journey. Discover the
          resources, tutorials, and techniques that have shaped my coding
          skills.
        </p>

        <div className="blog-list" style={{ maxWidth: "none" }}>
          {displayedPosts.map((post) => (
            <article key={post.id} className="blog-list-item">
              <div className="blog-list-left">
                {post.badge && (
                  <div
                    className="hero-badge"
                    style={{
                      marginBottom: "var(--space-3)",
                      display: "inline-block",
                    }}
                  >
                    {post.badge}
                  </div>
                )}
                <h3
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: "700",
                    color: "var(--color-black)",
                    marginBottom: "var(--space-2)",
                    lineHeight: "1.3",
                  }}
                >
                  {post.title}
                </h3>
                <div
                  style={{
                    fontSize: "0.875rem",
                    color: "var(--color-gray-600)",
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                  }}
                >
                  {post.date} • {post.readTime}
                </div>
              </div>

              <div className="blog-list-right">
                <p
                  style={{
                    color: "var(--color-gray-600)",
                    marginBottom: "var(--space-4)",
                    lineHeight: "1.6",
                    fontSize: "1rem",
                  }}
                >
                  {post.description}
                </p>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "var(--space-4)",
                    justifyContent: "space-between",
                    flexWrap: "wrap",
                  }}
                >
                  <div className="blog-tags">
                    <span className="blog-tag">{post.category}</span>
                  </div>

                  <a
                    href={post.link}
                    className="btn btn-secondary"
                    style={{
                      fontSize: "0.875rem",
                      padding: "var(--space-2) var(--space-4)",
                      display: "flex",
                      alignItems: "center",
                      gap: "var(--space-2)",
                    }}
                  >
                    <span>Read Article</span>
                    <i className="fa-solid fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* View All Blog Posts CTA */}
        <div style={{ textAlign: "center", marginTop: "var(--space-20)" }}>
          <a
            href="/blog"
            className="btn btn-primary"
            style={{
              fontSize: "1rem",
              padding: "var(--space-4) var(--space-8)",
            }}
          >
            <span>More Blogs</span>
            <i className="fa-solid fa-arrow-right"></i>
          </a>
        </div>

        {/* Stats */}
      </div>
    </section>
  );
}
