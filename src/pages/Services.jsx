import { Helmet } from 'react-helmet-async';
import { Settings, Truck, Building2, Map, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroBg from '../assets/crusher_plant.png';

const servicesList = [
  { 
    title: "Stone Crushing", 
    desc: "Our core competency. We operate high-capacity multi-stage crushing plants equipped with primary jaw crushers, secondary cone crushers, and advanced Vertical Shaft Impactors (VSI) to produce perfectly cubical aggregates and M-Sand at massive scale.", 
    icon: <Settings size={32} className="group-hover:text-white transition-colors duration-300" />,
    advantages: ["High output capacity", "Perfect cubical shape", "Consistent gradation"]
  },
  { 
    title: "Material Transportation", 
    desc: "A captive logistics fleet comprising over 100+ heavy-duty dumpers ensures that material delivery is never a bottleneck for your project. We manage the entire supply chain from plant to your construction site.", 
    icon: <Truck size={32} className="group-hover:text-white transition-colors duration-300" />,
    advantages: ["24/7 Dispatch", "GPS Tracked Fleet", "Zero delay guarantee"]
  },
  { 
    title: "Bulk Supply Contracts", 
    desc: "We specialize in fulfilling massive bulk supply contracts for government infrastructure projects, highways, and large real estate developments. We lock in rates and guarantee uninterrupted supply for years.", 
    icon: <Building2 size={32} className="group-hover:text-white transition-colors duration-300" />,
    advantages: ["Fixed rate contracts", "Dedicated account managers", "Priority dispatch"]
  },
  { 
    title: "Earthwork & Road Base", 
    desc: "Beyond just aggregates, we supply critical base materials like Granular Sub-Base (GSB) and Wet Mix Macadam (WMM) pre-mixed to exact specifications, ready to be laid for highways.", 
    icon: <Map size={32} className="group-hover:text-white transition-colors duration-300" />,
    advantages: ["Pre-mixed WMM", "MoRTH compliant GSB", "Direct paving ready"]
  }
];

const Services = () => {
  return (
    <main className="bg-industrial-50 min-h-screen">
      <Helmet>
        <title>Our Services | Srinath Stone Company</title>
        <meta name="description" content="Explore our services including Stone Crushing, Material Supply, Transportation, and Earthwork Support." />
      </Helmet>
      
      {/* Premium Dark Header */}
      <div className="bg-industrial-950 pt-24 pb-16 md:pt-32 md:pb-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-cover bg-center mix-blend-luminosity" style={{ backgroundImage: `url(${heroBg})` }}></div>
        <div className="absolute inset-0 bg-gradient-to-t from-industrial-950 via-industrial-950/80 to-transparent"></div>
        
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 xl:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-industrial-900/80 border border-industrial-800/50 backdrop-blur-md text-construction-orange text-xs font-bold tracking-wider uppercase mb-4 shadow-sm">
            Core Expertise
          </div>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-display font-black text-white mb-4 tracking-tight">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-construction-orange to-construction-yellow">Services</span>
          </h1>
          <p className="text-base md:text-lg text-industrial-300 max-w-2xl mx-auto font-light leading-relaxed">
            We don't just sell stones; we offer end-to-end material solutions. From extraction and crushing to logistics and site delivery, we handle the heavy lifting.
          </p>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 xl:px-8 -mt-8 relative z-20 pb-16">
        
        {/* Interactive Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-16">
          {servicesList.map((service, idx) => (
            <div key={idx} className="bg-white p-6 md:p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-industrial-100 group hover:-translate-y-2 relative overflow-hidden">
              
              {/* Background Accent */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-construction-orange opacity-0 group-hover:opacity-5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2 transition-opacity duration-500"></div>

              <div className="mb-6 w-16 h-16 bg-industrial-50 rounded-2xl flex items-center justify-center text-construction-orange group-hover:bg-construction-orange transition-colors duration-500 shadow-sm border border-industrial-100">
                {service.icon}
              </div>
              
              <h2 className="text-2xl md:text-3xl font-display font-black text-industrial-950 mb-3 group-hover:text-construction-orange transition-colors duration-300">
                {service.title}
              </h2>
              
              <p className="text-base md:text-lg text-industrial-600 mb-6 leading-relaxed font-light min-h-[100px]">
                {service.desc}
              </p>
              
              <div className="bg-industrial-50/50 p-5 rounded-2xl border border-industrial-100/50">
                <h4 className="font-bold text-industrial-900 mb-3 text-sm uppercase tracking-widest flex items-center gap-2">
                  Key Advantages
                </h4>
                <ul className="space-y-2">
                  {service.advantages.map((adv, aIdx) => (
                    <li key={aIdx} className="flex items-center gap-3 text-industrial-700 font-medium text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-construction-orange to-construction-yellow shrink-0 group-hover:scale-150 transition-transform duration-300"></div>
                      {adv}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Premium CTA Section */}
        <div className="bg-industrial-950 rounded-3xl p-8 md:p-12 lg:p-16 text-center text-white relative overflow-hidden shadow-2xl">
           <div className="absolute inset-0 bg-cover bg-center opacity-20 mix-blend-luminosity transform hover:scale-105 transition-transform duration-1000" style={{ backgroundImage: `url(${heroBg})` }}></div>
           <div className="absolute inset-0 bg-gradient-to-t from-industrial-950 via-industrial-950/60 to-transparent"></div>
           
           <div className="relative z-10 max-w-3xl mx-auto">
             <div className="w-12 h-1 bg-construction-orange mx-auto mb-6"></div>
             <h3 className="text-2xl md:text-4xl font-display font-black mb-4">Require a Custom Solution?</h3>
             <p className="text-industrial-300 text-base md:text-lg font-light mb-8 leading-relaxed">
               If you have a massive project requiring dedicated crushing plants installed on-site, we have the capability to deploy mobile crushing units tailored to your project timeline and volume.
             </p>
             <Link to="/contact" className="inline-flex justify-center items-center gap-2 bg-gradient-to-r from-blue-600 via-black to-blue-600 animate-liquid text-white font-bold px-8 py-4 rounded-xl shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_30px_rgba(37,99,235,0.7)] transition-all hover:-translate-y-1 text-base">
              Discuss Your Requirements
              <ArrowRight size={18} />
            </Link>
           </div>
        </div>

      </div>
    </main>
  );
};

export default Services;
