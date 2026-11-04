import React from 'react';
import { motion } from 'framer-motion';

export const SectionHeader = ({ tag, heading, description, align = 'center', className = '' }) => {
  const isCenter = align === 'center';

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className={`mb-12 md:mb-16 ${isCenter ? 'text-center mx-auto' : 'text-left'} max-w-3xl ${className}`}
    >
      {tag && (
        <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-romantic-950/70 border border-romantic-500/25 text-romantic-300 text-xs md:text-sm font-medium tracking-widest uppercase mb-4 shadow-sm backdrop-blur-md`}>
          <span className="w-1.5 h-1.5 rounded-full bg-romantic-500 animate-ping" />
          <span>{tag}</span>
        </div>
      )}

      {heading && (
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-tight leading-tight mb-4">
          <span className="rose-gradient-text">{heading}</span>
        </h2>
      )}

      {/* Decorative hairline */}
      <div className={`flex items-center gap-3 my-4 ${isCenter ? 'justify-center' : 'justify-start'}`}>
        <div className="h-px w-12 bg-gradient-to-r from-transparent to-romantic-500/50" />
        <span className="text-romantic-400 text-xs">❦</span>
        <div className="h-px w-12 bg-gradient-to-l from-transparent to-romantic-500/50" />
      </div>

      {description && (
        <p className="text-champagne-200/80 text-base md:text-lg font-light leading-relaxed">
          {description}
        </p>
      )}
    </motion.div>
  );
};
