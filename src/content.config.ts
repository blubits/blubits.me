import { glob } from "astro/loaders";
import { defineCollection, z } from 'astro:content';
import { baseFrontmatterSchema } from '@blubits/types/content';

const editorials = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./content/editorials" }),
  schema: baseFrontmatterSchema.extend({
    platform: z.string(),
    code: z.string(),
    "problem-link": z.string(),
    "problem-description": z.string(),
    "solution-summary": z.string(),
    "solution-link": z.string(),
    "running-time": z.string(),
    status: z.string(),
    tags: z.array(z.string()),
  }),
});

const modules = defineCollection({
  loader: glob({ pattern: "**/**/**/MODULE.md", base: "./content/modules" }),
  schema: baseFrontmatterSchema.extend({
    id: z.string(),
    summary: z.string().default("")
  }),
});

const blogposts = defineCollection({
  loader: glob({ pattern: "*.md", base: "./content/blog" }),
  schema: baseFrontmatterSchema.extend({
    inline: z.boolean().default(false),
  }),
});

export const collections = { editorials, modules, blogposts };