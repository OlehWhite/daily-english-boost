'use client';

import RatingClient from '@/components/landing-page/feedbacks/RatingClient';
import { leftFeedbacksAnimations, rightFeedbacksAnimations } from '@/constants/animations';
import type { IFeedback } from '@/types/Feedback';
import { motion, useInView } from 'motion/react';
import Image from 'next/image';
import { useRef } from 'react';

interface Props {
  feedback: IFeedback;
}

const Feedback = ({ feedback }: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  const even = feedback.id % 2 === 0;

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={even ? leftFeedbacksAnimations : rightFeedbacksAnimations}
      className="flex flex-col justify-between border-blue-400 border-1 rounded-lg p-5 w-full max-w-[460px]"
    >
      <div>
        <RatingClient rating={feedback.rating} />
        <p>{feedback.description}</p>
      </div>

      <div className="flex gap-4 items-center mt-4">
        <Image
          src={feedback.avatar}
          width="65"
          height="65"
          alt={feedback.name}
          className="rounded-full"
        />

        <div>
          <h4 className="font-bold text-lg">{feedback.name}</h4>
          <p className="text-gray-400">{feedback.title}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default Feedback;
