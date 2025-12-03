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
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

import WaterAI from '@/assets/images/realistic-water-drop-with-ecosystem.jpg';
import CopSummit from '@/assets/images/sustainable-development-goals-still-life.jpg';
import LakeCrisis from '@/assets/images/lake.jpg';
import ConferenceImg from '@/assets/images/people-taking-part-high-protocol-event.jpg';
import AminaMohamed from '@/assets/images/amina-mohamed-un_deputy.jpg';
import LakeVictoriaFishing from '@/assets/images/lake-victoria-flooding.jpg';

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
      'Artificial Intelligence (AI) offers powerful tools for advancing water management, agriculture, climate resilience, and economic growth in the Lake Victoria Basin. Emerging AI-driven solutions, combined with regional collaboration and innovation, position the upcoming 2026 Lake Victoria Basin International Conference and Exhibition (LVBICE) as a pivotal forum for accelerating sustainable development across the region.',
    image: WaterAI,
    href: '/pages/about/blog/ai-for-lake-victoria',
  },
  {
    title:
      'What COP28 and COP29 Mean for the Future of Water and Climate Resilience in East Africa',
    description:
      'The outcomes of COP28 and COP29 strengthen efforts to enhance climate resilience in the Lake Victoria Basin, with global commitments on climate finance, methane reduction, and support for vulnerable communities offering new opportunities for improving water infrastructure, advancing adaptation measures, and accelerating innovation across the region.',
    image: CopSummit,
    href: '/pages/about/blog/cop28-cop29-east-africa',
  },
  {
    title:
      'The Alarming State of the Lake Victoria Basin - and Why 2025 Was a Turning Point',
    description:
      'The Lake Victoria State of the Basin Report 2025 reveals escalating environmental degradation, mounting climate pressures, and intensifying human impacts that are pushing the region toward a critical tipping point. Despite these challenges, the report outlines actionable, evidence-based strategies that can restore ecological health, strengthen resilience, and support sustainable development across the basin.',
    image: LakeCrisis,
    href: '/pages/about/blog/lake-victoria-2025',
  },
  {
    title:
      'Why LVBICE 2026 Matters: A Regional Turning Point for Innovation, Climate Action, and Inclusive Development',
    description:
      'The Lake Victoria Basin International Conference and Exhibition (LVBICE 2026) serves as a pivotal platform for advancing climate resilience, digital innovation, and sustainable development across East Africa. It brings together regional leaders, researchers, and innovators to address environmental challenges, promote technological solutions, and strengthen collaborative action for a more sustainable and prosperous future in the Lake Victoria Basin.',
    image: ConferenceImg,
    href: '/pages/about/blog/lvbice-2026',
  },
  {
    title:
      'Africa-Led Climate Solutions for the Lake Victoria Basin: Insights Inspired by Amina J. Mohammed, Deputy Secretary General United Nation',
    description:
      'Drawing inspiration from the address by UN Deputy Secretary-General Amina J. Mohammed, this article examines the urgent climate and socio-economic challenges affecting the African continent and connects her message of African leadership, solidarity, and transformative development to the sustainability of the Lake Victoria Basin. It highlights how climate resilience, regional cooperation, and investment in green innovation are central to securing the basin’s future.',
    image: AminaMohamed,
    href: '/pages/about/blog/amina-mohammed-speech',
  },
  {
    title:
      'Climate Change Is Emptying Nets: Lake Victoria’s Fisheries Are Reaching a Breaking Point',
    description:
      'Declining fish stocks in Lake Victoria are pushing fishing communities to the brink, as climate change, ecosystem degradation, and rising temperatures disrupt breeding cycles and shrink traditional harvests. Fishermen now return with drastically reduced catches, while experts warn that warming waters, pollution, and irregular rainfall are accelerating ecological collapse. Innovation, adaptation, and urgent climate action are becoming essential to protect livelihoods and restore the lake’s fragile ecosystem.',
    image: LakeVictoriaFishing,
    href: '/pages/about/blog/lake-victoria-fishing-activities',
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

          {/* Swiper Carousel */}
          <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop
            spaceBetween={30}
            breakpoints={{
              0: { slidesPerView: 1 },
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1536: { slidesPerView: 4 },
            }}
            className='w-full'
          >
            {articlesItems.map((item, index) => (
              <SwiperSlide key={index}>
                <ArticleCard {...item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default ArticlesSection;
