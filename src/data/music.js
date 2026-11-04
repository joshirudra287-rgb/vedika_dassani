// Content Configuration: Music Player Section
export const musicConfig = {
  sectionTag: "Our Soundtrack",
  heading: "The Melody of Us",
  description: "Press play to fill the room with sweet acoustic notes as you experience this celebration. Every great love story deserves its own background score.",

  // Primary song information
  currentTrack: {
    title: "Can't Help Falling in Love (Acoustic Dream)",
    artist: "Romantic Melodies for Her",
    album: "Soundtrack of Us",
    // You can replace this with your local audio file path, e.g., '/music/our-song.mp3'
    audioSrc: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
    coverImage: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&w=600&q=80",
    dedication: "“This song will always bring me back to dancing with you in the quiet living room at midnight.”"
  },

  // Playlist of favorite songs (user can switch between them)
  playlist: [
    {
      id: 1,
      title: "Can't Help Falling in Love",
      artist: "Acoustic Melody",
      src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
      duration: "3:45"
    },
    {
      id: 2,
      title: "Golden Hour Glow",
      artist: "Piano & Cello Serenade",
      src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
      duration: "4:12"
    },
    {
      id: 3,
      title: "Midnight Moonlit Waltz",
      artist: "Romantic Strings",
      src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
      duration: "3:30"
    }
  ],

  // Control notes
  notes: {
    autoplayNotice: "Note: Music will only play when you tap play (no sudden loud autoplay).",
    playerHint: "Click anywhere on the waveform or bar to seek."
  }
};
