import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { quizQuestions } from '../data/plants';
import { useApp } from '../context/AppContext';

const recommendations = {
  default: {
    name: 'Snake Plant',
    description: 'Perfect for almost any environment. Hardy, elegant, and air-purifying.',
    price: 449,
    care: 'Very Easy',
    image: 'https://images.unsplash.com/photo-1572688484438-313a6e50c333?w=400&q=80',
  },
  beginner_low_forget: {
    name: 'ZZ Plant',
    description: 'Nearly indestructible. Thrives in low light and forgives irregular watering.',
    price: 499,
    care: 'Very Easy',
    image: 'https://images.unsplash.com/photo-1586348943529-beaae6c28db9?w=400&q=80',
  },
  bright_office: {
    name: 'Monstera Deliciosa',
    description: 'A statement plant for bright spaces. Bold, tropical, and fast-growing.',
    price: 599,
    care: 'Easy',
    image: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=400&q=80',
  },
  balcony_outdoor: {
    name: 'Bougainvillea',
    description: 'Transforms balconies with vibrant year-round blooms. Sun-loving and hardy.',
    price: 349,
    care: 'Easy',
    image: 'https://images.unsplash.com/photo-1487070183336-b863922373d4?w=400&q=80',
  },
};

export default function PlantQuiz() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { addToCart } = useApp();
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [result, setResult] = useState(null);

  const currentQ = quizQuestions[step];
  const totalSteps = quizQuestions.length;

  const handleAnswer = (value) => {
    const newAnswers = { ...answers, [currentQ.id]: value };
    setAnswers(newAnswers);

    if (step < totalSteps - 1) {
      setStep(step + 1);
    } else {
      // Simple recommendation logic
      const loc = newAnswers[1];
      const light = newAnswers[2];
      const water = newAnswers[3];
      const exp = newAnswers[4];

      let rec = recommendations.default;
      if ((water === 'forget' || water === 'rarely') && (exp === 'beginner')) {
        rec = recommendations.beginner_low_forget;
      } else if (loc === 'office' && light === 'bright') {
        rec = recommendations.bright_office;
      } else if (loc === 'balcony') {
        rec = recommendations.balcony_outdoor;
      }
      setResult(rec);
    }
  };

  const reset = () => {
    setStep(0);
    setAnswers({});
    setResult(null);
  };

  return (
    <section className="py-24 bg-parchment dark:bg-forest-900" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <span className="section-label">
              <span className="w-6 h-px bg-sage-500" />
              AI-Powered Tool
            </span>
            <h2 className="section-title mt-3 mb-4">
              Find Your
              <br />
              <em className="italic text-sage-600 dark:text-sage-400">Perfect Plant</em>
            </h2>
            <p className="font-sans text-sm text-forest-600/75 dark:text-sage-300/80 leading-relaxed mb-8">
              Answer 4 quick questions about your space and lifestyle. Our plant matching algorithm will recommend the ideal plant for you.
            </p>
            <div className="space-y-3">
              {['Personalised to your space & lifestyle', 'Based on 500+ plant profiles', 'Expert-curated recommendations', 'Takes under 60 seconds'].map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.2 + i * 0.07 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-5 h-5 rounded-full bg-forest-100 dark:bg-forest-700 flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-forest-600 dark:text-sage-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="font-sans text-sm text-forest-700 dark:text-sage-300">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: quiz card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="bg-white dark:bg-forest-800/80 rounded-3xl shadow-card-hover overflow-hidden"
          >
            <AnimatePresence mode="wait">
              {!result ? (
                <motion.div
                  key={step}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ duration: 0.35 }}
                  className="p-8"
                >
                  {/* Progress */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-sans text-xs text-forest-400 dark:text-sage-500">
                      Question {step + 1} of {totalSteps}
                    </span>
                    <div className="flex gap-1.5">
                      {quizQuestions.map((_, i) => (
                        <div
                          key={i}
                          className={`h-1.5 rounded-full transition-all duration-300 ${
                            i < step ? 'bg-forest-500 w-6' : i === step ? 'bg-forest-400 w-6' : 'bg-forest-100 dark:bg-forest-700 w-4'
                          }`}
                        />
                      ))}
                    </div>
                  </div>

                  <div className="text-3xl mb-3">🌱</div>
                  <h3 className="font-serif text-2xl text-forest-900 dark:text-cream mb-6">
                    {currentQ.question}
                  </h3>

                  <div className="grid grid-cols-2 gap-3">
                    {currentQ.options.map((opt) => (
                      <motion.button
                        key={opt.value}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => handleAnswer(opt.value)}
                        className="p-4 rounded-xl border-2 border-forest-100 dark:border-forest-700 hover:border-forest-500 dark:hover:border-forest-500 hover:bg-forest-50 dark:hover:bg-forest-700/50 text-left transition-all duration-200 group"
                      >
                        <div className="text-2xl mb-2">{opt.icon}</div>
                        <div className="font-sans text-sm font-medium text-forest-800 dark:text-cream">
                          {opt.label}
                        </div>
                      </motion.button>
                    ))}
                  </div>

                  {step > 0 && (
                    <button
                      onClick={() => setStep(step - 1)}
                      className="mt-4 text-xs text-forest-400 dark:text-sage-500 hover:text-forest-600 flex items-center gap-1 transition-colors"
                    >
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                      Back
                    </button>
                  )}
                </motion.div>
              ) : (
                <motion.div
                  key="result"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="p-8"
                >
                  <div className="text-center mb-6">
                    <div className="text-2xl mb-2">🎉</div>
                    <h3 className="font-serif text-xl text-forest-900 dark:text-cream mb-1">
                      Your Perfect Match!
                    </h3>
                    <p className="font-sans text-xs text-forest-500 dark:text-sage-400">
                      Based on your answers, we recommend:
                    </p>
                  </div>

                  <div className="rounded-2xl overflow-hidden border border-forest-100 dark:border-forest-700 mb-6">
                    <div className="aspect-video overflow-hidden">
                      <img src={result.image} alt={result.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="p-5">
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="font-serif text-xl text-forest-900 dark:text-cream">{result.name}</h4>
                        <span className="font-sans text-xs bg-forest-100 dark:bg-forest-700 text-forest-600 dark:text-sage-300 px-2 py-0.5 rounded-full">
                          {result.care}
                        </span>
                      </div>
                      <p className="font-sans text-sm text-forest-600/75 dark:text-sage-400 leading-relaxed mb-4">
                        {result.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="font-serif text-2xl text-forest-900 dark:text-cream">₹{result.price}</span>
                        <button
                          onClick={() => addToCart({ id: `quiz-${result.name}`, name: result.name, price: result.price, image: result.image })}
                          className="btn-primary text-xs px-5 py-2.5"
                        >
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={reset}
                    className="w-full text-center text-sm text-forest-500 dark:text-sage-400 hover:text-forest-700 font-sans flex items-center justify-center gap-1 transition-colors"
                  >
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                    Retake Quiz
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
