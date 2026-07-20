import React from 'react';
import { Settings, Truck, Building2, HardHat } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  { icon: <Settings size={36} />, title: "Stone Crushing", desc: "High-volume stone crushing using primary jaw crushers and secondary VSI units." },
  { icon: <Truck size={36} />, title: "Material Transportation", desc: "Captive fleet of 100+ dumpers ensuring timely delivery to any site." },
  { icon: <Building2 size={36} />, title: "Bulk Supply", desc: "Specialized in catering to mega infrastructure projects and government tenders." },
  { icon: <HardHat size={36} />, title: "Earthwork Support", desc: "Providing base materials like GSB and WMM for large scale road construction." }
];

const ServicesOverview = () => {
  return (
    <section className="py-12 md:py-16 bg-industrial-950 text-white relative overflow-hidden">
      {/* Abstract Background */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-industrial-900 skew-x-12 translate-x-32 opacity-50"></div>
      
      <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 xl:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-construction-orange font-bold tracking-wider uppercase mb-2 text-sm">Our Services</h2>
          <h3 className="text-3xl md:text-4xl font-display font-black mb-4">
            End-to-End Material Solutions
          </h3>
          <p className="text-base text-industrial-400">
            From extraction and crushing to logistics and delivery, we handle the entire supply chain.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, idx) => (
            <div key={idx} className="bg-industrial-900 border border-industrial-800 p-6 rounded-xl hover:border-construction-orange transition-colors duration-300 group">
              <div className="text-industrial-500 mb-5 group-hover:text-construction-orange transition-colors duration-300">
                {service.icon}
              </div>
              <h4 className="text-lg font-bold mb-2">{service.title}</h4>
              <p className="text-industrial-400 text-sm leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-10 text-center">
        <Link to="/services" className="inline-flex justify-center items-center gap-2 bg-gradient-to-r from-blue-600 via-black to-blue-600 animate-liquid text-white px-7 py-3 rounded-md font-bold text-base shadow-[0_0_15px_rgba(37,99,235,0.4)] hover:shadow-[0_0_25px_rgba(37,99,235,0.7)] transition-all duration-300 hover:-translate-y-0.5">
          View All Services
          </Link>
        </div>

      </div>
    </section>
  );
};

export default ServicesOverview;
