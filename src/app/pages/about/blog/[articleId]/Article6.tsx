// noinspection HtmlUnknownAnchorTarget

'use client';

import Image from 'next/image';
import React from 'react';
import { Typography, Divider, Link } from '@mui/material';

// Replace this with the correct image asset for the fishing article
import LakeVictoriaFishing from '@/assets/images/lake-victoria-flooding.jpg';

export default function ArticleFishingCrisis() {
  return (
    <div className='surface mx-auto flex w-full max-w-6xl flex-col items-center justify-center rounded-lg shadow-lg'>
      {/* Hero Image */}
      <div className='relative h-96 w-full min-w-full'>
        <Image
          src={LakeVictoriaFishing}
          alt='Climate Change and Declining Fish Stocks in Lake Victoria'
          fill
          className='rounded-t-lg object-cover object-center'
          priority
        />
      </div>

      <div className='max-w-4xl px-4 py-10'>
        {/* Title */}
        <Typography variant='h1' className='mb-6 font-bold'>
          Climate Change Is Emptying Nets: Lake Victoria’s Fisheries Are
          Reaching a Breaking Point
        </Typography>

        {/* Summary Section */}
        <Divider className='my-6' />
        <Typography variant='h5' className='mb-3 font-semibold'>
          Summary
        </Typography>

        <Typography variant='body1' className='mb-6'>
          Declining fish stocks in Lake Victoria are pushing fishing communities
          to the brink, as climate change, ecosystem degradation, and rising
          temperatures disrupt breeding cycles and shrink traditional harvests.
          Fishermen now return with drastically reduced catches, while experts
          warn that warming waters, pollution, and irregular rainfall are
          accelerating ecological collapse. Innovation, adaptation, and urgent
          climate action are becoming essential to protect livelihoods and
          restore the lake’s fragile ecosystem.
        </Typography>

        <Typography color='textSecondary' className='mb-4 italic'>
          Estimated Read Time: 6 minutes
        </Typography>

        {/* Full Article Section */}
        <Divider className='my-6' />

        <Typography variant='body2' className='mb-4'>
          At dawn on Koginga Beach, fish traders gather along the shoreline as
          boats return from their nightly expeditions. Instead of the jubilant
          celebrations that once greeted these vessels, the morning now begins
          with disappointment. Fishermen arrive with meager catches—often too
          little to feed even a handful of families
          <Link href='#ref1' underline='hover'>
            [1]
          </Link>
          .
        </Typography>

        <Typography variant='body2' className='mb-4'>
          For fishermen like Geofrey Ogolla, the decline has been devastating.
          Once able to fill up to ten basins of omena in a night, he now
          considers himself lucky to secure even a fraction of that. “My buyers
          expect a lot of fish. That is not the case anymore,” he says,
          recalling when each basin was worth a steady income
          <Link href='#ref2' underline='hover'>
            [2]
          </Link>
          .
        </Typography>

        <Typography variant='body2' className='mb-4'>
          Other fishermen, like Bramwel Otieno, face mounting financial
          pressure. Spending Sh2,000 on fuel each night, they frequently break
          even—or suffer losses. Once harvesting up to 30 troughs of fish, they
          now struggle to collect even 10, often catching low-value crustaceans
          instead. The decline is reshaping the economic realities of entire
          communities along the lake
          <Link href='#ref3' underline='hover'>
            [3]
          </Link>
          .
        </Typography>

        <Typography variant='body2' className='mb-4'>
          Fisheries experts identify climate change as the most disruptive
          force. Rising water temperatures are driving species into deeper,
          cooler zones, reducing catch efficiency. Unpredictable rainfall—once a
          trigger for natural fish breeding cycles—has destabilized reproduction
          patterns. Warmer waters also reduce oxygen levels, increase lake
          stratification, and worsen algae blooms, damaging habitats essential
          for fish production
          <Link href='#ref4' underline='hover'>
            [4]
          </Link>
          .
        </Typography>

        <Typography variant='body2' className='mb-4'>
          Even major aquaculture companies are struggling. Victory Farms saw its
          production fall from 15,000 tonnes in 2024 to 9,000 tonnes this year.
          Climate-induced temperature shifts and poor land-use practices have
          created operational difficulties for both wild fishing and cage
          farming. Fish suffer stress from rapid temperature changes, affecting
          their growth and survival
          <Link href='#ref5' underline='hover'>
            [5]
          </Link>
          .
        </Typography>

        <Typography variant='body2' className='mb-4'>
          To survive, fishermen and firms are adopting innovative strategies.
          Victory Farms now uses drones to monitor water quality and deliver
          fingerlings to cages, cutting fuel consumption. The company plans to
          introduce 26 million fingerlings into the lake by 2026 and has
          launched a reforestation initiative to plant 100,000 trees while
          committing to recycling all plastic waste from its operations
          <Link href='#ref6' underline='hover'>
            [6]
          </Link>
          .
        </Typography>

        <Typography variant='body2' className='mb-4'>
          Local fishermen are also adapting—switching from paraffin lanterns to
          solar-powered lights and trialing electric boat engines to reduce
          operating costs. Farmers have begun adopting environmentally friendly
          fish cages made from hollow plastic, replacing harmful metallic
          designs. These early innovations highlight the community’s
          determination to safeguard the lake’s future.
        </Typography>

        <Typography variant='body2' className='mb-4'>
          As climate change continues to reshape Lake Victoria’s ecosystem, the
          need for coordinated adaptation grows more urgent. Experts advocate
          for climate-resilient fishing practices, improved aquaculture
          management, and stronger cross-sector partnerships. For the thousands
          of families who depend on the lake, sustainable solutions are no
          longer optional— they are a matter of survival.
        </Typography>

        {/* References Section */}
        <Divider className='my-6' />
        <Typography variant='h6' className='mb-3 font-semibold'>
          References
        </Typography>

        <Typography variant='body2' id='ref1' className='mb-2'>
          [1] Nation Media Group.{' '}
          <i>
            Climate crisis drains life from Lake Victoria, leaving fishermen
            high and dry
          </i>
          .
        </Typography>

        <Typography variant='body2' id='ref2' className='mb-2'>
          [2] Interview with Geofrey Ogolla, Fisherman, Homa Bay County, 2025.
        </Typography>

        <Typography variant='body2' id='ref3' className='mb-2'>
          [3] Interview with Bramwel Otieno, Fisherman, Homa Bay County, 2025.
        </Typography>

        <Typography variant='body2' id='ref4' className='mb-2'>
          [4] Omondi, Michael.{' '}
          <i>Aquaculture Business Development Programme (ABDP) Climate Brief</i>
          .
        </Typography>

        <Typography variant='body2' id='ref5' className='mb-2'>
          [5] Victory Farms Annual Climate Adaptation Report, 2025.
        </Typography>

        <Typography variant='body2' id='ref6' className='mb-2'>
          [6] Victory Farms Sustainability and Reforestation Plan, 2024–2028.
        </Typography>
      </div>
    </div>
  );
}
