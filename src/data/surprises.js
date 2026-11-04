// Content Configuration: Countdown & Secret Surprise Section
export const surprisesConfig = {
  // --- SECTION 9: BIRTHDAY COUNTDOWN ---
  countdown: {
    sectionTag: "The Big Moment",
    heading: "Counting Down Every Heartbeat",
    description: "Every second ticks closer to the moment we toast to the most special day of the year.",

    // Target birthday date string (ISO format: YYYY-MM-DDTHH:mm:ss)
    // You can set this to her exact upcoming birthday!
    // If the date is already passed or today, the celebration mode activates automatically.
    targetDate: new Date(Date.now() + 1000 * 60 * 60 * 24 * 3 + 1000 * 60 * 45).toISOString(),

    // Alternative display label
    birthdayDateFormatted: "November 24th",

    // Celebration messages displayed when countdown hits zero
    celebrationTitle: "🎉 IT IS OFFICIALLY YOUR BIRTHDAY! 🎂",
    celebrationSubtitle: "Happy Birthday my whole heart! The grand celebration begins right now!",
    celebrationConfettiCount: 250,
  },

  // --- SECTION 10: SECRET SURPRISE ---
  secretSurprise: {
    sectionTag: "Top Secret Vault",
    heading: "A Locked Box Just For You",
    description: "I packed something extra intimate inside this mystery gift vault. Enter the secret password to unwrap what is hidden within.",

    // The secret passcode (case-insensitive for convenience)
    password: "love",
    passwordHint: "💡 Hint: A 4-letter word that describes what I feel for you every single second (starts with L)",

    // Gift box details
    giftBoxTitle: "Tap The Ribbon To Unlock",
    unlockedHeading: "🔓 Vault Unlocked With Love!",

    // Secret revealed content
    secretLetter: {
      salutation: "My Forever Darling,",
      message: "If you unlocked this, you know how much you mean to me. Beyond all the jokes, the gifts, and the celebrations, here is my deepest confession: you made me believe in the absolute beauty of this world again. Every dream I have for the future now has your face in it.",
      hiddenPhoto: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=1000&q=80",
      hiddenPhotoCaption: "Our secret vow — forever you, forever me 🔒❤️",
      goldenTicketTitle: "VIP All-Access Pass: A Dream Weekend Away!",
      goldenTicketDesc: "Valid for: 1 Romantic weekend getaway entirely planned by me — fine dining, scenic cabin or beach resort, zero stress, and endless pampering."
    }
  }
};
