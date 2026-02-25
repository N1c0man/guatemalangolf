/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Guatemalan Golf theme
        "gg-ink": "#07070A",     // near-black
        "gg-ash": "#121218",     // soft charcoal
        "gg-lava": "#FF3B30",    // lava red
        "gg-ember": "#FF6A00",   // ember orange
        "gg-moss": "#1DB954",    // optional green accent
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(255,255,255,0.08), 0 30px 80px rgba(0,0,0,0.55)",
      },
      borderRadius: {
        xl2: "1.25rem",
      },
    },
  },
  plugins: [],
};