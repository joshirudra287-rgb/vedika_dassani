import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '../components/SectionHeader';
import { birthdayConfig } from '../data/birthday';
import { Sparkles, Quote, Heart } from 'lucide-react';

export const BirthdayIntro = () => {
  return (
    <section id="birthday-intro" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      {/* Decorative ambient background glows */}
      <div className="ambient-glow -top-24 -left-24 w-96 h-96 bg-romantic-600/10" />
      <div className="ambient-glow -bottom-24 -right-24 w-96 h-96 bg-gold/10" />

      <SectionHeader
        tag={birthdayConfig.sectionTag}
        heading={birthdayConfig.heading}
        description={birthdayConfig.leadParagraph}
      />

      {/* Modern Editorial Magazine Split Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Column: Framed Editorial Portrait & Romantic Stats */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="lg:col-span-5 flex flex-col items-center"
        >
          {/* Framed Image */}
          <div className="relative group w-full max-w-md">
            {/* Romantic frame border with gold glow */}
            <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-romantic-600/30 via-gold/30 to-romantic-400/20 blur-md group-hover:blur-lg transition-all duration-500 opacity-70" />
            
            <div className="relative rounded-2xl overflow-hidden glass-card p-3 border border-romantic-400/30">
              <div className="aspect-[4/5] rounded-xl overflow-hidden relative">
                <img
                  src={birthdayConfig.featuredImage}
                  alt={birthdayConfig.imageCaption}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-night-900/80 via-transparent to-transparent" />
                
                <div className="absolute bottom-4 left-4 right-4 text-center">
                  <p className="font-serif italic text-sm text-champagne-100/90 drop-shadow">
                    "{birthdayConfig.imageCaption}"
                  </p>
                </div>
              </div>
            </div>

            {/* Corner Badge */}
            <div className="absolute -top-3 -right-3 w-12 h-12 rounded-full bg-romantic-600 border-2 border-white/40 flex items-center justify-center text-white shadow-xl shadow-romantic-900/50">
              <Sparkles className="w-5 h-5 text-gold-light" />
            </div>
          </div>

          {/* Sweet Stats Grid */}
          <div className="grid grid-cols-2 gap-3 w-full max-w-md mt-6">
            {birthdayConfig.stats.map((stat, idx) => (
              <div
                key={idx}
                className="glass-card p-3.5 rounded-xl border border-romantic-500/20 text-center"
              >
                <div className="text-sm sm:text-base font-serif font-bold text-romantic-300">
                  {stat.value}
                </div>
                <div className="text-xs text-champagne-300/70 font-light mt-0.5">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right Column: Long Personal Letter / Paragraphs */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.9, delay: 0.2, ease: 'easeOut' }}
          className="lg:col-span-7 flex flex-col justify-center"
        >
          <div className="glass-card p-6 sm:p-10 rounded-3xl border border-romantic-400/20 relative shadow-2xl">
            {/* Watermark Quote Icon */}
            <Quote className="absolute top-6 right-6 w-16 h-16 text-romantic-500/10 pointer-events-none" />

            {/* Paragraphs with Drop Cap on the first paragraph */}
            <div className="space-y-6 text-champagne-100/90 font-light text-base sm:text-lg leading-relaxed">
              {birthdayConfig.paragraphs.map((p, idx) => {
                if (idx === 0) {
                  return (
                    <p key={idx} className="relative first-letter:float-left first-letter:text-5xl first-letter:font-serif first-letter:font-bold first-letter:text-romantic-400 first-letter:mr-3 first-letter:leading-none">
                      {p}
                    </p>
                  );
                }
                return <p key={idx}>{p}</p>;
              })}
            </div>

            {/* Signature Area */}
            <div className="mt-10 pt-6 border-t border-romantic-500/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <p className="text-xs font-serif uppercase tracking-widest text-romantic-300/80">
                  {birthdayConfig.signatureGreeting}
                </p>
                <p className="font-cursive text-2xl sm:text-3xl text-romantic-400 mt-1">
                  {birthdayConfig.senderName}
                </p>
              </div>

              <div className="inline-flex items-center gap-2 text-gold text-xs sm:text-sm font-serif italic">
                <Heart className="w-4 h-4 fill-romantic-500 text-romantic-500" />
                <span>Happy Birthday To My Favorite Soul</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
