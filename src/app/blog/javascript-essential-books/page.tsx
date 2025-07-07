import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function JavaScriptEssentialBooksPost() {
  return (
    <>
      <Navigation />
      <main className="section section-light">
        <div className="container">
          {/* Back to Blog Link */}
          <Link
            href="/blog"
            className="btn btn-secondary"
            style={{
              fontSize: "0.875rem",
              padding: "var(--space-3) var(--space-5)",
              marginBottom: "var(--space-8)",
              display: "inline-flex",
              alignItems: "center",
              gap: "var(--space-2)",
            }}
          >
            <i className="fa-solid fa-arrow-left"></i>
            <span>Back to Blog</span>
          </Link>

          {/* Article Header */}
          <header style={{ marginBottom: "var(--space-12)" }}>
            <div className="section-label">JAVASCRIPT RESOURCES</div>

            <h1
              style={{
                fontSize: "clamp(2rem, 5vw, 4rem)",
                marginBottom: "var(--space-6)",
                lineHeight: "1.1",
              }}
            >
              Top 5 Essential JavaScript Books 📚
            </h1>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "var(--space-6)",
                marginBottom: "var(--space-8)",
                fontSize: "0.875rem",
                color: "var(--color-gray-600)",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                flexWrap: "wrap",
              }}
            >
              <span style={{ fontWeight: "600", color: "var(--color-black)" }}>
                BY: MIKE WHEELER
              </span>
              <span style={{ color: "var(--color-gray-400)" }}>•</span>
              <span>OCTOBER 26, 2024</span>
              <span style={{ color: "var(--color-gray-400)" }}>•</span>
              <span>5 MIN READ</span>
            </div>

            <h2
              style={{
                fontSize: "clamp(1.5rem, 3vw, 2.5rem)",
                fontWeight: "600",
                color: "var(--color-gray-700)",
                lineHeight: "1.3",
                textTransform: "none",
                marginBottom: "var(--space-8)",
              }}
            >
              A Must-Read List for Every Aspiring JavaScript Developer
            </h2>
          </header>

          {/* Article Content */}
          <article className="blog-post-content">
            <p
              style={{
                fontSize: "1.25rem",
                lineHeight: "1.7",
                marginBottom: "var(--space-8)",
                color: "var(--color-gray-700)",
              }}
            >
              Books are timeless resources for learning JavaScript, offering
              in-depth explanations and practical exercises. Here are the top 5
              books every JavaScript developer should read.
            </p>

            <h3
              style={{
                fontSize: "1.8rem",
                fontWeight: "700",
                color: "var(--color-black)",
                marginBottom: "var(--space-6)",
                marginTop: "var(--space-12)",
                textTransform: "none",
              }}
            >
              The Essential JavaScript Book List
            </h3>

            <ol
              style={{
                fontSize: "1.125rem",
                lineHeight: "1.7",
                marginBottom: "var(--space-8)",
                color: "var(--color-gray-600)",
                paddingLeft: "var(--space-6)",
              }}
            >
              <li style={{ marginBottom: "var(--space-6)" }}>
                <strong style={{ color: "var(--color-black)" }}>
                  "Eloquent JavaScript" by Marijn Haverbeke
                </strong>
                <br />
                An excellent introduction to JavaScript, this book covers
                programming fundamentals, functional programming, and more, with
                interactive examples to solidify your understanding.
              </li>
              <li style={{ marginBottom: "var(--space-6)" }}>
                <strong style={{ color: "var(--color-black)" }}>
                  "JavaScript: The Good Parts" by Douglas Crockford
                </strong>
                <br />A classic that focuses on JavaScript's strengths and key
                features, helping developers write clean and efficient code.
              </li>
              <li style={{ marginBottom: "var(--space-6)" }}>
                <strong style={{ color: "var(--color-black)" }}>
                  "You Don't Know JS (YDKJS) Series" by Kyle Simpson
                </strong>
                <br />
                This series dives deep into the core mechanics of JavaScript,
                making it ideal for developers who want to thoroughly understand
                the language.
              </li>
              <li style={{ marginBottom: "var(--space-6)" }}>
                <strong style={{ color: "var(--color-black)" }}>
                  "JavaScript: The Definitive Guide" by David Flanagan
                </strong>
                <br />A comprehensive guide for both beginners and advanced
                developers, covering all aspects of JavaScript with real-world
                examples.
              </li>
              <li style={{ marginBottom: "var(--space-6)" }}>
                <strong style={{ color: "var(--color-black)" }}>
                  "JavaScript and JQuery: Interactive Front-End Web Development"
                  by Jon Duckett
                </strong>
                <br />
                Perfect for visual learners, this book combines JavaScript and
                jQuery to teach you how to build dynamic and interactive web
                pages.
              </li>
            </ol>

            <h3
              style={{
                fontSize: "1.8rem",
                fontWeight: "700",
                color: "var(--color-black)",
                marginBottom: "var(--space-6)",
                marginTop: "var(--space-12)",
                textTransform: "none",
              }}
            >
              Why These Books Are Worth Reading
            </h3>

            <ol
              style={{
                fontSize: "1.125rem",
                lineHeight: "1.7",
                marginBottom: "var(--space-8)",
                color: "var(--color-gray-600)",
                paddingLeft: "var(--space-6)",
              }}
            >
              <li style={{ marginBottom: "var(--space-6)" }}>
                <strong style={{ color: "var(--color-black)" }}>
                  In-Depth Explanations
                </strong>
                <br />
                Unlike quick online tutorials, these books provide a
                comprehensive understanding of JavaScript concepts and
                practices.
              </li>
              <li style={{ marginBottom: "var(--space-6)" }}>
                <strong style={{ color: "var(--color-black)" }}>
                  Practical Exercises
                </strong>
                <br />
                Each book includes hands-on exercises and examples, helping you
                apply your knowledge and improve your coding skills.
              </li>
              <li style={{ marginBottom: "var(--space-6)" }}>
                <strong style={{ color: "var(--color-black)" }}>
                  Timeless Value
                </strong>
                <br />
                Books offer well-organized knowledge that remains relevant even
                as JavaScript evolves.
              </li>
            </ol>

            <h3
              style={{
                fontSize: "1.8rem",
                fontWeight: "700",
                color: "var(--color-black)",
                marginBottom: "var(--space-6)",
                marginTop: "var(--space-12)",
                textTransform: "none",
              }}
            >
              Commit to Continuous Learning
            </h3>

            <p
              style={{
                fontSize: "1.125rem",
                lineHeight: "1.7",
                marginBottom: "var(--space-12)",
                color: "var(--color-gray-600)",
              }}
            >
              These five books are incredible resources for mastering
              JavaScript. Start with one that aligns with your current skill
              level, and work your way through the list. Remember, learning
              JavaScript is a journey, and each book will deepen your
              understanding of this versatile language.
            </p>

            {/* Call to Action */}
            <div className="blog-cta-section">
              <h4
                style={{
                  fontSize: "1.5rem",
                  fontWeight: "700",
                  color: "var(--color-black)",
                  marginBottom: "var(--space-4)",
                  textTransform: "none",
                }}
              >
                Ready to Dive Deeper?
              </h4>
              <p
                style={{
                  fontSize: "1rem",
                  color: "var(--color-gray-600)",
                  marginBottom: "var(--space-6)",
                }}
              >
                Start with one of these essential JavaScript books and take your
                coding skills to the next level.
              </p>
              <a
                href="https://www.amazon.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                style={{
                  fontSize: "1rem",
                  padding: "var(--space-4) var(--space-8)",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "var(--space-2)",
                }}
              >
                <span>Shop Books</span>
                <i className="fa-solid fa-external-link-alt"></i>
              </a>
            </div>

            {/* Navigation */}
            <div className="blog-navigation">
              <Link
                href="/blog"
                className="btn btn-secondary"
                style={{
                  fontSize: "0.875rem",
                  padding: "var(--space-3) var(--space-5)",
                  display: "flex",
                  alignItems: "center",
                  gap: "var(--space-2)",
                }}
              >
                <i className="fa-solid fa-arrow-left"></i>
                <span>Back to Blog</span>
              </Link>

              <div className="blog-share-links">
                <span
                  style={{
                    fontSize: "0.875rem",
                    color: "var(--color-gray-600)",
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                  }}
                >
                  Share:
                </span>
                <a
                  href="https://twitter.com/intent/tweet?text=Top 5 Essential JavaScript Books"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: "var(--color-gray-600)",
                    fontSize: "1.2rem",
                  }}
                >
                  <i className="fa-brands fa-twitter"></i>
                </a>
                <a
                  href="https://www.linkedin.com/sharing/share-offsite/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: "var(--color-gray-600)",
                    fontSize: "1.2rem",
                  }}
                >
                  <i className="fa-brands fa-linkedin"></i>
                </a>
              </div>
            </div>
          </article>
        </div>
      </main>
      <Footer />
    </>
  );
}
