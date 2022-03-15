module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#14181C",
        button: "#445566",
        buttonHighlightet: "#354351",
        buttonHover: "#E87B18",
        sidebar: "#292E33",
        sidebarIcon: "#445566",
        text: "#000000",
      },
      gridTemplateColumns: {
        movieDetails: "1fr 2fr 1fr",
      },
    },
  },
  plugins: [],
};
