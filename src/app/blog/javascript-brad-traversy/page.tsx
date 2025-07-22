"use client";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";

export default function JavaScriptBradTraversyPost() {
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
            <div className="section-label">JAVASCRIPT TUTORIAL</div>

            <h1
              style={{
                fontSize: "clamp(2rem, 5vw, 4rem)",
                marginBottom: "var(--space-6)",
                lineHeight: "1.1",
              }}
            >
              Learning JavaScript with Brad Traversy
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
              <span>NOVEMBER 29, 2024</span>
              <span style={{ color: "var(--color-gray-400)" }}>•</span>
              <span>8 MIN READ</span>
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
              A Comprehensive Guide to Mastering JavaScript on YouTube
            </h2>
          </header>

          {/* Hero Images */}
          <div
            className="blog-image-gallery"
            style={{ marginBottom: "var(--space-12)" }}
          >
            <div>
              <Image
                src="/blog/assets/blogJS-1.jpg"
                alt="JavaScript Learning"
                width={600}
                height={300}
                style={{
                  width: "100%",
                  height: "300px",
                  objectFit: "cover",
                  borderRadius: "0",
                  boxShadow: "var(--shadow-lg)",
                }}
              />
            </div>
            <div>
              <Image
                src="/blog/assets/bradTraversy.png"
                alt="Brad Traversy"
                width={600}
                height={300}
                style={{
                  width: "100%",
                  height: "300px",
                  objectFit: "cover",
                  borderRadius: "0",
                  boxShadow: "var(--shadow-lg)",
                }}
              />
            </div>
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
              Highlighting one of the best JavaScript learning resources
              available: the comprehensive tutorials on Brad Traversy&apos;s
              YouTube channel. These tutorials span a wide range of topics and
              are perfect for anyone looking to master JavaScript, from
              beginners to advanced learners.
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
              What You&apos;ll Learn from Brad Traversy&apos;s JavaScript
              Tutorials
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
                  Introduction to JavaScript
                </strong>
                <br />
                Brad starts with the essentials—what JavaScript is and how to
                write basic scripts. He explains variables, functions, and loops
                in a clear and approachable way, making it perfect for
                beginners.
              </li>
              <li style={{ marginBottom: "var(--space-6)" }}>
                <strong style={{ color: "var(--color-black)" }}>
                  Understanding DOM Manipulation
                </strong>
                <br />
                You&apos;ll learn how to interact with HTML elements using
                JavaScript. Brad covers how to use JavaScript to modify the DOM,
                allowing you to dynamically update your web pages.
              </li>
              <li style={{ marginBottom: "var(--space-6)" }}>
                <strong style={{ color: "var(--color-black)" }}>
                  Asynchronous JavaScript (Promises, Async/Await)
                </strong>
                <br />
                One of the highlights of Brad&apos;s tutorials is his in-depth
                coverage of asynchronous programming. He explains callbacks,
                promises, and async/await with practical examples, helping you
                tackle complex tasks like API calls.
              </li>
              <li style={{ marginBottom: "var(--space-6)" }}>
                <strong style={{ color: "var(--color-black)" }}>
                  Object-Oriented Programming (OOP)
                </strong>
                <br />
                Brad introduces the principles of OOP in JavaScript. You&apos;ll
                learn how to create classes, objects, and methods, as well as
                how to leverage inheritance and encapsulation to structure your
                code.
              </li>
              <li style={{ marginBottom: "var(--space-6)" }}>
                <strong style={{ color: "var(--color-black)" }}>
                  Modern JavaScript Features (ES6+)
                </strong>
                <br />
                Brad covers the latest JavaScript features, from arrow functions
                to destructuring and modules. These features make JavaScript
                more powerful and concise, and learning them is essential for
                staying up-to-date.
              </li>
              <li style={{ marginBottom: "var(--space-6)" }}>
                <strong style={{ color: "var(--color-black)" }}>
                  Project-Based Learning
                </strong>
                <br />
                Brad emphasizes learning by doing, and throughout his tutorials,
                he walks you through building real-world projects. These
                projects help solidify your understanding of JavaScript concepts
                while creating something tangible.
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
              Why Brad Traversy&apos;s Tutorials Stand Out
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
                  Clear and Engaging Instruction
                </strong>
                <br />
                Brad&apos;s teaching style is known for being easy to follow and
                engaging. He breaks down complex concepts into bite-sized,
                understandable lessons, making it easy for anyone to follow
                along.
              </li>
              <li style={{ marginBottom: "var(--space-6)" }}>
                <strong style={{ color: "var(--color-black)" }}>
                  Comprehensive Learning
                </strong>
                <br />
                Brad&apos;s tutorials cover everything from the fundamentals to
                advanced topics, making his channel a one-stop-shop for all
                things JavaScript. Whether you&apos;re learning the basics or
                mastering advanced concepts, Brad&apos;s content has you
                covered.
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
              Take Your Time
            </h3>

            <p
              style={{
                fontSize: "1.125rem",
                lineHeight: "1.7",
                marginBottom: "var(--space-12)",
                color: "var(--color-gray-600)",
              }}
            >
              That&apos;s my current take on learning JavaScript with the help
              of Brad Traversy&apos;s YouTube channel. JavaScript is a powerful
              language with many nuances, so it&apos;s important to be patient
              and give yourself time to master each concept. I recommend
              spending at least a month dedicated to only JavaScript, and
              Brad&apos;s tutorials offer plenty of content to keep you busy.
              Remember, JavaScript is constantly evolving, so take your time,
              enjoy the journey, and build your skills step by step.
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
                  href="https://twitter.com/intent/tweet?text=Learning JavaScript with Brad Traversy"
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
