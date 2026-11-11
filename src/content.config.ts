// src/content.config.ts
import { defineCollection, z } from 'astro:content';
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';

const cases = defineCollection({
  loader: docsLoader(),
  schema: docsSchema({
    extend: z.object({
      chapter: z.number().int().min(1).max(26),
      caseNumber: z.string().regex(/^\d+\.\d+$/),
      part: z.enum([
        'Résistance aux antibiotiques',
        'Virologie',
        'Bactériologie',
        'Mix',
      ]),
      source: z.string().optional(),
      tags: z.array(z.string()).default([]),
      corrigeType: z.boolean().default(false),
      draft: z.boolean().default(false),
    }),
  }),
});

export const collections = { docs: cases };