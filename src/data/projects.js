export const PROJECTS = [
  {
    id: 'proj-1',
    title: 'Kage: Neon Ronin — Chapter 0 & Storyboards',
    slug: 'kage-neon-ronin',
    category: 'anime-manga',
    categoryLabel: 'Anime & Manga',
    status: 'In Progress',
    featured: true,
    year: '2026',
    author: {
      name: 'Kenji Takahashi',
      handle: '@kenji_ink',
      role: 'Lead Mangaka & Storyboard Artist'
    },
    summary: 'A 42-page ink-washed cyberpunk samurai pilot exploring high-contrast screentones and kinetic panel layouts.',
    fullDescription: 'Kage: Neon Ronin is a serialized manga project set in an isolationist neo-Edo metropolis where feudal code clashes with corporate cybernetics. Rendered exclusively in traditional sumi ink textures combined with modern digital screentone overlays, each page focuses on dramatic negative space, kinetic motion lines, and rhythmic panel pacing.',
    tags: ['Manga Pilot', 'Sumi Ink', 'Cyberpunk', 'Sequential Art', 'Storyboards'],
    toolsUsed: ['Clip Studio Paint EX', 'Analog Sumi-e', 'Photoshop', 'Custom Screentones'],
    metrics: { views: '28.4k', appreciations: '3.1k', chapters: 2 }
  },
  {
    id: 'proj-2',
    title: 'Valkyrie Zero: Boss Rush Prototype',
    slug: 'valkyrie-zero',
    category: 'gaming',
    categoryLabel: 'Gaming',
    status: 'Live Demo',
    featured: true,
    year: '2026',
    author: {
      name: 'Astral Shift Studios',
      handle: '@astral_shift',
      role: 'Indie Game Collective'
    },
    summary: 'A fast-paced, monochromatic boss rush game designed with precision frame-data and tight parry mechanics.',
    fullDescription: 'Valkyrie Zero strips modern combat action games down to their raw mechanical essence. Built on a custom high-framerate physics controller, the game challenges players with lightning-fast reactive timing against colossal mechanized monoliths. The stark high-contrast visual design guarantees zero visual clutter during high-intensity sequences.',
    tags: ['Action', 'Boss Rush', 'Monochrome 3D', 'WebGL', 'Soundtrack'],
    toolsUsed: ['Godot Engine 4', 'Blender', 'FMOD', 'Aseprite'],
    metrics: { views: '41.2k', appreciations: '4.8k', rating: '4.9/5' }
  },
  {
    id: 'proj-3',
    title: 'Obsidian Reverie — Architectural Visions',
    slug: 'obsidian-reverie',
    category: 'digital-art',
    categoryLabel: 'Digital Art',
    status: 'Completed',
    featured: true,
    year: '2025',
    author: {
      name: 'Elena Rostova',
      handle: '@rostova_arch',
      role: 'Concept Designer & Architect'
    },
    summary: 'Monumental brutalist architectural concepts exploring shadow casting, basalt textures, and stark monoliths.',
    fullDescription: 'An editorial series of 12 monumental speculative architectural renders. The series interrogates how human scale interacts with hyper-geometric basalt structures in a post-terrestrial landscape. Each frame relies strictly on luminance values and chiaroscuro lighting rather than chromatic accents.',
    tags: ['Concept Art', 'Brutalism', '3D Architecture', 'Monoliths', 'Editorial'],
    toolsUsed: ['Blender 4.2', 'Octane Render', 'Cinema 4D', 'Photoshop'],
    metrics: { views: '19.8k', appreciations: '2.4k', pieces: 12 }
  },
  {
    id: 'proj-4',
    title: 'Canvas-to-Manga: WebGL Panel Engine',
    slug: 'canvas-to-manga-engine',
    category: 'tech',
    categoryLabel: 'Tech',
    status: 'Open Source',
    featured: true,
    year: '2026',
    author: {
      name: 'Devon Vance',
      handle: '@dvance_dev',
      role: 'Creative Technologist'
    },
    summary: 'An open-source interactive reader framework delivering 60fps parallax depth and camera pan effects for digital manga.',
    fullDescription: 'Canvas-to-Manga is a zero-dependency WebGL/Canvas micro-engine that turns traditional multi-layer manga illustrations into responsive, touch-friendly interactive web experiences. It offers built-in depth maps, page-turn physics, customizable screen tones, and accessibility audio descriptions.',
    tags: ['Open Source', 'WebGL', 'TypeScript', 'Frontend', 'Manga Tech'],
    toolsUsed: ['TypeScript', 'WebGL 2.0', 'Vite', 'Tailwind CSS'],
    metrics: { views: '15.6k', appreciations: '1.9k', stars: '840' }
  },
  {
    id: 'proj-5',
    title: 'Project Aethelgard — 2D Sakuga Breakdown',
    slug: 'project-aethelgard',
    category: 'animation',
    categoryLabel: 'Animation',
    status: 'Completed',
    featured: false,
    year: '2026',
    author: {
      name: 'Studio Kanso',
      handle: '@studiokanso',
      role: 'Indie Sakuga Animators'
    },
    summary: 'A 90-second hand-drawn sword duel sequence deconstructed frame by frame with timing sheets and smear guides.',
    fullDescription: 'Project Aethelgard is an open production study made available to the animation community. It features the complete 24 fps rough keyframes (genga), in-betweens (douga), timing sheets (x-sheets), and color scripts for a high-intensity duel between two fencing masters.',
    tags: ['2D Sakuga', 'Genga', 'Hand-Drawn', 'Frame Analysis', 'Action'],
    toolsUsed: ['TVPaint Animation', 'OpenToonz', 'Clip Studio Action'],
    metrics: { views: '33.1k', appreciations: '5.2k', frames: '1,420' }
  },
  {
    id: 'proj-6',
    title: 'Monolith Sans: Typography for the Avant-Garde',
    slug: 'monolith-sans',
    category: 'creative-projects',
    categoryLabel: 'Creative Projects',
    status: 'Released',
    featured: false,
    year: '2025',
    author: {
      name: 'Kuro Studio',
      handle: '@kuro_foundry',
      role: 'Type Foundry'
    },
    summary: 'A variable geometric display typeface inspired by modernist Japanese packaging and brutalist concrete signs.',
    fullDescription: 'Monolith Sans is a variable typeface crafted for high-impact editorial headlines, gaming user interfaces, and poster art. Supporting Latin Extended and full Katakana glyphs, it contains 9 weights ranging from Hairline to Ultra-Black with sharp ink traps.',
    tags: ['Typography', 'Type Design', 'Variable Font', 'Japanese Glyphs', 'Print'],
    toolsUsed: ['Glyphs 3', 'RoboFont', 'Illustrator'],
    metrics: { views: '12.4k', appreciations: '1.5k', downloads: '3.4k' }
  },
  {
    id: 'proj-7',
    title: 'SpritePacker CLI — Rust Texture Atlas Generator',
    slug: 'spritepacker-cli',
    category: 'tech',
    categoryLabel: 'Tech',
    status: 'Open Source',
    featured: false,
    year: '2026',
    author: {
      name: 'Marcus Brody',
      handle: '@mbrody',
      role: 'Systems & Engine Programmer'
    },
    summary: 'Blazing fast CLI utility written in Rust to pack thousands of game sprites into optimal power-of-two texture atlases.',
    fullDescription: 'SpritePacker CLI leverages the MaxRects packing algorithm and multi-threaded image processing in Rust to generate game-ready sprite sheets and JSON metadata in milliseconds. Built specifically for retro game devs and pixel artists looking for reproducible asset builds.',
    tags: ['Rust', 'CLI', 'Game Dev', 'Texture Packing', 'Open Source'],
    toolsUsed: ['Rust', 'Cargo', 'Rayon', 'Image-rs'],
    metrics: { views: '9.8k', appreciations: '1.1k', stars: '610' }
  },
  {
    id: 'proj-8',
    title: 'Mecha Anatomy 2088: Vector Schematics',
    slug: 'mecha-anatomy-2088',
    category: 'digital-art',
    categoryLabel: 'Digital Art',
    status: 'Completed',
    featured: false,
    year: '2026',
    author: {
      name: 'Rei Murakami',
      handle: '@reim_art',
      role: 'Hard-Surface Illustrator'
    },
    summary: 'Detailed orthographic cutaways and mechanical schematics for autonomous industrial defense exosuits.',
    fullDescription: 'A technical illustration series exploring internal hydraulics, power routing, and modular armor plates. Murakami combines the clinical precision of engineering blueprints with the expressive line-weight dynamics of Japanese sci-fi manga.',
    tags: ['Mecha', 'Vector Art', 'Technical Drawing', 'Sci-Fi', 'Orthographic'],
    toolsUsed: ['Affinity Designer', 'Illustrator', 'MoI 3D'],
    metrics: { views: '22.3k', appreciations: '2.9k', schematics: 8 }
  }
];
