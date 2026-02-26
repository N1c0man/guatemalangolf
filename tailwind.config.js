/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
  // New Light Resort Theme
  "gg-bg": "#F6F3EE",     // warm ivory background
  "gg-sand": "#EDE7DE",   // soft section background
  "gg-ink": "#1B1B1F",    // deep charcoal text
  "gg-muted": "#5F5F66",  // secondary text
  "gg-lava": "#E6392E",   // lava red accent
  "gg-ember": "#FF7A1A",  // ember hover
  "gg-moss": "#1F7A3E",   // refined golf green
},
      boxShadow: {
        glow: "0 0 0 1px rgba(255,255,255,0.08), 0 30px 80px rgba(0,0,0,0.55)",
      },
      borderRadius: {
        xl2: "1.25rem",
      },

      // ✅ ADD THIS:
      keyframes: {
        emberPulse: {
          "0%, 100%": { opacity: "0.35", transform: "scale(1)" },
          "50%": { opacity: "0.65", transform: "scale(1.08)" },
        },
      },
      animation: {
        emberPulse: "emberPulse 3.6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};