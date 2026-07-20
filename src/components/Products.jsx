import React from 'react';
import { Layers, Mountain, ShieldCheck, Box } from 'lucide-react';

const products = [
  {
    id: 1,
    name: "Wash Sand",
    description: "Premium quality washed sand, free from silt and clay. Ideal for high-grade plastering, brickwork, and concrete mixes.",
    icon: <Layers size={32} className="text-construction-yellow" />,
    image: "https://placehold.co/800x600/222222/ea580c?text=Srinath+Stone+Image"
  },
  {
    id: 2,
    name: "Crush Sand (M-Sand)",
    description: "Manufactured sand specifically crushed for construction. Perfect alternative to river sand for RCC and block work.",
    icon: <Mountain size={32} className="text-construction-yellow" />,
    image: "https://placehold.co/800x600/222222/ea580c?text=Srinath+Stone+Image"
  },
  {
    id: 3,
    name: "Stone Powder (Dust)",
    description: "Fine stone dust produced during the crushing process. Highly effective for land filling, paving blocks, and specific concrete grades.",
    icon: <Box size={32} className="text-construction-yellow" />,
    image: "https://placehold.co/800x600/222222/ea580c?text=Srinath+Stone+Image"
  },
  {
    id: 4,
    name: "10mm Aggregate",
    description: "Finely crushed 10mm stone chips. Best suited for thin RCC slabs, column casting, and pre-cast concrete products.",
    icon: <ShieldCheck size={32} className="text-construction-yellow" />,
    image: "https://placehold.co/800x600/222222/ea580c?text=Srinath+Stone+Image"
  },
  {
    id: 5,
    name: "20mm Aggregate",
    description: "Standard 20mm crushed stone aggregate. The go-to choice for all general purpose concrete, foundations, and road base layers.",
    icon: <ShieldCheck size={32} className="text-construction-yellow" />,
    image: "https://placehold.co/800x600/222222/ea580c?text=Srinath+Stone+Image"
  },
  {
    id: 6,
    name: "60mm Aggregate (Boulders)",
    description: "Large 60mm stone boulders (Gitti). Essential for heavy load bearing foundations, railway track ballast, and deep filling.",
    icon: <ShieldCheck size={32} className="text-construction-yellow" />,
    image: "https://placehold.co/800x600/222222/ea580c?text=Srinath+Stone+Image"
  }
];

const Products = () => {
  return (
    <section id="products" className="py-24 bg-industrial-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-industrial-950 mb-4">Our Core Products</h2>
          <div className="h-1 w-24 bg-construction-yellow mx-auto mb-6"></div>
          <p className="text-lg text-industrial-600">
            We manufacture a complete range of aggregates and sand required for solid, long-lasting construction. Every batch is tested for strength and purity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border border-industrial-100 overflow-hidden group">
              <div className="h-48 overflow-hidden relative">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100"
                />
                <div className="absolute top-4 left-4 bg-white p-2 rounded shadow-sm">
                  {product.icon}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-industrial-950 mb-3">{product.name}</h3>
                <p className="text-industrial-600 mb-6 line-clamp-3">
                  {product.description}
                </p>
                <button className="text-construction-orange font-semibold flex items-center gap-2 hover:text-industrial-950 transition-colors">
                  Request Quote
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Products;
