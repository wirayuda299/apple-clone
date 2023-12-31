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
      animation: {
        "fadeIn": 'fadein 1s ease-in-out forwards',
      }
    },
  },
  plugins: [],
}