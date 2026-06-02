import { GitHubIcon, TwitterXIcon, GlobeIcon, MailIcon } from '../ui/Icons'
import './Footer.css'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer__inner container">
        <p className="footer__quote">
          "Details are not the details. They make the design."
        </p>
        <div className="footer__bottom">
          <span className="footer__copy">© {year} Aditya Kumar. All rights reserved.</span>
          <nav className="footer__nav">
            <a href="/" className="footer__link">Home</a>
            <a href="/about" className="footer__link">About</a>
            <a href="/components" className="footer__link">Components</a>
          </nav>
          <div className="footer__socials">
            <a href="https://twitter.com" className="footer__social-link" aria-label="Twitter/X" target="_blank" rel="noopener noreferrer">
              <TwitterXIcon size={14} />
            </a>
            <a href="https://github.com" className="footer__social-link" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
              <GitHubIcon size={14} />
            </a>
            <a href="/" className="footer__social-link" aria-label="Website">
              <GlobeIcon size={14} />
            </a>
            <a href="mailto:aditya@example.com" className="footer__social-link" aria-label="Email">
              <MailIcon size={14} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
