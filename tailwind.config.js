/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'white': '#FFFFFF',
        'black': '#161616',
        'grey': '#4D4D4D',
        'white-grey': '#F5F5F5',
        'orange': '#FF8C38',
        'bg-orange': '#FFF7ED',
        'ac-orange': '#FFCC8D',
        'txt-orange': '#FFEAD0',
        'ft-black': '#252525',
        'ft-grey': '#AAAAAA',
      },
      fontFamily: {
        sans: ['Graphik', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
        josefinSans: ['Josefin Sans', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      spacing: {
        '8xl': '96rem',
        '9xl': '128rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    },
  },
  plugins: [],
}

