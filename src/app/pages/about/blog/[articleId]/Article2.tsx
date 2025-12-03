// noinspection HtmlUnknownAnchorTarget

'use client';

import CopSummit from '@/assets/images/sustainable-development-goals-still-life.jpg';
import Image from 'next/image';
import React from 'react';
import { Typography, Divider, Link } from '@mui/material';

export default function Article2() {
  return (
    <div className='surface mx-auto flex w-full max-w-6xl flex-col items-center justify-center rounded-lg shadow-lg'>
      {/* Hero Image */}
      <div className='relative h-96 w-full min-w-full'>
        <Image
          src={CopSummit}
          alt='What COP28 and COP29 Mean for the Future of Water and Climate Resilience in East Africa'
          fill
          className='rounded-t-lg object-cover object-center'
          priority
        />
      </div>

      <div className='max-w-4xl px-4 py-10'>
        {/* Title */}
        <Typography variant='h1' className='mb-6 font-bold'>
          What COP28 and COP29 Mean for the Future of Water and Climate
          Resilience in East Africa
        </Typography>

        {/* Summary Section */}
        <Divider className='my-6' />
        <Typography variant='h5' className='mb-3 font-semibold'>
          Summary
        </Typography>
        <Typography variant='body1' className='mb-6'>
          The outcomes of COP28 and COP29 strengthen efforts to enhance climate
          resilience in the Lake Victoria Basin, with global commitments on
          climate finance, methane reduction, and support for vulnerable
          communities offering new opportunities for improving water
          infrastructure, advancing adaptation measures, and accelerating
          innovation across the region.
        </Typography>
        <Typography color='textSecondary' className='mb-4 italic'>
          Estimated Read Time: 8 minutes
        </Typography>

        {/* Full Article Section */}
        <Divider className='my-6' />

        <Typography variant='body2' className='mb-4'>
          International climate summits—particularly COP28 and COP29—have set
          the stage for unprecedented levels of climate action, collaboration,
          and financing. For East Africa and the Lake Victoria Basin, the
          outcomes of these conferences are especially significant, providing
          guidance and resources to strengthen water management, climate
          adaptation, and sustainable development
          <Link href='#ref1' underline='hover'>
            [1]
          </Link>
          .
        </Typography>

        <Typography variant='body2' className='mb-4'>
          At COP28, global leaders emphasized multilevel governance for water
          resilience in African cities, highlighting the need for integrated
          urban planning, sustainable infrastructure, and community engagement.
          Key objectives included raising awareness of climate risks,
          strengthening regional and local collaboration, showcasing innovative
          technologies, and encouraging evidence-based policy reforms. Knowledge
          sharing platforms were identified as crucial to enable cross-border
          learning and foster new investment opportunities
          <Link href='#ref2' underline='hover'>
            [2]
          </Link>
          .
        </Typography>

        <Typography variant='body2' className='mb-4'>
          COP29, held in 2024, advanced these discussions further. Nearly 200
          countries convened to negotiate climate mitigation, adaptation, and
          financial commitments. A landmark outcome was the New Collective
          Quantified Goal on Climate Finance, which aims to triple financial
          support for developing nations to USD 300 billion annually by 2035.
          This milestone provides critical resources for regions like the Lake
          Victoria Basin, where climate threats—including rising temperatures,
          unpredictable rainfall, and flooding—are escalating
          <Link href='#ref3' underline='hover'>
            [3]
          </Link>
          .
        </Typography>

        <Typography variant='body2' className='mb-4'>
          The COP29 conference also finalized frameworks for carbon markets,
          enabling country-to-country carbon trading. East African nations can
          leverage these frameworks to finance ecosystem restoration, cleaner
          industrial processes, climate-smart agriculture, and renewable energy
          projects. Additionally, over 30 countries endorsed a methane reduction
          declaration targeting emissions from organic waste, a major
          contributor to global greenhouse gas output. Effective implementation
          of these agreements can significantly reduce local air and water
          pollution while providing new investment channels for sustainable
          initiatives
          <Link href='#ref4' underline='hover'>
            [4]
          </Link>
          .
        </Typography>

        <Typography variant='body2' className='mb-4'>
          Both COP28 and COP29 highlighted the acute vulnerabilities faced by
          communities worldwide, particularly marginalized populations. In the
          Lake Victoria Basin, low-income households, women, and smallholder
          farmers are disproportionately affected by climate shocks. The summits
          underscored the importance of targeted adaptation measures, social
          safety nets, and community-based solutions to enhance resilience,
          providing a roadmap for policy alignment and international cooperation
          <Link href='#ref5' underline='hover'>
            [5]
          </Link>
          .
        </Typography>

        <Typography variant='body2' className='mb-4'>
          Beyond governance and finance, COP outcomes emphasized the need for
          technological innovation. Digital water management platforms,
          AI-driven flood prediction models, and climate-smart agriculture tools
          were highlighted as essential for managing scarce resources and
          reducing disaster risk. East African countries are encouraged to adopt
          these solutions while investing in local capacity-building programs,
          research, and infrastructure development
          <Link href='#ref2' underline='hover'>
            [2]
          </Link>
          <Link href='#ref3' underline='hover'>
            [3]
          </Link>
          .
        </Typography>

        <Typography variant='body2' className='mb-4'>
          As LVBICE 2026 approaches, the integration of global climate
          priorities with local action will be crucial. Policymakers,
          development partners, and community stakeholders must work together to
          translate international commitments into practical interventions—such
          as climate-resilient water infrastructure, efficient irrigation
          systems, sustainable fisheries, and adaptive land management
          strategies—to ensure the Lake Victoria Basin remains secure and
          productive for future generations
          <Link href='#ref1' underline='hover'>
            [1]
          </Link>
          <Link href='#ref5' underline='hover'>
            [5]
          </Link>
          .
        </Typography>

        <Typography variant='body2' className='mb-4'>
          Ultimately, COP28 and COP29 provide not just goals and targets, but a
          framework for actionable change. Leveraging climate finance,
          technological innovation, and community engagement can turn these
          global agreements into tangible resilience gains for East Africa,
          creating a safer, more sustainable, and climate-ready future for the
          Lake Victoria Basin
          <Link href='#ref3' underline='hover'>
            [3]
          </Link>
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
          [1] United Nations Framework Convention on Climate Change (UNFCCC).{' '}
          <i>COP28 Outcomes: Water and Climate Resilience</i>. Bonn: UNFCCC,
          2023.
        </Typography>
        <Typography variant='body2' id='ref2' className='mb-2'>
          [2] African Development Bank.{' '}
          <i>Urban Climate Resilience in Africa</i>. Abidjan: AfDB, 2023.
        </Typography>
        <Typography variant='body2' id='ref3' className='mb-2'>
          [3] UN Climate Finance.{' '}
          <i>New Collective Quantified Goal on Climate Finance</i>. New York:
          UN, 2024.
        </Typography>
        <Typography variant='body2' id='ref4' className='mb-2'>
          [4] Global Methane Initiative.{' '}
          <i>Methane Reduction Agreements at COP29</i>. Washington, DC: GMI,
          2024.
        </Typography>
        <Typography variant='body2' id='ref5' className='mb-2'>
          [5] Lake Victoria Basin Commission.{' '}
          <i>Climate Adaptation and Regional Resilience Strategies</i>. Kisumu:
          LVBC, 2024.
        </Typography>
      </div>
    </div>
  );
}
