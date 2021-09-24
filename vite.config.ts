import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';
import { proxyUrl, buildTarget } from './config.json'

// @ts-ignore
const mode = process.env.NODE_ENV;

export default defineConfig(() => {

  return {
    plugins: [reactRefresh()],
    server: {
      host: '0.0.0.0',
      proxy: {
        '/api': {
          target: proxyUrl,
          changeOrigin: true,
        },
      },
    },
    build: {
      outDir: buildTarget || 'dist',
      assetsInlineLimit: 4096,
    },
    mode,
  }
});
