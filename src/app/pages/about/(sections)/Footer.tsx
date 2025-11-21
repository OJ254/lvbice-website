'use client';

import { Typography, Button } from '@mui/material';
import React from 'react';
import {
  FacebookLogo,
  LinkedInLogo,
  TwitterLogo,
  WhatsAppLogo,
  YouTubeLogo,
} from '@/components/ui/dataDisplay/icons';

type FooterProps = {
  id?: string;
  className?: string;
};

const Footer = ({ id = '', className = '' }: FooterProps) => {
  return (
    <footer
      id={id}
      className={`${className} flex w-full justify-center bg-blue-500`}
    >
      <div className='max-w-9xl flex w-full flex-col items-center justify-center gap-10 px-4 py-16 text-white lg:px-0 lg:py-20'>
        <div>
          <Typography variant='h5' className='line-clamp-3'>
            About LVBICE
          </Typography>
          <Typography variant='body2' className='line-clamp-5'>
            The Lake Victoria Basin International Conference and Exhibition
            (LVBICE) is an annual regional platform promoting sustainable water
            and sanitation management through innovation, research, and
            collaboration. The initiative brings together governments,
            researchers, development partners, and the private sector to drive
            climate-resilient solutions for the Lake Victoria Basin and beyond.
          </Typography>
        </div>
        <div className='grid w-full grid-cols-1 gap-8 md:grid-cols-2 md:gap-12 lg:grid-cols-3 lg:gap-16'>
          <div className='flex flex-col gap-2'>
            <Typography variant='body1' className='line-clamp-3 font-semibold'>
              Contact Information
            </Typography>
            <div className='flex flex-col gap-1'>
              <Typography variant='body2' className=''>
                Phone: +254 116 126133 / +254 751 297760
              </Typography>
              <Typography variant='body2' className=''>
                WhatsApp: +254 116 126133
              </Typography>
              <Typography variant='body2' className=''>
                Email: info@lvbice.com
              </Typography>
            </div>
          </div>
          <div className='flex flex-col gap-2'>
            <Typography variant='body1' className='line-clamp-3 font-semibold'>
              Office Hours
            </Typography>
            <div className='flex flex-col gap-1'>
              <Typography variant='body2' className=''>
                Monday – Friday: 8:00 AM – 5:00 PM (EAT)
              </Typography>
            </div>
          </div>
          <div className='flex flex-col gap-2'>
            <Typography variant='body1' className='line-clamp-3 font-semibold'>
              Key Partners
            </Typography>
            <div className='flex flex-col gap-1'>
              <Typography variant='body2' className=''>
                - Environmental Institute of Kenya [EIK] - Nyanza
              </Typography>
              <Typography variant='body2' className=''>
                - Center for Humanitarian Affair and Community Development
                [CHACODEV]
              </Typography>
            </div>
          </div>
        </div>
        <div className='grid w-full grid-cols-1 gap-8 md:grid-cols-2 md:gap-12 lg:grid-cols-3 lg:gap-16'>
          <div className='flex flex-col gap-2'>
            <div className='flex flex-col gap-1'>
              <Typography variant='body2' className=''>
                © 2025 Lake Victoria Basin International Conference and
                Exhibition (LVBICE)
              </Typography>
              <Typography variant='body2' className=''>
                All Rights Reserved
              </Typography>
            </div>
          </div>
          <div className='flex flex-col gap-2'>
            <Typography variant='body1' className='line-clamp-3 font-semibold'>
              Designed and Managed by LVBICE Secretariat
            </Typography>
            <div className='flex gap-2'>
              <Button className='text-white'>Privacy Policy</Button>
            </div>
          </div>
          <div className='flex flex-col gap-2'>
            <Typography variant='body1' className='line-clamp-3 font-semibold'>
              Follow Us:
            </Typography>
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
        </div>
      </div>
    </footer>
  );
};

export default Footer;
