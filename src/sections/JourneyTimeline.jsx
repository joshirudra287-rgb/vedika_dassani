import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '../components/SectionHeader';
import { timelineConfig } from '../data/timeline';
import { Calendar, Heart, Sparkles } from 'lucide-react';

export const JourneyTimeline = () => {
  return (
    <section id="journey" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto overflow-hidden">
      <SectionHeader
        tag={timelineConfig.sectionTag}
        heading={timelineConfig.heading}
        description={timelineConfig.description}
      />

      {/* Vertical Timeline Spine */}
      <div className="relative mt-16">
        {/* Central glowing vertical track */}
        <div className="absolute left-4 md:left-1/2 top-4 bottom-4 -translate-x-1/2 w-0.5 bg-gradient-to-b from-romantic-500/10 via-romantic-500/50 to-gold/20" />

        <div className="space-y-12 md:space-y-20">
          {timelineConfig.entries.map((entry, index) => {
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={entry.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row items-start md:items-center ${
                  isEven ? 'md:flex-row-reverse' : ''
                } gap-6 md:gap-12 pl-12 md:pl-0`}
              >
                {/* Center Node / Dot with Heart */}
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 top-6 md:top-1/2 md:-translate-y-1/2 z-20 flex items-center justify-center">
                  <div className="w-9 h-9 rounded-full bg-night-900 border-2 border-romantic-400 flex items-center justify-center shadow-lg shadow-romantic-900/50 group-hover:scale-110 transition-transform">
                    <Heart className="w-4 h-4 text-romantic-400 fill-romantic-500 animate-pulse" />
                  </div>
                </div>

                {/* Timeline Content Card */}
                <div className="w-full md:w-1/2">
                  <div className={`glass-card glass-card-hover p-6 sm:p-8 rounded-2xl border border-romantic-400/25 relative ${
                    isEven ? 'md:text-left' : 'md:text-left'
                  }`}>
                    {/* Date Tag */}
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-romantic-950/80 border border-romantic-500/30 text-romantic-300 text-xs font-medium uppercase tracking-wider mb-3">
                      <Calendar className="w-3 h-3 text-gold" />
                      <span>{entry.date}</span>
                      {entry.tag && <span className="text-romantic-400/80">• {entry.tag}</span>}
                    </div>

                    <h3 className="text-xl sm:text-2xl font-serif font-bold text-white mb-2">
                      {entry.title}
                    </h3>

                    <p className="text-champagne-200/80 text-sm sm:text-base font-light leading-relaxed mb-4">
                      {entry.description}
                    </p>

                    {entry.quote && (
                      <p className="font-cursive text-xl text-gold-light/90 italic mb-4">
                        {entry.quote}
                      </p>
                    )}

                    {/* Optional milestone picture */}
                    {entry.image && (
                      <div className="rounded-xl overflow-hidden aspect-[16/9] border border-romantic-500/20 shadow-md">
                        <img
                          src={entry.image}
                          alt={entry.title}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                        />
                      </div>
                    )}
                  </div>
                </div>

                {/* Empty spacer for the opposite column on desktop */}
                <div className="hidden md:block md:w-1/2" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
