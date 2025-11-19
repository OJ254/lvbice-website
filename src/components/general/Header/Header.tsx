'use client';

import React from 'react';
import ThemeModeToggle from '@/components/shared/ThemeToggle/ThemeModeToggle';
import { useThemeToggle } from '@/hooks/useThemeToggle';
import { Box, Button, IconButton } from '@mui/material';

type HeaderProps = {
  textColor?: string;
};

const Header = ({ textColor = 'text-white' }: HeaderProps) => {
  const { theme, toggleTheme } = useThemeToggle();

  return (
    <Box className='max-w-9xl flex w-full items-center justify-between p-4'>
      <span className={`${textColor} w-full max-w-40 font-bold`}>logo</span>

      <div className='lg-gap-6 flex gap-4 md:gap-5 xl:gap-7 2xl:gap-8'>
        {/*{['About', 'Themes', 'Speakers', 'Partners', 'News', 'Contact'].map(*/}
        {['About', 'Themes', 'Partners', 'News', 'Contact'].map(item => (
          <Button
            key={item}
            variant='text'
            className={`${textColor} transition-colors duration-300`}
          >
            {item}
          </Button>
        ))}
      </div>

      <div className='flex items-center justify-center gap-4'>
        <IconButton
          aria-label='switch theme'
          onClick={toggleTheme}
          size='large'
        >
          <ThemeModeToggle theme={theme} label='' className={`${textColor}`} />
        </IconButton>

        {/*TODO: enable once registration process is initialized*/}
        {/*<Button*/}
        {/*  variant='contained'*/}
        {/*  color='success'*/}
        {/*  className='text-white transition-colors duration-300'*/}
        {/*>*/}
        {/*  Register*/}
        {/*</Button>*/}
      </div>
    </Box>
  );
};

export default Header;
