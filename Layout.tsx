import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Disc } from 'lucide-react';
import { NavItem } from '../types';

interface LayoutProps {
  children: React.ReactNode;
}

const navItems: NavItem[] = [
  { label: 'HOME', path: '/' },
  { label: 'ABOUT', path: '/about' },
  { label: 'CAREERS', path: '/careers' },
  { label: 'CONTACT', path: '/contact' },
];

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col bg-black text-white selection:bg-white selection:text-black">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-black/80 backdrop-blur-md border-b border-neutral-900 h-16 sm:h-20 flex items-center justify-between px-6 sm:px-12">
        <Link to="/" className="flex items-center gap-2 group">
          <Disc className="w-6 h-6 animate-[spin_10s_linear_infinite] text-white group-hover:scale-110 transition-transform" />
          <span className="text-xl tracking-widest font-bold">MAGLEV</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8 lg:gap-12">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-sm tracking-widest transition-colors duration-300 relative ${
                location.pathname === item.path ? 'text-white' : 'text-neutral-500 hover:text-white'
              }`}
            >
              {item.label}
              {location.pathname === item.path && (
                <span className="absolute -bottom-2 left-0 w-full h-[1px] bg-white animate-pulse" />
              )}
            </Link>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 bg-black flex flex-col items-center justify-center space-y-8 animate-fade-in md:hidden">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setMobileMenuOpen(false)}
              className="text-2xl tracking-widest hover:text-neutral-400"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}

      {/* Main Content */}
      <main className="flex-1 pt-20">
        {children}
      </main>

      {/* Footer */}
      <footer className="border-t border-neutral-900 py-12 px-6 sm:px-12 bg-black mt-auto">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
          <div className="flex flex-col items-center md:items-start gap-2">
            <span className="font-bold tracking-widest text-lg">MAGLEV SYSTEMS</span>
            <span className="text-neutral-500 text-xs">EST. 2025 // SAN FRANCISCO</span>
          </div>
          
          <div className="flex gap-6 text-sm text-neutral-400">
            <a href="#" className="hover:text-white transition-colors">INSTAGRAM</a>
            <a href="#" className="hover:text-white transition-colors">TWITTER</a>
            <a href="#" className="hover:text-white transition-colors">LINKEDIN</a>
          </div>

          <div className="text-neutral-600 text-xs text-center md:text-right">
            <p>© 2025 MAGLEV DINING SYSTEMS.</p>
            <p>ALL RIGHTS RESERVED.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
