import '@/app/globals.css';
import { authOptions } from '@/app/lib/authOptions';
import Provider from '@/components/Provider';
import '@/styles/gradients.css';
import type { Metadata } from 'next';
import { getServerSession } from 'next-auth';
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

interface Props {
  children: ReactNode;
}

export default async function RootLayout({ children }: Props) {
  const session = await getServerSession(authOptions);

  return (
    <html lang="en">
      <body className={`${luckiestGuy.variable} font-[family-name:var(--font-luckiest-guy)]`}>
        <Provider session={session}>{children}</Provider>
      </body>
    </html>
  );
}
