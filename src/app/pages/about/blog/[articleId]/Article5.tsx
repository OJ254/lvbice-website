// noinspection HtmlUnknownAnchorTarget

'use client';

import AminaMohamed from '@/assets/images/amina-mohamed-un_deputy.jpg';
import Image from 'next/image';
import React from 'react';
import { Typography, Divider, Link } from '@mui/material';

export default function Article5() {
  return (
    <div className='surface mx-auto flex w-full max-w-6xl flex-col items-center justify-center rounded-lg shadow-lg'>
      {/* Hero Image */}
      <div className='relative h-96 w-full min-w-full'>
        <Image
          src={AminaMohamed}
          alt='Why LVBICE 2026 Matters: A Regional Turning Point for Innovation, Climate Action, and Inclusive Development'
          fill
          className='rounded-t-lg object-cover object-center'
          priority
        />
      </div>

      <div className='max-w-4xl px-4 py-10'>
        {/* Title */}
        <Typography variant='h1' className='mb-6 font-bold'>
          Africa-Led Climate Solutions for the Lake Victoria Basin: Insights
          Inspired by Amina J. Mohammed, UN Deputy Secretary General
        </Typography>

        {/* Summary Section */}
        <Divider className='my-6' />
        <Typography variant='h5' className='mb-3 font-semibold'>
          Summary
        </Typography>

        <Typography variant='body1' className='mb-6'>
          Africa faces escalating climate and socio-economic challenges that
          threaten development gains and regional stability. Amina J. Mohammed’s
          message emphasizes the need for African-led leadership, solidarity,
          and transformative action to address these pressures. Her call for
          bold climate resilience, stronger regional cooperation, and increased
          investment in green innovation directly aligns with the urgent
          sustainability needs of the Lake Victoria Basin. These priorities are
          essential for protecting livelihoods, strengthening ecosystems, and
          ensuring long-term prosperity for communities that depend on the
          basin.
        </Typography>

        <Typography color='textSecondary' className='mb-4 italic'>
          Estimated Read Time: 5 minutes
        </Typography>

        {/* Full Article Section */}
        <Divider className='my-6' />

        <Typography variant='body2' className='mb-4'>
          The Lake Victoria Basin is one of Africa’s most critical ecological
          and economic assets, supporting more than 40 million people across
          five countries. Yet climate change, ecosystem degradation, and
          socio-economic pressures threaten its stability. During her address,
          Amina J. Mohammed emphasized that Africa faces cascading crises —from
          economic shocks to climate emergencies—that jeopardize hard-won
          development gains. Her call for African-led, inclusive, and bold
          solutions directly aligns with the climate sustainability needs of the
          Lake Victoria Basin
          <Link href='#ref1' underline='hover'>
            [1]
          </Link>
          .
        </Typography>

        <Typography variant='body2' className='mb-4'>
          She highlighted how Africa is disproportionately affected by global
          disruptions despite contributing least to these crises. The Lake
          Victoria Basin mirrors this reality: rising temperatures, extreme
          rainfall, declining fisheries, and pollution are accelerating
          vulnerabilities and undermining livelihoods. Mohammed stressed that
          Africa is losing billions in potential GDP due to climate impacts—a
          warning deeply relevant to basin communities increasingly dependent on
          climate-sensitive sectors
          <Link href='#ref2' underline='hover'>
            [2]
          </Link>
          .
        </Typography>

        <Typography variant='body2' className='mb-4'>
          Central to her message was the need for solutions “born on African
          soil.” For the Lake Victoria Basin, these include climate-smart
          agriculture, sustainable water management, AI-enabled monitoring
          systems, regional early warning tools, and strengthened cross-border
          governance frameworks. Such innovations echo Mohammed’s call for
          harnessing green and digital economies to support people and safeguard
          ecosystems
          <Link href='#ref3' underline='hover'>
            [3]
          </Link>
          .
        </Typography>

        <Typography variant='body2' className='mb-4'>
          The Deputy Secretary-General underscored the importance of financing
          climate resilience. With 43% of African nations facing debt distress,
          she advocated for a global SDG Stimulus of at least $500 billion
          annually. The Lake Victoria Basin requires urgent investment in smart
          water infrastructure, pollution control, restoration programs, and
          renewable energy systems—investments aligned with her call for
          systemic financial reform and equitable climate financing
          <Link href='#ref4' underline='hover'>
            [4]
          </Link>
          .
        </Typography>

        <Typography variant='body2' className='mb-4'>
          Mohammed also emphasized the critical role of youth and women in
          driving transformative change. For Lake Victoria, empowering these
          groups in agri-tech, conservation, entrepreneurship, and digital
          innovation is essential. Inclusive participation ensures sustainable
          solutions that reflect local needs and build long-term resilience
          <Link href='#ref5' underline='hover'>
            [5]
          </Link>
          .
        </Typography>

        <Typography variant='body2' className='mb-4'>
          As Africa prepares for major global climate and SDG summits, Mohammed
          called for renewed ambition, stronger partnerships, and alignment of
          national policies with sustainable development goals. For the Lake
          Victoria Basin, this means integrating climate adaptation strategies,
          strengthening regional cooperation through the East African Community,
          and ensuring that international commitments translate into measurable
          improvements in water security, food systems, and climate resilience.
        </Typography>

        <Typography variant='body2' className='mb-4'>
          Her message is clear: Africa has the solutions, leadership, and human
          potential to transform its future. The Lake Victoria Basin can become
          a model of climate-smart, inclusive, and sustainable development—if
          investment, political will, and regional collaboration are mobilized
          at scale.
        </Typography>

        {/* References Section */}
        <Divider className='my-6' />
        <Typography variant='h6' className='mb-3 font-semibold'>
          References
        </Typography>

        <Typography variant='body2' id='ref1' className='mb-2'>
          [1] Mohammed, Amina J.{' '}
          <i>
            UN deputy chief calls for the Africa Regional Collaborative Platform
            to scale up its transformative support, 2023.
          </i>
        </Typography>

        <Typography variant='body2' id='ref2' className='mb-2'>
          [2] UNECA.{' '}
          <i>Climate and Socioeconomic Vulnerabilities in African Regions</i>.
          Addis Ababa: UNECA, 2024.
        </Typography>

        <Typography variant='body2' id='ref3' className='mb-2'>
          [3] African Union Commission.{' '}
          <i>Green and Digital Transformation in Africa</i>. AUC Report, 2024.
        </Typography>

        <Typography variant='body2' id='ref4' className='mb-2'>
          [4] United Nations.{' '}
          <i>SDG Stimulus and Global Climate Financing Report</i>. New York:
          UNHQ, 2024.
        </Typography>

        <Typography variant='body2' id='ref5' className='mb-2'>
          [5] FAO & UNEP.{' '}
          <i>Youth, Innovation, and Climate Resilience in Africa</i>.
          Nairobi/Rome, 2023.
        </Typography>
      </div>
    </div>
  );
}
