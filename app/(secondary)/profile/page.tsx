'use client';

import Exercises from '@/components/profile/Exercises';
import Lvl from '@/components/profile/Lvl';
import Progress from '@/components/profile/Progress';
import { LINKS } from '@/types/enums/links';
import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';

const Page = () => {
  const { data: session } = useSession();

  if (!session) return redirect(LINKS.HOME);

  return (
    <div className="flex flex-col gap-4 px-[20px]">
      <Progress />
      <Lvl />
      <Exercises />
    </div>
  );
};

export default Page;
