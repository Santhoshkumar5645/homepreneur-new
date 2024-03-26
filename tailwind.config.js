/** @type {import('tailwindcss').Config} */
module.exports = {

  content: ["./src/**/*.{html,js}"],
  theme: {
    
    extend: {
      colors: {
        primary: '#6A3051',
        heading: '#2b2b2b',
        paragraph: '#656465',
        white: '#ffffff',
      },
      fontFamily: {
        'outfit': ['Outfit', 'sans-serif'],
        'digital': ['digital', 'sans-serif'],
        'Voyage-bold': ['Voyage-bold', 'sans-serif'],
        'Voyage-regular': ['Voyage-regular', 'sans-serif'],
      },
      animation: {
        slide: 'slide 10s alternate infinite',
        slide_to_top: 'slide_to_top 7s alternate infinite',
        slide_to_bottom: 'slide_to_bottom 7s alternate infinite',
        wiggle: 'wiggle 1s ease-in-out infinite'
      },
      keyframes: {
        slide: {
          '0%': { transform: 'translateY(200px);' },
          '100%': { transform: 'translateY(-150px);' }
        },
        slide_to_top: {
          '0%': { transform: 'translateY(300px);' },
          '100%': { transform: 'translateY(-200px);' }
        },
        slide_to_bottom: {
          '0%': { transform: 'translateY(-300px);' },
          '100%': { transform: 'translateY(200px);' }
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(15deg)' },
          '15%': { transform: 'rotate(-15deg)' },

        }
      }

    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
    // ...
  ]
}

