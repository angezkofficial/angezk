import React, { useState } from 'react';
import { Wrench, Sparkles, Copy, Check, Calculator, Eye, Sliders, RefreshCw, BookOpen } from 'lucide-react';
import SectionHeader from '../components/ui/SectionHeader';
import Button from '../components/ui/Button';
import Badge from '../components/ui/Badge';
import Card from '../components/ui/Card';

export default function ToolsPage() {
  // Tool 1: Aspect Ratio State
  const [baseWidth, setBaseWidth] = useState(1920);
  const [aspectPreset, setAspectPreset] = useState('16:9');
  const [customRatioW, setCustomRatioW] = useState(16);
  const [customRatioH, setCustomRatioH] = useState(9);

  // Tool 2: Name Generator State
  const [generatedName, setGeneratedName] = useState({
    title: 'Kage // Protocol Zero',
    tagline: 'Feudal Infiltration in an Autonomous Monolith'
  });
  const [copiedName, setCopiedName] = useState(false);

  // Tool 3: Monochrome Shade Inspector
  const [selectedShade, setSelectedShade] = useState('#09090b');
  const [copiedHex, setCopiedHex] = useState(false);

  // Aspect ratio presets
  const presets = [
    { label: '16:9 (HD / Anime Cinema)', w: 16, h: 9 },
    { label: '4:3 (Classic CRT / Retro Gaming)', w: 4, h: 3 },
    { label: '1:1.414 (B5 Japanese Manga Page)', w: 1000, h: 1414 },
    { label: '1:1 (Square Album / Avatar)', w: 1, h: 1 },
    { label: '9:16 (Vertical Reel / Mobile)', w: 9, h: 16 },
    { label: '21:9 (Cinematic Ultrawide)', w: 21, h: 9 }
  ];

  const currentW = customRatioW || 16;
  const currentH = customRatioH || 9;
  const calculatedHeight = Math.round((baseWidth * currentH) / currentW);
  const megapixels = ((baseWidth * calculatedHeight) / 1000000).toFixed(2);

  // Random Name Generator Logic
  const prefixes = ['Kage', 'Valkyrie', 'Monolith', 'Chrono', 'Void', 'Sumi', 'Aethel', 'Ronin', 'Genga', 'Cyber'];
  const suffixes = ['Zero', 'Reverie', 'Protocol', 'Engine', 'Vanguard', 'Shift', 'Eclipse', 'Vector', 'Ascent', 'Paradox'];
  const themes = [
    'Cyber-Feudal Infiltration in an Autonomous Citadel',
    'Tactical Boss Encounters against Monolithic Titans',
    'Sacrificial Blades and Hand-Drawn Ink Storyboards',
    'Non-Photorealistic Cel-Shaded Highway Interceptors',
    'Sub-Zero High-Frequency Kinetic Duels'
  ];

  const handleGenerateName = () => {
    const pre = prefixes[Math.floor(Math.random() * prefixes.length)];
    const suf = suffixes[Math.floor(Math.random() * suffixes.length)];
    const num = Math.floor(Math.random() * 90 + 10);
    const theme = themes[Math.floor(Math.random() * themes.length)];

    setGeneratedName({
      title: `${pre} ${suf} // ${num}`,
      tagline: theme
    });
  };

  const handleCopyName = () => {
    navigator.clipboard?.writeText(`${generatedName.title} — ${generatedName.tagline}`);
    setCopiedName(true);
    setTimeout(() => setCopiedName(false), 2000);
  };

  // Monochrome scale palette
  const monochromeScale = [
    { name: 'Pure Obsidian', hex: '#000000', contrast: '21.0:1 on White', use: 'Deepest Manga Shadows' },
    { name: 'Zinc 950', hex: '#09090b', contrast: '19.8:1 on White', use: 'Primary Editorial Body' },
    { name: 'Zinc 900', hex: '#18181b', contrast: '16.5:1 on White', use: 'Dark Section Backgrounds' },
    { name: 'Zinc 800', hex: '#27272a', contrast: '12.1:1 on White', use: 'Dark Card Borders' },
    { name: 'Zinc 700', hex: '#3f3f46', contrast: '8.2:1 on White', use: 'Secondary Dark Elements' },
    { name: 'Zinc 500', hex: '#71717a', contrast: '4.8:1 on White', use: 'Monochrome Halftone / Muted' },
    { name: 'Zinc 400', hex: '#a1a1aa', contrast: '3.1:1 on White', use: 'Secondary Text on Dark' },
    { name: 'Zinc 300', hex: '#d4d4d8', contrast: '1.8:1 on White', use: 'Soft Light Borders' },
    { name: 'Zinc 200', hex: '#e4e4e7', contrast: '1.4:1 on White', use: 'Default Border Gray' },
    { name: 'Pure White', hex: '#ffffff', contrast: '1.0:1 on White', use: 'Canvas Base' }
  ];

  const handleCopyHex = (hex) => {
    navigator.clipboard?.writeText(hex);
    setSelectedShade(hex);
    setCopiedHex(true);
    setTimeout(() => setCopiedHex(false), 2000);
  };

  return (
    <div className="min-h-screen bg-white pb-24">
      {/* Header */}
      <section className="bg-zinc-50 border-b border-zinc-200 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-white border border-zinc-300 text-[11px] font-mono uppercase tracking-widest text-zinc-900 rounded-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-zinc-950"></span>
              Creator Utilities
            </div>
            <h1 className="text-3xl sm:text-5xl font-bold font-display tracking-tight text-zinc-950">
              Useful Creator Tools & Reference
            </h1>
            <p className="text-sm sm:text-base text-zinc-600 leading-relaxed">
              Browser-native utilities built specifically for mangaka, game developers, animators, and digital artists. No trackers, no bloat.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-16">
        
        {/* Tool 1: Aspect Ratio & Canvas Calculator */}
        <div className="p-6 sm:p-8 border border-zinc-200 rounded-md bg-white space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-zinc-200 gap-2">
            <div>
              <div className="flex items-center gap-2">
                <Calculator className="w-4 h-4 text-zinc-950" />
                <h3 className="text-xl font-bold font-display text-zinc-950">
                  Aspect Ratio & Resolution Calculator
                </h3>
              </div>
              <p className="text-xs text-zinc-500 mt-1">
                Calculate pixel-perfect dimensions for manga trim bounds, game render targets, and anime video formats.
              </p>
            </div>
            <Badge variant="outline">Utility 01</Badge>
          </div>

          {/* Preset Buttons */}
          <div>
            <label className="block text-xs font-mono uppercase tracking-wider text-zinc-600 mb-2">
              Standard Format Presets
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
              {presets.map((preset) => (
                <button
                  key={preset.label}
                  onClick={() => {
                    setAspectPreset(preset.label);
                    setCustomRatioW(preset.w);
                    setCustomRatioH(preset.h);
                  }}
                  className={`p-2.5 text-xs text-left rounded-sm border transition-colors cursor-pointer ${
                    customRatioW === preset.w && customRatioH === preset.h
                      ? 'bg-zinc-950 text-white border-zinc-950 font-bold'
                      : 'bg-zinc-50 text-zinc-700 border-zinc-200 hover:border-zinc-400'
                  }`}
                >
                  <div className="font-mono font-bold">{preset.w}:{preset.h}</div>
                  <div className="text-[10px] text-zinc-400 truncate mt-0.5">{preset.label}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Controls & Output */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center p-6 bg-zinc-50 border border-zinc-200 rounded-sm">
            <div className="md:col-span-6 space-y-4">
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-zinc-700 mb-1">
                  Base Width (Pixels)
                </label>
                <input
                  type="number"
                  value={baseWidth}
                  onChange={(e) => setBaseWidth(Math.max(1, parseInt(e.target.value) || 1))}
                  className="w-full text-base font-mono px-3 py-2 bg-white border border-zinc-300 rounded-sm focus:outline-hidden focus:border-zinc-950"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-zinc-700 mb-1">
                    Ratio Width
                  </label>
                  <input
                    type="number"
                    value={customRatioW}
                    onChange={(e) => setCustomRatioW(Math.max(1, parseInt(e.target.value) || 1))}
                    className="w-full text-base font-mono px-3 py-2 bg-white border border-zinc-300 rounded-sm focus:outline-hidden focus:border-zinc-950"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-zinc-700 mb-1">
                    Ratio Height
                  </label>
                  <input
                    type="number"
                    value={customRatioH}
                    onChange={(e) => setCustomRatioH(Math.max(1, parseInt(e.target.value) || 1))}
                    className="w-full text-base font-mono px-3 py-2 bg-white border border-zinc-300 rounded-sm focus:outline-hidden focus:border-zinc-950"
                  />
                </div>
              </div>
            </div>

            {/* Results Display */}
            <div className="md:col-span-6 p-6 bg-zinc-950 text-white rounded-md border border-zinc-800 space-y-3">
              <div className="text-xs font-mono text-zinc-400 uppercase tracking-widest">
                Computed Resolution
              </div>
              <div className="text-3xl sm:text-4xl font-bold font-mono text-white">
                {baseWidth} × {calculatedHeight} px
              </div>
              <div className="grid grid-cols-2 gap-4 pt-2 border-t border-zinc-800 text-xs font-mono text-zinc-400">
                <div>
                  <span className="block text-zinc-500">Total Megapixels</span>
                  <span className="text-white font-bold">{megapixels} MP</span>
                </div>
                <div>
                  <span className="block text-zinc-500">Effective Ratio</span>
                  <span className="text-white font-bold">{(currentW / currentH).toFixed(3)} : 1</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tool 2: Project Title & Story Hook Generator */}
        <div className="p-6 sm:p-8 border border-zinc-200 rounded-md bg-white space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-zinc-200 gap-2">
            <div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-zinc-950" />
                <h3 className="text-xl font-bold font-display text-zinc-950">
                  Concept & Project Codename Generator
                </h3>
              </div>
              <p className="text-xs text-zinc-500 mt-1">
                Instant procedural generator for indie games, manga pilots, and sci-fi collective projects.
              </p>
            </div>
            <Badge variant="outline">Utility 02</Badge>
          </div>

          <div className="p-6 bg-zinc-50 border border-zinc-200 rounded-sm flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-left">
              <span className="text-[11px] font-mono uppercase tracking-widest text-zinc-500">
                GENERATED HOOK
              </span>
              <h4 className="text-2xl sm:text-3xl font-bold font-display text-zinc-950">
                {generatedName.title}
              </h4>
              <p className="text-sm text-zinc-600 font-mono">
                "{generatedName.tagline}"
              </p>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <Button
                variant="outline"
                size="md"
                onClick={handleCopyName}
                icon={copiedName ? Check : Copy}
              >
                {copiedName ? 'Copied' : 'Copy Name'}
              </Button>
              <Button
                variant="primary"
                size="md"
                onClick={handleGenerateName}
                icon={RefreshCw}
              >
                Generate Next
              </Button>
            </div>
          </div>
        </div>

        {/* Tool 3: Monochrome Tone & Contrast Inspector */}
        <div className="p-6 sm:p-8 border border-zinc-200 rounded-md bg-white space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-zinc-200 gap-2">
            <div>
              <div className="flex items-center gap-2">
                <Eye className="w-4 h-4 text-zinc-950" />
                <h3 className="text-xl font-bold font-display text-zinc-950">
                  Monochrome Contrast & Shading Scale
                </h3>
              </div>
              <p className="text-xs text-zinc-500 mt-1">
                The official Angezk tonal palette. Click any shade to copy hex codes for Clip Studio, Photoshop, or CSS.
              </p>
            </div>
            <Badge variant="outline">Utility 03</Badge>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {monochromeScale.map((shade) => (
              <div
                key={shade.hex}
                onClick={() => handleCopyHex(shade.hex)}
                className="p-3 border border-zinc-200 rounded-md hover:border-zinc-950 transition-all cursor-pointer group bg-white flex flex-col justify-between"
              >
                <div>
                  <div
                    className="w-full h-14 rounded-sm border border-zinc-300 shadow-2xs mb-2 transition-transform group-hover:scale-98"
                    style={{ backgroundColor: shade.hex }}
                  />
                  <div className="font-bold text-xs text-zinc-950 group-hover:underline">
                    {shade.name}
                  </div>
                  <div className="text-[11px] font-mono text-zinc-500 mt-0.5">
                    {shade.hex}
                  </div>
                </div>

                <div className="mt-3 pt-2 border-t border-zinc-100 text-[10px] text-zinc-400 font-mono">
                  {shade.use}
                </div>
              </div>
            ))}
          </div>

          {copiedHex && (
            <div className="p-3 bg-zinc-950 text-white rounded-sm text-center text-xs font-mono animate-in fade-in">
              ✓ Copied {selectedShade} to clipboard.
            </div>
          )}
        </div>

        {/* Reference Guide: Manga Screentone & DPI Cheat Sheet */}
        <div className="p-6 sm:p-8 border border-zinc-200 rounded-md bg-zinc-50 space-y-4">
          <div className="flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-zinc-950" />
            <h4 className="text-base font-bold font-display text-zinc-950">
              Technical Reference: Manga Screentone & Publishing Standards
            </h4>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-mono text-zinc-700">
            <div className="p-4 bg-white border border-zinc-200 rounded-sm space-y-1">
              <span className="font-bold text-zinc-950 block">600 DPI (1-Bit Monochrome)</span>
              <p className="text-zinc-500">Standard for commercial B5/Tankobon print manga. Eliminates moiré distortion when printing halftone dots.</p>
            </div>
            <div className="p-4 bg-white border border-zinc-200 rounded-sm space-y-1">
              <span className="font-bold text-zinc-950 block">60 LPI vs 80 LPI Screen</span>
              <p className="text-zinc-500">60-line screen is recommended for newsprint magazines; 80-line for high-density glossy artbooks.</p>
            </div>
            <div className="p-4 bg-white border border-zinc-200 rounded-sm space-y-1">
              <span className="font-bold text-zinc-950 block">WebGL 60 FPS Panel Limit</span>
              <p className="text-zinc-500">For Canvas-to-Manga engine, cap individual sprite textures to 2048x2048 to prevent VRAM throttling on mobile.</p>
            </div>
          </div>
        </div>

      </section>
    </div>
  );
}
