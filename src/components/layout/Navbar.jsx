import React, { useState, useEffect } from 'react';
import { Search, Menu, X, Plus, Terminal, ArrowRight } from 'lucide-react';
import Button from '../ui/Button';

export default function Navbar({ 
  currentPage, 
  onNavigate, 
  onOpenSearch, 
  onOpenSubmit 
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on page change
  const handleNavClick = (pageId) => {
    onNavigate(pageId);
    setMobileMenuOpen(false);
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'explore', label: 'Explore' },
    { id: 'projects', label: 'Projects' },
    { id: 'creative', label: 'Creative' },
    { id: 'tools', label: 'Tools' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <header 
      className={`sticky top-0 z-40 w-full transition-all duration-200 border-b ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-md border-zinc-200/90 shadow-xs' 
          : 'bg-white border-zinc-200'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Brand Logo */}
          <div className="flex items-center gap-6">
            <button
              onClick={() => handleNavClick('home')}
              className="flex items-center gap-3 group text-left cursor-pointer focus:outline-hidden"
            >
              <div className="w-8 h-8 sm:w-9 sm:h-9 bg-zinc-950 text-white flex items-center justify-center font-display font-black text-lg tracking-wider rounded-sm group-hover:bg-zinc-800 transition-colors">
                A
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-lg sm:text-xl tracking-tight text-zinc-950 group-hover:text-zinc-700 transition-colors leading-none">
                  ANGEZK
                </span>
                <span className="text-[10px] tracking-widest text-zinc-500 font-mono uppercase mt-0.5">
                  Platform v1.0
                </span>
              </div>
            </button>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 ml-4 pl-6 border-l border-zinc-200">
              {navItems.map((item) => {
                const isActive = currentPage === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`px-3 py-1.5 text-xs uppercase tracking-wider font-semibold rounded-sm transition-all cursor-pointer ${
                      isActive
                        ? 'text-zinc-950 bg-zinc-100 shadow-2xs font-bold border-b-2 border-zinc-950'
                        : 'text-zinc-600 hover:text-zinc-950 hover:bg-zinc-50'
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
            </nav>
          </div>

          {/* Right Action Controls */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Quick Search Trigger */}
            <button
              onClick={onOpenSearch}
              className="flex items-center gap-2 px-3 py-2 text-xs text-zinc-500 bg-zinc-100 hover:bg-zinc-200/80 text-zinc-800 rounded-sm border border-zinc-200 transition-all cursor-pointer group"
              title="Search Angezk (Ctrl+K)"
            >
              <Search className="w-3.5 h-3.5 text-zinc-600 group-hover:text-zinc-950" />
              <span className="hidden sm:inline font-medium">Search...</span>
              <kbd className="hidden sm:inline-block px-1.5 py-0.5 text-[10px] font-mono bg-white text-zinc-500 border border-zinc-200 rounded-xs shadow-2xs">
                ⌘K
              </kbd>
            </button>

            {/* Submit Project CTA */}
            <Button
              variant="primary"
              size="sm"
              onClick={onOpenSubmit}
              icon={Plus}
              className="hidden sm:inline-flex text-xs"
            >
              Submit Project
            </Button>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-zinc-800 hover:text-zinc-950 hover:bg-zinc-100 rounded-sm cursor-pointer"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-zinc-200 bg-white px-4 pt-3 pb-6 space-y-3 shadow-lg animate-in slide-in-from-top-2 duration-150">
          <div className="grid grid-cols-2 gap-1 pt-1">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`flex items-center justify-between px-3 py-2.5 text-xs font-semibold uppercase tracking-wider rounded-sm text-left transition-colors cursor-pointer ${
                    isActive
                      ? 'bg-zinc-950 text-white font-bold'
                      : 'text-zinc-700 hover:bg-zinc-100'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && <span className="w-1.5 h-1.5 bg-white rounded-full"></span>}
                </button>
              );
            })}
          </div>

          <div className="pt-3 border-t border-zinc-200 flex flex-col gap-2">
            <Button
              variant="primary"
              size="md"
              className="w-full justify-center text-xs"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenSubmit();
              }}
              icon={Plus}
            >
              Submit Project
            </Button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenSearch();
              }}
              className="flex items-center justify-center gap-2 w-full py-2.5 text-xs font-medium text-zinc-700 bg-zinc-100 rounded-sm border border-zinc-200"
            >
              <Search className="w-4 h-4" />
              <span>Search platform...</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
