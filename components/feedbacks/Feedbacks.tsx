import Feedback from '@/components/feedbacks/Feedback';
import { feedbacks } from '@/constants/feedbacks';

const Feedbacks = () => {
  return (
    <div className="mt-[50px]" id="feedbacks">
      <h2 className="text-center text-6xl font-bold">See What Our Customers Are Saying</h2>
      <p className="text-center mt-4 text-xl">
        Here`s what some of our customers say about our platform
      </p>

      <div className="flex flex-wrap justify-center m-[0_auto] 0 gap-8 mt-8 w-full max-w-[1000px]">
        {feedbacks.map((feedback) => (
          <Feedback key={feedback.id} feedback={feedback} />
        ))}
      </div>
    </div>
  );
};

export default Feedbacks;
