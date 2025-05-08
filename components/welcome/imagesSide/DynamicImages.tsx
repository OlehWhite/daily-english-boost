import MotionMark from '@/components/UI/MotionMark';
import { dynamicImages } from '@/constants/dynamic-images';
import FemaleIMG from '@/public/images/female-person.png';
import MaleIMG from '@/public/images/male-person.png';
import Image from 'next/image';

const DynamicImages = () => {
  return (
    <div className="relative flex">
      <div className="relative right-[-70px] top-[200px] border-2 rounded-[20px] w-[350px] h-[500px] border-blue-400">
        <span>
          <Image
            src={MaleIMG}
            width={250}
            alt="Male persone"
            placeholder="blur"
            className="absolute bottom-0 left-[13%]"
          />
        </span>

        {dynamicImages.map((element) => (
          <MotionMark key={element.id} element={element} />
        ))}
      </div>

      <div className="relative right-[-40px]  border-2 rounded-[20px] w-[350px] h-[500px] border-gray-600 ">
        <Image
          src={FemaleIMG}
          width={210}
          alt="Female persone"
          placeholder="blur"
          className="absolute bottom-0 left-[13%]"
        />

        {dynamicImages.map((element) => (
          <MotionMark key={element.id} element={element} />
        ))}
      </div>
    </div>
  );
};

export default DynamicImages;
