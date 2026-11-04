import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '../components/SectionHeader';
import { reasonsConfig } from '../data/reasons';
import {
  Sparkles,
  HeartHandshake,
  Laugh,
  ShieldAlert,
  Shield,
  Moon,
  Flame,
  Coffee,
  Infinity as InfinityIcon,
  Heart,
  RotateCw
} from 'lucide-react';

// Safe icon map helper
const getIcon = (name) => {
  switch (name) {
    case 'Sparkles': return Sparkles;
    case 'HeartHandshake': return HeartHandshake;
    case 'Laugh': return Laugh;
    case 'ShieldHeart': return Shield;
    case 'MoonStar': return Moon;
    case 'Flame': return Flame;
    case 'Coffee': return Coffee;
    case 'Infinity': return InfinityIcon;
    default: return Heart;
  }
};

export const ReasonsLove = () => {
  // Store an object or set of flipped card IDs
  const [flippedCards, setFlippedCards] = useState({});

  const toggleFlip = (id) => {
    setFlippedCards((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section id="reasons" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      <SectionHeader
        tag={reasonsConfig.sectionTag}
        heading={reasonsConfig.heading}
        description={reasonsConfig.description}
      />

      {/* Grid of Interactive 3D Flip Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {reasonsConfig.cards.map((card, index) => {
          const isFlipped = !!flippedCards[card.id];
          const IconComponent = getIcon(card.iconName);

          return (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="perspective-1000 h-80 w-full cursor-pointer select-none"
              onClick={() => toggleFlip(card.id)}
            >
              <div
                className={`relative w-full h-full transition-transform duration-700 transform-style-3d ${
                  isFlipped ? 'rotate-y-180' : ''
                }`}
              >
                {/* FRONT OF CARD */}
                <div className="absolute inset-0 backface-hidden rounded-2xl glass-card p-6 flex flex-col justify-between border border-romantic-400/25 hover:border-romantic-400/60 transition-colors shadow-xl group">
                  <div className="flex items-center justify-between">
                    <span className="font-serif text-3xl font-bold text-romantic-500/40 group-hover:text-romantic-400 transition-colors">
                      {card.number}
                    </span>
                    <div className="w-10 h-10 rounded-full bg-romantic-950/80 border border-romantic-500/30 flex items-center justify-center text-romantic-400 group-hover:scale-110 transition-transform">
                      <IconComponent className="w-5 h-5" />
                    </div>
                  </div>

                  <div className="text-center my-auto px-2">
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-white mb-2 leading-snug">
                      {card.previewTitle}
                    </h3>
                    <div className="w-8 h-0.5 bg-romantic-500/40 mx-auto my-3" />
                  </div>

                  <div className="flex items-center justify-center gap-1.5 text-xs text-romantic-300/70 font-medium tracking-wider uppercase group-hover:text-romantic-300">
                    <RotateCw className="w-3.5 h-3.5 animate-spin-slow" />
                    <span>Tap to reveal</span>
                  </div>
                </div>

                {/* BACK OF CARD (REVEALED) */}
                <div className="absolute inset-0 backface-hidden rotate-y-180 rounded-2xl bg-gradient-to-br from-romantic-950 via-night-800 to-night-900 p-6 flex flex-col justify-between border-2 border-romantic-500/60 shadow-2xl shadow-romantic-900/40 text-center">
                  <div className="flex items-center justify-between text-xs text-romantic-300/80 uppercase font-serif tracking-widest">
                    <span>Reason #{card.number}</span>
                    <Heart className="w-4 h-4 fill-romantic-500 text-romantic-500" />
                  </div>

                  <div className="my-auto px-1">
                    <p className="text-champagne-100 font-light text-sm sm:text-base leading-relaxed">
                      "{card.fullReason}"
                    </p>
                    {card.note && (
                      <p className="font-cursive text-xl text-gold-light mt-3">
                        ~ {card.note}
                      </p>
                    )}
                  </div>

                  <div className="text-[11px] text-romantic-400/60 uppercase tracking-widest">
                    Tap to flip back
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
