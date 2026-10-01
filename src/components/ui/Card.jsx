import React from 'react';

export default function Card({
  children,
  className = '',
  hoverEffect = true,
  variant = 'default',
  onClick,
  ...props
}) {
  const baseStyles = 'rounded-md transition-all duration-200 border';

  const variantStyles = {
    default: 'bg-white border-zinc-200 text-zinc-950',
    subtle: 'bg-zinc-50/70 border-zinc-200/90 text-zinc-950',
    dark: 'bg-zinc-950 border-zinc-800 text-zinc-100',
    glass: 'bg-white/80 backdrop-blur-xs border-zinc-200 text-zinc-950'
  };

  const hoverStyles = hoverEffect 
    ? 'hover:border-zinc-400 hover:shadow-xs hover:-translate-y-0.5' 
    : '';

  const clickableStyles = onClick ? 'cursor-pointer' : '';

  return (
    <div
      onClick={onClick}
      className={`${baseStyles} ${variantStyles[variant]} ${hoverStyles} ${clickableStyles} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
