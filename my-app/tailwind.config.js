module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        fp: {
          100: "#252627",
          200: "#564E58",
          300: "#904E55",
          400: "#BFB48F",
          500: "#F2EFE9",
        },
      },
      gridTemplateColumns: {
        movieDetails: "1fr 2fr 1fr",
      },
    },
  },
  plugins: [],
};
