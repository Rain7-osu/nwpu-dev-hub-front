import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh()],
  server: {
    host: '0.0.0.0',
    proxy: {
      '/api': {
        target: 'http://175.27.138.106:3008',
        changeOrigin: true,
      },
    },
  },
  build: {
    target: 'es2015',
    outDir: '../devhub-proxy/dist',
    assetsDir: ''
  },
});
