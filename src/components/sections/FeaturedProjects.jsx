import { useEffect, useRef } from 'react'
import { GlobeIcon, GitHubIcon } from '../ui/Icons'
import './FeaturedProjects.css'

const PROJECTS = [
  {
    id: 'onavix',
    title: 'Onavix Studio',
    description:
      'A web development agency specializing in creating visually appealing, conversion-focused websites for clients.',
    website: 'https://example.com',
    github: null,
    gradient: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 40%, #0f3460 70%, #533483 100%)',
    tags: ['Next.js', 'React', 'Tailwind', 'Node.js', 'Figma'],
    tagIcons: ['N', 'R', 'T', 'N', 'F'],
  },
  {
    id: 'wittyr',
    title: 'Wittyr',
    description:
      'An AI-powered platform that analyzes and roasts Reddit users based on their comment history, behavior, and posting patterns.',
    website: 'https://example.com',
    github: 'https://github.com',
    gradient: 'linear-gradient(135deg, #f8f0ff 0%, #e8d5ff 30%, #ffd1dc 60%, #ffecb3 100%)',
    tags: ['Next.js', 'React', 'Tailwind', 'Socket.io', 'MongoDB'],
    tagIcons: ['N', 'R', 'T', 'S', 'M'],
    light: true,
  },
]

const TAG_COLORS = {
  N: '#000',
  R: '#61DAFB',
  T: '#38BDF8',
  S: '#010101',
  M: '#439934',
  F: '#F24E1E',
}

function ProjectCard({ project, delay }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setTimeout(() => el.classList.add('visible'), delay)
      },
      { threshold: 0.1 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [delay])

  return (
    <article className="project-card fade-in" ref={ref}>
      {/* Preview */}
      <div
        className="project-card__preview"
        style={{ background: project.gradient }}
        aria-label={`${project.title} preview`}
      >
        <div className={`project-card__mock-ui${project.light ? ' project-card__mock-ui--light' : ''}`}>
          <div className="mock-browser">
            <div className="mock-browser__bar">
              <span /><span /><span />
            </div>
            <div className="mock-browser__content">
              <div className="mock-line mock-line--title" />
              <div className="mock-line" style={{ width: '70%' }} />
              <div className="mock-line" style={{ width: '55%' }} />
              <div className="mock-btn" />
              <div className="mock-grid">
                <div className="mock-card" />
                <div className="mock-card" />
                <div className="mock-card" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="project-card__body">
        <div className="project-card__header">
          <h3 className="project-card__title">{project.title}</h3>
          <div className="project-card__links">
            {project.github && (
              <a
                href={project.github}
                className="project-card__link"
                aria-label="View on GitHub"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GitHubIcon size={15} />
              </a>
            )}
            {project.website && (
              <a
                href={project.website}
                className="project-card__link"
                aria-label="Visit website"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GlobeIcon size={15} />
              </a>
            )}
          </div>
        </div>

        <p className="project-card__desc">{project.description}</p>

        <div className="project-card__tags">
          {project.tags.map((tag, i) => (
            <span key={tag} className="project-tag" title={tag}>
              <span
                className="project-tag__dot"
                style={{ background: TAG_COLORS[project.tagIcons[i]] || '#888' }}
              />
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  )
}

export default function FeaturedProjects() {
  return (
    <section className="projects section">
      <div className="container">
        <h2 className="section-label">Featured Projects</h2>
        <div className="projects__grid">
          {PROJECTS.map((p, i) => (
            <ProjectCard key={p.id} project={p} delay={i * 120} />
          ))}
        </div>
      </div>
    </section>
  )
}
