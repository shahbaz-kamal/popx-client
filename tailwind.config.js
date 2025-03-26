/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "color-text": "#1d2226", 
        "color-text-opacity": "#74777b", 
        background: "#f7f8f9", 
        primary: "#6c25ff", 
        secondary: "#cebafb", 
        accent: "#cbcbcb",
        neutral: "#1d2226", 
      
      },
    },
  },
  plugins: [require("daisyui")],
};
