import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { SunIcon, MoonIcon } from '../ui/Icons'
import './Header.css'

export default function Header({ theme, onToggleTheme }) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`header${scrolled ? ' header--scrolled' : ''}`}>
      <div className="header__inner container">
        <nav className="header__nav">
          <NavLink
            to="/"
            className={({ isActive }) => `header__link${isActive ? ' header__link--active' : ''}`}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => `header__link${isActive ? ' header__link--active' : ''}`}
          >
            About
          </NavLink>
          <NavLink
            to="/components"
            className={({ isActive }) => `header__link${isActive ? ' header__link--active' : ''}`}
          >
            Components
          </NavLink>
        </nav>
        <button
          className="header__toggle"
          onClick={onToggleTheme}
          aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
        >
          {theme === 'dark' ? <SunIcon size={16} /> : <MoonIcon size={16} />}
        </button>
      </div>
    </header>
  )
}
