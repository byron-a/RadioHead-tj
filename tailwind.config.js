/** @type {import('tailwindcss').Config} */
export default {
  content: ["./*.html","./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    screens: {
      sm: '280px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      colors: {
        color1: "#293942",
        color2: "#293942",
        color3: "#1b262c",
        color4: "#1b2328"
      },
      backgroundImage: {
        heroMask: "url('/src/assets/heroMask.png')"
      },
    },
  },
  plugins: [],
}

