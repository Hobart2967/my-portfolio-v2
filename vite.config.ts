import path from 'path';

import { defineConfig } from 'vite';

import solidPlugin from 'vite-plugin-solid';
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig({
  build: {
    minify: false
  },
  plugins: [
    solidPlugin(),
    viteStaticCopy({
      targets: [{
        src: path.resolve(__dirname, './src/assets') + '/[!.]*', // 1️⃣
        dest: './assets', // 2️⃣
      }]
    }),
  ],
});