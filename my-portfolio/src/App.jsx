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
      "Brand, websites, AI integrations, and automation workflows for small businesses looking to improve customer experience, reduce manual work, and modernize operations.",
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

const skillGroups = [
  {
    title: "Build",
    items: [
      "JavaScript / TypeScript",
      "React / Next.js",
      "Tailwind CSS / CSS",
      "Node.js / REST APIs",
    ],
  },
  {
    title: "AI Systems",
    items: [
      "LangGraph / LangChain",
      "RAG (Retrieval-Augmented Generation)",
      "Prompt Engineering",
      "Tool Calling / AI Integrations",
      "OpenAI / Gemini / Anthropic",
      "Claude Code / Codex",
    ],
  },
  {
    title: "Data",
    items: [
      "PostgreSQL / Prisma",
      "MySQL / Firebase / Supabase",
      "Vector Databases (Pinecone)",
      "Redis / Upstash",
    ],
  },
  {
    title: "Infrastructure & Systems",
    items: [
      "Python",
      "Docker / Linux",
      "Networking & Security",
      "AWS / GCP / Vercel",
    ],
  },
  {
    title: "Workflow",
    items: [
      "Git / GitHub / GitHub Actions",
      "CI/CD",
      "Debugging & Testing",
      "Deployment",
    ],
  },
  {
    title: "Integrations",
    items: [
      "Stripe / Payments",
      "Zoho CRM / APIs",
      "Calendly / Automation Tools",
    ],
  },
];

const workExperience = [
  {
    company: "Gesture",
    role: "Software Engineer",
    meta: "Current",
    location: "New York / Remote",
    image: "/projectImages/gesture-logo.png",
    initials: "G",
    bullets: [
      "Build full-stack product features with React, TypeScript, and Next.js across frontend interfaces, backend APIs, and production workflows.",
      "Develop AI-assisted systems with LangGraph and Python, including automation flows and tool-integrated workflows connected to real business operations.",
      "Work across multiple departments to build automation tools with Claude, Cowork, and workflow automation systems that reduce manual department-level tasks.",
    ],
    stack: [
      "React",
      "TypeScript",
      "Next.js",
      "LangGraph",
      "Python",
      "Node.js",
      "AI Workflows",
      "APIs",
      "Automation",
    ],
  },
  {
    company: "Queens Tech Bros",
    role: "Developer",
    meta: "Client and small-business systems",
    location: "Queens, NY",
    image: "/projectImages/queenstech-logo.png",
    initials: "QTB",
    bullets: [
      "Created public-facing websites and technical solutions for small businesses that needed a stronger online presence and clearer customer paths.",
      "Built internal automation workflows that helped businesses save time, reduce manual work, and use resources more efficiently.",
      "Applied AI automation and practical software tools to solve day-to-day business problems across operations, customer communication, and service delivery.",
    ],
    stack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "AI Automation",
      "Internal Tools",
      "Small Business Tech",
    ],
  },
];

export default function App() {
  React.useEffect(() => {
    if (window.location.hash) {
      window.history.replaceState(null, "", window.location.pathname);
      window.scrollTo(0, 0);
    }
  }, []);

  return (
    <div className="page">
      <header className="nav">
        <div className="nav-left">
          <div className="nav-text">
            <span className="nav-name">Nicholas Lopez</span>
            <span className="nav-sub">
              Software Engineer · AI Systems · Automation
            </span>
          </div>
        </div>
        <nav className="nav-links">
          <a href="#summary">About</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main className="main">
        <section id="about" className="section hero">
          <div className="hero-copy">
            <p className="eyebrow">Queens, NY / Full-stack systems</p>
            <h1 className="hero-title">
              I design, build, and ship web systems with a practical edge.
            </h1>
            <p className="hero-text">
              I’m Nicholas, a developer who turns scattered ideas into working
              products. I like the full path: interface, backend, deployment,
              networking, and the small fixes that keep things alive.
            </p>
            <div className="hero-actions">
              <a href="#projects" className="btn primary">
                View work
              </a>
              <a href="#contact" className="btn ghost">
                Contact
              </a>
            </div>
          </div>

          <div className="hero-visual" aria-label="Nicholas Lopez profile summary">
            <div className="portrait-card">
              <img
                src="/projectImages/headshot.png"
                alt="Nicholas Lopez"
                className="hero-portrait"
              />
            </div>
            <div className="system-card">
              <p className="system-label">Profile</p>
              <dl className="system-list">
                <div>
                  <dt>Role</dt>
                  <dd>Software Engineer @ Gesture</dd>
                </div>
                <div>
                  <dt>Base</dt>
                  <dd>Queens, New York</dd>
                </div>
                <div>
                  <dt>Background</dt>
                  <dd>U.S. Marine Corps veteran</dd>
                </div>
                <div>
                  <dt>Education</dt>
                  <dd>Computer Systems, NYCCT 2023 - 2026</dd>
                </div>
              </dl>
            </div>
          </div>
        </section>

        <section id="summary" className="section summary-section">
          <div className="section-intro">
            <div>
              <p className="eyebrow">About</p>
              <h2>A builder who cares about the full system.</h2>
            </div>
          </div>
          <div className="summary-grid">
            <div className="summary-copy">
              <p>
                I’m Nicholas Lopez, a Queens-based software engineer focused on
                full-stack development, AI systems, and automation. I build
                end-to-end products, from React and Next.js frontends to backend
                APIs, cloud infrastructure, and deployed AI workflows.
              </p>
              <p>
                My work includes conversational agents, RAG pipelines, and
                tool-integrated systems that connect directly to real business
                workflows. I’m interested in how software runs beyond the UI,
                especially how data flows, how systems scale, and how automation
                replaces manual processes.
              </p>
              <p>
                Before software, I served in the U.S. Marine Corps, which shaped
                how I approach engineering: stay calm, learn fast, communicate
                clearly, and get systems working.
              </p>
              <p>
                I’m currently building at Gesture while finishing my Computer
                Systems degree at NYC College of Technology.
              </p>
            </div>
            <div className="summary-facts">
              <div>
                <span>Current</span>
                <strong>Software Engineer @ Gesture</strong>
              </div>
              <div>
                <span>Education</span>
                <strong>Computer Systems, NYCCT</strong>
              </div>
              <div>
                <span>Certification</span>
                <strong>AWS Cloud Practitioner</strong>
              </div>
              <div>
                <span>Background</span>
                <strong>U.S. Marine Corps veteran</strong>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="section">
          <div className="section-intro">
            <div>
              <p className="eyebrow">Stack</p>
              <h2>Tools for products that need to run.</h2>
              <p className="section-text">
                I work across the app layer and the infrastructure underneath it:
                dashboards, APIs, databases, cloud services, and Linux systems.
              </p>
            </div>
          </div>
          <div className="skills-grid">
            {skillGroups.map((group) => (
              <article className="skill-card" key={group.title}>
                <h3>{group.title}</h3>
                <div className="skill-list">
                  {group.items.map((skill) => (
                    <span key={skill} className="skill-pill">
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="experience" className="section experience-section">
          <div className="section-intro">
            <div>
              <p className="eyebrow">Work Experience</p>
              <h2>Where I’ve built production systems.</h2>
            </div>
          </div>
          <div className="experience-list">
            {workExperience.map((job) => (
              <article className="experience-card" key={job.company}>
                <div className="experience-copy">
                  <div className="experience-head">
                    <div>
                      <p>{job.company}</p>
                      <h3>{job.role}</h3>
                    </div>
                    <span>{job.meta}</span>
                  </div>
                  <p className="experience-location">{job.location}</p>
                  <ul className="experience-bullets">
                    {job.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                  <div className="experience-stack">
                    {job.stack.map((tech) => (
                      <span className="stack-pill" key={tech}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="experience-media">
                  {job.image ? (
                    <img src={job.image} alt={`${job.company} visual`} />
                  ) : (
                    <div className="company-placeholder">{job.initials}</div>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="section">
          <div className="section-intro">
            <div>
              <p className="eyebrow">Selected work</p>
              <h2>Projects with a working surface and a real stack.</h2>
              <p className="section-text">
                Client work, personal tools, infrastructure experiments, and
                products that helped me learn by building.
              </p>
            </div>
          </div>

          <div className="projects-grid">
            {projects.map((project, index) => (
              <article
                key={project.title}
                className={`project-card ${index < 2 ? "featured" : ""}`}
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
                  <span className="project-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>
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
                  {project.liveUrl && project.liveUrl !== "#" && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="project-link"
                      onClick={(e) => {
                        e.stopPropagation();
                      }}
                    >
                      Live
                    </a>
                  )}
                  {project.codeUrl && (
                    <a
                      href={project.codeUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="code-tag"
                      onClick={(e) => {
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

        <section id="contact" className="section contact-section">
          <div className="section-intro">
            <div>
              <p className="eyebrow">Contact</p>
              <h2>Need someone who can build and keep moving?</h2>
            </div>
          </div>
          <div className="contact-card">
            <p className="section-text">
              Open to internships, junior roles, and collabs where code and
              infrastructure overlap. Best way to reach me is email.
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
