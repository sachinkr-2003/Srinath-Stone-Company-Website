import React, { useState, useEffect, useRef } from 'react';

const CompanyStats = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  const stats = [
    { label: "Years of Experience", value: 15, suffix: "+" },
    { label: "Happy Clients", value: 1200, suffix: "+" },
    { label: "Projects Completed", value: 500, suffix: "+" },
    { label: "Daily Production (Tons)", value: 5000, suffix: "+" },
  ];

  return (
    <section className="py-20 bg-construction-orange" ref={sectionRef}>
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 xl:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-white/20">
          {stats.map((stat, idx) => (
            <div key={idx} className="px-4">
              <div className="text-4xl md:text-5xl lg:text-6xl font-display font-black text-industrial-950 mb-2">
                {isVisible ? stat.value.toLocaleString() : "0"}
                {stat.suffix}
              </div>
              <p className="text-white font-bold tracking-wide uppercase text-sm md:text-base">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompanyStats;
