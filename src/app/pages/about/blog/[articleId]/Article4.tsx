'use client';

import ConferenceImg from '@/assets/images/people-taking-part-high-protocol-event.jpg';
import Image from 'next/image';
import React from 'react';
import { Typography, Divider, Link } from '@mui/material';

export default function Article4() {
  return (
    <div className='surface mx-auto flex w-full max-w-6xl flex-col items-center justify-center rounded-lg shadow-lg'>
      {/* Hero Image */}
      <div className='relative h-96 w-full min-w-full'>
        <Image
          src={ConferenceImg}
          alt='Why LVBICE 2026 Matters: A Regional Turning Point for Innovation, Climate Action, and Inclusive Development'
          fill
          className='rounded-t-lg object-cover object-center'
          priority
        />
      </div>

      <div className='max-w-4xl px-4 py-10'>
        {/* Title */}
        <Typography variant='h1' className='mb-6 font-bold'>
          Why LVBICE 2026 Matters: A Regional Turning Point for Innovation,
          Climate Action, and Inclusive Development
        </Typography>

        {/* Summary Section */}
        <Divider className='my-6' />
        <Typography variant='h5' className='mb-3 font-semibold'>
          Summary
        </Typography>
        <Typography variant='body1' className='mb-6'>
          This article introduces the Lake Victoria Basin International
          Conference and Exhibition (LVBICE 2026), explaining its goals,
          thematic focus areas, expected outcomes, and why it represents a major
          opportunity for East Africa to reshape its development trajectory.
        </Typography>
        <Typography color='textSecondary' className='mb-4 italic'>
          Estimated Read Time: 8 minutes
        </Typography>

        {/* Full Article Section */}
        <Divider className='my-6' />

        <Typography variant='body2' className='mb-4'>
          The Lake Victoria Basin International Conference and Exhibition
          (LVBICE), scheduled for August 2026 in Kisumu, Kenya, is poised to
          become one of East Africa’s most influential gatherings focused on
          climate resilience, technological innovation, and sustainable
          development
          <Link href='#ref1' underline='hover'>
            [1]
          </Link>
          .
        </Typography>

        <Typography variant='body2' className='mb-4'>
          The Lake Victoria Basin faces multiple interlinked challenges.
          Inefficient water distribution, low adoption of climate-smart
          technologies, rising urbanization, pollution, and socio-economic
          inequalities threaten both human and ecological systems. However, the
          region also presents extraordinary opportunities for transformation
          through innovation, collaboration, and strategic investment
          <Link href='#ref2' underline='hover'>
            [2]
          </Link>
          .
        </Typography>

        <Typography variant='body2' className='mb-4'>
          LVBICE 2026 will leverage Artificial Intelligence, IoT, digital
          platforms, and climate-smart innovations to address these challenges.
          It will convene government leaders, regional organizations, research
          institutions, private sector innovators, water authorities, and
          community stakeholders to collaborate on practical solutions
          <Link href='#ref3' underline='hover'>
            [3]
          </Link>
          .
        </Typography>

        <Typography variant='body2' className='mb-4'>
          Thematic areas include AI-powered water infrastructure, climate-smart
          agriculture, digital governance, smart sanitation, carbon markets,
          disaster risk reduction, and public-private partnerships. Exhibitions
          will showcase actionable technologies such as smart irrigation
          systems, drone mapping for crop monitoring, automated water quality
          sensors, and renewable energy solutions
          <Link href='#ref4' underline='hover'>
            [4]
          </Link>
          .
        </Typography>

        <Typography variant='body2' className='mb-4'>
          Participants will also explore innovative financing models, policy
          reforms, and capacity-building strategies to accelerate sustainable
          development in the basin. Expected outcomes include new regional
          funding commitments, a roadmap for digital transformation, enhanced
          collaborative networks, and a repository of best practices for climate
          and water management
          <Link href='#ref5' underline='hover'>
            [5]
          </Link>
          .
        </Typography>

        <Typography variant='body2' className='mb-4'>
          Beyond a conference, LVBICE 2026 represents a regional movement to
          reimagine the future of Lake Victoria. It promotes shared
          responsibility, inclusive development, and innovation-driven
          solutions. By connecting policy, technology, and community action, the
          event aims to empower local stakeholders while strengthening regional
          governance frameworks
          <Link href='#ref1' underline='hover'>
            [1]
          </Link>
          <Link href='#ref2' underline='hover'>
            [2]
          </Link>
          .
        </Typography>

        <Typography variant='body2' className='mb-4'>
          Importantly, the conference will provide a platform to align
          international climate commitments, such as COP outcomes and climate
          finance pledges, with local interventions. This alignment ensures that
          investment in water infrastructure, climate adaptation, and digital
          agriculture has tangible, measurable impacts on the resilience of the
          Lake Victoria Basin
          <Link href='#ref3' underline='hover'>
            [3]
          </Link>
          <Link href='#ref5' underline='hover'>
            [5]
          </Link>
          .
        </Typography>

        <Typography variant='body2' className='mb-4'>
          LVBICE 2026 also emphasizes knowledge sharing and skills development.
          Workshops and panels will highlight case studies from successful
          regional and global projects, promoting evidence-based solutions and
          scalable innovations. This collaborative learning environment ensures
          that policymakers, scientists, and community leaders leave the
          conference equipped to implement effective climate-smart strategies
          across the basin
          <Link href='#ref4' underline='hover'>
            [4]
          </Link>
          .
        </Typography>

        {/* References Section */}
        <Divider className='my-6' />
        <Typography variant='h6' className='mb-3 font-semibold'>
          References
        </Typography>

        <Typography variant='body2' id='ref1' className='mb-2'>
          [1] Lake Victoria Basin Commission.{' '}
          <i>LVBICE 2026: Conference Overview and Goals</i>. Kisumu: LVBC, 2025.
        </Typography>
        <Typography variant='body2' id='ref2' className='mb-2'>
          [2] United Nations Environment Programme.{' '}
          <i>Climate-Smart Solutions for East Africa</i>. Nairobi: UNEP, 2024.
        </Typography>
        <Typography variant='body2' id='ref3' className='mb-2'>
          [3] African Development Bank.{' '}
          <i>Leveraging Innovation for Sustainable Development in Africa</i>.
          Abidjan: AfDB, 2024.
        </Typography>
        <Typography variant='body2' id='ref4' className='mb-2'>
          [4] Food and Agriculture Organization of the United Nations.{' '}
          <i>Digital Agriculture and Water Management</i>. Rome: FAO, 2023.
        </Typography>
        <Typography variant='body2' id='ref5' className='mb-2'>
          [5] World Bank.{' '}
          <i>Financing Climate Resilience and Regional Development</i>.
          Washington, DC: World Bank, 2024.
        </Typography>
      </div>
    </div>
  );
}
