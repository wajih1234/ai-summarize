module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Fixed: Added missing *
  ],
  theme: {
    extend: {
      fontFamily: {
        staoshi: ["Staoshi", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [], // Tailwind plugins go here (not Vite plugins)
};