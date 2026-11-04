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
      title: "Our Golden Hour Walk",
      date: "October 14, 2024",
      src: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=1000&q=80",
      caption: "The golden sun was pretty, but nowhere near as luminous as your smile when you laughed.",
      rotate: "-3deg",
      location: "Sunset Pier"
    },
    {
      id: 2,
      type: "image",
      layout: "editorial",
      category: "Sweet Dates",
      title: "First Rainy Cafe Afternoon",
      date: "November 28, 2024",
      src: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1000&q=80",
      caption: "Sharing one warm cinnamon latte, listening to the rain tap gently against the glass pane.",
      rotate: "2deg",
      location: "Little Corner Cafe"
    },
    {
      id: 3,
      type: "image",
      layout: "wide",
      category: "Adventures",
      title: "Stargazing By The Lake",
      date: "January 05, 2025",
      src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1400&q=80",
      caption: "Wrapped in two thick blankets, pointing out constellations we completely made up.",
      rotate: "0deg",
      location: "Pine Lake Lookout"
    },
    {
      id: 4,
      type: "image",
      layout: "polaroid",
      category: "Candid Moments",
      title: "Your Uncontrollable Giggles",
      date: "February 14, 2025",
      src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=1000&q=80",
      caption: "Caught you right mid-laugh while trying to take a serious aesthetic picture.",
      rotate: "4deg",
      location: "City Botanical Garden"
    },
    {
      id: 5,
      type: "image",
      layout: "editorial",
      category: "Sweet Dates",
      title: "Baking Midnight Cookies",
      date: "April 20, 2025",
      src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1000&q=80",
      caption: "Flour on our noses, burning the first batch, and dancing in the kitchen to vintage jazz.",
      rotate: "-2deg",
      location: "Our Cozy Kitchen"
    },
    {
      id: 6,
      type: "video",
      layout: "wide",
      category: "Adventures",
      title: "Ocean Breeze & Whispers",
      date: "July 12, 2025",
      // Sample high quality aesthetic video, or replace with local '/videos/our-clip.mp4'
      src: "https://assets.mixkit.co/videos/preview/mixkit-young-couple-walking-on-the-beach-at-sunset-41221-large.mp4",
      poster: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
      caption: "The sound of waves and your soft hand holding mine as the dusk faded into violet.",
      rotate: "1deg",
      location: "Pacific Coastline"
    }
  ]
};
