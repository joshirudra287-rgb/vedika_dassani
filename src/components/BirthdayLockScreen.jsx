import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Lock, Unlock, Sparkles, Heart, Clock, KeyRound, AlertCircle } from 'lucide-react';
import confetti from 'canvas-confetti';

export const BirthdayLockScreen = ({ onUnlock }) => {
  const [passcode, setPasscode] = useState('');
  const [error, setError] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [isUnlocked, setIsUnlocked] = useState(false);

  // Countdown timer to tonight 12:00 AM (midnight)
  const [timeLeft, setTimeLeft] = useState({ hours: '00', minutes: '00', seconds: '00', isReached: false });

  useEffect(() => {
    const calculateTime = () => {
      const now = new Date();
      // Tonight midnight (12:00 AM of the birthday)
      const targetMidnight = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 24, 0, 0, 0).getTime();
      const difference = targetMidnight - now.getTime();

      if (difference <= 0) {
        setTimeLeft({ hours: '00', minutes: '00', seconds: '00', isReached: true });
      } else {
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        setTimeLeft({
          hours: String(hours).padStart(2, '0'),
          minutes: String(minutes).padStart(2, '0'),
          seconds: String(seconds).padStart(2, '0'),
          isReached: false,
        });
      }
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleUnlock = (e) => {
    e.preventDefault();
    if (passcode.trim() === '1506') {
      setIsUnlocked(true);
      confetti({
        particleCount: 150,
        spread: 90,
        origin: { y: 0.6 },
        colors: ['#ff4d6d', '#ff758f', '#d4af37', '#ffffff']
      });
      setTimeout(() => {
        onUnlock();
      }, 1000);
    } else {
      setError(true);
      setTimeout(() => setError(false), 2000);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.8, ease: 'easeInOut' }}
      className="fixed inset-0 z-50 bg-night-950 flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
      style={{
        backgroundImage: 'radial-gradient(ellipse at center, rgba(168, 50, 81, 0.25) 0%, rgba(13, 10, 15, 0.98) 75%)'
      }}
    >
      {/* Ambient background sparkles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="ambient-glow top-1/4 left-1/4 w-80 h-80 bg-romantic-600/20" />
        <div className="ambient-glow bottom-1/4 right-1/4 w-80 h-80 bg-gold/15" />
      </div>

      <div className="relative z-10 w-full max-w-md mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="glass-card rounded-3xl p-6 sm:p-8 border border-romantic-400/30 shadow-2xl text-center relative overflow-hidden backdrop-blur-xl"
        >
          {/* Top Decorative Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-romantic-950/80 border border-romantic-500/40 text-romantic-200 text-xs font-serif uppercase tracking-widest mb-6">
            <Sparkles className="w-3.5 h-3.5 text-gold animate-spin" style={{ animationDuration: '6s' }} />
            <span>Top Secret Surprise Vault</span>
            <Sparkles className="w-3.5 h-3.5 text-gold animate-spin" style={{ animationDuration: '6s' }} />
          </div>

          {/* Lock Icon */}
          <motion.div
            animate={isUnlocked ? { scale: [1, 1.2, 1], rotate: [0, -10, 10, 0] } : {}}
            className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-tr from-romantic-700 to-rose-500 flex items-center justify-center text-white shadow-xl shadow-romantic-900/60 border-2 border-white/20"
          >
            {isUnlocked ? (
              <Unlock className="w-9 h-9 text-gold-light" />
            ) : (
              <Lock className="w-9 h-9 text-champagne-100 animate-pulse" />
            )}
          </motion.div>

          {/* Heading */}
          <h1 className="text-2xl sm:text-3xl font-serif font-bold text-white mb-2">
            A Locked Surprise
          </h1>
          <p className="text-champagne-200/80 text-xs sm:text-sm font-light mb-6">
            Enter the secret passcode to unlock your special birthday experience ❤️
          </p>

          {/* Midnight Countdown Timer Box */}
          <div className="bg-night-900/80 rounded-2xl p-4 border border-romantic-500/30 mb-6">
            <div className="flex items-center justify-center gap-1.5 text-gold text-xs font-serif uppercase tracking-wider mb-2">
              <Clock className="w-3.5 h-3.5" />
              <span>Midnight 12:00 AM Countdown</span>
            </div>

            <div className="flex items-center justify-center gap-2 sm:gap-3 text-white font-mono">
              <div className="flex flex-col items-center">
                <span className="text-2xl sm:text-3xl font-bold bg-night-950 px-3 py-1.5 rounded-lg border border-romantic-500/20 text-romantic-300">
                  {timeLeft.hours}
                </span>
                <span className="text-[10px] text-champagne-300/60 uppercase mt-1">Hours</span>
              </div>
              <span className="text-xl text-romantic-400 font-bold mb-4">:</span>
              <div className="flex flex-col items-center">
                <span className="text-2xl sm:text-3xl font-bold bg-night-950 px-3 py-1.5 rounded-lg border border-romantic-500/20 text-romantic-300">
                  {timeLeft.minutes}
                </span>
                <span className="text-[10px] text-champagne-300/60 uppercase mt-1">Mins</span>
              </div>
              <span className="text-xl text-romantic-400 font-bold mb-4">:</span>
              <div className="flex flex-col items-center">
                <span className="text-2xl sm:text-3xl font-bold bg-night-950 px-3 py-1.5 rounded-lg border border-romantic-500/20 text-romantic-300">
                  {timeLeft.seconds}
                </span>
                <span className="text-[10px] text-champagne-300/60 uppercase mt-1">Secs</span>
              </div>
            </div>

            {timeLeft.isReached && (
              <p className="text-xs text-gold-light font-serif italic mt-2 animate-pulse">
                🎂 It's officially 12:00 AM — Happy Birthday My Love! 🎉
              </p>
            )}
          </div>

          {/* Passcode Form */}
          <form onSubmit={handleUnlock} className="space-y-4">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-romantic-400">
                <KeyRound className="w-4 h-4" />
              </div>
              <input
                type="text"
                pattern="[0-9]*"
                inputMode="numeric"
                maxLength={6}
                value={passcode}
                onChange={(e) => setPasscode(e.target.value)}
                placeholder="Enter Passcode..."
                className={`w-full pl-10 pr-4 py-3 rounded-xl bg-night-900/90 border text-white placeholder-champagne-400/40 text-center text-lg tracking-widest font-mono focus:outline-none transition-all ${
                  error
                    ? 'border-red-500 ring-2 ring-red-500/50 animate-shake'
                    : 'border-romantic-500/40 focus:border-romantic-400 focus:ring-2 focus:ring-romantic-500/30'
                }`}
                autoFocus
              />
            </div>

            {error && (
              <motion.div
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center justify-center gap-1.5 text-xs text-red-400 font-sans"
              >
                <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                <span>Incorrect passcode. Check the hint below!</span>
              </motion.div>
            )}

            <button
              type="submit"
              disabled={isUnlocked}
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-romantic-600 via-rose-600 to-romantic-600 hover:from-romantic-500 hover:to-rose-500 text-white font-medium text-sm sm:text-base tracking-wide shadow-lg shadow-romantic-900/50 hover:shadow-romantic-600/30 active:scale-[0.99] transition-all flex items-center justify-center gap-2 border border-romantic-300/30"
            >
              {isUnlocked ? (
                <>
                  <Unlock className="w-4 h-4 text-gold-light" />
                  <span>Unlocking Surprise...</span>
                </>
              ) : (
                <>
                  <Heart className="w-4 h-4 text-white fill-white" />
                  <span>Unlock Surprise</span>
                </>
              )}
            </button>
          </form>

          {/* Hint Section */}
          <div className="mt-5 pt-4 border-t border-romantic-500/20">
            <button
              type="button"
              onClick={() => setShowHint(!showHint)}
              className="text-xs text-romantic-300 hover:text-white transition-colors underline decoration-dotted font-serif"
            >
              {showHint ? 'Hide Hint' : '💡 Need a hint?'}
            </button>

            <AnimatePresence>
              {showHint && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mt-2 text-xs text-gold-light bg-gold/10 border border-gold/30 rounded-lg p-2.5 font-serif italic"
                >
                  Hint : day we meet
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};
