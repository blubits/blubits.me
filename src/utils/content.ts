import type { CollectionEntry } from 'astro:content';

export function generateEditorialUrl(post: CollectionEntry<'editorials'>) {
  return `/notes/editorials/${post.data.platform}/${post.data.code}`;
}

export function generateModuleUrl(post: CollectionEntry<'modules'>) {
  return `/notes/modules/l${post.data.id[0]}/${post.data.id}`;
}

export function sortPostsByDate<T extends { data: { 'date-created': Date } }>(posts: T[]): T[] {
  return posts.sort((a, b) => 
    new Date(b.data['date-created']).getTime() - 
    new Date(a.data['date-created']).getTime()
  );
}

export function formatDate(date: Date, options?: Intl.DateTimeFormatOptions): string {
  const defaultOptions: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  return new Intl.DateTimeFormat('en-US', { ...defaultOptions, ...options }).format(date);
}

export function getPlatformDisplayName(platform: string): string {
  const platformMap: Record<string, string> = {
    'oj': 'Online Judge',
    'cf': 'Codeforces',
    'atcoder': 'AtCoder',
    'leetcode': 'LeetCode',
  };
  return platformMap[platform] || platform;
}