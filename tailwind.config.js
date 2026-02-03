/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  safelist: ['hover:heartbeat', 'hover\\:heartbeat'],
  theme: {
    extend: {
      colors: { 
        glaucous: '#7D82B8',
      },
      boxShadow: {
        glaucous: '0 0 20px #7D82B8',
      },
      backgroundImage: {
        starfield: "url('/starfield.png')",
        stardust: "url('/images/stardust.png')", // Added for FAQ section
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        glitch: 'glitch 1s infinite',
        moveStars: 'moveStars 60s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-15px)' },
        },
        glitch: {
          '0%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-1px, 1px)' },
          '40%': { transform: 'translate(-1px, -1px)' },
          '60%': { transform: 'translate(1px, 1px)' },
          '80%': { transform: 'translate(1px, -1px)' },
          '100%': { transform: 'translate(0)' },
        },
        moveStars: {
          '0%': { backgroundPosition: '0 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
      },
    },
  },
  plugins: [],
}
