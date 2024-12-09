import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SLON',
  description: 'Digital Planner, SLON',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ko'>
      <body>{children}</body>
    </html>
  );
}
