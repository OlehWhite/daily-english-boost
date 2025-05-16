import { ReactNode } from 'react';

interface Props {
  value: number;
  max: number;
  children: ReactNode;
  color?: string;
}

const ProgressBar = ({ value, max, children, color = 'bg-blue-500' }: Props) => {
  const percentage = Math.min((value / max) * 100, 100);

  return (
    <div className="w-full">
      <div className="flex justify-between text-sm font-medium mb-1">{children}</div>

      <div className="w-full bg-gray-200 h-4 rounded-full overflow-hidden  shadow-[2px_3px_7px_-1px_rgba(0,0,0,0.25)] ">
        <div
          className={`h-full ${color} transition-all duration-500 ease-in-out`}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;
