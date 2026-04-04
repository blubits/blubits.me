export type ThemePreference = 'light' | 'dark';

const THEME_STORAGE_KEY = 'theme';

export function getStoredThemePreference(): ThemePreference | null {
  if (typeof window === 'undefined') {
    return null;
  }

  const value = localStorage.getItem(THEME_STORAGE_KEY);
  if (value === 'light' || value === 'dark') {
    return value;
  }

  return null;
}

export function getSystemThemePreference(): ThemePreference {
  if (typeof window === 'undefined') {
    return 'light';
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

export function getResolvedThemePreference({
  preferDocument = false,
}: {
  preferDocument?: boolean;
} = {}): ThemePreference {
  if (preferDocument && typeof document !== 'undefined') {
    return document.documentElement.classList.contains('dark') ? 'dark' : 'light';
  }

  return getStoredThemePreference() ?? getSystemThemePreference();
}

export function applyThemePreference(theme: ThemePreference) {
  if (typeof document === 'undefined') {
    return;
  }

  document.documentElement.classList.toggle('dark', theme === 'dark');
}
