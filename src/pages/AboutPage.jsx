import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Shield, Terminal, BookOpen, Layers, CheckCircle2, ArrowRight } from 'lucide-react';
import { FAQS, MANIFESTO_PILLARS } from '../data/faqs';
import { CATEGORIES } from '../data/categories';
import SectionHeader from '../components/ui/SectionHeader';
import Card from '../components/ui/Card';
import Badge from '../components/ui/Badge';
import Button from '../components/ui/Button';

export default function AboutPage({ onNavigate, onOpenSubmit }) {
  const [openFaq, setOpenFaq] = useState(0);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white pb-24">
      {/* Manifesto Hero Section */}
      <section className="bg-white border-b border-zinc-200 py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-zinc-100 border border-zinc-200 text-[11px] font-mono uppercase tracking-widest text-zinc-900 rounded-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-zinc-950"></span>
            About Angezk
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold font-display tracking-tight text-zinc-950 leading-tight">
            An independent sanctuary for the creative avant-garde.
          </h1>

          <div className="prose prose-zinc max-w-none text-base sm:text-lg text-zinc-600 space-y-4 pt-4 leading-relaxed">
            <p>
              Angezk was born from a desire to escape the loud, hyper-saturated, algorithm-driven feeds of modern media. We believe that true creative resonance is found in focus, intentionality, and contrast.
            </p>
            <p>
              Our platform brings together the disciplines that shape the contemporary creative world: sequential art & manga, independent game design, brutalist digital art, sakuga animation, cross-disciplinary experiments, and high-performance creative technology.
            </p>
          </div>
        </div>
      </section>

      {/* The 4 Principles / Black Section */}
      <section className="bg-zinc-950 text-white py-16 sm:py-24 border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            dark
            kicker="Our Tenets"
            title="The 4 Guiding Principles"
            subtitle="How we evaluate work, curate projects, and preserve craftsmanship."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 pt-6">
            {MANIFESTO_PILLARS.map((pillar) => (
              <div
                key={pillar.number}
                className="p-6 sm:p-8 bg-zinc-900/70 border border-zinc-800 rounded-md space-y-3"
              >
                <div className="font-mono text-xs text-zinc-500 font-bold tracking-widest">
                  RULE // {pillar.number}
                </div>
                <h3 className="text-xl font-bold font-display text-white">
                  {pillar.title}
                </h3>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The 7 Disciplines Grid */}
      <section className="py-16 sm:py-24 bg-white border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            kicker="Platform Scope"
            title="The 7 Core Disciplines"
            subtitle="Every work in Angezk belongs to one of seven focused categories."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
            {CATEGORIES.map((cat, idx) => (
              <div
                key={cat.id}
                className="p-6 bg-zinc-50 border border-zinc-200 rounded-md space-y-3"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-zinc-400 font-semibold">
                    0{idx + 1}
                  </span>
                  <Badge variant="outline" size="sm">{cat.featuredTag}</Badge>
                </div>
                <h3 className="text-lg font-bold font-display text-zinc-950">
                  {cat.name}
                </h3>
                <p className="text-xs text-zinc-600 leading-relaxed">
                  {cat.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Curation & Editorial Process */}
      <section className="py-16 sm:py-20 bg-zinc-50 border-b border-zinc-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            kicker="Editorial Standards"
            title="How Curation Works"
            subtitle="Every entry in our directory is evaluated under four rigorous criteria."
          />

          <div className="space-y-4 pt-4">
            <div className="p-5 bg-white border border-zinc-200 rounded-sm flex items-start gap-4">
              <CheckCircle2 className="w-5 h-5 text-zinc-950 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-bold text-zinc-950">1. Originality & Vision</h4>
                <p className="text-xs text-zinc-600 mt-1">We look for projects with a distinct voice, whether in art direction, gameplay mechanics, or technical architecture.</p>
              </div>
            </div>

            <div className="p-5 bg-white border border-zinc-200 rounded-sm flex items-start gap-4">
              <CheckCircle2 className="w-5 h-5 text-zinc-950 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-bold text-zinc-950">2. Technical Execution</h4>
                <p className="text-xs text-zinc-600 mt-1">Clean line art, optimal frame data, responsive shaders, and well-structured code are foundational.</p>
              </div>
            </div>

            <div className="p-5 bg-white border border-zinc-200 rounded-sm flex items-start gap-4">
              <CheckCircle2 className="w-5 h-5 text-zinc-950 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-bold text-zinc-950">3. Process Transparency</h4>
                <p className="text-xs text-zinc-600 mt-1">We prioritize creators who share behind-the-scenes breakdowns, rough keyframes, x-sheets, or source code.</p>
              </div>
            </div>

            <div className="p-5 bg-white border border-zinc-200 rounded-sm flex items-start gap-4">
              <CheckCircle2 className="w-5 h-5 text-zinc-950 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-bold text-zinc-950">4. Community Value</h4>
                <p className="text-xs text-zinc-600 mt-1">Projects should inspire, teach, or provide direct utility to other creators in the ecosystem.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive FAQ Accordion */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            kicker="Answers"
            title="Frequently Asked Questions"
            subtitle="Everything you need to know about the platform, our aesthetic philosophy, and submission guidelines."
          />

          <div className="divide-y divide-zinc-200 border-y border-zinc-200">
            {FAQS.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div key={index} className="py-5">
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full flex items-center justify-between text-left group cursor-pointer"
                  >
                    <span className="text-base sm:text-lg font-bold font-display text-zinc-950 group-hover:text-zinc-600 transition-colors">
                      {faq.question}
                    </span>
                    <span className="p-1 rounded-sm bg-zinc-100 group-hover:bg-zinc-200 transition-colors ml-4 shrink-0">
                      {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </span>
                  </button>
                  {isOpen && (
                    <div className="mt-3 pr-8 text-sm text-zinc-600 leading-relaxed animate-in fade-in duration-150">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="mt-12 text-center space-y-4 pt-6">
            <h4 className="text-lg font-bold font-display text-zinc-950">
              Have a question that is not covered here?
            </h4>
            <div className="flex justify-center gap-3">
              <Button variant="outline" size="sm" onClick={() => onNavigate('contact')}>
                Contact the Team
              </Button>
              <Button variant="primary" size="sm" onClick={onOpenSubmit}>
                Submit a Project
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
