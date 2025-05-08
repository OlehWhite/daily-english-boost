'use client';

import DynamicImages from '@/components/welcome/imagesSide/DynamicImages';
import IntroInfo from '@/components/welcome/introSide/IntroInfo';
import { welcomeAnimations } from '@/constants/animations';
import { motion, useInView } from 'motion/react';
import { useRef } from 'react';

const Welcome = () => {
  const ref = useRef<HTMLSelectElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={welcomeAnimations}
      className="flex text-white mt-5"
    >
      <IntroInfo />
      <DynamicImages />
    </motion.section>
  );
};

export default Welcome;
