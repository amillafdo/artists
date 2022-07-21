module.exports = {
  darkMode: "class",
  content: ["./*.html"],
  theme: {
    extend: {
      spacing: {
        big: "48rem",
      },
    },
    screens: {
      se: "375px",
      sm: "390px",
      pixel: "393px",
      md: "768px",
      lg: "1024px",
      lx: "1280px",
    },
    fontFamily: {
      nunito: ["Nunito", "sans-serif"],
    },
    animation: {
      bounce: "bounce 1s infinite",
      ping: "ping 1s infinite",
      spin: "spin 1s infinite",
      pulse: "pulse 1s infinite",
    },
  },
  plugins: [],
};
