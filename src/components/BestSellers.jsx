import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { bestSellers } from '../data/plants';
import { useApp } from '../context/AppContext';

function StarRating({ rating }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1,2,3,4,5].map(i => (
        <svg key={i} className={`w-3 h-3 ${i <= Math.floor(rating) ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function PlantCard({ plant, index, inView }) {
  const { wishlist, toggleWishlist, addToCart } = useApp();
  const isWishlisted = wishlist.includes(plant.id);
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    addToCart({ id: plant.id, name: plant.name, price: plant.price, image: plant.image });
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="group bg-white dark:bg-forest-800/80 rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-500 hover:-translate-y-2 border border-forest-50/80 dark:border-forest-700/50"
    >
      {/* Image */}
      <div className="relative overflow-hidden aspect-square">
        <img
          src={plant.image}
          alt={plant.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
        />

        {/* Tag */}
        <div className={`absolute top-3 left-3 ${plant.tagColor} text-white text-[10px] font-sans font-semibold px-2.5 py-1 rounded-full`}>
          {plant.tag}
        </div>

        {/* Wishlist */}
        <button
          onClick={() => toggleWishlist(plant.id)}
          className={`absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center backdrop-blur-sm transition-all duration-300 ${
            isWishlisted
              ? 'bg-red-50 text-red-500'
              : 'bg-white/80 text-forest-400 hover:text-red-400'
          }`}
        >
          <svg className="w-4 h-4" fill={isWishlisted ? 'currentColor' : 'none'} stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        </button>

        {/* Benefits */}
        <div className="absolute bottom-0 left-0 right-0 p-3 flex gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">
          {plant.benefits.map(b => (
            <span key={b} className="bg-white/90 text-forest-700 text-[9px] font-sans font-semibold px-2 py-0.5 rounded-full">
              {b}
            </span>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <div className="flex items-center justify-between mb-1">
          <h3 className="font-serif text-base font-semibold text-forest-900 dark:text-cream leading-tight">
            {plant.name}
          </h3>
        </div>

        <div className="flex items-center gap-2 mb-3">
          <StarRating rating={plant.rating} />
          <span className="font-sans text-xs text-forest-500 dark:text-sage-400">
            {plant.rating} ({plant.reviews})
          </span>
        </div>

        <div className="flex items-center gap-1.5 mb-1">
          <div className={`w-1.5 h-1.5 rounded-full bg-forest-400`} />
          <span className={`font-sans text-xs ${plant.careColor} font-medium`}>
            {plant.care} care
          </span>
        </div>

        <div className="flex items-center justify-between mt-3">
          <div className="flex items-baseline gap-1.5">
            <span className="font-serif text-xl font-semibold text-forest-900 dark:text-cream">
              ₹{plant.price}
            </span>
            {plant.originalPrice && (
              <span className="font-sans text-xs text-forest-400 dark:text-sage-500 line-through">
                ₹{plant.originalPrice}
              </span>
            )}
          </div>
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={handleAdd}
            className={`px-4 py-2 rounded-full text-xs font-sans font-semibold transition-all duration-300 ${
              added
                ? 'bg-forest-100 text-forest-700 dark:bg-forest-700 dark:text-sage-300'
                : 'bg-forest-700 text-cream hover:bg-forest-800'
            }`}
          >
            {added ? '✓ Added' : 'Add to Cart'}
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}

export default function BestSellers() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <section className="py-24 bg-parchment dark:bg-forest-900" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <span className="section-label">
            <span className="w-6 h-px bg-sage-500" />
            Customer Favourites
            <span className="w-6 h-px bg-sage-500" />
          </span>
          <h2 className="section-title mt-3">
            Best <em className="italic text-sage-600 dark:text-sage-400">Selling</em> Plants
          </h2>
          <p className="mt-4 text-sm text-forest-600/70 dark:text-sage-400 max-w-md mx-auto font-sans">
            Our most-loved plants, chosen by thousands of happy customers.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 md:gap-6">
          {bestSellers.map((plant, i) => (
            <PlantCard key={plant.id} plant={plant} index={i} inView={inView} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-12"
        >
          <a href="#" className="btn-primary">
            View All Plants
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
