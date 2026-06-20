import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useApp } from '../context/AppContext';
import { api } from '../api';

export default function LoginModal() {
  const { loginOpen, setLoginOpen, login } = useApp();
  const [mode, setMode] = useState('signin'); // 'signin' | 'signup'
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const close = () => {
    setLoginOpen(false);
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.email || !form.password) {
      setError('Please enter your email and password.');
      return;
    }
    if (mode === 'signup' && !form.name.trim()) {
      setError('Please enter your name.');
      return;
    }
    setError('');
    setLoading(true);
    try {
      const { user, token } = mode === 'signin'
        ? await api.auth.login(form.email, form.password)
        : await api.auth.signup(form.name, form.email, form.password);
      login(user, token);
      setForm({ name: '', email: '', password: '' });
    } catch (err) {
      setError(err.message || 'Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {loginOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[60]"
          />

          {/* Modal */}
          <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 20 }}
              transition={{ type: 'spring', stiffness: 300, damping: 26 }}
              className="pointer-events-auto w-full max-w-md bg-cream dark:bg-forest-900 rounded-3xl shadow-2xl overflow-hidden border border-forest-100 dark:border-forest-700"
            >
              {/* Header */}
              <div className="relative bg-forest-800 dark:bg-forest-950 px-8 pt-8 pb-10 text-center">
                <button
                  onClick={close}
                  className="absolute top-4 right-4 w-8 h-8 rounded-full hover:bg-white/10 flex items-center justify-center text-white/70 transition-colors"
                  aria-label="Close"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
                <div className="w-12 h-12 rounded-full bg-forest-600 mx-auto flex items-center justify-center mb-3">
                  <svg viewBox="0 0 32 32" className="w-7 h-7 fill-cream">
                    <path d="M16 4 C10 4 7 11 9 18 C11 25 16 28 16 28 C16 28 21 25 23 18 C25 11 22 4 16 4Z" opacity="0.9" />
                    <line x1="16" y1="28" x2="16" y2="12" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </div>
                <h2 className="font-serif text-2xl text-cream">
                  {mode === 'signin' ? 'Welcome back' : 'Join Prakruti'}
                </h2>
                <p className="font-sans text-xs text-white/60 mt-1">
                  {mode === 'signin'
                    ? 'Sign in to continue your order'
                    : 'Create an account to start shopping'}
                </p>
              </div>

              {/* Body */}
              <div className="p-8">
                <form onSubmit={handleSubmit} className="space-y-4">
                  {mode === 'signup' && (
                    <div>
                      <label className="block font-sans text-xs font-medium text-forest-600 dark:text-sage-400 mb-1.5">Full Name</label>
                      <input
                        type="text"
                        value={form.name}
                        onChange={e => setForm({ ...form, name: e.target.value })}
                        placeholder="Your name"
                        className="w-full px-4 py-3 rounded-xl border border-forest-100 dark:border-forest-600 bg-white dark:bg-forest-800 text-forest-900 dark:text-cream text-sm font-sans focus:outline-none focus:ring-2 focus:ring-forest-400 focus:border-transparent placeholder-forest-300 dark:placeholder-sage-600 transition"
                      />
                    </div>
                  )}

                  <div>
                    <label className="block font-sans text-xs font-medium text-forest-600 dark:text-sage-400 mb-1.5">Email Address</label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={e => setForm({ ...form, email: e.target.value })}
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 rounded-xl border border-forest-100 dark:border-forest-600 bg-white dark:bg-forest-800 text-forest-900 dark:text-cream text-sm font-sans focus:outline-none focus:ring-2 focus:ring-forest-400 focus:border-transparent placeholder-forest-300 dark:placeholder-sage-600 transition"
                    />
                  </div>

                  <div>
                    <label className="block font-sans text-xs font-medium text-forest-600 dark:text-sage-400 mb-1.5">Password</label>
                    <input
                      type="password"
                      value={form.password}
                      onChange={e => setForm({ ...form, password: e.target.value })}
                      placeholder="••••••••"
                      className="w-full px-4 py-3 rounded-xl border border-forest-100 dark:border-forest-600 bg-white dark:bg-forest-800 text-forest-900 dark:text-cream text-sm font-sans focus:outline-none focus:ring-2 focus:ring-forest-400 focus:border-transparent placeholder-forest-300 dark:placeholder-sage-600 transition"
                    />
                  </div>

                  {error && (
                    <p className="font-sans text-xs text-red-500">{error}</p>
                  )}

                  <motion.button
                    type="submit"
                    disabled={loading}
                    whileTap={{ scale: 0.98 }}
                    className="w-full btn-primary justify-center text-sm py-4 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {loading
                      ? 'Please wait…'
                      : mode === 'signin' ? 'Sign In' : 'Create Account'}
                  </motion.button>
                </form>

                <p className="text-center font-sans text-xs text-forest-500 dark:text-sage-400 mt-5">
                  {mode === 'signin' ? "Don't have an account?" : 'Already have an account?'}
                  <button
                    onClick={() => { setMode(mode === 'signin' ? 'signup' : 'signin'); setError(''); }}
                    className="ml-1.5 font-semibold text-forest-700 dark:text-sage-300 hover:underline"
                  >
                    {mode === 'signin' ? 'Create one' : 'Sign in'}
                  </button>
                </p>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
