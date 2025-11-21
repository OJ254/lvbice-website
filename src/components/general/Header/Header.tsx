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

type HeaderProps = {
  textColor?: string;
};

const Header = ({ textColor = 'text-white' }: HeaderProps) => {
  const { theme, toggleTheme } = useThemeToggle();
  const [drawerOpen, setDrawerOpen] = useState(false);

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
    window.location.href = `/pages/about#${id}`;
  };

  return (
    <Box className='max-w-9xl relative flex w-full items-center justify-between p-4'>
      {/* Logo */}
      <div className='w-full max-w-max'>
        <a href='/'>
          <Image
            src={WhiteLogo}
            alt='LVBICE logo'
            width={100}
            height={100}
            className='h-auto w-28 md:w-32 lg:w-40'
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
            width={100}
            height={100}
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
