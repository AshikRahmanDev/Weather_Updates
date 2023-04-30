/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      blue: "#55b5fb",
      lightBlack: "#202b3b",
      black: "#000",
      white: "#fff",
      gray: {
        100: "#f7fafc",
        // ...
        900: "#1a202c",
      },
    },
  },
  plugins: [],
};
