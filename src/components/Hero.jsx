import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const floatingLeaves = [
  { top: '15%', left: '8%', size: 60, delay: 0, rotate: -20 },
  { top: '70%', left: '5%', size: 40, delay: 1.5, rotate: 15 },
  { top: '30%', right: '10%', size: 80, delay: 0.8, rotate: 30 },
  { top: '75%', right: '7%', size: 50, delay: 2, rotate: -10 },
  { top: '50%', left: '3%', size: 35, delay: 3, rotate: 45 },
];

function LeafSVG({ size, color = '#4fa85d', opacity = 0.6 }) {
  return (
    <svg width={size} height={size * 1.3} viewBox="0 0 50 65" fill="none">
      <path
        d="M25 2 C15 2 5 15 5 32 C5 49 15 62 25 62 C35 62 45 49 45 32 C45 15 35 2 25 2Z"
        fill={color}
        fillOpacity={opacity}
      />
      <path
        d="M25 62 C25 62 25 30 25 10"
        stroke={color}
        strokeOpacity={opacity * 0.8}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path d="M25 35 C20 28 15 25 10 26" stroke={color} strokeOpacity={opacity * 0.5} strokeWidth="1" strokeLinecap="round"/>
      <path d="M25 42 C30 35 35 32 40 33" stroke={color} strokeOpacity={opacity * 0.5} strokeWidth="1" strokeLinecap="round"/>
    </svg>
  );
}

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15, delayChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=1920&q=90"
          alt="Lush green nursery"
          className="w-full h-full object-cover"
        />
        {/* Layered overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-forest-950/85 via-forest-900/70 to-forest-800/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-950/60 via-transparent to-transparent" />
        {/* Subtle texture */}
        <div className="absolute inset-0 bg-leaf-pattern opacity-20" />
      </div>

      {/* Floating decorative leaves */}
      {floatingLeaves.map((leaf, i) => (
        <motion.div
          key={i}
          className="absolute pointer-events-none hidden md:block"
          style={{ top: leaf.top, left: leaf.left, right: leaf.right }}
          animate={{
            y: [0, -18, 0],
            rotate: [leaf.rotate, leaf.rotate + 5, leaf.rotate],
            opacity: [0.5, 0.7, 0.5],
          }}
          transition={{
            duration: 5 + i,
            repeat: Infinity,
            delay: leaf.delay,
            ease: 'easeInOut',
          }}
        >
          <LeafSVG size={leaf.size} color="#7d9b76" opacity={0.4} />
        </motion.div>
      ))}

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 pt-40">
        <div className="max-w-3xl">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Label */}
            <motion.div variants={itemVariants} className="mb-6">
              <span className="inline-flex items-center gap-2 text-xs font-sans font-semibold tracking-[0.22em] uppercase text-sage-300">
                <span className="w-8 h-px bg-sage-400" />
                Premium Plant Nursery Since 2015
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={itemVariants}
              className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light text-white leading-[1.05] mb-6"
            >
              Bring Nature
              <br />
              <em className="italic font-light text-sage-300">Closer</em> to
              <br />
              Your Life
            </motion.h1>

            {/* Subheading */}
            <motion.p
              variants={itemVariants}
              className="font-sans text-base md:text-lg text-white/75 leading-relaxed mb-10 max-w-lg"
            >
              Premium plants, elegant pots, and expert greenery solutions —
              curated for homes, offices, and spaces that deserve to breathe.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
              <a href="#categories" className="btn-primary text-sm px-8 py-4">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                Shop Plants
              </a>
              <a href="#contact" className="btn-ghost text-sm px-8 py-4">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Book Consultation
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-8 mt-14 pt-10 border-t border-white/10"
            >
              {[
                { value: '500+', label: 'Plant Varieties' },
                { value: '10,000+', label: 'Happy Customers' },
                { value: '9 Years', label: 'Of Excellence' },
                { value: '4.9★', label: 'Average Rating' },
              ].map(stat => (
                <div key={stat.label}>
                  <div className="font-serif text-2xl font-semibold text-white">{stat.value}</div>
                  <div className="font-sans text-xs text-white/55 tracking-wide mt-0.5">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <span className="text-xs font-sans tracking-[0.2em] uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </motion.div>
      </motion.div>

      {/* Bottom curve */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" preserveAspectRatio="none" className="w-full h-12 fill-cream dark:fill-forest-950">
          <path d="M0 60 C360 20 1080 20 1440 60 L1440 60 L0 60Z" />
        </svg>
      </div>
    </section>
  );
}
