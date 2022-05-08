var colorConfig = {
  c100: "#0d0d0d",
  c200: "#40434e",
  c300: "#702632",
  c400: "#912f40",
  c500: "#fffffa",
};

var colorConfigExtended = {
  c90: brighter(colorConfig.c100),
  c100: colorConfig.c100,
  c110: darker(colorConfig.c100),
  c190: brighter(colorConfig.c200),
  c200: colorConfig.c200,
  c210: darker(colorConfig.c200),
  c290: brighter(colorConfig.c300),
  c300: colorConfig.c300,
  c310: darker(colorConfig.c300),
  c390: brighter(colorConfig.c400),
  c400: colorConfig.c400,
  c410: darker(colorConfig.c400),
  c490: brighter(colorConfig.c500),
  c500: colorConfig.c500,
  c510: darker(colorConfig.c500),
};

var bannerGradientColor = colorConfigExtended.c100;

module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        banner: `linear-gradient(90deg,${bannerGradientColor} 0,${hexToRGB(
          bannerGradientColor
        )},.986) .97%,${hexToRGB(
          bannerGradientColor
        )},.945) 2.07833333%,${hexToRGB(
          bannerGradientColor
        )},.883) 3.29666667%,${hexToRGB(
          bannerGradientColor
        )},.803) 4.60166667%,${hexToRGB(
          bannerGradientColor
        )},.711) 5.96666667%,${hexToRGB(
          bannerGradientColor
        )},.61) 7.365%,${hexToRGB(
          bannerGradientColor
        )},.504) 8.77166667%,${hexToRGB(
          bannerGradientColor
        )},.398) 10.16%,${hexToRGB(
          bannerGradientColor
        )},.296) 11.505%,${hexToRGB(
          bannerGradientColor
        )},.203) 12.78%,${hexToRGB(
          bannerGradientColor
        )},.122) 13.95833333%,${hexToRGB(
          bannerGradientColor
        )},.059) 15.01666667%,${hexToRGB(
          bannerGradientColor
        )},.016) 15.92833333%,${hexToRGB(
          bannerGradientColor
        )},0) 16.66666667%,${hexToRGB(
          bannerGradientColor
        )},0) 83.33333333%,${hexToRGB(
          bannerGradientColor
        )},.016) 84.07166667%,${hexToRGB(
          bannerGradientColor
        )},.059) 84.98333333%,${hexToRGB(
          bannerGradientColor
        )},.122) 86.04166667%,${hexToRGB(
          bannerGradientColor
        )},.203) 87.22%,${hexToRGB(
          bannerGradientColor
        )},.296) 88.495%,${hexToRGB(
          bannerGradientColor
        )},.398) 89.84%,${hexToRGB(
          bannerGradientColor
        )},.504) 91.22833333%,${hexToRGB(
          bannerGradientColor
        )},.61) 92.635%,${hexToRGB(
          bannerGradientColor
        )},.711) 94.03333333%,${hexToRGB(
          bannerGradientColor
        )},.803) 95.39833333%,${hexToRGB(
          bannerGradientColor
        )},.883) 96.70333333%,${hexToRGB(
          bannerGradientColor
        )},.945) 97.92166667%,${hexToRGB(
          bannerGradientColor
        )},.986) 99.03%,${bannerGradientColor}),linear-gradient(0deg,${bannerGradientColor} 0,${bannerGradientColor} 21.48148148%,${hexToRGB(
          bannerGradientColor
        )},.986) 23.63703704%,${hexToRGB(
          bannerGradientColor
        )},.945) 26.1%,${hexToRGB(
          bannerGradientColor
        )},.883) 28.80740741%,${hexToRGB(
          bannerGradientColor
        )},.803) 31.70740741%,${hexToRGB(
          bannerGradientColor
        )},.711) 34.74074074%,${hexToRGB(
          bannerGradientColor
        )},.61) 37.84814815%,${hexToRGB(
          bannerGradientColor
        )},.504) 40.97407407%,${hexToRGB(
          bannerGradientColor
        )},.398) 44.05925926%,${hexToRGB(
          bannerGradientColor
        )},.296) 47.04814815%,${hexToRGB(
          bannerGradientColor
        )},.203) 49.88148148%,${hexToRGB(
          bannerGradientColor
        )},.122) 52.5%,${hexToRGB(
          bannerGradientColor
        )},.059) 54.85185185%,${hexToRGB(
          bannerGradientColor
        )},.016) 56.87777778%,${hexToRGB(
          bannerGradientColor
        )},0) 58.51851852%)`,
      },
      colors: {
        fp: {
          90: colorConfigExtended.c90,
          100: colorConfigExtended.c100,
          110: colorConfigExtended.c110,

          190: colorConfigExtended.c190,
          200: colorConfigExtended.c200,
          210: colorConfigExtended.c210,

          290: colorConfigExtended.c290,
          300: colorConfigExtended.c300,
          310: colorConfigExtended.c310,

          390: colorConfigExtended.c390,
          400: colorConfigExtended.c400,
          410: colorConfigExtended.c410,

          490: colorConfigExtended.c490,
          500: colorConfigExtended.c500,
          510: colorConfigExtended.c510,
        },
      },
      gridTemplateColumns: {
        movieDetails: "1fr 2fr 1fr",
        cast: "1fr 1fr 1px 1fr 1fr",
      },
    },
  },
};

function brighter(hex) {
  let hsl = hexToHSL(hex);
  hsl.l -= 10;
  if (hsl.l < 0) {
    hsl.l = 0;
  }
  return HSLToHex(hsl.h, hsl.s, hsl.l);
}

function darker(hex) {
  let hsl = hexToHSL(hex);
  hsl.l += 10;
  if (hsl.l > 100) {
    hsl.l = 100;
  }
  return HSLToHex(hsl.h, hsl.s, hsl.l);
}

function hexToHSL(H) {
  // Convert hex to RGB first
  let r = 0,
    g = 0,
    b = 0;
  if (H.length == 4) {
    r = "0x" + H[1] + H[1];
    g = "0x" + H[2] + H[2];
    b = "0x" + H[3] + H[3];
  } else if (H.length == 7) {
    r = "0x" + H[1] + H[2];
    g = "0x" + H[3] + H[4];
    b = "0x" + H[5] + H[6];
  }
  // Then to HSL
  r /= 255;
  g /= 255;
  b /= 255;
  let cmin = Math.min(r, g, b),
    cmax = Math.max(r, g, b),
    delta = cmax - cmin,
    h = 0,
    s = 0,
    l = 0;

  if (delta == 0) h = 0;
  else if (cmax == r) h = ((g - b) / delta) % 6;
  else if (cmax == g) h = (b - r) / delta + 2;
  else h = (r - g) / delta + 4;

  h = Math.round(h * 60);

  if (h < 0) h += 360;

  l = (cmax + cmin) / 2;
  s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
  s = +(s * 100).toFixed(1);
  l = +(l * 100).toFixed(1);

  return { h, s, l };
}

function HSLToHex(h, s, l) {
  s /= 100;
  l /= 100;

  let c = (1 - Math.abs(2 * l - 1)) * s,
    x = c * (1 - Math.abs(((h / 60) % 2) - 1)),
    m = l - c / 2,
    r = 0,
    g = 0,
    b = 0;

  if (0 <= h && h < 60) {
    r = c;
    g = x;
    b = 0;
  } else if (60 <= h && h < 120) {
    r = x;
    g = c;
    b = 0;
  } else if (120 <= h && h < 180) {
    r = 0;
    g = c;
    b = x;
  } else if (180 <= h && h < 240) {
    r = 0;
    g = x;
    b = c;
  } else if (240 <= h && h < 300) {
    r = x;
    g = 0;
    b = c;
  } else if (300 <= h && h < 360) {
    r = c;
    g = 0;
    b = x;
  }
  // Having obtained RGB, convert channels to hex
  r = Math.round((r + m) * 255).toString(16);
  g = Math.round((g + m) * 255).toString(16);
  b = Math.round((b + m) * 255).toString(16);

  // Prepend 0s, if necessary
  if (r.length == 1) r = "0" + r;
  if (g.length == 1) g = "0" + g;
  if (b.length == 1) b = "0" + b;

  return "#" + r + g + b;
}

function hexToRGB(h) {
  let r = 0,
    g = 0,
    b = 0;

  // 3 digits
  if (h.length == 4) {
    r = "0x" + h[1] + h[1];
    g = "0x" + h[2] + h[2];
    b = "0x" + h[3] + h[3];

    // 6 digits
  } else if (h.length == 7) {
    r = "0x" + h[1] + h[2];
    g = "0x" + h[3] + h[4];
    b = "0x" + h[5] + h[6];
  }

  return "rgb(" + +r + "," + +g + "," + +b;
}
