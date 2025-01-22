import Header from '@/components/header/header';
import '@/styles/globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Plona',
  description: 'Plan it, Own it, Achieve it.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ko'>
      <body>
        <Header />
        {children}</body>
    </html>
  );
}
