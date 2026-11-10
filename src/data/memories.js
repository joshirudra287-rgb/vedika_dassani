// Content Configuration: Our Memories Section
export const memoriesConfig = {
  sectionTag: "Captured In Time",
  heading: "Our Cherished Memories",
  description: "A digital scrapbook of the laughter, the quiet adventures, and the little fleeting seconds that became my absolute favorite memories.",

  // Filter categories or tags (optional, for organized viewing)
  categories: ["All", "Adventures", "Sweet Dates", "Candid Moments"],

  // Memories collection - easily add, remove, or change items
  // type: 'image' or 'video'
  // layout: 'polaroid' | 'editorial' | 'wide' | 'portrait'
  items: [
    {
      id: 1,
      type: "image",
      layout: "polaroid",
      category: "Adventures",
      title: "That Radiant Golden Smile",
      date: "",
      src: "/images/golden-hour-smile.jpg",
      caption: "Your smile lights up my entire world brighter than any golden sunset ever could.",
      rotate: "-3deg",
      location: ""
    },
    {
      id: 2,
      type: "image",
      layout: "editorial",
      category: "Sweet Dates",
      title: "Our First Dayout Together",
      date: "",
      src: "/images/our-first-dayout.jpg",
      caption: "Every single moment spent with you is my absolute favorite place to be.",
      rotate: "2deg",
      location: ""
    },
    {
      id: 3,
      type: "image",
      layout: "wide",
      category: "Adventures",
      title: "Stargazing By The Lake",
      date: "",
      src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1400&q=80",
      caption: "Wrapped in two thick blankets, pointing out constellations we completely made up.",
      rotate: "0deg",
      location: ""
    },
    {
      id: 4,
      type: "image",
      layout: "polaroid",
      category: "Candid Moments",
      title: "Your Uncontrollable Giggles",
      date: "",
      src: "/images/uncontrollable-giggles.jpg",
      caption: "Caught you right mid-laugh while trying to take a serious aesthetic picture.",
      rotate: "4deg",
      location: ""
    },
    {
      id: 5,
      type: "image",
      layout: "editorial",
      category: "Sweet Dates",
      title: "This Is How I See You In Future",
      date: "",
      src: "/images/marwari-bindani.jpg",
      caption: "Meri Marwari Bindani ❤️",
      rotate: "-2deg",
      location: ""
    },
    {
      id: 6,
      type: "video",
      layout: "wide",
      category: "Adventures",
      title: "Ocean Breeze & Whispers",
      date: "",
      // Sample high quality aesthetic video, or replace with local '/videos/our-clip.mp4'
      src: "https://assets.mixkit.co/videos/preview/mixkit-young-couple-walking-on-the-beach-at-sunset-41221-large.mp4",
      poster: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
      caption: "The sound of waves and your soft hand holding mine as the dusk faded into violet.",
      rotate: "1deg",
      location: ""
    }
  ]
};
