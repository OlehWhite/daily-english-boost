import { childAnimations, dailyTasksAnimations } from '@/constants/animations';
import { exercises } from '@/constants/exercises';
import useMotionWithDelay from '@/hooks/useMotionWithDelay';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const MotionLink = motion(Link);

const Exercises = () => {
  const { ref, isInView } = useMotionWithDelay<HTMLDivElement>();

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={dailyTasksAnimations}
      className="grid grid-cols-2 gap-4"
    >
      {exercises.map((exercise, index) => (
        <MotionLink
          variants={childAnimations}
          href={exercise.link}
          key={exercise.id}
          style={{ backgroundColor: exercise.bgcolor }}
          className={`flex flex-col items-center p-[20px] shadow-[2px_3px_7px_-1px_rgba(0,0,0,0.25)] rounded-xl ${
            index % 3 === 2 ? 'col-span-2' : 'w-full'
          }`}
        >
          <span className="bg-white p-[15px] rounded-full shadow-[2px_3px_7px_-1px_rgba(0,0,0,0.25)] ">
            <Image src={exercise.icon} width={40} height={40} alt={exercise.title} />
          </span>

          <p
            style={{ color: exercise.color }}
            className="text-gray-500 leading-[1.2] text-[18px] font-bold text-center mt-1"
          >
            {exercise.title}
          </p>
        </MotionLink>
      ))}
    </motion.div>
  );
};

export default Exercises;
