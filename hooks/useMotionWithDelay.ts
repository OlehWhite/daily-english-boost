import { useInView } from 'framer-motion';
import { useRef } from 'react';

const useMotionWithDelay = <T extends Element>() => {
  const ref = useRef<T>(null);
  const isInView = useInView(ref, { once: true });

  return { ref, isInView };
};

export default useMotionWithDelay;
