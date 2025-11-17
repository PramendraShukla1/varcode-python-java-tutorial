import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';

export const metadata: Metadata = {
  title: 'varCODE Docs – Learn Python & Java with Clean Documentation',
  description:
    'varCODE provides beginner-friendly and expert-level documentation for Python and Java, designed for developers to learn faster.',
  keywords: [
    'python docs',
    'java docs',
    'varcode',
    'programming documentation',
    'learn python',
    'learn java',
  ],
  openGraph: {
    title: 'varCODE Docs – Learn Python & Java with Clean Documentation',
    description:
      'varCODE provides beginner-friendly and expert-level documentation for Python and Java, designed for developers to learn faster.',
    url: 'https://varcode.dev',
    siteName: 'varCODE Docs',
    images: [
      {
        url: 'https://picsum.photos/seed/og-image/1200/630',
        width: 1200,
        height: 630,
        alt: 'varCODE Docs OG Image',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'varCODE Docs – Learn Python & Java with Clean Documentation',
    description:
      'varCODE provides beginner-friendly and expert-level documentation for Python and Java, designed for developers to learn faster.',
    images: ['https://picsum.photos/seed/twitter-image/1200/630'],
  },
  metadataBase: new URL('https://your-deployment-url.com'),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body bg-background text-foreground antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
