import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { site, waLink } from '../config/site';

export default function Contact() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 });
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-cream dark:bg-forest-950" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <span className="section-label">
            <span className="w-6 h-px bg-sage-500" />
            Get In Touch
            <span className="w-6 h-px bg-sage-500" />
          </span>
          <h2 className="section-title mt-3">
            Let's Grow
            <br />
            <em className="italic text-sage-600 dark:text-sage-400">Together</em>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="lg:col-span-2 space-y-6"
          >
            {/* Info cards */}
            {[
              {
                icon: (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                ),
                title: 'Visit Our Nursery',
                content: site.address.lines.join('\n'),
              },
              {
                icon: (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                ),
                title: 'Call or WhatsApp',
                content: site.phones.join('\n'),
              },
              {
                icon: (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                ),
                title: 'Email Us',
                content: site.emails.join('\n'),
              },
              {
                icon: (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                title: 'Business Hours',
                content: site.hours.join('\n'),
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="flex gap-4 p-5 bg-white dark:bg-forest-800/80 rounded-2xl border border-forest-50 dark:border-forest-700/50 shadow-sm"
              >
                <div className="w-10 h-10 rounded-xl bg-forest-50 dark:bg-forest-700 flex items-center justify-center text-forest-600 dark:text-sage-300 flex-shrink-0">
                  {item.icon}
                </div>
                <div>
                  <div className="font-sans text-xs font-semibold text-forest-500 dark:text-sage-400 uppercase tracking-wide mb-1">
                    {item.title}
                  </div>
                  <div className="font-sans text-sm text-forest-800 dark:text-cream whitespace-pre-line leading-relaxed">
                    {item.content}
                  </div>
                </div>
              </motion.div>
            ))}

            {/* WhatsApp CTA */}
            <motion.a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 }}
              className="flex items-center gap-3 p-5 rounded-2xl bg-[#25D366] text-white hover:bg-[#20BD5C] transition-colors duration-300 shadow-md"
            >
              <svg className="w-6 h-6 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              <div>
                <div className="font-sans text-xs opacity-80">Chat with us on</div>
                <div className="font-sans text-sm font-semibold">WhatsApp — Quick Response!</div>
              </div>
              <svg className="w-4 h-4 ml-auto opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.a>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-3"
          >
            <div className="bg-white dark:bg-forest-800/80 rounded-3xl shadow-card p-8 border border-forest-50 dark:border-forest-700/50">
              {!submitted ? (
                <>
                  <h3 className="font-serif text-2xl text-forest-900 dark:text-cream mb-2">Send us a message</h3>
                  <p className="font-sans text-sm text-forest-500/80 dark:text-sage-400 mb-6">
                    We'll get back to you within 2 business hours.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block font-sans text-xs font-medium text-forest-600 dark:text-sage-400 mb-1.5">Full Name *</label>
                        <input
                          required
                          type="text"
                          value={form.name}
                          onChange={e => setForm({ ...form, name: e.target.value })}
                          placeholder="Your name"
                          className="w-full px-4 py-3 rounded-xl border border-forest-100 dark:border-forest-600 bg-parchment dark:bg-forest-700 text-forest-900 dark:text-cream text-sm font-sans focus:outline-none focus:ring-2 focus:ring-forest-400 focus:border-transparent placeholder-forest-300 dark:placeholder-sage-600 transition"
                        />
                      </div>
                      <div>
                        <label className="block font-sans text-xs font-medium text-forest-600 dark:text-sage-400 mb-1.5">Phone Number</label>
                        <input
                          type="tel"
                          value={form.phone}
                          onChange={e => setForm({ ...form, phone: e.target.value })}
                          placeholder="+91 XXXXX XXXXX"
                          className="w-full px-4 py-3 rounded-xl border border-forest-100 dark:border-forest-600 bg-parchment dark:bg-forest-700 text-forest-900 dark:text-cream text-sm font-sans focus:outline-none focus:ring-2 focus:ring-forest-400 focus:border-transparent placeholder-forest-300 dark:placeholder-sage-600 transition"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block font-sans text-xs font-medium text-forest-600 dark:text-sage-400 mb-1.5">Email Address *</label>
                      <input
                        required
                        type="email"
                        value={form.email}
                        onChange={e => setForm({ ...form, email: e.target.value })}
                        placeholder="your@email.com"
                        className="w-full px-4 py-3 rounded-xl border border-forest-100 dark:border-forest-600 bg-parchment dark:bg-forest-700 text-forest-900 dark:text-cream text-sm font-sans focus:outline-none focus:ring-2 focus:ring-forest-400 focus:border-transparent placeholder-forest-300 dark:placeholder-sage-600 transition"
                      />
                    </div>

                    <div>
                      <label className="block font-sans text-xs font-medium text-forest-600 dark:text-sage-400 mb-1.5">I'm interested in</label>
                      <select
                        value={form.service}
                        onChange={e => setForm({ ...form, service: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-forest-100 dark:border-forest-600 bg-parchment dark:bg-forest-700 text-forest-900 dark:text-cream text-sm font-sans focus:outline-none focus:ring-2 focus:ring-forest-400 focus:border-transparent transition appearance-none"
                      >
                        <option value="">Select a service...</option>
                        <option value="plants">Buying Plants</option>
                        <option value="pots">Pots & Décor</option>
                        <option value="landscaping">Landscaping Consultation</option>
                        <option value="balcony">Balcony Garden Setup</option>
                        <option value="office">Office Greenery</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label className="block font-sans text-xs font-medium text-forest-600 dark:text-sage-400 mb-1.5">Message *</label>
                      <textarea
                        required
                        value={form.message}
                        onChange={e => setForm({ ...form, message: e.target.value })}
                        rows={4}
                        placeholder="Tell us about your space, requirements, or questions..."
                        className="w-full px-4 py-3 rounded-xl border border-forest-100 dark:border-forest-600 bg-parchment dark:bg-forest-700 text-forest-900 dark:text-cream text-sm font-sans focus:outline-none focus:ring-2 focus:ring-forest-400 focus:border-transparent placeholder-forest-300 dark:placeholder-sage-600 transition resize-none"
                      />
                    </div>

                    <motion.button
                      type="submit"
                      whileTap={{ scale: 0.98 }}
                      className="w-full btn-primary justify-center text-sm py-4"
                    >
                      Send Message
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                    </motion.button>
                  </form>
                </>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="text-5xl mb-4">🌿</div>
                  <h3 className="font-serif text-2xl text-forest-900 dark:text-cream mb-2">Message Sent!</h3>
                  <p className="font-sans text-sm text-forest-500/80 dark:text-sage-400 mb-6">
                    Thank you, {form.name || 'plant lover'}! We'll get back to you within 2 business hours.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ name: '', email: '', phone: '', service: '', message: '' }); }}
                    className="btn-secondary text-sm"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              )}
            </div>

            {/* Map placeholder */}
            <div className="mt-6 rounded-2xl overflow-hidden h-48 bg-forest-100 dark:bg-forest-800 relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-3xl mb-2">📍</div>
                  <p className="font-sans text-sm text-forest-600 dark:text-sage-400">{site.address.short}</p>
                  <a
                    href={site.address.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-flex items-center gap-1.5 text-xs font-sans font-medium text-forest-700 dark:text-sage-300 underline"
                  >
                    Open in Google Maps
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
              {/* Subtle map-style grid */}
              <div className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage: 'linear-gradient(#7d9b76 1px, transparent 1px), linear-gradient(90deg, #7d9b76 1px, transparent 1px)',
                  backgroundSize: '30px 30px',
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
