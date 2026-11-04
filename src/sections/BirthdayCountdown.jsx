import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { SectionHeader } from '../components/SectionHeader';
import { surprisesConfig } from '../data/surprises';
import { Cake, Sparkles, Clock, PartyPopper } from 'lucide-react';

export const BirthdayCountdown = () => {
  const config = surprisesConfig.countdown;

  const calculateTimeLeft = () => {
    const target = new Date(config.targetDate).getTime();
    const now = new Date().getTime();
    const difference = target - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0, isZero: true };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
      isZero: false
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [hasCelebrated, setHasCelebrated] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      const updated = calculateTimeLeft();
      setTimeLeft(updated);

      if (updated.isZero && !hasCelebrated) {
        setHasCelebrated(true);
        triggerBirthdayCelebration();
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [hasCelebrated]);

  const triggerBirthdayCelebration = () => {
    // Grand celebration fireworks effect
    const count = config.celebrationConfettiCount || 200;
    const defaults = {
      origin: { y: 0.7 }
    };

    const fire = (particleRatio, opts) => {
      confetti({
        ...defaults,
        ...opts,
        particleCount: Math.floor(count * particleRatio)
      });
    };

    fire(0.25, { spread: 26, startVelocity: 55, colors: ['#f43f5e', '#fda4b2', '#d4af37'] });
    fire(0.2, { spread: 60, colors: ['#f43f5e', '#ffffff', '#e11d48'] });
    fire(0.35, { spread: 100, decay: 0.91, scalar: 0.8 });
    fire(0.1, { spread: 120, startVelocity: 25, decay: 0.92, colors: ['#ffd700', '#ff69b4'] });
    fire(0.1, { spread: 120, startVelocity: 45 });
  };

  const timeUnits = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds },
  ];

  return (
    <section id="countdown" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto overflow-hidden">
      <SectionHeader
        tag={config.sectionTag}
        heading={config.heading}
        description={config.description}
      />

      {/* Target Birthday Tag */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-romantic-950/70 border border-gold/30 text-gold-light text-sm font-serif">
          <Clock className="w-4 h-4 text-gold" />
          <span>Special Date: {config.birthdayDateFormatted}</span>
        </div>
      </div>

      {/* Celebration Mode or Countdown Display */}
      {timeLeft.isZero ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="glass-card rounded-3xl p-8 sm:p-14 border-2 border-gold/50 text-center shadow-2xl relative overflow-hidden"
        >
          <div className="w-20 h-20 rounded-full bg-romantic-600/30 border-2 border-gold mx-auto flex items-center justify-center text-gold mb-6 shadow-xl">
            <Cake className="w-10 h-10 animate-bounce" />
          </div>

          <h3 className="text-3xl sm:text-5xl font-serif font-bold text-white mb-3">
            <span className="gold-gradient-text">{config.celebrationTitle}</span>
          </h3>

          <p className="text-champagne-100/90 text-lg sm:text-xl font-light max-w-xl mx-auto mb-8">
            {config.celebrationSubtitle}
          </p>

          <button
            onClick={triggerBirthdayCelebration}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-romantic-600 via-rose-500 to-gold text-white font-medium text-sm sm:text-base shadow-xl shadow-romantic-900/50 hover:scale-105 active:scale-95 transition-all"
          >
            <PartyPopper className="w-5 h-5" />
            <span>Pop More Birthday Confetti! 🎊</span>
          </button>
        </motion.div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 max-w-3xl mx-auto">
          {timeUnits.map((unit, idx) => (
            <motion.div
              key={unit.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-card rounded-2xl p-6 sm:p-8 border border-romantic-400/25 text-center flex flex-col justify-center items-center shadow-xl group hover:border-romantic-400/50 transition-colors"
            >
              <div className="font-serif text-4xl sm:text-6xl font-bold rose-gradient-text leading-tight group-hover:scale-105 transition-transform">
                {String(unit.value).padStart(2, '0')}
              </div>
              <div className="text-xs sm:text-sm font-sans uppercase tracking-widest text-champagne-300/70 mt-2 font-medium">
                {unit.label}
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </section>
  );
};
