import ProgressBar from '@/components/ui/ProgressBar';
import { leftFeedbacksAnimations } from '@/constants/animations';
import useMotionWithDelay from '@/hooks/useMotionWithDelay';
import { motion } from 'framer-motion';

const Progress = () => {
  const { ref, isInView } = useMotionWithDelay<HTMLDivElement>();

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      variants={leftFeedbacksAnimations}
      animate={isInView ? 'visible' : 'hidden'}
      className="flex justify-between w-full "
    >
      <div>
        <ProgressBar value={2} max={7} color="bg-blue-300">
          <span className="text-[16px] font-bold text-gray-500">
            Week progress: {2} / {7}
          </span>
        </ProgressBar>
      </div>

      <p className="text-[16px] font-bold text-gray-500">Streak: 0</p>
    </motion.div>
  );
};

export default Progress;
