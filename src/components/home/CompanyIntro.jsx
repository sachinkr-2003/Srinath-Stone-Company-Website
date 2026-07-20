import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import crusherImg from '../../assets/crusher_plant.png';
import machineryImg from '../../assets/heavy_machinery.png';

const CompanyIntro = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 xl:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Image Grid */}
          <div className="w-full lg:w-1/2 grid grid-cols-2 gap-4">
            <img src={machineryImg} alt="Heavy Machinery" className="w-full h-64 object-cover rounded-xl shadow-lg mt-8" />
            <img src={crusherImg} alt="Crusher Plant" className="w-full h-80 object-cover rounded-xl shadow-lg" />
          </div>

          {/* Content */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-construction-orange font-bold tracking-wider uppercase mb-2 text-sm">Company Introduction</h2>
            <h3 className="text-4xl md:text-5xl font-display font-black text-industrial-950 mb-6 leading-tight">
              Decades of Experience in <br/>Stone Crushing
            </h3>
            <p className="text-lg text-industrial-600 mb-8 leading-relaxed">
              Srinath Stone Company has been at the forefront of the aggregate manufacturing industry. We combine decades of experience with state-of-the-art crushing technology to deliver materials that form the backbone of massive infrastructure projects.
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {[
                "15+ Years Experience",
                "Unmatched Quality Control",
                "High Capacity Production",
                "100% Customer Satisfaction"
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 text-industrial-800 font-semibold">
                  <CheckCircle2 className="text-construction-orange shrink-0" size={24} />
                  {item}
                </li>
              ))}
            </ul>

            <Link to="/about" className="inline-flex items-center gap-2 text-industrial-950 font-bold border-b-2 border-construction-orange pb-1 hover:text-construction-orange transition-colors">
              Read Our Full Story
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CompanyIntro;
