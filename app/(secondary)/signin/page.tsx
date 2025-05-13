'use client';

import Signin from '@/components/auth/Signin';
import { SessionProvider } from 'next-auth/react';

const Page = () => {
  return (
    <SessionProvider>
      <Signin />
    </SessionProvider>
  );
};

export default Page;
