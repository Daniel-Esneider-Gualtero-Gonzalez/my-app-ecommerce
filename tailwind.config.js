/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.jsx"],
  theme: {
    extend:{
      colors:{
        primary: "rgba(37, 99 , 235,1)",
        secondary: "#F9C231",
        dark: "rgba(0, 0, 0, 0.9)",

      },
      boxShadow:{
        'shadowSection' : "0px 4px 8px rgba(0, 0, 0, 0.01)"
      }
    }
    
  },
  plugins: []
}

