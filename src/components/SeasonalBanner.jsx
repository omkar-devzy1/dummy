import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function SeasonalBanner() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: 'auto', opacity: 1 }}
        exit={{ height: 0, opacity: 0 }}
        transition={{ duration: 0.4 }}
        className="relative z-40 bg-gradient-to-r from-forest-800 via-forest-700 to-sage-700 overflow-hidden"
      >
        {/* Shimmer */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer bg-[length:200%_100%]" />

        <div className="relative max-w-7xl mx-auto px-4 py-2.5 flex items-center justify-between">
          <div className="flex-1 flex items-center justify-center gap-3 text-cream text-xs sm:text-sm font-sans">
            <span className="text-base">🌿</span>
            <span className="font-medium">
              Monsoon Sale is Live!
            </span>
            <span className="hidden sm:inline text-white/70">—</span>
            <span className="hidden sm:inline text-white/90">
              Up to <strong className="text-white">40% off</strong> on outdoor plants + free delivery on orders above ₹999
            </span>
            <a
              href="#categories"
              className="ml-2 text-xs bg-white/20 hover:bg-white/30 px-3 py-1 rounded-full transition-colors duration-200 font-medium whitespace-nowrap"
            >
              Shop Now →
            </a>
          </div>
          <button
            onClick={() => setVisible(false)}
            className="ml-4 text-white/60 hover:text-white transition-colors"
            aria-label="Close banner"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
