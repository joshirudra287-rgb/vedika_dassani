import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Music, Play, Pause } from 'lucide-react';

export const FloatingMusicDock = ({ isPlaying, onTogglePlay, onScrollToMusic, currentTrack }) => {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-2">
      {/* Mini floating pill */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex items-center gap-2 px-3.5 py-2 rounded-full glass-card border border-romantic-400/40 shadow-2xl backdrop-blur-xl"
      >
        <button
          onClick={onScrollToMusic}
          className="flex items-center gap-2 text-xs font-serif text-champagne-100 hover:text-romantic-300 transition-colors pr-1"
          title="Scroll to music player"
        >
          <motion.div
            animate={isPlaying ? { rotate: 360 } : { rotate: 0 }}
            transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
          >
            <Music className="w-4 h-4 text-romantic-400" />
          </motion.div>
          <span className="hidden sm:inline-block max-w-[120px] truncate">
            {currentTrack.title}
          </span>
        </button>

        <button
          onClick={onTogglePlay}
          className="w-8 h-8 rounded-full bg-romantic-600 hover:bg-romantic-500 text-white flex items-center justify-center shadow-md transition-all active:scale-95"
          title={isPlaying ? 'Pause music' : 'Play music'}
        >
          {isPlaying ? (
            <Pause className="w-3.5 h-3.5 fill-white" />
          ) : (
            <Play className="w-3.5 h-3.5 fill-white translate-x-0.5" />
          )}
        </button>
      </motion.div>
    </div>
  );
};
