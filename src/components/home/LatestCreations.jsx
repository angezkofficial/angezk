import React, { useState } from 'react';
import { Heart, Clock, ArrowUpRight, Plus, Sparkles } from 'lucide-react';
import { LATEST_CREATIONS } from '../../data/content';
import SectionHeader from '../ui/SectionHeader';
import Card from '../ui/Card';
import Badge from '../ui/Badge';

export default function LatestCreations({ onOpenSubmit, onSelectCreation }) {
  const [filter, setFilter] = useState('all');

  const categories = [
    { id: 'all', label: 'All Disciplines' },
    { id: 'anime-manga', label: 'Anime & Manga' },
    { id: 'tech', label: 'Tech & Shaders' },
    { id: 'digital-art', label: 'Digital Art' },
    { id: 'gaming', label: 'Gaming' },
    { id: 'animation', label: 'Animation' },
    { id: 'tools-blogs', label: 'Tools' }
  ];

  const filteredItems = filter === 'all' 
    ? LATEST_CREATIONS 
    : LATEST_CREATIONS.filter(item => item.categorySlug === filter);

  return (
    <section className="py-16 sm:py-24 bg-white border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <SectionHeader
          kicker="Community Submissions"
          title="Latest Creations"
          subtitle="Real-time releases, animation sheets, manga pilots, and interactive tools published by our network."
          actionText="Submit Work"
          onAction={onOpenSubmit}
        />

        {/* Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 text-xs font-semibold no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`px-3 py-1.5 rounded-sm transition-all duration-150 uppercase tracking-wider shrink-0 cursor-pointer ${
                filter === cat.id
                  ? 'bg-zinc-950 text-white font-bold'
                  : 'bg-zinc-100 text-zinc-600 hover:bg-zinc-200 hover:text-zinc-950'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Grid of latest creations */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {filteredItems.map((item) => (
            <Card
              key={item.id}
              onClick={() => onSelectCreation(item)}
              className="p-5 bg-white border border-zinc-200 flex flex-col justify-between group hover:border-zinc-950 transition-all duration-200"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <Badge variant="outline" size="sm">
                    {item.badge}
                  </Badge>
                  <span className="text-[11px] font-mono text-zinc-400">
                    {item.date}
                  </span>
                </div>

                <h4 className="text-base font-bold font-display text-zinc-950 group-hover:underline line-clamp-2">
                  {item.title}
                </h4>

                <p className="text-xs text-zinc-500 mt-2 line-clamp-2 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-zinc-100 flex items-center justify-between text-xs">
                <span className="text-zinc-600 font-medium">
                  {item.author}
                </span>

                <div className="flex items-center gap-1 text-zinc-400 font-mono">
                  <Heart className="w-3.5 h-3.5 group-hover:text-zinc-950 transition-colors" />
                  <span>{item.likes}</span>
                </div>
              </div>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
}
