import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => ({
  plugins: [react()],
  server: {
    proxy:
      mode === "development"
        ? {
            "/api": {
              target: "http://localhost:3000",
              secure: false,
              changeOrigin: true,
            },
          }
        : undefined,
  },
  preview: {
    port: parseInt(process.env.PORT) || 3000,
    host: "0.0.0.0",
  },
}));
