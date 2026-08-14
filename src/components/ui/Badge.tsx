import React from 'react';
import type { Difficulty, SubjectCategory } from '../../types';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'outline';
  size?: 'sm' | 'md';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'secondary',
  size = 'sm',
  className = '',
}) => {
  const baseClasses = 'inline-flex items-center font-semibold rounded';

  const sizeClasses = {
    sm: 'px-1.5 py-0.5 text-[10px] sm:text-[11px]',
    md: 'px-2 py-0.5 text-xs',
  };

  const variantClasses = {
    primary:
      'bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-200 border border-slate-300 dark:border-slate-700',
    secondary:
      'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300 border border-slate-200 dark:border-slate-700',
    success:
      'bg-emerald-50 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/60',
    danger:
      'bg-rose-50 text-rose-800 dark:bg-rose-950/60 dark:text-rose-300 border border-rose-200 dark:border-rose-800/60',
    warning:
      'bg-amber-50 text-amber-900 dark:bg-amber-950/60 dark:text-amber-300 border border-amber-200 dark:border-amber-800/60',
    info:
      'bg-sky-50 text-sky-800 dark:bg-sky-950/60 dark:text-sky-300 border border-sky-200 dark:border-sky-800/60',
    outline:
      'bg-transparent text-slate-600 dark:text-slate-400 border border-slate-300 dark:border-slate-700',
  };

  return (
    <span className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}>
      {children}
    </span>
  );
};

export const CategoryBadge: React.FC<{ category: SubjectCategory; size?: 'sm' | 'md' }> = ({
  category,
  size = 'sm',
}) => {
  if (category === 'gen_ed') {
    return (
      <Badge variant="info" size={size}>
        General Education
      </Badge>
    );
  }
  return (
    <Badge variant="warning" size={size}>
      Professional Education
    </Badge>
  );
};

export const DifficultyBadge: React.FC<{ difficulty: Difficulty; size?: 'sm' | 'md' }> = ({
  difficulty,
  size = 'sm',
}) => {
  switch (difficulty) {
    case 'easy':
      return <Badge variant="success" size={size}>Easy</Badge>;
    case 'medium':
      return <Badge variant="warning" size={size}>Medium</Badge>;
    case 'hard':
      return <Badge variant="danger" size={size}>Hard</Badge>;
  }
};
