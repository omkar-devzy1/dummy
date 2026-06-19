import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { plantOfTheWeek } from '../data/plants';
import { useApp } from '../context/AppContext';

export default function PlantOfTheWeek() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { wishlist, toggleWishlist, addToCart } = useApp();
  const plant = plantOfTheWeek;
  const isWishlisted = wishlist.includes('potw');
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    addToCart({ id: 'potw', name: plant.name, price: plant.price, image: plant.image });
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <section className="py-24 bg-cream dark:bg-forest-950" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <span className="section-label">
            <span className="w-6 h-px bg-sage-500" />
            This Week's Highlight
            <span className="w-6 h-px bg-sage-500" />
          </span>
          <h2 className="section-title mt-3">
            Plant of the <em className="italic text-sage-600 dark:text-sage-400">Week</em>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-forest-800 to-forest-950 shadow-glass-lg"
        >
          {/* Background pattern */}
          <div className="absolute inset-0 bg-leaf-pattern opacity-10" />

          <div className="relative grid md:grid-cols-2 gap-0">
            {/* Image side */}
            <div className="relative aspect-[4/3] md:aspect-auto md:min-h-[500px] overflow-hidden">
              <img
                src={plant.image}
                alt={plant.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-forest-900/60 hidden md:block" />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-900/60 to-transparent md:hidden" />

              {/* Week badge */}
              <div className="absolute top-4 left-4">
                <div className="glass-green px-3 py-1.5 rounded-full">
                  <span className="font-sans text-xs font-semibold text-white tracking-wide">
                    🌟 Plant of the Week
                  </span>
                </div>
              </div>

              {/* Discount badge */}
              <div className="absolute top-4 right-4">
                <div className="w-14 h-14 rounded-full bg-earth-500 flex flex-col items-center justify-center text-white">
                  <span className="font-sans text-xs font-bold leading-none">25%</span>
                  <span className="font-sans text-[9px] leading-none mt-0.5">OFF</span>
                </div>
              </div>
            </div>

            {/* Content side */}
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <div className="text-sage-400 font-sans text-sm mb-2 font-medium italic">
                {plant.nickname}
              </div>
              <h3 className="font-serif text-4xl md:text-5xl text-white font-light mb-4">
                {plant.name}
              </h3>
              <p className="font-sans text-sm text-white/70 leading-relaxed mb-6">
                {plant.description}
              </p>

              {/* Care info */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                {[
                  { label: 'Care', value: plant.care, icon: '🌱' },
                  { label: 'Light', value: plant.light, icon: '☀️' },
                  { label: 'Water', value: plant.water, icon: '💧' },
                  { label: 'Size', value: plant.size, icon: '📏' },
                ].map(item => (
                  <div key={item.label} className="bg-white/10 rounded-xl p-3">
                    <div className="flex items-center gap-1.5 mb-1">
                      <span className="text-sm">{item.icon}</span>
                      <span className="font-sans text-[10px] text-white/50 uppercase tracking-wide">{item.label}</span>
                    </div>
                    <span className="font-sans text-sm text-white font-medium">{item.value}</span>
                  </div>
                ))}
              </div>

              {/* Benefits */}
              <div className="flex flex-wrap gap-2 mb-8">
                {plant.benefits.map(b => (
                  <span key={b} className="px-3 py-1 rounded-full bg-sage-600/30 text-sage-300 text-xs font-sans">
                    {b}
                  </span>
                ))}
              </div>

              {/* Price + CTA */}
              <div className="flex items-center justify-between">
                <div>
                  <div className="flex items-baseline gap-2">
                    <span className="font-serif text-3xl text-white">₹{plant.price}</span>
                    <span className="font-sans text-sm text-white/40 line-through">₹{plant.originalPrice}</span>
                  </div>
                  <div className="font-sans text-xs text-sage-400 mt-0.5">Free delivery included</div>
                </div>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => toggleWishlist('potw')}
                    className={`w-11 h-11 rounded-full flex items-center justify-center transition-all duration-300 ${
                      isWishlisted
                        ? 'bg-red-500/20 text-red-400'
                        : 'bg-white/10 text-white/60 hover:bg-white/20'
                    }`}
                  >
                    <svg className="w-5 h-5" fill={isWishlisted ? 'currentColor' : 'none'} stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </button>
                  <motion.button
                    whileTap={{ scale: 0.97 }}
                    onClick={handleAddToCart}
                    className="btn-primary bg-sage-500 hover:bg-sage-600 text-sm px-6 py-3"
                  >
                    {added ? '✓ Added!' : 'Add to Cart'}
                  </motion.button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
