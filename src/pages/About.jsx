import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Target, Flag, Shield, Activity, Users, Truck, CheckCircle2 } from 'lucide-react';
import heroBg from '../assets/crusher_plant.png';
import crusherImg from '../assets/crusher_plant.png';

const About = () => {
  return (
    <main className="bg-industrial-50 min-h-screen">
      <Helmet>
        <title>About Us | Srinath Stone Company</title>
        <meta name="description" content="Learn about Srinath Stone Company, our history, mission, vision, and state-of-the-art infrastructure." />
      </Helmet>
      
      {/* Page Header */}
      <div className="bg-industrial-950 pt-32 pb-24 md:pt-40 md:pb-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-cover bg-center mix-blend-luminosity" style={{ backgroundImage: `url(${heroBg})` }}></div>
        <div className="absolute inset-0 bg-gradient-to-t from-industrial-950 via-industrial-950/80 to-transparent"></div>
        
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 xl:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-industrial-900/80 border border-industrial-800/50 backdrop-blur-md text-construction-orange text-xs font-bold tracking-wider uppercase mb-6 shadow-sm">
            Company Overview
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-display font-black text-white mb-6 tracking-tight">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-construction-orange to-construction-yellow">Srinath Stone</span>
          </h1>
          <p className="text-lg md:text-xl text-industrial-300 max-w-3xl mx-auto font-light leading-relaxed">
            Building the foundations of modern India with premium aggregates, unwavering quality, and reliable supply.
          </p>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 xl:px-8 -mt-8 relative z-20 pb-24">
        
        {/* History & Story */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 lg:p-16 mb-24 border border-industrial-100">
          <div className="flex flex-col xl:flex-row gap-16 items-center">
            <div className="w-full xl:w-1/2">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-1 bg-construction-orange"></div>
                <h2 className="text-3xl md:text-4xl font-display font-black text-industrial-950">Our History</h2>
              </div>
              <div className="prose prose-lg md:prose-xl text-industrial-600 max-w-none">
                <p className="font-medium text-industrial-800 text-xl md:text-2xl leading-relaxed mb-6">
                  Founded over 15 years ago, we started with a single primary jaw crusher and a vision to supply high-quality aggregates.
                </p>
                <p>
                  Today, we have grown into one of the largest and most technologically advanced crushing plants in the region. Our expansion includes multi-stage VSI crushing units, sand washing plants, and a massive captive logistics fleet.
                </p>
                <p>
                  We take pride in having supplied millions of tons of material to national highways, massive real estate developments, and critical government infrastructure projects.
                </p>
                <ul className="mt-8 space-y-3">
                  {['15+ Years Experience', 'Millions of Tons Supplied', 'Trusted by Top Contractors'].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-industrial-800 font-semibold">
                      <CheckCircle2 className="text-construction-orange" size={20} /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="w-full xl:w-1/2 relative group">
              <div className="absolute inset-0 bg-gradient-to-tr from-construction-orange to-construction-yellow rounded-2xl transform translate-x-4 translate-y-4 group-hover:translate-x-6 group-hover:translate-y-6 transition-transform duration-500"></div>
              <img src={crusherImg} alt="Company History" className="relative rounded-2xl shadow-lg w-full h-[400px] md:h-[500px] object-cover border-4 border-white" />
            </div>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          <div className="bg-industrial-950 p-10 md:p-12 rounded-2xl shadow-2xl relative overflow-hidden group hover:-translate-y-2 transition-transform duration-300">
            <div className="absolute top-0 right-0 w-64 h-64 bg-construction-orange opacity-5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
            <div className="bg-industrial-900/50 w-20 h-20 rounded-2xl flex items-center justify-center mb-8 border border-industrial-800 group-hover:bg-construction-orange transition-colors duration-300">
              <Target className="text-construction-orange group-hover:text-white transition-colors duration-300" size={40} />
            </div>
            <h3 className="text-3xl font-black text-white mb-6">Our Mission</h3>
            <p className="text-industrial-300 text-lg leading-relaxed font-light">
              To consistently manufacture and supply premium quality construction aggregates and M-Sand while maintaining the highest standards of operational efficiency, environmental responsibility, and customer satisfaction.
            </p>
          </div>

          <div className="bg-white p-10 md:p-12 rounded-2xl shadow-xl border border-industrial-100 relative overflow-hidden group hover:-translate-y-2 transition-transform duration-300">
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-construction-yellow opacity-10 rounded-full blur-3xl transform translate-x-1/3 translate-y-1/3"></div>
            <div className="bg-industrial-50 w-20 h-20 rounded-2xl flex items-center justify-center mb-8 border border-industrial-100 group-hover:bg-construction-yellow transition-colors duration-300">
              <Flag className="text-construction-orange group-hover:text-industrial-950 transition-colors duration-300" size={40} />
            </div>
            <h3 className="text-3xl font-black text-industrial-950 mb-6">Our Vision</h3>
            <p className="text-industrial-600 text-lg leading-relaxed font-light">
              To be the undisputed leader and most trusted partner in the construction materials sector, driving infrastructure growth across the nation through innovation, scale, and uncompromising quality.
            </p>
          </div>
        </div>

        {/* Infrastructure details */}
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-construction-orange tracking-widest uppercase mb-2">Our Capabilities</h2>
          <h3 className="text-3xl md:text-5xl font-display font-black text-industrial-950">Infrastructure & Scale</h3>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: Activity, title: "Advanced VSI Plants", desc: "Vertical Shaft Impactors ensuring perfectly cubical aggregate shapes for high-strength concrete." },
            { icon: Shield, title: "Quality Labs", desc: "In-house testing laboratories continuously checking silt content, flakiness, and gradation." },
            { icon: Truck, title: "Captive Fleet", desc: "Over 100+ heavy-duty dumpers ready for immediate dispatch 24 hours a day." },
            { icon: Users, title: "Expert Team", desc: "Over 200 skilled plant operators, mining engineers, and dedicated logistics managers." }
          ].map((item, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl shadow-lg border border-industrial-100 hover:shadow-2xl hover:border-construction-orange/50 transition-all duration-300 group hover:-translate-y-1">
              <div className="w-16 h-16 bg-industrial-50 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <item.icon className="text-construction-orange" size={32} />
              </div>
              <h4 className="font-black text-xl text-industrial-950 mb-3">{item.title}</h4>
              <p className="text-industrial-600 leading-relaxed font-light">{item.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </main>
  );
};

export default About;
