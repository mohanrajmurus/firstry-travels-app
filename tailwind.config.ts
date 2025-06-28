import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        padding: {
          DEFAULT: "1rem",
        },
      },
      fontFamily: {
        poppins: ["var(--font-popins)"],
      },
      colors: {
        brand: "#3da9fc",
        heading: "#094067",
        paragraph: "#5f6c7b",
        btnText: "#fffffe",
      },
      backgroundImage: {
        banner: "url('/images/bannerTemple.png')",
      },
    },
  },
  plugins: [],
} satisfies Config;
