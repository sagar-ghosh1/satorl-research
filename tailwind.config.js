/** @type {import('tailwindcss').Config} */
export default {
   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
   theme: {
      extend: {
         fontFamily: {
            dmSans: "DM Sans",
            dmSerifDisplay: "DM Serif Display",
            inter: "Inter",
         },
      },
   },
   plugins: [require("daisyui")],
   daisyui: {
      themes: ["light"],
   },
};
