import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function SectionHeader({
  kicker,
  title,
  subtitle,
  actionText,
  onAction,
  dark = false,
  className = ''
}) {
  return (
    <div className={`flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 pb-4 border-b ${dark ? 'border-zinc-800' : 'border-zinc-200'} ${className}`}>
      <div className="max-w-2xl">
        {kicker && (
          <div className="flex items-center gap-2 mb-2">
            <span className={`inline-block w-2 h-2 rounded-full ${dark ? 'bg-zinc-400' : 'bg-zinc-950'}`}></span>
            <span className={`text-xs font-semibold uppercase tracking-widest ${dark ? 'text-zinc-400' : 'text-zinc-600'}`}>
              {kicker}
            </span>
          </div>
        )}
        <h2 className={`text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight font-display ${dark ? 'text-white' : 'text-zinc-950'}`}>
          {title}
        </h2>
        {subtitle && (
          <p className={`mt-2 text-sm sm:text-base leading-relaxed ${dark ? 'text-zinc-400' : 'text-zinc-600'}`}>
            {subtitle}
          </p>
        )}
      </div>

      {actionText && (
        <button
          onClick={onAction}
          className={`inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold tracking-wide transition-colors group pb-0.5 cursor-pointer self-start md:self-end ${
            dark 
              ? 'text-zinc-300 hover:text-white border-b border-zinc-700 hover:border-white' 
              : 'text-zinc-900 hover:text-zinc-600 border-b border-zinc-300 hover:border-zinc-950'
          }`}
        >
          <span>{actionText}</span>
          <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </button>
      )}
    </div>
  );
}
