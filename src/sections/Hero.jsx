import React from 'react';
import { motion } from 'framer-motion';
import { Heart, ChevronDown, Sparkles } from 'lucide-react';
import { heroConfig } from '../data/hero';

export const Hero = ({ onExploreClick }) => {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8 py-20 select-none">
      {/* Background Image with Cinematic Darkness Vignette */}
      <div className="absolute inset-0 z-0">
        <motion.div
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2.2, ease: 'easeOut' }}
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: `url("${heroConfig.backgroundImage}")`,
          }}
        />
        {/* Deep romantic overlays */}
        <div
          className="absolute inset-0 bg-gradient-to-b from-night-900/80 via-night-900/60 to-night-900"
          style={{ opacity: heroConfig.overlayOpacity }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_#0c0709_90%)]" />
      </div>

      {/* Floating Ambient Love Keywords */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {heroConfig.floatingWords.map((word, index) => {
          // Semi-random deterministic positioning around screen
          const positions = [
            'top-16 left-8 sm:left-16',
            'top-28 right-8 sm:right-20',
            'bottom-32 left-10 sm:left-24',
            'bottom-24 right-10 sm:right-28',
            'top-1/2 left-4 sm:left-12 -translate-y-1/2',
            'top-1/3 right-6 sm:right-16',
            'bottom-48 left-1/3',
            'top-20 left-1/2 -translate-x-1/2'
          ];
          const pos = positions[index % positions.length];

          return (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 15 }}
              animate={{
                opacity: [0.15, 0.45, 0.15],
                y: [0, -14, 0],
              }}
              transition={{
                duration: 6 + (index % 4) * 2,
                repeat: Infinity,
                delay: index * 0.8,
                ease: 'easeInOut',
              }}
              className={`absolute ${pos} font-serif italic text-xs sm:text-sm tracking-widest text-romantic-300/40 uppercase hidden sm:block`}
            >
              ✦ {word} ✦
            </motion.span>
          );
        })}
      </div>

      {/* Central Content Card */}
      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
        {/* Romantic Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-romantic-950/70 border border-romantic-400/30 text-romantic-200 text-xs sm:text-sm font-medium tracking-widest uppercase mb-6 shadow-lg shadow-romantic-900/30 backdrop-blur-md"
        >
          <Sparkles className="w-3.5 h-3.5 text-gold animate-spin" style={{ animationDuration: '8s' }} />
          <span>{heroConfig.badgeText}</span>
          <Sparkles className="w-3.5 h-3.5 text-gold animate-spin" style={{ animationDuration: '8s' }} />
        </motion.div>

        {/* Large Birthday Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.4 }}
          className="mb-6"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-champagne-200/90 font-normal italic tracking-wide mb-2">
            {heroConfig.titlePart1}
          </h2>
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-bold text-white tracking-tight leading-none drop-shadow-2xl">
            <span className="rose-gradient-text block mt-1 pb-2">
              {heroConfig.recipientName}
            </span>
          </h1>
          <p className="font-cursive text-2xl sm:text-3xl md:text-4xl text-romantic-300 mt-2 font-normal">
            {heroConfig.titlePart2}
          </p>
        </motion.div>

        {/* Delicate divider with heart */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="flex items-center justify-center gap-4 w-full max-w-xs my-3"
        >
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-romantic-400/50 to-transparent" />
          <Heart className="w-4 h-4 text-romantic-400 fill-romantic-500 animate-pulse" />
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-romantic-400/50 to-transparent" />
        </motion.div>

        {/* Subtitle / Long Personal Dedication */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="max-w-2xl text-champagne-100/85 text-base sm:text-lg md:text-xl font-light leading-relaxed my-4 text-center px-4"
        >
          {heroConfig.subtitle}
        </motion.p>

        {/* Call to action button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.1 }}
          className="mt-6 flex flex-col items-center gap-3"
        >
          <button
            onClick={onExploreClick}
            className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-romantic-600 via-romantic-500 to-rose-600 text-white font-medium text-base tracking-wide shadow-xl shadow-romantic-900/50 hover:shadow-2xl hover:shadow-romantic-600/40 hover:scale-105 active:scale-95 transition-all duration-300 border border-romantic-400/40"
          >
            <span>{heroConfig.ctaButtonText}</span>
            <Heart className="w-4 h-4 fill-white text-white group-hover:scale-125 transition-transform duration-300" />
            {/* Shimmer light overlay */}
            <div className="absolute inset-0 rounded-full overflow-hidden pointer-events-none">
              <div className="w-1/2 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-[-150%] group-hover:translate-x-[250%] transition-transform duration-1000" />
            </div>
          </button>

          <span className="text-xs text-romantic-300/60 font-light tracking-wider italic mt-1">
            {heroConfig.musicPrompt}
          </span>
        </motion.div>
      </div>

      {/* Down indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        onClick={onExploreClick}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 cursor-pointer text-romantic-300/70 hover:text-romantic-300 transition-colors"
      >
        <ChevronDown className="w-6 h-6" />
      </motion.div>
    </section>
  );
};
