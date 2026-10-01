import React, { useState, useEffect } from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import SearchModal from './components/layout/SearchModal';
import ProjectDetailModal from './components/shared/ProjectDetailModal';
import SubmitProjectModal from './components/shared/SubmitProjectModal';

// Pages
import HomePage from './pages/HomePage';
import ExplorePage from './pages/ExplorePage';
import ProjectsPage from './pages/ProjectsPage';
import CreativePage from './pages/CreativePage';
import ToolsPage from './pages/ToolsPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedCategoryFilter, setSelectedCategoryFilter] = useState('all');
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [submitModalOpen, setSubmitModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  // Sync hash routing on mount and hashchange
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace('#', '').toLowerCase();
      const validPages = ['home', 'explore', 'projects', 'creative', 'tools', 'about', 'contact'];
      if (validPages.includes(hash)) {
        setCurrentPage(hash);
      }
    };

    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  // Global keyboard shortcut for search (Cmd+K / Ctrl+K)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setSearchModalOpen((prev) => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Navigation handler
  const handleNavigate = (pageId) => {
    setCurrentPage(pageId);
    window.location.hash = pageId;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Category selection handler (from home or search)
  const handleSelectCategory = (catId) => {
    setSelectedCategoryFilter(catId);
    handleNavigate('explore');
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-zinc-950 font-sans selection:bg-zinc-950 selection:text-white">
      {/* Top Main Navigation */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenSearch={() => setSearchModalOpen(true)}
        onOpenSubmit={() => setSubmitModalOpen(true)}
      />

      {/* Main Page Content Body */}
      <main className="grow">
        {currentPage === 'home' && (
          <HomePage
            onNavigate={handleNavigate}
            onSelectProject={(proj) => setSelectedProject(proj)}
            onOpenSubmit={() => setSubmitModalOpen(true)}
            onSelectCategory={handleSelectCategory}
          />
        )}

        {currentPage === 'explore' && (
          <ExplorePage
            key={selectedCategoryFilter}
            initialCategory={selectedCategoryFilter}
            onSelectProject={(proj) => setSelectedProject(proj)}
            onOpenSubmit={() => setSubmitModalOpen(true)}
          />
        )}

        {currentPage === 'projects' && (
          <ProjectsPage
            onSelectProject={(proj) => setSelectedProject(proj)}
            onOpenSubmit={() => setSubmitModalOpen(true)}
          />
        )}

        {currentPage === 'creative' && (
          <CreativePage
            onOpenSubmit={() => setSubmitModalOpen(true)}
          />
        )}

        {currentPage === 'tools' && (
          <ToolsPage />
        )}

        {currentPage === 'about' && (
          <AboutPage
            onNavigate={handleNavigate}
            onOpenSubmit={() => setSubmitModalOpen(true)}
          />
        )}

        {currentPage === 'contact' && (
          <ContactPage
            onNavigateToFaq={() => handleNavigate('about')}
          />
        )}
      </main>

      {/* Global Monochrome Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Global Modals */}
      <SearchModal
        isOpen={searchModalOpen}
        onClose={() => setSearchModalOpen(false)}
        onSelectProject={(proj) => setSelectedProject(proj)}
        onNavigateCategory={handleSelectCategory}
      />

      <SubmitProjectModal
        isOpen={submitModalOpen}
        onClose={() => setSubmitModalOpen(false)}
      />

      <ProjectDetailModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}
