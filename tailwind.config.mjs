/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      backgroundImage: {
        "abrir-menu": "url('/svg/menu.svg')",
        "cerrar-menu": "url('/svg/x.svg')",
        fondo: "url('/fondo.webp')",
        catalogo: "url('/catalogo.webp')",
      },
      colors: {
        marron: "rgb(193, 163, 127)",
        oscuro: "rgb(30, 30, 30)",
        gris: "rgb(80, 80, 80);",
      },
    },
  },
  plugins: [],
};
