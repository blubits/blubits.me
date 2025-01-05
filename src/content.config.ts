import { glob } from "astro/loaders";
import { defineCollection, z } from 'astro:content';

const editorials = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/editorials" }),
  schema: z.object({
    title: z.string(),
    platform: z.string(),
    code: z.string(),
    "problem-link": z.string(),
    "problem-description": z.string(),
    "solution-summary": z.string(),
    "solution-link": z.string(),
    "date-created": z.date(),
    "date-updated": z.date(),
    "running-time": z.string(),
    status: z.string(),
    tags: z.array(z.string()),
  }),
});

const modules = defineCollection({
  loader: glob({ pattern: "**/**/**/MODULE.md", base: "./src/modules" }),
  schema: z.object({
    id: z.string(),
    title: z.string(),
    "date-created": z.date(),
    "date-updated": z.date(),
    references: z.array(z.string()),
    summary: z.string().default("")
  }),
});

export const collections = { editorials, modules };