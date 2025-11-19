'use client';

import React, { useState, useEffect } from 'react';
import Header from '@/components/general/Header/Header';
import HeroBg from '@/assets/images/hero-bg.jpg';
import Hero from './(sections)/Hero';
import AboutSection from './(sections)/AboutSection';
import StatsSection from '@/app/pages/about/(sections)/StatsSection';
import ThemesSection from '@/app/pages/about/(sections)/ThemesSection';
import PartnersSection from '@/app/pages/about/(sections)/PartnersSection';
import ArticlesSection from '@/app/pages/about/(sections)/ArticlesSection';
import ContactSection from '@/app/pages/about/(sections)/ContactSection';
import Footer from '@/app/pages/about/(sections)/Footer';

const About = () => {
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => setScrollY(window.scrollY);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const eventName =
    'Lake Victoria Basin International Conference and Exhibition';
  const eventTheme =
    'Harnessing Artificial Intelligence for Sustainable Development in the Lake Victoria Basin';
  const venue = 'Acacia Hotel, Kisumu, Kenya';
  const year = 2026;
  const month = 10;
  const startDate = 1;
  const endDate = 0;

  // Array of month names
  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const monthName = monthNames[month - 1]; // convert number to name
  const dates = startDate + ' - ' + endDate;
  const date = `${dates} ${monthName}, ${year}`;

  const maxScroll = 300; // full opacity
  const opacity = Math.min(scrollY / maxScroll, 1);

  const textColor = 'text-white hover:text-[#E68600]';

  return (
    <div className='relative' id='about' tabIndex={-1}>
      {/* Header */}
      <header
        className='fixed top-0 z-50 flex w-full items-center justify-center px-20 py-2 transition-all duration-300 lg:py-4'
        style={{
          backgroundColor: `rgba(59, 130, 246, ${opacity})`,
          backdropFilter: opacity > 0 ? 'blur(10px)' : 'none',
        }}
      >
        <Header textColor={textColor} />
      </header>

      {/* Hero Section */}
      <section
        className='flex min-h-screen flex-col bg-cover bg-center bg-no-repeat pt-28'
        style={{ backgroundImage: `url(${HeroBg.src})` }}
      >
        <Hero
          id='hero'
          className='flex w-full flex-1 flex-col items-center justify-center'
          venue={venue}
          date={date}
          startDate={startDate}
          endDate={endDate}
          year={year}
          month={month}
          eventName={eventName}
          eventTheme={eventTheme}
          textColor={textColor}
        />
      </section>

      {/* Main content */}
      <main className='mt-56 flex w-full flex-col items-center justify-center md:mt-28'>
        <AboutSection id='about' className='w-full' />
        <StatsSection id='stats' className='w-full' />
        {/*<section id='speakers'>Speakers</section>*/}
        <ThemesSection id='themes' className='w-full' />
        <PartnersSection id='partners' className='w-full' />
        <ArticlesSection id='latest-news' className='w-full' />
        <ContactSection id='contact' className='w-full' />
      </main>

      <Footer className='w-full' />
    </div>
  );
};

export default About;
