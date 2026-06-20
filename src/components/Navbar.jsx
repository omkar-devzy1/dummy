import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useApp } from '../context/AppContext';

const navLinks = [
  { label: 'Shop', href: '#categories' },
  { label: 'Services', href: '#services' },
  { label: 'Blog', href: '#blog' },
  { label: 'About', href: '#why' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const { darkMode, setDarkMode, cartCount, setCartOpen, user, logout, setLoginOpen } = useApp();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-cream/90 dark:bg-forest-950/90 backdrop-blur-xl shadow-glass border-b border-forest-100/50 dark:border-forest-800/50'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <a href="#home" className="flex items-center gap-2.5 group">
              <div className="w-9 h-9 rounded-full bg-forest-700 flex items-center justify-center group-hover:bg-forest-600 transition-colors duration-300">
                <svg viewBox="0 0 32 32" className="w-5 h-5 fill-cream">
                  <path d="M16 4 C10 4 7 11 9 18 C11 25 16 28 16 28 C16 28 21 25 23 18 C25 11 22 4 16 4Z" opacity="0.9"/>
                  <line x1="16" y1="28" x2="16" y2="12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </div>
              <div>
                <span className={`font-serif text-xl font-semibold leading-none transition-colors duration-300 ${
                  scrolled ? 'text-forest-900 dark:text-cream' : 'text-cream drop-shadow-md'
                }`}>
                  Prakruti
                </span>
                <span className={`block text-[9px] tracking-[0.25em] uppercase font-sans font-medium leading-none mt-0.5 transition-colors duration-300 ${
                  scrolled ? 'text-sage-600 dark:text-sage-400' : 'text-white/80'
                }`}>
                  Plant Nursery
                </span>
              </div>
            </a>

            {/* Desktop links */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map(link => (
                <a
                  key={link.label}
                  href={link.href}
                  className={`font-sans text-sm font-medium transition-colors duration-300 relative group ${
                    scrolled
                      ? 'text-forest-700 dark:text-sage-300 hover:text-forest-500'
                      : 'text-white/90 hover:text-white drop-shadow-sm'
                  }`}
                >
                  {link.label}
                  <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-sage-400 rounded-full transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </div>

            {/* Actions */}
            <div className="flex items-center gap-2">
              {/* Dark mode toggle */}
              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 ${
                  scrolled
                    ? 'hover:bg-forest-100 dark:hover:bg-forest-800 text-forest-700 dark:text-sage-300'
                    : 'hover:bg-white/20 text-white'
                }`}
                aria-label="Toggle dark mode"
              >
                {darkMode ? (
                  <svg className="w-4.5 h-4.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                  </svg>
                ) : (
                  <svg className="w-4.5 h-4.5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                  </svg>
                )}
              </button>

              {/* Cart */}
              <button
                onClick={() => setCartOpen(true)}
                className={`w-9 h-9 rounded-full flex items-center justify-center relative transition-all duration-300 ${
                  scrolled
                    ? 'hover:bg-forest-100 dark:hover:bg-forest-800 text-forest-700 dark:text-sage-300'
                    : 'hover:bg-white/20 text-white'
                }`}
                aria-label="Cart"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-4.5 h-4.5 bg-forest-700 text-cream text-[9px] font-bold rounded-full flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </button>

              {/* Account */}
              {user ? (
                <div className="flex items-center gap-2">
                  <span
                    className={`flex w-9 h-9 rounded-full bg-forest-700 text-cream items-center justify-center text-xs font-semibold uppercase`}
                    title={user.email}
                  >
                    {user.name?.[0] || user.email?.[0] || 'U'}
                  </span>
                  <button
                    onClick={logout}
                    className={`hidden sm:inline-flex font-sans text-xs font-medium transition-colors duration-300 ${
                      scrolled ? 'text-forest-600 dark:text-sage-400 hover:text-forest-800' : 'text-white/80 hover:text-white'
                    }`}
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => setLoginOpen(true)}
                  className={`w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 ${
                    scrolled
                      ? 'hover:bg-forest-100 dark:hover:bg-forest-800 text-forest-700 dark:text-sage-300'
                      : 'hover:bg-white/20 text-white'
                  }`}
                  aria-label="Sign in"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </button>
              )}

              {/* CTA */}
              <a
                href="#contact"
                className="hidden md:inline-flex btn-primary text-xs px-5 py-2.5 ml-2"
              >
                Book Consultation
              </a>

              {/* Mobile menu */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className={`md:hidden w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 ${
                  scrolled
                    ? 'hover:bg-forest-100 dark:hover:bg-forest-800 text-forest-700 dark:text-sage-300'
                    : 'hover:bg-white/20 text-white'
                }`}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {mobileOpen
                    ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  }
                </svg>
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-16 left-0 right-0 z-40 glass dark:glass-dark border-b border-forest-100/50 dark:border-forest-800/50 py-4 md:hidden"
          >
            <div className="flex flex-col px-6 gap-1">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                  onClick={() => setMobileOpen(false)}
                  className="py-3 font-sans text-sm font-medium text-forest-700 dark:text-sage-300 border-b border-forest-100/50 dark:border-forest-800/50 last:border-0"
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                onClick={() => setMobileOpen(false)}
                className="btn-primary mt-3 justify-center text-xs"
              >
                Book Consultation
              </motion.a>
              {user ? (
                <button
                  onClick={() => { logout(); setMobileOpen(false); }}
                  className="py-3 mt-1 font-sans text-sm font-medium text-left text-forest-700 dark:text-sage-300"
                >
                  Logout ({user.name})
                </button>
              ) : (
                <button
                  onClick={() => { setLoginOpen(true); setMobileOpen(false); }}
                  className="py-3 mt-1 font-sans text-sm font-medium text-left text-forest-700 dark:text-sage-300"
                >
                  Sign In
                </button>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
