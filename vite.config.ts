import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import tailwindcss from "tailwindcss";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    dts({
      tsconfigPath: "./tsconfig.build.json",
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  build: {
    emptyOutDir: true,
    lib: {
      entry: "src/index.tsx",
      name: "@getdokan/dokan-ui-latest",
      formats: ["es"],
      fileName: "index",
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
        assetFileNames: (chunkinfo) => {
          if (chunkinfo.name === "style.css") {
            return "dokan-ui.css";
          }
          return "assets/[name].[ext]";
        },
      },
    },
  },
  css: {
    postcss: {
      plugins: [tailwindcss],
    },
  },
});
