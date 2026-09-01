export interface ThemeConfig {
  name: 'default' | 'notes' | 'error';
  background: string;
  foreground: string;
  logoBackground: string;
  logoForeground: string;
}

export const themes: Record<ThemeConfig['name'], ThemeConfig> = {
  default: {
    name: 'default',
    background: 'bg-white',
    foreground: 'text-black',
    logoBackground: 'bg-slate-200',
    logoForeground: 'stroke-black',
  },
  notes: {
    name: 'notes',
    background: 'bg-white',
    foreground: 'text-black',
    logoBackground: 'bg-lime-600',
    logoForeground: 'stroke-white',
  },
  error: {
    name: 'error',
    background: 'bg-white',
    foreground: 'text-black',
    logoBackground: 'bg-red-600',
    logoForeground: 'stroke-white',
  },
};
