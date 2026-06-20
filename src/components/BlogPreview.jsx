import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { blogPosts } from '../data/plants';

export default function BlogPreview() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="blog" className="py-24 bg-cream dark:bg-forest-950" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14"
        >
          <div>
            <span className="section-label">
              <span className="w-6 h-px bg-sage-500" />
              Plant Knowledge
            </span>
            <h2 className="section-title mt-3">
              Care Tips &
              <br />
              <em className="italic text-sage-600 dark:text-sage-400">Green Guides</em>
            </h2>
          </div>
          <a href="#blog" className="btn-secondary text-sm self-start md:self-auto">
            View All Articles
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {blogPosts.map((post, i) => (
            <motion.a
              key={post.id}
              href="#blog"
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="group block bg-white dark:bg-forest-800/80 rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-500 hover:-translate-y-2 border border-forest-50 dark:border-forest-700/50"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${post.color} to-transparent`} />
                <div className="absolute top-3 left-3">
                  <span className="bg-white/90 dark:bg-forest-800/90 text-forest-700 dark:text-sage-300 text-[10px] font-sans font-semibold px-2.5 py-1 rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="font-serif text-base font-semibold text-forest-900 dark:text-cream leading-snug mb-2 group-hover:text-forest-600 dark:group-hover:text-sage-300 transition-colors">
                  {post.title}
                </h3>
                <p className="font-sans text-xs text-forest-500/80 dark:text-sage-400/80 leading-relaxed mb-4">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <span className="font-sans text-[10px] text-forest-400 dark:text-sage-500">
                    {post.readTime}
                  </span>
                  <span className="flex items-center gap-1 text-[11px] font-sans font-medium text-forest-600 dark:text-sage-400 group-hover:gap-2 transition-all">
                    Read more
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
