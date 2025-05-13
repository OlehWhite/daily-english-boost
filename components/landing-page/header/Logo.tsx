'use client';

import { animationLogo, animationText } from '@/constants/animations';
import LogoIMG from '@/public/images/logo.png';
import { motion } from 'framer-motion';
import { useInView } from 'motion/react';
import Image from 'next/image';
import { useRef } from 'react';

const Logo = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className="flex gap-3 items-center cursor-pointer">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        variants={animationLogo}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="flex items-center gap-2"
      >
        <Image src={LogoIMG} width={50} alt="Logo" placeholder="blur" />
      </motion.div>

      <div>
        <motion.p
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={animationText}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.3 }}
          className="text-md leading-[100%] font-bold text-grad"
        >
          Daily
        </motion.p>

        <motion.p
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={animationText}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.4 }}
          className="text-md leading-[100%] font-bold text-grad"
        >
          English
        </motion.p>

        <motion.p
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={animationText}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.5 }}
          className="text-md  leading-[100%] font-bold text-grad"
        >
          Boost
        </motion.p>
      </div>
    </div>
  );
};

export default Logo;
