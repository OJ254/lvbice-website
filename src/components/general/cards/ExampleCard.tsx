'use client';

import React from 'react';
import { Typography, CardActionArea, CardContent } from '@mui/material';
import CustomCard from './CustomCard';
import Link from 'next/link';

interface ExampleCardProps {
  href: string;
}

function ExampleCard({ href }: ExampleCardProps) {
  return (
    <CustomCard className='relative m-0 flex w-full flex-col gap-4'>
      <Link href={href} passHref prefetch={true}>
        <CardActionArea>
          <CardContent>
            <Typography variant='h6' component='div' gutterBottom>
              Build with Confidence
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              Everything starts with a single file. From there, your ideas take
              shape, your layout comes alive, and your product begins to speak.
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              Explore foundational patterns, test interactions, and refine your
              flow—your canvas is ready.
            </Typography>
          </CardContent>
        </CardActionArea>
      </Link>
    </CustomCard>
  );
}

export default ExampleCard;
