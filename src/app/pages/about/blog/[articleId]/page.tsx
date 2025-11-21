// app/about/blog/[articleId]/page.tsx
import Article1 from './Article1';
import Article2 from './Article2';
import Article3 from './Article3';
import Article4 from './Article4';
import { ComponentType } from 'react';

// Map of article slugs to their components
const articlesMap: Record<string, ComponentType> = {
  'ai-for-lake-victoria': Article1,
  'cop28-cop29-east-africa': Article2,
  'lake-victoria-2025': Article3,
  'lvbice-2026': Article4,
  // add other articles here
};

interface ArticlePageProps {
  params: Promise<{ articleId: string }>;
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}

export default async function ArticlePage({
  params,
  searchParams,
}: ArticlePageProps) {
  // Await the Promises from App Router
  const resolvedParams = await params;
  const resolvedSearchParams = await searchParams;

  // Extract the slug from the URL
  const pathSegments = (resolvedParams?.articleId || '').split('/');
  const slug = pathSegments[pathSegments.length - 1].toLowerCase();

  console.log('Article ID from params:', resolvedParams.articleId);
  console.log('Available articles:', Object.keys(articlesMap));
  console.log('Selected article slug:', slug);
  console.log('Search params:', resolvedSearchParams);

  // Get the matching component
  const ArticleComponent = articlesMap[slug];

  if (!ArticleComponent) {
    return (
      <div className='py-32 text-center text-3xl font-bold'>
        Article Not Found
      </div>
    );
  }

  return <ArticleComponent />;
}
