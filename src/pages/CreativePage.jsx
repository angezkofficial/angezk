import React, { useState } from 'react';
import { Sparkles, ZoomIn, Eye, Heart, Layers, ArrowUpRight, Palette, Film, BookOpen } from 'lucide-react';
import { CREATIVE_SHOWCASE } from '../data/content';
import SectionHeader from '../components/ui/SectionHeader';
import Card from '../components/ui/Card';
import Badge from '../components/ui/Badge';
import Modal from '../components/ui/Modal';
import Button from '../components/ui/Button';

export default function CreativePage({ onOpenSubmit }) {
  const [selectedArt, setSelectedArt] = useState(null);
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', label: 'All Visual Works' },
    { id: 'manga', label: 'Manga & Inking' },
    { id: 'concept', label: 'Concept & 3D' },
    { id: 'animation', label: 'Animation' },
    { id: 'typography', label: 'Typography' }
  ];

  const filteredArt = activeFilter === 'all'
    ? CREATIVE_SHOWCASE
    : CREATIVE_SHOWCASE.filter(item => {
        if (activeFilter === 'manga') return item.discipline.toLowerCase().includes('manga');
        if (activeFilter === 'concept') return item.discipline.toLowerCase().includes('concept') || item.discipline.toLowerCase().includes('mecha');
        if (activeFilter === 'animation') return item.discipline.toLowerCase().includes('animation');
        if (activeFilter === 'typography') return item.discipline.toLowerCase().includes('typography');
        return true;
      });

  return (
    <div className="min-h-screen bg-white pb-24">
      {/* Editorial Header */}
      <section className="bg-zinc-50 border-b border-zinc-200 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-white border border-zinc-300 text-[11px] font-mono uppercase tracking-widest text-zinc-900 rounded-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-zinc-950"></span>
              Visual Craft Hub
            </div>
            <h1 className="text-3xl sm:text-5xl font-bold font-display tracking-tight text-zinc-950">
              Creative Gallery & Studies
            </h1>
            <p className="text-sm sm:text-base text-zinc-600 leading-relaxed">
              Exhibition of manga inking compositions, 2D sakuga smear sheets, non-photorealistic 3D shaders, and architectural monoliths.
            </p>
          </div>

          {/* Filter Bar */}
          <div className="flex items-center gap-2 overflow-x-auto pt-8 border-t border-zinc-200 mt-8 no-scrollbar">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-3 py-1.5 text-xs font-semibold uppercase tracking-wider rounded-sm transition-colors cursor-pointer shrink-0 ${
                  activeFilter === filter.id
                    ? 'bg-zinc-950 text-white font-bold'
                    : 'bg-white text-zinc-700 border border-zinc-200 hover:bg-zinc-100'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredArt.map((art) => (
            <Card
              key={art.id}
              onClick={() => setSelectedArt(art)}
              className="bg-white border border-zinc-200 overflow-hidden group flex flex-col justify-between hover:border-zinc-950 transition-all duration-200"
            >
              {/* High Contrast Monochrome Mockup Viewport */}
              <div className="relative aspect-4/3 bg-zinc-950 flex flex-col justify-between p-6 border-b border-zinc-200 overflow-hidden">
                {/* Visual Grid Lines */}
                <div 
                  className="absolute inset-0 opacity-15 pointer-events-none"
                  style={{
                    backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
                    backgroundSize: '32px 32px'
                  }}
                />

                {/* Inner Overlay Artwork Graphic Representation */}
                <div className="relative z-10 flex items-center justify-between text-[11px] font-mono text-zinc-400">
                  <span className="uppercase tracking-widest">{art.aspect}</span>
                  <span className="px-2 py-0.5 bg-zinc-800 text-white rounded-2xs">{art.discipline}</span>
                </div>

                {/* Graphic Motif */}
                <div className="relative z-10 my-auto text-center space-y-2">
                  <div className="w-16 h-16 border-2 border-white mx-auto flex items-center justify-center font-display font-black text-2xl text-white group-hover:scale-105 transition-transform duration-300">
                    A
                  </div>
                  <div className="text-xs font-mono text-zinc-400 uppercase tracking-widest">
                    {art.medium}
                  </div>
                </div>

                {/* Zoom Hint */}
                <div className="relative z-10 flex items-center justify-between text-[11px] font-mono text-zinc-400">
                  <span>PLATE #{art.id.replace('cs-', '0')}</span>
                  <span className="flex items-center gap-1 group-hover:text-white transition-colors">
                    <ZoomIn className="w-3.5 h-3.5" />
                    <span>Expand</span>
                  </span>
                </div>
              </div>

              {/* Card Meta */}
              <div className="p-5 flex flex-col justify-between grow">
                <div>
                  <h3 className="text-lg font-bold font-display text-zinc-950 group-hover:underline">
                    {art.title}
                  </h3>
                  <p className="text-xs font-mono text-zinc-500 mt-1">
                    By {art.artist}
                  </p>
                  <p className="text-xs text-zinc-600 mt-3 line-clamp-2 leading-relaxed">
                    "{art.statement}"
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-zinc-100 flex items-center justify-between text-xs">
                  <span className="text-[11px] font-mono text-zinc-400">
                    {art.medium}
                  </span>
                  <span className="font-semibold text-zinc-900 group-hover:text-black flex items-center gap-1">
                    <span>Inspect</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Creator Spotlight: Black Section */}
        <div className="mt-16 p-8 sm:p-12 bg-zinc-950 text-white rounded-lg border border-zinc-800">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <Badge variant="dark" size="sm">CREATOR SPOTLIGHT // 2026</Badge>
              <h3 className="text-2xl sm:text-3xl font-bold font-display text-white">
                "Negative space is not empty. In ink art, it carries the gravity of everything left unsaid."
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed max-w-2xl">
                Kenji Takahashi, creator of <em>Kage: Neon Ronin</em>, discusses the intersection of classical sumi-e Japanese ink painting with modern high-contrast digital screentoning techniques.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col items-start lg:items-end justify-center gap-3">
              <div className="text-xs font-mono text-zinc-400 text-left lg:text-right">
                <div>KENJI TAKAHASHI</div>
                <div className="text-zinc-600">Lead Mangaka & Storyboard Artist</div>
              </div>
              <Button
                variant="darkPrimary"
                size="md"
                onClick={onOpenSubmit}
              >
                Submit Your Art
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox / Art Detail Modal */}
      {selectedArt && (
        <Modal
          isOpen={!!selectedArt}
          onClose={() => setSelectedArt(null)}
          title={selectedArt.title}
          subtitle={`${selectedArt.discipline} • By ${selectedArt.artist}`}
          maxWidth="max-w-2xl"
        >
          <div className="space-y-6">
            {/* High-Contrast Plate Showcase */}
            <div className="aspect-16/10 bg-zinc-950 text-white rounded-md border border-zinc-800 p-8 flex flex-col justify-between relative overflow-hidden">
              <div 
                className="absolute inset-0 opacity-10 pointer-events-none"
                style={{
                  backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)',
                  backgroundSize: '16px 16px'
                }}
              />
              <div className="flex justify-between font-mono text-xs text-zinc-400 relative z-10">
                <span>{selectedArt.aspect} RATIO</span>
                <span>ORIGINAL INK SPECIMEN</span>
              </div>
              <div className="my-auto text-center space-y-3 relative z-10">
                <div className="w-20 h-20 border-2 border-white mx-auto flex items-center justify-center font-display font-black text-3xl">
                  A
                </div>
                <div className="text-sm font-display tracking-widest uppercase">
                  {selectedArt.title}
                </div>
                <div className="text-xs font-mono text-zinc-400">
                  {selectedArt.medium}
                </div>
              </div>
              <div className="flex justify-between font-mono text-xs text-zinc-400 relative z-10">
                <span>ANGEZK ARCHIVE</span>
                <span>VERIFIED AUTHENTIC</span>
              </div>
            </div>

            <div className="space-y-2">
              <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-500">
                Artist Statement
              </h4>
              <p className="text-sm leading-relaxed text-zinc-800">
                "{selectedArt.statement}"
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 p-3 bg-zinc-50 border border-zinc-200 rounded-sm text-xs font-mono">
              <div>
                <span className="text-zinc-500 block">Discipline:</span>
                <span className="font-semibold text-zinc-900">{selectedArt.discipline}</span>
              </div>
              <div>
                <span className="text-zinc-500 block">Medium & Technique:</span>
                <span className="font-semibold text-zinc-900">{selectedArt.medium}</span>
              </div>
            </div>

            <div className="pt-2 flex justify-end">
              <Button
                variant="primary"
                size="sm"
                onClick={() => setSelectedArt(null)}
              >
                Close View
              </Button>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
}
