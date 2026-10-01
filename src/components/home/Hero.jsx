import React from 'react';
import { ArrowRight, Sparkles, Terminal, Flame, Layers, ShieldCheck } from 'lucide-react';
import Button from '../ui/Button';
import Badge from '../ui/Badge';

export default function Hero({ onExploreClick, onSubmitClick }) {
  return (
    <section className="relative pt-12 pb-16 sm:pt-20 sm:pb-24 border-b border-zinc-200 overflow-hidden bg-white">
      {/* Subtle background grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#000 1px, transparent 1px)',
          backgroundSize: '24px 24px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline and Call-to-Actions */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            
            {/* Platform pill indicator */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-300 bg-zinc-50 text-xs font-mono text-zinc-800">
              <span className="w-2 h-2 rounded-full bg-zinc-950 animate-ping"></span>
              <span>CURATED PLATFORM FOR INDEPENDENT CREATORS</span>
            </div>

            {/* Main Editorial Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight font-display text-zinc-950 leading-[1.08]">
              Where Anime, Gaming & Creative Tech Converge.
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-zinc-600 max-w-xl leading-relaxed">
              Angezk is a premier monochrome sanctuary for manga creators, game developers, sakuga animators, digital artists, and creative technologists. No chromatic noise. Pure craft.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <Button
                variant="primary"
                size="lg"
                onClick={onExploreClick}
                icon={ArrowRight}
                iconPosition="right"
                className="justify-center"
              >
                Explore Platform
              </Button>

              <Button
                variant="outline"
                size="lg"
                onClick={onSubmitClick}
                className="justify-center"
              >
                Submit Project
              </Button>
            </div>

            {/* Key Platform Metrics */}
            <div className="pt-6 border-t border-zinc-200/80 grid grid-cols-3 gap-4 sm:gap-8 max-w-lg">
              <div>
                <div className="text-2xl sm:text-3xl font-bold font-display text-zinc-950">
                  7
                </div>
                <div className="text-xs font-mono uppercase tracking-wider text-zinc-500 mt-0.5">
                  Disciplines
                </div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold font-display text-zinc-950">
                  850+
                </div>
                <div className="text-xs font-mono uppercase tracking-wider text-zinc-500 mt-0.5">
                  Curated Works
                </div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold font-display text-zinc-950">
                  100%
                </div>
                <div className="text-xs font-mono uppercase tracking-wider text-zinc-500 mt-0.5">
                  Independent
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: High-Contrast Monolithic Feature Card */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer decorative frame */}
              <div className="relative bg-zinc-950 text-white rounded-lg p-6 sm:p-8 border border-zinc-800 shadow-2xl space-y-6">
                
                {/* Header of feature card */}
                <div className="flex items-center justify-between pb-4 border-b border-zinc-800">
                  <div className="flex items-center gap-2 font-mono text-xs text-zinc-400">
                    <span className="w-2 h-2 rounded-full bg-white"></span>
                    <span>CURATOR SPOTLIGHT</span>
                  </div>
                  <Badge variant="dark" size="sm">
                    ISSUE #01
                  </Badge>
                </div>

                {/* Main Card Content */}
                <div className="space-y-4">
                  <div className="text-xs font-mono text-zinc-400 uppercase tracking-widest">
                    Manga & Sequential Art
                  </div>
                  <h3 className="text-2xl font-bold font-display tracking-tight text-white leading-snug">
                    "Kage: Neon Ronin" — Sumi-e Ink in a Cybernetic Wasteland
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                    A masterclass in dynamic paneling and stark contrast. 42 pages of hand-drawn brush lines deconstructed with production notes.
                  </p>
                </div>

                {/* Minimal preview visual representation */}
                <div className="p-4 bg-zinc-900 rounded-sm border border-zinc-800/80 font-mono text-xs text-zinc-400 space-y-2">
                  <div className="flex justify-between items-center text-[11px] text-zinc-500 pb-1 border-b border-zinc-800">
                    <span>ASPECT: 1:1.414 (B5 Manga)</span>
                    <span>24 FPS SAKUGA</span>
                  </div>
                  <div className="flex items-center justify-between text-zinc-300">
                    <span>Inking: Sumi Japanese Brush</span>
                    <span className="text-white font-bold">100% K</span>
                  </div>
                  <div className="flex items-center justify-between text-zinc-300">
                    <span>Engine: Canvas-to-Manga WebGL</span>
                    <span className="text-white font-bold">60 FPS</span>
                  </div>
                </div>

                {/* Action button inside card */}
                <div className="pt-2 flex items-center justify-between text-xs font-mono text-zinc-400">
                  <span>CURATED BY ANGEZK</span>
                  <button 
                    onClick={onExploreClick}
                    className="text-white hover:underline flex items-center gap-1 cursor-pointer font-semibold"
                  >
                    <span>Read Pilot</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Offset decorative backdrop layer */}
              <div 
                className="absolute -inset-2 bg-zinc-100 rounded-lg -z-10 border border-zinc-300 translate-x-2 translate-y-2 hidden sm:block" 
                aria-hidden="true" 
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
