// src/app/pages/about/Hero.tsx
// "use client" is required because this component:
// - Uses React state and effects to run a live countdown timer.
// - Attaches click handlers for smooth in-page scrolling and downloading.
// - Relies on client Date/time and interval timers which are browser-only.
'use client';

import React, { useState, useEffect } from 'react';
import { Button, Typography } from '@mui/material';
import {
  FacebookLogo,
  LinkedInLogo,
  TwitterLogo,
  WhatsAppLogo,
  YouTubeLogo,
} from '@/components/ui/dataDisplay/icons';

/**
 * Props for the Hero section.
 *
 * eventName/eventTheme/venue/date: Displayed metadata for the event.
 * year, month (1-based), startDate, endDate: Used to compute countdown windows.
 * className: Tailwind classes for layout customizations.
 * id: Anchor target for in-page navigation.
 * textColor: Tailwind text colors for contrast on background image.
 * downloadURL: Optional link to a downloadable concept paper or brochure.
 */
type HeroProps = {
  eventName: string;
  eventTheme: string;
  venue: string;
  date: string;
  year: number;
  month: number; // 1-based
  startDate: number;
  endDate: number;
  className?: string;
  id?: string;
  textColor?: string;
  downloadURL?: string;
};

const Hero = ({
  eventName,
  eventTheme,
  venue,
  date,
  year,
  month,
  startDate,
  endDate,
  className = '',
  textColor = 'text-white',
  id = '',
  downloadURL = '',
}: HeroProps) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    status: 'before', // 'before' | 'during' | 'ended'
  });

  useEffect(() => {
    // Use local Date instead of UTC to avoid mismatched timezone issues
    const eventStart = new Date(year, month - 1, startDate, 0, 0, 0);
    const eventEnd = new Date(year, month - 1, endDate, 23, 59, 59);

    const updateCountdown = () => {
      const now = new Date();

      if (now < eventStart) {
        const diff = eventStart.getTime() - now.getTime();
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((diff / (1000 * 60)) % 60);
        const seconds = Math.floor((diff / 1000) % 60);

        setTimeLeft({ days, hours, minutes, seconds, status: 'before' });
      } else if (now >= eventStart && now <= eventEnd) {
        const diff = eventEnd.getTime() - now.getTime();
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((diff / (1000 * 60)) % 60);
        const seconds = Math.floor((diff / 1000) % 60);

        setTimeLeft({ days, hours, minutes, seconds, status: 'during' });
      } else {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
          status: 'ended',
        });
      }
    };

    // Kick off immediately, then tick once per second.
    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, [startDate, endDate, year, month]);

  const { days, hours, minutes, seconds, status } = timeLeft;

  const units = [
    { value: days, label: 'days' },
    { value: hours, label: 'hours' },
    { value: minutes, label: 'minutes' },
    { value: seconds, label: 'seconds' },
  ];

  // SCROLL FUNCTION: smooth-scroll to a target section if it exists.
  const scrollToSection = (id: string) => {
    const target = document.getElementById(id);
    if (!target) return;

    target.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  const downloadConceptPaper = () => {
    if (downloadURL) {
      window.open(downloadURL, '_blank');
    }
  };

  return (
    <div
      id={id}
      className={`${className} flex w-full flex-col items-center justify-center`}
    >
      <div className='flex h-full w-full max-w-6xl flex-1 items-center justify-center'>
        <div className='relative mx-4 flex w-full flex-col gap-8 rounded-xl bg-blue-500/30 p-8 backdrop-blur-md md:flex-row lg:mx-0 lg:gap-12 lg:p-10 xl:gap-16 xl:p-12'>
          <div className='flex w-full flex-col items-center justify-center gap-6 md:max-w-3/4 md:items-start md:gap-8 xl:gap-10'>
            <div className='flex flex-col gap-4'>
              <Typography
                variant='h1'
                className='text-center font-semibold text-white md:text-left'
              >
                {eventName}
              </Typography>
              <Typography
                variant='body1'
                className='text-center text-lg text-white md:text-left'
              >
                <span className='font-bold'>{year} THEME:</span> {eventTheme}
              </Typography>
            </div>

            <div className='flex flex-col items-center justify-center gap-2 md:items-start'>
              <Typography
                variant='body1'
                className='text-center text-lg text-white'
              >
                <span className='font-bold'>Venue:</span> {venue}
              </Typography>
              <Typography
                variant='body1'
                className='text-center text-lg text-white'
              >
                <span className='font-bold'>Date:</span> October 2026
                {/*TODO: enable once exact dates are confirmed*/}
                {/*<span className='font-bold'>Date:</span> {date}*/}
              </Typography>
            </div>

            {/*TODO: Implement online registration by creating a linking the form to a Google Sheet file*/}
            {/* Register → contact */}
            <Button
              variant='contained'
              color='success'
              className='text-white transition-colors duration-300'
              onClick={() => {
                scrollToSection('contact');
              }}
            >
              Register
            </Button>

            <div className='flex h-16 gap-4'>
              <a
                href='https://www.facebook.com/profile.php?id=61583658826862'
                target='_blank'
                rel='noopener noreferrer'
              >
                <FacebookLogo />
              </a>
              <a
                href='https://www.linkedin.com/company/lvbice/about/?viewAsMember=true'
                target='_blank'
                rel='noopener noreferrer'
              >
                <LinkedInLogo />
              </a>
              <a
                href='https://x.com/lvbice/'
                target='_blank'
                rel='noopener noreferrer'
              >
                <TwitterLogo />
              </a>
              <a
                href='https://wa.me/254116126133'
                target='_blank'
                rel='noopener noreferrer'
              >
                <WhatsAppLogo />
              </a>

              <a
                href='https://www.youtube.com/@LVBICE'
                target='_blank'
                rel='noopener noreferrer'
              >
                <YouTubeLogo />
              </a>
            </div>
          </div>

          {/*TODO: Add image here once speakers are confirmed*/}
          {/*<div className='flex w-full min-w-[320px] flex-1 border-4 border-blue-200'>*/}
          {/*  image*/}
          {/*</div>*/}

          <div className='absolute right-0 bottom-20 left-0 -z-10 opacity-10 lg:left-40'>
            <Typography
              variant='caption'
              className='text-center text-7xl font-black text-white md:text-left lg:text-8xl 2xl:text-9xl'
            >
              LVBICE 2026
            </Typography>
          </div>
        </div>
      </div>

      <div className='relative min-h-32 w-full max-w-4xl min-w-[320px]'>
        <div className='absolute inset-0 mx-4 mt-4 flex min-h-max flex-col items-center justify-center gap-6 rounded-xl bg-blue-500 p-4 shadow-lg md:gap-8 lg:mx-0'>
          {/* Countdown */}
          <div className='flex items-center justify-center gap-2 md:gap-4'>
            {status === 'before' &&
              units.map((unit, idx) => (
                <React.Fragment key={unit.label}>
                  <div className='flex flex-col items-center'>
                    <Typography
                      variant='h1'
                      className='text-center text-white md:w-28'
                      style={{ fontFamily: 'var(--font-geist-mono)' }}
                    >
                      {unit.value}
                    </Typography>
                    <Typography
                      variant='h5'
                      className='text-center text-white md:w-28'
                    >
                      {unit.label}
                    </Typography>
                  </div>
                  {idx < units.length - 1 && (
                    <span className='text-2xl text-white'>:</span>
                  )}
                </React.Fragment>
              ))}

            {status === 'during' && (
              <Typography variant='h1' className='font-bold text-white'>
                Currently happening
              </Typography>
            )}

            {status === 'ended' && (
              <Typography variant='h1' className='font-bold text-white'>
                Event Ended
              </Typography>
            )}
          </div>

          {/* Call to Action */}
          <div className='flex flex-col gap-2 md:flex-row md:gap-5 lg:gap-6 xl:gap-7 2xl:gap-8'>
            {[
              'Register',
              'Become a Sponsor',
              'Contact the Secretariat',
              'Download the Concept Paper',
            ].map(item => (
              <Button
                key={item}
                variant='text'
                className={`${textColor} transition-colors duration-300`}
                onClick={() => {
                  if (item === 'Download the Concept Paper') {
                    downloadConceptPaper();
                  } else {
                    scrollToSection('contact');
                  }
                }}
              >
                {item}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
