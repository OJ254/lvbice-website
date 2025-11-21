// src/app/pages/about/blog/layout.tsx

import { ReactNode } from 'react';
import Blog from './Blog';

export default function BlogLayout({ children }: { children: ReactNode }) {
  return <Blog>{children}</Blog>;
}
