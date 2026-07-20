import { useState } from 'react';
import { Settings, Lock, User, CheckCircle } from 'lucide-react';

export default function SettingsManager() {
  const [oldUsername, setOldUsername] = useState('admin');
  const [newUsername, setNewUsername] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [message, setMessage] = useState({ type: '', text: '' });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage({ type: '', text: '' });

    try {
      const res = await fetch('http://localhost:5000/api/admin/credentials', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ oldUsername, newUsername, newPassword })
      });
      const data = await res.json();

      if (res.ok) {
        setMessage({ type: 'success', text: 'Admin credentials updated successfully! Please use them on your next login.' });
        setOldUsername(newUsername);
        setNewUsername('');
        setNewPassword('');
      } else {
        setMessage({ type: 'error', text: data.error || 'Failed to update credentials' });
      }
    } catch (err) {
      console.error(err);
      setMessage({ type: 'error', text: 'Server error. Please try again.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="-mt-2.5 space-y-6 max-w-3xl mx-auto">
      <div className="border-b border-slate-200 pb-5">
        <h1 className="text-2xl font-semibold text-slate-900 tracking-tight">Website Settings</h1>
        <p className="text-sm text-slate-500 mt-1">Manage your admin panel credentials and basic site configurations.</p>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden">
        <div className="px-6 py-4 border-b border-slate-200 bg-slate-50/50 flex items-center gap-2">
          <Settings size={18} className="text-slate-500" />
          <h2 className="text-base font-semibold text-slate-800">Admin Authentication</h2>
        </div>
        
        <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-6">
          {message.text && (
            <div className={`p-4 rounded-md flex items-start gap-3 text-sm font-medium ${
              message.type === 'success' ? 'bg-green-50 text-green-700 border border-green-200' : 'bg-red-50 text-red-700 border border-red-200'
            }`}>
              {message.type === 'success' && <CheckCircle size={18} className="mt-0.5" />}
              <p>{message.text}</p>
            </div>
          )}

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Current Username (For Verification)</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User size={16} className="text-slate-400" />
                </div>
                <input 
                  required 
                  type="text" 
                  value={oldUsername} 
                  onChange={e => setOldUsername(e.target.value)} 
                  className="w-full pl-10 pr-3 py-2.5 border border-slate-300 rounded-md focus:ring-2 focus:ring-blue-500 sm:text-sm" 
                  placeholder="e.g. admin" 
                />
              </div>
            </div>

            <hr className="border-slate-100 my-6" />

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">New Username</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User size={16} className="text-slate-400" />
                </div>
                <input 
                  required 
                  type="text" 
                  value={newUsername} 
                  onChange={e => setNewUsername(e.target.value)} 
                  className="w-full pl-10 pr-3 py-2.5 border border-slate-300 rounded-md focus:ring-2 focus:ring-blue-500 sm:text-sm" 
                  placeholder="Enter new username" 
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">New Password</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock size={16} className="text-slate-400" />
                </div>
                <input 
                  required 
                  type="password" 
                  value={newPassword} 
                  onChange={e => setNewPassword(e.target.value)} 
                  className="w-full pl-10 pr-3 py-2.5 border border-slate-300 rounded-md focus:ring-2 focus:ring-blue-500 sm:text-sm" 
                  placeholder="Enter new strong password" 
                />
              </div>
              <p className="mt-2 text-xs text-slate-500">Make sure it's at least 6 characters long.</p>
            </div>
          </div>

          <div className="pt-4 flex justify-end border-t border-slate-100">
            <button 
              type="submit" 
              disabled={loading}
              className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-md text-sm font-semibold transition-colors shadow-sm disabled:opacity-50"
            >
              {loading ? 'Updating...' : 'Update Credentials'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
