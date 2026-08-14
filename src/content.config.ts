import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ base: './src/content/blog', pattern: '**/*.md' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    Categories: z.array(z.string()).default([]),
    Tags: z.array(z.string()).default([])
  })
});

const contato = defineCollection({
  loader: glob({ base: './src/content/contato', pattern: '_index.md' }),
  schema: z.object({})
});

export const collections = { blog, contato };
