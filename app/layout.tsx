import '@/app/globals.css';
import { authOptions } from '@/app/lib/authOptions';
import Providers from '@/components/layouts/Providers';
import '@/styles/gradients.css';
import type { Metadata } from 'next';
import { getServerSession } from 'next-auth';
import { Golos_Text } from 'next/font/google';
import { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Daily English Boost',
  description: 'Welcome to our website where you can learn english!',
};

const golosText = Golos_Text({
  weight: '400',
  style: 'normal',
  subsets: ['latin'],
  variable: '--font-golos-text',
  display: 'swap',
});

interface Props {
  children: ReactNode;
}

export default async function RootLayout({ children }: Props) {
  const session = await getServerSession(authOptions);

  return (
    <html lang="en">
      <body className={`${golosText.variable}`}>
        <Providers session={session}>{children}</Providers>
      </body>
    </html>
  );
}
