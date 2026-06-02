import { useEffect, useRef } from 'react'
import { TwitterXIcon, GitHubIcon, GlobeIcon, MailIcon } from '../ui/Icons'
import './Hero.css'

const SOCIAL_LINKS = [
  { icon: TwitterXIcon, label: 'Twitter / X', href: 'https://twitter.com' },
  { icon: GitHubIcon,   label: 'GitHub',       href: 'https://github.com' },
  { icon: GlobeIcon,    label: 'Website',      href: '/' },
  { icon: MailIcon,     label: 'Email',        href: 'mailto:aditya@example.com' },
]

export default function Hero() {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) el.classList.add('visible') },
      { threshold: 0.1 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <section className="hero section">
      <div className="container">
        <div className="hero__inner fade-in" ref={ref}>

          {/* Avatar + Name */}
          <div className="hero__identity">
            <div className="hero__avatar" aria-label="Aditya Kumar avatar">
              <span className="hero__avatar-initials">AK</span>
            </div>
            <div className="hero__name-block">
              <h1 className="hero__name">Aditya Kumar</h1>
              <p className="hero__subtitle">Full-Stack Developer</p>
            </div>
          </div>

          {/* Metadata row */}
          <div className="hero__meta-row">
            <div className="hero__meta-item">
              <span className="hero__meta-label">LOCATION</span>
              <span className="hero__meta-value">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
                </svg>
                Odisha, India
              </span>
            </div>
            <div className="hero__meta-item">
              <span className="hero__meta-label">EMAIL</span>
              <span className="hero__meta-value">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 01-2.06 0L2 7"/>
                </svg>
                aditya@example.com
              </span>
            </div>
            <div className="hero__meta-item">
              <span className="hero__meta-label">PRONOUNS</span>
              <span className="hero__meta-value">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/>
                </svg>
                he/him
              </span>
            </div>
          </div>

          {/* Intro paragraph */}
          <p className="hero__bio">
            I build full-stack web products end-to-end, obsessing over small details that make
            software feel right to use.{' '}
            Currently working with{' '}
            <strong>TypeScript</strong>, <strong>React</strong>, <strong>Next.js</strong>, and{' '}
            <strong>Node.js</strong>.
          </p>

          {/* Status strip */}
          <div className="hero__status">
            <span className="hero__status-dot" aria-hidden="true" />
            <span className="hero__status-label">Last played</span>
            <span className="hero__status-sep">—</span>
            <span className="hero__status-track">ATLAS · REVIVAL</span>
          </div>

          {/* Social links */}
          <div className="hero__socials">
            {SOCIAL_LINKS.map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                className="hero__social-link"
                aria-label={label}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
              >
                <Icon size={18} />
              </a>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
