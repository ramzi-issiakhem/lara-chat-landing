/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,vue}"],
  theme: {
    extend: {
      fontFamily: {
        adumu: ["adumu","sans-serif"]
      },
      colors: {
        'primary': "#FD312D"
      }
    },
  },
  plugins: [],
}

