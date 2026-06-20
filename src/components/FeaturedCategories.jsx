import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { categories as fallbackCategories } from '../data/plants';
import { api } from '../api';

export default function FeaturedCategories() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const [categories, setCategories] = useState(fallbackCategories);

  useEffect(() => {
    let active = true;
    api.categories.list()
      .then(({ categories }) => { if (active && categories?.length) setCategories(categories); })
      .catch(() => { /* keep fallback data */ });
    return () => { active = false; };
  }, []);

  return (
    <section id="categories" className="py-24 bg-cream dark:bg-forest-950" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <span className="section-label">
            <span className="w-6 h-px bg-sage-500" />
            Browse Collection
            <span className="w-6 h-px bg-sage-500" />
          </span>
          <h2 className="section-title mt-3">
            Shop by <em className="italic font-light text-sage-600 dark:text-sage-400">Category</em>
          </h2>
          <p className="mt-4 text-sm text-forest-600/70 dark:text-sage-400 max-w-md mx-auto font-sans">
            From lush tropicals to architectural succulents — find the perfect plant for every space.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((cat, i) => (
            <motion.a
              key={cat.id}
              href="#bestsellers"
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="group relative overflow-hidden rounded-2xl aspect-[4/3] block cursor-pointer"
            >
              {/* Image */}
              <img
                src={cat.image}
                alt={cat.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-t ${cat.color} to-transparent transition-opacity duration-300 group-hover:opacity-90`} />

              {/* Content */}
              <div className="absolute inset-0 p-5 flex flex-col justify-end">
                <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="text-2xl mb-2">{cat.icon}</div>
                  <h3 className="font-serif text-lg md:text-xl text-white font-medium leading-tight">
                    {cat.name}
                  </h3>
                  <p className="text-white/70 text-xs font-sans mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {cat.description}
                  </p>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-white/60 text-xs font-sans">{cat.count}</span>
                    <span className="text-white text-xs font-sans flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0">
                      Explore
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>

              {/* Corner accent */}
              <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 scale-75 group-hover:scale-100">
                <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
              </div>
            </motion.a>
          ))}
        </div>

        {/* View all */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.7 }}
          className="text-center mt-10"
        >
          <a href="#bestsellers" className="btn-secondary text-sm">
            View All Categories
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
