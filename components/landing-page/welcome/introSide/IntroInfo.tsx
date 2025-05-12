import IntroDescription from '@/components/landing-page/welcome/introSide/IntroDescription';
import IntroTitle from '@/components/landing-page/welcome/introSide/IntroTitle';

const IntroInfo = () => {
  return (
    <div>
      <div className="flex flex-col px-10 pt-5 pb-7 gap-6 w-full rounded-[20px] gen-info-grad">
        <IntroTitle />
        <IntroDescription />
      </div>
    </div>
  );
};

export default IntroInfo;
