// astro.config.mjs
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  // ⚠️ Replace USERNAME and REPO with your GitHub details
  site: 'https://USERNAME.github.io',
  base: '/REPO',

  integrations: [
    starlight({
      title: 'Cas Cliniques de Microbiologie',
      description: 'Résidanat en Algérie — Dr Wail NAMOUNE',
      defaultLocale: 'fr',
      locales: {
        root: { label: 'Français', lang: 'fr' },
      },
      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/USERNAME/REPO',
        },
      ],
      sidebar: [
        { label: 'Accueil', link: '/' },
        {
          label: 'I — Résistance aux antibiotiques',
          autogenerate: { directory: '01-resistance' },
        },
        {
          label: 'II — Virologie',
          autogenerate: { directory: '02-viral-gastro' },
          // Add the other virology chapters here as you create folders
        },
        {
          label: 'III — Bactériologie',
          autogenerate: { directory: '14-fondamentale' },
        },
        {
          label: 'IV — Mix',
          autogenerate: { directory: '26-mix' },
        },
      ],
    }),
  ],
});