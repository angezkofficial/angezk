# ANGEZK — Modern Creative & Tech Platform

> **Angezk** is a modern, independent creative platform for Anime & Manga, Gaming, Digital Art, Animation, Creative Projects, Tech, and Creator Tools.

Designed with an uncompromising **editorial monochrome aesthetic** (pure black `#09090b` and pure white `#ffffff` with subtle zinc borders `#e4e4e7` / `#27272a`), deliberate typography (`Space Grotesk` & `Inter`), and high-performance frontend architecture.

---

## ✦ Platform Overview

### Core Disciplines
1. **Anime & Manga** — Sequential art, original manga pilots, doujinshi, and hand-drawn sakuga breakdowns.
2. **Gaming** — Indie game devlogs, combat frame data mechanics, PSX/retro shaders, and playable web demos.
3. **Digital Art** — Hard-surface mecha schematics, brutalist 3D architectural renders, and typography studies.
4. **Animation** — 2D sakuga smear sheets, non-photorealistic rendering (NPR) cel-shading pipelines, and motion design.
5. **Creative Projects** — Boutique zines, variable typefaces, generative audio soundscapes, and experimental labs.
6. **Tech** — Canvas/WebGL manga reader engines, Rust texture atlas CLI utilities, and software architecture essays.
7. **Blogs & Useful Tools** — In-browser creator utilities (Aspect Ratio Calculator, Monochrome Contrast Palette, Manga Screentone Guide, Project Name Generator).

---

## ✦ Project Structure

```text
ANGEZK/
├── public/
│   └── favicon.svg               # Minimalist geometric monochrome Angezk mark
├── src/
│   ├── assets/                   # Static media assets
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.jsx        # Sticky header with branding, nav links, quick search, submit CTA, mobile drawer
│   │   │   ├── Footer.jsx        # Stark black section with weekly dispatch, directory links, system status
│   │   │   └── SearchModal.jsx   # Global search modal with category filter pills and ⌘K hotkey
│   │   ├── ui/
│   │   │   ├── Badge.jsx         # Monochrome status & taxonomy badges
│   │   │   ├── Button.jsx        # Minimalist primary, outline, ghost, and dark variants
│   │   │   ├── Card.jsx          # Bordered card container with subtle hover lift
│   │   │   ├── Modal.jsx         # Backdrop-blurred accessible modal dialog
│   │   │   └── SectionHeader.jsx # Editorial headers with kicker dots and action arrows
│   │   ├── home/
│   │   │   ├── Hero.jsx          # Bold headline, live metrics ticker, and spotlight feature card
│   │   │   ├── CategoriesSection.jsx # The 7 core disciplines with custom iconography
│   │   │   ├── FeaturedProjects.jsx  # Curated standout projects across disciplines
│   │   │   ├── ManifestoBanner.jsx   # Pure black section with the 4 Angezk principles
│   │   │   ├── TrendingSection.jsx   # Ranked 01–05 velocity feed with read times and view stats
│   │   │   └── LatestCreations.jsx   # Real-time community submissions with category tabs
│   │   └── shared/
│   │       ├── ProjectDetailModal.jsx # Metadata inspector with tools, author, and appreciation actions
│   │       └── SubmitProjectModal.jsx # Creator submission flow with simulated curation feedback
│   ├── pages/
│   │   ├── HomePage.jsx          # Complete editorial front page
│   │   ├── ExplorePage.jsx       # Search, filter pills, sorting, and archive grid
│   │   ├── ProjectsPage.jsx      # Filter by status (Live Demos, In Progress, Open Source, Completed)
│   │   ├── CreativePage.jsx      # High-contrast visual gallery, plate inspect modal, creator spotlights
│   │   ├── ToolsPage.jsx         # Aspect Ratio Calculator, Name Generator, Tone Palette, Manga DPI specs
│   │   ├── AboutPage.jsx         # Origin manifesto, the 7 pillars, curation criteria, and accordion FAQ
│   │   └── ContactPage.jsx       # Direct inquiry form with classification chips and response guarantee
│   ├── data/
│   │   ├── categories.js         # The 7 platform disciplines with metadata
│   │   ├── projects.js           # Curated projects with pipelines, metrics, and tags
│   │   ├── content.js            # Trending analyses, latest community submissions, and visual plates
│   │   └── faqs.js               # Platform FAQs and manifesto pillars
│   ├── App.jsx                   # Central state management, hash router, global shortcuts (⌘K)
│   ├── index.css                 # Tailwind CSS v4 @theme, custom scrollbars, typography
│   └── main.jsx                  # React 19 root bootstrap
├── index.html                    # HTML shell with Google Fonts (Space Grotesk & Inter)
├── package.json
└── vite.config.js                # Vite + React + Tailwind CSS v4 setup
```

---

## ✦ Getting Started Locally

### Prerequisites
- Node.js (v18+)
- npm (v9+)

### Installation & Run

```bash
# 1. Install dependencies
npm run install (or npm install)

# 2. Start the local development server
npm run dev

# 3. Build for production
npm run build

# 4. Preview the production build
npm run preview
```

The application runs locally at `http://localhost:5173/`.

---

## ✦ Design System Principles
- **Black and White Palette**: Strictly monochrome (`#000000`, `#09090b`, `#18181b`, `#27272a`, `#71717a`, `#e4e4e7`, `#ffffff`).
- **Zero Chromatic Noise**: No bright blue, neon glows, or excessive gradients.
- **Editorial Typography**: Headings set in `Space Grotesk`, clean body copy in `Inter`, technical data in monospace.
- **Micro-Interactions**: Crisp borders, subtle hover elevation, clear keyboard navigation (`⌘K` / `ESC`).
