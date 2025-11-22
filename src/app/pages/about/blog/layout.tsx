// src/app/pages/about/blog/layout.tsx
// Route segment layout for the About → Blog section.
// This file does not use hooks or browser-only APIs, so it does not need the
// "use client" directive. It simply composes the client Blog layout below.

import { ReactNode } from 'react';
import Blog from './Blog';

/**
 * BlogLayout wraps all blog article routes under /pages/about/blog.
 *
 * Responsibilities:
 * - Provide consistent page chrome by rendering the Blog client component
 *   (which includes Header, hash scrolling, and Footer) around nested pages.
 * - Keep this file server-compatible; interactivity lives inside Blog.tsx.
 */
export default function BlogLayout({ children }: { children: ReactNode }) {
  return <Blog>{children}</Blog>;
}
