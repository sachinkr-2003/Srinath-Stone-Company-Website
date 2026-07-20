import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const ContactPreview = () => {
  return (
    <section className="py-0 relative">
      <div className="w-full h-[500px] bg-industrial-200">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113911.37877239556!2d80.8499252!3d26.8485965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfd991f32b16b%3A0x93ccba8909978be7!2sLucknow%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
          className="w-full h-full border-0 grayscale opacity-80" 
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Maps"
        ></iframe>
      </div>
      
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl px-4">
        <div className="bg-industrial-950 text-white rounded-xl shadow-2xl overflow-hidden flex flex-col md:flex-row border border-industrial-800">
          
          <div className="p-8 md:p-12 md:w-1/2 flex flex-col justify-center">
            <h2 className="text-3xl font-display font-black mb-6">Need a Bulk Supply?</h2>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-4">
                <div className="bg-industrial-900 p-3 rounded-full text-construction-orange"><Phone size={20} /></div>
                <div>
                  <p className="text-sm text-industrial-400 font-bold uppercase tracking-wider">Call Us 24/7</p>
                  <p className="font-semibold">+91 98765 43210</p>
                </div>
              </li>
              <li className="flex items-center gap-4">
                <div className="bg-industrial-900 p-3 rounded-full text-construction-orange"><Mail size={20} /></div>
                <div>
                  <p className="text-sm text-industrial-400 font-bold uppercase tracking-wider">Email Us</p>
                  <p className="font-semibold">sales@srinathstone.com</p>
                </div>
              </li>
              <li className="flex items-center gap-4">
                <div className="bg-industrial-900 p-3 rounded-full text-construction-orange"><MapPin size={20} /></div>
                <div>
                  <p className="text-sm text-industrial-400 font-bold uppercase tracking-wider">Visit Plant</p>
                  <p className="font-semibold">Industrial Area, Highway Road</p>
                </div>
              </li>
            </ul>
          </div>
          
          <div className="bg-construction-orange text-industrial-950 p-8 md:p-12 md:w-1/2 flex flex-col justify-center items-center text-center">
            <h3 className="text-3xl font-black mb-4">Request a Quotation</h3>
            <p className="mb-8 font-medium">Get the best rates for your construction projects instantly.</p>
            <Link to="/get-quote" className="bg-gradient-to-r from-blue-600 via-black to-blue-600 animate-liquid text-white px-8 py-4 rounded font-bold text-lg hover:-translate-y-1 transition-all shadow-[0_0_15px_rgba(37,99,235,0.4)] hover:shadow-[0_0_25px_rgba(37,99,235,0.7)] duration-300 w-full md:w-auto">
              Get Quote Now
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactPreview;
