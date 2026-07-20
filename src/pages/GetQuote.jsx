import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { CheckCircle2 } from 'lucide-react';

const GetQuote = () => {
  const location = useLocation();
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    material: '',
    quantity: '',
    address: '',
    notes: ''
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: '', text: '' });

  // Automatically select material if passed via query parameter
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const materialParam = params.get('material');
    if (materialParam) {
      setFormData(prev => ({ ...prev, material: materialParam }));
    }
  }, [location]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: '', text: '' });

    const message = `Company: ${formData.company}\nQuantity: ${formData.quantity} Tons\nAddress: ${formData.address}\nAdditional Notes: ${formData.notes}`;

    const payload = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      service_requested: formData.material,
      message: message
    };

    try {
      const res = await fetch('http://localhost:5000/api/public/quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      const json = await res.json();
      
      if (res.ok) {
        setStatus({ type: 'success', text: 'Quote request submitted successfully. Our team will contact you shortly.' });
        setFormData({ name: '', company: '', phone: '', email: '', material: '', quantity: '', address: '', notes: '' });
      } else {
        setStatus({ type: 'error', text: json.error || 'Failed to submit quote request.' });
      }
    } catch (err) {
      console.error(err);
      setStatus({ type: 'error', text: 'Network error. Please try again later.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="pt-24 pb-12 bg-industrial-50 min-h-screen">
      <Helmet>
        <title>Request a Quote | Srinath Stone Company</title>
        <meta name="description" content="Request a quotation for bulk supply of aggregates, M-sand, and stone dust." />
      </Helmet>
      
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 xl:px-8 mb-12 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-black text-industrial-950 mb-6">
          Request a <span className="text-construction-orange">Quote</span>
        </h1>
        <p className="text-lg text-industrial-600 max-w-3xl mx-auto">
          Need a bulk supply of aggregates? Fill out the details below and our sales team will get back to you with our best competitive rates.
        </p>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 xl:px-8">
        <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl border border-industrial-100">
          <form onSubmit={handleSubmit} className="space-y-8">
            
            {status.text && (
              <div className={`p-4 rounded-lg flex items-start gap-3 text-sm font-medium ${
                status.type === 'success' ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'
              }`}>
                {status.type === 'success' && <CheckCircle2 size={18} className="mt-0.5" />}
                <p>{status.text}</p>
              </div>
            )}

            {/* Personal Details */}
            <div>
              <h3 className="text-xl font-bold text-industrial-950 mb-4 border-b border-industrial-100 pb-2">1. Your Details</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-industrial-700 mb-2">Full Name *</label>
                  <input type="text" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} className="w-full border-gray-300 bg-industrial-50 border p-3 rounded-md focus:outline-none focus:border-construction-orange" placeholder="John Doe" required />
                </div>
                <div>
                  <label className="block text-sm font-bold text-industrial-700 mb-2">Company/Organization Name *</label>
                  <input type="text" value={formData.company} onChange={e => setFormData({...formData, company: e.target.value})} className="w-full border-gray-300 bg-industrial-50 border p-3 rounded-md focus:outline-none focus:border-construction-orange" placeholder="RK Constructions" required />
                </div>
                <div>
                  <label className="block text-sm font-bold text-industrial-700 mb-2">Phone Number *</label>
                  <input type="tel" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} className="w-full border-gray-300 bg-industrial-50 border p-3 rounded-md focus:outline-none focus:border-construction-orange" placeholder="+91 98765 43210" required />
                </div>
                <div>
                  <label className="block text-sm font-bold text-industrial-700 mb-2">Email Address *</label>
                  <input type="email" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} className="w-full border-gray-300 bg-industrial-50 border p-3 rounded-md focus:outline-none focus:border-construction-orange" placeholder="john@example.com" required />
                </div>
              </div>
            </div>

            {/* Requirement Details */}
            <div>
              <h3 className="text-xl font-bold text-industrial-950 mb-4 border-b border-industrial-100 pb-2">2. Requirement Details</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-industrial-700 mb-2">Material Required *</label>
                  <select 
                    className="w-full border-gray-300 bg-industrial-50 border p-3 rounded-md focus:outline-none focus:border-construction-orange" 
                    value={formData.material}
                    onChange={e => setFormData({...formData, material: e.target.value})}
                    required
                  >
                    <option value="">Select a material...</option>
                    <option value="Stone Dust">Stone Dust</option>
                    <option value="M Sand (Manufactured Sand)">M Sand (Manufactured Sand)</option>
                    <option value="6 MM Aggregate">6 MM Aggregate</option>
                    <option value="10 MM Aggregate">10 MM Aggregate</option>
                    <option value="20 MM Aggregate">20 MM Aggregate</option>
                    <option value="40 MM Aggregate">40 MM Aggregate</option>
                    <option value="GSB (Granular Sub-Base)">GSB (Granular Sub-Base)</option>
                    <option value="WMM (Wet Mix Macadam)">WMM (Wet Mix Macadam)</option>
                    <option value="Mixed/Multiple">Mixed/Multiple</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold text-industrial-700 mb-2">Estimated Quantity (in Tons) *</label>
                  <input type="number" value={formData.quantity} onChange={e => setFormData({...formData, quantity: e.target.value})} className="w-full border-gray-300 bg-industrial-50 border p-3 rounded-md focus:outline-none focus:border-construction-orange" placeholder="e.g. 1000" required />
                </div>
              </div>
            </div>

            {/* Delivery Details */}
            <div>
              <h3 className="text-xl font-bold text-industrial-950 mb-4 border-b border-industrial-100 pb-2">3. Delivery Logistics</h3>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-bold text-industrial-700 mb-2">Delivery Site Address *</label>
                  <textarea rows="3" value={formData.address} onChange={e => setFormData({...formData, address: e.target.value})} className="w-full border-gray-300 bg-industrial-50 border p-3 rounded-md focus:outline-none focus:border-construction-orange" placeholder="Enter complete site address" required></textarea>
                </div>
                <div>
                  <label className="block text-sm font-bold text-industrial-700 mb-2">Additional Requirements / Notes</label>
                  <textarea rows="3" value={formData.notes} onChange={e => setFormData({...formData, notes: e.target.value})} className="w-full border-gray-300 bg-industrial-50 border p-3 rounded-md focus:outline-none focus:border-construction-orange" placeholder="Any specific timeline, unloading constraints, etc."></textarea>
                </div>
              </div>
            </div>

            <div className="text-center md:text-right mt-12">
              <button type="submit" disabled={loading} className="w-full md:w-auto md:min-w-[300px] bg-gradient-to-r from-blue-600 via-black to-blue-600 animate-liquid text-white font-bold px-10 py-5 rounded-md shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_30px_rgba(37,99,235,0.7)] transition-all hover:-translate-y-1 text-xl uppercase tracking-wider disabled:opacity-50">
                {loading ? 'Submitting...' : 'Submit Request'}
              </button>
              <p className="text-xs text-industrial-500 mt-4">By submitting this form, you agree to our privacy policy. Our team usually responds within 2-4 hours.</p>
            </div>
            
          </form>
        </div>
      </div>
    </main>
  );
};

export default GetQuote;
