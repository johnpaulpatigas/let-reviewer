import React from 'react';

interface ProgressBarProps {
  value: number; // Current count or percentage
  max?: number; // Total count (default 100)
  label?: string;
  showPercentage?: boolean;
  colorVariant?: 'indigo' | 'emerald' | 'amber' | 'rose';
  className?: string;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  value,
  max = 100,
  label,
  showPercentage = false,
  colorVariant = 'indigo',
  className = '',
}) => {
  const percentage = Math.min(Math.max(Math.round((value / max) * 100), 0), 100);

  const colors = {
    indigo: 'bg-indigo-600 dark:bg-indigo-500',
    emerald: 'bg-emerald-500',
    amber: 'bg-amber-500',
    rose: 'bg-rose-500',
  };

  return (
    <div className={`w-full ${className}`}>
      {(label || showPercentage) && (
        <div className="flex justify-between items-center text-xs font-semibold text-slate-600 dark:text-slate-400 mb-1.5">
          {label && <span>{label}</span>}
          {showPercentage && <span>{percentage}%</span>}
        </div>
      )}
      <div
        className="w-full bg-slate-200 dark:bg-slate-800 rounded-full h-2.5 overflow-hidden"
        role="progressbar"
        aria-valuenow={value}
        aria-valuemin={0}
        aria-valuemax={max}
      >
        <div
          className={`h-full transition-all duration-300 ease-out rounded-full ${colors[colorVariant]}`}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};
