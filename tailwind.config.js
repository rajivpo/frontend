const { colors } = require("tailwindcss/defaultTheme");
module.exports = {
  darkMood: "media",
  purge: [
    "./public/**/*.html",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: {
          ...colors.black,
        },
        gray: {
          ...colors.gray,
        },
        green: {
          ...colors.green,
          mediumspring: "#00FFA3",
        },
        blue: {
          ...colors.blue,
          midnightexpress: "#151828",
          tangaroa: "#1b2236",
          spindle: "#b5bddb",
          linkwater: "#c8cbd9",
          shipcove: "#8991ad",
          manatee: "#8888af",
          highlightbg: "#2d344a",
          highlightborder: "#8794b8",
        },
        red: {
          ...colors.red,
          pinkish: "#f85a89",
        },
        pink: {
          "300": colors.pink["300"],
        },
      },
      width: {
        "w-23": "23%",
        "w-21": "21%",
        "w-38": "38%",
        "w-34": "34%",
        "w-32": "30%",
        "w-55": "55%",
      },
      spacing: {
        "42": "165px",
      },
      lineHeight: {
        "2": "2",
        card: "3.3",
        "18": "1.18",
        loose1: "2.95",
      },
      fontFamily: {
        roboto: ["Roboto Mono", "monospace"],
        inter: ["Inter", "sans-serif"],
      },
      transitionTimingFunction: {
        "ease-out-quint": "cubic-bezier(0.23, 1, 0.32, 1)",
      },
      boxShadow: {
        outline: "0 0 0 1px rgba(229, 103, 86, 0.4)",
      },
      fontSize: {
        "41xl": "2.5rem",
        "21xl": "1.87rem",
        "32xl": "2rem",
        "28xl": "1.75rem",
      },
      inset: {
        "128": "32rem",
      },
      scale: {
        "gauge-md": "0.65",
      },
      padding: {
        "26": "104px"
      }
    },
  },
  variants: {},
  plugins: [
    require("tailwindcss"),
    require("precss"),
    require("autoprefixer"),
    require("postcss-import"),
  ],
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
};
