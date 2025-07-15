import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Image from "next/image";

const allProjects = [
  {
    id: 1,
    title: "AI Workout Generator",
    description:
      "A personalized workout app that leverages AI to create custom 30-minute routines. Users select muscle groups and receive tailored exercises powered by advanced language models.",
    image: "/assets/linkss.png",
    technologies: ["Next.js", "React", "PostgreSQL", "Prisma", "Clerk"],
    liveDemo: "https://ai-exercise-builder.vercel.app",
    github: "https://github.com/mwheeler2244/AI-Exercise-Builder",
  },
  {
    id: 2,
    title: "Networx",
    description:
      "A modern professional networking platform inspired by LinkedIn. Built using Next.js, React, and Tailwind CSS, it allows users to connect, share updates, and grow their professional presence with real-time interactions.",
    image: "/assets/tackgoals-pic.png",
    technologies: ["Next.js", "React", "Tailwind CSS"],
    liveDemo: "https://networx-demo.vercel.app/",
    github: "https://github.com/mwheeler2244/Networx",
  },
  {
    id: 3,
    title: "Discover Thailand Travel Guide",
    description:
      "A comprehensive travel blog showcasing the best destinations, culture, and experiences in Thailand with interactive features and beautiful imagery.",
    image: "/assets/blog2.jpg",
    technologies: ["HTML5", "CSS3", "JavaScript"],
    liveDemo: "/Travel-Thailand/index.html",
    github: "https://github.com/mwheeler2244/Travel-Thailand",
  },
  {
    id: 4,
    title: "Social Media Marketing Website",
    description:
      "A professional website for a social media marketing company featuring modern design, service showcases, and client testimonials.",
    image: "/assets/moreProjects2.jpg",
    technologies: ["WordPress", "CSS3"],
    liveDemo: "https://aliceblue-tapir-215849.hostingersite.com/",
    github: "https://github.com/mwheeler2244/Heartland-Co",
  },
  {
    id: 5,
    title: "VR Headset E-Commerce Store",
    description:
      "A fully functional e-commerce website for VR headsets with product showcases, shopping cart functionality, and responsive design.",
    image: "/assets/heroVR.jpg",
    technologies: ["HTML5", "CSS3", "JavaScript"],
    liveDemo: "https://github.com/mwheeler2244/VR-Headset-E-Commerce",
    github: "https://github.com/mwheeler2244/VR-Headset-E-Commerce",
  },
  {
    id: 6,
    title: "WordPress Travel Blog",
    description:
      "A travel blog built with WordPress showcasing journey experiences with custom themes and dynamic content management.",
    image: "/assets/travelnamfon.jpg",
    technologies: ["WordPress", "PHP", "MySQL"],
    liveDemo: "https://littlegirljourney.com",
    github: null,
  },
];

export default function ProjectsPage() {
  return (
    <>
      <Navigation />
      <main className="section" style={{ paddingTop: "8rem" }}>
        <div className="container">
          <h1 className="section-title">All Projects</h1>

          <p
            style={{
              marginBottom: "4rem",
              color: "var(--color-gray-700)",
              maxWidth: "600px",
              margin: "4rem 0",
            }}
          >
            A collection of projects showcasing my skills in web development,
            from AI-powered applications to responsive websites and e-commerce
            solutions.
          </p>

          <div className="projects-grid">
            {allProjects.map((project) => (
              <div key={project.id} className="project-card">
                <div className="project-image">
                  <Image
                    src={project.image}
                    alt={`${project.title} Screenshot`}
                    width={600}
                    height={400}
                  />
                </div>

                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p className="project-description">{project.description}</p>

                  <div className="tech-tags">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="project-links">
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary"
                    >
                      Live Demo
                    </a>
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-secondary"
                      >
                        View Code
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
