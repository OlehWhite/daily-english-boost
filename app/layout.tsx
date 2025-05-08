import '@/app/globals.css';
import Header from '@/components/header/Header';
import '@/styles/gradients.css';
import type { Metadata } from 'next';
import { Luckiest_Guy } from 'next/font/google';
import { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Daily English Boost',
  description: 'Welcome to our website where you can learn english!',
};

const luckiestGuy = Luckiest_Guy({
  weight: '400',
  style: 'normal',
  subsets: ['latin'],
  variable: '--font-luckiest-guy',
  display: 'swap',
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${luckiestGuy.variable} font-[family-name:var(--font-luckiest-guy)]`}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
