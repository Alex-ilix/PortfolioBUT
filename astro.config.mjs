import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';
import icon from "astro-icon";
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://alex-ilix.github.io/PortfolioBUT/index.astro',
  base: 'PortfolioBUT',
  integrations: [tailwind(), mdx(), icon({
    include: {
      mdi: ["*"]
    }
  })],

});