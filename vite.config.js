import { defineConfig } from 'vite';

export default defineConfig({
  base: './', // Thiết lập base URL là thư mục hiện tại
  publicDir: 'public', // Thư mục chứa tài nguyên tĩnh
  server: {
    port: 3000,
    open: true
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: true
  }
});