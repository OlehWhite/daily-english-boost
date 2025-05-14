'use client';

import InfoBlock from '@/components/landing-page/how-it-works/InfoBlock';
import { introDesAnimations, topAnimations } from '@/constants/animations';
import { howItWorks } from '@/constants/how-it-works';
import { motion } from 'framer-motion';
import { useInView } from 'motion/react';
import { useRef } from 'react';

const HowItWorks = () => {
  const ref = useRef<HTMLSelectElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      variants={topAnimations}
      animate={isInView ? 'visible' : 'hidden'}
      className="flex flex-col items-center gap-[60px] mt-[60] p-8 pt-[60px] bg-white"
    >
      <h2 className="text-[45px] leading-[96%] font-bold">How it works</h2>

      <motion.div
        variants={introDesAnimations}
        className="
          flex flex-col gap-8
          md:flex-row
        "
      >
        {howItWorks.map((element) => (
          <InfoBlock key={element.id} element={element} />
        ))}
      </motion.div>
    </motion.section>
  );
};

export default HowItWorks;
