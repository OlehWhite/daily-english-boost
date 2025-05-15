'use client';

import { LINKS } from '@/types/enums/links';
import { motion } from 'framer-motion';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';

const Client = () => {
  const { data: session } = useSession();

  if (!session) return null;

  return (
    <motion.div
      className="flex gap-4 items-center"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
      <Link href={LINKS.PROFILE}>
        <Image
          src={session?.user?.image ?? ''}
          width={40}
          height={40}
          alt={session?.user?.name ?? ''}
          priority
          className="rounded-full"
        />
      </Link>
    </motion.div>
  );
};

export default Client;
