import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Package } from 'lucide-react';

import heroBg from '../assets/crusher_plant.png';
import stoneDust from '../assets/stone_dust.png';
import mSand from '../assets/m_sand.png';
import agg10 from '../assets/aggregate_10mm.png';
import agg20 from '../assets/aggregate_20mm.png';

const fallbackProductsList = [
  { 
    name: "Stone Dust", 
    desc: "A fine byproduct of crushed stone, widely used as a filling material, in block manufacturing, and as a base for pavers.", 
    img: stoneDust,
  },
  { 
    name: "M Sand (Manufactured Sand)", 
    desc: "High-quality, cubically shaped sand manufactured by crushing hard granite. Washed to remove silt, making it perfect for plastering and concrete.", 
    img: mSand,
  },
  { 
    name: "6 MM Aggregate", 
    desc: "Smallest size of coarse aggregate. Essential for creating smooth concrete finishes and pre-cast concrete products.", 
    img: agg10,
  },
  { 
    name: "10 MM Aggregate", 
    desc: "Small coarse aggregate used widely in thin concrete slabs, columns, and as a mix with 20MM for dense concrete.", 
    img: agg10,
  },
  { 
    name: "20 MM Aggregate", 
    desc: "The most commonly used standard coarse aggregate size. Forms the primary structure of all general concrete works.", 
    img: agg20,
  }
];

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts();
  }, []);

  async function fetchProducts() {
    try {
      const res = await fetch('http://localhost:5000/api/public/products');
      const json = await res.json();
      if (json.data && json.data.length > 0) {
        // Map DB fields to component fields
        const mapped = json.data.map(p => ({
          name: p.title,
          desc: p.description,
          img: p.image_url || null
        }));
        setProducts(mapped);
      } else {
        setProducts(fallbackProductsList);
      }
    } catch (err) {
      console.error(err);
      setProducts(fallbackProductsList);
    } finally {
      setLoading(false);
    }
  }
  return (
    <main className="bg-industrial-50 min-h-screen">
      <Helmet>
        <title>Products Catalog | Srinath Stone Company</title>
        <meta name="description" content="Detailed catalog of our construction aggregates, M-Sand, GSB, WMM, and Stone Dust." />
      </Helmet>
      
      {/* Premium Dark Header */}
      <div className="bg-industrial-950 pt-24 pb-16 md:pt-32 md:pb-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-cover bg-center mix-blend-luminosity" style={{ backgroundImage: `url(${heroBg})` }}></div>
        <div className="absolute inset-0 bg-gradient-to-t from-industrial-950 via-industrial-950/80 to-transparent"></div>
        
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 xl:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-industrial-900/80 border border-industrial-800/50 backdrop-blur-md text-construction-orange text-xs font-bold tracking-wider uppercase mb-4 shadow-sm">
            Product Catalog
          </div>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-display font-black text-white mb-4 tracking-tight">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-construction-orange to-construction-yellow">Aggregates</span>
          </h1>
          <p className="text-base md:text-lg text-industrial-300 max-w-2xl mx-auto font-light leading-relaxed">
            We manufacture a complete range of construction aggregates conforming to IS-383 standards. Rigorous quality checks ensure your structures stand the test of time.
          </p>
        </div>
      </div>

      {/* Products List (Alternating Layout) */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 xl:px-8 -mt-8 relative z-20 pb-16">
        <div className="space-y-10">
          {loading ? (
            <div className="text-center py-20 text-industrial-500 font-bold">Loading Products...</div>
          ) : products.map((product, idx) => (
            <div key={idx} className={`bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-shadow duration-500 border border-industrial-100 overflow-hidden flex flex-col ${idx % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} group`}>
              
              {/* Product Image Section */}
              <div className="lg:w-2/5 h-[240px] lg:h-auto relative overflow-hidden bg-industrial-100 flex items-center justify-center">
                <div className="absolute inset-0 bg-industrial-950/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                {product.img ? (
                  <img 
                    src={product.img} 
                    alt={product.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out" 
                  />
                ) : (
                  <Package size={64} className="text-industrial-300 relative z-20 group-hover:scale-110 transition-transform duration-700 ease-out" />
                )}
              </div>

              {/* Product Info Section */}
              <div className="p-6 md:p-8 lg:p-10 lg:w-3/5 flex flex-col justify-center relative">
                <div className="absolute top-0 right-0 w-24 h-24 bg-industrial-50 rounded-bl-[80px] -z-10 transition-colors group-hover:bg-orange-50/50"></div>
                
                <h2 className="text-2xl md:text-3xl font-display font-black text-industrial-950 mb-3 group-hover:text-construction-orange transition-colors duration-300">
                  {product.name}
                </h2>
                <p className="text-base md:text-lg text-industrial-600 mb-8 leading-relaxed font-light whitespace-pre-wrap">
                  {product.desc}
                </p>

                <div>
                  <Link to={`/get-quote?material=${encodeURIComponent(product.name)}`} className="inline-flex justify-center items-center gap-2 bg-gradient-to-r from-blue-600 via-black to-blue-600 animate-liquid text-white font-bold px-6 py-3 rounded-xl text-sm shadow-[0_0_15px_rgba(37,99,235,0.3)] hover:shadow-[0_0_25px_rgba(37,99,235,0.6)] transition-all hover:-translate-y-1">
                    Request Quote for {product.name.split(' ')[0]}
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Products;
