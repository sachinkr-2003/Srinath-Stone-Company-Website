import { useState, useEffect } from 'react';
import { Quote, Plus, Edit2, Trash2, X } from 'lucide-react';

export default function TestimonialsManager() {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({ id: null, name: '', company: '', quote: '' });

  useEffect(() => {
    fetchTestimonials();
  }, []);

  const fetchTestimonials = async () => {
    try {
      const res = await fetch('http://localhost:5000/api/admin/testimonials');
      const json = await res.json();
      if (json.data) setTestimonials(json.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = formData.id 
        ? `http://localhost:5000/api/admin/testimonials/${formData.id}`
        : 'http://localhost:5000/api/admin/testimonials';
      const method = formData.id ? 'PUT' : 'POST';

      await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      setIsModalOpen(false);
      fetchTestimonials();
    } catch (err) {
      console.error(err);
    }
  };

  const handleDelete = async (id) => {
    if(!window.confirm('Are you sure you want to delete this testimonial?')) return;
    try {
      await fetch(`http://localhost:5000/api/admin/testimonials/${id}`, { method: 'DELETE' });
      fetchTestimonials();
    } catch (err) {
      console.error(err);
    }
  };

  const openEdit = (testimonial) => {
    setFormData(testimonial);
    setIsModalOpen(true);
  };

  const openAdd = () => {
    setFormData({ id: null, name: '', company: '', quote: '' });
    setIsModalOpen(true);
  };

  return (
    <div className="-mt-2.5 space-y-6 max-w-7xl mx-auto">
      <div className="border-b border-slate-200 pb-5 flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-semibold text-slate-900 tracking-tight">Testimonials</h1>
          <p className="text-sm text-slate-500 mt-1">Manage client reviews shown on the website.</p>
        </div>
        <button 
          onClick={openAdd}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-semibold flex items-center gap-2 transition-colors shadow-sm"
        >
          <Plus size={16} /> Add Testimonial
        </button>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-100 text-slate-500 text-sm font-semibold uppercase tracking-wider">
                <th className="p-4 w-16 text-center">ID</th>
                <th className="p-4">Client Details</th>
                <th className="p-4 w-1/2">Quote</th>
                <th className="p-4 text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-sm">
              {loading ? (
                <tr><td colSpan="4" className="p-8 text-center text-slate-500">Loading...</td></tr>
              ) : testimonials.length === 0 ? (
                <tr><td colSpan="4" className="p-8 text-center text-slate-500">No testimonials found.</td></tr>
              ) : testimonials.map(item => (
                <tr key={item.id} className="hover:bg-slate-50 transition-colors">
                  <td className="p-4 text-center font-medium text-slate-500">#{item.id}</td>
                  <td className="p-4">
                    <div className="font-semibold text-slate-800 text-base">{item.name}</div>
                    <div className="text-slate-500 text-xs">{item.company}</div>
                  </td>
                  <td className="p-4">
                    <p className="text-slate-600 text-sm italic relative">
                      <Quote size={12} className="inline-block text-slate-300 mr-1 -mt-2" />
                      {item.quote}
                    </p>
                  </td>
                  <td className="p-4 text-center">
                    <div className="flex items-center justify-center gap-2">
                      <button onClick={() => openEdit(item)} className="p-1.5 text-blue-600 hover:bg-blue-50 rounded transition-colors"><Edit2 size={16}/></button>
                      <button onClick={() => handleDelete(item.id)} className="p-1.5 text-red-600 hover:bg-red-50 rounded transition-colors"><Trash2 size={16}/></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-lg overflow-hidden animate-fade-in-up">
            <div className="px-6 py-4 border-b border-slate-100 flex justify-between items-center bg-slate-50">
              <h3 className="font-semibold text-slate-800">{formData.id ? 'Edit Testimonial' : 'Add New Testimonial'}</h3>
              <button onClick={() => setIsModalOpen(false)} className="text-slate-400 hover:text-slate-600"><X size={20}/></button>
            </div>
            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Client Name</label>
                <input required type="text" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 sm:text-sm" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Company / Designation</label>
                <input type="text" value={formData.company} onChange={e => setFormData({...formData, company: e.target.value})} className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 sm:text-sm" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Quote</label>
                <textarea required rows="4" value={formData.quote} onChange={e => setFormData({...formData, quote: e.target.value})} className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 sm:text-sm" />
              </div>
              <div className="pt-4 flex justify-end gap-3 border-t border-slate-100 mt-6">
                <button type="button" onClick={() => setIsModalOpen(false)} className="px-4 py-2 text-sm font-medium text-slate-700 bg-white border border-slate-300 rounded-md hover:bg-slate-50">Cancel</button>
                <button type="submit" className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700">Save Testimonial</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
