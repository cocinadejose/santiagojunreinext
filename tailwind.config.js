/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./styles/**/*.{js,ts,jsx,tsx,css}", // <--- ¡AÑADE ESTA LÍNEA!
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
