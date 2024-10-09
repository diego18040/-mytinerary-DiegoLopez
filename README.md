# -mytinerary-DiegoLopez
Sprint1 Condition of the MVP

npm create vite@latest -- --template

cd nombre-del-proyecto
npm install


npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}



index.css file

@tailwind base;

@tailwind components;

@tailwind utilities;


npm install react-redux

and finshed for to web active 
