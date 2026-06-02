import { useEffect, useRef, useState } from 'react'
import { CalendarIcon, MailIcon, TwitterXIcon, ClockIcon, BriefcaseIcon, ArrowUpRightIcon } from '../ui/Icons'
import './Contact.css'

const CONTACT_OPTIONS = [
  {
    id: 'call',
    Icon: CalendarIcon,
    title: 'Schedule a free call',
    subtitle: '30-minute strategy session',
    href: '#',
  },
  {
    id: 'email',
    Icon: MailIcon,
    title: 'aditya@example.com',
    subtitle: 'Quick inquiries & questions',
    href: 'mailto:aditya@example.com',
  },
  {
    id: 'twitter',
    Icon: TwitterXIcon,
    title: 'Connect on X',
    subtitle: 'Follow for updates & insights',
    href: 'https://twitter.com',
  },
]

export default function Contact() {
  const ref = useRef(null)
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

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

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section className="contact section" id="contact">
      <div className="container">
        <h2 className="section-label">Let's Work Together</h2>

        <div className="contact__grid fade-in" ref={ref}>
          {/* Left */}
          <div className="contact__left">
            <div className="contact__card">
              <h3 className="contact__card-title">Get in Touch</h3>
              <p className="contact__card-subtitle">
                Choose your preferred method to connect and let's discuss your project.
              </p>

              <div className="contact__options">
                {CONTACT_OPTIONS.map(({ id, Icon, title, subtitle, href }) => (
                  <a
                    key={id}
                    href={href}
                    className="contact__option"
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  >
                    <div className="contact__option-icon">
                      <Icon size={15} />
                    </div>
                    <div className="contact__option-text">
                      <span className="contact__option-title">{title}</span>
                      <span className="contact__option-sub">{subtitle}</span>
                    </div>
                    <ArrowUpRightIcon size={12} />
                  </a>
                ))}
              </div>

              <div className="contact__status">
                <div className="contact__status-item">
                  <ClockIcon size={13} />
                  <span>Replies within 24 hours</span>
                </div>
                <div className="contact__status-item">
                  <BriefcaseIcon size={13} />
                  <span>Open to remote, freelance &amp; full-time</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right — form */}
          <div className="contact__right">
            <div className="contact__card">
              <h3 className="contact__card-title">Send a Message</h3>
              <p className="contact__card-subtitle">
                Prefer to write? Fill out the form and I'll get back to you within 24 hours.
              </p>

              {submitted ? (
                <div className="contact__success">
                  <span className="contact__success-icon">✓</span>
                  <p>Message sent! I'll get back to you soon.</p>
                </div>
              ) : (
                <form className="contact__form" onSubmit={handleSubmit} noValidate>
                  <div className="form-group">
                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      placeholder="Full Name"
                      value={form.name}
                      onChange={handleChange}
                      className="form-input"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      value={form.email}
                      onChange={handleChange}
                      className="form-input"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <textarea
                      id="contact-message"
                      name="message"
                      placeholder="Your Message"
                      value={form.message}
                      onChange={handleChange}
                      className="form-input form-textarea"
                      rows={5}
                      required
                    />
                  </div>
                  <button type="submit" className="form-submit" id="contact-submit">
                    Send Message →
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
