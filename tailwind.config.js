/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: '425px', // Custom breakpoint for 361px
        xxs: '376px', // Custom breakpoint for 361px
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        sacramento: ['Sacramento', 'cursive'],
        satisfy: ['Satisfy', 'cursive'],
      }
    },
  },
  plugins: [],
};
