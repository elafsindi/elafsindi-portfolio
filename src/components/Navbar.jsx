import { useState, useEffect } from 'react';
import { useLang } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import './Navbar.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { lang, toggleLang, t } = useLang();
  const { isDark, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t.nav.about, href: '#about' },
    { name: t.nav.skills, href: '#skills' },
    { name: t.nav.projects, href: '#projects' },
    { name: t.nav.experience, href: '#experience' },
    { name: t.nav.education, href: '#education' },
    // { name: t.nav.blog, href: '#blog' },
    { name: t.nav.contact, href: '#contact' },
  ];

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="container navbar__container">
        <a href="#hero" className="navbar__logo">
          <span className="navbar__logo-bracket">&lt;</span>
          <span className="navbar__logo-text">ES</span>
          <span className="navbar__logo-bracket">/&gt;</span>
        </a>

        {/* Desktop Nav */}
        <div className="navbar__menu">
          <ul className="navbar__list">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a href={link.href} className="navbar__link">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          <div className="navbar__actions">
            <button
              onClick={toggleTheme}
              className="navbar__action-btn"
              aria-label="Toggle Theme"
            >
              {isDark ? '☀️' : '🌙'}
            </button>
            <button
              onClick={toggleLang}
              className="navbar__lang-btn"
            >
              {lang === 'en' ? 'AR' : 'EN'}
            </button>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button
          className="navbar__mobile-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <div className={`hamburger ${menuOpen ? 'active' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>

        {/* Mobile Nav */}
        {menuOpen && (
          <div className="navbar__mobile-menu fade-in">
            <ul className="navbar__mobile-list">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="navbar__mobile-link"
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <div className="navbar__mobile-actions">
              <button onClick={toggleTheme} className="navbar__action-btn">
                {isDark ? '☀️ Light Mode' : '🌙 Dark Mode'}
              </button>
              <button onClick={toggleLang} className="btn btn-outline">
                {t.nav.toggleLang}
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}