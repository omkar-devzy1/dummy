import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const trackingSteps = [
  { id: 1, label: 'Order Confirmed', icon: '✅', time: 'May 18, 9:00 AM', done: true },
  { id: 2, label: 'Plants Prepared', icon: '🌿', time: 'May 18, 11:30 AM', done: true },
  { id: 3, label: 'Out for Delivery', icon: '🚚', time: 'May 18, 2:00 PM', done: true, active: true },
  { id: 4, label: 'Delivered', icon: '🏡', time: 'Expected by 6:00 PM', done: false },
];

export default function DeliveryTracking() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const [orderId, setOrderId] = useState('PRK-2024-08741');
  const [tracked, setTracked] = useState(true);

  return (
    <section className="py-24 bg-parchment dark:bg-forest-900" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <span className="section-label">
              <span className="w-6 h-px bg-sage-500" />
              Live Tracking
            </span>
            <h2 className="section-title mt-3 mb-4">
              Track Your
              <br />
              <em className="italic text-sage-600 dark:text-sage-400">Green Delivery</em>
            </h2>
            <p className="font-sans text-sm text-forest-600/75 dark:text-sage-300/80 leading-relaxed mb-8">
              Every plant is carefully packaged and tracked from our nursery to your doorstep. Real-time updates so you're always in the know.
            </p>

            <div className="space-y-3">
              {[
                { icon: '📦', text: 'Custom protective packaging for every plant' },
                { icon: '🌡️', text: 'Temperature-controlled transport for delicate species' },
                { icon: '📱', text: 'SMS & WhatsApp delivery notifications' },
                { icon: '🔄', text: '100% replacement guarantee if plants arrive damaged' },
              ].map((item, i) => (
                <motion.div
                  key={item.text}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.2 + i * 0.07 }}
                  className="flex items-start gap-3"
                >
                  <span className="text-lg">{item.icon}</span>
                  <span className="font-sans text-sm text-forest-700 dark:text-sage-300">{item.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: tracker UI */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="bg-white dark:bg-forest-800/80 rounded-3xl shadow-card-hover p-8 border border-forest-50 dark:border-forest-700/50"
          >
            {/* Search */}
            <div className="mb-8">
              <label className="block font-sans text-xs font-semibold text-forest-500 dark:text-sage-400 uppercase tracking-wide mb-2">
                Track your order
              </label>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={orderId}
                  onChange={e => setOrderId(e.target.value)}
                  placeholder="Enter Order ID (e.g. PRK-2024-XXXXX)"
                  className="flex-1 px-4 py-3 rounded-xl border border-forest-100 dark:border-forest-600 bg-parchment dark:bg-forest-700 text-forest-900 dark:text-cream text-sm font-sans focus:outline-none focus:ring-2 focus:ring-forest-400 placeholder-forest-300"
                />
                <motion.button
                  whileTap={{ scale: 0.97 }}
                  onClick={() => setTracked(true)}
                  className="btn-primary text-xs px-5 py-3 whitespace-nowrap"
                >
                  Track
                </motion.button>
              </div>
            </div>

            {/* Result */}
            {tracked && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                {/* Order info */}
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-forest-50 dark:border-forest-700">
                  <div>
                    <div className="font-sans text-xs text-forest-400 dark:text-sage-500">Order ID</div>
                    <div className="font-sans text-sm font-semibold text-forest-900 dark:text-cream">{orderId}</div>
                  </div>
                  <div className="px-3 py-1.5 rounded-full bg-forest-50 dark:bg-forest-700 text-forest-700 dark:text-sage-300 text-xs font-sans font-semibold flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-forest-500 animate-pulse" />
                    On the way
                  </div>
                </div>

                {/* Delivery estimate */}
                <div className="bg-forest-50 dark:bg-forest-700/50 rounded-xl p-4 mb-6 flex items-center gap-3">
                  <div className="text-2xl">🚚</div>
                  <div>
                    <div className="font-sans text-xs text-forest-500 dark:text-sage-400">Estimated Delivery</div>
                    <div className="font-sans text-sm font-semibold text-forest-900 dark:text-cream">Today by 6:00 PM</div>
                  </div>
                  <div className="ml-auto text-xs text-forest-400 dark:text-sage-500 text-right">
                    <div>3 plants</div>
                    <div className="font-medium text-forest-700 dark:text-sage-300">₹1,297</div>
                  </div>
                </div>

                {/* Steps */}
                <div className="relative">
                  {/* Vertical line */}
                  <div className="absolute left-4 top-4 bottom-4 w-px bg-forest-100 dark:bg-forest-700" />

                  <div className="space-y-5">
                    {trackingSteps.map((step, i) => (
                      <motion.div
                        key={step.id}
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="flex items-start gap-4 relative"
                      >
                        {/* Icon */}
                        <div className={`relative z-10 w-8 h-8 rounded-full flex items-center justify-center text-sm flex-shrink-0 transition-all duration-300 ${
                          step.active
                            ? 'bg-forest-700 shadow-lg ring-4 ring-forest-200 dark:ring-forest-600'
                            : step.done
                            ? 'bg-forest-500'
                            : 'bg-forest-100 dark:bg-forest-700'
                        }`}>
                          {step.icon}
                        </div>

                        <div className="flex-1 pt-0.5">
                          <div className={`font-sans text-sm font-medium ${
                            step.active ? 'text-forest-800 dark:text-cream' : step.done ? 'text-forest-700 dark:text-sage-300' : 'text-forest-300 dark:text-sage-600'
                          }`}>
                            {step.label}
                          </div>
                          <div className="font-sans text-xs text-forest-400 dark:text-sage-500 mt-0.5">
                            {step.time}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
