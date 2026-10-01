import React from 'react';

export default function Badge({ 
  children, 
  variant = 'default', 
  size = 'md',
  className = '' 
}) {
  const baseStyles = 'inline-flex items-center font-medium tracking-wide uppercase transition-colors';
  
  const sizeStyles = {
    sm: 'text-[10px] px-2 py-0.5 rounded-sm tracking-wider',
    md: 'text-xs px-2.5 py-1 rounded-sm tracking-wide',
    lg: 'text-xs px-3 py-1.5 rounded-sm tracking-wider'
  };

  const variantStyles = {
    default: 'bg-zinc-100 text-zinc-900 border border-zinc-200/80',
    dark: 'bg-zinc-900 text-zinc-100 border border-zinc-800',
    outline: 'bg-transparent text-zinc-800 border border-zinc-300',
    white: 'bg-white text-zinc-900 border border-zinc-200 shadow-xs',
    inverse: 'bg-zinc-950 text-white border border-zinc-950',
    accent: 'bg-zinc-200/70 text-zinc-900 font-semibold'
  };

  return (
    <span className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}>
      {children}
    </span>
  );
}
