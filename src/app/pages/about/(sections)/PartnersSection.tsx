'use client';

import { Box, Typography, Button } from '@mui/material';
import CHACODEV from '@/assets/images/chacodev-logo.jpg';
import EIK from '@/assets/images/EIK-logo.jpeg';
import Image from 'next/image';

type PartnersSectionProps = {
  id?: string;
  className?: string;
};

const PartnersSection = ({ id = '', className = '' }: PartnersSectionProps) => {
  return (
    <Box id={id} className={`${className} flex flex-col items-center`}>
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
          <div className='flex w-full flex-col items-center justify-center space-y-4'>
            <Typography variant='h5' className='text-center font-semibold'>
              LVBICE 2026 Partners
            </Typography>
          </div>
          <div className='grid w-full max-w-xl grid-cols-1 gap-10 md:grid-cols-2 md:gap-12 lg:gap-14 xl:gap-16'>
            <div className='space-y-2'>
              {/*<div className='bg-container-light-default/50 dark:bg-container-dark-default/50 relative flex aspect-square items-center justify-center rounded-md shadow-md'>*/}
              <div className='relative flex aspect-square items-center justify-center rounded-md bg-white shadow-md'>
                <Image
                  src={EIK}
                  alt='Environmental Institute of Kenya logo'
                  fill
                  className='rounded-md object-contain'
                  priority
                />
              </div>

              <Typography>
                Environmental Institute of Kenya [EIK] - Nyanza
              </Typography>
            </div>

            <div className='space-y-2'>
              <div className='relative flex aspect-square items-center justify-center rounded-md bg-white shadow-md'>
                <Image
                  src={CHACODEV}
                  alt='chacodev logo'
                  fill
                  className='rounded-md object-contain'
                  priority
                />
              </div>
              <Typography>
                Center for Humanitarian Affair and Community Development
                [CHACODEV]
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </Box>
  );
};

export default PartnersSection;
