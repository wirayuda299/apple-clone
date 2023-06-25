/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        fadein: {
          '0%': { opacity: "0" },
          '100%': { opacity: '100' }
        }
      },
      slide: {
        "0%": {
          height: "0px",
          top: "-100%",
          left: "0px",
          height: "0px",
          display: "none"
        },
        "100%": {
          height: "100%",
          top: "0px",
          left: "0px",
          height: "100vh",
          display: "block"
        }
      },
      slideOut: {
        "0%": {
          height: "100%",
          top: "0",
          left: "0",
          display: "block",
          height: "100vh"
        },
        "100%": {
          height: "0",
          top: "-100%",
          left: "0",
          height: "0",
          display: "none"
        },

      },
      animation: {
        "fadeIn": 'fadein 1s ease-in-out forwards',
        "slide": "slide 500ms ease-in forwards",
        "slideOut": "slideOut 500ms ease-in forwards"
      }
    },
  },
  plugins: [],
}