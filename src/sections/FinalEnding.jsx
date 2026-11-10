import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { SectionHeader } from '../components/SectionHeader';
import { endingConfig } from '../data/ending';
import { Heart, Sparkles, ArrowUp, Send } from 'lucide-react';

export const FinalEnding = ({ onScrollToTop }) => {
  const [kissCount, setKissCount] = useState(0);
  const [floatingKisses, setFloatingKisses] = useState([]);

  const handleSendKiss = (e) => {
    setKissCount((prev) => prev + 1);

    // Spawn floating kiss emoji
    const id = Date.now() + Math.random();
    const newKiss = {
      id,
      x: (Math.random() * 120) - 60,
    };
    setFloatingKisses((prev) => [...prev, newKiss]);

    // Cleanup after animation
    setTimeout(() => {
      setFloatingKisses((prev) => prev.filter((k) => k.id !== id));
    }, 2000);

    // Little heart confetti
    confetti({
      particleCount: 15,
      spread: 45,
      origin: { y: 0.8 },
      colors: ['#f43f5e', '#fda4b2', '#ffffff']
    });
  };

  return (
    <section id="final-ending" className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto overflow-hidden">
      <div className="ambient-glow bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-romantic-600/15" />

      <SectionHeader
        tag={endingConfig.sectionTag}
        heading={endingConfig.heading}
        description={endingConfig.subheading}
      />

      {/* Final Special Framed Photo */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-xl mx-auto mb-16"
      >
        <div className="rounded-3xl glass-card p-3 border-2 border-gold/40 shadow-2xl relative group">
          <div className="aspect-[16/11] rounded-2xl overflow-hidden relative">
            <img
              src={endingConfig.finalPhoto}
              alt={endingConfig.finalPhotoCaption}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-night-900/80 via-transparent to-transparent" />
            <p className="absolute bottom-4 left-4 right-4 text-center font-serif text-sm sm:text-base text-champagne-100 italic drop-shadow">
              "{endingConfig.finalPhotoCaption}"
            </p>
          </div>
        </div>
      </motion.div>

      {/* Personal Closing Message Card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="glass-card rounded-3xl p-8 sm:p-14 border border-romantic-400/25 shadow-2xl text-center mb-16 max-w-3xl mx-auto"
      >
        <div className="space-y-6 text-champagne-100/90 font-light text-base sm:text-lg leading-relaxed font-serif whitespace-pre-line text-left sm:text-center">
          {endingConfig.closingMessage.map((p, idx) => (
            <p key={idx}>{p}</p>
          ))}
        </div>

        {/* Signature */}
        <div className="mt-10 pt-6 border-t border-romantic-500/20">
          <p className="text-xs uppercase tracking-widest text-romantic-300/80 font-serif">
            {endingConfig.signature}
          </p>
          <p className="font-cursive text-3xl sm:text-4xl text-romantic-400 mt-1">
            {endingConfig.signOffName}
          </p>
        </div>
      </motion.div>

      {/* Bottom Interactive Actions */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 relative">
        {/* Virtual Kiss Button with floating hearts */}
        <div className="relative">
          <button
            onClick={handleSendKiss}
            className="px-6 py-3.5 rounded-full bg-gradient-to-r from-romantic-600 to-rose-600 text-white font-medium text-sm shadow-xl shadow-romantic-900/50 hover:scale-105 active:scale-95 transition-all flex items-center gap-2 border border-romantic-300/30"
          >
            <span>{endingConfig.shareLoveText}</span>
            {kissCount > 0 && (
              <span className="px-2 py-0.5 rounded-full bg-white/20 text-xs font-mono">
                +{kissCount}
              </span>
            )}
          </button>

          {/* Floating kiss particles */}
          <AnimatePresence>
            {floatingKisses.map((k) => (
              <motion.div
                key={k.id}
                initial={{ opacity: 1, y: 0, x: k.x, scale: 0.8 }}
                animate={{ opacity: 0, y: -70, scale: 1.5 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.5, ease: 'easeOut' }}
                className="absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none text-2xl"
              >
                💋
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Back To Top */}
        <button
          onClick={onScrollToTop}
          className="px-6 py-3.5 rounded-full bg-night-800/80 hover:bg-night-700 text-champagne-200 font-medium text-sm border border-romantic-500/20 hover:border-romantic-400 transition-all flex items-center gap-2"
        >
          <ArrowUp className="w-4 h-4" />
          <span>{endingConfig.backToTopText}</span>
        </button>
      </div>

      {/* Footer copyright note */}
      <div className="text-center mt-16 text-xs text-champagne-400/40 font-light">
        Handcrafted with all the love in the universe for your special day ✨
      </div>
    </section>
  );
};
