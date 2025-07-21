import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      title: "Learning HTML with FreeCodeCamp",
      description:
        "Your First Step into Web Development and why this course is perfect for learning HTML",
      author: "MIKE WHEELER",
      date: "SEPTEMBER 18, 2024",
      readTime: "5 min read",
      slug: "learning-html-freecodecamp",
      image: "/blog/assets/fcchero.jpg",
      category: "HTML",
    },
    {
      id: 2,
      title: "Learning More HTML with Dave Gray",
      description:
        "Finding a Good YouTube Tutorial - Dave Gray's structured approach to HTML learning",
      author: "MIKE WHEELER",
      date: "SEPTEMBER 20, 2024",
      readTime: "4 min read",
      slug: "learning-html-dave-gray",
      image: "/blog/assets/David grey main page.png",
      category: "HTML",
    },
    {
      id: 3,
      title: "Exploring CSS with Kevin Powell",
      description:
        "The Best CSS Instructor on YouTube? Deep dive into responsive design and modern CSS",
      author: "MIKE WHEELER",
      date: "SEPTEMBER 21, 2024",
      readTime: "7 min read",
      slug: "css-kevin-powell",
      image: "/blog/assets/Kevin Powell home.png",
      category: "CSS",
    },
    {
      id: 4,
      title: "Learning CSS with freeCodeCamp",
      description:
        "Mastering CSS with Dave Gray - A comprehensive 8-hour course breakdown",
      author: "MIKE WHEELER",
      date: "SEPTEMBER 25, 2024",
      readTime: "6 min read",
      slug: "css-freecodecamp-dave-gray",
      image: "/blog/assets/blogCSS-2.jpg",
      category: "CSS",
    },
    {
      id: 5,
      title: "Top 5 Essential JavaScript Books",
      description:
        "A Must-Read List for Every Aspiring JavaScript Developer - From beginner to advanced",
      author: "MIKE WHEELER",
      date: "OCTOBER 26, 2024",
      readTime: "5 min read",
      slug: "javascript-essential-books",
      image: "/blog/assets/JavaScript-logo.png",
      category: "JAVASCRIPT",
    },
    {
      id: 6,
      title: "Learning JavaScript with Brad Traversy",
      description:
        "A Comprehensive Guide to mastering JavaScript through practical projects and modern features",
      author: "MIKE WHEELER",
      date: "NOVEMBER 29, 2024",
      readTime: "8 min read",
      slug: "javascript-brad-traversy",
      image: "/blog/assets/bradTraversy.png",
      category: "JAVASCRIPT",
    },
  ];

  return (
    <>
      <Navigation />
      <main className="section section-light">
        <div className="container">
          <div className="section-label">ARTICLES</div>

          <h1 style={{ marginBottom: "var(--space-6)" }}>
            Explore My Coding
            <br />
            <span className="text-accent">Journey</span>
          </h1>

          <p
            style={{
              fontSize: "1.125rem",
              color: "var(--color-gray-600)",
              marginBottom: "var(--space-20)",
              maxWidth: "600px",
            }}
          >
            Over the past year, I&apos;ve documented my web development learning
            journey, sharing insights on HTML, CSS, JavaScript, and the best
            resources I&apos;ve discovered.
          </p>

          <div className="blog-list">
            {blogPosts.map((post) => (
              <article key={post.id} className="blog-list-item">
                <div className="blog-list-left">
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

                    <Link
                      href={`/blog/${post.slug}`}
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
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
