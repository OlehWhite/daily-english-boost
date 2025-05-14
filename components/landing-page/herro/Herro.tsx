import DailyTasks from '@/components/landing-page/herro/DailyTasks';
import Introduction from '@/components/landing-page/herro/Introduction';

const Herro = () => {
  return (
    <section
      className="
        flex flex-col gap-5 items-center justify-between m-[0_auto] px-[20px] w-full max-w-[1000px]
        md:flex-row
        lg:px-[40px] lg:items-start
      "
    >
      <Introduction />
      <DailyTasks />
    </section>
  );
};

export default Herro;
