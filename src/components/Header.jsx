import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const base = import.meta.env.BASE_URL;
  const navLinks = [
    { href: `${base}#about`, label: 'About' },
    { href: `${base}#services`, label: 'Services' },
    { href: `${base}#case-studies`, label: 'Case Studies' },
    { href: `${base}#team`, label: 'Team' },
    { href: `${base}#process`, label: 'Process' },
    { href: `${base}#contact`, label: 'Contact' },
  ];

  return (
    <header className="header">
      <div className="header__inner">
        <Link to="/" className="header__logo">
          <img src={`${import.meta.env.BASE_URL}logo.svg`} alt="Blindside" />
        </Link>

        <nav className="header__nav">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="header__link"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <Link
          to="/#contact"
          className="header__cta"
          onClick={() => setMobileOpen(false)}
        >
          Start a Project
        </Link>

        <button
          className="header__menu-btn"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span className={mobileOpen ? 'open' : ''} />
          <span className={mobileOpen ? 'open' : ''} />
          <span className={mobileOpen ? 'open' : ''} />
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="header__mobile"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="header__mobile-link"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <Link
              to="/#contact"
              className="header__mobile-cta"
              onClick={() => setMobileOpen(false)}
            >
              Start a Project
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
