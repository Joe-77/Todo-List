/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        small: "10px",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
