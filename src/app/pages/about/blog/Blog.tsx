// src/app/pages/about/blog/Blog.tsx
// "use client" tells Next.js (App Router) this file must run on the client.
// Why it's required here:
// - We access browser-only APIs like window and document for hash-based
//   smooth-scrolling when arriving on a deep link (e.g., .../blog#contact).
// - We render interactive client components such as the shared Header/Footer
//   that attach event handlers and rely on client-side theming.
// - We use React hooks (useEffect) to coordinate scroll behavior.
// Without this directive, the component would be treated as a server component
// by default and the above patterns would error at runtime.
'use client';

import { ReactNode, useEffect, useState } from 'react';
import Header from '@/components/general/Header/Header';
import Footer from '@/app/pages/about/(sections)/Footer';

/**
 * Blog layout (client component) for the About/Blog route segment.
 *
 * Responsibilities:
 * - Renders the global Header at the top and Footer at the bottom to frame
 *   individual blog articles.
 * - Provides a fixed header background and spacing so the article content
 *   appears below it.
 * - On mount, if the URL includes a hash, it waits for the matching element
 *   and smoothly scrolls it into view. This helps when navigating from
 *   elsewhere to an anchored section inside an article.
 *
 * Props:
 * - children: React nodes representing the selected blog article content
 *   rendered by nested routes (e.g., /pages/about/blog/[articleId]).
 */
export default function Blog({ children }: { children: ReactNode }) {
  const textColor = 'text-white hover:text-[#E68600]';

  useEffect(() => {
    // If there is a hash in the URL, attempt to smoothly scroll to it after
    // mount. We use a short interval to wait for the target to exist in the
    // DOM (articles can render content asynchronously).
    const hash = window.location.hash.slice(1);
    if (!hash) return;

    const interval = setInterval(() => {
      const target = document.getElementById(hash);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        clearInterval(interval);
      }
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='relative'>
      <header
        className='fixed top-0 z-50 flex w-full items-center justify-center py-2 transition-all duration-300 lg:py-4'
        style={{
          // Solid brand-colored header; the About page interpolates opacity with
          // scroll, but for blog we keep it constant to ensure readability.
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
