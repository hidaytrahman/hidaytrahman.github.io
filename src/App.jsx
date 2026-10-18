import { useEffect, useState } from 'react';
import './App.css';
import { portfolio } from './core/data/portfolio';
import articles from './core/data/devto.json';

const categories = ['All work', 'Tools', 'Open source', 'Experiments'];

function Arrow({ diagonal = false }) {
  return (
    <span aria-hidden="true" className="arrow">
      {diagonal ? '↗' : '→'}
    </span>
  );
}

function Portfolio() {
  const [theme, setTheme] = useState(() => {
    if (typeof window === 'undefined') return 'light';
    return (
      localStorage.getItem('portfolio-theme') ||
      (window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light')
    );
  });
  const [category, setCategory] = useState('All work');
  const [expandedProject, setExpandedProject] = useState(null);
  const [activeRole, setActiveRole] = useState(0);
  const [openPrinciple, setOpenPrinciple] = useState(0);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  const projects = portfolio.projects.filter(
    (project) => category === 'All work' || project.category === category,
  );
  const handleRoleKeyDown = (event, index) => {
    let nextIndex = index;
    if (event.key === 'ArrowRight' || event.key === 'ArrowDown')
      nextIndex = (index + 1) % portfolio.roles.length;
    else if (event.key === 'ArrowLeft' || event.key === 'ArrowUp')
      nextIndex = (index - 1 + portfolio.roles.length) % portfolio.roles.length;
    else if (event.key === 'Home') nextIndex = 0;
    else if (event.key === 'End') nextIndex = portfolio.roles.length - 1;
    else return;
    event.preventDefault();
    setActiveRole(nextIndex);
    document.getElementById(`role-tab-${nextIndex}`)?.focus();
  };

  return (
    <div className="site-shell">
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header className="topbar">
        <a className="wordmark" href="#top" aria-label="Hidayt Rahman, home">
          <span>HR</span>
          <span className="wordmark-dot">.</span>
        </a>
        <nav aria-label="Main navigation" className="main-nav">
          <a href="#work">Work</a>
          <a href="#approach">Approach</a>
          <a href="#journey">Journey</a>
          <a href="#writing">Writing</a>
          <a href="#contact">Contact</a>
        </nav>
        <div className="top-actions">
          <a className="availability" href={`mailto:${portfolio.email}`}>
            <span /> Open to conversations
          </a>
          <button
            className="theme-toggle"
            type="button"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
            title="Switch theme"
          >
            {theme === 'dark' ? '☼' : '◐'}
          </button>
        </div>
      </header>

      <main id="main">
        <section
          className="hero section-wrap"
          id="top"
          aria-labelledby="hero-title"
        >
          <div className="hero-copy">
            <p className="eyebrow">
              <span className="eyebrow-line" /> {portfolio.location}{' '}
              <span className="eyebrow-divider">/</span> {portfolio.role}
            </p>
            <h1 id="hero-title">
              I build <span className="serif-accent">frontend systems</span>
              <br className="desktop-break" /> that help teams move{' '}
              <span className="hero-faster">
                with clarity<span className="scribble">✳</span>
              </span>
            </h1>
            <p className="hero-intro">{portfolio.intro}</p>
            <div className="hero-ctas">
              <a className="button button-primary" href="#work">
                Explore selected work <Arrow />
              </a>
              <a className="text-link" href={`mailto:${portfolio.email}`}>
                Get in touch <Arrow diagonal />
              </a>
            </div>
            <div className="hero-footnote">
              <span className="mono-label">CURRENTLY</span>
              <span>
                Tech Lead at{' '}
                <a
                  href="https://www.candescent.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Candescent <Arrow diagonal />
                </a>
              </span>
            </div>
          </div>
          <div
            className="hero-art"
            aria-label="Illustration of a frontend architecture system"
            role="img"
          >
            <div className="art-caption mono-label">
              A SYSTEMS THINKING PRACTICE <span>01—04</span>
            </div>
            <div className="architecture-board">
              <div className="board-grid" />
              <div className="orbit orbit-one" />
              <div className="orbit orbit-two" />
              <div className="node node-ui">
                <span className="node-icon">▤</span>
                <b>Experience</b>
                <small>Interfaces people trust</small>
              </div>
              <div className="node node-system">
                <span className="node-icon">⌘</span>
                <b>Architecture</b>
                <small>Patterns that scale</small>
              </div>
              <div className="node node-team">
                <span className="node-icon">✳</span>
                <b>Team practice</b>
                <small>Clarity through craft</small>
              </div>
              <svg
                className="connectors"
                viewBox="0 0 500 400"
                aria-hidden="true"
              >
                <path d="M170 135 C220 150 218 178 240 195" />
                <path d="M330 180 C300 185 290 194 266 205" />
                <path d="M250 260 C230 280 198 295 165 305" />
                <circle cx="250" cy="202" r="4" />
              </svg>
              <div className="center-mark">
                <span>HR</span>
                <i>+</i>
              </div>
              <div className="board-index index-a">01 / DESIGN</div>
              <div className="board-index index-b">02 / ENGINEERING</div>
            </div>
            <div className="art-footer">
              <span>Thoughtful by design.</span>
              <span className="tiny-star">✳</span>
              <span>Built for what’s next.</span>
            </div>
          </div>
          <div className="scroll-cue">
            <span className="scroll-line" /> SCROLL TO EXPLORE
          </div>
        </section>

        <section className="signal-strip" aria-label="Profile highlights">
          <div className="signal-inner">
            <div className="signal-lead">
              A little about
              <br />
              how I work <span>↓</span>
            </div>
            {portfolio.highlights.map((item) => (
              <div className="signal-item" key={item.label}>
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </section>

        <section
          className="work-section section-wrap"
          id="work"
          aria-labelledby="work-title"
        >
          <div className="section-heading">
            <div>
              <p className="eyebrow">
                <span className="eyebrow-line" /> SELECTED WORK
              </p>
              <h2 id="work-title">
                Useful things,
                <br />
                <span className="serif-accent">carefully made.</span>
              </h2>
            </div>
            <p className="section-note">
              A selection of public projects and tools. Explore the details to
              see the problem each one tackles.
            </p>
          </div>
          <div className="project-toolbar">
            <div className="project-count">
              <span className="mono-label">PROJECT INDEX</span>
              <span>
                {String(projects.length).padStart(2, '0')} /{' '}
                {String(portfolio.projects.length).padStart(2, '0')}
              </span>
            </div>
            <div className="filters" role="group" aria-label="Filter projects">
              {categories.map((item) => (
                <button
                  key={item}
                  className={category === item ? 'filter active' : 'filter'}
                  onClick={() => {
                    setCategory(item);
                    setExpandedProject(null);
                  }}
                  aria-pressed={category === item}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          <div className="project-grid">
            {projects.map((project, index) => (
              <article
                className={`project-card project-${index + 1}`}
                key={project.name}
              >
                <div
                  className={`project-visual visual-${project.visual}`}
                  aria-hidden="true"
                >
                  {project.visual === 'mockdata' && (
                    <>
                      <div className="mock-window">
                        <div className="window-dots">
                          <i />
                          <i />
                          <i />
                        </div>
                        <div className="mock-title">
                          mock response <span>JSON</span>
                        </div>
                        <div className="code-row">
                          <b>200</b> <span>{'{ "user": {'}</span>
                        </div>
                        <div className="code-row indent">
                          <span>"name":</span> <em>"Alex Morgan"</em>
                        </div>
                        <div className="code-row indent">
                          <span>"role":</span> <em>"designer"</em>
                        </div>
                        <div className="code-row">
                          <span>{'} }'}</span>
                        </div>
                        <div className="mock-cursor">▋</div>
                      </div>
                      <div className="visual-stamp">DATA, ON DEMAND</div>
                    </>
                  )}
                  {project.visual === 'camera' && (
                    <>
                      <div className="camera-frame">
                        <div className="camera-circle">
                          <span>◉</span>
                        </div>
                        <div className="camera-ui">
                          <span>● REC</span>
                          <span>00:00:12</span>
                        </div>
                        <div className="focus-corners" />
                      </div>
                      <div className="visual-stamp">CAMERA CHECK / 01</div>
                    </>
                  )}
                  {project.visual === 'template' && (
                    <>
                      <div className="template-stack">
                        <div className="template-sheet sheet-back">
                          src / components /
                        </div>
                        <div className="template-sheet sheet-mid">
                          <span>01</span> setup
                        </div>
                        <div className="template-sheet sheet-front">
                          <span>⌘</span>
                          <b>
                            Start with
                            <br />a strong base.
                          </b>
                          <small>React · TypeScript</small>
                        </div>
                      </div>
                      <div className="visual-stamp">
                        A BETTER STARTING POINT
                      </div>
                    </>
                  )}
                  {project.visual === 'api' && (
                    <>
                      <div className="api-map">
                        <div className="api-box">request</div>
                        <span>→</span>
                        <div className="api-cylinder">
                          <i />
                          <b>file</b>
                          <small>store</small>
                        </div>
                        <span>→</span>
                        <div className="api-box response">response</div>
                        <div className="api-url">GET /api/users</div>
                      </div>
                      <div className="visual-stamp">SIMPLE BY DESIGN</div>
                    </>
                  )}
                </div>
                <div className="project-info">
                  <div className="project-meta">
                    <span className="project-number">
                      0{portfolio.projects.indexOf(project) + 1}
                    </span>
                    <span>{project.category}</span>
                    <span>{project.year}</span>
                  </div>
                  <h3>{project.name}</h3>
                  <p className="project-summary">{project.summary}</p>
                  <button
                    className="details-toggle"
                    aria-expanded={expandedProject === project.name}
                    onClick={() =>
                      setExpandedProject(
                        expandedProject === project.name ? null : project.name,
                      )
                    }
                  >
                    {expandedProject === project.name
                      ? 'Close project notes'
                      : 'Explore project'}{' '}
                    <span>{expandedProject === project.name ? '−' : '+'}</span>
                  </button>
                  {expandedProject === project.name && (
                    <div className="project-details">
                      <p>{project.details}</p>
                      <div className="tag-list">
                        {project.stack.map((tag) => (
                          <span key={tag}>{tag}</span>
                        ))}
                      </div>
                      <div className="project-links">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noreferrer"
                        >
                          Source on GitHub <Arrow diagonal />
                        </a>
                        {project.demo && (
                          <a
                            href={project.demo}
                            target="_blank"
                            rel="noreferrer"
                          >
                            Open live project <Arrow diagonal />
                          </a>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section
          className="approach-section"
          id="approach"
          aria-labelledby="approach-title"
        >
          <div className="approach-inner section-wrap">
            <div className="approach-intro">
              <p className="eyebrow">
                <span className="eyebrow-line" /> THE WAY I THINK
              </p>
              <h2 id="approach-title">
                Make complexity
                <br />
                feel <span className="serif-accent">manageable.</span>
              </h2>
              <p>
                Good frontend architecture gives people room to do their best
                work. Here are a few principles I bring to the table.
              </p>
              <div className="approach-mark">
                ↘ <span>DESIGN FOR CHANGE</span>
              </div>
            </div>
            <div className="principles">
              {portfolio.principles.map((principle, index) => (
                <article
                  className={
                    openPrinciple === index ? 'principle open' : 'principle'
                  }
                  key={principle.title}
                >
                  <button
                    className="principle-trigger"
                    onClick={() =>
                      setOpenPrinciple(openPrinciple === index ? -1 : index)
                    }
                    aria-expanded={openPrinciple === index}
                  >
                    <span className="principle-num">0{index + 1}</span>
                    <span className="principle-title">{principle.title}</span>
                    <span className="principle-symbol">
                      {openPrinciple === index ? '−' : '+'}
                    </span>
                  </button>
                  {openPrinciple === index && (
                    <div className="principle-body">
                      <p>{principle.text}</p>
                      <div className="principle-tags">
                        {principle.tags.map((tag) => (
                          <span key={tag}>{tag}</span>
                        ))}
                      </div>
                    </div>
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          className="journey-section section-wrap"
          id="journey"
          aria-labelledby="journey-title"
        >
          <div className="section-heading journey-heading">
            <div>
              <p className="eyebrow">
                <span className="eyebrow-line" /> THE JOURNEY SO FAR
              </p>
              <h2 id="journey-title">
                Growing through
                <br />
                <span className="serif-accent">the work.</span>
              </h2>
            </div>
            <p className="section-note">
              A career built around learning, sharing what works, and helping
              teams deliver thoughtfully.
            </p>
          </div>
          <div className="journey-layout">
            <div
              className="role-list"
              role="tablist"
              aria-label="Career milestones"
            >
              {portfolio.roles.map((role, index) => (
                <button
                  role="tab"
                  aria-selected={activeRole === index}
                  aria-controls="role-panel"
                  id={`role-tab-${index}`}
                  key={role.company}
                  className={
                    activeRole === index ? 'role-tab active' : 'role-tab'
                  }
                  onKeyDown={(event) => handleRoleKeyDown(event, index)}
                  onClick={() => setActiveRole(index)}
                >
                  <span className="role-date">{role.period}</span>
                  <span className="role-company">{role.company}</span>
                  <span className="role-title">{role.title}</span>
                  <span className="role-arrow">↗</span>
                </button>
              ))}
            </div>
            <article
              className="role-detail"
              id="role-panel"
              role="tabpanel"
              aria-labelledby={`role-tab-${activeRole}`}
            >
              <div className="role-detail-top">
                <span className="mono-label">
                  {portfolio.roles[activeRole].period}
                </span>
                <span className="role-current">
                  {portfolio.roles[activeRole].label}
                </span>
              </div>
              <h3>
                {portfolio.roles[activeRole].title}
                <br />
                <span>
                  {activeRole === 0 ? 'at ' : '· '}
                  {portfolio.roles[activeRole].company}
                </span>
              </h3>
              <p>{portfolio.roles[activeRole].summary}</p>
              <ul>
                {portfolio.roles[activeRole].focus.map((item) => (
                  <li key={item}>
                    <span>↗</span>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="role-detail-foot">
                <span>{portfolio.roles[activeRole].location}</span>
                <span>
                  {String(activeRole + 1).padStart(2, '0')} /{' '}
                  {String(portfolio.roles.length).padStart(2, '0')}
                </span>
              </div>
            </article>
          </div>
        </section>

        <section className="capabilities-section">
          <div className="capabilities-inner section-wrap">
            <div>
              <p className="eyebrow">
                <span className="eyebrow-line" /> TOOLKIT
              </p>
              <h2>
                Tools are only
                <br />
                part of the <span className="serif-accent">story.</span>
              </h2>
              <p className="capabilities-copy">
                I care about the choices behind the tools: the right
                abstractions, thoughtful collaboration, and steady delivery.
              </p>
            </div>
            <div className="capability-groups">
              {portfolio.capabilities.map((group) => (
                <div className="capability-group" key={group.title}>
                  <div className="capability-name">{group.title}</div>
                  <div className="capability-tags">
                    {group.items.map((skill) => (
                      <span key={skill}>{skill}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          className="writing-section section-wrap"
          id="writing"
          aria-labelledby="writing-title"
        >
          <div className="writing-heading">
            <div>
              <p className="eyebrow">
                <span className="eyebrow-line" /> NOTES FROM THE FIELD
              </p>
              <h2 id="writing-title">
                Things I’ve <span className="serif-accent">shared.</span>
              </h2>
            </div>
            <a
              className="text-link"
              href="https://dev.to/hidaytrahman"
              target="_blank"
              rel="noreferrer"
            >
              All writing <Arrow diagonal />
            </a>
          </div>
          <div className="writing-list">
            {articles.slice(0, 3).map((article, index) => (
              <a
                className="writing-item"
                href={article.url}
                target="_blank"
                rel="noreferrer"
                key={article.id}
              >
                <span className="writing-index">0{index + 1}</span>
                <span className="writing-title">{article.title}</span>
                <span className="writing-meta">
                  {article.tag_list?.slice(0, 2).join(' · ')}
                </span>
                <span className="writing-arrow">↗</span>
              </a>
            ))}
          </div>
        </section>

        <section className="contact-section section-wrap" id="contact">
          <div className="contact-kicker">
            <span className="tiny-star">✳</span> GOOD WORK STARTS WITH A GOOD
            CONVERSATION
          </div>
          <div className="contact-main">
            <h2>
              Have a thoughtful
              <br />
              challenge in <span className="serif-accent">mind?</span>
            </h2>
            <a
              className="contact-button"
              href={`mailto:${portfolio.email}`}
              aria-label={`Email Hidayt at ${portfolio.email}`}
            >
              Let’s talk <Arrow diagonal />
            </a>
          </div>
          <div className="contact-bottom">
            <span>Based in {portfolio.location} · Working everywhere</span>
            <div className="social-links">
              {portfolio.socials.map((item) => (
                <a
                  key={item.name}
                  href={item.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  {item.name} <Arrow diagonal />
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>
      <footer className="site-footer">
        <a className="wordmark" href="#top">
          HR<span className="wordmark-dot">.</span>
        </a>
        <span>Designed and built with care by Hidayt Rahman</span>
        <a href="#top">Back to top ↑</a>
        <span className="footer-year">© {new Date().getFullYear()}</span>
      </footer>
    </div>
  );
}

export default Portfolio;
