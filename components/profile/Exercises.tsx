import { childAnimations, dailyTasksAnimations } from '@/constants/animations';
import { exercises } from '@/constants/exercises';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';

// Create a motion-enhanced Link component
const MotionLink = motion(Link);

const Exercises = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

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
          <span className="bg-white p-[15px] rounded-full">
            <Image src={exercise.icon} width={40} height={40} alt={exercise.title} />
          </span>
          <p className="text-center mt-1">{exercise.title}</p>
        </MotionLink>
      ))}
    </motion.div>
  );
};

export default Exercises;
