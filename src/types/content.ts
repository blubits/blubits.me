import { z } from 'astro:content';

// Base schemas for reuse
export const dateSchema = z.date();

export const baseFrontmatterSchema = z.object({
  title: z.string(),
  'date-created': dateSchema,
  'date-updated': dateSchema,
});

// Content type definitions
export interface EditorialPost {
  collection: 'editorials';
  data: {
    title: string;
    platform: string;
    code: string;
    'problem-link': string;
    'problem-description': string;
    'solution-summary': string;
    'solution-link': string;
    'date-created': Date;
    'date-updated': Date;
    'running-time': string;
    status: string;
    tags: string[];
  };
}

export interface ModulePost {
  collection: 'modules';
  data: {
    id: string;
    title: string;
    'date-created': Date;
    'date-updated': Date;
    summary: string;
  };
}

export interface BlogPost {
  collection: 'blogposts';
  data: {
    title: string;
    'date-created': Date;
    'date-updated': Date;
    inline: boolean;
    image?: string;
  };
}

export interface Project {
  collection: 'projects';
  data: {
    title: string;
    slug: string;
    'date-created': Date;
    'date-updated': Date;
    image?: string;
    'short-description': string;
    tags: string[];
  };
}

export type Post = EditorialPost | ModulePost | BlogPost | Project;