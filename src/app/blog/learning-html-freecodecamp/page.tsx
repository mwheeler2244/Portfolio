import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function LearningHTMLBlogPost() {
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
            <div className="section-label">HTML TUTORIAL</div>

            <h1
              style={{
                fontSize: "clamp(2rem, 5vw, 4rem)",
                marginBottom: "var(--space-6)",
                lineHeight: "1.1",
              }}
            >
              Learning HTML with FreeCodeCamp
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
              <span>SEPTEMBER 18, 2024</span>
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
              Your First Step into Web Development and why this course is
              perfect for learning HTML
            </h2>
          </header>

          {/* Hero Image */}
          <div
            style={{
              position: "relative",
              height: "400px",
              marginBottom: "var(--space-12)",
              overflow: "hidden",
              borderRadius: "0",
            }}
          >
            <img
              src="/blog/assets/fcchero.jpg"
              alt="FreeCodeCamp HTML Course"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </div>

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
              FreeCodeCamp offers a comprehensive and engaging course that
              serves as an excellent introduction to HTML, making it accessible
              for beginners and a refreshing resource for those looking to brush
              up on their skills.
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
              What to Expect from the HTML Course
            </h3>

            <p
              style={{
                fontSize: "1.125rem",
                lineHeight: "1.7",
                marginBottom: "var(--space-8)",
                color: "var(--color-gray-600)",
              }}
            >
              FreeCodeCamp's HTML curriculum is designed to be interactive and
              hands-on. You'll start with the basics, learning how to structure
              a web page using various HTML elements like headings, paragraphs,
              links, and lists. The course provides a clear understanding of the
              syntax and semantics of HTML, allowing you to create
              well-structured documents. One of the standout features of
              FreeCodeCamp is its project-based approach. As you progress,
              you'll have the opportunity to apply what you've learned by
              building real projects. This not only reinforces your
              understanding but also helps you create a portfolio of work that
              showcases your new skills. Projects include creating a personal
              portfolio page, a survey form, and even a tribute page, which all
              serve to solidify your understanding of HTML.
            </p>

            {/* Image Gallery */}
            <div className="blog-image-gallery">
              <div style={{ flex: "1", minWidth: "250px" }}>
                <img
                  src="/blog/assets/fccCat.jpg"
                  alt="FreeCodeCamp Cat Project"
                  style={{
                    width: "100%",
                    height: "auto",
                    borderRadius: "0",
                    boxShadow: "var(--shadow-lg)",
                  }}
                />
              </div>
              <div style={{ flex: "1", minWidth: "250px" }}>
                <img
                  src="/blog/assets/fccIntro.jpg"
                  alt="FreeCodeCamp Introduction"
                  style={{
                    width: "100%",
                    height: "auto",
                    borderRadius: "0",
                    boxShadow: "var(--shadow-lg)",
                  }}
                />
              </div>
            </div>

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
              Interactive Learning Experience
            </h3>

            <p
              style={{
                fontSize: "1.125rem",
                lineHeight: "1.7",
                marginBottom: "var(--space-12)",
                color: "var(--color-gray-600)",
              }}
            >
              The interactive coding environment allows you to write and test
              your HTML code in real-time. This immediate feedback is invaluable
              as you learn, helping you identify and correct mistakes as you go.
              Additionally, FreeCodeCamp's well-structured lessons are
              supplemented with detailed explanations and examples, making
              complex concepts easier to grasp.
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
                Ready to Start Learning?
              </h4>
              <p
                style={{
                  fontSize: "1rem",
                  color: "var(--color-gray-600)",
                  marginBottom: "var(--space-6)",
                }}
              >
                Check out FreeCodeCamp's HTML course and start your web
                development journey today.
              </p>
              <a
                href="https://www.freecodecamp.org/"
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
                <span>Visit FreeCodeCamp</span>
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
                  href={`https://twitter.com/intent/tweet?text=Learning HTML with FreeCodeCamp&url=${
                    typeof window !== "undefined" ? window.location.href : ""
                  }`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: "var(--color-gray-600)",
                    fontSize: "1.2rem",
                    transition: "color var(--transition-fast)",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "var(--color-black)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "var(--color-gray-600)")
                  }
                >
                  <i className="fa-brands fa-twitter"></i>
                </a>
                <a
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${
                    typeof window !== "undefined" ? window.location.href : ""
                  }`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: "var(--color-gray-600)",
                    fontSize: "1.2rem",
                    transition: "color var(--transition-fast)",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "var(--color-black)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "var(--color-gray-600)")
                  }
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
