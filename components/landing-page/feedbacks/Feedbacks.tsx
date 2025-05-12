'use client';

import Feedback from '@/components/landing-page/feedbacks/Feedback';
import { sectionAnimations } from '@/constants/animations';
import { feedbacks } from '@/constants/feedbacks';
import { motion, useInView } from 'motion/react';
import { useRef } from 'react';

const Feedbacks = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={sectionAnimations}
      className="mt-[80px]"
      id="feedbacks"
    >
      <h2 className="text-center text-6xl font-bold">See What Our Customers Are Saying</h2>
      <p className="text-center mt-4 text-xl">
        Here`s what some of our customers say about our platform
      </p>

      <div className="flex flex-wrap justify-center m-[0_auto] 0 gap-8 mt-10 w-full max-w-[1000px]">
        {feedbacks.map((feedback) => (
          <Feedback key={feedback.id} feedback={feedback} />
        ))}
      </div>
    </motion.div>
  );
};

export default Feedbacks;
