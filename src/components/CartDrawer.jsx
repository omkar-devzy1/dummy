import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useApp } from '../context/AppContext';

export default function CartDrawer() {
  const { cart, cartOpen, setCartOpen, cartCount } = useApp();

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <AnimatePresence>
      {cartOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setCartOpen(false)}
            className="fixed inset-0 bg-black/30 backdrop-blur-sm z-50"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed right-0 top-0 bottom-0 w-full sm:w-96 bg-cream dark:bg-forest-900 shadow-2xl z-50 flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-forest-100 dark:border-forest-700">
              <h2 className="font-serif text-xl text-forest-900 dark:text-cream">
                Your Cart
                {cartCount > 0 && (
                  <span className="ml-2 text-sm font-sans font-normal text-forest-400">({cartCount} items)</span>
                )}
              </h2>
              <button
                onClick={() => setCartOpen(false)}
                className="w-8 h-8 rounded-full hover:bg-forest-100 dark:hover:bg-forest-700 flex items-center justify-center text-forest-500 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto p-6">
              {cart.length === 0 ? (
                <div className="text-center py-16">
                  <div className="text-5xl mb-4">🛒</div>
                  <h3 className="font-serif text-lg text-forest-800 dark:text-cream mb-2">Your cart is empty</h3>
                  <p className="font-sans text-sm text-forest-400 mb-6">Add some beautiful plants to get started!</p>
                  <button
                    onClick={() => setCartOpen(false)}
                    className="btn-primary text-sm"
                  >
                    Continue Shopping
                  </button>
                </div>
              ) : (
                <div className="space-y-4">
                  {cart.map(item => (
                    <div key={item.id} className="flex gap-4 bg-white dark:bg-forest-800 rounded-xl p-3 border border-forest-50 dark:border-forest-700">
                      <img src={item.image} alt={item.name} className="w-16 h-16 rounded-lg object-cover flex-shrink-0" />
                      <div className="flex-1 min-w-0">
                        <h4 className="font-sans text-sm font-medium text-forest-900 dark:text-cream truncate">{item.name}</h4>
                        <div className="font-sans text-xs text-forest-400 mt-0.5">Qty: {item.qty}</div>
                        <div className="font-serif text-base font-semibold text-forest-900 dark:text-cream mt-1">
                          ₹{item.price * item.qty}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {cart.length > 0 && (
              <div className="border-t border-forest-100 dark:border-forest-700 p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-sans text-sm text-forest-600 dark:text-sage-400">Subtotal</span>
                  <span className="font-serif text-xl font-semibold text-forest-900 dark:text-cream">₹{total}</span>
                </div>
                <div className="flex items-center gap-1.5 text-xs font-sans text-forest-400">
                  <svg className="w-3.5 h-3.5 text-forest-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Free delivery on this order
                </div>
                <button className="w-full btn-primary justify-center py-4">
                  Checkout · ₹{total}
                </button>
                <button onClick={() => setCartOpen(false)} className="w-full text-center font-sans text-sm text-forest-500 hover:text-forest-700 transition-colors">
                  Continue Shopping
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
