import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger' | 'success';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  leftIcon,
  rightIcon,
  className = '',
  disabled,
  ...props
}) => {
  const baseClasses =
    'inline-flex items-center justify-center font-medium rounded-md transition-all duration-150 ease-out active:scale-[0.98] will-change-transform disabled:opacity-50 disabled:pointer-events-none disabled:active:scale-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 dark:focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-slate-50 dark:focus-visible:ring-offset-neutral-950 tap-target select-none cursor-pointer shadow-2xs hover:shadow-xs';

  const sizeClasses = {
    sm: 'h-8 px-3 text-xs gap-1.5',
    md: 'h-9 px-3.5 text-xs sm:text-sm gap-2',
    lg: 'h-11 px-4 text-sm sm:text-base gap-2.5',
  };

  const variantClasses = {
    primary:
      'bg-slate-900 hover:bg-slate-800 text-white active:bg-slate-950 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-100 dark:active:bg-neutral-200 font-semibold border border-transparent dark:border-white/10',
    secondary:
      'bg-slate-100 hover:bg-slate-200 text-slate-900 active:bg-slate-300 dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:text-neutral-100 font-medium border border-slate-200 dark:border-neutral-700',
    outline:
      'bg-white dark:bg-neutral-900 border border-slate-300 hover:border-slate-400 text-slate-900 hover:bg-slate-50 dark:border-neutral-700 dark:text-neutral-100 dark:hover:bg-neutral-800/80 font-medium',
    ghost:
      'bg-transparent hover:bg-slate-100 text-slate-800 active:bg-slate-200 dark:hover:bg-neutral-800 dark:text-neutral-200 font-medium',
    danger:
      'bg-rose-700 hover:bg-rose-800 text-white active:bg-rose-900 font-semibold border border-rose-700',
    success:
      'bg-emerald-700 hover:bg-emerald-800 text-white active:bg-emerald-900 font-semibold border border-emerald-700',
  };

  return (
    <button
      className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${
        fullWidth ? 'w-full' : ''
      } ${className}`}
      disabled={disabled}
      {...props}
    >
      {leftIcon && <span className="inline-flex shrink-0 items-center justify-center">{leftIcon}</span>}
      <span>{children}</span>
      {rightIcon && <span className="inline-flex shrink-0 items-center justify-center">{rightIcon}</span>}
    </button>
  );
};
