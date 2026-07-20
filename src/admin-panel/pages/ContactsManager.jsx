import { useState, useEffect } from 'react';
import { Mail, CheckCircle, Clock } from 'lucide-react';

export default function ContactsManager() {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    try {
      const res = await fetch('http://localhost:5000/api/admin/contacts');
      const json = await res.json();
      if (json.data) setContacts(json.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const updateStatus = async (id, status) => {
    try {
      await fetch(`http://localhost:5000/api/admin/contacts/${id}/status`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status })
      });
      fetchContacts();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="-mt-2.5 space-y-6 max-w-7xl mx-auto">
      <div className="border-b border-slate-200 pb-5">
        <h1 className="text-2xl font-semibold text-slate-900 tracking-tight">Contact Leads</h1>
        <p className="text-sm text-slate-500 mt-1">Manage inquiries submitted through the website contact form.</p>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-100 text-slate-500 text-sm font-semibold uppercase tracking-wider">
                <th className="p-4">Date</th>
                <th className="p-4">Name</th>
                <th className="p-4">Email / Phone</th>
                <th className="p-4">Message</th>
                <th className="p-4 text-center">Status</th>
                <th className="p-4 text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-sm">
              {loading ? (
                <tr><td colSpan="6" className="p-8 text-center text-slate-500">Loading...</td></tr>
              ) : contacts.length === 0 ? (
                <tr><td colSpan="6" className="p-8 text-center text-slate-500">No contact leads found.</td></tr>
              ) : contacts.map(contact => (
                <tr key={contact.id} className="hover:bg-slate-50 transition-colors">
                  <td className="p-4 whitespace-nowrap text-slate-500">{new Date(contact.created_at).toLocaleDateString()}</td>
                  <td className="p-4 font-semibold text-slate-800">{contact.name}</td>
                  <td className="p-4">
                    <div className="flex flex-col">
                      <span className="text-slate-700">{contact.email}</span>
                      <span className="text-slate-500 text-xs">{contact.phone}</span>
                    </div>
                  </td>
                  <td className="p-4 max-w-xs truncate text-slate-600" title={contact.message}>{contact.message}</td>
                  <td className="p-4 text-center">
                    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold ${
                      contact.status === 'Resolved' ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700'
                    }`}>
                      {contact.status === 'Resolved' ? <CheckCircle size={14}/> : <Clock size={14}/>}
                      {contact.status || 'Pending'}
                    </span>
                  </td>
                  <td className="p-4 text-center">
                    {contact.status !== 'Resolved' && (
                      <button 
                        onClick={() => updateStatus(contact.id, 'Resolved')}
                        className="text-xs font-bold bg-white border border-slate-200 hover:border-blue-500 text-blue-600 px-3 py-1.5 rounded-lg transition-colors"
                      >
                        Mark Resolved
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
