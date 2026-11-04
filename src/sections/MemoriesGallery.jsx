import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionHeader } from '../components/SectionHeader';
import { memoriesConfig } from '../data/memories';
import { Calendar, MapPin, Play, X, ZoomIn, Film } from 'lucide-react';

export const MemoriesGallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activeMedia, setActiveMedia] = useState(null);

  const filteredItems = selectedCategory === "All"
    ? memoriesConfig.items
    : memoriesConfig.items.filter(item => item.category === selectedCategory);

  return (
    <section id="memories" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <SectionHeader
        tag={memoriesConfig.sectionTag}
        heading={memoriesConfig.heading}
        description={memoriesConfig.description}
      />

      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
        {memoriesConfig.categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${
              selectedCategory === cat
                ? 'bg-romantic-600 text-white shadow-lg shadow-romantic-900/50 border border-romantic-400/40'
                : 'bg-night-800/80 text-champagne-300/70 hover:text-white hover:bg-night-700/80 border border-white/5'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Dynamic Mixed Layout Gallery Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
        <AnimatePresence>
          {filteredItems.map((item, index) => {
            if (item.layout === 'polaroid') {
              // Authentic Polaroid Style Layout
              return (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="flex justify-center"
                >
                  <div
                    onClick={() => setActiveMedia(item)}
                    style={{ transform: `rotate(${item.rotate || '0deg'})` }}
                    className="polaroid-frame p-4 pb-6 rounded-sm cursor-pointer w-full max-w-sm"
                  >
                    {/* Photo container */}
                    <div className="aspect-[4/5] bg-gray-100 overflow-hidden relative group">
                      <img
                        src={item.src}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <span className="p-2 rounded-full bg-white/90 text-night-900">
                          <ZoomIn className="w-5 h-5" />
                        </span>
                      </div>
                    </div>

                    {/* Polaroid Handwritten Caption Area */}
                    <div className="mt-4 px-1 text-night-900">
                      <h4 className="font-serif font-bold text-lg leading-tight text-gray-900">
                        {item.title}
                      </h4>
                      <p className="font-cursive text-xl text-romantic-600 mt-1 leading-snug">
                        {item.caption}
                      </p>
                      <div className="flex items-center justify-between text-[11px] text-gray-500 mt-3 pt-2 border-t border-gray-100 font-sans uppercase tracking-wider">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3 text-romantic-500" />
                          {item.date}
                        </span>
                        {item.location && (
                          <span className="flex items-center gap-1">
                            <MapPin className="w-3 h-3 text-romantic-500" />
                            {item.location}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            }

            if (item.type === 'video' || item.layout === 'wide') {
              // Wide Cinematic Card / Video Card
              return (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="md:col-span-2 lg:col-span-2"
                >
                  <div
                    onClick={() => setActiveMedia(item)}
                    className="glass-card glass-card-hover rounded-2xl overflow-hidden p-3 border border-romantic-400/20 cursor-pointer group"
                  >
                    <div className="aspect-[16/9] sm:aspect-[21/9] rounded-xl overflow-hidden relative bg-night-900">
                      {item.type === 'video' ? (
                        <>
                          <video
                            src={item.src}
                            poster={item.poster}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                            muted
                            loop
                            playsInline
                            autoPlay
                          />
                          <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-romantic-950/80 border border-romantic-500/40 text-romantic-300 text-xs font-medium flex items-center gap-1.5 backdrop-blur-md">
                            <Film className="w-3.5 h-3.5 text-romantic-400" />
                            <span>Moving Memory</span>
                          </div>
                        </>
                      ) : (
                        <img
                          src={item.src}
                          alt={item.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                          loading="lazy"
                        />
                      )}

                      <div className="absolute inset-0 bg-gradient-to-t from-night-900 via-night-900/20 to-transparent" />

                      <div className="absolute bottom-4 left-4 right-4 flex flex-col sm:flex-row sm:items-end justify-between gap-2">
                        <div>
                          <span className="text-xs font-serif text-romantic-300 uppercase tracking-widest">
                            {item.date} • {item.location}
                          </span>
                          <h4 className="text-xl sm:text-2xl font-serif font-bold text-white mt-0.5">
                            {item.title}
                          </h4>
                          <p className="text-champagne-200/80 text-xs sm:text-sm italic mt-1 line-clamp-2 max-w-xl">
                            "{item.caption}"
                          </p>
                        </div>
                        <div className="self-end p-2.5 rounded-full bg-romantic-600/90 text-white shadow-lg group-hover:scale-110 transition-transform">
                          <ZoomIn className="w-4 h-4" />
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            }

            // Modern Editorial Grid Layout
            return (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <div
                  onClick={() => setActiveMedia(item)}
                  className="glass-card glass-card-hover rounded-2xl overflow-hidden p-3 border border-romantic-400/20 cursor-pointer group"
                >
                  <div className="aspect-[4/5] rounded-xl overflow-hidden relative">
                    <img
                      src={item.src}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-night-900/90 via-night-900/10 to-transparent" />

                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="text-[11px] uppercase tracking-wider text-romantic-300 font-sans">
                        {item.date}
                      </div>
                      <h4 className="text-lg font-serif font-bold text-white mt-1">
                        {item.title}
                      </h4>
                      <p className="text-xs text-champagne-200/80 italic mt-1 font-serif">
                        "{item.caption}"
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {/* Fullscreen Lightbox Modal */}
      <AnimatePresence>
        {activeMedia && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6"
            onClick={() => setActiveMedia(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full glass-card p-3 sm:p-4 rounded-3xl border border-romantic-400/40 shadow-2xl overflow-hidden"
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveMedia(null)}
                className="absolute top-4 right-4 z-20 p-2 rounded-full bg-night-900/80 text-white hover:bg-romantic-600 transition-colors border border-white/20"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="max-h-[75vh] rounded-2xl overflow-hidden bg-black flex items-center justify-center">
                {activeMedia.type === 'video' ? (
                  <video
                    src={activeMedia.src}
                    controls
                    autoPlay
                    className="max-h-[75vh] w-auto mx-auto object-contain"
                  />
                ) : (
                  <img
                    src={activeMedia.src}
                    alt={activeMedia.title}
                    className="max-h-[75vh] w-auto mx-auto object-contain"
                  />
                )}
              </div>

              {/* Lightbox Caption */}
              <div className="p-4 sm:p-6 text-center">
                <span className="text-xs font-serif uppercase tracking-widest text-romantic-400">
                  {activeMedia.date} {activeMedia.location && `• ${activeMedia.location}`}
                </span>
                <h3 className="text-2xl font-serif font-bold text-white mt-1">
                  {activeMedia.title}
                </h3>
                <p className="text-champagne-200/90 text-sm sm:text-base font-light italic mt-2 max-w-xl mx-auto">
                  "{activeMedia.caption}"
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
