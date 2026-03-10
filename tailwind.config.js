/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: '#FAF7F0',
        cream: '#F5EFE0',
        terracotta: {
          DEFAULT: '#C4714A',
          light: '#D4896A',
          dark: '#A35A35',
        },
        indigo: {
          deep: '#1A237E',
          mid: '#283593',
          light: '#3949AB',
        },
        gold: {
          DEFAULT: '#B8962E',
          light: '#D4AF5A',
          dark: '#8B6E1A',
        },
        bark: '#2C1810',
      },
      fontFamily: {
        cormorant: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        inter: ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'warm-gradient': 'linear-gradient(135deg, #FAF7F0 0%, #F5EFE0 50%, #EDE4D0 100%)',
        'hero-gradient': 'linear-gradient(160deg, #1A237E 0%, #283593 40%, #1A3A6E 70%, #2C1810 100%)',
      },
      animation: {
        'fade-up': 'fadeUp 0.7s ease forwards',
        'fade-in': 'fadeIn 0.6s ease forwards',
        'shimmer': 'shimmer 2s infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(28px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      boxShadow: {
        'card': '0 4px 24px rgba(26, 35, 126, 0.08)',
        'card-hover': '0 12px 40px rgba(26, 35, 126, 0.16)',
        'gold': '0 4px 20px rgba(184, 150, 46, 0.25)',
      },
      letterSpacing: {
        'widest-2': '0.25em',
      }
    },
  },
  plugins: [],
}
