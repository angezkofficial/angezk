import React from 'react';
import { ArrowRight, Flame, Clock, Eye, TrendingUp } from 'lucide-react';
import { TRENDING_CONTENT } from '../../data/content';
import SectionHeader from '../ui/SectionHeader';
import Badge from '../ui/Badge';

export default function TrendingSection({ onSelectContent }) {
  return (
    <section className="py-16 sm:py-20 bg-zinc-50/70 border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <SectionHeader
          kicker="Platform Velocity"
          title="Trending Content"
          subtitle="The most read articles, technical breakdowns, and production analyses across the community this week."
        />

        {/* Trending Stack */}
        <div className="divide-y divide-zinc-200 border-y border-zinc-200 bg-white">
          {TRENDING_CONTENT.map((item) => (
            <div
              key={item.id}
              onClick={() => onSelectContent(item)}
              className="p-4 sm:p-6 hover:bg-zinc-50 transition-colors cursor-pointer group flex flex-col md:flex-row md:items-center justify-between gap-4"
            >
              <div className="flex items-start gap-4 sm:gap-6">
                {/* Monospace Rank Number */}
                <span className="font-mono text-2xl sm:text-3xl font-black text-zinc-300 group-hover:text-zinc-950 transition-colors w-10 shrink-0">
                  {item.rank}
                </span>

                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" size="sm">
                      {item.category}
                    </Badge>
                    <span className="text-xs text-zinc-400 font-mono">
                      By {item.author}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold font-display text-zinc-950 group-hover:underline">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-zinc-500 line-clamp-1 max-w-2xl">
                    {item.snippet}
                  </p>
                </div>
              </div>

              {/* Right Stats & Action */}
              <div className="flex items-center justify-between md:justify-end gap-6 text-xs text-zinc-400 font-mono shrink-0 pl-14 md:pl-0">
                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {item.readTime}
                  </span>
                  <span className="flex items-center gap-1">
                    <Eye className="w-3.5 h-3.5" />
                    {item.views}
                  </span>
                </div>

                <div className="w-7 h-7 rounded-sm bg-zinc-100 group-hover:bg-zinc-950 group-hover:text-white flex items-center justify-center transition-colors">
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
