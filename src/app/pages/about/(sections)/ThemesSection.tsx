'use client';

import { Box, Typography, Button } from '@mui/material';
import { WeatherIcon } from '@/components/ui/dataDisplay/icons';

type ThemesSectionProps = {
  id?: string;
  className?: string;
};

type ThemeItem = {
  title: string;
  description: string;
};

const statItems: ThemeItem[] = [
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
    title: 'Smart and Sustainable Water and Sanitation Infrastructure',
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

const ThemeCard = ({ title, description }: ThemeItem) => (
  <div className='flex flex-col items-start justify-start gap-2 lg:gap-4'>
    <div className='flex h-16 w-16 items-center justify-center rounded-md bg-blue-500/50'>
      <WeatherIcon className='h-12 w-12' />
    </div>
    <Typography variant='h6'>{title}</Typography>
    <Typography variant='body1'>{description}</Typography>
  </div>
);

const ThemesSection = ({ id = '', className = '' }: ThemesSectionProps) => {
  return (
    <Box id={id} className={`${className} flex flex-col items-center`}>
      {/*TODO: enable once speakers are confirmed*/}
      {/*<div*/}
      {/*  className='flex w-full flex-col items-center justify-center bg-blue-50 bg-cover bg-center bg-blend-overlay lg:flex-row lg:items-stretch dark:bg-blue-950'*/}
      {/*  style={{*/}
      {/*    backgroundImage: `url(${WaterDrop.src})`,*/}
      {/*  }}*/}
      {/*>*/}
      <div className='flex w-full flex-col items-center justify-center lg:flex-row lg:items-stretch'>
        <div className='max-w-9xl flex w-full flex-col items-center justify-center gap-8 px-4 py-16 lg:px-0 lg:py-20'>
          <div className='flex gap-2'>
            <span className='aspect-square h-2 bg-yellow-500' />
            <span className='aspect-square h-2 bg-yellow-500' />
            <span className='aspect-square h-2 bg-yellow-500' />
          </div>

          <div className='flex w-full flex-col items-center justify-center space-y-4'>
            <Typography variant='h5' className='text-center font-semibold'>
              What We Will Speak About
            </Typography>
            <div className='flex w-full flex-col items-center justify-center md:flex-row md:justify-between md:gap-4 lg:max-w-2xl'>
              <Typography variant='body2' className='max-w-2xl text-center'>
                LVBICE 2026 Concept Paper.pdf
              </Typography>
              <div className='mt-2 flex justify-between gap-2'>
                <Button size='small'>Read Online</Button>
                <Button size='small'>Download</Button>
              </div>
            </div>
          </div>

          <div className='grid grid-cols-1 gap-10 md:grid-cols-2 lg:gap-12 xl:grid-cols-3 xl:gap-16 2xl:gap-20'>
            {statItems.map((item, index) => (
              <ThemeCard key={index} {...item} />
            ))}
          </div>
        </div>
      </div>
    </Box>
  );
};

export default ThemesSection;
