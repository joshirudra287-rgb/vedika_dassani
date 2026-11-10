// Content Configuration: Music Player Section
export const musicConfig = {
  sectionTag: "Our Soundtrack",
  heading: "The Melody of Us",
  description: "Press play to fill the room with sweet acoustic notes as you experience this celebration. Every great love story deserves its own background score.",

  // Primary song information
  currentTrack: {
    title: "Tu Kitte Jaake Mangeya Si Mainu",
    artist: "Romantic Melody for Her",
    album: "Our Forever Soundtrack",
    audioSrc: "/music/tu-kitte-jaake-mangeya-si.mp3",
    coverImage: "/images/timeline-couple-candid.jpg",
    dedication: "“Das kive kitti tu mere layi dua si... Tu kitte jaake mangeya si mainu, jo ainna tainu chaun lag gayi ❤️”"
  },

  // Playlist of favorite songs (user can switch between them)
  playlist: [
    {
      id: 1,
      title: "Tu Kitte Jaake Mangeya Si Mainu",
      artist: "Romantic Melody for Her",
      src: "/music/tu-kitte-jaake-mangeya-si.mp3",
      duration: "4:15"
    }
  ],

  // Control notes
  notes: {
    autoplayNotice: "Note: Music will only play when you tap play (no sudden loud autoplay).",
    playerHint: "Click anywhere on the waveform or bar to seek."
  }
};
