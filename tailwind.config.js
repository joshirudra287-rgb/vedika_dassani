/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        romantic: {
          50: '#fff5f6',
          100: '#ffe4e7',
          200: '#fecdd4',
          300: '#fda4b2',
          400: '#fb7188',
          500: '#f43f5e',
          600: '#e11d48',
          700: '#be123c',
          800: '#9f1239',
          900: '#881337',
          950: '#4c0519',
        },
        champagne: {
          50: '#fdfbf7',
          100: '#f8f4ea',
          200: '#f0e6d2',
          300: '#e5d3b3',
          400: '#d7bc8e',
          500: '#caa36f',
          600: '#ba8e59',
          700: '#9b7247',
          800: '#7f5d3d',
          900: '#684d34',
        },
        gold: {
          light: '#f5e6a3',
          DEFAULT: '#d4af37',
          dark: '#aa820a',
        },
        night: {
          900: '#0c0709',
          800: '#150d11',
          700: '#23151b',
          600: '#341f28',
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Playfair Display', 'Georgia', 'serif'],
        cursive: ['"Great Vibes"', '"Dancing Script"', 'cursive'],
        sans: ['Montserrat', 'Inter', 'sans-serif'],
      },
      animation: {
        'float-slow': 'float 8s ease-in-out infinite',
        'float-medium': 'float 5s ease-in-out infinite',
        'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s infinite linear',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-12px) rotate(2deg)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '0.8', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.03)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        }
      }
    },
  },
  plugins: [],
};
