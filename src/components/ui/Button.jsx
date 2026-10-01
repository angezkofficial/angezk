import React from 'react';

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  icon: Icon,
  iconPosition = 'left',
  disabled = false,
  onClick,
  type = 'button',
  ...props
}) {
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed select-none focus:outline-hidden focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-2';

  const sizeStyles = {
    sm: 'text-xs px-3 py-1.5 rounded-sm gap-1.5',
    md: 'text-sm px-4 py-2.5 rounded-sm gap-2',
    lg: 'text-base px-6 py-3.5 rounded-sm gap-2.5',
    icon: 'p-2.5 rounded-sm'
  };

  const variantStyles = {
    primary: 'bg-zinc-950 text-white hover:bg-zinc-800 active:bg-black shadow-xs',
    secondary: 'bg-zinc-100 text-zinc-900 hover:bg-zinc-200 active:bg-zinc-300 border border-zinc-200',
    outline: 'bg-transparent text-zinc-900 border border-zinc-300 hover:border-zinc-950 hover:bg-zinc-50 active:bg-zinc-100',
    ghost: 'bg-transparent text-zinc-700 hover:text-zinc-950 hover:bg-zinc-100 active:bg-zinc-200',
    white: 'bg-white text-zinc-950 hover:bg-zinc-100 active:bg-zinc-200 shadow-xs border border-zinc-200',
    darkOutline: 'bg-transparent text-zinc-100 border border-zinc-700 hover:border-zinc-300 hover:bg-zinc-900 active:bg-zinc-800 focus-visible:ring-white',
    darkPrimary: 'bg-white text-zinc-950 hover:bg-zinc-200 active:bg-zinc-300 shadow-sm'
  };

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {Icon && iconPosition === 'left' && <Icon className="w-4 h-4 shrink-0" />}
      {children}
      {Icon && iconPosition === 'right' && <Icon className="w-4 h-4 shrink-0" />}
    </button>
  );
}
