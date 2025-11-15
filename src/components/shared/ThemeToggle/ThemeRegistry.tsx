// @/components/shared/ThemeToggle/ThemeRegistry.tsx

'use client';

import { ReactNode, useEffect, useState } from 'react';
import { ThemeProvider as MuiThemeProvider, CssBaseline } from '@mui/material';
import { lightTheme, darkTheme } from '@/theme/theme';
import { getStoredTheme, applyTheme } from './themeUtils';
import { ThemeProvider } from '@/context/ThemeContext';

export default function ThemeRegistry({ children }: { children: ReactNode }) {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    try {
      const html = document.documentElement;

      // Read the stored theme and apply
      const theme = getStoredTheme();
      applyTheme(theme);

      // Set the initial state
      const initialDark = html.classList.contains('dark');
      setIsDark(initialDark);
      setMounted(true);

      // Watch for theme changes via class mutation
      const observer = new MutationObserver(() => {
        setIsDark(html.classList.contains('dark'));
      });

      observer.observe(html, {
        attributes: true,
        attributeFilter: ['class'],
      });

      return () => observer.disconnect();
    } catch (e) {
      console.warn('Theme setup failed', e);
    }
  }, []);

  if (!mounted) return null;

  return (
    <ThemeProvider>
      <MuiThemeProvider theme={isDark ? darkTheme : lightTheme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </ThemeProvider>
  );
}
