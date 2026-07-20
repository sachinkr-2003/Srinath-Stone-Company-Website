import React from 'react';
import { Link } from 'react-router-dom';
import { Image as ImageIcon } from 'lucide-react';

import crusherImg from '../../assets/crusher_plant.png';
import machineryImg from '../../assets/heavy_machinery.png';
import dumpTruckImg from '../../assets/dump_truck.png';
import agg20Img from '../../assets/aggregate_20mm.png';

const GalleryPreview = () => {
  return (
    <section className="py-10 bg-industrial-950">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 xl:px-8">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-6">
          <div className="max-w-2xl">
            <h2 className="text-construction-orange font-bold tracking-wider uppercase mb-1 text-xs">Gallery Preview</h2>
            <h3 className="text-3xl md:text-4xl font-display font-black text-white">
              Inside Our Operations
            </h3>
          </div>
          <Link to="/gallery" className="hidden md:inline-flex items-center gap-2 text-white font-bold hover:text-construction-orange transition-colors mt-2 md:mt-0 border border-industrial-700 px-5 py-2 rounded text-sm">
            <ImageIcon size={18} />
            View Full Gallery
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="col-span-1">
            <img src={crusherImg} alt="Plant Overview" className="w-full h-32 md:h-48 object-cover rounded-lg hover:opacity-90 transition-opacity" />
          </div>
          <div className="col-span-1">
            <img src={dumpTruckImg} alt="Stockpile" className="w-full h-32 md:h-48 object-cover rounded-lg hover:opacity-90 transition-opacity" />
          </div>
          <div className="col-span-1">
            <img src={machineryImg} alt="Machinery" className="w-full h-32 md:h-48 object-cover rounded-lg hover:opacity-90 transition-opacity" />
          </div>
          <div className="col-span-1">
             <img src={agg20Img} alt="Material" className="w-full h-32 md:h-48 object-cover rounded-lg hover:opacity-90 transition-opacity" />
          </div>
        </div>

      </div>
    </section>
  );
};

export default GalleryPreview;
