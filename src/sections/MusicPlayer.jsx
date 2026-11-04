import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '../components/SectionHeader';
import { musicConfig } from '../data/music';
import {
  Play,
  Pause,
  SkipForward,
  SkipBack,
  Volume2,
  VolumeX,
  Music,
  Disc3,
  Heart
} from 'lucide-react';

export const MusicPlayer = ({ isPlaying, setIsPlaying, currentTrack, setCurrentTrack }) => {
  const audioRef = useRef(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.8);
  const [isMuted, setIsMuted] = useState(false);
  const [currentPlaylistIdx, setCurrentPlaylistIdx] = useState(0);

  // Fallback Web Audio Synthesizer in case MP3 file fails to load or offline
  const synthRef = useRef(null);
  const synthTimerRef = useRef(null);

  const startFallbackMelody = () => {
    try {
      if (!window.AudioContext && !window.webkitAudioContext) return;
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!synthRef.current) {
        synthRef.current = new AudioCtx();
      }
      const ctx = synthRef.current;
      if (ctx.state === 'suspended') ctx.resume();

      // Soft romantic piano/harp note frequencies
      const notes = [261.63, 329.63, 392.00, 523.25, 440.00, 349.23, 329.63, 293.66]; // C E G C A F E D
      let noteIndex = 0;

      synthTimerRef.current = setInterval(() => {
        if (!ctx) return;
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(notes[noteIndex % notes.length], ctx.currentTime);

        gain.gain.setValueAtTime(0.08 * (isMuted ? 0 : volume), ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 1.8);

        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();
        osc.stop(ctx.currentTime + 1.8);

        noteIndex++;
      }, 600);
    } catch (e) {
      console.warn('Synth playback error:', e);
    }
  };

  const stopFallbackMelody = () => {
    if (synthTimerRef.current) {
      clearInterval(synthTimerRef.current);
      synthTimerRef.current = null;
    }
  };

  // Synchronize audio element state
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise.catch((error) => {
          console.log('Audio file error or user interaction blocked, starting romantic synth fallback:', error);
          startFallbackMelody();
        });
      }
    } else {
      audio.pause();
      stopFallbackMelody();
    }
  }, [isPlaying, currentTrack]);

  useEffect(() => {
    return () => stopFallbackMelody();
  }, []);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
      setDuration(audioRef.current.duration || 0);
    }
  };

  const handleSeek = (e) => {
    const seekTime = parseFloat(e.target.value);
    if (audioRef.current) {
      audioRef.current.currentTime = seekTime;
      setCurrentTime(seekTime);
    }
  };

  const handleVolumeChange = (e) => {
    const newVol = parseFloat(e.target.value);
    setVolume(newVol);
    if (audioRef.current) {
      audioRef.current.volume = newVol;
    }
    setIsMuted(newVol === 0);
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const switchTrack = (index) => {
    const nextIdx = (index + musicConfig.playlist.length) % musicConfig.playlist.length;
    setCurrentPlaylistIdx(nextIdx);
    const track = musicConfig.playlist[nextIdx];
    setCurrentTrack({
      ...musicConfig.currentTrack,
      title: track.title,
      artist: track.artist,
      audioSrc: track.src,
    });
    setIsPlaying(true);
  };

  const formatTime = (secs) => {
    if (isNaN(secs)) return '0:00';
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  return (
    <section id="music-player" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto overflow-hidden">
      {/* Hidden Audio Tag */}
      <audio
        ref={audioRef}
        src={currentTrack.audioSrc}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleTimeUpdate}
        onEnded={() => switchTrack(currentPlaylistIdx + 1)}
        onError={() => {
          if (isPlaying) startFallbackMelody();
        }}
      />

      <SectionHeader
        tag={musicConfig.sectionTag}
        heading={musicConfig.heading}
        description={musicConfig.description}
      />

      {/* Main Luxury Player Card */}
      <div className="glass-card rounded-3xl p-6 sm:p-10 border border-romantic-400/30 shadow-2xl relative overflow-hidden">
        {/* Glow backdrop */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-romantic-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          {/* Vinyl / Album Art with Rotation */}
          <div className="relative group shrink-0">
            <motion.div
              animate={isPlaying ? { rotate: 360 } : { rotate: 0 }}
              transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
              className="w-48 h-48 sm:w-56 sm:h-56 rounded-full p-2 bg-gradient-to-tr from-night-900 via-romantic-950 to-night-800 border-4 border-romantic-500/30 shadow-2xl flex items-center justify-center relative"
            >
              <div className="w-full h-full rounded-full overflow-hidden relative border-2 border-night-900">
                <img
                  src={currentTrack.coverImage}
                  alt={currentTrack.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/25" />
              </div>

              {/* Center Vinyl Spindle Hole */}
              <div className="absolute w-12 h-12 rounded-full bg-night-900 border-2 border-gold/40 flex items-center justify-center">
                <Disc3 className="w-5 h-5 text-gold animate-spin" style={{ animationDuration: '4s' }} />
              </div>
            </motion.div>
          </div>

          {/* Controls & Track Info */}
          <div className="flex-1 w-full text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-romantic-950/80 border border-romantic-500/20 text-romantic-300 text-xs font-serif tracking-widest uppercase mb-3">
              <Music className="w-3.5 h-3.5 text-gold" />
              <span>{currentTrack.album}</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white mb-1">
              {currentTrack.title}
            </h3>
            <p className="text-romantic-300/80 font-medium text-sm mb-4">
              {currentTrack.artist}
            </p>

            <p className="text-champagne-300/80 text-xs sm:text-sm font-serif italic mb-6">
              {currentTrack.dedication}
            </p>

            {/* Progress Bar & Timers */}
            <div className="w-full mb-6">
              <input
                type="range"
                min="0"
                max={duration || 100}
                value={currentTime}
                onChange={handleSeek}
                className="w-full h-1.5 bg-night-700 rounded-lg appearance-none cursor-pointer accent-romantic-500"
              />
              <div className="flex justify-between text-xs text-champagne-400/60 font-mono mt-1.5">
                <span>{formatTime(currentTime)}</span>
                <span>{formatTime(duration)}</span>
              </div>
            </div>

            {/* Playback Button Controls */}
            <div className="flex items-center justify-center md:justify-start gap-6">
              <button
                onClick={() => switchTrack(currentPlaylistIdx - 1)}
                className="p-2.5 rounded-full text-champagne-300 hover:text-white hover:bg-white/5 transition-colors"
                title="Previous Track"
              >
                <SkipBack className="w-5 h-5" />
              </button>

              <button
                onClick={togglePlay}
                className="w-14 h-14 rounded-full bg-gradient-to-r from-romantic-600 to-rose-600 text-white flex items-center justify-center shadow-lg shadow-romantic-900/60 hover:scale-105 active:scale-95 transition-all border border-romantic-300/30"
                title={isPlaying ? 'Pause' : 'Play'}
              >
                {isPlaying ? (
                  <Pause className="w-6 h-6 fill-white" />
                ) : (
                  <Play className="w-6 h-6 fill-white translate-x-0.5" />
                )}
              </button>

              <button
                onClick={() => switchTrack(currentPlaylistIdx + 1)}
                className="p-2.5 rounded-full text-champagne-300 hover:text-white hover:bg-white/5 transition-colors"
                title="Next Track"
              >
                <SkipForward className="w-5 h-5" />
              </button>

              {/* Volume Slider */}
              <div className="hidden sm:flex items-center gap-2 ml-4">
                <button
                  onClick={toggleMute}
                  className="text-champagne-400 hover:text-white transition-colors"
                >
                  {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                </button>
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.05"
                  value={isMuted ? 0 : volume}
                  onChange={handleVolumeChange}
                  className="w-20 h-1 bg-night-700 rounded-lg appearance-none cursor-pointer accent-romantic-500"
                />
              </div>
            </div>

            {/* Autoplay Disclaimer */}
            <p className="text-[11px] text-romantic-300/50 italic mt-6">
              {musicConfig.notes.autoplayNotice}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
