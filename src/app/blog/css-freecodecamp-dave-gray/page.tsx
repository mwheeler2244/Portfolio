import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function CSSFreeCodeCampPost() {
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
            <div className="section-label">CSS TUTORIAL</div>

            <h1
              style={{
                fontSize: "clamp(2rem, 5vw, 4rem)",
                marginBottom: "var(--space-6)",
                lineHeight: "1.1",
              }}
            >
              Learning CSS with freeCodeCamp
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
              <span>SEPTEMBER 25, 2024</span>
              <span style={{ color: "var(--color-gray-400)" }}>•</span>
              <span>6 MIN READ</span>
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
              Mastering CSS with Dave Gray - A Full Course Breakdown
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
              src="/blog/assets/blogCSS-2.jpg"
              alt="CSS Full Course on freeCodeCamp"
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
              Highlighting one of the best free CSS learning resources
              available: the CSS Full Course on freeCodeCamp's YouTube channel,
              instructed by Dave Gray. This comprehensive course spans over 8
              hours and is perfect for anyone looking to master CSS, from
              beginners to those wanting to solidify their knowledge.
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
              What You'll Learn from Dave Gray's CSS Full Course
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
                  Introduction to CSS
                </strong>
                <br />
                Dave starts with the essentials—what CSS is and how to link it
                to HTML files. He explains selectors, properties, and values in
                a way that's easy to follow, making it a great entry point for
                beginners.
              </li>
              <li style={{ marginBottom: "var(--space-6)" }}>
                <strong style={{ color: "var(--color-black)" }}>
                  Text Styling
                </strong>
                <br />
                You'll explore different ways to style text, learning how to
                modify fonts, sizes, weights, and colors. Dave shows how to
                apply custom fonts to your website using web fonts, enhancing
                the visual appeal of your pages.
              </li>
              <li style={{ marginBottom: "var(--space-6)" }}>
                <strong style={{ color: "var(--color-black)" }}>
                  Layouts with Flexbox and Grid
                </strong>
                <br />
                One of the highlights of the course is its thorough coverage of
                Flexbox and CSS Grid. These modern layout techniques are
                essential for building responsive web designs. Dave breaks down
                each method, demonstrating how to create layouts that adapt
                seamlessly across devices.
              </li>
              <li style={{ marginBottom: "var(--space-6)" }}>
                <strong style={{ color: "var(--color-black)" }}>
                  Responsive Design
                </strong>
                <br />
                Dave delves into responsive design by teaching how to use media
                queries to adjust layouts based on screen size. He explains how
                to ensure your designs look great on everything from large
                desktop monitors to small mobile screens.
              </li>
              <li style={{ marginBottom: "var(--space-6)" }}>
                <strong style={{ color: "var(--color-black)" }}>
                  CSS Animations and Transitions
                </strong>
                <br />
                If you're looking to make your websites more interactive, Dave
                covers CSS animations and transitions. You'll learn how to
                create smooth effects that improve user experience, from hover
                effects to keyframe animations.
              </li>
              <li style={{ marginBottom: "var(--space-6)" }}>
                <strong style={{ color: "var(--color-black)" }}>
                  Project-Based Learning
                </strong>
                <br />
                Throughout the course, Dave emphasizes practical projects.
                You'll code along with him, building real-world designs and
                applying the concepts you've learned in real-time. This hands-on
                approach helps solidify your CSS skills.
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
              Why Dave Gray's Course Stands Out
            </h3>

            <ol
              style={{
                fontSize: "1.125rem",
                lineHeight: "1.7",
                marginBottom: "var(--space-12)",
                color: "var(--color-gray-600)",
                paddingLeft: "var(--space-6)",
              }}
            >
              <li style={{ marginBottom: "var(--space-6)" }}>
                <strong style={{ color: "var(--color-black)" }}>
                  Engaging and Clear Instruction
                </strong>
                <br />
                Dave Gray is known for his clear explanations and step-by-step
                guidance, making CSS approachable for all levels of learners.
              </li>
              <li style={{ marginBottom: "var(--space-6)" }}>
                <strong style={{ color: "var(--color-black)" }}>
                  Free and Accessible
                </strong>
                <br />
                As part of freeCodeCamp's mission, this entire course is
                completely free and available on YouTube with no ads or
                paywalls.
              </li>
              <li style={{ marginBottom: "var(--space-6)" }}>
                <strong style={{ color: "var(--color-black)" }}>
                  Comprehensive Learning
                </strong>
                <br />
                From the basics to advanced techniques, this course covers all
                you need to know about CSS, making it a one-stop resource for
                your CSS journey.
              </li>
            </ol>

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
                Ready to Master CSS?
              </h4>
              <p
                style={{
                  fontSize: "1rem",
                  color: "var(--color-gray-600)",
                  marginBottom: "var(--space-6)",
                }}
              >
                Watch Dave Gray's comprehensive CSS course on freeCodeCamp and
                level up your styling skills.
              </p>
              <a
                href="https://www.youtube.com/watch?v=OXGznpKZ_sA&t=29451s"
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
                <span>Watch the Course</span>
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
                  href="https://twitter.com/intent/tweet?text=Learning CSS with freeCodeCamp"
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
