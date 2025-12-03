// "use client" tells Next.js that this component must be rendered on the client.
// Why it's required here:
// - We use React hooks (useState, custom useThemeToggle) which only run on the client.
// - We access browser-only APIs (document.getElementById, window.location).
// - We rely on interactive UI components from MUI (Button, Drawer, IconButton) that
//   attach event handlers and require client-side interactivity.
// Without this directive in the App Router, Next.js would treat the file as a server
// component by default, causing runtime errors when trying to use hooks/DOM APIs.
'use client';

import React, { useState } from 'react';
import ThemeModeToggle from '@/components/shared/ThemeToggle/ThemeModeToggle';
import { useThemeToggle } from '@/hooks/useThemeToggle';
import {
  Box,
  Button,
  IconButton,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Image from 'next/image';
import WhiteLogo from '@/assets/images/LVBICE-logo-white.png';

/**
 * Props for the Header component.
 *
 * textColor: Tailwind text color utility classes applied to specific
 * interactive elements (e.g., desktop nav and theme toggle) so the header
 * can be reused across light/dark backgrounds. Defaults to 'text-white'.
 */
type HeaderProps = {
  textColor?: string;
};

/**
 * Top navigation header for the site.
 *
 * Responsibilities:
 * - Shows the brand logo which links to the home page.
 * - Renders desktop navigation items that smoothly scroll to page sections
 *   when they exist, or navigates to the About page with a hash fallback.
 * - Provides a theme toggle (light/dark) via a shared hook.
 * - Offers a responsive mobile drawer containing the same navigation and actions.
 *
 * Notes on behavior:
 * - Smooth scrolling is done via `Element.scrollIntoView` and only when the
 *   target section is present in the current DOM. If the element isn't found
 *   (e.g., the user is on a different page), the handler redirects to
 *   `/pages/about#<id>` so the target can be scrolled into view on that page.
 */
const Header = ({ textColor = 'text-white' }: HeaderProps) => {
  // Access theme state and toggle function
  const { theme, toggleTheme } = useThemeToggle();
  // State for managing the mobile drawer open/close status
  const [drawerOpen, setDrawerOpen] = useState(false);

  // Handler to toggle the drawer
  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
  };

  // NAV ITEMS WITH IDS
  const navItems = [
    { label: 'About', id: 'about' },
    { label: 'Themes', id: 'themes' },
    { label: 'Partners', id: 'partners' },
    { label: 'News', id: 'latest-news' },
    { label: 'Contact', id: 'contact' },
  ];

  // SCROLL FUNCTION
  const scrollToSection = (id: string) => {
    // If section exists on the page, scroll
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      return;
    }

    // Otherwise, navigate to About page with hash
    // This fallback is important when the user clicks a nav item from a page
    // that doesn't contain the target section. Next.js will render the About
    // page, and the browser will jump to the hash after navigation.
    window.location.href = `/pages/about#${id}`;
  };

  return (
    <Box className='max-w-9xl relative flex w-full items-center justify-between px-4'>
      {/* Logo */}
      <div className='w-full max-w-max'>
        <a href='/'>
          <Image
            src={WhiteLogo}
            alt='LVBICE logo'
            width={1000}
            height={1000}
            className='h-auto w-16 rounded-md'
            priority
          />
        </a>
      </div>

      {/* Desktop Nav */}
      <div className='hidden md:gap-5 lg:flex lg:gap-6 xl:gap-7 2xl:gap-8'>
        {navItems.map(item => (
          <Button
            key={item.id}
            variant='text'
            className={`${textColor} transition-colors duration-300`}
            onClick={() => scrollToSection(item.id)}
          >
            {item.label}
          </Button>
        ))}
      </div>

      {/* Right Side Buttons */}
      <div className='flex items-center justify-center gap-4'>
        {/* Register → scroll to contact */}
        <Button
          variant='contained'
          color='success'
          className='hidden text-white transition-colors duration-300 md:flex'
          onClick={() => scrollToSection('contact')}
        >
          Register
        </Button>

        <IconButton
          aria-label='switch theme'
          onClick={toggleTheme}
          size='large'
          className='hidden md:flex'
        >
          <ThemeModeToggle theme={theme} label='' className={`${textColor}`} />
        </IconButton>

        {/* Mobile */}
        <IconButton
          aria-label='menu'
          size='large'
          className='lg:hidden'
          onClick={toggleDrawer(true)}
        >
          <MenuIcon className='text-white' />
        </IconButton>
      </div>

      {/* Mobile Drawer */}
      <Drawer
        anchor='left'
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        PaperProps={{
          className: 'w-72 bg-blue-500 text-white p-4',
        }}
      >
        {/* Drawer Logo */}
        <div className='mt-4 mb-6 w-full max-w-max'>
          <Image
            src={WhiteLogo}
            alt='LVBICE logo'
            width={1000}
            height={1000}
            className='h-auto w-40 md:w-48'
            priority
          />
        </div>

        {/* Drawer Navigation */}
        <List>
          {navItems.map(item => (
            <ListItemButton
              key={item.id}
              onClick={() => {
                scrollToSection(item.id);
                setDrawerOpen(false);
              }}
            >
              <ListItemText primary={item.label} className='text-white' />
            </ListItemButton>
          ))}
        </List>

        <div className='mt-6 flex flex-col gap-4'>
          {/* Register → contact */}
          <Button
            variant='contained'
            color='success'
            className='text-white transition-colors duration-300 md:hidden'
            onClick={() => {
              scrollToSection('contact');
              setDrawerOpen(false);
            }}
          >
            Register
          </Button>

          <IconButton
            onClick={toggleTheme}
            size='large'
            className='w-full self-start rounded-sm md:hidden'
          >
            <ThemeModeToggle
              theme={theme}
              label='Switch Theme:'
              className='text-white'
            />
          </IconButton>
        </div>
      </Drawer>
    </Box>
  );
};

export default Header;
