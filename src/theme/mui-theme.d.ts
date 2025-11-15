// src/theme/mui-theme.d.ts
// TypeScript module augmentation for MUI's theme palette.
// This extends the Palette and PaletteOptions interfaces so `theme.palette.custom`
// becomes strongly typed across the app (e.g., theme.palette.custom.cardBg).

// Note: No imports are required here for augmentation.
// Keeping the file import-free also avoids ESLint unused-import warnings.

declare module '@mui/material/styles' {
    // Runtime palette shape (what you read from theme.palette)
    interface Palette {
        custom: {
            /** Background of cards in light mode */
            cardBg: string;
            /** Background of cards on hover in light mode */
            cardHoverBg: string;
            /** Background of cards in dark mode */
            cardBgDark: string;
            /** Background of cards on hover in dark mode */
            cardHoverBgDark: string;
        };
    }

    // Theme creation options (what you pass to createTheme in theme.palette)
    interface PaletteOptions {
        custom?: {
            /** Background of cards in light mode */
            cardBg?: string;
            /** Background of cards on hover in light mode */
            cardHoverBg?: string;
            /** Background of cards in dark mode */
            cardBgDark?: string;
            /** Background of cards on hover in dark mode */
            cardHoverBgDark?: string;
        };
    }
}

// Ensure this file is treated as a module by TypeScript.
export {};
