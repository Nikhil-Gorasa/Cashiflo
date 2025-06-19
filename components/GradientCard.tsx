'use client';

import { useState } from 'react';
import { Check } from 'lucide-react';

interface GradientCardProps {
  title: string;
}

const GradientCard = ({ title }: GradientCardProps) => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div 
      className="group relative bg-white dark:bg-[#0A1128] hover:bg-gray-50 dark:hover:bg-[#0A1128]/80 rounded-xl p-6 transition-all duration-300 cursor-pointer border border-gray-200 dark:border-blue-900/20"
      onClick={() => setIsChecked(!isChecked)}
    >
      <div className="flex items-center gap-4">
        <div className="relative w-5 h-5">
          <input
            type="checkbox"
            checked={isChecked}
            onChange={(e) => setIsChecked(e.target.checked)}
            className="peer absolute inset-0 opacity-0 cursor-pointer"
          />
          <div className="absolute inset-0 border-2 border-gray-300 dark:border-gray-600 peer-checked:border-blue-600 dark:peer-checked:border-blue-500 rounded transition-colors duration-200" />
          <div className="absolute inset-0 scale-0 peer-checked:scale-100 flex items-center justify-center bg-blue-600 dark:bg-blue-500 rounded transition-all duration-200">
            <Check className="w-3 h-3 text-white" />
          </div>
        </div>
        <h3 className="text-lg font-medium text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
          {title}
        </h3>
      </div>
    </div>
  );
};

export default GradientCard; 