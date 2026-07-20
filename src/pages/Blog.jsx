import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Calendar, User, ArrowRight, BookOpen, Image as ImageIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

import mSand from '../assets/m_sand.png';
import highwayProject from '../assets/highway_project.png';
import agg20 from '../assets/aggregate_20mm.png';
import heavyMachinery from '../assets/heavy_machinery.png'; // Used for background

const fallbackBlogPosts = [
  {
    title: "Understanding the Benefits of M-Sand in Modern Construction",
    excerpt: "Manufactured sand is quickly replacing river sand due to its superior strength and eco-friendly nature. Learn why major contractors prefer it.",
    date: "Oct 12, 2023",
    author: "Technical Team",
    img: mSand,
    category: "Materials"
  },
  {
    title: "Why GSB is Critical for Highway Durability",
    excerpt: "Granular Sub-Base acts as the foundation of any road. Discover the IS standards required for GSB and how it prevents water logging.",
    date: "Sep 28, 2023",
    author: "Civil Engineer",
    img: highwayProject,
    category: "Infrastructure"
  },
  {
    title: "The Role of 20MM Aggregates in High-Rise Foundations",
    excerpt: "20MM crushed stone is the golden standard for structural concrete. We analyze its compressive strength benefits.",
    date: "Sep 05, 2023",
    author: "Quality Control",
    img: agg20,
    category: "Construction Tips"
  }
];

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const res = await fetch('http://localhost:5000/api/public/blogs');
      const json = await res.json();
      if (json.data && json.data.length > 0) {
        const mapped = json.data.map(b => ({
          title: b.title,
          excerpt: b.excerpt,
          date: b.date,
          author: b.author,
          img: b.image_url || null,
          category: b.category
        }));
        setBlogs(mapped);
      } else {
        setBlogs(fallbackBlogPosts);
      }
    } catch (err) {
      console.error(err);
      setBlogs(fallbackBlogPosts);
    } finally {
      setLoading(false);
    }
  };
  return (
    <main className="bg-industrial-50 min-h-screen">
      <Helmet>
        <title>Blog & News | Srinath Stone Company</title>
        <meta name="description" content="Read the latest news, construction tips, and material guides from Srinath Stone Company." />
      </Helmet>
      
      {/* Premium Dark Header */}
      <div className="bg-industrial-950 pt-24 pb-16 md:pt-32 md:pb-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-cover bg-center mix-blend-luminosity" style={{ backgroundImage: `url(${heavyMachinery})` }}></div>
        <div className="absolute inset-0 bg-gradient-to-t from-industrial-950 via-industrial-950/80 to-transparent"></div>
        
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 xl:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-industrial-900/80 border border-industrial-800/50 backdrop-blur-md text-construction-orange text-xs font-bold tracking-wider uppercase mb-4 shadow-sm">
            <BookOpen size={14} className="text-construction-yellow" /> Our Journal
          </div>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-display font-black text-white mb-4 tracking-tight">
            Construction <span className="text-transparent bg-clip-text bg-gradient-to-r from-construction-orange to-construction-yellow">Insights</span>
          </h1>
          <p className="text-base md:text-lg text-industrial-300 max-w-2xl mx-auto font-light leading-relaxed">
            Expert articles, material guides, and industry news from the leaders in aggregate manufacturing.
          </p>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 xl:px-8 -mt-8 relative z-20 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {loading ? (
            <div className="col-span-full text-center py-20 text-industrial-500 font-bold">Loading News & Updates...</div>
          ) : blogs.map((post, idx) => (
            <article key={idx} className="bg-white rounded-3xl shadow-lg border border-industrial-100 overflow-hidden group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex flex-col">
              <div className="h-56 overflow-hidden relative bg-industrial-100 flex items-center justify-center">
                <div className="absolute inset-0 bg-industrial-950/10 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                {post.img ? (
                  <img src={post.img} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out" />
                ) : (
                  <ImageIcon size={48} className="text-industrial-300 relative z-20 group-hover:scale-110 transition-transform duration-700 ease-out" />
                )}
                
                {post.category && (
                  <div className="absolute top-4 left-4 z-20 bg-white/90 backdrop-blur-md text-industrial-950 text-[10px] md:text-xs font-black px-3 py-1.5 rounded-full shadow-lg uppercase tracking-wider border border-white/50">
                    {post.category}
                  </div>
                )}
              </div>
              
              <div className="p-6 md:p-8 flex-grow flex flex-col">
                <div className="flex justify-between items-center text-[10px] md:text-xs text-industrial-500 font-bold uppercase tracking-wider mb-4">
                  <span className="flex items-center gap-1.5"><Calendar size={14} className="text-construction-orange" /> {post.date}</span>
                  <span className="flex items-center gap-1.5"><User size={14} className="text-construction-orange" /> {post.author}</span>
                </div>
                
                <h2 className="text-xl md:text-2xl font-display font-black text-industrial-950 mb-3 group-hover:text-construction-orange transition-colors duration-300 line-clamp-2">
                  {post.title}
                </h2>
                
                <p className="text-sm md:text-base text-industrial-600 mb-6 font-light leading-relaxed flex-grow">
                  {post.excerpt}
                </p>
                
                <Link to="#" className="inline-flex items-center gap-2 text-industrial-950 font-bold hover:text-construction-orange transition-colors group/link mt-auto text-sm">
                  <span className="border-b-2 border-transparent group-hover/link:border-construction-orange transition-colors pb-0.5">Read Full Article</span>
                  <ArrowRight size={16} className="transform group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Blog;
