import React, { useState } from 'react';
import { Plus, Eye, Heart, ArrowUpRight, Wrench, Layers, ExternalLink, Sparkles } from 'lucide-react';
import { PROJECTS } from '../data/projects';
import Card from '../components/ui/Card';
import Badge from '../components/ui/Badge';
import Button from '../components/ui/Button';

export default function ProjectsPage({ onSelectProject, onOpenSubmit }) {
  const [statusFilter, setStatusFilter] = useState('all');

  const statuses = [
    { id: 'all', label: 'All Statuses' },
    { id: 'Live Demo', label: 'Live Demos' },
    { id: 'In Progress', label: 'In Progress' },
    { id: 'Open Source', label: 'Open Source' },
    { id: 'Completed', label: 'Completed' }
  ];

  const filteredProjects = statusFilter === 'all'
    ? PROJECTS
    : PROJECTS.filter(p => p.status.toLowerCase().includes(statusFilter.toLowerCase()));

  return (
    <div className="min-h-screen bg-white pb-24">
      {/* Editorial Header */}
      <section className="bg-white border-b border-zinc-200 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div className="max-w-2xl space-y-3">
              <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-zinc-100 border border-zinc-200 text-[11px] font-mono uppercase tracking-widest text-zinc-900 rounded-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-zinc-950"></span>
                Projects Directory
              </div>
              <h1 className="text-3xl sm:text-5xl font-bold font-display tracking-tight text-zinc-950">
                Crafted by Creators. Built with Purpose.
              </h1>
              <p className="text-sm sm:text-base text-zinc-600 leading-relaxed">
                A permanent index of indie game projects, manga pilots, WebGL engines, variable typefaces, and experimental software tools.
              </p>
            </div>

            <Button
              variant="primary"
              size="lg"
              onClick={onOpenSubmit}
              icon={Plus}
              className="shrink-0 self-start lg:self-end"
            >
              Submit Your Project
            </Button>
          </div>

          {/* Status Filter Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pt-10 border-t border-zinc-200 mt-10 no-scrollbar">
            {statuses.map((status) => (
              <button
                key={status.id}
                onClick={() => setStatusFilter(status.id)}
                className={`px-3 py-1.5 text-xs font-semibold uppercase tracking-wider rounded-sm transition-colors cursor-pointer shrink-0 ${
                  statusFilter === status.id
                    ? 'bg-zinc-950 text-white font-bold'
                    : 'bg-zinc-100 text-zinc-600 hover:bg-zinc-200 hover:text-zinc-950'
                }`}
              >
                {status.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects List View */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        <div className="space-y-6">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              onClick={() => onSelectProject(project)}
              className="p-6 sm:p-8 bg-white border border-zinc-200 rounded-md hover:border-zinc-950 transition-all duration-200 cursor-pointer group flex flex-col lg:flex-row lg:items-center justify-between gap-6"
            >
              {/* Left Column: Number, Title, Summary */}
              <div className="flex items-start gap-6 max-w-3xl">
                <span className="font-mono text-xl sm:text-2xl font-black text-zinc-300 group-hover:text-zinc-950 transition-colors w-8 shrink-0">
                  {String(index + 1).padStart(2, '0')}
                </span>

                <div className="space-y-2">
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge variant="inverse" size="sm">{project.categoryLabel}</Badge>
                    <Badge variant="outline" size="sm">{project.status}</Badge>
                    <span className="text-xs text-zinc-400 font-mono">
                      {project.year}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold font-display text-zinc-950 group-hover:underline">
                    {project.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                    {project.summary}
                  </p>

                  <div className="flex flex-wrap items-center gap-2 pt-1">
                    <span className="text-xs font-semibold text-zinc-900">
                      {project.author.name}
                    </span>
                    <span className="text-zinc-300">•</span>
                    <span className="text-xs text-zinc-500 font-mono">
                      {project.author.role}
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Column: Pipeline Tools & Action */}
              <div className="flex flex-col sm:flex-row lg:flex-col items-start lg:items-end justify-between gap-4 shrink-0 pl-14 lg:pl-0 border-t lg:border-t-0 pt-4 lg:pt-0 border-zinc-100">
                {/* Tools */}
                {project.toolsUsed && (
                  <div className="flex flex-wrap gap-1 lg:justify-end max-w-xs">
                    {project.toolsUsed.map((tool, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] font-mono px-2 py-0.5 bg-zinc-100 text-zinc-700 border border-zinc-200 rounded-2xs"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                )}

                <div className="flex items-center gap-6 text-xs font-mono text-zinc-400">
                  <span>{project.metrics?.views} views</span>
                  <span>{project.metrics?.appreciations} likes</span>
                  <div className="w-8 h-8 rounded-sm bg-zinc-100 group-hover:bg-zinc-950 group-hover:text-white flex items-center justify-center transition-colors">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Submission Banner: Black Section */}
        <div className="mt-16 p-8 sm:p-10 bg-zinc-950 text-white rounded-lg border border-zinc-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <h3 className="text-2xl font-bold font-display text-white">
              Are you working on an indie project?
            </h3>
            <p className="text-xs sm:text-sm text-zinc-400">
              Whether it is a solo game demo, an ink-drawn manga series, or an open-source animation plugin, we want to help you reach a dedicated audience.
            </p>
          </div>

          <Button
            variant="darkPrimary"
            size="lg"
            onClick={onOpenSubmit}
            icon={Plus}
            className="shrink-0"
          >
            Submit for Review
          </Button>
        </div>
      </section>
    </div>
  );
}
