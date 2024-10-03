import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    proxy: {
      "/api": {
        // target: "https://backend-auth-cm3.onrender.com",
        // NO AUTH
        // target: "https://w7-cm-backend-no-auth.onrender.com",
        // AUTH
        target: "https://w7-cm-backend-auth.onrender.com/",

        changeOrigin: true,
      },
    },
  },
});
