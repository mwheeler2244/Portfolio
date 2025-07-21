"use client";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";

export default function CSSKevinPowellPost() {
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
              Exploring CSS with Kevin Powell
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
              <span>SEPTEMBER 21, 2024</span>
              <span style={{ color: "var(--color-gray-400)" }}>•</span>
              <span>7 MIN READ</span>
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
              The Best CSS Instructor on YouTube?
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
              src="/blog/assets/Kevin Powell home.png"
              alt="Kevin Powell YouTube Channel"
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
              Kevin Powell might just be the best CSS instructor on YouTube. His
              deep knowledge, combined with his easy-to-understand teaching
              techniques, makes his tutorials a true gem for anyone learning web
              design. As part of my ongoing series on CSS educators, let&apos;s
              dive into why Kevin&apos;s approach stands out and how his
              tutorials have helped me grasp CSS fundamentals and beyond.
            </p>

            <p
              style={{
                fontSize: "1.125rem",
                lineHeight: "1.7",
                marginBottom: "var(--space-8)",
                color: "var(--color-gray-600)",
              }}
            >
              Kevin Powell is the perfect starting point for this series.
              He&apos;s known for making CSS concepts easy to understand and
              providing valuable tips on creating responsive, beautifully
              designed websites. Whether you&apos;re a beginner or looking to
              refine your skills, his YouTube channel has something for
              everyone.
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
              Why Kevin Powell?
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
                  Beginner-Friendly and Advanced Content
                </strong>
                <br />
                Kevin&apos;s tutorials cater to all levels of learners. Whether
                you&apos;re a complete beginner or an intermediate coder looking
                to sharpen your skills, there&apos;s content for everyone. He
                walks you through the basics like selectors, properties, and the
                box model, but he also delves into more advanced topics like CSS
                Grid, Flexbox, and animations.
              </li>
              <li style={{ marginBottom: "var(--space-6)" }}>
                <strong style={{ color: "var(--color-black)" }}>
                  Practical, Real-World Projects
                </strong>
                <br />
                One of the things I love most about Kevin&apos;s tutorials is
                the focus on practical projects. Instead of just explaining
                concepts, he shows you how to apply them. From creating
                beautiful navigation menus to designing responsive websites, you
                can follow along and build projects that you can use in your own
                portfolio.
              </li>
              <li style={{ marginBottom: "var(--space-6)" }}>
                <strong style={{ color: "var(--color-black)" }}>
                  Responsive Design Focus
                </strong>
                <br />
                Kevin is a big advocate for responsive design, and rightly so.
                In his tutorials, he teaches you how to ensure your websites
                look great on all devices, from desktops to mobile phones. This
                includes covering essential techniques like media queries and
                flexible layouts using CSS Grid and Flexbox.
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
              Favorite Tutorials So Far
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
                  Mastering CSS Flexbox
                </strong>
                <br />
                Flexbox is often seen as confusing for beginners, but
                Kevin&apos;s step-by-step explanations make it easy to grasp.
                His tutorials on Flexbox are super clear, and after following
                them, I finally felt confident using Flexbox in my own projects.
              </li>
              <li style={{ marginBottom: "var(--space-6)" }}>
                <strong style={{ color: "var(--color-black)" }}>
                  Responsive Web Design with & WITHOUT Media Queries
                </strong>
                <br />
                One of Kevin&apos;s insights that has always resonated with me
                is when he said, &quot;Websites naturally want to be
                responsive.&quot; By this, he means that websites are inherently
                flexible, and the more we impose strict heights, widths, and
                other constraints, the more we disrupt that natural
                responsiveness, often creating unnecessary complications.
              </li>
              <li style={{ marginBottom: "var(--space-6)" }}>
                <strong style={{ color: "var(--color-black)" }}>
                  CSS Grid: Build a Responsive Layout
                </strong>
                <br />
                Learning CSS Grid can feel overwhelming at first, but Kevin
                breaks it down beautifully. In one of his series, he walks you
                through building a responsive layout from scratch using CSS
                Grid, making it a breeze to understand.
              </li>
            </ol>

            {/* Course Images */}
            <div className="blog-image-gallery">
              <div>
                <a
                  href="https://www.youtube.com/results?search_query=kevin+powell+flexbox"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/blog/assets/Kevin Powell flexbox.png"
                    alt="Kevin Powell Flexbox Tutorials"
                    width={600}
                    height={400}
                    style={{
                      width: "100%",
                      height: "auto",
                      borderRadius: "0",
                      boxShadow: "var(--shadow-lg)",
                    }}
                  />
                </a>
              </div>
              <div>
                <a
                  href="https://www.youtube.com/playlist?list=PL4-IK0AVhVjODqX-gN6KH68Tt_zrYiTwA"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/blog/assets/Kevin powell responsive.png"
                    alt="Kevin Powell Responsive Design"
                    width={600}
                    height={400}
                    style={{
                      width: "100%",
                      height: "auto",
                      borderRadius: "0",
                      boxShadow: "var(--shadow-lg)",
                    }}
                  />
                </a>
              </div>
              <div>
                <a
                  href="https://www.youtube.com/playlist?klist=PL4-IK0AVhVjPv5tfS82UF_iQgFp4Bl998"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/blog/assets/Kevin Powell grid.png"
                    alt="Kevin Powell CSS Grid"
                    width={600}
                    height={400}
                    style={{
                      width: "100%",
                      height: "auto",
                      borderRadius: "0",
                      boxShadow: "var(--shadow-lg)",
                    }}
                  />
                </a>
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
              That&apos;s my current take on learning CSS with the help of Kevin
              Powell&apos;s YouTube channel. CSS has a lot of deep layers that
              take time to learn. I would recommend spending at least a month
              dedicated to only CSS. Kevin has plenty of tutorials to keep you
              busy for that week. An important thing to remember is CSS is
              always improving, there is a lot to learn, so take your time and
              have fun!
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
                  href="https://twitter.com/intent/tweet?text=Learning CSS with Kevin Powell"
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
