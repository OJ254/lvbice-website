// src/components/shared/ThemeToggle/themeUtils.ts

/**
 * Type definition for the theme
 */
export type Theme = 'light' | 'dark' | 'system';

/**
 * Apply the theme to the <html> element based on user or system preference
 */
export function applyTheme(theme: Theme) {
  const html = document.documentElement;
  if (theme === 'light') {
    html.classList.remove('dark');
  } else if (theme === 'dark') {
    html.classList.add('dark');
  } else {
    const prefersDark = window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches;
    html.classList.toggle('dark', prefersDark);
  }

  // Notify other components
  window.dispatchEvent(new Event('theme-changed'));
}

/**
 * Get the stored theme from localStorage
 */
export function getStoredTheme(): Theme {
  const stored = localStorage.getItem('theme');
  return stored === 'light' || stored === 'dark' || stored === 'system'
    ? stored
    : 'system';
}
