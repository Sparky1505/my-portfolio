/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#F6F4EF",
        surface: "#FFFFFF",
        sage: "#9FD3AE",
        sageSoft: "#D9F0DF",
        ink: "#111111",
        inkMuted: "#4B4B4B",
        borderSubtle: "#D6D1C8",
      },
    },
  },
  plugins: [],
};
