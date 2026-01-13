import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
     title: z.string(),
    client: z.string(),
    service: z.string(),
    roles: z.array(z.string()).optional(),
    date: z.string(),
    featured: z.boolean().default(false),
    youtubeId: z.string().optional(),
    videoFile: z.string().optional(),
  }),
});

export const collections = { blog };