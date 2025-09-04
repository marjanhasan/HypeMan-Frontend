import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Cabin", "Arial", "Helvetica", "sans-serif"], // Set as default sans-serif
        cabin: ["Cabin", "Arial", "Helvetica", "sans-serif"], // Optional: custom utility
      },
    },
  },
});
