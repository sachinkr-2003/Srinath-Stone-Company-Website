import { useState, useEffect } from 'react';
import { CheckCircle, Clock } from 'lucide-react';

export default function QuotesManager() {
  const [quotes, setQuotes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchQuotes();
  }, []);

  const fetchQuotes = async () => {
    try {
      const res = await fetch('http://localhost:5000/api/admin/quotes');
      const json = await res.json();
      if (json.data) setQuotes(json.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const updateStatus = async (id, status) => {
    try {
      await fetch(`http://localhost:5000/api/admin/quotes/${id}/status`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status })
      });
      fetchQuotes();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="-mt-2.5 space-y-6 max-w-7xl mx-auto">
      <div className="border-b border-slate-200 pb-5">
        <h1 className="text-2xl font-semibold text-slate-900 tracking-tight">Quote Requests</h1>
        <p className="text-sm text-slate-500 mt-1">Manage bulk material quote requests from customers.</p>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-100 text-slate-500 text-sm font-semibold uppercase tracking-wider">
                <th className="p-4">Date</th>
                <th className="p-4">Customer Details</th>
                <th className="p-4">Material Details</th>
                <th className="p-4">Location</th>
                <th className="p-4 text-center">Status</th>
                <th className="p-4 text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-sm">
              {loading ? (
                <tr><td colSpan="6" className="p-8 text-center text-slate-500">Loading...</td></tr>
              ) : quotes.length === 0 ? (
                <tr><td colSpan="6" className="p-8 text-center text-slate-500">No quote requests found.</td></tr>
              ) : quotes.map(quote => (
                <tr key={quote.id} className="hover:bg-slate-50 transition-colors">
                  <td className="p-4 whitespace-nowrap text-slate-500">{new Date(quote.created_at).toLocaleDateString()}</td>
                  <td className="p-4">
                    <div className="font-semibold text-slate-800">{quote.name}</div>
                    <div className="text-slate-500 text-xs">{quote.phone}</div>
                    <div className="text-slate-500 text-xs">{quote.company_name}</div>
                  </td>
                  <td className="p-4">
                    <div className="font-semibold text-blue-700">{quote.material_type}</div>
                    <div className="text-slate-600 text-xs">{quote.quantity} Tons</div>
                  </td>
                  <td className="p-4 text-slate-600">{quote.delivery_location}</td>
                  <td className="p-4 text-center">
                    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold ${
                      quote.status === 'Quoted' ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700'
                    }`}>
                      {quote.status === 'Quoted' ? <CheckCircle size={14}/> : <Clock size={14}/>}
                      {quote.status || 'Pending'}
                    </span>
                  </td>
                  <td className="p-4 text-center">
                    {quote.status !== 'Quoted' && (
                      <button 
                        onClick={() => updateStatus(quote.id, 'Quoted')}
                        className="text-xs font-bold bg-white border border-slate-200 hover:border-blue-500 text-blue-600 px-3 py-1.5 rounded-lg transition-colors"
                      >
                        Mark Quoted
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
