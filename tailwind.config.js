/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#e05447",
        
"secondary": "#1d057f",
        
"accent": "#f9acbf",
        
"neutral": "#151723",
        
"base-100": "#F1F1F4",
        
"info": "#94C5E6",
        
"success": "#14B3A6",
        
"warning": "#EF9B25",
        
"error": "#E1566F",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

