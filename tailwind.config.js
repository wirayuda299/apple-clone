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
        "0%": { height: "0", top: "-100%", left: "0" },
        "100%": { height: "100%", top: "0", left: "0" }
      },
      animation: {
        "fadeIn": 'fadein 1s ease-in-out forwards',
        "slide": "slide 500ms ease-in forwards"
      }
    },
  },
  plugins: [],
}