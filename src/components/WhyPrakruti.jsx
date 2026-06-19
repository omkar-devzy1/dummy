import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const features = [
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
    title: 'Healthy Premium Plants',
    description: 'Every plant is nursery-grown, inspected, and guaranteed healthy. No compromises on quality.',
    color: 'bg-forest-50 dark:bg-forest-900/50 text-forest-700 dark:text-forest-300',
    accent: 'border-forest-200 dark:border-forest-700',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    title: 'Expert Guidance',
    description: 'Our botanists provide personalised care advice, planting tips, and ongoing support.',
    color: 'bg-sage-50 dark:bg-sage-900/30 text-sage-700 dark:text-sage-300',
    accent: 'border-sage-200 dark:border-sage-700',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Affordable Pricing',
    description: 'Transparent, competitive pricing with no hidden charges. Premium quality at accessible rates.',
    color: 'bg-earth-50 dark:bg-earth-900/30 text-earth-700 dark:text-earth-300',
    accent: 'border-earth-200 dark:border-earth-700',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
      </svg>
    ),
    title: 'Safe Home Delivery',
    description: 'Plants delivered in custom protective packaging — arriving healthy, not stressed.',
    color: 'bg-forest-50 dark:bg-forest-900/50 text-forest-700 dark:text-forest-300',
    accent: 'border-forest-200 dark:border-forest-700',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Eco-Friendly Practices',
    description: 'Organic growing methods, biodegradable packaging, and sustainable nursery operations.',
    color: 'bg-sage-50 dark:bg-sage-900/30 text-sage-700 dark:text-sage-300',
    accent: 'border-sage-200 dark:border-sage-700',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    title: 'Custom Landscaping',
    description: 'End-to-end landscaping solutions from concept design to installation and maintenance.',
    color: 'bg-earth-50 dark:bg-earth-900/30 text-earth-700 dark:text-earth-300',
    accent: 'border-earth-200 dark:border-earth-700',
  },
];

export default function WhyPrakruti() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="why" className="py-24 bg-parchment dark:bg-forest-900 relative overflow-hidden" ref={ref}>
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-5 dark:opacity-10">
        <svg viewBox="0 0 400 600" fill="none" className="w-full h-full">
          <path d="M200 50 C100 100 50 200 80 350 C110 500 200 560 200 560 C200 560 290 500 320 350 C350 200 300 100 200 50Z" fill="#1a5827"/>
          <path d="M150 200 C120 190 100 200 90 220" stroke="#7d9b76" strokeWidth="3" strokeLinecap="round"/>
          <path d="M250 280 C280 270 300 280 310 300" stroke="#7d9b76" strokeWidth="3" strokeLinecap="round"/>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: image + badge */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden aspect-[4/5]">
              <img
                src="https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=800&q=80"
                alt="Prakruti nursery"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-900/40 to-transparent" />
            </div>

            {/* Floating badges */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="absolute -bottom-6 -right-6 bg-white dark:bg-forest-800 rounded-2xl shadow-card p-4 flex items-center gap-3 max-w-[180px]"
            >
              <div className="w-12 h-12 rounded-xl bg-forest-100 dark:bg-forest-700 flex items-center justify-center text-2xl flex-shrink-0">
                🌿
              </div>
              <div>
                <div className="font-sans text-xs text-forest-500 dark:text-sage-400">Plants Delivered</div>
                <div className="font-serif text-xl font-semibold text-forest-900 dark:text-cream">50,000+</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.55, duration: 0.6 }}
              className="absolute -top-5 -left-5 bg-forest-700 rounded-2xl shadow-card-hover p-4 text-cream"
            >
              <div className="font-sans text-xs opacity-75">Customer Rating</div>
              <div className="font-serif text-2xl font-semibold flex items-baseline gap-1">
                4.9
                <span className="text-sm text-yellow-300">★</span>
              </div>
              <div className="font-sans text-xs opacity-60 mt-0.5">10,000+ reviews</div>
            </motion.div>
          </motion.div>

          {/* Right: content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="section-label">
              <span className="w-6 h-px bg-sage-500" />
              Why Choose Us
            </span>
            <h2 className="section-title mt-3 mb-4">
              The Prakruti
              <br />
              <em className="italic text-sage-600 dark:text-sage-400">Difference</em>
            </h2>
            <p className="font-sans text-sm text-forest-600/75 dark:text-sage-300/80 leading-relaxed mb-10 max-w-md">
              We're not just a nursery. We're your green lifestyle partner — from choosing the right plant to ensuring it thrives for years.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature, i) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.2 + i * 0.07, duration: 0.5 }}
                  className={`rounded-xl p-4 border ${feature.accent} bg-white dark:bg-forest-800/50 shadow-sm hover:shadow-card transition-all duration-300 group`}
                >
                  <div className={`w-10 h-10 rounded-lg ${feature.color} flex items-center justify-center mb-3`}>
                    {feature.icon}
                  </div>
                  <h3 className="font-serif text-sm font-semibold text-forest-800 dark:text-cream mb-1">
                    {feature.title}
                  </h3>
                  <p className="font-sans text-xs text-forest-600/70 dark:text-sage-400/80 leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
