export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: { extend: {} },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
};
