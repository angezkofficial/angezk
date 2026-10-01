import React, { useState, useMemo } from 'react';
import { Search, Filter, SlidersHorizontal, ArrowUpDown, Eye, Heart, ArrowUpRight, Sparkles, BookOpen, Layers } from 'lucide-react';
import { CATEGORIES } from '../data/categories';
import { PROJECTS } from '../data/projects';
import { TRENDING_CONTENT, LATEST_CREATIONS } from '../data/content';
import Card from '../components/ui/Card';
import Badge from '../components/ui/Badge';
import Button from '../components/ui/Button';

export default function ExplorePage({ 
  initialCategory = 'all', 
  onSelectProject,
  onOpenSubmit 
}) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [sortBy, setSortBy] = useState('featured');

  // Filter projects and creations
  const filteredItems = useMemo(() => {
    return PROJECTS.filter((item) => {
      const matchCat = selectedCategory === 'all' || item.category === selectedCategory;
      const query = searchQuery.toLowerCase().trim();
      const matchQuery = query === '' || 
        item.title.toLowerCase().includes(query) ||
        item.summary.toLowerCase().includes(query) ||
        item.tags.some(t => t.toLowerCase().includes(query)) ||
        item.author.name.toLowerCase().includes(query);
      return matchCat && matchQuery;
    }).sort((a, b) => {
      if (sortBy === 'newest') return (b.year || '2026').localeCompare(a.year || '2026');
      if (sortBy === 'appreciated') {
        const valA = parseFloat(a.metrics?.appreciations || '0');
        const valB = parseFloat(b.metrics?.appreciations || '0');
        return valB - valA;
      }
      return 0; // Default
    });
  }, [selectedCategory, searchQuery, sortBy]);

  const activeCategoryObj = CATEGORIES.find(c => c.id === selectedCategory);

  return (
    <div className="min-h-screen bg-white pb-24">
      {/* Top Header Section */}
      <section className="bg-zinc-50 border-b border-zinc-200 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-white border border-zinc-300 text-[11px] font-mono uppercase tracking-widest text-zinc-800 rounded-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-zinc-950"></span>
              Platform Directory
            </div>
            <h1 className="text-3xl sm:text-5xl font-bold font-display tracking-tight text-zinc-950">
              Explore the Angezk Archive
            </h1>
            <p className="text-sm sm:text-base text-zinc-600 leading-relaxed">
              Discover curated works spanning manga manuscripts, indie game prototypes, sakuga breakdowns, brutalist digital art, and open creative tech.
            </p>
          </div>

          {/* Search & Sort Controls Bar */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-12 gap-3 pt-6 border-t border-zinc-200">
            {/* Search Input */}
            <div className="sm:col-span-8 relative">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by keywords, creator name, or technique (e.g. 'sumi', 'godot', 'sakuga')..."
                className="w-full pl-10 pr-4 py-2.5 text-sm bg-white border border-zinc-300 rounded-sm focus:outline-hidden focus:border-zinc-950 text-zinc-950 placeholder-zinc-400"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-zinc-400 hover:text-zinc-900"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Sort Select */}
            <div className="sm:col-span-4 flex items-center gap-2">
              <div className="relative w-full">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full px-3 py-2.5 text-sm bg-white border border-zinc-300 rounded-sm focus:outline-hidden focus:border-zinc-950 text-zinc-800"
                >
                  <option value="featured">Sort: Curated Featured</option>
                  <option value="newest">Sort: Release Year (Newest)</option>
                  <option value="appreciated">Sort: Most Appreciated</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Pills Bar */}
      <section className="border-b border-zinc-200 bg-white sticky top-16 sm:top-20 z-20 backdrop-blur-md bg-white/95">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar text-xs">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-3 py-1.5 rounded-sm font-semibold uppercase tracking-wider shrink-0 transition-colors cursor-pointer ${
                selectedCategory === 'all'
                  ? 'bg-zinc-950 text-white font-bold'
                  : 'bg-zinc-100 text-zinc-700 hover:bg-zinc-200'
              }`}
            >
              All ({PROJECTS.length})
            </button>
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1.5 rounded-sm font-semibold uppercase tracking-wider shrink-0 transition-colors cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-zinc-950 text-white font-bold'
                    : 'bg-zinc-100 text-zinc-700 hover:bg-zinc-200'
                }`}
              >
                {cat.name} ({cat.itemCount})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Active Category Description Banner if selected */}
      {activeCategoryObj && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
          <div className="p-4 bg-zinc-50 border border-zinc-200 rounded-sm flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
            <div>
              <span className="font-bold text-zinc-950 uppercase font-mono mr-2">
                ACTIVE FILTER: {activeCategoryObj.name}
              </span>
              <span className="text-zinc-600">
                {activeCategoryObj.description}
              </span>
            </div>
            <button
              onClick={() => setSelectedCategory('all')}
              className="text-zinc-950 underline font-semibold cursor-pointer shrink-0"
            >
              Reset Category
            </button>
          </div>
        </div>
      )}

      {/* Main Results Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="flex items-center justify-between text-xs font-mono uppercase tracking-wider text-zinc-500 mb-6 pb-2 border-b border-zinc-200">
          <span>Results Displayed ({filteredItems.length})</span>
          <span>CURATION LEVEL: EDITORIAL</span>
        </div>

        {filteredItems.length === 0 ? (
          <div className="py-20 text-center space-y-4 border border-dashed border-zinc-300 rounded-md">
            <Layers className="w-10 h-10 text-zinc-400 mx-auto" />
            <h3 className="text-lg font-bold font-display text-zinc-950">
              No archives matched your search
            </h3>
            <p className="text-xs text-zinc-500 max-w-sm mx-auto">
              Try adjusting your search keywords or switching back to "All" disciplines.
            </p>
            <div className="pt-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                }}
              >
                Clear All Filters
              </Button>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((project) => (
              <Card
                key={project.id}
                onClick={() => onSelectProject(project)}
                className="p-6 bg-white border border-zinc-200 flex flex-col justify-between group hover:border-zinc-950 transition-all duration-200"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <Badge variant="inverse" size="sm">
                      {project.categoryLabel}
                    </Badge>
                    <Badge variant="outline" size="sm">
                      {project.status}
                    </Badge>
                  </div>

                  <h3 className="text-lg font-bold font-display text-zinc-950 group-hover:underline">
                    {project.title}
                  </h3>

                  <div className="text-xs text-zinc-500 font-mono mt-1 mb-3">
                    By {project.author.name} • {project.year}
                  </div>

                  <p className="text-xs text-zinc-600 line-clamp-3 leading-relaxed">
                    {project.summary}
                  </p>

                  {project.tags && (
                    <div className="flex flex-wrap gap-1 mt-4">
                      {project.tags.slice(0, 3).map((tag, idx) => (
                        <span
                          key={idx}
                          className="text-[10px] font-mono text-zinc-600 bg-zinc-100 px-1.5 py-0.5 rounded-2xs"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                <div className="mt-6 pt-3 border-t border-zinc-100 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-3 text-zinc-400 font-mono">
                    <span className="flex items-center gap-1">
                      <Eye className="w-3.5 h-3.5" />
                      {project.metrics?.views}
                    </span>
                    <span className="flex items-center gap-1">
                      <Heart className="w-3.5 h-3.5" />
                      {project.metrics?.appreciations}
                    </span>
                  </div>

                  <span className="font-semibold text-zinc-900 group-hover:text-black flex items-center gap-1">
                    <span>Inspect</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </span>
                </div>
              </Card>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
