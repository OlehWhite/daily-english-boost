'use client';

import DailyTask from '@/components/landing-page/herro/DailyTask';
import { dailyTasksAnimations, leftFeedbacksAnimations } from '@/constants/animations';
import { dailyTasks } from '@/constants/daily-tasks';
import useMotionWithDelay from '@/hooks/useMotionWithDelay';
import { motion } from 'framer-motion';

const DailyTasks = () => {
  const { ref, isInView } = useMotionWithDelay<HTMLDivElement>();

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={leftFeedbacksAnimations}
      className="flex flex-col gap-4 border-gray-300 border-1 rounded-[16px] p-[20px] w-full max-w-[460px]"
    >
      <div className="flex items-center gap-2">
        <span className="w-[13px] h-[13px] bg-red-400 rounded-full" />
        <span className="w-[13px] h-[13px] bg-yellow-400 rounded-full" />
        <span className="w-[13px] h-[13px] bg-green-400 rounded-full" />
      </div>

      <div className="bg-white rounded-[16px] w-full p-3">
        <div className="flex items-center justify-between px-3">
          <h2 className="font-bold mt-[7px]">Daily tasks</h2>
          <p>...</p>
        </div>

        <motion.div variants={dailyTasksAnimations} className="flex flex-col gap-4 p-[10px]">
          {dailyTasks.map((dailyTask) => (
            <DailyTask key={dailyTask.id} dailyTask={dailyTask} />
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default DailyTasks;
