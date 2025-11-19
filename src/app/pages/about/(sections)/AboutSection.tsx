'use client';

import { Box, Typography } from '@mui/material';
import lake from '@/assets/images/lake.jpg';

type AboutSectionProps = {
  id?: string;
  className?: string;
};

const AboutSection = ({ id = '', className = '' }: AboutSectionProps) => {
  return (
    <Box id={id} className={`${className} flex flex-col items-center`}>
      <div className='flex flex-col justify-center lg:flex-row lg:items-stretch'>
        <div className='flex flex-col items-start justify-center gap-8 px-4 py-8 lg:w-1/2 lg:py-16 lg:pr-16 lg:pl-4 xl:py-20 xl:pr-16 xl:pl-40 2xl:py-20 2xl:pr-20 2xl:pl-60'>
          <div className='flex gap-2'>
            <span className='aspect-square h-2 bg-yellow-500' />
            <span className='aspect-square h-2 bg-yellow-500' />
            <span className='aspect-square h-2 bg-yellow-500' />
          </div>

          <Typography variant='h5' className='text-center font-semibold'>
            About LVBICE
          </Typography>

          <div className='space-y-4'>
            <Typography variant='body1'>
              Welcome to the Lake Victoria Basin International Conference and
              Exhibition (LVBICE), scheduled for October 2026 at the Acacia
              Hotel in Kisumu, Kenya. The event is organized by the Ministry of
              Water, Sanitation and Irrigation through the Water Works
              Development Agencies, bringing together professionals and
              institutions dedicated to sustainable water management and climate
              resilience in the Lake Victoria Basin.
            </Typography>
            <Typography variant='body1'>
              The conference will feature experts from government, academia,
              industry, development partners, and civil society who specialize
              in water security, climate smart infrastructure, sanitation, and
              environmental sustainability. LVBICE 2026 will showcase global
              research, innovative case studies, and practical solutions while
              offering valuable opportunities for networking, collaboration, and
              partnership development.
            </Typography>
          </div>
        </div>
        <div className='flex w-full flex-1 items-center justify-center lg:w-1/2'>
          <div
            className='h-72 w-full bg-cover bg-center bg-no-repeat md:h-96 lg:min-h-full lg:flex-1 lg:bg-cover'
            style={{ backgroundImage: `url(${lake.src})` }}
          ></div>
        </div>
      </div>
    </Box>
  );
};

export default AboutSection;
