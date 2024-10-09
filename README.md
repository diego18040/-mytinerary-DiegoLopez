# MyTinerary

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

for Spanih

npm install react-router-dom: Para gestionar la navegación entre diferentes páginas en una aplicación de React.

npm install prop-types: Para utilizar la validación de tipos con PropTypes en tus componentes de React.

npm install redux react-redux: Si estás utilizando Redux para manejar el estado global de tu aplicación.

npm install axios: Para realizar peticiones HTTP en tu aplicación.

