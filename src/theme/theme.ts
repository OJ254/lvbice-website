// src/theme/theme.ts
// Centralized MUI theme definitions (light + dark).
// These themes control colors, typography, and CSS variables across the app.

'use client'; // This module is used on the client (e.g., ThemeProvider relies on browser features).

import { createTheme } from '@mui/material/styles';

// Light theme
export const lightTheme = createTheme({
  // Generate CSS variables for the theme (helps with dynamic theming and reduces style recalculation).
  cssVariables: true,
  palette: {
    mode: 'light',

    // Brand/primary action color
    primary: {
      main: '#6750a4',
      contrastText: '#ffffff',
    },

    // Secondary actions/accents
    secondary: {
      main: '#9333ea',
      contrastText: '#ffffff',
    },

    // Status colors
    success: { main: '#16a34a' },
    warning: { main: '#f59e0b' },
    error: { main: '#dc2626' },
    info: { main: '#0284c7' },

    // Background surfaces
    background: {
      default: '#f9fafb', // App background
      paper: '#ffffff', // Surface (cards, papers)
    },

    // Text colors on light backgrounds
    text: {
      primary: '#1f2937',
      secondary: '#4b5563',
    },

    // App-specific tokens (extended in theme augmentation).
    // Provide values here to consume via theme.palette.custom.*
    custom: {
      // cardBg: '#ffffff',
      // cardHoverBg: '#f3f4f6',
      // cardBgDark: '',         // Not used in light theme but can be set for consistency
      // cardHoverBgDark: '',
    },
  },
  typography: {
    // Use CSS variable loaded via your font setup (e.g., next/font)
    fontFamily: 'var(--font-roboto)',
  },
});

// Dark theme
export const darkTheme = createTheme({
  cssVariables: true,
  palette: {
    mode: 'dark',

    // Brand/primary action color adapted for dark backgrounds
    primary: {
      main: '#6750a4',
      contrastText: '#ffffff',
    },

    // Secondary actions/accents
    secondary: {
      main: '#8b5cf6',
      contrastText: '#ffffff',
    },

    // Status colors
    success: { main: '#22c55e' },
    warning: { main: '#fbbf24' },
    error: { main: '#ef4444' },
    info: { main: '#38bdf8' },

    // Background surfaces for dark mode
    background: {
      default: '#0f172a', // App background
      paper: '#1e293b', // Surface (cards, papers)
    },

    // Text colors on dark backgrounds
    text: {
      primary: '#f1f5f9',
      secondary: '#cbd5e1',
    },

    // App-specific tokens (match keys used in light theme for parity).
    custom: {
      // cardBg: '#111827',
      // cardHoverBg: '#1f2937',
      // cardBgDark: '#111827',
      // cardHoverBgDark: '#1f2937',
    },
  },
  typography: {
    // fontFamily: 'var(--font-roboto)',
    fontFamily: 'var(--font-geistSans)',
  },
});

// 'use client';
//
// import { createTheme } from '@mui/material/styles';
//
// const theme = createTheme({
//   typography: {
//     // fontFamily: 'var(--font-roboto)',
//     fontFamily: 'var(--font-geistSans)',
//   },
// });
//
// export default theme;
