import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    client: z.string(), // <--- NEW: Who did they work for?
    service: z.string(), // <--- NEW: What did they do? (e.g., Live Stream, Spot TV)
    roles: z.array(z.string()).optional(), // <--- NEW: The Team (Aymen, Taha, etc.)
    date: z.string(),
    youtubeId: z.string().optional(), // <--- NEW: For the video embed
  }),
});

export const collections = { blog };