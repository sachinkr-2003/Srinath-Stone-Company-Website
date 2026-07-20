import React from 'react';
import { ShieldCheck, Truck, Clock, Gem, Award, Users } from 'lucide-react';

const reasons = [
  { icon: <Gem size={28} />, title: "Best Quality Material", desc: "Rigorous quality checks ensure zero impurities and consistent sizes." },
  { icon: <Award size={28} />, title: "Modern Machines", desc: "VSI and advanced washing plants for superior M-sand and aggregates." },
  { icon: <Users size={28} />, title: "Experienced Team", desc: "Operated by industry veterans who understand construction needs." },
  { icon: <Truck size={28} />, title: "Fast Delivery", desc: "Massive captive fleet ensures your material reaches the site on time." },
  { icon: <ShieldCheck size={28} />, title: "Trusted Company", desc: "Supplying to major government contractors and real estate developers." },
  { icon: <Clock size={28} />, title: "24×7 Support & Loading", desc: "Round-the-clock operations to meet your strict project deadlines." },
];

const WhyChooseUs = () => {
  return (
    <section className="py-12 md:py-16 bg-industrial-50 border-y border-industrial-100">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 xl:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-construction-orange font-bold tracking-wider uppercase mb-2 text-sm">Why Choose Us</h2>
          <h3 className="text-3xl md:text-4xl font-display font-black text-industrial-950 mb-4">
            The Foundation of Reliability
          </h3>
          <p className="text-base text-industrial-600">
            We don't just supply stones; we supply peace of mind. Here is why the biggest construction companies choose Srinath Stone.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border border-industrial-100 group">
              <div className="bg-industrial-50 w-12 h-12 rounded-lg flex items-center justify-center text-construction-orange mb-4 group-hover:bg-construction-orange group-hover:text-white transition-colors duration-300">
                {reason.icon}
              </div>
              <h4 className="text-lg font-bold text-industrial-950 mb-2">{reason.title}</h4>
              <p className="text-sm text-industrial-600">{reason.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;
