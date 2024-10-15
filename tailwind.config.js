/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-tomato": "hsl(4, 100%, 67%)",
        "neutral-dark-slate-grey": "hsl(234, 29%, 20%)",
        "neutral-charcoal-grey": "hsl(235, 18%, 26%)",
        "neutral-grey": "hsl(231, 7%, 60%)",
        "neutral-white": "hsl(0, 0%, 100%)",
        "tomato-transparent": "hsla(4, 100%, 67%, 0.2)",
      },
      boxShadow: {
        "tomato-shadow": "3px 3px 15px hsl(4, 100%, 67%)",
      },
      screens: {
        "mobile-m": "375px",
        "mobile-l": "425px",
        500: "500px",
        817: "817px",
        915: "945px",
      },
    },
  },
  plugins: [],
}
