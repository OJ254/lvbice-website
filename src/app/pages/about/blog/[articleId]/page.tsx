// src/app/pages/about/blog/[articleId]/page.tsx
// Dynamic route that renders a specific blog article by slug.
// This file is a server component by default in Next.js App Router, and it
// intentionally does NOT include the "use client" directive because:
// - It has no client-only APIs or hooks; it just selects a component to render.
// - Server components are lighter and avoid bundling client code unnecessarily.
// The individual Article components may themselves be client/server as needed.
import Article1 from './Article1';
import Article2 from './Article2';
import Article3 from './Article3';
import Article4 from './Article4';
import Article5 from './Article5';
import Article6 from './Article6';
import { ComponentType } from 'react';

// Map of article slugs to their corresponding React components.
// Extend this map when adding new articles to the folder.
const articlesMap: Record<string, ComponentType> = {
  'ai-for-lake-victoria': Article1,
  'cop28-cop29-east-africa': Article2,
  'lake-victoria-2025': Article3,
  'lvbice-2026': Article4,
  'amina-mohammed-speech': Article5,
  'lake-victoria-fishing-activities': Article6,
  // add other articles here
};

/**
 * Props provided by the App Router for a dynamic route page.
 *
 * Note: In some Next.js versions and configurations, params/searchParams are
 * available synchronously. Here they are typed as Promises and awaited below
 * to match the surrounding app conventions.
 */
interface ArticlePageProps {
  params: Promise<{ articleId: string }>;
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}

export default async function ArticlePage({
  params,
  searchParams,
}: ArticlePageProps) {
  // Await the route params and search params (see note above).
  const resolvedParams = await params;
  const resolvedSearchParams = await searchParams;

  // Extract the slug from the URL. We support both plain and nested values by
  // splitting on '/': e.g., "foo/bar" → "bar".
  const pathSegments = (resolvedParams?.articleId || '').split('/');
  const slug = pathSegments[pathSegments.length - 1].toLowerCase();

  // Lookup the article component by slug.
  const ArticleComponent = articlesMap[slug];

  if (!ArticleComponent) {
    // 404-style fallback when the slug is unknown. We keep it simple here; the
    // surrounding Blog layout provides consistent header/footer.
    return (
      <div className='py-32 text-center text-3xl font-bold'>
        Article Not Found
      </div>
    );
  }

  return <ArticleComponent />;
}
