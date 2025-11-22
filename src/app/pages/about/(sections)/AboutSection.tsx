// src/app/pages/about/AboutSection.tsx

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
      <div className='flex flex-col gap-8 md:gap-12 lg:flex-row lg:gap-16'>
        {/* Left Content */}
        <div className='flex flex-col items-start justify-center gap-8 px-4 py-10 lg:w-1/2 lg:py-20 lg:pl-16 xl:pl-32 2xl:pl-48'>
          {/* Decorative dots */}
          <div className='flex gap-2'>
            {[1, 2, 3].map(i => (
              <span
                key={i}
                className='aspect-square h-2 rounded-full bg-yellow-500'
              />
            ))}
          </div>

          {/* Title */}
          <Typography variant='h4' className='font-semibold'>
            About LVBICE
          </Typography>

          {/* Body Text */}
          <div className='space-y-5 leading-relaxed'>
            <Typography variant='body1'>
              The Lake Victoria Basin International Conference and Exhibition
              (LVBICE) is a premier regional forum scheduled for October 2026 at
              the Acacia Hotel in Kisumu, Kenya. Organized by the Environmental
              Institute of Kenya [EIK] in partnership with the public and
              private sector, the conference brings together leaders, experts,
              innovators, and institutions dedicated to advancing sustainable
              development and climate resilience within the Lake Victoria Basin.
            </Typography>

            <Typography variant='body1'>
              LVBICE 2026 serves as a regional knowledge-sharing and innovation
              platform focused on Artificial Intelligence, digital technologies,
              and smart infrastructure in water management, agriculture, and
              environmental sustainability. Participants will include government
              officials, development agencies, researchers, private sector
              innovators, civil society organizations, and community-led
              initiatives.
            </Typography>

            <Typography variant='body1'>
              The event will feature breakthrough research, digital solutions,
              and practical case studies that support climate adaptation and
              inclusive economic growth. It will also offer opportunities for
              networking, policy dialogue, and strategic partnerships that
              strengthen sustainable development across the Lake Victoria Basin
              and the greater Nile Basin region.
            </Typography>
          </div>
        </div>

        {/* Right Image */}
        <div className='flex w-full lg:w-1/2'>
          <div
            className='h-72 w-full bg-cover bg-center md:h-96 lg:h-full'
            style={{ backgroundImage: `url(${lake.src})` }}
          ></div>
        </div>
      </div>
    </Box>
  );
};

export default AboutSection;
