import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { site } from '../config/site';
import { api } from '../api';

const footerLinks = {
  Shop: [
    { label: 'Indoor Plants', href: '#categories' },
    { label: 'Outdoor Plants', href: '#categories' },
    { label: 'Succulents', href: '#categories' },
    { label: 'Bonsai', href: '#categories' },
    { label: 'Flowering Plants', href: '#categories' },
    { label: 'Pots & Décor', href: '#categories' },
  ],
  Services: [
    { label: 'Balcony Garden', href: '#services' },
    { label: 'Terrace Garden', href: '#services' },
    { label: 'Office Greenery', href: '#services' },
    { label: 'Café Decoration', href: '#services' },
    { label: 'Vertical Gardens', href: '#services' },
  ],
  Help: [
    { label: 'Track Order', href: '#tracking' },
    { label: 'Shipping Policy', href: '#contact' },
    { label: 'Return Policy', href: '#contact' },
    { label: 'Plant Care FAQs', href: '#blog' },
    { label: 'Contact Support', href: '#contact' },
  ],
  Company: [
    { label: 'About Prakruti', href: '#why' },
    { label: 'Our Story', href: '#why' },
    { label: 'Blog', href: '#blog' },
    { label: 'Careers', href: '#contact' },
    { label: 'Press', href: '#contact' },
  ],
};

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [error, setError] = useState('');

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!email) return;
    setError('');
    try {
      await api.newsletter.subscribe(email);
      setSubscribed(true);
      setEmail('');
    } catch (err) {
      setError(err.message || 'Could not subscribe. Please try again.');
    }
  };

  return (
    <footer className="bg-forest-950 text-cream relative overflow-hidden">
      {/* Top wave */}
      <div className="w-full overflow-hidden leading-none">
        <svg viewBox="0 0 1440 60" fill="none" preserveAspectRatio="none" className="w-full h-12 fill-cream dark:fill-forest-900">
          <path d="M0 0 C360 60 1080 60 1440 0 L1440 0 L0 0Z" />
        </svg>
      </div>

      {/* Background pattern */}
      <div className="absolute inset-0 bg-leaf-pattern opacity-[0.04]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        {/* Top section */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 pb-12 border-b border-white/10">
          {/* Brand */}
          <div className="col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-full bg-forest-600 flex items-center justify-center">
                <svg viewBox="0 0 32 32" className="w-5 h-5 fill-cream">
                  <path d="M16 4 C10 4 7 11 9 18 C11 25 16 28 16 28 C16 28 21 25 23 18 C25 11 22 4 16 4Z" opacity="0.9"/>
                  <line x1="16" y1="28" x2="16" y2="12" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </div>
              <div>
                <span className="font-serif text-xl font-semibold">Prakruti</span>
                <span className="block text-[9px] tracking-[0.25em] uppercase font-sans text-white/40 mt-0.5">Plant Nursery</span>
              </div>
            </div>
            <p className="font-sans text-sm text-white/50 leading-relaxed mb-6 max-w-xs">
              Bringing nature closer to every home, office, and space since 2015. Premium plants, expert care.
            </p>

            {/* Social */}
            <div className="flex gap-3">
              {[
                { name: 'Instagram', url: site.social.instagram, path: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z' },
                { name: 'Facebook', url: site.social.facebook, path: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z' },
                { name: 'YouTube', url: site.social.youtube, path: 'M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z' },
              ].filter(social => social.url && social.url !== '#').map(social => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-forest-600 flex items-center justify-center transition-all duration-300 group"
                  aria-label={social.name}
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d={social.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-sans text-xs font-semibold text-white uppercase tracking-[0.18em] mb-4">
                {category}
              </h4>
              <ul className="space-y-2.5">
                {links.map(link => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="font-sans text-sm text-white/45 hover:text-white/90 transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <div className="py-8 border-b border-white/10">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h4 className="font-serif text-lg text-white mb-1">Stay in the green loop</h4>
              <p className="font-sans text-sm text-white/50">
                Weekly plant care tips, seasonal offers, and nursery updates.
              </p>
            </div>
            {!subscribed ? (
              <div className="w-full md:w-auto">
                <form onSubmit={handleSubscribe} className="flex gap-2 w-full md:w-auto">
                  <input
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    className="flex-1 md:w-64 px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white text-sm font-sans focus:outline-none focus:border-sage-400 placeholder-white/30"
                  />
                  <button type="submit" className="btn-primary text-xs px-5 py-3 whitespace-nowrap bg-sage-600 hover:bg-sage-700">
                    Subscribe
                  </button>
                </form>
                {error && <p className="font-sans text-xs text-red-300 mt-2">{error}</p>}
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex items-center gap-2 text-sage-300 font-sans text-sm"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                You're subscribed! 🌿
              </motion.div>
            )}
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-sans text-xs text-white/35">
            © 2026 Prakruti Plant Nursery. All rights reserved.
          </p>
          <div className="flex items-center gap-1 font-sans text-xs text-white/35">
            Made with
            <span className="text-forest-400 mx-0.5">🌿</span>
            in Pune, India
          </div>
          <div className="flex gap-4">
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map(link => (
              <a key={link} href="#contact" className="font-sans text-xs text-white/35 hover:text-white/60 transition-colors">
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
