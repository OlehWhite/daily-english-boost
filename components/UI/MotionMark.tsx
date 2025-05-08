import { IDynamicElement } from '@/types/DynamicElement';
import { motion } from 'framer-motion';
import { useInView } from 'motion/react';
import Image from 'next/image';
import { useRef } from 'react';

interface Props {
  element: IDynamicElement;
}

const MotionMark = ({ element }: Props) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  const variants = {
    hidden: { opacity: 0, x: element.startX, y: element.startY },
    visible: {
      opacity: 1,
      x: element.endX,
      y: element.endY,
      transition: { delay: 0.7, duration: 1, ease: 'easeOut' },
    },
  };

  return (
    <motion.span
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={variants}
      className={`relative w-[100px] flex ${element.rotate}`}
    >
      <Image src={element.img} width={100} alt={element.alt} className="animate-float" />
    </motion.span>
  );
};

export default MotionMark;
