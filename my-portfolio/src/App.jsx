import React from "react";

const projects = [
  {
    title:"Real Estate Market Tracker",
    description:
      "A full-stack web app that tracks real estate market trends using public APIs, with data visualization and user authentication.",
    image: "/projectImages/re-pic.png",
    stack: [
      "NextJS",
      "TypeScript",
      "Tailwind CSS",
      "PostgreSQL",
      "Node.js",
      "Prisma",
    ],
    liveUrl: "https://homesnearyou.vercel.app/",
    codeUrl: "https://github.com/Lopez4163/house_market_tracker/security",

  },
  {
    title: "Queens Tech Bros",
    description:
      "Brand + website for a small-business IT shop handling Wi-Fi, cabling, and security camera installs.",
    image: "/projectImages/qtb-pic.png",
    stack: ["NextJS", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://queenstechbros.com",
    codeUrl: "https://github.com/lopez4163",
  },
  {
    title: "José’s Motorcycle Repair",
    description:
      "Mobile-friendly website for a local motorcycle repair shop with services, photos, and quick contact links.",
    image: "/projectImages/jm-pic.png",
    stack: ["NextJS", "JavaScript", "Tailwind CSS", "Vite"],
    liveUrl: "https://josemoto.netlify.app/",
    codeUrl: "https://github.com/datafaust/jose-moto",
  },
  {
    title: "Nico's HomeLab",
    description:
      "Self-hosted setup with media, VPN, reverse proxy, monitoring, and multiple web services under one roof.",
    image: "/projectImages/hl-pic.png",
    stack: ["Linux", "Ubuntu Server", "Python", "NGINX", "fail2ban"],
    liveUrl: "https://nicoshomelab.duckdns.org/",
    codeUrl: "https://github.com/Lopez4163/BuntoBox_Landing_Page.git",
  },
  {
    title: "Drone Tracker",
    description:
      "Real-time Rust telemetry dashboard using UDP to track multiple drones with EMA-smoothing and egui visualization.",
    image: "/projectImages/dt-pic.png",
    stack: ["Rust", "egui / eframe", "UDP", "WASM"],
    liveUrl: "https://lopez4163.github.io/drone_tracker/",
    codeUrl: "https://github.com/Lopez4163/drone_tracker",
  },
  {
    title: "Mat Kingz",
    description:
      "Jiu-Jitsu instructor booking platform with schedules, profiles, and Stripe-powered payments.",
    image: "/projectImages/mk-pic.jpg",
    stack: [
      "React",
      "Vite",
      "Javascript",
      "redux",
      "Tailwind CSS",
      "node",
      "mySQL",
      "Firebase",
      "Stripe",
      "AWS",
    ],
    liveUrl: "#",
    codeUrl: "https://github.com/datafaust/bjj-app",
  },
];

const skills = [
  "JavaScript / TypeScript",
  "React / Next.js",
  "Tailwind CSS / CSS",
  "Python / Rust",
  "Node.js / APIs",
  "PostgreSQL / Prisma",
  "mySQL / Firebase",
  "Stripe/Payments",
  "Git / GitHub",
  "Docker / Linux",
  "Networking & Security",
  "AWS / Cloud Services",
  "slack / teamwork",
];

export default function App() {
  return (
    <div className="page">
      {/* TOP GRADIENT BACKDROP */}
      <div className="backdrop-orbit" />

      {/* NAVBAR */}
      <header className="nav">
        <div className="nav-left">
          <div className="nav-logo-orb">
            <img
              src="/projectImages/headShot.JPG"
              alt="Nicholas Lopez"
              className="nav-avatar"
            />
          </div>
          <div className="nav-text">
            <span className="nav-name">Nicholas Lopez</span>
            <span className="nav-sub">Developer · Infra · DevOps · Networking</span>
          </div>
        </div>
        <nav className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main className="main">
        {/* ABOUT / HERO FIRST */}
        <section id="about" className="section hero">
        <div className="hero-left">
          <p className="hero-tag">About</p>
        <h1 className="hero-title">
          Building systems that have <span className="hero-highlight">purpose.</span>
        </h1>
        <p className="hero-text">
        I’m Nicholas — a developer from Queens, NY who loves turning scattered ideas into working systems. 
        I enjoy building things from the ground up, piecing the puzzle together, and learning something new at every step.
        </p>
        <p className="hero-text">
          I follow whatever interests me and build the tools I wish existed. If I
          need it, I build it. If I want it, I try.
        </p>
        <div className="hero-actions">
          <a href="#projects" className="btn primary">
            View projects
          </a>
          <a href="#contact" className="btn ghost">
            Get in touch
          </a>
        </div>
      </div>

          <div className="hero-right">
            <div className="hero-card">
              <p className="hero-card-label">Credentials</p>
              <dl className="hero-card-list">
                <div className="hero-row">
                  <dt>Based in</dt>
                  <dd>Queens, New York</dd>
                </div>
                <div className="hero-row">
                  <dt>Focus</dt>
                  <dd>Full-stack · Infrastructure · DevOps · Networking</dd>
                </div>
                <div className="hero-row">
                  <dt>Currently</dt>
                  <dd>
                     Developer @Queens Tech Bros
                  </dd>
                </div>
                <div className="hero-row">
                  <dt>Background</dt>
                  <dd>U.S. Marine Corps veteran</dd>
                </div>
              </dl>
            </div>

            <div className="hero-card subtle">
              <p className="hero-card-label">Education & Certifications</p>
              <ul className="hero-bullets">
                <li className="custom-color">
                  Bachelors in Computer Systems at NYC College of Technology,
                  2023 - 2026
                </li>
                <li className="custom-color">
                  Full-Stack Developer Certification - FullStack Academy, 2024
                </li>
                <li className="custom-color">AWS Cloud Practitioner</li>
              </ul>
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="section">
          <div className="section-head">
            <h2>Skills & Stack</h2>
            <p className="section-text">
              Tools I use to build dashboards, APIs, and the infrastructure they
              live on.
            </p>
          </div>
          <div className="skills-grid">
            {skills.map((skill) => (
              <div key={skill} className="skill-pill">
                {skill}
              </div>
            ))}
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="section">
          <div className="section-head">
            <h2>Projects</h2>
            <p className="section-text">
              A mix of personal builds and client work. Each card shows a visual
              snapshot, stack, and links.
            </p>
          </div>

          <div className="projects-grid">
            {projects.map((project) => (
              <article
                key={project.title}
                className="project-card"
                onClick={() => {
                  if (project.liveUrl && project.liveUrl !== "#") {
                    window.open(project.liveUrl, "_blank", "noreferrer");
                  }
                }}
              >
                <div className="project-media">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="project-image"
                  />
                </div>
                <div className="project-body">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">
                    {project.description}
                  </p>

                  <div className="project-stack">
                    {project.stack.map((tech) => (
                      <span key={tech} className="stack-pill">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="project-links">
                  {project.codeUrl && (
                    <a
                      href={project.codeUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="code-tag"
                      onClick={(e) => {
                        // prevent card click from also firing
                        e.stopPropagation();
                      }}
                    >
                      {`</code>`}
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="section">
          <div className="section-head">
            <h2>Contact</h2>
            <p className="section-text">
              Open to internships, junior roles, and collabs where code and
              infrastructure overlap.
            </p>
          </div>
          <div className="contact-card">
            <p className="section-text">
              Best way to reach me is email. You can also find me on GitHub and
              LinkedIn.
            </p>
            <div className="contact-actions">
              <a
                href="mailto:nlopez6499@gmail.com"
                className="btn primary wide"
              >
                Email me
              </a>
              <a
                href="https://github.com/lopez4163"
                target="_blank"
                rel="noreferrer"
                className="btn ghost"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/nicholas-lopez-83b031299/"
                target="_blank"
                rel="noreferrer"
                className="btn ghost"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </section>

        <footer className="footer">
          <span>© {new Date().getFullYear()} Nico Lopez</span>
          <span>v2 · Thanks For Visiting!</span>
        </footer>
      </main>
    </div>
  );
}
