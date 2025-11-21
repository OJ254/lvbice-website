'use client';

import { Box, Typography, TextField, Button } from '@mui/material';
import lake from '@/assets/images/ai-generated-3d-water.jpg';
import React from 'react';

type ContactSectionProps = {
  id?: string;
  className?: string;
};

const ContactSection = ({ id = '', className = '' }: ContactSectionProps) => {
  return (
    <Box id={id} className={`${className} flex flex-col items-center`}>
      <div className='flex w-full flex-col bg-blue-500/20 lg:flex-row'>
        {/* Left Content */}
        <div className='flex w-full lg:min-w-1/2'>
          <div
            className='h-72 w-full bg-cover bg-center md:h-96 lg:h-full'
            style={{ backgroundImage: `url(${lake.src})`, opacity: 0.25 }}
          ></div>
        </div>

        {/* Right Image */}
        <div className='flex w-full items-start justify-center px-4 py-10 lg:min-w-1/2 lg:py-20 lg:pr-16 lg:pl-20 xl:pr-32 2xl:pr-56'>
          <div className='flex w-full max-w-xl flex-col items-start justify-center gap-8'>
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
            <Typography variant='h4'>Contact LVBICE</Typography>

            <Typography variant='body1' className=''>
              For any questions about registering as an attendee, sponsor,
              partner, or exhibitor, or if you're interested in joining us as a
              speaker, we’d be happy to hear from you. Please reach out anytime.
            </Typography>

            <div className='flex flex-col gap-2'>
              <Typography variant='body1' className=''>
                <span className='font-bold'>Phone:</span> +254 116 126133 / +254
                751 297760
              </Typography>
              <Typography variant='body1' className=''>
                <span className='font-bold'>WhatsApp:</span> +254 116 126133
              </Typography>
              <Typography variant='body1' className=''>
                <span className='font-bold'>Email:</span> info@lvbice.com
              </Typography>
            </div>
            {/* Body Text */}
            <div className='w-full space-y-8'>
              <div className='w-full space-y-6'>
                <TextField
                  id='outlined-basic'
                  label='Name'
                  variant='outlined'
                  required
                  className='w-full bg-blue-500/10'
                />
                <div className='flex flex-col gap-6 md:flex-row lg:flex-col xl:flex-row'>
                  <TextField
                    id='outlined-basic'
                    label='Email'
                    variant='outlined'
                    required
                    className='w-full bg-blue-500/10'
                  />
                  <TextField
                    id='outlined-basic'
                    label='Phone (optional)'
                    variant='outlined'
                    className='w-full bg-blue-500/10'
                  />
                </div>

                <TextField
                  id='outlined-multiline-static'
                  multiline
                  rows={4}
                  label='Message'
                  variant='outlined'
                  required
                  className='w-full bg-blue-500/10'
                />
              </div>
              <Button variant='contained' className='w-full py-2 md:py-4'>
                Send
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Box>
  );
};

export default ContactSection;
