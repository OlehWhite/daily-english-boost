'use client';

import { childVerticalAnimations, introDesAnimations, topAnimations } from '@/constants/animations';
import { features } from '@/constants/features';
import CheckIMG from '@/public/images/check.png';
import { motion } from 'framer-motion';
import { useInView } from 'motion/react';
import Image from 'next/image';
import { useRef } from 'react';

const Features = () => {
  const ref = useRef<HTMLSelectElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      variants={topAnimations}
      animate={isInView ? 'visible' : 'hidden'}
      className="flex justify-between w-full max-w-[1000px] m-[0_auto] pt-[60px]"
    >
      <h2 className="text-[45px] leading-[96%] font-bold">Features</h2>

      <motion.ul variants={introDesAnimations} className="flex flex-col gap-4">
        {features.map((feature) => (
          <motion.li variants={childVerticalAnimations} key={feature.id} className="flex gap-3">
            <Image src={CheckIMG} alt={feature.title} />
            <p className="text-[16px] font-bold text-gray-500">{feature.title}</p>
          </motion.li>
        ))}
      </motion.ul>
    </motion.section>
  );
};

export default Features;
