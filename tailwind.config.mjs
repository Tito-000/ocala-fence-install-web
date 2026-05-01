/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Brand colors from briefing
        primary: {
          DEFAULT: '#136229',  // Deep green
          50: '#f0faf3',
          100: '#dbf5e1',
          200: '#b8eac6',
          300: '#86d8a1',
          400: '#52bd78',
          500: '#2da25b',
          600: '#1f8147',
          700: '#1a6739',
          800: '#136229',
          900: '#134529',
          950: '#082612',
        },
        accent: {
          DEFAULT: '#62522E',  // Saddle brown
          50: '#f8f5ed',
          100: '#ede4cc',
          200: '#dcc99b',
          300: '#c8a866',
          400: '#b78d44',
          500: '#a07738',
          600: '#825e2e',
          700: '#67492a',
          800: '#62522E',
          900: '#4a3a23',
          950: '#2a2013',
        },
        highlight: {
          DEFAULT: '#D1B487',  // Cream tan
          50: '#faf6ed',
          100: '#f3ead0',
          200: '#e7d29f',
          300: '#D1B487',
          400: '#c69655',
          500: '#bb8042',
          600: '#a06736',
          700: '#825030',
          800: '#6c422c',
          900: '#5b3727',
          950: '#341d13',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        container: '1200px',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
