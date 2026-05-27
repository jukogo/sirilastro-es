// @ts-check
import { defineConfig } from 'astro/config';
import github from '@astrojs/github';

export default defineConfig({
  adapter: github({
    site: 'https://jukogo.github.io/sirilastro-es', // URL donde se servirá la página
  }),
  output: 'static',
});
