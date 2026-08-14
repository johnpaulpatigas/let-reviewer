import React from 'react';

interface ProgressBarProps {
  value: number; // Current count or percentage
  max?: number; // Total count (default 100)
  label?: string;
  showPercentage?: boolean;
  colorVariant?: 'primary' | 'emerald' | 'amber' | 'rose' | 'sky';
  className?: string;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  value,
  max = 100,
  label,
  showPercentage = false,
  colorVariant = 'primary',
  className = '',
}) => {
  const percentage = Math.min(Math.max(Math.round((value / max) * 100), 0), 100);

  const colors = {
    primary: 'bg-slate-800 dark:bg-slate-200',
    emerald: 'bg-emerald-600 dark:bg-emerald-500',
    amber: 'bg-amber-600 dark:bg-amber-500',
    rose: 'bg-rose-600 dark:bg-rose-500',
    sky: 'bg-sky-600 dark:bg-sky-500',
  };

  return (
    <div className={`w-full ${className}`}>
      {(label || showPercentage) && (
        <div className="flex justify-between items-center text-xs text-slate-600 dark:text-slate-400 mb-1">
          {label && <span className="font-medium">{label}</span>}
          {showPercentage && <span className="font-mono font-semibold">{percentage}%</span>}
        </div>
      )}
      <div
        className="w-full bg-slate-200 dark:bg-slate-800 rounded-full h-2 overflow-hidden"
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
