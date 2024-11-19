/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "100px",
      mdd: "500px",
      md: "670px",
      base: "600px",
      normal: "780px",
      lg: "970px",
      xl: "1080px",
    },
    extend: {},
  },
  plugins: [daisyui],
};
