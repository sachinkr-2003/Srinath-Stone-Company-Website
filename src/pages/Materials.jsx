import React from 'react';
import Products from '../components/Products';

const Materials = () => {
  return (
    <main className="pt-24 pb-12 bg-industrial-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center">
        <h1 className="text-4xl md:text-5xl font-display font-black text-industrial-950 mb-4">
          All <span className="text-construction-yellow">Materials</span>
        </h1>
        <p className="text-lg text-industrial-600 max-w-2xl mx-auto">
          Browse our complete catalog of high-quality construction aggregates and sand. We guarantee consistent sizing and zero impurities.
        </p>
      </div>
      <Products />
    </main>
  );
};

export default Materials;
