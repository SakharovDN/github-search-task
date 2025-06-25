import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import checker from 'vite-plugin-checker';
import svgr from 'vite-plugin-svgr';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/github-search-task/',
  plugins: [react(), checker({ typescript: true }), tsconfigPaths(), svgr()],
  server: { open: true },
  css: {
    modules: {
      localsConvention: 'camelCaseOnly',
    },
  },
});
