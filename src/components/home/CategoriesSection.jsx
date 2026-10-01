import React from 'react';
import { 
  BookOpen, 
  Gamepad2, 
  Palette, 
  Film, 
  Layers, 
  Terminal, 
  Wrench, 
  ArrowRight 
} from 'lucide-react';
import { CATEGORIES } from '../../data/categories';
import SectionHeader from '../ui/SectionHeader';
import Card from '../ui/Card';
import Badge from '../ui/Badge';

// Map icon strings to components
const iconMap = {
  BookOpen,
  Gamepad2,
  Palette,
  Film,
  Layers,
  Terminal,
  Wrench
};

export default function CategoriesSection({ onSelectCategory }) {
  return (
    <section className="py-16 sm:py-20 bg-zinc-50/50 border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <SectionHeader
          kicker="Disciplines & Domains"
          title="The Angezk Spectrum"
          subtitle="Explore our curated archives spanning narrative comics, interactive games, motion design, and engineering craft."
          actionText="Browse All"
          onAction={() => onSelectCategory('all')}
        />

        {/* Categories Grid: 1 col on mobile, 2 col on tablet, 3-4 col on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {CATEGORIES.map((category) => {
            const Icon = iconMap[category.icon] || Layers;
            return (
              <Card
                key={category.id}
                onClick={() => onSelectCategory(category.id)}
                className="p-6 bg-white flex flex-col justify-between group hover:border-zinc-950 transition-all duration-200"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-sm bg-zinc-100 group-hover:bg-zinc-950 group-hover:text-white text-zinc-900 flex items-center justify-center transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-mono text-zinc-400">
                      {category.itemCount} items
                    </span>
                  </div>

                  <h3 className="text-lg font-bold font-display text-zinc-950 group-hover:underline">
                    {category.name}
                  </h3>
                  
                  <p className="text-xs text-zinc-500 mt-2 line-clamp-2 leading-relaxed">
                    {category.tagline}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-zinc-100 flex items-center justify-between text-xs">
                  <Badge variant="outline" size="sm">
                    {category.featuredTag}
                  </Badge>
                  <span className="font-mono text-zinc-400 group-hover:text-zinc-950 transition-colors flex items-center gap-1">
                    <span>View</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </div>
              </Card>
            );
          })}
        </div>

      </div>
    </section>
  );
}
