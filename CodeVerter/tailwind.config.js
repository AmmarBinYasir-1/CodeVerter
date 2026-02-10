/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      animation: {
        'pulse': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin': 'spin 1s linear infinite',
      },
      fontFamily: {
        'orbitron': ['Orbitron', 'sans-serif'],
        'space-mono': ['Space Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}
