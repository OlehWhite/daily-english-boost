import ProgressBar from '@/components/ui/ProgressBar';
import { leftFeedbacksAnimations } from '@/constants/animations';
import { motion, useInView } from 'motion/react';
import { useRef } from 'react';

const Lvl = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      variants={leftFeedbacksAnimations}
      animate={isInView ? 'visible' : 'hidden'}
      className="flex flex-col gap-4 items-center w-full p-[20px] bg-white rounded-xl  shadow-[2px_3px_7px_-1px_rgba(0,0,0,0.25)]"
    >
      <ProgressBar value={20} max={100} color="bg-green-400" />

      <span className="text-white bg-blue-400 py-1 px-2 rounded-lg tetx-[16px] font-bold">
        Level 3
      </span>
    </motion.div>
  );
};

export default Lvl;
