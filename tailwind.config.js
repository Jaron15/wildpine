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
        xs: '425px', 
        xxs: '376px', 
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        sans: ['Raleway', 'ui-sans-serif', 'system-ui'], 
        sacramento: ['Sacramento', 'cursive'],
        satisfy: ['Satisfy', 'cursive'],
      }
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
