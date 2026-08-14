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
    'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-150 active:scale-[0.985] will-change-transform disabled:opacity-50 disabled:pointer-events-none disabled:active:scale-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-1 tap-target select-none cursor-pointer';

  const sizeClasses = {
    sm: 'h-9 px-3 text-xs gap-1.5',
    md: 'h-10 px-4 text-xs sm:text-sm gap-2',
    lg: 'h-11 px-5 text-sm sm:text-base gap-2',
  };

  const variantClasses = {
    primary:
      'bg-indigo-600 hover:bg-indigo-700 text-white active:bg-indigo-800 shadow-xs hover:shadow-sm',
    secondary:
      'bg-slate-100 hover:bg-slate-200 text-slate-900 active:bg-slate-300 dark:bg-slate-800 dark:hover:bg-slate-700 dark:text-white',
    outline:
      'bg-transparent border border-slate-300 hover:border-slate-400 text-slate-700 hover:bg-slate-50 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800',
    ghost:
      'bg-transparent hover:bg-slate-100 text-slate-700 active:bg-slate-200 dark:hover:bg-slate-800 dark:text-slate-300',
    danger:
      'bg-rose-600 hover:bg-rose-700 text-white active:bg-rose-800 shadow-xs',
    success:
      'bg-emerald-600 hover:bg-emerald-700 text-white active:bg-emerald-800 shadow-xs',
  };

  return (
    <button
      className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${
        fullWidth ? 'w-full' : ''
      } ${className}`}
      disabled={disabled}
      {...props}
    >
      {leftIcon && <span className="inline-flex shrink-0 transition-transform">{leftIcon}</span>}
      <span>{children}</span>
      {rightIcon && <span className="inline-flex shrink-0 transition-transform">{rightIcon}</span>}
    </button>
  );
};
