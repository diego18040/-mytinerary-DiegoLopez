# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

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



Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


