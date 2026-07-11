import './globals.css';
import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import { CursorGlow } from '@/components/cursor-glow';
import { getSiteContent } from '@/lib/site-content';
import {
  buildSiteMetadata,
  buildPersonJsonLd,
  buildWebSiteJsonLd,
} from '@/lib/seo';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

const site = getSiteContent();

export const metadata: Metadata = buildSiteMetadata(site);

export const viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#0a0a14' },
    { media: '(prefers-color-scheme: light)', color: '#f8f9fc' },
  ],
  width: 'device-width',
  initialScale: 1,
};

const personJsonLd = buildPersonJsonLd(site);
const webSiteJsonLd = buildWebSiteJsonLd(site);

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans`}
        suppressHydrationWarning
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteJsonLd) }}
        />
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <CursorGlow />
          <SiteHeader />
          <main className="relative">{children}</main>
          <SiteFooter />
        </ThemeProvider>
      </body>
    </html>
  );
}
