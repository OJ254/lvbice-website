// src/app/pages/about/blog/Blog.tsx

'use client';

import { ReactNode, useEffect, useState } from 'react';
import Header from '@/components/general/Header/Header';
import Footer from '@/app/pages/about/(sections)/Footer';

export default function Blog({ children }: { children: ReactNode }) {
  const textColor = 'text-white hover:text-[#E68600]';

  return (
    <div className='relative'>
      <header
        className='fixed top-0 z-50 flex w-full items-center justify-center py-2 transition-all duration-300 lg:py-4'
        style={{
          backgroundColor: `rgba(59, 130, 246)`,
        }}
      >
        <Header textColor={textColor} />
      </header>

      {/* selected article will render here */}
      <main className='my-20 mt-40 flex w-full flex-col items-center justify-center'>
        {children}
      </main>

      <Footer className='w-full' />
    </div>
  );
}
