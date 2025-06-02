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
    background: 'bg-gradient-to-b from-gray-100 via-slate-50 to-white',
    foreground: 'text-black',
    logoBackground: 'bg-slate-200',
    logoForeground: 'stroke-black',
    darkNavbar: false,
  },
  notes: {
    name: 'notes',
    background: 'bg-gradient-to-b from-lime-100 via-slate-50 to-white',
    foreground: 'text-black',
    logoBackground: 'bg-lime-600',
    logoForeground: 'stroke-white',
    darkNavbar: false,
  },
  tutoring: {
    name: 'tutoring',
    background: 'bg-gradient-to-b from-violet-100 via-slate-50 to-white',
    foreground: 'text-black',
    logoBackground: 'bg-violet-600',
    logoForeground: 'stroke-white',
    darkNavbar: false,
  },
  error: {
    name: 'error',
    background: 'bg-gradient-to-b from-red-100 via-slate-50 to-white',
    foreground: 'text-black',
    logoBackground: 'bg-red-600',
    logoForeground: 'stroke-white',
    darkNavbar: false,
  },
};