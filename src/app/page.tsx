// src/app/page.tsx

'use client';

import Image from 'next/image';
import ThemeModeToggle from '@/components/shared/ThemeToggle/ThemeModeToggle';
import { useThemeToggle } from '@/hooks/useThemeToggle';
import ExampleCard from '@/components/general/cards/ExampleCard';
import { Button, Typography } from '@mui/material';

export default function Home() {
  const { theme, toggleTheme } = useThemeToggle();

  return (
    <div className='flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black'>
      <main className='flex min-h-screen w-full max-w-5xl flex-col items-center justify-between bg-white px-16 py-32 sm:items-start dark:bg-black'>
        <div className='flex w-full items-center justify-between gap-2'>
          <Image
            className='dark:invert'
            src='/next.svg'
            alt='Next.js logo'
            width={100}
            height={20}
            priority
          />

          <button onClick={toggleTheme} className='white-text'>
            <ThemeModeToggle
              theme={theme}
              label='Theme - '
              className='white-text'
            />
          </button>
        </div>

        <div className='flex flex-col items-center gap-6 text-center sm:items-start sm:text-left'>
          <Typography
            variant='h4'
            className='leading-tight font-semibold text-black dark:text-zinc-50'
          >
            To get started, edit the <code>page.tsx</code> file.
          </Typography>
          <Typography
            variant='body1'
            className='max-w-lg text-zinc-600 dark:text-zinc-400'
          >
            Looking for a starting point or more instructions? Check out{' '}
            <a
              href='https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app'
              target='_blank'
              rel='noopener noreferrer'
              className='font-medium text-zinc-950 underline dark:text-zinc-50'
            >
              Templates
            </a>{' '}
            or the{' '}
            <a
              href='https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app'
              target='_blank'
              rel='noopener noreferrer'
              className='font-medium text-zinc-950 underline dark:text-zinc-50'
            >
              Learning
            </a>{' '}
            center.
          </Typography>
        </div>

        <div>
          <ExampleCard href='/' />
        </div>

        <div className='flex flex-col gap-4 text-base font-medium sm:flex-row'>
          <Button
            variant='contained'
            startIcon={
              <Image
                src='/vercel.svg'
                alt='Vercel logomark'
                width={24}
                height={24}
              />
            }
            className='flex h-12 w-full items-center justify-center rounded-full px-5 transition-colors hover:border-transparent'
            href='https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app'
            target='_blank'
            rel='noopener noreferrer'
          >
            Documentation
          </Button>

          <Button
            variant='outlined'
            className='flex h-12 w-full items-center justify-center rounded-full px-5 transition-colors hover:border-transparent'
            href='https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app'
            target='_blank'
            rel='noopener noreferrer'
          >
            Documentation
          </Button>
        </div>
      </main>
    </div>
  );
}
