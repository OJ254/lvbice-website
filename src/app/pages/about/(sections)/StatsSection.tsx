'use client';

import { Box, Typography } from '@mui/material';
import WaterDrop from '@/assets/images/water-drop.jpg';

type StatsSectionProps = {
  id?: string;
  className?: string;
};

const StatsSection = ({ id = '', className = '' }: StatsSectionProps) => {
  return (
    <Box id={id} className={`${className} flex flex-col items-center`}>
      <div
        className='flex w-full flex-col items-center justify-center bg-blue-50 bg-cover bg-center bg-blend-overlay lg:flex-row lg:items-stretch dark:bg-blue-950'
        style={{
          backgroundImage: `url(${WaterDrop.src})`,
        }}
      >
        <div className='max-w-9xl flex w-full flex-col items-center justify-center gap-8 px-4 py-16 lg:px-0 lg:py-20'>
          <div className='flex gap-2'>
            <span className='aspect-square h-2 bg-yellow-500' />
            <span className='aspect-square h-2 bg-yellow-500' />
            <span className='aspect-square h-2 bg-yellow-500' />
          </div>

          <div className='flex flex-col items-center justify-center space-y-4'>
            <Typography variant='h5' className='text-center font-semibold'>
              Key Water and Climate Realities in the Lake Victoria Basin
            </Typography>
            <Typography variant='body1' className='max-w-2xl text-center'>
              This is what is already happening in the Lake Victoria Basin due
              to climate change, population pressure, and environmental
              degradation:
            </Typography>
          </div>

          <div className='grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4 xl:gap-8'>
            <div className='flex flex-col items-center justify-start gap-2 lg:gap-4'>
              <Typography variant='h4' className='text-center font-semibold'>
                40 Million
              </Typography>
              <Typography variant='body1' className='text-center'>
                people depend directly on the Lake Victoria Basin for water,
                food, and livelihoods.
              </Typography>
            </div>
            <div className='flex flex-col items-center justify-start gap-2 lg:gap-4'>
              <Typography variant='h4' className='text-center font-semibold'>
                43%
              </Typography>
              <Typography variant='body1' className='text-center'>
                of residents in parts of the basin lack access to safe drinking
                water, largely due to climate-driven pressures on supply
                systems.
              </Typography>
            </div>{' '}
            <div className='flex flex-col items-center justify-start gap-2 lg:gap-4'>
              <Typography variant='h4' className='text-center font-semibold'>
                3.1 Million
              </Typography>
              <Typography variant='body1' className='text-center'>
                people in the region remain vulnerable to water scarcity, aging
                infrastructure, and climate impacts on water quality.
              </Typography>
            </div>
            <div className='flex flex-col items-center justify-start gap-2 lg:gap-4'>
              <Typography variant='h4' className='text-center font-semibold'>
                9 Countries
              </Typography>
              <Typography variant='body1' className='text-center'>
                in the Nile Basin are already experiencing increased climate
                stress on shared water resources, demanding cross-border
                cooperation
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </Box>
  );
};

export default StatsSection;
