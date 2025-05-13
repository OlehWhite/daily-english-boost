import DailyTasks from '@/components/landing-page/herro/DailyTasks';
import Introduction from '@/components/landing-page/herro/Introduction';

const Herro = () => {
  return (
    <section className="flex justify-between m-[0_auto] px-[40px] w-full max-w-[1000px]">
      <Introduction />
      <DailyTasks />
    </section>
  );
};

export default Herro;
