'use client';

import { motion, useInView, Variants } from 'motion/react';
import { ReactNode, useRef } from 'react';

interface Props {
  children: ReactNode;
  delay?: number;
  variants: Variants;
}

const Button = ({ children, delay = 0.5, variants }: Props) => {
  const ref = useRef<HTMLButtonElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.span
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={variants}
      transition={{ duration: 0.7, ease: 'easeOut', delay }}
    >
      <button className="w-[120px] h-[40px] rounded-md cursor-pointer text-white font-semibold flex items-center justify-center btn-grad">
        {children}
      </button>
    </motion.span>
  );
};

export default Button;
