'use client';

import { Typography, Button } from '@mui/material';
import { WeatherIcon } from '@/components/ui/dataDisplay/icons';
import React from 'react';
import ThemesBg from '@/assets/images/african-children-enjoying-life.jpg';

type ThemesSectionProps = {
  id?: string;
  className?: string;
};

type ThemeItem = {
  title: string;
  description: string;
};

const themeItems: ThemeItem[] = [
  {
    title: 'Smart and Sustainable Water and Sanitation Infrastructure',
    description:
      'Integrating AI, IoT and other technologies to monitor water quality, detect leaks, optimize distribution, and ensure sustainable sanitation infrastructure management.',
  },
  {
    title:
      'Climate-Smart Water Infrastructure for Health and Public Institutions',
    description:
      'Strengthening health and public services through climate-adaptive water infrastructure, digital monitoring, and innovative technologies for reliable water delivery.',
  },
  {
    title: 'Carbon Market and Credit Financing',
    description:
      'Exploring carbon markets, credit mechanisms, and sustainable financing tools to support low-carbon development and incentivize environmental stewardship.',
  },
  {
    title: 'Policy, Governance, Financing, and Digital Transformation',
    description:
      'Creating policies, governance models, and financing strategies that promote digital adoption, investment, and efficient sustainable infrastructure development.',
  },
  {
    title: 'Inclusive Climate-Smart Participation',
    description:
      'Promoting inclusive participation in climate-smart practices, enhancing skills, raising awareness, and strengthening local capacities for sustainable development initiatives.',
  },
  {
    title: 'Disaster Risk Reduction and Climate Resilience',
    description:
      'Applying artificial intelligence for early warning systems, flood modeling, and adaptive planning to enhance climate resilience and disaster preparedness.',
  },
  {
    title: 'Public-Private Partnerships for Innovation and Sustainability',
    description:
      'Fostering collaboration between public and private sectors to drive AI integration, innovative infrastructure, and sustainable development solutions.',
  },
  {
    title: 'AI and Data-Driven Agriculture',
    description:
      'Leveraging AI, drones, precision farming, and predictive analytics to optimize irrigation, boost productivity, and ensure food and water security.',
  },
  {
    title: 'Solid Waste and Micro-Pollutants Management',
    description:
      'Implementing innovative technologies and strategies to manage solid waste, reduce micro-pollutants, and protect environmental and public health.',
  },
];

// Card component with dark theme support
const ThemeCard = React.memo(({ title, description }: ThemeItem) => (
  <div
    role='region'
    aria-label={title}
    className='surface surface-hover flex transform flex-col items-start gap-3 rounded-lg p-4 shadow-md transition-all duration-200 hover:-translate-y-1 hover:shadow-lg'
  >
    <div className='flex h-16 w-16 items-center justify-center rounded-md bg-blue-500/20 shadow-md dark:bg-blue-400/30'>
      <WeatherIcon className='h-12 w-12 text-blue-600 dark:text-blue-200' />
    </div>
    <Typography variant='h6' className='font-semibold'>
      {title}
    </Typography>
    <Typography variant='body2' className=''>
      {description}
    </Typography>
  </div>
));

const ThemesSection = ({ id = '', className = '' }: ThemesSectionProps) => {
  return (
    <section
      id={id}
      className={`${className} flex w-full flex-col items-center`}
    >
      {/*TODO: enable once speakers are confirmed*/}
      {/*<div*/}
      {/*  className='flex w-full flex-col items-center justify-center bg-blue-100 bg-cover bg-center bg-blend-overlay lg:flex-row lg:items-stretch dark:bg-blue-950'*/}
      {/*  style={{*/}
      {/*    backgroundImage: `url(${ThemesBg.src})`,*/}
      {/*  }}*/}
      {/*>*/}
      <div className='flex w-full flex-col items-center justify-center lg:flex-row lg:items-stretch'>
        <div className='max-w-9xl flex w-full flex-col items-center justify-center gap-8 px-4 py-16 lg:px-0 lg:py-20'>
          {/* Decorative dots */}
          <div className='flex gap-2'>
            {[1, 2, 3].map(i => (
              <span
                key={i}
                className='aspect-square h-2 rounded-full bg-yellow-500'
              />
            ))}
          </div>

          {/* Section Header */}
          <header className='mb-8 flex w-full flex-col items-center justify-center space-y-4'>
            <Typography variant='h4' className='text-center font-semibold'>
              What We Will Speak About
            </Typography>
            <div className='flex w-full flex-col items-center justify-center md:flex-row md:justify-between md:gap-4 lg:max-w-2xl'>
              <Typography variant='body2' className='max-w-2xl text-center'>
                LVBICE 2026 Concept Paper.pdf
              </Typography>
              <div className='mt-2 flex gap-2'>
                <Button size='small' variant='outlined'>
                  Read Online
                </Button>
                <Button size='small' variant='contained'>
                  Download
                </Button>
              </div>
            </div>
          </header>

          <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3'>
            {themeItems.map((item, index) => (
              <ThemeCard key={index} {...item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThemesSection;
