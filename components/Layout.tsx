
import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, ArrowRight, Sparkles } from 'lucide-react';
import QuoteModal from './QuoteModal';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle smooth scroll for anchor links
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    if (path.startsWith('/#')) {
      const id = path.substring(2);
      const element = document.getElementById(id);

      if (location.pathname === '/') {
        e.preventDefault();
        if (element) {
          const offset = 80; // Account for sticky header
          const bodyRect = document.body.getBoundingClientRect().top;
          const elementRect = element.getBoundingClientRect().top;
          const elementPosition = elementRect - bodyRect;
          const offsetPosition = elementPosition - offset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
        setIsMenuOpen(false);
      } else {
        navigate('/');
        setTimeout(() => {
          const el = document.getElementById(id);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
        setIsMenuOpen(false);
      }
    }
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/#services' },
    { name: 'Portfolio', path: '/#portfolio' },
    { name: 'AI Vision', path: '/ai-vision' },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'bg-white/80 backdrop-blur-xl py-4 shadow-sm border-b border-slate-100' : 'bg-transparent py-6'
      }`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center group-hover:rotate-12 transition-transform shadow-lg shadow-indigo-200">
              <Sparkles className="text-white w-5 h-5" />
            </div>
            <span className="text-2xl font-serif font-bold tracking-tight text-slate-900">
              Eventify
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path}
                onClick={(e) => handleNavClick(e, link.path)}
                className={`text-sm font-semibold transition-colors ${
                  location.pathname === link.path 
                    ? 'text-indigo-600' 
                    : 'text-slate-600 hover:text-indigo-600'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <button 
              onClick={() => setIsQuoteModalOpen(true)}
              className="bg-slate-900 text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-indigo-600 transition-all shadow-xl shadow-slate-200 hover:shadow-indigo-200 active:scale-95"
            >
              Get a Quote
            </button>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden p-2 text-slate-600 hover:text-indigo-600 transition-colors" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`absolute top-full left-0 right-0 bg-white/95 backdrop-blur-xl border-b border-slate-100 p-8 flex flex-col gap-6 md:hidden transition-all duration-300 transform ${
          isMenuOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-4 invisible'
        }`}>
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path} 
              onClick={(e) => {
                handleNavClick(e, link.path);
                if (!link.path.startsWith('/#')) setIsMenuOpen(false);
              }}
              className="text-xl font-bold text-slate-900 hover:text-indigo-600 transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <button 
            onClick={() => {
              setIsMenuOpen(false);
              setIsQuoteModalOpen(true);
            }}
            className="bg-indigo-600 text-white py-4 rounded-2xl font-bold shadow-lg shadow-indigo-200"
          >
            Get a Quote
          </button>
        </div>
      </nav>

      <main>{children}</main>

      {/* Quote Modal */}
      <QuoteModal 
        isOpen={isQuoteModalOpen} 
        onClose={() => setIsQuoteModalOpen(false)} 
      />

      {/* Footer */}
      <footer className="bg-slate-50 border-t border-slate-200 py-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-16">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <Sparkles className="text-indigo-600 w-6 h-6" />
              <span className="text-2xl font-serif font-bold">Eventify</span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
              Crafting unforgettable moments and world-class experiences for those who demand excellence in every detail.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-6 text-slate-900 uppercase tracking-widest text-xs">Expertise</h4>
            <ul className="space-y-4 text-sm text-slate-500 font-medium">
              <li className="hover:text-indigo-600 cursor-pointer transition-colors">Weddings & Galas</li>
              <li className="hover:text-indigo-600 cursor-pointer transition-colors">Brand Activations</li>
              <li className="hover:text-indigo-600 cursor-pointer transition-colors">Corporate Summits</li>
              <li className="hover:text-indigo-600 cursor-pointer transition-colors">Private Celebrations</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-6 text-slate-900 uppercase tracking-widest text-xs">Company</h4>
            <ul className="space-y-4 text-sm text-slate-500 font-medium">
              <li className="hover:text-indigo-600 cursor-pointer transition-colors">Our Story</li>
              <li className="hover:text-indigo-600 cursor-pointer transition-colors">Portfolio</li>
              <li className="hover:text-indigo-600 cursor-pointer transition-colors">Journal</li>
              <li className="hover:text-indigo-600 cursor-pointer transition-colors">Careers</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-6 text-slate-900 uppercase tracking-widest text-xs">Stay Connected</h4>
            <p className="text-xs text-slate-400 mb-4 font-medium italic">Subscribe for exclusive insights</p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Your email" 
                className="bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm w-full focus:outline-none focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500/30 transition-all"
              />
              <button className="p-3 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-100"><ArrowRight className="w-5 h-5" /></button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
