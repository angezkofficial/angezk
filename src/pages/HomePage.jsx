import React from 'react';
import Hero from '../components/home/Hero';
import CategoriesSection from '../components/home/CategoriesSection';
import FeaturedProjects from '../components/home/FeaturedProjects';
import ManifestoBanner from '../components/home/ManifestoBanner';
import TrendingSection from '../components/home/TrendingSection';
import LatestCreations from '../components/home/LatestCreations';

export default function HomePage({
  onNavigate,
  onSelectProject,
  onOpenSubmit,
  onSelectCategory
}) {
  return (
    <div className="min-h-screen bg-white">
      {/* 1. Hero Section */}
      <Hero
        onExploreClick={() => onNavigate('explore')}
        onSubmitClick={onOpenSubmit}
      />

      {/* 2. Featured Projects */}
      <FeaturedProjects
        onSelectProject={onSelectProject}
        onViewAll={() => onNavigate('projects')}
      />

      {/* 3. Categories Spectrum */}
      <CategoriesSection
        onSelectCategory={(catId) => {
          if (catId === 'all') {
            onNavigate('explore');
          } else {
            onSelectCategory(catId);
          }
        }}
      />

      {/* 4. Black Manifesto Section */}
      <ManifestoBanner
        onLearnMore={() => onNavigate('about')}
      />

      {/* 5. Trending Content */}
      <TrendingSection
        onSelectContent={(item) => {
          onSelectCategory(item.categorySlug);
        }}
      />

      {/* 6. Latest Creations Feed */}
      <LatestCreations
        onOpenSubmit={onOpenSubmit}
        onSelectCreation={(item) => {
          onSelectCategory(item.categorySlug);
        }}
      />
    </div>
  );
}
