import { childVerticalAnimations } from '@/constants/animations';
import type { IInfoBlock } from '@/types/InfoBlock';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface Props {
  element: IInfoBlock;
}

const InfoBlock = ({ element }: Props) => {
  return (
    <motion.div
      variants={childVerticalAnimations}
      className="flex flex-col gap-3 justify-center items-center "
    >
      <Image src={element.icon} width={120} height={120} alt={element.title} />
      <h3 className="text-[22px] font-bold text-center">{element.title}</h3>
      <p className="text-[18px] text-gray-500 text-center">{element.description}</p>
    </motion.div>
  );
};

export default InfoBlock;
