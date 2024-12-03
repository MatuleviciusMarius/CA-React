import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  resolve: {
    alias: {
      "@router": "/src/router",
      extensions: [".mjs", ".js", ".ts", ".jsx", ".tsx", ".json"],
    },
  },
});
