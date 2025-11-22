// src/app/pages/about/page.tsx
// This is the route entry for the About page in the Next.js App Router.
// It simply renders the client component (About) and does not itself need
// the "use client" directive because it contains no hooks or browser-only code.

import About from './About';

/**
 * AboutPage: route wrapper that renders the About experience.
 * Responsibility is limited to layout scaffolding.
 */
export default function AboutPage() {
  return (
    <div className='min-h-screen'>
      <About />
    </div>
  );
}
