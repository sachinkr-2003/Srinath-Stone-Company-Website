import React, { useState, useEffect } from 'react';
import { Quote } from 'lucide-react';

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTestimonials();
  }, []);

  const fetchTestimonials = async () => {
    try {
      const res = await fetch('http://localhost:5000/api/public/testimonials');
      const json = await res.json();
      if (json.data && json.data.length > 0) {
        setTestimonials(json.data);
      } else {
        // Fallback dummy data if no testimonials in DB
        setTestimonials([
          { name: "Rajesh Kumar", company: "RK Constructions", quote: "Srinath Stone has been our primary supplier for the last 5 years. Their quality is unmatched and delivery is always on time." },
          { name: "Amit Sharma", company: "Sharma Developers", quote: "The M-Sand quality from their VSI plant is the best in the region. It has significantly improved our concrete strength." }
        ]);
      }
    } catch (err) {
      console.error(err);
      setTestimonials([
        { name: "Rajesh Kumar", company: "RK Constructions", quote: "Srinath Stone has been our primary supplier for the last 5 years. Their quality is unmatched and delivery is always on time." }
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 xl:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-construction-orange font-bold tracking-wider uppercase mb-2 text-sm">Testimonials</h2>
          <h3 className="text-4xl md:text-5xl font-display font-black text-industrial-950 mb-6">
            What Our Clients Say
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((test, idx) => (
            <div key={idx} className="bg-industrial-50 p-8 rounded-xl border border-industrial-100 relative">
              <Quote size={48} className="text-construction-orange/20 absolute top-4 right-4" />
              <p className="text-industrial-600 mb-6 relative z-10 italic">
                "{test.quote}"
              </p>
              <div>
                <h4 className="font-bold text-industrial-950">{test.name}</h4>
                <p className="text-sm text-construction-orange font-semibold">{test.company}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
