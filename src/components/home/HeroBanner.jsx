import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone } from 'lucide-react';
import heroBg from '../../assets/crusher_plant.png';

const HeroBanner = () => {
  return (
    <div className="relative bg-industrial-950 overflow-hidden min-h-[60vh] pt-28 pb-20 md:pt-36 md:pb-28 lg:pt-40 lg:pb-32 flex items-center border-b border-industrial-800">
      {/* Background Image & Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-50"
        style={{ backgroundImage: `url(${heroBg})` }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-r from-industrial-950 via-industrial-950/80 to-transparent"></div>

      <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 xl:px-8 w-full">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-industrial-900/80 border border-industrial-800/50 backdrop-blur-md text-construction-orange text-xs md:text-sm font-bold tracking-wider uppercase mb-6 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-construction-orange animate-pulse"></span>
            Welcome to Srinath Stone Company
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-black text-white tracking-tight leading-[1.1] mb-6">
            Building the Future with <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-construction-orange to-construction-yellow">
              Premium Aggregates
            </span>
          </h1>
          
          <p className="text-base md:text-lg lg:text-xl text-industrial-300 mb-8 max-w-2xl leading-relaxed font-light">
            Your trusted partner for high-quality Wash Sand, M-Sand, Stone Dust, and precise aggregates. We power the foundations of modern infrastructure across the region with unmatched quality and scale.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/get-quote" className="inline-flex justify-center items-center gap-2 bg-gradient-to-r from-blue-600 via-black to-blue-600 animate-liquid text-white px-7 py-3.5 rounded-lg font-bold text-base shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_30px_rgba(37,99,235,0.7)] hover:-translate-y-0.5 transition-all duration-300">
              Get a Quote
              <ArrowRight size={18} />
            </Link>
            <Link to="/contact" className="inline-flex justify-center items-center gap-2 bg-white/5 backdrop-blur-md text-white border border-white/10 px-7 py-3.5 rounded-lg font-bold text-base hover:bg-white/10 hover:border-white/20 transition-colors duration-300">
              <Phone size={18} className="text-blue-400" />
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
