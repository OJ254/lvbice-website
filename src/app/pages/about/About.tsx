// "use client" tells Next.js (App Router) to render this file as a client
// component. This page must run on the client because:
// - It uses React hooks (useState, useEffect) which are client-only.
// - It reads from browser APIs like window and document for scroll offsets
//   and smooth-scrolling to hash targets.
// - It renders interactive UI (e.g., a dynamic header whose opacity changes
//   with scroll) that depends on client-side state.
// Without this directive, Next.js would treat this file as a server component,
// and attempting to access window/document or use stateful hooks would throw.
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

/**
 * About page (client component).
 *
 * Responsibilities:
 * - Renders the full About landing experience: sticky Header, Hero, multiple
 *   content sections (About, Stats, Themes, Partners, Articles, Contact), and Footer.
 * - Listens to window scroll to calculate a dynamic background/blur for the
 *   fixed header, creating a smooth transition as the user scrolls.
 * - On initial mount, if the URL contains a hash (e.g., /pages/about#themes),
 *   waits for the target element to exist and then smoothly scrolls into view.
 * - Computes and passes event metadata (dates, venue, name, theme) to the Hero.
 *
 * Notes:
 * - No server-side logic is used here; all interactivity is client-driven.
 * - The header color/blur is derived from the current scroll position for UX polish.
 */
const About = () => {
  const [scrollY, setScrollY] = useState(0);

  // Track scroll position so we can derive header opacity as the user scrolls.
  const handleScroll = () => setScrollY(window.scrollY);

  useEffect(() => {
    // Attach scroll listener on mount and clean up on unmount.
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Event metadata used across the page (e.g., in the Hero section).
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

  // Convert numeric month to a human-friendly month name.
  const monthName = monthNames[month - 1];
  // Build a display range for dates (e.g., "1 - 3 October, 2026").
  const dates = startDate + ' - ' + endDate;
  const date = `${dates} ${monthName}, ${year}`;

  // Use scroll position to interpolate header background opacity up to 1.
  const maxScroll = 300; // the scroll distance at which header reaches full opacity
  const opacity = Math.min(scrollY / maxScroll, 1);

  // Shared text color classes passed to the Header and Hero for consistent theming.
  const textColor = 'text-white hover:text-[#E68600]';

  useEffect(() => {
    // If the URL contains a hash (e.g., #contact), smoothly scroll to that
    // section after mount. We poll briefly (via setInterval) to ensure the
    // target element exists in the DOM, which may be necessary in dynamic
    // rendering scenarios.
    const hash = window.location.hash.slice(1);
    if (!hash) return;

    const interval = setInterval(() => {
      const target = document.getElementById(hash);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        clearInterval(interval);
      }
    }, 50);

    return () => clearInterval(interval);
  }, []);

  // Public file URLs for the Concept paper: inline preview and direct download.
  const fileURL =
    'https://drive.google.com/file/d/1-l5sfPaj--SS-FTXRdy3tWWr1QT9AuUz/preview';
  const downloadURL =
    'https://drive.google.com/uc?export=download&id=1-l5sfPaj--SS-FTXRdy3tWWr1QT9AuUz';

  // Public file URLs for the Invitation Letter & Packages: inline preview and direct download.
  const invitationFileURL =
    'https://drive.google.com/file/d/1498stQAFIB9L1CvaeR3urp40-KN_5paT/preview';
  const invitationDownloadURL =
    'https://drive.google.com/uc?export=download&id=1498stQAFIB9L1CvaeR3urp40-KN_5paT';

  return (
    <div className='relative' id='about' tabIndex={-1}>
      {/* Header */}
      <header
        className='fixed top-0 z-50 flex w-full items-center justify-center py-2 transition-all duration-300 lg:py-4 xl:px-0'
        style={{
          // As the user scrolls, increase background opacity and apply blur for
          // a translucent, glass-like effect over content.
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
          downloadURL={downloadURL}
          invitationDownloadURL={invitationDownloadURL}
        />
      </section>

      {/* Main content */}
      <main className='mt-56 flex w-full flex-col items-center justify-center md:mt-28'>
        <AboutSection id='about' className='w-full scroll-mt-28' />
        <StatsSection id='stats' className='w-full scroll-mt-28' />
        {/*<section id='speakers'>Speakers</section>*/}
        <ThemesSection
          id='themes'
          fileURL={fileURL}
          downloadURL={downloadURL}
          className='w-full scroll-mt-28'
        />
        <PartnersSection id='partners' className='w-full scroll-mt-28' />
        <ArticlesSection id='latest-news' className='w-full scroll-mt-28' />
        <ContactSection id='contact' className='w-full scroll-mt-28' />
      </main>

      <Footer className='w-full' />
    </div>
  );
};

export default About;
