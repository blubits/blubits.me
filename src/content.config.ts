import { glob } from "astro/loaders";
import { defineCollection, z } from 'astro:content';
import { baseFrontmatterSchema } from '@/types/content';

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

const projects = defineCollection({
  loader: glob({ pattern: "**/PROJECT.md", base: "./content/projects" }),
  schema: baseFrontmatterSchema.extend({
    slug: z.string(),
    image: z.string().optional(),
    preview_image: z.string().optional(),
    preview_icon: z.string().optional(),
    preview_icon_background: z.string().optional(),
    preview_icon_foreground: z.string().optional(),
    "short-description": z.string(),
    tags: z.array(z.string()),
    link: z.string().optional(),
    hidden: z.boolean().default(false),
  }),
});

export const collections = { editorials, modules, blogposts, projects };