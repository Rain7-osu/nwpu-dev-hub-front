import { resolve } from 'path';
import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { proxyUrl, buildTarget } from './config.json';

declare const process: any;

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
      target: "es2015",
      outDir: buildTarget || 'dist',
      assetsInlineLimit: 4096,
      sourcemap: true,
      minify: false,
      commonjsOptions: {
        transformMixedEsModules: [
          'node_modules/dva/dist/index.esm.js',
        ]
      }
    },
    mode,
    resolve: {
      alias: {
        '@src': resolve(__dirname, 'src'),
      },
    },
  };
});
