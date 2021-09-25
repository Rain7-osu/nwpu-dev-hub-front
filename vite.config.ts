import { resolve } from 'path';
import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { proxyUrl, buildTarget } from './config.json';

declare const process;

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
    resolve: {
      alias: {
        '@src': resolve(__dirname, 'src'),
      },
    },
  };
});
