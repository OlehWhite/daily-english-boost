import ExclamationIMG from '@/public/images/exclamation-mark.png';
import FemaleIMG from '@/public/images/female-person.png';
import MaleIMG from '@/public/images/male-person.png';
import QuestionIMG from '@/public/images/question-mark.png';
import Image from 'next/image';

const DynamicImages = () => {
  return (
    <div className="flex">
      <div className="relative right-[-70px] top-[200px] border-2 rounded-[20px] w-[350px] h-[500px] border-blue-400">
        <Image
          src={MaleIMG}
          width={250}
          alt="Male persone"
          placeholder="blur"
          className="absolute bottom-0 left-[12%]"
        />

        <span>
          <Image src={ExclamationIMG} width={100} alt="Exclamation mark" />
        </span>
        <span>
          <Image src={ExclamationIMG} width={100} alt="Exclamation mark" />
        </span>
        <span>
          <Image src={QuestionIMG} width={100} alt="Question mark" />
        </span>
        <span>
          <Image src={QuestionIMG} width={100} alt="Question mark" />
        </span>
      </div>

      <div className="relative right-[-40px]  border-2 rounded-[20px] w-[350px] h-[500px] border-gray-600 ">
        <Image
          src={FemaleIMG}
          width={210}
          alt="Female persone"
          placeholder="blur"
          className="absolute bottom-0 left-[12%]"
        />

        <span>
          <Image src={ExclamationIMG} width={100} alt="Exclamation mark" />
        </span>
        <span>
          <Image src={ExclamationIMG} width={100} alt="Exclamation mark" />
        </span>
        <span>
          <Image src={QuestionIMG} width={100} alt="Question mark" />
        </span>
        <span>
          <Image src={QuestionIMG} width={100} alt="Question mark" />
        </span>
      </div>
    </div>
  );
};

export default DynamicImages;
