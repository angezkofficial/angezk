import React, { useState, useEffect, useRef } from 'react';
import { Search, X, ArrowRight, Tag, BookOpen, Gamepad2, Palette, Film, Terminal, Wrench } from 'lucide-react';
import { CATEGORIES } from '../../data/categories';
import { PROJECTS } from '../../data/projects';
import { TRENDING_CONTENT, LATEST_CREATIONS } from '../../data/content';
import Badge from '../ui/Badge';

export default function SearchModal({ 
  isOpen, 
  onClose, 
  onSelectProject,
  onNavigateCategory 
}) {
  const [query, setQuery] = useState('');
  const [activeCategoryFilter, setActiveCategoryFilter] = useState('all');
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 50);
    } else {
      setQuery('');
      setActiveCategoryFilter('all');
    }
  }, [isOpen]);

  if (!isOpen) return null;

  // Filter projects
  const filteredProjects = PROJECTS.filter((proj) => {
    const matchesCategory = activeCategoryFilter === 'all' || proj.category === activeCategoryFilter;
    const matchesQuery = query === '' || 
      proj.title.toLowerCase().includes(query.toLowerCase()) ||
      proj.summary.toLowerCase().includes(query.toLowerCase()) ||
      proj.tags.some(t => t.toLowerCase().includes(query.toLowerCase()));
    return matchesCategory && matchesQuery;
  });

  // Filter trending and creations
  const filteredContent = [...TRENDING_CONTENT, ...LATEST_CREATIONS].filter((item) => {
    const matchesCategory = activeCategoryFilter === 'all' || item.categorySlug === activeCategoryFilter;
    const matchesQuery = query === '' || 
      item.title.toLowerCase().includes(query.toLowerCase()) ||
      item.category.toLowerCase().includes(query.toLowerCase());
    return matchesCategory && matchesQuery;
  }).slice(0, 4);

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      {/* Search Container */}
      <div className="relative w-full max-w-2xl bg-white rounded-lg border border-zinc-300 shadow-2xl overflow-hidden z-10 animate-in fade-in zoom-in-95 duration-150">
        
        {/* Search Input Bar */}
        <div className="flex items-center px-4 sm:px-6 py-4 border-b border-zinc-200">
          <Search className="w-5 h-5 text-zinc-400 shrink-0 mr-3" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search projects, manga, gaming, digital art, shaders, tools..."
            className="w-full text-base sm:text-lg text-zinc-950 placeholder-zinc-400 bg-transparent focus:outline-hidden"
          />
          {query && (
            <button 
              onClick={() => setQuery('')}
              className="p-1 text-zinc-400 hover:text-zinc-600 mr-2"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <kbd className="hidden sm:inline-block px-2 py-0.5 text-xs font-mono bg-zinc-100 text-zinc-500 border border-zinc-200 rounded-sm">
            ESC
          </kbd>
        </div>

        {/* Category Pill Filters */}
        <div className="px-4 sm:px-6 py-2.5 bg-zinc-50 border-b border-zinc-200 flex items-center gap-1.5 overflow-x-auto text-xs no-scrollbar">
          <button
            onClick={() => setActiveCategoryFilter('all')}
            className={`px-2.5 py-1 rounded-sm uppercase tracking-wider font-semibold shrink-0 transition-colors cursor-pointer ${
              activeCategoryFilter === 'all'
                ? 'bg-zinc-950 text-white'
                : 'text-zinc-600 hover:bg-zinc-200/70'
            }`}
          >
            All
          </button>
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategoryFilter(cat.id)}
              className={`px-2.5 py-1 rounded-sm uppercase tracking-wider font-semibold shrink-0 transition-colors cursor-pointer ${
                activeCategoryFilter === cat.id
                  ? 'bg-zinc-950 text-white'
                  : 'text-zinc-600 hover:bg-zinc-200/70'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Results List */}
        <div className="max-h-[60vh] overflow-y-auto p-4 sm:p-6 space-y-6">
          {/* Projects Results */}
          <div>
            <div className="flex items-center justify-between text-xs font-mono uppercase tracking-wider text-zinc-400 mb-3">
              <span>Featured & Active Projects ({filteredProjects.length})</span>
            </div>

            {filteredProjects.length === 0 ? (
              <p className="text-sm text-zinc-500 py-4 text-center">
                No projects matched your criteria.
              </p>
            ) : (
              <div className="space-y-2">
                {filteredProjects.slice(0, 5).map((project) => (
                  <div
                    key={project.id}
                    onClick={() => {
                      onSelectProject(project);
                      onClose();
                    }}
                    className="p-3 rounded-md hover:bg-zinc-100/80 border border-transparent hover:border-zinc-200 transition-all cursor-pointer flex items-start justify-between gap-4 group"
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-sm text-zinc-950 group-hover:underline">
                          {project.title}
                        </span>
                        <Badge variant="outline" size="sm">
                          {project.categoryLabel}
                        </Badge>
                      </div>
                      <p className="text-xs text-zinc-500 line-clamp-1 mt-1">
                        {project.summary}
                      </p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-zinc-400 group-hover:text-zinc-950 group-hover:translate-x-1 transition-transform shrink-0 mt-1" />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Editorial & Trending Content */}
          {filteredContent.length > 0 && (
            <div className="pt-3 border-t border-zinc-100">
              <div className="flex items-center justify-between text-xs font-mono uppercase tracking-wider text-zinc-400 mb-3">
                <span>Articles, Breakdowns & Tools ({filteredContent.length})</span>
              </div>
              <div className="space-y-2">
                {filteredContent.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => {
                      onNavigateCategory(item.categorySlug);
                      onClose();
                    }}
                    className="p-3 rounded-md hover:bg-zinc-50 border border-transparent hover:border-zinc-200 transition-all cursor-pointer flex items-center justify-between gap-3 group"
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-semibold text-zinc-900 group-hover:underline">
                          {item.title}
                        </span>
                        <span className="text-[10px] uppercase font-mono px-1.5 py-0.5 bg-zinc-100 text-zinc-600 rounded-xs">
                          {item.category}
                        </span>
                      </div>
                      <p className="text-xs text-zinc-400 mt-0.5">
                        By {item.author}
                      </p>
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 text-zinc-400 group-hover:text-zinc-950 transition-colors shrink-0" />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer shortcuts */}
        <div className="p-3 bg-zinc-50 border-t border-zinc-200 text-center text-xs text-zinc-500">
          Showing curated projects and publications across the Angezk platform
        </div>
      </div>
    </div>
  );
}
