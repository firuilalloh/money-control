import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import {fileURLToPath} from "node:url"
// import path from "path";

// const filename = fileURLToPath(import.meta.env)
// const pathSegments = path.dirname(filename)

export default defineConfig({
  plugins: [vue()],
  build: {
    // target: 'esm',
  },
  resolve: {
    alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
        // '@': path.resolve(pathSegments, './src')
    },
    extensions:
    ['.mjs','.js','.ts','.jsx','.tsx','.json','.vue']
  }
});
