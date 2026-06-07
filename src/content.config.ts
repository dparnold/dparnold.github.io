import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const profile = defineCollection({
  loader: glob({ base: "./src/content/profile", pattern: "**/*.md" }),
  schema: z.object({
    title: z.string(),
    personName: z.string(),
    pronouns: z.string(),
    location: z.string(),
    company: z.string(),
    education: z.string(),
    headline: z.string(),
    tags: z.array(z.string())
  })
});

const sections = defineCollection({
  loader: glob({ base: "./src/content/sections", pattern: "**/*.md" }),
  schema: z.object({
    title: z.string(),
    eyebrow: z.string(),
    anchor: z.string(),
    order: z.number(),
    items: z.array(z.string()).optional()
  })
});

export const collections = { profile, sections };
