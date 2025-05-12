import { introDesAnimations, linkAnimations } from '@/constants/animations';
import { introDescription } from '@/constants/intro';
import { motion, useInView } from 'motion/react';
import { useRef } from 'react';

const IntroDescription = () => {
  const ref = useRef<HTMLParagraphElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.p
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={introDesAnimations}
      className="flex flex-col gap-[2px] text-lg"
    >
      {introDescription.map(({ id, name }) => (
        <motion.span key={id} variants={linkAnimations}>
          {name}
        </motion.span>
      ))}
    </motion.p>
  );
};

export default IntroDescription;
