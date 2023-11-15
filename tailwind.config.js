/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{html,js}",
    "./public/**/*.html",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "1024px",
      xl: "1280px"
    },
    extend: {
      colors: {
        primary: {
          100: "#FFDD0F",
          90: "#E1C30F",
          50: "#F1DF74"
        },
        secondary: {
          100: "#253C95",
          90: "#1D4ED8"
        },
        background: {
          base: "#F8F8F8"
        },
        text: {
          base: "#333333",
          gray: {
            500: "#6B7280",
            300: "#D1D5DB",
            80: "#696666",
            75: "#EAEAEA",
            50: "#807F7F"
          }
        },
        Alert: {
          danger: "#FF0000",
          warning: "#FFDD0F",
          info: "#1D4ED8",
          success: "#00FF00"
        }
      },
      fontSize: {
        10: ["10px", "15px"],
        12: ["12px", "18px"],
        14: ["14px", "21px"],
        16: ["16px", "24px"],
        18: ["18px", "27px"],
        20: ["20px", "30px"],
        24: ["24px", "36px"],
        32: ["32px", "38px"],
        48: ["48px", "72px"],
        64: ["68px", "75px"],
        96: ["96px", "100px"]
      }
    }
  },
  plugins: [require("flowbite/plugin")]
};
