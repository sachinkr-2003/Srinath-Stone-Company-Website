import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HardHat, Menu, X, ChevronRight } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Products', path: '/products' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact Us', path: '/contact' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-industrial-950/95 backdrop-blur-md shadow-[0_4px_20px_rgb(0,0,0,0.4)] py-2 border-b border-white/5' 
          : 'bg-industrial-950 py-4'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 xl:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo and Company Name */}
          <Link to="/" className="flex items-center gap-3 cursor-pointer group shrink-0">
            <div className="bg-gradient-to-br from-construction-orange to-construction-yellow p-2 rounded-lg shadow-lg group-hover:scale-105 transition-transform duration-300">
              <HardHat className="text-industrial-950" size={24} strokeWidth={2.5} />
            </div>
            <div className="flex flex-col">
              <h1 className="text-xl md:text-2xl font-display font-black text-white tracking-tight leading-none group-hover:text-construction-orange transition-colors duration-300">
                SRINATH <span className="font-light opacity-90 hidden sm:inline">STONE</span>
              </h1>
              <p className="text-[0.6rem] text-industrial-300 font-bold tracking-[0.2em] uppercase mt-0.5 hidden sm:block">
                Crusher & Supplier
              </p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navLinks.map((item) => (
              <Link 
                key={item.name}
                to={item.path} 
                className={`relative px-2 xl:px-3 py-2 text-[13px] xl:text-sm font-semibold transition-colors duration-300 group overflow-hidden whitespace-nowrap ${
                  location.pathname === item.path ? 'text-construction-orange' : 'text-industrial-200 hover:text-white'
                }`}
              >
                {item.name}
                <span className={`absolute bottom-0 left-0 w-full h-[2px] bg-construction-orange origin-left transition-transform duration-300 ease-out ${
                  location.pathname === item.path ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                }`}></span>
              </Link>
            ))}
          </div>

          {/* Right Action Button */}
          <div className="hidden md:flex items-center shrink-0 ml-4">
            <Link 
              to="/get-quote" 
              className="relative inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 via-black to-blue-600 animate-liquid text-white px-5 py-2.5 rounded-md font-bold text-sm shadow-[0_0_15px_rgba(37,99,235,0.4)] hover:shadow-[0_0_25px_rgba(37,99,235,0.7)] hover:-translate-y-0.5 transition-all duration-300 overflow-hidden group"
            >
              <span className="relative z-10">Get Quote</span>
              <ChevronRight size={16} className="relative z-10 group-hover:translate-x-1 transition-transform" />
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-industrial-200 hover:text-white p-2 focus:outline-none"
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div 
        className={`lg:hidden absolute top-full left-0 w-full bg-industrial-900 border-t border-industrial-800 transition-all duration-300 origin-top overflow-y-auto max-h-[80vh] ${
          mobileMenuOpen ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0 h-0'
        }`}
      >
        <div className="px-4 pt-2 pb-6 space-y-1 shadow-2xl">
          {navLinks.map((item) => (
            <Link 
              key={item.name}
              to={item.path} 
              className={`block px-4 py-3 text-sm font-medium rounded-md transition-colors ${
                location.pathname === item.path ? 'bg-industrial-800 text-construction-orange' : 'text-industrial-200 hover:bg-industrial-800 hover:text-construction-orange'
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <div className="pt-4 mt-2 border-t border-industrial-800 px-4">
            <Link 
              to="/get-quote" 
              className="flex items-center justify-center w-full bg-construction-orange text-white px-6 py-3 rounded-md font-bold text-base shadow-lg"
              onClick={() => setMobileMenuOpen(false)}
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
