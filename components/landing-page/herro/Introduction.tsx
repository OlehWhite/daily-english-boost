'use client';

import { rightFeedbacksAnimations } from '@/constants/animations';
import useMotionWithDelay from '@/hooks/useMotionWithDelay';
import { LINKS } from '@/types/enums/links';
import { STATUSES } from '@/types/enums/statuses';
import { motion } from 'framer-motion';
import { useSession } from 'next-auth/react';
import Link from 'next/link';

const Introduction = () => {
  const { ref, isInView } = useMotionWithDelay<HTMLDivElement>();
  const { status } = useSession();

  const isAuthenticated = status === STATUSES.AUTHENTICATED;
  const title = isAuthenticated ? 'Вчитися' : 'Увійти';
  const href = isAuthenticated ? LINKS.PROFILE : LINKS.SIGNIN_API;

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={rightFeedbacksAnimations}
      className="flex flex-col gap-4 w-full max-w-[400px]"
    >
      <h1
        className="
          text-[30px] leading-[96%] font-bold
          md:text-[45px]
          lg:text-[60px]
        "
      >
        Boost your English, one small step at a time.
      </h1>

      <p className="text-[18px] text-gray-500">
        Track progress, learn new words, build confidence.
      </p>

      <Link
        href={href}
        className="w-full max-w-[120px] h-[40px] rounded-md cursor-pointer bg-blue-400 hover:bg-blue-500 duration-300 text-white font-semibold flex items-center justify-center "
      >
        {title}
      </Link>
    </motion.div>
  );
};

export default Introduction;
