import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionHeader } from '../components/SectionHeader';
import { lettersConfig } from '../data/letters';
import { Mail, Heart, X, BookOpen, Sparkles, Feather } from 'lucide-react';

export const OpenWhenLetters = () => {
  const [selectedEnvelope, setSelectedEnvelope] = useState(null);
  const [activeChapterIndex, setActiveChapterIndex] = useState(0);

  return (
    <section id="letters" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      <SectionHeader
        tag={lettersConfig.sectionTag}
        heading={lettersConfig.heading}
        description={lettersConfig.description}
      />

      {/* Part 1: Clickable Interactive Envelopes Grid */}
      <div className="mb-24">
        <h3 className="text-xl sm:text-2xl font-serif font-bold text-center text-champagne-100 mb-8 flex items-center justify-center gap-2">
          <Mail className="w-5 h-5 text-romantic-400" />
          <span>Interactive Envelopes — Touch To Unseal</span>
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {lettersConfig.envelopes.map((env, index) => (
            <motion.div
              key={env.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ y: -6, scale: 1.02 }}
              onClick={() => setSelectedEnvelope(env)}
              className="group cursor-pointer select-none"
            >
              {/* Envelope Aesthetic Design */}
              <div className="relative rounded-2xl glass-card p-6 border border-romantic-400/25 group-hover:border-romantic-400/60 transition-all duration-300 shadow-xl overflow-hidden envelope-shadow">
                {/* Envelope Flap Design Lines */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-romantic-500 via-gold to-romantic-500" />

                {/* Top Badge & Stamp */}
                <div className="flex items-start justify-between mb-6">
                  <span className="px-3 py-1 rounded-full bg-romantic-950/80 border border-romantic-500/30 text-romantic-300 text-xs font-serif tracking-wider">
                    {env.badge}
                  </span>

                  {/* Stamp Graphic */}
                  <div className="w-12 h-14 border-2 border-dashed border-romantic-400/40 rounded flex flex-col items-center justify-center text-base bg-romantic-950/40">
                    <span>{env.stampIcon}</span>
                    <span className="text-[8px] font-mono uppercase tracking-widest text-romantic-300/80 mt-1">Air Mail</span>
                  </div>
                </div>

                {/* Envelope Title */}
                <div className="my-4 text-center">
                  <h4 className="font-serif font-bold text-xl sm:text-2xl text-white group-hover:text-romantic-300 transition-colors">
                    {env.envelopeTitle}
                  </h4>
                  <p className="text-xs text-champagne-300/60 font-light mt-1">
                    {env.letterDate}
                  </p>
                </div>

                {/* Wax Seal Centerpiece */}
                <div className="mt-6 pt-4 border-t border-romantic-500/15 flex items-center justify-center">
                  <div className="flex items-center gap-2 text-xs font-serif text-romantic-300/80 tracking-wider uppercase group-hover:text-romantic-200">
                    <Heart className="w-4 h-4 text-romantic-500 fill-romantic-500 group-hover:scale-125 transition-transform" />
                    <span>Break Wax Seal & Read</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Part 2: The Long Chaptered Love Letter */}
      <div className="max-w-4xl mx-auto">
        <div className="glass-card rounded-3xl p-6 sm:p-12 border border-romantic-400/30 shadow-2xl relative">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 text-gold text-xs uppercase tracking-widest font-serif mb-2">
              <BookOpen className="w-4 h-4" />
              <span>Multi-Chapter Letter</span>
            </div>
            <h3 className="text-2xl sm:text-4xl font-serif font-bold text-white">
              <span className="rose-gradient-text">{lettersConfig.longLetter.title}</span>
            </h3>
            <p className="text-sm text-champagne-300/70 italic mt-1 font-serif">
              {lettersConfig.longLetter.subtitle}
            </p>
          </div>

          {/* Chapter Selector Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-8 border-b border-romantic-500/20 pb-4">
            {lettersConfig.longLetter.chapters.map((chap, idx) => (
              <button
                key={idx}
                onClick={() => setActiveChapterIndex(idx)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                  activeChapterIndex === idx
                    ? 'bg-romantic-600 text-white shadow-md shadow-romantic-900/50'
                    : 'text-champagne-300/70 hover:text-white hover:bg-white/5'
                }`}
              >
                {chap.chapterNumber}: {chap.chapterTitle}
              </button>
            ))}
          </div>

          {/* Active Chapter Reading View */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeChapterIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="prose prose-invert max-w-none text-champagne-100/90 font-light text-base sm:text-lg leading-relaxed space-y-4"
            >
              <div className="flex items-center gap-2 text-romantic-400 font-serif text-sm tracking-wider uppercase mb-2">
                <Feather className="w-4 h-4" />
                <span>{lettersConfig.longLetter.chapters[activeChapterIndex].chapterNumber}</span>
              </div>
              <h4 className="text-xl sm:text-2xl font-serif font-bold text-white">
                {lettersConfig.longLetter.chapters[activeChapterIndex].chapterTitle}
              </h4>
              <p className="pt-2 text-justify">
                {lettersConfig.longLetter.chapters[activeChapterIndex].content}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Parchment Paper Letter Modal */}
      <AnimatePresence>
        {selectedEnvelope && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
            onClick={() => setSelectedEnvelope(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 20, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-2xl w-full bg-[#fdfbf7] text-[#2c1810] rounded-2xl p-6 sm:p-12 shadow-2xl border-4 border-[#e8d7be] overflow-hidden"
              style={{
                boxShadow: '0 25px 60px -15px rgba(0,0,0,0.8), 0 0 40px rgba(212,175,55,0.2)'
              }}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedEnvelope(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-[#ebdcc8] text-[#4a2e1b] hover:bg-romantic-600 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Parchment Header / Stamp */}
              <div className="flex items-center justify-between border-b border-[#e2cfb4] pb-4 mb-6">
                <div>
                  <span className="text-xs uppercase tracking-widest font-mono text-[#8a5d3b]">
                    Air Mail • Confidential
                  </span>
                  <div className="text-xs text-[#a07855] italic">
                    {selectedEnvelope.letterDate}
                  </div>
                </div>
                <div className="text-2xl">
                  {selectedEnvelope.stampIcon}
                </div>
              </div>

              {/* Salutation */}
              <h3 className="font-serif font-bold text-2xl sm:text-3xl text-[#3b171f] mb-4">
                {selectedEnvelope.salutation}
              </h3>

              {/* Letter Paragraphs */}
              <div className="space-y-4 font-serif text-[#3f271d] text-base sm:text-lg leading-relaxed">
                {selectedEnvelope.body.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>

              {/* Letter Sign-off */}
              <div className="mt-8 pt-6 border-t border-[#e2cfb4]">
                <p className="text-sm font-serif italic text-[#70483c]">
                  {selectedEnvelope.closing}
                </p>
                <p className="font-cursive text-3xl sm:text-4xl text-romantic-700 mt-1">
                  {selectedEnvelope.signature}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
