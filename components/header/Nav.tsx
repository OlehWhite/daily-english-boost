'use client';

import { liAnimations, ulAnimations } from '@/constants/animations';
import { motion } from 'framer-motion';
import { useInView } from 'motion/react';
import { useRef } from 'react';

const Nav = () => {
  const ref = useRef<HTMLUListElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <nav>
      <motion.ul
        ref={ref}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        variants={ulAnimations}
        className="flex gap-3"
      >
        <motion.li variants={liAnimations}>Home</motion.li>
        <motion.li variants={liAnimations}>Lest start</motion.li>
        <motion.li variants={liAnimations}>About us</motion.li>
        <motion.li variants={liAnimations}>Contacts</motion.li>
      </motion.ul>
    </nav>
  );
};

export default Nav;
