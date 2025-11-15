'use client'; // Indicates this is a Client Component in Next.js

import { ReactNode } from 'react';
import { Card, CardProps } from '@mui/material';
import { useTheme } from '@mui/material/styles';

// Extend the Material-UI CardProps to create our custom card props type
interface CustomCardProps extends CardProps {
    children: ReactNode;
    sx?: import('@mui/material').SxProps;
}

/**
 * CustomCard is a wrapper component around MUI's Card component that provides:
 * - Automatic dark/light mode support
 * - Consistent styling across the application
 */
export default function CustomCard({ children, sx, ...rest }: CustomCardProps) {
    // Get the current theme and determine if dark mode is active
    const theme = useTheme();
    const isDark = theme.palette.mode === 'dark';

    // Define theme-specific colors
    const defaultBg = isDark ? '#1b1d24' : '#f8fafc'; // Default background color
    const hoverBg = isDark ? '#20232b' : '#f4f4f5'; // Background color on hover
    const borderColor = isDark ? '#2a2a3a' : '#e5e7eb'; // Border color
    const textColor = isDark ? '#e5e5e5' : '#1e1e1e'; // Text color

    // Define shadow effects for different states and themes
    const defaultShadow = isDark
        ? '0px 2px 4px rgba(0, 0, 0, 0.6)' // Darker shadow for dark mode
        : '0px 2px 4px rgba(0, 0, 0, 0.1)'; // Lighter shadow for light mode

    const hoverShadow = isDark
        ? '0px 4px 12px rgba(0, 0, 0, 0.7)' // Enhanced shadow for dark mode hover
        : '0px 4px 12px rgba(0, 0, 0, 0.15)'; // Enhanced shadow for light mode hover

    return (
        <Card
            elevation={0} // Disable default Material-UI elevation
            {...rest} // Spread any additional Card props
            sx={{
                borderRadius: '6px',
                backgroundColor: defaultBg,
                border: `1px solid ${borderColor}`,
                color: textColor,
                boxShadow: defaultShadow,
                transition: 'all 0.3s ease-in-out', // Smooth transition for hover effects

                // Hover state styles
                '&:hover': {
                    backgroundColor: hoverBg,
                    boxShadow: hoverShadow,
                },

                // Ensure proper text color for Typography components inside the card
                '& .MuiTypography-root': {
                    color: textColor,
                },

                // Ensure proper text color for Button components inside the card
                '& .MuiButtonBase-root': {
                    color: textColor,
                },

                ...sx, // Merge custom styles passed via sx prop (will override defaults)
            }}
        >
            {children}
        </Card>
    );
}
