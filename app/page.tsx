'use client';

import Features from '@/components/landing-page/feature/Features';
import Herro from '@/components/landing-page/herro/Herro';
import HowItWorks from '@/components/landing-page/how-it-works/HowItWorks';

const Page = () => {
  return (
    <>
      <Herro />
      <HowItWorks />
      <Features />
    </>
  );
};

export default Page;
