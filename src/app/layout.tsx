// src/app/layout.tsx

import type { Metadata } from 'next';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { Geist, Geist_Mono } from 'next/font/google';
import { ThemeProvider } from '@mui/material/styles';
import ThemeRegistry from '@/components/shared/ThemeToggle/ThemeRegistry';
import './globals.css';

const geistSans = Geist({
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-geist-sans',
  subsets: ['latin'],
  display: 'swap',
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'LVBICE',
  description:
    'The Lake Victoria Basin International Conference and Exhibition (LVBICE) is an annual regional platform promoting sustainable water and sanitation management through innovation, research, and collaboration. The initiative brings together governments, researchers, development partners, and the private sector to drive climate-resilient solutions for the Lake Victoria Basin and beyond.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <head>
        <title>LVBICE</title>
        <meta name='description' content={metadata.description as string} />
        <meta
          name='keywords'
          content='Lake Victoria Basin International Conference and Exhibition, LVBICE, Lake Victoria Basin, water conference Africa, climate change East Africa, water and sanitation innovation, sustainable water management, water governance, climate-resilient infrastructure, water resources management, sanitation solutions, climate adaptation Kenya, environmental restoration Lake Victoria, water technology exhibition, AI in water management, smart water systems, climate-smart agriculture, disaster risk reduction East Africa, ecosystem health Lake Victoria, water financing and investment, regional water partnerships, water policy dialogue, WASH Africa, water sector stakeholders, East Africa water research, water security Africa, SDG 6, SDG-6'
        />
        <meta name='author' content='LVBICE' />
        <meta name='robots' content='index, follow' />
        <meta property='og:title' content='LVBICE' />
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'LVBICE',
              url: 'url', // e.g: https://ticetedu.com
              logo: 'url', // e.g: https://ticetedu.com/public/ticet-small.svg
              sameAs: [
                'url', // e.g: https://www.facebook.com/ticetedu
                'url', // e.g: https://twitter.com/ticetedu
                'url', // e.g: https://linkedin.com/company/ticet-edu
              ],
            }),
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
                            (function() {
                                try {
                                    const theme = localStorage.getItem('theme');
                                    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                                    
                                    // Apply theme based on value in localStorage or system preference
                                    if (theme === 'dark') {
                                        document.documentElement.classList.add('dark');
                                    } else if (theme === 'light') {
                                        document.documentElement.classList.remove('dark');
                                    } else {
                                        // 'system' or null: fallback to system preference
                                        if (prefersDark) {
                                            document.documentElement.classList.add('dark');
                                        } else {
                                            document.documentElement.classList.remove('dark');
                                        }
                                    }
                                } catch (e) {
                                    console.warn('Theme detection failed', e);
                                }
                            })();
                        `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <ThemeRegistry>{children}</ThemeRegistry>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
