import React from 'react';

interface CustomProgressBarProps {
  value: number; // поточне значення
  max: number; // максимальне значення
  color?: string; // Tailwind клас кольору (наприклад, 'bg-blue-500')
}

const ProgressBar: React.FC<CustomProgressBarProps> = ({ value, max, color = 'bg-blue-500' }) => {
  const percentage = Math.min((value / max) * 100, 100);

  return (
    <div className="w-full">
      <div className="flex justify-between text-sm font-medium mb-1">
        <span className="text-[16px] font-bold text-gray-500">
          XP: {value}/{max}
        </span>
      </div>

      <div className="w-full bg-gray-200 h-4 rounded-full overflow-hidden shadow-inner">
        <div
          className={`h-full ${color} transition-all duration-500 ease-in-out`}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;
