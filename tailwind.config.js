/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: ["./App.tsx", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {},
    screens: {
      xs: "320px", // en küçük aktif cihaz (iPhone SE / eski Android)
      sm: "375px", // modern küçük ekran (iPhone 12/13 mini)
      md: "414px", // normal telefon (iPhone 11/12/13/14)
      lg: "480px", // büyük telefon / Pro Max
      xl: "600px", // fold open / mini tablet
      "2xl": "768px", // küçük tablet (iPad mini)
      "3xl": "1024px", // tablet (iPad / Air)
      "4xl": "1366px", // büyük tablet (iPad Pro 12.9)
    },
  },
  plugins: [],
};
