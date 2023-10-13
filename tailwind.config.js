/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('./public/website logo/codioful-formerly-gradienta-pYDaWACPVZw-unsplash.jpg')",
      }
    }
  },
  plugins: [require("daisyui")],
};
