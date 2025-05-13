'use client';

import { childAnimations, navAnimations } from '@/constants/animations';
import { navigations } from '@/constants/navigations';
import { motion } from 'framer-motion';
import { useInView } from 'motion/react';
import { useRef } from 'react';

const Nav = () => {
  const ref = useRef<HTMLUListElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.nav
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={navAnimations}
      className="flex gap-6"
    >
      {navigations.map((nav) => (
        <motion.a
          href={nav.link}
          key={nav.id}
          variants={childAnimations}
          whileHover={{ scale: 1.25, transition: { duration: 0.3 } }}
        >
          <span className="text-lg font-bold cursor-pointer duration-300 text-grad">
            {nav.name}
          </span>
        </motion.a>
      ))}
    </motion.nav>
  );
};

export default Nav;
