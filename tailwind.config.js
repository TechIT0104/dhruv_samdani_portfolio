/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#1a1410', // near-black brown ink
        parchment: '#f4e8cc', // aged paper
        parch2: '#ecdcb6',
        parch3: '#e3cf9e',
        blood: '#d7263d', // One Piece red
        gold: '#f5b301', // treasure gold
        ocean: '#1f7fb5', // sea blue
        hero: '#2e6fb0', // Invincible blue
        pow: '#ffd23f', // Invincible yellow
        leaf: '#3a8f5b',
      },
      fontFamily: {
        bangers: ['Bangers', 'cursive'],
        anton: ['Anton', 'sans-serif'],
        wanted: ['"Special Elite"', 'monospace'],
        body: ['Outfit', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        comic: '5px 5px 0 #1a1410',
        comiclg: '9px 9px 0 #1a1410',
        comicxl: '14px 14px 0 #1a1410',
        pow: '5px 5px 0 #d7263d',
      },
      dropShadow: {
        ink: '3px 3px 0 #1a1410',
      },
      keyframes: {
        floaty: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        driftbg: {
          '0%': { backgroundPosition: '0 0' },
          '100%': { backgroundPosition: '24px 24px' },
        },
        wobble: {
          '0%,100%': { transform: 'rotate(-2deg)' },
          '50%': { transform: 'rotate(2deg)' },
        },
        popin: {
          '0%': { transform: 'scale(0) rotate(-12deg)', opacity: '0' },
          '70%': { transform: 'scale(1.15) rotate(4deg)', opacity: '1' },
          '100%': { transform: 'scale(1) rotate(-4deg)', opacity: '1' },
        },
        ticker: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        floaty: 'floaty 6s ease-in-out infinite',
        driftbg: 'driftbg 3s linear infinite',
        wobble: 'wobble 4s ease-in-out infinite',
        popin: 'popin 0.45s cubic-bezier(.18,1.4,.4,1) both',
        ticker: 'ticker 22s linear infinite',
      },
    },
  },
  plugins: [],
}
