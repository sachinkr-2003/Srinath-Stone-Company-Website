import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

import stoneDust from '../../assets/stone_dust.png';
import mSand from '../../assets/m_sand.png';
import agg10 from '../../assets/aggregate_10mm.png';
import agg20 from '../../assets/aggregate_20mm.png';

const products = [
  { name: "Stone Dust", desc: "Fine crushed stone for filling and paving.", img: stoneDust },
  { name: "M Sand", desc: "Manufactured sand for high-strength concrete.", img: mSand },
  { name: "10 MM Aggregate", desc: "Ideal for thin RCC slabs and columns.", img: agg10 },
  { name: "20 MM Aggregate", desc: "Standard size for all general concrete work.", img: agg20 },
  { name: "40 MM Aggregate", desc: "For heavy foundations and railway ballast.", img: agg20 },
  { name: "GSB", desc: "Granular Sub-Base for road construction.", img: stoneDust },
  { name: "WMM", desc: "Wet Mix Macadam for durable road bases.", img: agg20 }
];

const ProductsOverview = () => {
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 xl:px-8">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-10">
          <div className="max-w-2xl">
            <h2 className="text-construction-orange font-bold tracking-wider uppercase mb-2 text-sm">Our Products</h2>
            <h3 className="text-3xl md:text-5xl font-display font-black text-industrial-950">
              Premium Construction Materials
            </h3>
          </div>
          <Link to="/products" className="hidden md:inline-flex items-center gap-2 text-industrial-950 font-bold hover:text-construction-orange transition-colors mt-4 md:mt-0">
            View All Products
            <ArrowRight size={20} />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.slice(0, 4).map((product, idx) => (
            <Link to="/products" key={idx} className="group relative rounded-xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300">
              <div className="h-56 md:h-64 w-full relative">
                <img src={product.img} alt={product.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-industrial-950 via-industrial-950/40 to-transparent"></div>
              </div>
              <div className="absolute bottom-0 left-0 w-full p-6">
                <h4 className="text-white font-bold text-xl mb-1">{product.name}</h4>
                <p className="text-industrial-300 text-sm">{product.desc}</p>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-8 text-center md:hidden">
          <Link to="/products" className="inline-flex items-center gap-2 text-industrial-950 font-bold hover:text-construction-orange transition-colors">
            View All Products
            <ArrowRight size={20} />
          </Link>
        </div>

      </div>
    </section>
  );
};

export default ProductsOverview;
