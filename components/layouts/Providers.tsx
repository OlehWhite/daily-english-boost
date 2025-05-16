'use client';

import Footer from '@/components/layouts/footer/Footer';
import Header from '@/components/layouts/header/Header';
import { Session } from 'next-auth';
import { SessionProvider } from 'next-auth/react';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  session: Session | null;
}

const Providers = ({ session, children }: Props) => {
  return (
    <SessionProvider session={session}>
      <Header />
      <main>{children}</main>
      <Footer />
    </SessionProvider>
  );
};

export default Providers;
