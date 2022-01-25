module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        background: "#282a36",
        currentLine: "#44475a",
        comment: "#6272a4",
        bgLight: "#343746",
        bgDark: "#21222c",
        bgDarker: "#21222c",
      },
    },
    colors: {
      pink: "#ff79c6",
      purple: "#bd93f9",
      red: "#ff5555",
      yellow: "#f1fa8c",
      cyan: "#8be9fd",
      orange: "#ffb86c",
      white: "#f8f8f2",
    },
  },
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  variants: {
    extend: {},
  },
  plugins: [],
};
