module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        fp: {
          90: "#3e4042",
          100: "#252627",
          110: "#0c0d0d",

          190: "#6a606c",
          200: "#564E58",
          210: "#423c44",

          290: "#a65961",
          300: "#904E55",
          310: "#743e44",

          390: "#d0c8ae",
          400: "#BFB48F",
          410: "#ab9d6d",

          490: "#ffffff",
          500: "#F2EFE9",
          510: "#e3dccf",
        },
      },
      gridTemplateColumns: {
        movieDetails: "1fr 2fr 1fr",
      },
    },
  },
  plugins: [],
};
