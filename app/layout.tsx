import './globals.css';
import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import { CursorGlow } from '@/components/cursor-glow';
import { siteConfig } from '@/lib/data';

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

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — ${siteConfig.title}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    'Bhoopendra Singh',
    'Full-Stack JavaScript Developer',
    'Next.js Developer',
    'React Developer',
    'TypeScript',
    'Web Developer',
    'Portfolio',
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    title: `${siteConfig.name} — ${siteConfig.title}`,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} — ${siteConfig.title}`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteConfig.name} — ${siteConfig.title}`,
    description: siteConfig.description,
    images: ['/opengraph-image'],
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/icon',
  },
  manifest: '/manifest.webmanifest',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: siteConfig.url,
    types: {
      'application/rss+xml': [{ url: '/rss.xml', title: `${siteConfig.name} Blog` }],
    },
  },
};

export const viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#0a0a14' },
    { media: '(prefers-color-scheme: light)', color: '#f8f9fc' },
  ],
  width: 'device-width',
  initialScale: 1,
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: siteConfig.name,
  url: siteConfig.url,
  jobTitle: siteConfig.title,
  description: siteConfig.description,
  email: siteConfig.email,
  sameAs: [
    siteConfig.links.github,
    siteConfig.links.linkedin,
    siteConfig.links.portfolio,
  ],
  knowsAbout: [
    'Next.js',
    'React',
    'TypeScript',
    'Node.js',
    'PostgreSQL',
    'Prisma',
    'Tailwind CSS',
  ],
};

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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
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
