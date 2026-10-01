import React from 'react';
import { ArrowRight, Compass, Shield, Terminal, Zap } from 'lucide-react';
import { MANIFESTO_PILLARS } from '../../data/faqs';
import SectionHeader from '../ui/SectionHeader';
import Button from '../ui/Button';

export default function ManifestoBanner({ onLearnMore }) {
  return (
    <section className="py-20 sm:py-28 bg-zinc-950 text-white border-y border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header (Dark Mode) */}
        <SectionHeader
          dark
          kicker="Core Philosophy"
          title="The Angezk Standard"
          subtitle="We reject chromatic noise and ephemeral hype cycles. We believe true creative longevity stems from structural rigor, technical prowess, and uncompromising ink craft."
          actionText="Read Full Manifesto"
          onAction={onLearnMore}
        />

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 pt-4">
          {MANIFESTO_PILLARS.map((pillar) => (
            <div
              key={pillar.number}
              className="p-6 bg-zinc-900/60 rounded-md border border-zinc-800 hover:border-zinc-700 transition-colors flex flex-col justify-between"
            >
              <div>
                <span className="font-mono text-xs text-zinc-500 font-bold tracking-widest block mb-4">
                  RULE // {pillar.number}
                </span>

                <h3 className="text-lg font-bold font-display text-white mb-2">
                  {pillar.title}
                </h3>

                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-zinc-800/80 flex items-center justify-between text-xs font-mono text-zinc-500">
                <span>EST. 2026</span>
                <span className="w-1.5 h-1.5 rounded-full bg-zinc-400"></span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner Quote */}
        <div className="mt-12 p-6 sm:p-8 bg-black rounded-lg border border-zinc-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="space-y-1">
            <h4 className="text-base sm:text-lg font-bold font-display text-white">
              Ready to submit your work to the independent collective?
            </h4>
            <p className="text-xs sm:text-sm text-zinc-400">
              Open curation across gaming prototypes, manga storyboards, shader code, and animations.
            </p>
          </div>

          <Button
            variant="darkPrimary"
            size="md"
            onClick={onLearnMore}
            icon={ArrowRight}
            iconPosition="right"
            className="shrink-0"
          >
            Explore Philosophy
          </Button>
        </div>

      </div>
    </section>
  );
}
