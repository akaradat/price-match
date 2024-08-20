import { defineConfig } from 'vite';
import { createHtmlPlugin } from 'vite-plugin-html';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    createHtmlPlugin({
      inject: {
        data: {
          VITE_WEBSITE_URL: process.env.VITE_WEBSITE_URL,
        },
      },
    }),
  ],
  base: process.env.VITE_BASE_URL || '/',
});
