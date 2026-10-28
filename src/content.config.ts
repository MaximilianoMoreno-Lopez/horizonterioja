import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const noticias = defineCollection({
  loader: glob({ pattern: ['**/*.md', '!**/_*.md'], base: './src/content/noticias' }),
  schema: z.object({
    title: z.string(),
    date: z.string(), // AAAA-MM-DD
    description: z.string(),
  }),
});

export const collections = { noticias };
