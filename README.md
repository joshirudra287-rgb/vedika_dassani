# 🌹 Premium Romantic Birthday Surprise Website

A romantic, dreamy, and cinematic birthday surprise website built with **React**, **Vite**, **Tailwind CSS**, and **Framer Motion**.

---

## ✨ Features & Included Sections

1. **Hero / Welcome**: Full-screen romantic introduction with floating keywords, animated typography, and an exploration button.
2. **Birthday Introduction**: Editorial magazine-style personal letter with stats highlights, pull-quotes, and a framed photo.
3. **Playful Yes/No Question**: Interactive proposal where the **NO** button playfully evades touches/clicks inside the screen with funny excuses, while clicking **YES** triggers a confetti celebration, reveals a special photo, and displays a personal letter.
4. **Our Memories Gallery**: Polaroid photos with tilt & handwritten notes, modern editorial cards, and wide cinematic cards with video playback and a full-screen lightbox modal.
5. **Our Journey Timeline**: Elegant relationship milestones with dates, quotes, story descriptions, and memories.
6. **Reasons Why I Love You**: 3D interactive flip cards that smoothly flip on click to reveal personal reasons. Unlimited cards supported.
7. **Open When Letters & Chapters**: Clickable interactive envelopes (Open when you miss me, sad, need a hug, etc.) with parchment paper modal reveals, plus a multi-chapter long love letter.
8. **Luxury Music Player**: Custom audio player with play/pause, seek bar, track selector, and vinyl rotation. Zero autoplay (user-controlled only). Includes a floating audio dock pill for easy access anywhere on the page.
9. **Live Birthday Countdown**: Real-time days, hours, minutes, seconds countdown to her birthday. Automatically bursts into fireworks/confetti when the clock hits zero.
10. **Secret Surprise Gift Box**: Animated 3D gift box with ribbon and a password-protected intimacy vault (default password: `love`). Unlocks a secret letter, hidden photo, and a VIP romantic getaway ticket.
11. **Final Ending & Birthday Voucher**: Heartfelt closing message, final special photo, printable "Whatever You Wish" Birthday Voucher, and a "Send Virtual Kiss 💋" button with floating kiss animation.

---

## 🚀 Quick Start

To run the development server locally:

```bash
npm run dev
```

Then open `http://localhost:3000` or the URL printed in your terminal.

To build for production:

```bash
npm run build
```

---

## 💌 How To Customize Content (No Coding Needed!)

All text, images, videos, audio, dates, and secrets are stored in `src/data/`. You never need to touch the UI code to customize the site.

| Config File | What You Can Customize |
|---|---|
| `src/data/hero.js` | Recipient name, nickname, title, romantic dedication, background image, floating words. |
| `src/data/birthday.js` | Main personal birthday letter, paragraphs, side portrait photo, relationship stats. |
| `src/data/questions.js` | The playful question, Yes/No button text, evasion phrases, and Yes reveal photo & message. |
| `src/data/memories.js` | Add, edit, or remove photos & videos. Set captions, dates, locations, and polaroid tilt. |
| `src/data/timeline.js` | Add, edit, or reorder relationship milestones, dates, headings, descriptions, and photos. |
| `src/data/reasons.js` | Add unlimited reasons why you love her with custom titles, icons, and reveal text. |
| `src/data/letters.js` | Edit the "Open When..." envelope labels and contents, plus the multi-chapter letter. |
| `src/data/music.js` | Song titles, artists, dedication note, and audio file path (`/music/your-song.mp3`). |
| `src/data/surprises.js` | Birthday countdown date (`targetDate`), secret vault password (default `love`), hint, and gift ticket. |
| `src/data/ending.js` | Final closing letter, final couple photo, and the custom birthday voucher perks. |

---

## 📸 Using Your Own Photos, Music & Videos

Place your local files directly in the `public/` directory:

- **Photos**: Place in `public/images/` and reference them in config as `"/images/my-photo.jpg"`.
- **Music**: Place in `public/music/` and reference in `src/data/music.js` as `"/music/our-song.mp3"`.
- **Videos**: Place in `public/videos/` and reference in `src/data/memories.js` as `"/videos/our-clip.mp4"`.

*(High quality curated online sample assets are already pre-configured as placeholders so everything looks stunning out of the box!)*
