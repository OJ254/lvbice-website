// @/hooks/useThemeToggle.ts
'use client';

import { useEffect, useState } from 'react';

export type Theme = 'light' | 'dark' | 'system';

export function applyTheme(theme: Theme) {
    const root = document.documentElement;
    const isDark =
        theme === 'dark' ||
        (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);

    root.classList.remove('light', 'dark');
    root.classList.add(isDark ? 'dark' : 'light');
}

export function getStoredTheme(): Theme {
    if (typeof window === 'undefined') return 'system';
    const stored = localStorage.getItem('theme');
    return stored === 'light' || stored === 'dark' || stored === 'system' ? stored : 'system';
}

export function useThemeToggle() {
    const [theme, setTheme] = useState<Theme>('system');
    const [resolvedTheme, setResolvedTheme] = useState<'light' | 'dark'>('light');

    useEffect(() => {
        const initial = getStoredTheme();
        setTheme(initial);
        applyTheme(initial);
        setResolvedTheme(getResolvedTheme(initial));
    }, []);

    useEffect(() => {
        const media = window.matchMedia('(prefers-color-scheme: dark)');
        const handleChange = () => {
            const resolved = getResolvedTheme(theme);
            setResolvedTheme(resolved);
            applyTheme(theme);
        };

        if (theme === 'system') {
            media.addEventListener('change', handleChange);
        }

        return () => {
            media.removeEventListener('change', handleChange);
        };
    }, [theme]);

    const toggleTheme = () => {
        const next: Theme = theme === 'light' ? 'dark' : theme === 'dark' ? 'system' : 'light';
        setTheme(next);
        localStorage.setItem('theme', next);
        applyTheme(next);
        setResolvedTheme(getResolvedTheme(next));
    };

    return { theme, resolvedTheme, toggleTheme };
}

function getResolvedTheme(theme: Theme): 'light' | 'dark' {
    if (theme === 'light') return 'light';
    if (theme === 'dark') return 'dark';
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    return prefersDark ? 'dark' : 'light';
}
