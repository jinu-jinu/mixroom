import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import glsl from "vite-plugin-glsl";
import { compression } from "vite-plugin-compression2";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    glsl(),
    compression({
      include: /\.(js|css|html|svg|json|ico|eot|otf|ttf)$/,
      threshold: 1400,
    }),
  ],
});
