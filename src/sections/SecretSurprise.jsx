import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { SectionHeader } from '../components/SectionHeader';
import { surprisesConfig } from '../data/surprises';
import { Gift, Lock, KeyRound, Sparkles, Heart, Ticket, Check, AlertCircle } from 'lucide-react';

export const SecretSurprise = () => {
  const config = surprisesConfig.secretSurprise;
  const [passwordInput, setPasswordInput] = useState('');
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [showHint, setShowHint] = useState(false);
  const [isLidOpen, setIsLidOpen] = useState(false);

  const handleUnlock = (e) => {
    e.preventDefault();
    if (passwordInput.trim().toLowerCase() === config.password.toLowerCase()) {
      setIsUnlocked(true);
      setErrorMessage('');
      setIsLidOpen(true);

      // Sparkle burst
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#d4af37', '#f43f5e', '#ffffff', '#ffd700']
      });
    } else {
      setErrorMessage('Incorrect password, my love! Try reading the hint below 💭');
    }
  };

  return (
    <section id="secret-surprise" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto overflow-hidden">
      <div className="ambient-glow -top-10 left-1/2 -translate-x-1/2 w-96 h-96 bg-gold/10" />

      <SectionHeader
        tag={config.sectionTag}
        heading={config.heading}
        description={config.description}
      />

      <div className="max-w-2xl mx-auto">
        {!isUnlocked ? (
          /* Password Protected Locked View */
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-3xl p-8 sm:p-12 border border-romantic-400/30 text-center shadow-2xl relative"
          >
            {/* 3D Animated Gift Box Icon */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              className="w-24 h-24 rounded-3xl bg-gradient-to-tr from-romantic-900 via-romantic-700 to-romantic-500 border-2 border-gold/40 mx-auto flex items-center justify-center text-gold-light shadow-2xl shadow-romantic-900/60 relative mb-6 cursor-pointer"
              onClick={() => setShowHint(true)}
            >
              <Gift className="w-12 h-12" />
              {/* Ribbon cross decoration */}
              <div className="absolute inset-x-0 h-2 bg-gold/70 top-1/2 -translate-y-1/2 pointer-events-none" />
              <div className="absolute inset-y-0 w-2 bg-gold/70 left-1/2 -translate-x-1/2 pointer-events-none" />
            </motion.div>

            <h3 className="text-2xl font-serif font-bold text-white mb-2">
              {config.giftBoxTitle}
            </h3>
            <p className="text-champagne-300/80 text-sm mb-6">
              Enter our secret passcode to release the ribbon and uncover what is inside.
            </p>

            {/* Password Form */}
            <form onSubmit={handleUnlock} className="max-w-sm mx-auto space-y-4">
              <div className="relative">
                <KeyRound className="w-5 h-5 text-romantic-400 absolute left-4 top-1/2 -translate-y-1/2" />
                <input
                  type="password"
                  placeholder="Enter secret passcode..."
                  value={passwordInput}
                  onChange={(e) => {
                    setPasswordInput(e.target.value);
                    if (errorMessage) setErrorMessage('');
                  }}
                  className="w-full pl-12 pr-4 py-3.5 rounded-full bg-night-900/90 border border-romantic-400/40 text-white placeholder-champagne-400/40 text-sm focus:outline-none focus:border-romantic-400 focus:ring-2 focus:ring-romantic-500/20"
                />
              </div>

              {errorMessage && (
                <div className="flex items-center justify-center gap-1.5 text-xs text-rose-400">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              <button
                type="submit"
                className="w-full py-3.5 rounded-full bg-gradient-to-r from-romantic-600 via-rose-500 to-romantic-600 text-white font-medium text-sm tracking-wide shadow-lg shadow-romantic-900/50 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 border border-romantic-300/30"
              >
                <Lock className="w-4 h-4 text-gold-light" />
                <span>Open Secret Vault</span>
              </button>
            </form>

            {/* Password Hint Toggle */}
            <div className="mt-6 pt-4 border-t border-romantic-500/15">
              {!showHint ? (
                <button
                  type="button"
                  onClick={() => setShowHint(true)}
                  className="text-xs text-romantic-300/70 hover:text-romantic-300 underline underline-offset-4"
                >
                  Need a hint? Click here 🗝️
                </button>
              ) : (
                <p className="text-xs text-gold-light/90 font-serif italic">
                  {config.passwordHint}
                </p>
              )}
            </div>
          </motion.div>
        ) : (
          /* UNLOCKED SECRET VAULT CONTENT */
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, type: 'spring' }}
            className="glass-card rounded-3xl p-6 sm:p-12 border-2 border-gold/50 shadow-2xl relative overflow-hidden"
          >
            {/* Unlocked banner */}
            <div className="text-center mb-8">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/20 border border-gold/40 text-gold-light text-xs sm:text-sm font-semibold tracking-wide uppercase">
                <Sparkles className="w-4 h-4 text-gold" />
                <span>{config.unlockedHeading}</span>
              </span>
              <h3 className="font-serif font-bold text-3xl sm:text-4xl text-white mt-3">
                <span className="rose-gradient-text">
                  {config.secretLetter.salutation}
                </span>
              </h3>
            </div>

            {/* Secret intimate message */}
            <p className="font-serif text-champagne-100/90 text-base sm:text-lg leading-relaxed text-center max-w-xl mx-auto mb-8 italic">
              "{config.secretLetter.message}"
            </p>

            {/* Hidden Photo */}
            <div className="max-w-md mx-auto rounded-2xl overflow-hidden glass-card p-2 border border-gold/30 shadow-xl mb-8">
              <div className="aspect-[16/10] rounded-xl overflow-hidden relative">
                <img
                  src={config.secretLetter.hiddenPhoto}
                  alt={config.secretLetter.hiddenPhotoCaption}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-night-900/80 via-transparent to-transparent" />
                <p className="absolute bottom-3 left-3 right-3 text-center text-xs font-serif text-champagne-200 italic">
                  {config.secretLetter.hiddenPhotoCaption}
                </p>
              </div>
            </div>

            {/* Golden VIP Weekend Getaway Ticket */}
            <div className="relative rounded-2xl bg-gradient-to-r from-amber-200/10 via-yellow-400/15 to-amber-200/10 border-2 border-dashed border-gold/60 p-6 sm:p-8 text-center shadow-lg">
              <div className="w-12 h-12 rounded-full bg-gold/20 border border-gold flex items-center justify-center text-gold mx-auto mb-3">
                <Ticket className="w-6 h-6" />
              </div>
              <h4 className="font-serif font-bold text-xl sm:text-2xl text-white">
                <span className="gold-gradient-text">{config.secretLetter.goldenTicketTitle}</span>
              </h4>
              <p className="text-champagne-200/90 text-xs sm:text-sm font-light mt-2 max-w-lg mx-auto leading-relaxed">
                {config.secretLetter.goldenTicketDesc}
              </p>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};
