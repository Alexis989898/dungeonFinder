/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    extend: {
      backgroundImage: {
        'test': "url('./src/assets/MonsterManualTraditionalCover.webp')",
        'footer-texture': "url('/img/footer-texture.png')",
      }
    },
    animation: {
      fadeInDown: 'fadeInDown 0.5s ease-out forwards',
      fadeOutUp: 'fadeOutUp 0.5s ease-out forwards',
    },
  },
}
