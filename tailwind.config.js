/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        downToTop: {
          "0%": {
            transform: "translateY(50px)",
            opacity: 0,
          },
          "100%": {
            transform: "translateY(0)",
            opacity: 1,
          },
        },
        rightToLeft: {
          "0%": {
            transform: "translateX(200px)",
          },
          "100%": {
            transform: "translateX(0)",
          },
        },
        fadeIn80: {
          "0%": {
            opacity: 0,
          },
          "100%": {
            opacity: 0.8,
          },
        },
        fadeOut80: {
          "0%": {
            opacity: 0.8,
          },
          "100%": {
            opacity: 0,
          },
        },
      },
      animation: {
        "down-to-top": "downToTop 2s ease-in ",
        "fade-in-80": "fadeIn80 1s ease-in",
        "fade-out-80": "fadeOut80 1s ease-out",
        "right-to-left": "rightToLeft 1s cubic-bezier(.51,.01,.27,1.04)",
      },
    },
  },
  plugins: [],
};
