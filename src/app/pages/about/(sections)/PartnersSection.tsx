// src/app/pages/about/PartnersSection.tsx
// "use client" is required because this section uses Swiper (a browser-only
// carousel library), attaches interactive behavior, and renders MUI components.
// These features require the component to run on the client for proper event
// handling and layout measurements.
'use client';

import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import 'swiper/css';

import CHACODEV from '@/assets/images/chacodev-logo.jpg';
import EIK from '@/assets/images/EIK-logo.jpeg';
import Link from 'next/link';

/**
 * Props for PartnersSection.
 *
 * id: Optional anchor id used for in-page navigation.
 * className: Optional Tailwind utility classes to extend layout.
 */
type PartnersSectionProps = {
  id?: string;
  className?: string;
};

// Partner logo/name data rendered in the carousel.
const partners = [
  {
    image: EIK,
    name: 'Environmental Institute of Kenya [EIK] - Nyanza',
    href: 'https://www.eik.co.ke/',
  },
  {
    image: CHACODEV,
    name: 'Center for Humanitarian Affair and Community Development [CHACODEV]',
  },
];

/**
 * PartnersSection shows a simple autoplaying carousel of partner logos.
 *
 * Notes:
 * - Swiper's Autoplay module advances slides every ~2.5s and loops.
 * - Breakpoints adjust slides per view for responsive layouts.
 */
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
                className='h-2 w-2 rounded-full bg-yellow-500'
              ></span>
            ))}
          </div>

          <Typography variant='h4' className='mb-4 text-center font-semibold'>
            LVBICE 2026 Partners
          </Typography>

          {/* Swiper Carousel: autoplay + responsive slidesPerView */}
          <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            loop
            spaceBetween={30}
            breakpoints={{
              0: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              // 1024: { slidesPerView: 3 },
              // 1536: { slidesPerView: 4 },
            }}
            className='w-full max-w-6xl'
          >
            {partners.map((partner, index) => (
              <SwiperSlide key={index}>
                <div className='flex flex-col items-center space-y-3'>
                  <Link
                    href={partner.href ?? '#'}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='relative flex aspect-square w-full max-w-xs items-center justify-center rounded-md bg-white shadow-md'
                  >
                    <Image
                      src={partner.image}
                      alt={partner.name}
                      fill
                      className='rounded-md object-contain'
                    />
                  </Link>

                  <Typography className='text-center'>
                    {partner.name}
                  </Typography>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </Box>
  );
};

export default PartnersSection;
