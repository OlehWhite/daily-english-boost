import Background from '@/public/images/welcome-bcg.jpg';
import Image from 'next/image';

const Page = () => {
  return (
    <div>
      <Image src={Background} alt="Background logo" placeholder="blur" priority />
    </div>
  );
};

export default Page;
