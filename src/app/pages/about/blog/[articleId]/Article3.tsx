'use client';

import LakeCrisis from '@/assets/images/lake.jpg';
import Image from 'next/image';
import React from 'react';
import { Typography, Divider, Link } from '@mui/material';

export default function Article3() {
  return (
    <div className='surface mx-auto flex w-full max-w-6xl flex-col items-center justify-center rounded-lg shadow-lg'>
      {/* Hero Image */}
      <div className='relative h-96 w-full min-w-full'>
        <Image
          src={LakeCrisis}
          alt='Lake Victoria aerial view'
          fill
          className='rounded-t-lg object-cover object-center'
          priority
        />
      </div>

      <div className='max-w-3xl px-4 py-10'>
        {/* Title */}
        <Typography variant='h3' component='h1' className='mb-6 font-bold'>
          The Alarming State of the Lake Victoria Basin—and Why 2025 Was a
          Turning Point
        </Typography>

        {/* Summary Section */}
        <Divider className='my-6' />
        <Typography variant='h5' component='h2' className='mb-3 font-semibold'>
          Summary
        </Typography>
        <Typography variant='body1' className='mb-6'>
          This article highlights findings from the Lake Victoria State of the
          Basin Report 2025, including rising environmental degradation, climate
          impacts, and human pressures. It also explains why the region is
          reaching a critical juncture and how new evidence-based
          recommendations offer hope for recovery.
        </Typography>
        <Typography className='mb-4 text-gray-600 italic'>
          Estimated Read Time: 8 minutes
        </Typography>

        {/* Full Article Section */}
        <Divider className='my-6' />

        <Typography variant='body2' className='mb-4'>
          Lake Victoria, the world’s largest tropical lake, is more than a
          geographic landmark—it is the beating heart of East Africa. Supporting
          over 42 million people, the lake provides drinking water, food,
          hydropower, employment, and critical ecosystem services. However,
          decades of unregulated development, population growth, and climate
          change have placed enormous pressure on its ecological integrity
          <Link href='#ref1' underline='hover'>
            [1]
          </Link>
          .
        </Typography>

        <Typography variant='body2' className='mb-4'>
          Human activities—including intensive agriculture, industrial runoff,
          and micro-pollutants—combined with deforestation and land-use changes,
          have accelerated erosion and nutrient loading into the lake. These
          pressures contribute to algal blooms, loss of biodiversity, and
          declining fish stocks, undermining both environmental and
          socio-economic stability. The complexity of the ecosystem and lack of
          robust monitoring in previous decades limited understanding of
          cumulative impacts
          <Link href='#ref2' underline='hover'>
            [2]
          </Link>
          .
        </Typography>

        <Typography variant='body2' className='mb-4'>
          In 2025, a major step forward occurred with the release of the Lake
          Victoria State of the Basin Report 2025 at COP30. The report,
          described as a "landmark, evidence-based blueprint," consolidates
          decades of data on water quality, biodiversity, climate impacts,
          population growth, land use, and governance. It presents a sobering
          assessment, emphasizing both the urgency and the pathways for
          actionable intervention
          <Link href='#ref3' underline='hover'>
            [3]
          </Link>
          .
        </Typography>

        <Typography variant='body2' className='mb-4'>
          EAC Deputy Secretary General Andrea Ariik summarized the situation:
          “Lake Victoria is more than the world’s largest tropical lake; it’s
          the beating heart of East Africa—our water, our food, our energy, our
          livelihoods.” The report highlights that without immediate and
          coordinated action, degradation threatens food security, public
          health, energy supply, and regional economic growth
          <Link href='#ref4' underline='hover'>
            [4]
          </Link>
          .
        </Typography>

        <Typography variant='body2' className='mb-4'>
          Despite these alarming trends, the report identifies evidence-based
          solutions to reverse degradation. Recommended interventions include
          sustainable agriculture practices to reduce nutrient runoff, wetland
          restoration for water filtration and flood mitigation, wastewater
          treatment systems, erosion control measures, and nature-based
          solutions to enhance biodiversity. Strengthening the mandate and
          enforcement capabilities of the Lake Victoria Basin Commission (LVBC)
          is emphasized as critical for cross-border coordination and ecosystem
          governance
          <Link href='#ref5' underline='hover'>
            [5]
          </Link>
          .
        </Typography>

        <Typography variant='body2' className='mb-4'>
          Importantly, the report encourages integrating climate adaptation
          strategies into local and national development plans. Investments in
          monitoring technology, data-driven management, and early warning
          systems for floods and droughts will enable communities to respond
          proactively to climate shocks. Capacity-building programs for local
          stakeholders and community engagement initiatives are also recommended
          to ensure sustainable and equitable implementation
          <Link href='#ref2' underline='hover'>
            [2]
          </Link>
          .
        </Typography>

        <Typography variant='body2' className='mb-4'>
          The release of the report marks a turning point—it moves the region
          from awareness to evidence-driven action. By implementing the
          recommended strategies, Lake Victoria can transition toward ecological
          recovery, enhanced livelihoods, and long-term resilience. This
          proactive approach also provides a blueprint for other transboundary
          African basins facing similar challenges
          <Link href='#ref1' underline='hover'>
            [1]
          </Link>
          <Link href='#ref3' underline='hover'>
            [3]
          </Link>
          .
        </Typography>

        <Typography variant='body2' className='mb-4'>
          The findings of the report underscore the urgent need for
          collaboration among governments, research institutions, development
          partners, and local communities. When combined with global climate
          finance, innovative technologies, and strong governance frameworks,
          these efforts can secure the ecological and socio-economic future of
          the Lake Victoria Basin for generations to come
          <Link href='#ref4' underline='hover'>
            [4]
          </Link>
          <Link href='#ref5' underline='hover'>
            [5]
          </Link>
          .
        </Typography>

        {/* References Section */}
        <Divider className='my-6' />
        <Typography variant='h6' component='h3' className='mb-3 font-semibold'>
          References
        </Typography>

        <Typography variant='body2' id='ref1' className='mb-2'>
          [1] Nyamweya, C., Wandera, O., & Ochieng, J. K.{' '}
          <i>Lake Victoria Basin State of the Basin Report 2025</i>. Kisumu:
          LVBC, 2025.
        </Typography>
        <Typography variant='body2' id='ref2' className='mb-2'>
          [2] United Nations Environment Programme.{' '}
          <i>Water Quality and Ecosystem Assessments in East Africa</i>.
          Nairobi: UNEP, 2023.
        </Typography>
        <Typography variant='body2' id='ref3' className='mb-2'>
          [3] East African Community.{' '}
          <i>Regional Climate and Water Resource Planning</i>. Arusha: EAC,
          2025.
        </Typography>
        <Typography variant='body2' id='ref4' className='mb-2'>
          [4] Ariik, Andrea. <i>Press Statement on Lake Victoria Basin</i>. EAC,
          2025.
        </Typography>
        <Typography variant='body2' id='ref5' className='mb-2'>
          [5] Lake Victoria Basin Commission.{' '}
          <i>Strategic Action Plan for Ecosystem Restoration</i>. Kisumu: LVBC,
          2024.
        </Typography>
      </div>
    </div>
  );
}
