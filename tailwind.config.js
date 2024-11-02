/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      textShadow: {
        'custom': '7px 4px 5px black, -5px -1px 5px black, 0 0 0.3em black',
      },
      screens: {
        ls: '490px', 
        xs: '425px', 
        xxs: '376px', 
      },
      colors: {
        background: "#EAE0D6",
        foreground: "var(--foreground)",
        dark: "#5A4033",
        grn: "#6B705C",
        mute: "#6B705C"
      },
      fontFamily: {
        sans: ['Raleway', 'ui-sans-serif', 'system-ui'], 
        sacramento: ['Sacramento', 'cursive'],
        satisfy: ['Satisfy', 'cursive'],
      },
      backgroundImage: {
        'wood': "url('../public/wood.webp')",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.text-shadow-custom': {
          textShadow: '4px 3px 5px black, -2px -1px 5px black, 0 0 0.3em black',
        },
      })
    },
  ],
}
