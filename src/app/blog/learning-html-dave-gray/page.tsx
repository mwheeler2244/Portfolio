"use client";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";

export default function LearningHTMLDaveGrayPost() {
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
              Day 2: Learning More HTML
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
              <span>SEPTEMBER 20, 2024</span>
              <span style={{ color: "var(--color-gray-400)" }}>•</span>
              <span>4 MIN READ</span>
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
              Finding a Good YouTube Tutorial - Dave Gray&apos;s Channel
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
            <Image
              src="/blog/assets/David grey main page.png"
              alt="Dave Gray YouTube Channel"
              width={900}
              height={400}
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
              On Day 1, I talked about using freeCodeCamp and how its structured
              lessons are a great introduction to HTML basics. For Day 2, I
              decided to explore a different learning method by turning to
              YouTube for more dynamic and hands-on tutorials. One YouTube
              channel that stood out to me is David Gray&apos;s.
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
              Why YouTube?
            </h3>

            <p
              style={{
                fontSize: "1.125rem",
                lineHeight: "1.7",
                marginBottom: "var(--space-6)",
                color: "var(--color-gray-600)",
              }}
            >
              YouTube offers countless free coding tutorials, but not all of
              them are created equal. The key to finding a good tutorial is
              looking for content that is:
            </p>

            <ol
              style={{
                fontSize: "1.125rem",
                lineHeight: "1.7",
                marginBottom: "var(--space-8)",
                color: "var(--color-gray-600)",
                paddingLeft: "var(--space-6)",
              }}
            >
              <li style={{ marginBottom: "var(--space-4)" }}>
                <strong style={{ color: "var(--color-black)" }}>
                  Structured
                </strong>
                : Lessons should follow a logical flow from basics to more
                advanced topics.
              </li>
              <li style={{ marginBottom: "var(--space-4)" }}>
                <strong style={{ color: "var(--color-black)" }}>
                  Clear and Engaging
                </strong>
                : The instructor should be easy to follow, and their
                explanations should be clear.
              </li>
              <li style={{ marginBottom: "var(--space-4)" }}>
                <strong style={{ color: "var(--color-black)" }}>
                  Hands-on
                </strong>
                : Tutorials that encourage you to code along are the most
                beneficial since coding is learned best by doing.
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
              Discovering David Gray&apos;s YouTube HTML Course
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
                  Beginner-Friendly Approach
                </strong>
                <br />
                David Gray&apos;s tutorials start from the very basics. He
                introduces HTML concepts in a way that is approachable, even for
                someone who has no prior coding experience. He takes the time to
                explain each element, tag, and concept with practical examples,
                allowing viewers to follow along as he codes in real time.
              </li>
              <li style={{ marginBottom: "var(--space-6)" }}>
                <strong style={{ color: "var(--color-black)" }}>
                  Real-World Projects
                </strong>
                <br />
                What I love about this course is that it doesn&apos;t just focus
                on theoretical knowledge. He teaches you how to apply HTML in
                real-world projects. For example, you&apos;ll learn how to build
                basic web pages from scratch, including creating headers,
                paragraphs, links, images, and lists. This kind of hands-on
                practice is crucial for solidifying your understanding of HTML.
              </li>
              <li style={{ marginBottom: "var(--space-6)" }}>
                <strong style={{ color: "var(--color-black)" }}>
                  Step-by-Step Guidance
                </strong>
                <br />
                In some YouTube tutorials, the pace can be overwhelming, but
                David ensures that he breaks down every step. You can pause,
                rewind, or replay sections as needed. This flexibility allows
                you to move at your own pace, which is especially helpful if
                you&apos;re juggling HTML learning with other commitments.
              </li>
              <li style={{ marginBottom: "var(--space-6)" }}>
                <strong style={{ color: "var(--color-black)" }}>
                  Practical Tips and Best Practices
                </strong>
                <br />
                Throughout the course, David doesn&apos;t just teach you how to
                write code; he also provides practical tips on coding
                conventions and best practices. For example, he explains the
                importance of structuring your HTML code neatly and using
                semantic elements to improve your website&apos;s accessibility
                and SEO.
              </li>
            </ol>

            {/* Course Image */}
            <div
              style={{
                textAlign: "center",
                marginBottom: "var(--space-12)",
              }}
            >
              <a
                href="https://www.youtube.com/playlist?list=PL0Zuz27SZ-6M1Uopt6_VL3gf3cpMnwavm"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/blog/assets/David grey html.png"
                  alt="Dave Gray HTML Course Playlist"
                  width={600}
                  height={400}
                  style={{
                    maxWidth: "100%",
                    height: "auto",
                    borderRadius: "0",
                    boxShadow: "var(--shadow-lg)",
                  }}
                />
              </a>
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
              Follow Along and Code With David
            </h3>

            <p
              style={{
                fontSize: "1.125rem",
                lineHeight: "1.7",
                marginBottom: "var(--space-12)",
                color: "var(--color-gray-600)",
              }}
            >
              My best advice is to follow along in another tab with your editor
              open. Watch for a little while, then recreate what you just
              learned. Having a combination of interactive coding platforms and
              video tutorials will make the learning process smoother and more
              enjoyable.
            </p>

            {/* Call to Action */}

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
                  href="https://twitter.com/intent/tweet?text=Learning HTML with Dave Gray"
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
