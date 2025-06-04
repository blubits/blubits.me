export interface ThemeConfig {
  name: 'default' | 'notes' | 'tutoring' | 'error';
  background: string;
  foreground: string;
  logoBackground: string;
  logoForeground: string;
  darkNavbar?: boolean;
}

export const themes: Record<ThemeConfig['name'], ThemeConfig> = {
  default: {
    name: 'default',
    background: 'bg-gradient-to-b from-gray-100 via-slate-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900',
    foreground: 'text-black dark:text-white',
    logoBackground: 'bg-slate-200 dark:bg-slate-700',
    logoForeground: 'stroke-black dark:stroke-white',
    darkNavbar: false,
  },
  notes: {
    name: 'notes',
    background: 'bg-gradient-to-b from-lime-100 via-slate-50 to-white dark:from-lime-900 dark:via-gray-800 dark:to-gray-900',
    foreground: 'text-black dark:text-white',
    logoBackground: 'bg-lime-600 dark:bg-lime-500',
    logoForeground: 'stroke-white',
    darkNavbar: false,
  },
  tutoring: {
    name: 'tutoring',
    background: 'bg-gradient-to-b from-violet-100 via-slate-50 to-white dark:from-violet-900 dark:via-gray-800 dark:to-gray-900',
    foreground: 'text-black dark:text-white',
    logoBackground: 'bg-violet-600 dark:bg-violet-500',
    logoForeground: 'stroke-white',
    darkNavbar: false,
  },
  error: {
    name: 'error',
    background: 'bg-gradient-to-b from-red-100 via-slate-50 to-white dark:from-red-900 dark:via-gray-800 dark:to-gray-900',
    foreground: 'text-black dark:text-white',
    logoBackground: 'bg-red-600 dark:bg-red-500',
    logoForeground: 'stroke-white',
    darkNavbar: false,
  },
};