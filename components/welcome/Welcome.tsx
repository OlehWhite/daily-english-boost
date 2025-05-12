'use client';

import IconScroll from '@/components/icons/IconScroll';
import DynamicImages from '@/components/welcome/imagesSide/DynamicImages';
import IntroInfo from '@/components/welcome/introSide/IntroInfo';
import { welcomeAnimations } from '@/constants/animations';
import { motion, useInView } from 'motion/react';
import { useRef } from 'react';

const Welcome = () => {
  const ref = useRef<HTMLSelectElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div>
      <motion.section
        ref={ref}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        variants={welcomeAnimations}
        className="flex text-white mt-5 min-h-[750px]"
      >
        <IntroInfo />
        <DynamicImages />
      </motion.section>

      <div className="flex justify-center bt-">
        <IconScroll />
      </div>
    </div>
  );
};

export default Welcome;
