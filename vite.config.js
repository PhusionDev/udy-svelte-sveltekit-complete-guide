import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
  css: {
    preprocessorOptions: {
      scss: {
        prependData: `@use 'src/styles/variables.scss';`,
      },
    },
  },
});
// export default defineConfig({
//   plugins: [svelte()],
// });
