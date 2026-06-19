import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { landscapingServices } from '../data/plants';

export default function LandscapingServices() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="services" className="py-24 bg-cream dark:bg-forest-950 relative overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]">
        <div className="absolute top-0 left-0 w-full h-full"
          style={{
            backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 39px, #1a5827 39px, #1a5827 40px), repeating-linear-gradient(90deg, transparent, transparent 39px, #1a5827 39px, #1a5827 40px)',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="grid md:grid-cols-2 gap-12 items-end mb-14"
        >
          <div>
            <span className="section-label">
              <span className="w-6 h-px bg-sage-500" />
              Professional Services
            </span>
            <h2 className="section-title mt-3">
              Landscaping &<br />
              <em className="italic text-sage-600 dark:text-sage-400">Green Design</em>
            </h2>
          </div>
          <p className="font-sans text-sm text-forest-600/75 dark:text-sage-300/80 leading-relaxed">
            From intimate balcony transformations to large commercial installations — our expert team designs and builds living green spaces that breathe life into architecture.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {landscapingServices.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className={`group relative rounded-2xl overflow-hidden cursor-pointer ${i === 0 ? 'md:col-span-2 lg:col-span-1' : ''}`}
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-900/85 via-forest-900/30 to-transparent" />

                {/* Content overlay */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <div className="text-3xl mb-2">{service.icon}</div>
                  <h3 className="font-serif text-xl text-white font-medium mb-1">
                    {service.title}
                  </h3>
                  <p className="font-sans text-xs text-white/65 leading-relaxed mb-4 max-h-0 overflow-hidden group-hover:max-h-20 transition-all duration-500">
                    {service.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="font-sans text-sm text-sage-300 font-medium">
                      {service.price}
                    </span>
                    <a
                      href="#contact"
                      className="flex items-center gap-1.5 text-xs font-sans font-medium text-white bg-white/20 hover:bg-forest-700 px-3 py-1.5 rounded-full transition-all duration-300 backdrop-blur-sm"
                    >
                      Get Quote
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.7 }}
          className="mt-12 rounded-2xl bg-gradient-to-r from-forest-800 to-forest-700 p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div>
            <h3 className="font-serif text-2xl text-white mb-2">
              Ready to transform your space?
            </h3>
            <p className="font-sans text-sm text-white/70">
              Free consultation for projects above ₹20,000. Our experts visit, plan, and deliver.
            </p>
          </div>
          <a href="#contact" className="btn-ghost whitespace-nowrap text-sm">
            Book Free Consultation
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
