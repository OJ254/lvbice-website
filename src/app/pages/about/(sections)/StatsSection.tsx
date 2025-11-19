'use client';

import { Box, Typography } from '@mui/material';
import WaterDrop from '@/assets/images/water-drop.jpg';

type StatsSectionProps = {
  id?: string;
  className?: string;
};

const stats = [
  {
    value: '42 Million',
    text: `people depend directly on Lake Victoria for water, food, transport,
           and economic opportunities across five East African countries.`,
  },
  {
    value: '251,000 km²',
    text: `is the total size of the Lake Victoria Basin, one of the world’s
           most important transboundary freshwater ecosystems.`,
  },
  {
    value: 'USD 300 Billion',
    text: `is the new global climate finance goal established at COP29,
           supporting developing nations in climate adaptation and innovation.`,
  },
  {
    value: '5 Countries',
    text: `share Lake Victoria, all facing rising climate impacts and pollution
           that require coordinated regional action.`,
  },
];

const StatsSection = ({ id = '', className = '' }: StatsSectionProps) => {
  return (
    <Box id={id} className={`${className} flex flex-col items-center`}>
      <div
        className='flex w-full flex-col items-center justify-center bg-blue-50 bg-cover bg-center bg-blend-overlay lg:flex-row lg:items-stretch dark:bg-blue-950'
        style={{
          backgroundImage: `linear-gradient(#00000050, #00000050), url(${WaterDrop.src})`,
        }}
      >
        <div className='max-w-9xl flex w-full flex-col items-center justify-center gap-10 px-4 py-16 lg:px-0 lg:py-20'>
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
          <div className='flex flex-col items-center space-y-4 text-center'>
            <Typography variant='h5' className='font-semibold'>
              Key Water and Climate Realities
            </Typography>
            <Typography variant='body1' className='max-w-2xl opacity-90'>
              These insights highlight the scale, importance, and global context
              of water resources, climate finance, and shared ecosystems,
              including but not limited to the Lake Victoria region.
            </Typography>
          </div>

          {/* Stats Grid */}
          <div className='grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-4 xl:gap-10'>
            {stats.map((item, index) => (
              <div
                key={index}
                className='flex flex-col items-center gap-3 text-center'
              >
                <Typography variant='h4' className='font-semibold'>
                  {item.value}
                </Typography>
                <Typography
                  variant='body1'
                  className='max-w-sm leading-relaxed opacity-90'
                >
                  {item.text}
                </Typography>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Box>
  );
};

export default StatsSection;
