import React from 'react';
import { ArrowRight, Truck } from 'lucide-react';

const Hero = () => {
  return (
    <div id="home" className="relative bg-industrial-900 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[url('https://placehold.co/800x600/222222/ea580c?text=Srinath+Stone+Image')] bg-cover bg-center opacity-30 mix-blend-overlay"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-industrial-950 via-industrial-900/80 to-transparent"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-48">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-industrial-800 border border-industrial-700 text-construction-yellow text-sm font-semibold mb-6">
            <Truck size={16} />
            <span>High Capacity Production & Delivery</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-extrabold text-white tracking-tight leading-tight mb-6">
            Premium Aggregates & <br/>
            <span className="text-construction-yellow">Construction Materials</span>
          </h1>
          
          <p className="text-lg md:text-xl text-industrial-200 mb-10 max-w-xl leading-relaxed">
            Srinath Stone Company is your trusted partner for high-quality Wash Sand, Crush Sand, Stone Powder, and precise Aggregates (10mm, 20mm, 60mm). We power the foundations of modern infrastructure.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#products" className="inline-flex justify-center items-center gap-2 bg-construction-yellow text-industrial-950 px-8 py-4 rounded-md font-bold text-lg hover:bg-yellow-400 transition-colors duration-200 group">
              View Our Materials
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#contact" className="inline-flex justify-center items-center gap-2 bg-industrial-800 text-white border border-industrial-700 px-8 py-4 rounded-md font-bold text-lg hover:bg-industrial-700 transition-colors duration-200">
              Get a Quote
            </a>
          </div>
        </div>
      </div>
      
      {/* Quick Stats Bar */}
      <div className="relative bg-industrial-950 border-t border-industrial-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-industrial-800">
            <div>
              <p className="text-3xl font-display font-bold text-white mb-1">500+</p>
              <p className="text-industrial-400 font-medium">Tons Daily Capacity</p>
            </div>
            <div>
              <p className="text-3xl font-display font-bold text-white mb-1">100%</p>
              <p className="text-industrial-400 font-medium">Quality Tested</p>
            </div>
            <div>
              <p className="text-3xl font-display font-bold text-white mb-1">24/7</p>
              <p className="text-industrial-400 font-medium">Loading & Dispatch</p>
            </div>
            <div>
              <p className="text-3xl font-display font-bold text-white mb-1">15+</p>
              <p className="text-industrial-400 font-medium">Years Experience</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
