import { useEffect, useRef } from 'react'
import './Experience.css'

const EXPERIENCE = [
  {
    id: 'exp-1',
    title: 'Founder & Developer',
    company: null,
    companyNote: 'Stealth',
    location: 'Remote, Full-Time',
    start: 'May 2026',
    end: 'Present',
    current: true,
    description: 'Currently building something new. Details under wraps for now.',
    bullets: [],
    tags: [],
  },
  {
    id: 'exp-2',
    title: 'Founder & Developer',
    company: 'Onavix Studio',
    companyNote: null,
    location: 'Remote, Part-time',
    start: 'Feb 2024',
    end: 'May 2026',
    current: false,
    description:
      'Founded and scaled a web development studio, leading end-to-end delivery of production websites and applications for clients across multiple industries.',
    bullets: [
      'Worked with 30+ clients end to end, from discovery and design to launch and ongoing iteration',
      'Drove up to 2x increase in conversions and volume by optimizing performance, SEO, and UX',
    ],
    tags: ['Next.js', 'React', 'Tailwind', 'Figma', 'MongoDB', 'Git', 'TypeScript'],
  },
  {
    id: 'exp-3',
    title: 'Full-Stack Developer',
    company: 'Freelance',
    companyNote: null,
    location: 'Remote, Contract',
    start: 'Jan 2023',
    end: 'Feb 2024',
    current: false,
    description:
      'Built and shipped full-stack web applications for startups and small businesses, focusing on clean architecture and fast delivery.',
    bullets: [
      'Delivered 15+ projects across SaaS, e-commerce, and marketing domains',
      'Reduced page load time by avg 40% through code splitting and CDN optimization',
    ],
    tags: ['React', 'Node.js', 'Express.js', 'MongoDB', 'TypeScript'],
  },
]

function ExperienceItem({ item, delay }) {
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
    <div className="exp-item fade-in" ref={ref}>
      <div className="exp-item__dot-col">
        <span className={`exp-item__dot${item.current ? ' exp-item__dot--active' : ''}`} />
        <span className="exp-item__line" />
      </div>
      <div className="exp-item__body">
        {/* Header row */}
        <div className="exp-item__header">
          <div className="exp-item__title-block">
            <span className="exp-item__title">{item.title}</span>
            {item.company && (
              <>
                <span className="exp-item__sep">·</span>
                <span className="exp-item__company">{item.company}</span>
              </>
            )}
            {item.companyNote && (
              <>
                <span className="exp-item__sep">·</span>
                <span className="exp-item__company-note">{item.companyNote}</span>
              </>
            )}
          </div>
          <span className="exp-item__dates">
            {item.start} — {item.end}
          </span>
        </div>

        {/* Location */}
        <p className="exp-item__location">{item.location}</p>

        {/* Description */}
        <p className="exp-item__desc">{item.description}</p>

        {/* Bullets */}
        {item.bullets.length > 0 && (
          <ul className="exp-item__bullets">
            {item.bullets.map((b, i) => (
              <li key={i} className="exp-item__bullet">
                <span className="exp-item__bullet-dot">·</span>
                {b}
              </li>
            ))}
          </ul>
        )}

        {/* Tags */}
        {item.tags.length > 0 && (
          <div className="exp-item__tags">
            {item.tags.map((tag) => (
              <span key={tag} className="exp-tag">{tag}</span>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default function Experience() {
  return (
    <section className="experience section">
      <div className="container">
        <h2 className="section-label">Experience</h2>
        <div className="experience__list">
          {EXPERIENCE.map((item, i) => (
            <ExperienceItem key={item.id} item={item} delay={i * 100} />
          ))}
        </div>
      </div>
    </section>
  )
}
