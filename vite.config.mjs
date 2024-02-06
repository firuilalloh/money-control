import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import {fileURLToPath, URL} from "node:url"

export default defineConfig({
  plugins: [vue()],
  build: {
    target: 'esm',
  },
  resolve: {
    alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
    extensions:
    ['.mjs','.js','.ts','.jsx','.tsx','.json','.vue']
  }
});