'use client';

import { rightFeedbacksAnimations } from '@/constants/animations';
import { motion } from 'framer-motion';
import { useInView } from 'motion/react';
import Link from 'next/link';
import { useRef } from 'react';

const Introduction = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

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
        href="/api/auth/signin"
        className="w-[120px] h-[40px] rounded-md cursor-pointer bg-blue-400 hover:bg-blue-500 duration-300 text-white font-semibold flex items-center justify-center "
      >
        Try Demo
      </Link>
    </motion.div>
  );
};

export default Introduction;
