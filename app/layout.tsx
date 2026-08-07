import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  metadataBase: new URL('https://aceafricatech.com'),
  title: 'AceAfrica Tech Support Skills Limited | Remote Tech Careers for Nigerians',
  description: 'Learn high-demand remote tech skills: Technical Customer Support, Virtual Assistant, IT Support, and Tech Sales. Get trained by Awanger Agena and land dollar-paying remote jobs.',
  keywords: [
    'AceAfrica Tech Support Skills Limited',
    'remote jobs in nigeria',
    'customer support training nigeria',
    'virtual assistant training abuja',
    'earn in dollars from home nigeria',
    'tech support remote jobs',
    'Awanger Agena'
  ],
  authors: [{ name: 'AceAfrica Tech Support Skills Limited' }],
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.png', type: 'image/png' },
      { url: '/favicon.png', type: 'image/png' },
    ],
    shortcut: ['/favicon.ico'],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  openGraph: {
    title: 'AceAfrica Tech Support Skills Limited | Remote Job Training',
    description: 'Empowering Nigerians with digital support skills to land international remote jobs.',
    url: 'https://aceafricatech.com',
    siteName: 'AceAfrica Tech Support Skills Limited',
    images: [
      {
        url: '/logo.png',
        width: 1000,
        height: 200,
        alt: 'AceAfrica Official Logo',
      },
    ],
    locale: 'en_NG',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-US" data-scroll-behavior="smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body className="flex flex-col min-h-screen antialiased bg-white text-slate-900">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
