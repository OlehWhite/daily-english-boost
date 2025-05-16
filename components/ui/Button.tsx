'use client';

import useMotionWithDelay from '@/hooks/useMotionWithDelay';
import { motion, Variants } from 'motion/react';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  delay?: number;
  variants?: Variants;
  onClick?: () => void;
}

const Button = ({ children, delay = 0.5, variants, onClick }: Props) => {
  const { ref, isInView } = useMotionWithDelay<HTMLButtonElement>();

  return (
    <motion.span
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={variants}
      transition={{ duration: 0.7, ease: 'easeOut', delay }}
    >
      <button
        onClick={onClick}
        className="w-[120px] h-[40px] rounded-md cursor-pointer bg-blue-400 hover:bg-blue-500 duration-300 text-white font-semibold flex items-center justify-center "
      >
        {children}
      </button>
    </motion.span>
  );
};

export default Button;
