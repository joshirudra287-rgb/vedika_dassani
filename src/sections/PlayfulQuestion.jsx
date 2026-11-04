import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { SectionHeader } from '../components/SectionHeader';
import { questionsConfig } from '../data/questions';
import { Heart, Sparkles, X, CheckCircle2, Lock } from 'lucide-react';

export const PlayfulQuestion = () => {
  const [noPosition, setNoPosition] = useState({ x: 0, y: 0 });
  const [evasionCount, setEvasionCount] = useState(0);
  const [currentNoText, setCurrentNoText] = useState(questionsConfig.noButtonInitialText);
  const [hasSaidYes, setHasSaidYes] = useState(false);
  const containerRef = useRef(null);

  // Playful evasion handler
  const handleNoEvade = (e) => {
    if (e && e.preventDefault) e.preventDefault();
    if (!containerRef.current) return;

    const containerRect = containerRef.current.getBoundingClientRect();
    const padding = 20;

    // Allowed movement range within the container
    const maxX = (containerRect.width / 2) - 80 - padding;
    const maxY = 100;

    // Generate random coordinates bounded cleanly inside
    const randomX = (Math.random() * (maxX * 2)) - maxX;
    const randomY = (Math.random() * (maxY * 2)) - maxY;

    setNoPosition({ x: randomX, y: randomY });

    // Cycle through playful phrases
    const phrases = questionsConfig.noButtonPhrases;
    const nextPhrase = phrases[evasionCount % phrases.length];
    setCurrentNoText(nextPhrase);
    setEvasionCount((prev) => prev + 1);
  };

  const handleYesClick = () => {
    setHasSaidYes(true);

    // Fire fireworks / confetti burst
    const duration = 3 * 1000;
    const animationEnd = Date.now() + duration;

    const frame = () => {
      confetti({
        particleCount: 5,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ['#f43f5e', '#fda4b2', '#d4af37', '#ffffff']
      });
      confetti({
        particleCount: 5,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ['#f43f5e', '#fda4b2', '#d4af37', '#ffffff']
      });

      if (Date.now() < animationEnd) {
        requestAnimationFrame(frame);
      }
    };
    frame();
  };

  return (
    <section id="playful-question" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto overflow-hidden">
      <div className="ambient-glow top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-romantic-600/15" />

      <SectionHeader
        tag={questionsConfig.sectionTag}
        heading={questionsConfig.questionTitle}
        description={questionsConfig.questionSubtitle}
      />

      <div
        ref={containerRef}
        className="relative min-h-[380px] rounded-3xl glass-card p-6 sm:p-12 border border-romantic-400/25 flex flex-col items-center justify-center text-center shadow-2xl overflow-hidden"
      >
        {!hasSaidYes ? (
          <div className="w-full flex flex-col items-center">
            {/* Heartbeat icon */}
            <motion.div
              animate={{ scale: [1, 1.15, 1] }}
              transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
              className="w-16 h-16 rounded-full bg-romantic-900/60 border border-romantic-400/40 flex items-center justify-center mb-8 shadow-lg shadow-romantic-900/40"
            >
              <Heart className="w-8 h-8 text-romantic-400 fill-romantic-500" />
            </motion.div>

            <h3 className="text-xl sm:text-2xl font-serif text-white max-w-lg mb-8">
              So tell me honestly... will you let me love and spoil you for another year? 🌹
            </h3>

            {/* Buttons Area */}
            <div className="relative w-full max-w-md h-36 flex items-center justify-center gap-6 sm:gap-8">
              {/* YES BUTTON - Always easily clickable, pulsing with love */}
              <motion.button
                onClick={handleYesClick}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                className="z-20 relative px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-gradient-to-r from-romantic-600 via-rose-500 to-romantic-600 text-white font-semibold text-sm sm:text-base tracking-wide shadow-xl shadow-romantic-600/40 border border-romantic-300/40 hover:shadow-romantic-500/60 flex items-center gap-2"
              >
                <Sparkles className="w-4 h-4 text-gold-light" />
                <span>{questionsConfig.yesButtonText}</span>
              </motion.button>

              {/* NO BUTTON - Playfully evades on hover or touch */}
              <motion.button
                animate={{ x: noPosition.x, y: noPosition.y }}
                transition={{ type: 'spring', stiffness: 350, damping: 20 }}
                onMouseEnter={handleNoEvade}
                onTouchStart={handleNoEvade}
                onClick={handleNoEvade}
                className="z-10 px-5 sm:px-6 py-3 rounded-full bg-night-800/80 hover:bg-night-700/80 text-champagne-300/80 font-medium text-xs sm:text-sm border border-champagne-500/20 backdrop-blur-md cursor-pointer select-none transition-colors"
              >
                {currentNoText}
              </motion.button>
            </div>

            {evasionCount > 2 && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-xs text-romantic-300/70 italic mt-4"
              >
                Hehe, told you! The 'No' button has an allergy to being clicked 😉
              </motion.p>
            )}
          </div>
        ) : (
          /* YES SUCCESS REVEAL CARD */
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, type: 'spring' }}
            className="w-full max-w-2xl text-center py-4"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-romantic-500/20 border border-romantic-400 text-romantic-300 text-sm font-semibold tracking-wide uppercase mb-4">
              <CheckCircle2 className="w-4 h-4 text-romantic-400" />
              <span>{questionsConfig.successModal.badge}</span>
            </div>

            <h3 className="text-2xl sm:text-4xl font-serif font-bold text-white mb-4">
              <span className="rose-gradient-text">
                {questionsConfig.successModal.title}
              </span>
            </h3>

            {/* Revealed Photo */}
            <div className="my-6 max-w-sm mx-auto rounded-2xl overflow-hidden glass-card p-2 border border-romantic-400/40 shadow-2xl">
              <div className="aspect-[4/3] rounded-xl overflow-hidden relative">
                <img
                  src={questionsConfig.successModal.specialPhoto}
                  alt={questionsConfig.successModal.specialPhotoCaption}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-night-900/80 via-transparent to-transparent" />
                <p className="absolute bottom-3 left-2 right-2 text-xs font-serif text-white italic">
                  {questionsConfig.successModal.specialPhotoCaption}
                </p>
              </div>
            </div>

            <p className="text-champagne-100/90 text-base sm:text-lg font-light leading-relaxed max-w-lg mx-auto mb-4">
              "{questionsConfig.successModal.letterSnippet}"
            </p>

            <p className="font-cursive text-xl text-gold">
              {questionsConfig.successModal.closingNote}
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
};
