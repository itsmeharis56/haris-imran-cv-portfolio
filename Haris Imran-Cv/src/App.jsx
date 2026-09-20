import "./App.css";

function App() {
  const skills = [
    "React.js",
    "JavaScript",
    "HTML5",
    "CSS3",
    "Responsive Design",
    "Git & GitHub",
  ];

  return (
    <div className="portfolio">

      {/* NAVBAR */}
      <nav className="navbar">
        <div className="logo">
          Haris Imran<span>.</span>
        </div>

        <a
          href="/Haris_Imran_CV.pdf"
          download
          className="nav-btn"
        >
          Download Resume ↓
        </a>
      </nav>

      {/* HERO */}
      <main className="hero">

        <div className="hero-content">

          <div className="status">
            <span></span>
            OPEN TO OPPORTUNITIES
          </div>

          <p className="hello">Hello, I'm</p>

          <h1>
            Haris <span>Imran.</span>
          </h1>

          <h2>Frontend Developer</h2>

          <p className="description">
            BS Computer Science student focused on building modern,
            responsive and user-friendly web experiences using React.js,
            JavaScript, HTML and CSS.
          </p>

          {/* SKILLS */}
          <div className="skills">
            {skills.map((skill) => (
              <span key={skill}>{skill}</span>
            ))}
          </div>

          {/* BUTTONS */}
          <div className="actions">

            <a
              href="/Haris_Imran_CV.pdf"
              target="_blank"
              rel="noreferrer"
              className="primary-btn"
            >
              View Resume ↗
            </a>

            <a
              href="/Haris_Imran_CV.pdf"
              download="Haris_Imran_CV.pdf"
              className="secondary-btn"
            >
              Download CV ↓
            </a>

          </div>


          <div className="social-links">
  <a
    href="YOUR_LINKEDIN_URL"
    target="_blank"
    rel="noreferrer"
  >
    LinkedIn ↗
  </a>

  <a
    href="https://github.com/itsmeharis56"
    target="_blank"
    rel="noreferrer"
  >
    GitHub ↗
  </a>

  <a href="mailto:itsmeharis11@gmail.com">
    Email ↗
  </a>
</div>

          <div className="info">
            <div>
              <strong>Education</strong>
              <p>BS Computer Science</p>
            </div>

            <div>
              <strong>Focus</strong>
              <p>Frontend Development</p>
            </div>

            <div>
              <strong>Location</strong>
              <p>Faisalabad, Pakistan</p>
            </div>
          </div>

        </div>

        {/* DECORATION */}
        <div className="visual">
          <div className="glow"></div>

          <div className="resume-card">
            <div className="document-icon">CV</div>

            <h3>Haris Imran</h3>
            <p>Frontend Developer</p>

            <div className="line large"></div>
            <div className="line"></div>
            <div className="line small"></div>

            <div className="available">
              ✓ Latest Resume
            </div>
          </div>
        </div>

      </main>

      <footer>
        <p>© 2026 Haris Imran · Resume Portfolio</p>
      </footer>

    </div>
  );
}

export default App;