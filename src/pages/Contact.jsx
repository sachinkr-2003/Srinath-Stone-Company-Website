import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { MapPin, Phone, Mail, Clock, HeadphonesIcon, CheckCircle2 } from 'lucide-react';
import heroBg from '../assets/highway_project.png'; // Using highway for contact background

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: '', text: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: '', text: '' });

    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL || 'https://srinath-stone-company-backend.onrender.com/api'}/public/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const json = await res.json();
      
      if (res.ok) {
        setStatus({ type: 'success', text: 'Thank you! Your message has been sent.' });
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        setStatus({ type: 'error', text: json.error || 'Something went wrong.' });
      }
    } catch (err) {
      console.error(err);
      setStatus({ type: 'error', text: 'Failed to send message. Please try again.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="bg-industrial-50 min-h-screen">
      <Helmet>
        <title>Contact Us | Srinath Stone Company</title>
        <meta name="description" content="Get in touch with Srinath Stone Company for inquiries, plant location, and contact details." />
      </Helmet>
      
      {/* Premium Dark Header */}
      <div className="bg-industrial-950 pt-24 pb-16 md:pt-32 md:pb-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-cover bg-center mix-blend-luminosity" style={{ backgroundImage: `url(${heroBg})` }}></div>
        <div className="absolute inset-0 bg-gradient-to-t from-industrial-950 via-industrial-950/80 to-transparent"></div>
        
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 xl:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-industrial-900/80 border border-industrial-800/50 backdrop-blur-md text-construction-orange text-xs font-bold tracking-wider uppercase mb-4 shadow-sm">
            <HeadphonesIcon size={14} className="text-construction-yellow" /> Get in Touch
          </div>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-display font-black text-white mb-4 tracking-tight">
            Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-construction-orange to-construction-yellow">Us</span>
          </h1>
          <p className="text-base md:text-lg text-industrial-300 max-w-2xl mx-auto font-light leading-relaxed">
            We are available 24/7 for dispatch operations. Reach out to our sales and support team for any inquiries or bulk requirements.
          </p>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 xl:px-8 -mt-8 relative z-20 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10">
          
          {/* Contact Information Cards */}
          <div className="lg:col-span-1 space-y-4">
            <div className="bg-white p-6 rounded-3xl border border-industrial-100 flex items-start gap-4 shadow-lg hover:shadow-xl transition-shadow duration-300 group hover:-translate-y-1 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-construction-orange opacity-0 group-hover:opacity-5 rounded-bl-full transition-opacity duration-300"></div>
              <div className="bg-industrial-50 p-3 rounded-2xl shadow-inner text-construction-orange shrink-0 group-hover:bg-construction-orange group-hover:text-white transition-colors duration-300">
                <MapPin size={24} />
              </div>
              <div>
                <h3 className="font-black text-industrial-950 mb-1.5 text-lg">Plant Location</h3>
                <p className="text-industrial-600 font-light leading-relaxed text-sm">Srinath Crusher Plant, Industrial Area, Highway Road, City, State 123456</p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-3xl border border-industrial-100 flex items-start gap-4 shadow-lg hover:shadow-xl transition-shadow duration-300 group hover:-translate-y-1 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-construction-orange opacity-0 group-hover:opacity-5 rounded-bl-full transition-opacity duration-300"></div>
              <div className="bg-industrial-50 p-3 rounded-2xl shadow-inner text-construction-orange shrink-0 group-hover:bg-construction-orange group-hover:text-white transition-colors duration-300">
                <Phone size={24} />
              </div>
              <div>
                <h3 className="font-black text-industrial-950 mb-1.5 text-lg">Sales & Support</h3>
                <p className="text-industrial-600 font-medium text-sm">+91 98765 43210</p>
                <p className="text-industrial-600 font-medium text-sm">+91 98765 43211</p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-3xl border border-industrial-100 flex items-start gap-4 shadow-lg hover:shadow-xl transition-shadow duration-300 group hover:-translate-y-1 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-construction-orange opacity-0 group-hover:opacity-5 rounded-bl-full transition-opacity duration-300"></div>
              <div className="bg-industrial-50 p-3 rounded-2xl shadow-inner text-construction-orange shrink-0 group-hover:bg-construction-orange group-hover:text-white transition-colors duration-300">
                <Mail size={24} />
              </div>
              <div>
                <h3 className="font-black text-industrial-950 mb-1.5 text-lg">Email Address</h3>
                <p className="text-industrial-600 font-medium text-sm">sales@srinathstone.com</p>
                <p className="text-industrial-600 font-medium text-sm">info@srinathstone.com</p>
              </div>
            </div>

            <div className="bg-industrial-950 text-white p-6 rounded-3xl shadow-xl flex items-start gap-4 hover:-translate-y-1 transition-transform duration-300">
              <div className="bg-industrial-800 p-3 rounded-2xl text-construction-orange shrink-0">
                <Clock size={24} />
              </div>
              <div>
                <h3 className="font-black mb-1.5 text-lg">Operating Hours</h3>
                <p className="text-industrial-300 font-light mb-1 text-sm">Dispatch: <span className="text-white font-medium">24/7 Open</span></p>
                <p className="text-industrial-300 font-light text-sm">Office: <span className="text-white font-medium">9:00 AM - 6:00 PM</span></p>
              </div>
            </div>
          </div>

          {/* General Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white p-6 md:p-8 rounded-3xl shadow-2xl border border-industrial-100 h-full relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-industrial-50 rounded-bl-[100px] -z-10"></div>
              <div className="w-10 h-1 bg-construction-orange mb-5 rounded-full"></div>
              <h2 className="text-2xl md:text-3xl font-display font-black text-industrial-950 mb-3">Send a Message</h2>
              <p className="text-industrial-600 mb-8 font-light text-sm md:text-base">For quotation requests, please use our dedicated <a href="/get-quote" className="text-construction-orange font-bold hover:underline">Get Quote</a> page. Use this form for general inquiries.</p>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                {status.text && (
                  <div className={`p-3 rounded-lg flex items-start gap-2 text-sm font-medium ${
                    status.type === 'success' ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'
                  }`}>
                    {status.type === 'success' && <CheckCircle2 size={16} className="mt-0.5" />}
                    <p>{status.text}</p>
                  </div>
                )}
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-industrial-900 mb-1.5">Full Name *</label>
                    <input type="text" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} className="w-full border-industrial-200 bg-industrial-50 border p-3 rounded-xl focus:outline-none focus:border-construction-orange focus:ring-1 focus:ring-construction-orange transition-all text-sm" placeholder="John Doe" required />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-industrial-900 mb-1.5">Email Address *</label>
                    <input type="email" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} className="w-full border-industrial-200 bg-industrial-50 border p-3 rounded-xl focus:outline-none focus:border-construction-orange focus:ring-1 focus:ring-construction-orange transition-all text-sm" placeholder="john@example.com" required />
                  </div>
                </div>
                
                <div>
                  <label className="block text-xs font-bold text-industrial-900 mb-1.5">Phone Number</label>
                  <input type="tel" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} className="w-full border-industrial-200 bg-industrial-50 border p-3 rounded-xl focus:outline-none focus:border-construction-orange focus:ring-1 focus:ring-construction-orange transition-all text-sm" placeholder="+91 98765 43210" />
                </div>
                
                <div>
                  <label className="block text-xs font-bold text-industrial-900 mb-1.5">Message *</label>
                  <textarea rows="4" value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})} className="w-full border-industrial-200 bg-industrial-50 border p-3 rounded-xl focus:outline-none focus:border-construction-orange focus:ring-1 focus:ring-construction-orange transition-all text-sm" placeholder="How can we help you?" required></textarea>
                </div>
                
                <button type="submit" disabled={loading} className="w-full md:w-auto bg-gradient-to-r from-blue-600 via-black to-blue-600 animate-liquid text-white font-bold px-8 py-3 rounded-xl shadow-[0_0_15px_rgba(37,99,235,0.4)] hover:shadow-[0_0_25px_rgba(37,99,235,0.7)] transition-all hover:-translate-y-1 text-sm md:text-base mt-2 disabled:opacity-50">
                  {loading ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>

        </div>

        {/* Map */}
        <div className="w-full h-[300px] rounded-3xl overflow-hidden shadow-xl border-4 border-white">
           <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113911.37877239556!2d80.8499252!3d26.8485965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfd991f32b16b%3A0x93ccba8909978be7!2sLucknow%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
            className="w-full h-full border-0 grayscale opacity-90 hover:grayscale-0 transition-all duration-1000" 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Srinath Stone Plant Location"
          ></iframe>
        </div>
      </div>
    </main>
  );
};

export default Contact;
