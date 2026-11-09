import React, { useState } from 'react';
import { AmbientPetals } from './components/AmbientPetals';
import { FloatingMusicDock } from './components/FloatingMusicDock';
import { Hero } from './sections/Hero';
import { BirthdayIntro } from './sections/BirthdayIntro';
import { PlayfulQuestion } from './sections/PlayfulQuestion';
import { MemoriesGallery } from './sections/MemoriesGallery';
import { JourneyTimeline } from './sections/JourneyTimeline';
import { ReasonsLove } from './sections/ReasonsLove';
import { OpenWhenLetters } from './sections/OpenWhenLetters';
import { MusicPlayer } from './sections/MusicPlayer';
import { SecretSurprise } from './sections/SecretSurprise';
import { FinalEnding } from './sections/FinalEnding';
import { musicConfig } from './data/music';

export function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(musicConfig.currentTrack);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-night-900 text-champagne-100 relative selection:bg-romantic-600 selection:text-white">
      {/* Background Floating Petals & Ambient Sparkles */}
      <AmbientPetals />

      {/* Main Single Page Long-Scrolling Sections */}
      <main className="relative z-20 flex flex-col w-full">
        {/* Section 1: Hero / Welcome */}
        <Hero onExploreClick={() => scrollToSection('birthday-intro')} />

        {/* Section 2: Birthday Introduction */}
        <BirthdayIntro />

        {/* Section 3: Playful Yes / No Question */}
        <PlayfulQuestion />

        {/* Section 4: Our Memories */}
        <MemoriesGallery />

        {/* Section 5: Our Journey */}
        <JourneyTimeline />

        {/* Section 6: Reasons Why I Love You */}
        <ReasonsLove />

        {/* Section 7: Open When Letters */}
        <OpenWhenLetters />

        {/* Section 8: Music Player */}
        <MusicPlayer
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
          currentTrack={currentTrack}
          setCurrentTrack={setCurrentTrack}
        />

        {/* Section 9: Secret Surprise */}
        <SecretSurprise />

        {/* Section 11: Final Ending */}
        <FinalEnding onScrollToTop={scrollToTop} />
      </main>

      {/* Floating Discreet Audio Dock Controller */}
      <FloatingMusicDock
        isPlaying={isPlaying}
        onTogglePlay={() => setIsPlaying(!isPlaying)}
        onScrollToMusic={() => scrollToSection('music-player')}
        currentTrack={currentTrack}
      />
    </div>
  );
}

export default App;
