import { useEffect, useState } from 'react';
import { MdLightMode, MdDarkMode } from 'react-icons/md';
import {
  applyThemePreference,
  getResolvedThemePreference,
} from '@/utils/theme';

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window === 'undefined') {
      return false;
    }

    return getResolvedThemePreference({ preferDocument: true }) === 'dark';
  });

  useEffect(() => {
    const shouldBeDark = getResolvedThemePreference({ preferDocument: true }) === 'dark';
    setIsDark(shouldBeDark);
    applyThemePreference(shouldBeDark ? 'dark' : 'light');
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);

    if (newTheme) {
      localStorage.setItem('theme', 'dark');
    } else {
      localStorage.setItem('theme', 'light');
    }

    applyThemePreference(newTheme ? 'dark' : 'light');
  };

  return (
    <button
      onClick={toggleTheme}
      className="relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 bg-gray-200 dark:bg-gray-700"
      role="switch"
      aria-checked={isDark}
      aria-label="Toggle dark mode"
      style={{ viewTransitionName: "theme-toggle" }}
      suppressHydrationWarning
    >
      <span className="absolute left-1 top-1/2 inline-flex h-4 w-4 -translate-y-1/2 transform items-center justify-center rounded-full bg-white shadow-sm transition-transform duration-300 ease-out dark:translate-x-5">
        <MdLightMode className="h-3 w-3 text-yellow-500 dark:hidden" aria-hidden="true" />
        <MdDarkMode className="hidden h-3 w-3 text-gray-700 dark:block" aria-hidden="true" />
      </span>
    </button>
  );
};

export default ThemeToggle;/* touch to trigger HMR */
/* touch to trigger HMR */
