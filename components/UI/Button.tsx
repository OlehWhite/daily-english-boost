'use client';

import { motion, useInView } from 'motion/react';
import { ReactNode, useRef } from 'react';

interface Props {
  children: ReactNode;
  delay?: number;
  variants: any;
}

const Button = ({ children, delay = 0.5, variants }: Props) => {
  const ref = useRef<HTMLButtonElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.button
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={variants}
      transition={{ duration: 0.7, ease: 'easeOut', delay }}
      className="w-[100px] h-[40px] bg-amber-500 rounded-md cursor-pointer text-white font-semibold flex items-center justify-center"
    >
      {children}
    </motion.button>
  );
};

export default Button;
