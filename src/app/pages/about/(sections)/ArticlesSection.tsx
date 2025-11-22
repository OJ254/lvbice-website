// src/app/pages/about/(sections)/ArticlesSection.tsx
// "use client" tells Next.js to render this file on the client.
// Why it's required here:
// - We attach click handlers to links/buttons and rely on interactive MUI components.
// - We use React.memo and functional components that run with client interactivity.
// - We access image .src values that are resolved at runtime for inline styles.
// Without this directive under the App Router, using event handlers would fail
// because server components are not interactive by default.
'use client';

import { Typography, Button } from '@mui/material';
import React from 'react';

import WaterAI from '@/assets/images/realistic-water-drop-with-ecosystem.jpg';
import CopSummit from '@/assets/images/sustainable-development-goals-still-life.jpg';
import LakeCrisis from '@/assets/images/lake.jpg';
import ConferenceImg from '@/assets/images/people-taking-part-high-protocol-event.jpg';

/**
 * Props for ArticlesSection.
 *
 * id: Optional anchor id used for in-page navigation.
 * className: Optional Tailwind utility classes to extend layout/styling.
 */
type ArticlesSectionProps = {
  id?: string;
  className?: string;
};

/**
 * Article item model used to render teaser cards.
 */
type ArticleItem = {
  title: string;
  description: string;
  image: any; // Next.js imported static image
  href: string; // Navigates to the blog article route
};

const articlesItems: ArticleItem[] = [
  {
    title:
      'AI as a Catalyst for Sustainable Development in the Lake Victoria Basin',
    description:
      'Artificial Intelligence offers new solutions for water management, agriculture, and climate resilience in the Lake Victoria Basin. Technologies such as smart irrigation, predictive weather analytics, leak detection, and digital governance can address rising environmental pressures. LVBICE 2026 will bring governments, researchers, and innovators together to showcase these tools and strengthen sustainable development across the region.',
    image: WaterAI,
    href: '/pages/about/blog/ai-for-lake-victoria',
  },
  {
    title:
      'What COP28 and COP29 Mean for the Future of Water and Climate Resilience in East Africa',
    description:
      'COP28 and COP29 produced major global commitments that directly impact climate action in East Africa. Key outcomes include a new USD 300 billion climate finance goal, improved carbon market mechanisms, and wide support for methane reduction. These decisions create opportunities for the Lake Victoria Basin to access funding, strengthen adaptation efforts, and integrate advanced technologies into climate and water governance.',
    image: CopSummit,
    href: '/pages/about/blog/cop28-cop29-east-africa',
  },
  {
    title:
      'The Alarming State of the Lake Victoria Basin - and Why 2025 Was a Turning Point',
    description:
      'The 2025 Lake Victoria State of the Basin findings reveal worsening pollution, ecosystem stress, climate impacts, and human pressure on the lake. Despite supporting millions of livelihoods, the basin faces declining water quality, biodiversity loss, and management challenges. The report provides data-driven recommendations such as wetland restoration, sustainable agriculture, better wastewater control, and stronger regional governance.',
    image: LakeCrisis,
    href: '/pages/about/blog/lake-victoria-2025',
  },
  {
    title:
      'Why LVBICE 2026 Matters: A Regional Turning Point for Innovation, Climate Action, and Inclusive Development',
    description:
      'LVBICE 2026 is positioned as a major regional forum for advancing innovation and sustainability in the Lake Victoria Basin. The event focuses on AI-driven water systems, precision agriculture, climate-smart infrastructure, carbon financing, and public–private partnerships. Participants will collaborate on new policies, investments, and technologies aimed at transforming environmental management and regional development.',
    image: ConferenceImg,
    href: '/pages/about/blog/lvbice-2026',
  },
];

// Card component with custom image + href
// Memoized to avoid re-rendering unchanged cards when parent updates.
const ArticleCard = React.memo(
  ({ title, description, image, href }: ArticleItem) => (
    <a
      href={href}
      className='surface surface-hover flex transform flex-col items-start gap-3 rounded-lg shadow-md transition-all duration-200 hover:-translate-y-1 hover:shadow-lg'
    >
      <div
        className='flex h-40 w-full items-center justify-center rounded-t-md bg-cover bg-center'
        style={{
          backgroundImage: `url(${image.src})`,
        }}
      />

      <div className='flex flex-col gap-4 p-4'>
        <Typography variant='h6' className='line-clamp-3'>
          {title}
        </Typography>

        <Typography variant='body2' className='line-clamp-5'>
          {description}
        </Typography>

        <Button
          variant='outlined'
          size='small'
          className='max-w-max self-end rounded-full'
          fullWidth={false}
        >
          Read More
        </Button>
      </div>
    </a>
  )
);

/**
 * ArticlesSection renders a grid of recent articles/news with images and teasers.
 *
 * Responsibilities:
 * - Displays a decorative header and a responsive grid of ArticleCard entries.
 * - Uses background images via inline styles for card thumbnails.
 * - Provides semantic anchors for smooth in-page navigation (via id prop).
 */
const ArticlesSection = ({ id = '', className = '' }: ArticlesSectionProps) => {
  return (
    <section
      id={id}
      className={`${className} flex w-full flex-col items-center`}
    >
      <div className='flex w-full flex-col items-center justify-center bg-blue-500/10 lg:flex-row lg:items-stretch'>
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

          {/* Section Header */}
          <header className='mb-8 flex w-full flex-col items-center justify-center space-y-4'>
            <Typography variant='h4' className='text-center font-semibold'>
              Latest News
            </Typography>
          </header>

          <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4'>
            {articlesItems.map((item, index) => (
              <ArticleCard key={index} {...item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArticlesSection;

// 'use client';
//
// import { Typography, Button } from '@mui/material';
// import { WeatherIcon } from '@/components/ui/dataDisplay/icons';
// import React from 'react';
// import WaterDrop from '@/assets/images/water-drop.jpg';
//
// type ArticlesSectionProps = {
//   id?: string;
//   className?: string;
// };
//
// type ArticleItem = {
//   title: string;
//   description: string;
// };
//
// const articlesItems: ArticleItem[] = [
//   {
//     title:
//       'AI as a Catalyst for Sustainable Development in the Lake Victoria Basin',
//     description:
//       'Artificial Intelligence offers new solutions for water management, agriculture, and climate resilience in the Lake Victoria Basin. Technologies such as smart irrigation, predictive weather analytics, leak detection, and digital governance can address rising environmental pressures. LVBICE 2026 will bring governments, researchers, and innovators together to showcase these tools and strengthen sustainable development across the region.',
//   },
//   {
//     title:
//       'What COP28 and COP29 Mean for the Future of Water and Climate Resilience in East Africa',
//     description:
//       'COP28 and COP29 produced major global commitments that directly impact climate action in East Africa. Key outcomes include a new USD 300 billion climate finance goal, improved carbon market mechanisms, and wide support for methane reduction. These decisions create opportunities for the Lake Victoria Basin to access funding, strengthen adaptation efforts, and integrate advanced technologies into climate and water governance.',
//   },
//   {
//     title:
//       'The Alarming State of the Lake Victoria Basin - and Why 2025 Was a Turning Point',
//     description:
//       'The 2025 Lake Victoria State of the Basin findings reveal worsening pollution, ecosystem stress, climate impacts, and human pressure on the lake. Despite supporting millions of livelihoods, the basin faces declining water quality, biodiversity loss, and management challenges. The report provides data-driven recommendations such as wetland restoration, sustainable agriculture, better wastewater control, and stronger regional governance.',
//   },
//   {
//     title:
//       'Why LVBICE 2026 Matters: A Regional Turning Point for Innovation, Climate Action, and Inclusive Development',
//     description:
//       'LVBICE 2026 is positioned as a major regional forum for advancing innovation and sustainability in the Lake Victoria Basin. The event focuses on AI-driven water systems, precision agriculture, climate-smart infrastructure, carbon financing, and public–private partnerships. Participants will collaborate on new policies, investments, and technologies aimed at transforming environmental management and regional development.',
//   },
// ];
//
// // Card component with dark theme support
// const ArticleCard = React.memo(({ title, description }: ArticleItem) => (
//   <div
//     role='region'
//     aria-label={title}
//     className='flex transform flex-col items-start gap-3 rounded-lg shadow-md transition-all duration-200 hover:-translate-y-1 hover:shadow-lg'
//   >
//     <div
//       className='flex h-40 w-full items-center justify-center rounded-t-md bg-blue-500/20 dark:bg-blue-400/30'
//       style={{
//         backgroundImage: `url(${WaterDrop.src})`,
//       }}
//     >
//       <WeatherIcon className='h-12 w-12 text-blue-600 dark:text-blue-200' />
//     </div>
//     <div className='flex flex-col gap-4 p-4'>
//       <Typography variant='h6' className='line-clamp-3'>
//         {title}
//       </Typography>
//       <Typography variant='body2' className='line-clamp-5'>
//         {description}
//       </Typography>
//       <Button
//         variant='outlined'
//         size='small'
//         className='max-w-max self-end rounded-full'
//         fullWidth={false}
//       >
//         Read More
//       </Button>
//     </div>
//   </div>
// ));
//
// const ArticlesSection = ({ id = '', className = '' }: ArticlesSectionProps) => {
//   return (
//     <section
//       id={id}
//       className={`${className} flex w-full flex-col items-center`}
//     >
//       <div className='flex w-full flex-col items-center justify-center bg-blue-500/10 lg:flex-row lg:items-stretch'>
//         <div className='max-w-9xl flex w-full flex-col items-center justify-center gap-8 px-4 py-16 lg:px-0 lg:py-20'>
//           {/* Decorative dots */}
//           <div className='flex gap-2'>
//             {[1, 2, 3].map(i => (
//               <span
//                 key={i}
//                 className='aspect-square h-2 rounded-full bg-yellow-500'
//               />
//             ))}
//           </div>
//
//           {/* Section Header */}
//           <header className='mb-8 flex w-full flex-col items-center justify-center space-y-4'>
//             <Typography variant='h5' className='text-center font-semibold'>
//               Latest News
//             </Typography>
//           </header>
//
//           <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4'>
//             {articlesItems.map((item, index) => (
//               <ArticleCard key={index} {...item} />
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };
//
// export default ArticlesSection;
