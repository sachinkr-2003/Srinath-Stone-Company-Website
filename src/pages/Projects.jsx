import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Building2, Image as ImageIcon, Trophy } from 'lucide-react';

import highwayProject from '../assets/highway_project.png';
import metroProject from '../assets/metro_project.png';
import heavyMachinery from '../assets/heavy_machinery.png';

const fallbackProjectsList = [
  {
    name: "Purvanchal Expressway",
    client: "UPEIDA / Major Infra Corp",
    desc: "Supplied 500,000+ Tons of WMM, GSB, 40MM, 20MM",
    date: "2021",
    img: highwayProject
  },
  {
    name: "City Metro Rail Project",
    client: "Metro Rail Corporation",
    desc: "Supplied 350,000+ Tons of M-Sand, 20MM, 10MM",
    date: "Ongoing",
    img: metroProject
  },
  {
    name: "Tech Park SEZ",
    client: "Global Tech Developers",
    desc: "Supplied 150,000+ Tons of Wash Sand, Stone Dust",
    date: "2023",
    img: heavyMachinery
  }
];

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProjects();
  }, []);

  async function fetchProjects() {
    try {
      const res = await fetch('http://localhost:5000/api/public/projects');
      const json = await res.json();
      if (json.data && json.data.length > 0) {
        const mapped = json.data.map(p => ({
          name: p.title,
          client: p.client,
          desc: p.description,
          date: p.date,
          img: p.image_url || null
        }));
        setProjects(mapped);
      } else {
        setProjects(fallbackProjectsList);
      }
    } catch (err) {
      console.error(err);
      setProjects(fallbackProjectsList);
    } finally {
      setLoading(false);
    }
  }
  return (
    <main className="bg-industrial-50 min-h-screen">
      <Helmet>
        <title>Completed Projects | Srinath Stone Company</title>
        <meta name="description" content="View our portfolio of completed projects supplied with our premium construction materials." />
      </Helmet>
      
      {/* Premium Dark Header */}
      <div className="bg-industrial-950 pt-24 pb-16 md:pt-32 md:pb-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-cover bg-center mix-blend-luminosity" style={{ backgroundImage: `url(${highwayProject})` }}></div>
        <div className="absolute inset-0 bg-gradient-to-t from-industrial-950 via-industrial-950/80 to-transparent"></div>
        
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 xl:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-industrial-900/80 border border-industrial-800/50 backdrop-blur-md text-construction-orange text-xs font-bold tracking-wider uppercase mb-4 shadow-sm">
            <Trophy size={14} className="text-construction-yellow" /> Portfolio
          </div>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-display font-black text-white mb-4 tracking-tight">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-construction-orange to-construction-yellow">Projects</span>
          </h1>
          <p className="text-base md:text-lg text-industrial-300 max-w-2xl mx-auto font-light leading-relaxed">
            We are proud to have supplied foundational materials to some of the most critical and massive infrastructure projects in the nation.
          </p>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 xl:px-8 -mt-8 relative z-20 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {loading ? (
            <div className="col-span-full text-center py-20 text-industrial-500 font-bold">Loading Projects...</div>
          ) : projects.map((project, idx) => (
            <div key={idx} className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-industrial-100 group hover:-translate-y-2 flex flex-col">
              
              {/* Image Container */}
              <div className="h-56 md:h-64 overflow-hidden relative bg-industrial-100 flex items-center justify-center">
                <div className="absolute inset-0 bg-industrial-950/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                {project.img ? (
                  <img 
                    src={project.img} 
                    alt={project.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out" 
                  />
                ) : (
                  <ImageIcon size={48} className="text-industrial-300 relative z-20 group-hover:scale-110 transition-transform duration-700 ease-out" />
                )}
                
                {/* Status Badge */}
                <div className="absolute top-4 left-4 z-20">
                  <span className={`backdrop-blur-md text-xs font-black px-3 py-1.5 rounded-full shadow-lg border uppercase tracking-wider ${project.date?.toLowerCase() === 'ongoing' ? 'bg-blue-600/90 text-white border-blue-400/50' : 'bg-construction-orange/90 text-white border-orange-400/50'}`}>
                    {project.date}
                  </span>
                </div>
              </div>
              
              {/* Content Container */}
              <div className="p-6 md:p-8 flex-grow relative">
                <div className="absolute top-0 right-0 w-24 h-24 bg-industrial-50 rounded-bl-[80px] -z-10 transition-colors group-hover:bg-orange-50/50"></div>
                
                <h3 className="text-construction-orange font-bold mb-2 uppercase tracking-widest text-xs flex items-center gap-1.5">
                  <Building2 size={14} /> {project.client}
                </h3>
                <h2 className="text-2xl font-display font-black text-industrial-950 mb-6 group-hover:text-industrial-800 transition-colors">
                  {project.name}
                </h2>
                
                <div className="bg-industrial-50 p-5 rounded-2xl border border-industrial-100/50 min-h-[100px]">
                  <p className="text-industrial-600 font-medium text-sm leading-relaxed whitespace-pre-wrap">
                    {project.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Projects;
