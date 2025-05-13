'use client';

import Button from '@/components/UI/Button';
import { rightFeedbacksAnimations } from '@/constants/animations';
import { motion } from 'framer-motion';
import { useInView } from 'motion/react';
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
      <h1 className="text-[60px] leading-[96%] font-bold">
        Boost your English, one small step at a time.
      </h1>

      <p className="text-[18px] text-gray-500">
        Track progress, learn new words, build confidence.
      </p>

      <Button>Try Demo</Button>
    </motion.div>
  );
};

export default Introduction;
