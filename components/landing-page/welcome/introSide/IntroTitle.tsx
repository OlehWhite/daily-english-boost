import { introTitleAnimations } from '@/constants/animations';
import { motion, useInView } from 'motion/react';
import { useRef } from 'react';

const IntroTitle = () => {
  const ref = useRef<HTMLHeadingElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.h1
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={introTitleAnimations}
      className="flex flex-col text-[46px] font-bold"
    >
      <span>Learn English your way.</span>
      <span>Every single day.</span>
    </motion.h1>
  );
};

export default IntroTitle;
