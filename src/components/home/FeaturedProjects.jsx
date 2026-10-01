import React from 'react';
import { Eye, Heart, ArrowUpRight, Wrench, Sparkles } from 'lucide-react';
import { PROJECTS } from '../../data/projects';
import SectionHeader from '../ui/SectionHeader';
import Card from '../ui/Card';
import Badge from '../ui/Badge';
import Button from '../ui/Button';

export default function FeaturedProjects({ onSelectProject, onViewAll }) {
  const featured = PROJECTS.filter((p) => p.featured);

  return (
    <section className="py-16 sm:py-24 bg-white border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <SectionHeader
          kicker="Curated Works"
          title="Featured Projects"
          subtitle="Hand-picked projects exemplifying mastery in gaming mechanics, sequential art, brutalist design, and creative code."
          actionText="View All Projects"
          onAction={onViewAll}
        />

        {/* Featured Projects Grid: 2 columns on desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {featured.map((project) => (
            <Card
              key={project.id}
              onClick={() => onSelectProject(project)}
              className="p-6 sm:p-8 bg-white border border-zinc-200 flex flex-col justify-between group hover:border-zinc-950 transition-all duration-200"
            >
              <div>
                {/* Top metadata row */}
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className="flex items-center gap-2">
                    <Badge variant="inverse">{project.categoryLabel}</Badge>
                    <Badge variant="outline">{project.status}</Badge>
                  </div>
                  <span className="text-xs font-mono text-zinc-400">
                    {project.year}
                  </span>
                </div>

                {/* Project Title */}
                <h3 className="text-xl sm:text-2xl font-bold font-display text-zinc-950 group-hover:underline">
                  {project.title}
                </h3>

                {/* Author Info */}
                <div className="flex items-center gap-2 mt-2 mb-4 text-xs text-zinc-600">
                  <span className="font-semibold text-zinc-900">{project.author.name}</span>
                  <span className="text-zinc-400">•</span>
                  <span className="text-zinc-500 font-mono">{project.author.role}</span>
                </div>

                {/* Project Summary */}
                <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed line-clamp-3">
                  {project.summary}
                </p>

                {/* Tools Used Pills */}
                {project.toolsUsed && (
                  <div className="flex flex-wrap gap-1.5 mt-5">
                    {project.toolsUsed.map((tool, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] font-mono px-2 py-0.5 bg-zinc-100 border border-zinc-200 text-zinc-700 rounded-2xs"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Bottom Card Footer */}
              <div className="mt-8 pt-4 border-t border-zinc-100 flex items-center justify-between text-xs">
                <div className="flex items-center gap-4 text-zinc-400 font-mono">
                  <span className="flex items-center gap-1">
                    <Eye className="w-3.5 h-3.5" />
                    {project.metrics?.views}
                  </span>
                  <span className="flex items-center gap-1">
                    <Heart className="w-3.5 h-3.5" />
                    {project.metrics?.appreciations}
                  </span>
                </div>

                <span className="font-semibold text-zinc-900 group-hover:text-black flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                  <span>Inspect Details</span>
                  <ArrowUpRight className="w-4 h-4" />
                </span>
              </div>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
}
