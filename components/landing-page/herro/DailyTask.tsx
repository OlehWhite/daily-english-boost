import { childAnimations } from '@/constants/animations';
import type { IDailyTask } from '@/types/DailyTask';
import { motion } from 'framer-motion';

interface Props {
  dailyTask: IDailyTask;
}

const DailyTask = ({ dailyTask }: Props) => {
  return (
    <motion.div
      variants={childAnimations}
      className="border-gray-300 border-1 rounded-[6px] p-[10px]"
    >
      <div className="flex justify-between items-center">
        <h3 className="text-[18px] font-bold">{dailyTask.title}</h3>
        {dailyTask.enabled ? (
          <span className="text-[12px] font-bold text-green-400">can use!</span>
        ) : (
          <span className="text-[12px] font-bold text-blue-400">coming soon!</span>
        )}
      </div>

      <p className="text-[14px] text-gray-500">{dailyTask.description}</p>
    </motion.div>
  );
};

export default DailyTask;
