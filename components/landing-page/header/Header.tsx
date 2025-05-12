'use client';

import Actions from '@/components/landing-page/header/Actions';
import Logo from '@/components/landing-page/header/Logo';
import Nav from '@/components/landing-page/header/Nav';
import { headerAnimations } from '@/constants/animations';
import { motion } from 'framer-motion';
import { useInView } from 'motion/react';
import { useRef } from 'react';

const Header = () => {
  const ref = useRef<HTMLHeadElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.header
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={headerAnimations}
      className="flex items-center justify-between bg-white p-5 rounded-[20px] "
    >
      <Logo />
      <Nav />
      <Actions />
    </motion.header>
  );
};

export default Header;
