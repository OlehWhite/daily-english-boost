'use client';

import IconScroll from '@/components/icons/IconScroll';
import DynamicImages from '@/components/landing-page/welcome/imagesSide/DynamicImages';
import IntroInfo from '@/components/landing-page/welcome/introSide/IntroInfo';
import { sectionAnimations } from '@/constants/animations';
import { motion, useInView } from 'motion/react';
import Link from 'next/link';
import { useRef } from 'react';

const Welcome = () => {
  const ref = useRef<HTMLSelectElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={sectionAnimations}
      className="flex flex-col justify-between items-center mt-[40px] text-white h-[800px]"
    >
      <div className="flex">
        <IntroInfo />
        <DynamicImages />
      </div>

      <Link href="/#feedbacks" className="flex justify-center size-6 animate-bounce">
        <IconScroll />
      </Link>
    </motion.section>
  );
};

export default Welcome;
