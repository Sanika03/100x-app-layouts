/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],  
  theme: {
    extend: {
      colors: {
        "twitter-blue": "#1D9BF0",
        "twitter-blue-hover": "#1871CA",
        "neutral-50": "#F9F9F9",
        "neutral-200": "#E4E4E4",
        "neutral-400": "#A2A2A2",
        "neutral-500": "#737373",
        "neutral-600": "#525252",
        "neutral-700": "#404040",
        "neutral-800": "#262626",
        "neutral-1000": "#000000",
        "button-stroke": "#546A7A",
        "searchbar-fill": "#212327",
        "secondary": "rgba(255, 255, 255, 0.6)",
        "neutral-1000-60": "rgba(0, 0, 0, 0.60);"
    },
    fontFamily: {
      "inter": ['Inter', 'sans-serif']
    },
    fontSize: {
      "15": "15px"
    },
    lineHeight: {
      "normal": "normal"
    },
    borderRadius: {
      "border-65": "65px",
      "border-9999": "9999px",
      "border-30": "30px",
      "border-32": "32px",
      "border-200": "200px",
      "border-1000": "1000px"
    },
    boxShadow: {
      "box-shadow": "0px 8px 16px 0px rgba(0, 0, 0, 0.25)"
    },
    backdropBlur: {
      "23": "blur(23.668209075927734px)"
    },
    width: {
      "390": "398px",
      "868" : "868px"
    },
    gap: {
      "1.25": "5px"
    }
  },
  plugins: [],
  }
}