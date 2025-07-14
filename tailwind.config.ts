import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: false,
  content: [
    "./app/**/*.{ts,tsx,js,jsx}", // your Next.js app folder
    "./components/**/*.{ts,tsx,js,jsx}", // if you have components folder
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-assistant)", "sans-serif"],
      },
      theme: {
        extend: {
          zIndex: {
            9999: "9999",
          },
          animation: {
            "ping-slow": "ping 3s cubic-bezier(0, 0, 0.2, 1) infinite",
          },
        },
      },
    },
  },
  plugins: [],
};

export default config;
