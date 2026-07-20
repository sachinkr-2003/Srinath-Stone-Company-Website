import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Camera, Image as ImageIcon } from 'lucide-react';

import crusherPlant from '../assets/crusher_plant.png';
import heavyMachinery from '../assets/heavy_machinery.png';
import dumpTruck from '../assets/dump_truck.png';
import highwayProject from '../assets/highway_project.png';
import agg10 from '../assets/aggregate_10mm.png';
import agg20 from '../assets/aggregate_20mm.png';
import mSand from '../assets/m_sand.png';
import stoneDust from '../assets/stone_dust.png';

const galleryImages = [
  { src: crusherPlant, cat: "Crusher Plant" },
  { src: agg20, cat: "Products" },
  { src: heavyMachinery, cat: "Machinery" },
  { src: dumpTruck, cat: "Trucks" },
  { src: highwayProject, cat: "Site Images" },
  { src: mSand, cat: "Products" },
  { src: crusherPlant, cat: "Site Images" },
  { src: stoneDust, cat: "Products" },
];

const categories = ["All", "Crusher Plant", "Machinery", "Trucks", "Products", "Site Images"];

const Gallery = () => {
  const [activeCat, setActiveCat] = useState("All");

  const filteredImages = activeCat === "All" 
    ? galleryImages 
    : galleryImages.filter(img => img.cat === activeCat);

  return (
    <main className="bg-industrial-50 min-h-screen">
      <Helmet>
        <title>Media Gallery | Srinath Stone Company</title>
        <meta name="description" content="Explore photos and videos of our crusher plant, machinery, trucks, and materials." />
      </Helmet>
      
      {/* Premium Dark Header */}
      <div className="bg-industrial-950 pt-24 pb-16 md:pt-32 md:pb-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-cover bg-center mix-blend-luminosity" style={{ backgroundImage: `url(${crusherPlant})` }}></div>
        <div className="absolute inset-0 bg-gradient-to-t from-industrial-950 via-industrial-950/80 to-transparent"></div>
        
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 xl:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-industrial-900/80 border border-industrial-800/50 backdrop-blur-md text-construction-orange text-xs font-bold tracking-wider uppercase mb-4 shadow-sm">
            <Camera size={14} className="text-construction-yellow" /> Our Media
          </div>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-display font-black text-white mb-4 tracking-tight">
            Media <span className="text-transparent bg-clip-text bg-gradient-to-r from-construction-orange to-construction-yellow">Gallery</span>
          </h1>
          <p className="text-base md:text-lg text-industrial-300 max-w-2xl mx-auto font-light leading-relaxed">
            A glimpse into our massive operations, state-of-the-art machinery, and the premium quality materials we produce daily.
          </p>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 xl:px-8 -mt-8 relative z-20 pb-16">
        
        {/* Filter categories */}
        <div className="bg-white p-3 rounded-2xl shadow-lg border border-industrial-100 flex flex-wrap justify-center gap-2 md:gap-3 mb-10 mx-auto max-w-4xl">
          {categories.map((cat, idx) => (
            <button 
              key={idx}
              onClick={() => setActiveCat(cat)}
              className={`px-4 py-1.5 rounded-xl font-bold text-xs md:text-sm transition-all duration-300 ${
                activeCat === cat 
                  ? 'bg-gradient-to-r from-construction-orange to-construction-yellow text-industrial-950 shadow-md' 
                  : 'bg-transparent text-industrial-600 hover:bg-industrial-50 hover:text-construction-orange'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Polished Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredImages.map((img, idx) => (
            <div key={idx} className="relative group overflow-hidden rounded-3xl shadow-md hover:shadow-2xl transition-all duration-500 cursor-pointer h-56 border border-industrial-100/50">
              <img 
                src={img.src} 
                alt={img.cat} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out" 
              />
              
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-industrial-950/90 via-industrial-950/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md text-white font-bold tracking-wider uppercase text-[10px] border border-white/30 px-3 py-1.5 rounded-lg mb-2">
                    <ImageIcon size={12} /> {img.cat}
                  </div>
                  <h3 className="text-white font-display font-bold text-lg">View Details</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {filteredImages.length === 0 && (
          <div className="text-center py-16 text-industrial-500">
            No images found for this category.
          </div>
        )}
        
      </div>
    </main>
  );
};

export default Gallery;
