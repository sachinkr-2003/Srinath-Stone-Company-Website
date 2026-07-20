import React from 'react';
import { Truck, Zap, Activity } from 'lucide-react';

const features = [
  {
    title: "High-Capacity Crushers",
    description: "State-of-the-art primary and secondary crushers capable of processing hundreds of tons per hour, ensuring uninterrupted supply.",
    icon: <Zap className="text-construction-yellow" size={32} />,
  },
  {
    title: "Advanced Washing Plant",
    description: "Our VSI and washing setups guarantee silt-free, high-grade sand that meets strict construction standards.",
    icon: <Activity className="text-construction-yellow" size={32} />,
  },
  {
    title: "Massive Logistics Fleet",
    description: "A large fleet of dumpers and loaders operating 24/7 for immediate on-site delivery across the region.",
    icon: <Truck className="text-construction-yellow" size={32} />,
  }
];

const Infrastructure = () => {
  return (
    <main className="pt-24 pb-12 bg-white min-h-screen">
      
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
        <h1 className="text-4xl md:text-5xl font-display font-black text-industrial-950 mb-4">
          Our <span className="text-construction-yellow">Infrastructure</span>
        </h1>
        <p className="text-lg text-industrial-600 max-w-2xl mx-auto">
          Scale and reliability you can count on. Take a look at the machinery that powers our massive production capabilities.
        </p>
      </div>

      {/* Feature Highlights */}
      <div className="bg-industrial-950 py-16 mb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {features.map((feature, idx) => (
              <div key={idx} className="text-center">
                <div className="bg-industrial-900 inline-block p-4 rounded-full border border-industrial-800 mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-industrial-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-display font-bold text-industrial-950 mb-8 border-l-4 border-construction-yellow pl-4">Plant Gallery</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <img src="https://placehold.co/800x600/222222/ea580c?text=Srinath+Stone+Image" alt="Crusher Plant" className="w-full h-64 object-cover rounded-lg shadow-sm hover:shadow-md transition-shadow" />
          <img src="https://placehold.co/800x600/222222/ea580c?text=Srinath+Stone+Image" alt="Heavy Machinery" className="w-full h-64 object-cover rounded-lg shadow-sm hover:shadow-md transition-shadow" />
          <img src="https://placehold.co/800x600/222222/ea580c?text=Srinath+Stone+Image" alt="Stockpile" className="w-full h-64 object-cover rounded-lg shadow-sm hover:shadow-md transition-shadow" />
        </div>
      </div>

    </main>
  );
};

export default Infrastructure;
