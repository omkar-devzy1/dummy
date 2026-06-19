import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { testimonials } from '../data/plants';

export default function Testimonials() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const [active, setActive] = useState(0);

  const next = () => setActive((active + 1) % testimonials.length);
  const prev = () => setActive((active - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-24 bg-parchment dark:bg-forest-900 relative overflow-hidden" ref={ref}>
      {/* Big quote decoration */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 text-[200px] font-serif text-forest-200/20 dark:text-forest-700/20 leading-none select-none pointer-events-none">
        "
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <span className="section-label">
            <span className="w-6 h-px bg-sage-500" />
            Customer Stories
            <span className="w-6 h-px bg-sage-500" />
          </span>
          <h2 className="section-title mt-3">
            What Our <em className="italic text-sage-600 dark:text-sage-400">Customers</em> Say
          </h2>
        </motion.div>

        {/* Desktop: all cards */}
        <div className="hidden lg:grid grid-cols-4 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="bg-white dark:bg-forest-800/80 rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 border border-forest-50 dark:border-forest-700/50"
            >
              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {[...Array(t.rating)].map((_, i) => (
                  <svg key={i} className="w-3.5 h-3.5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <p className="font-sans text-sm text-forest-700 dark:text-sage-300 leading-relaxed mb-6 italic">
                "{t.text}"
              </p>

              <div className="flex items-center gap-3 pt-4 border-t border-forest-50 dark:border-forest-700">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <div className="font-sans text-sm font-semibold text-forest-900 dark:text-cream">{t.name}</div>
                  <div className="font-sans text-xs text-forest-400 dark:text-sage-500">{t.role} · {t.location}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile: carousel */}
        <div className="lg:hidden relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.4 }}
              className="bg-white dark:bg-forest-800/80 rounded-2xl p-6 shadow-card border border-forest-50 dark:border-forest-700/50 mx-4"
            >
              <div className="flex gap-0.5 mb-4">
                {[...Array(testimonials[active].rating)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="font-sans text-sm text-forest-700 dark:text-sage-300 leading-relaxed mb-6 italic">
                "{testimonials[active].text}"
              </p>
              <div className="flex items-center gap-3">
                <img src={testimonials[active].avatar} alt={testimonials[active].name} className="w-10 h-10 rounded-full object-cover" />
                <div>
                  <div className="font-sans text-sm font-semibold text-forest-900 dark:text-cream">{testimonials[active].name}</div>
                  <div className="font-sans text-xs text-forest-400">{testimonials[active].role} · {testimonials[active].location}</div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex items-center justify-center gap-4 mt-6">
            <button onClick={prev} className="w-9 h-9 rounded-full border border-forest-200 dark:border-forest-700 flex items-center justify-center text-forest-600 dark:text-sage-400 hover:bg-forest-50 dark:hover:bg-forest-800 transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <div className="flex gap-1.5">
              {testimonials.map((_, i) => (
                <button key={i} onClick={() => setActive(i)} className={`h-1.5 rounded-full transition-all duration-300 ${i === active ? 'bg-forest-600 w-6' : 'bg-forest-200 w-3'}`} />
              ))}
            </div>
            <button onClick={next} className="w-9 h-9 rounded-full border border-forest-200 dark:border-forest-700 flex items-center justify-center text-forest-600 dark:text-sage-400 hover:bg-forest-50 dark:hover:bg-forest-800 transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
