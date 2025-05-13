'use client';

import Features from '@/components/landing-page/feature/Features';
import Herro from '@/components/landing-page/herro/Herro';
import HowItWorks from '@/components/landing-page/how-it-works/HowItWorks';
import { SessionProvider } from 'next-auth/react';

const Page = () => {
  return (
    <SessionProvider>
      <Herro />
      <HowItWorks />
      <Features />
    </SessionProvider>
  );
};

export default Page;
