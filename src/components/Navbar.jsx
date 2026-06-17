import { useState, useEffect } from 'react';
import { useLang } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight, ArrowLeft } from 'lucide-react';
import './Navbar.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const { lang, toggleLang, t } = useLang();
  const { isDark, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Scroll Spy for active section
      const sections = ['hero', 'about', 'skills', 'projects', 'experience', 'education', 'contact'];
      let current = '';

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            current = section;
            break;
          }
        }
      }

      if (current && current !== 'hero') {
        setActiveSection(current);
      } else if (window.scrollY < 100) {
        setActiveSection('');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'about', name: t.nav.about, href: '#about' },
    { id: 'skills', name: t.nav.skills, href: '#skills' },
    { id: 'projects', name: t.nav.projects, href: '#projects' },
    { id: 'experience', name: t.nav.experience, href: '#experience' },
    { id: 'education', name: t.nav.education, href: '#education' },
    { id: 'contact', name: t.nav.contact, href: '#contact' },
  ];

  // Framer Motion Variants for Full Screen Menu
  const menuVariants = {
    closed: {
      opacity: 0,
      y: -20,
      transition: { duration: 0.3, ease: 'easeInOut' }
    },
    open: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: 'easeOut', staggerChildren: 0.05, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    closed: { opacity: 0, y: 10 },
    open: { opacity: 1, y: 0, transition: { duration: 0.3 } }
  };

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
              <li key={link.id}>
                <a
                  href={link.href}
                  className={`navbar__link ${activeSection === link.id ? 'active' : ''}`}
                >
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
        {!menuOpen && (
          <button
            className="navbar__mobile-toggle"
            onClick={() => setMenuOpen(true)}
            aria-label="Toggle menu"
          >
            <div className="hamburger">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>
        )}

        {/* Full Screen Minimal Mobile Menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              className="navbar__mobile-fullscreen"
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              <div className="navbar__mobile-header">
                <a href="#hero" className="navbar__logo" onClick={() => setMenuOpen(false)}>
                  <span className="navbar__logo-bracket">&lt;</span>
                  <span className="navbar__logo-text">ES</span>
                  <span className="navbar__logo-bracket">/&gt;</span>
                </a>
                <button className="navbar__mobile-close" onClick={() => setMenuOpen(false)}>
                  <X size={28} strokeWidth={1.5} />
                </button>
              </div>

              <div className="navbar__mobile-content">
                <ul className="navbar__mobile-list">
                  {navLinks.map((link) => {
                    const isActive = activeSection === link.id;
                    return (
                      <motion.li key={link.id} variants={itemVariants}>
                        <a
                          href={link.href}
                          className={`navbar__mobile-link ${isActive ? 'active' : ''}`}
                          onClick={() => setMenuOpen(false)}
                        >
                          <span className="navbar__mobile-label">{link.name}</span>
                          <span className="navbar__mobile-arrow">
                            {lang === 'ar' ? <ArrowLeft size={18} /> : <ArrowRight size={18} />}
                          </span>
                        </a>
                      </motion.li>
                    );
                  })}
                </ul>

                <motion.div className="navbar__mobile-footer" variants={itemVariants}>
                  <div className="navbar__mobile-controls">
                    {/* Theme Toggle Button */}
                    <button className="theme-toggle-modern" onClick={toggleTheme}>
                      {isDark ? '☀️ Light Mode' : '🌙 Dark Mode'}
                    </button>

                    {/* Language Toggle Button */}
                    <button className="theme-toggle-modern" onClick={toggleLang}>
                      {lang === 'ar' ? '🌐 العربية' : '🌐 English'}
                    </button>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}