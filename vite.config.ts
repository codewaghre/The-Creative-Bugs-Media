import path from "path"
import tailwindcss from "@tailwindcss/vite"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

  
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    proxy: {
      '/api': {
        target: "https://creative-bugs-media-admin.vercel.app",
        changeOrigin: true,
        secure: true,
        // rewrite: (path) => path.replace(/^\/api/, '/api'),
      },
    },
  },
})
