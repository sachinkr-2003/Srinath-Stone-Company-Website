import { useState, useEffect } from 'react';
import { Users, FileText, MessageSquare, Package, ArrowRight, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Dashboard() {
  const [stats, setStats] = useState({
    contacts: 0,
    quotes: 0,
    products: 0,
    blogs: 0
  });

  useEffect(() => {
    // In a real app, fetch these from /api/admin/dashboard-stats
    setStats({
      contacts: 12,
      quotes: 5,
      products: 6,
      blogs: 3
    });
  }, []);

  const statCards = [
    { title: 'Total Leads', value: stats.contacts, icon: MessageSquare, link: '/admin/contacts' },
    { title: 'Quote Requests', value: stats.quotes, icon: FileText, link: '/admin/quotes' },
    { title: 'Active Products', value: stats.products, icon: Package, link: '/admin/products' },
    { title: 'Published Blogs', value: stats.blogs, icon: Users, link: '/admin/blogs' },
  ];

  return (
    <div className="-mt-2.5 space-y-6 max-w-7xl mx-auto">
      {/* Simple Professional Header */}
      <div className="border-b border-slate-200 pb-5 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-semibold text-slate-900 tracking-tight">Dashboard Overview</h1>
          <p className="text-sm text-slate-500 mt-1">Monitor your website's key metrics and recent activities.</p>
        </div>
        <div className="flex items-center gap-2 text-sm text-slate-500 bg-white px-4 py-2 border border-slate-200 rounded-md shadow-sm">
          <Activity size={16} className="text-blue-600" />
          <span>System Status: <strong className="text-slate-700 font-medium">Online</strong></span>
        </div>
      </div>

      {/* Classic Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {statCards.map((stat, idx) => {
          const Icon = stat.icon;
          return (
            <div key={idx} className="bg-white rounded-lg p-5 shadow-sm border border-slate-200 flex flex-col justify-between h-32">
              <div className="flex justify-between items-start">
                <p className="text-sm font-medium text-slate-500">{stat.title}</p>
                <Icon size={20} className="text-slate-400" />
              </div>
              <div className="flex justify-between items-end">
                <h3 className="text-3xl font-semibold text-slate-900">{stat.value}</h3>
                <Link to={stat.link} className="text-xs font-medium text-blue-600 hover:text-blue-700 flex items-center gap-1">
                  View <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          );
        })}
      </div>

      {/* Split Section - Clean & Corporate */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 pt-4">
        
        {/* Recent Leads */}
        <div className="lg:col-span-2 bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden flex flex-col">
          <div className="px-5 py-4 border-b border-slate-200 flex justify-between items-center bg-slate-50/50">
            <h2 className="text-base font-semibold text-slate-800">Recent Contact Leads</h2>
            <Link to="/admin/contacts" className="text-sm font-medium text-blue-600 hover:text-blue-700">View All</Link>
          </div>
          
          <div className="flex-1 flex flex-col items-center justify-center p-8 text-center min-h-[250px]">
            <div className="w-12 h-12 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center mb-4">
              <MessageSquare size={24} />
            </div>
            <h3 className="text-sm font-medium text-slate-900 mb-1">No pending leads</h3>
            <p className="text-sm text-slate-500 max-w-sm">All recent contact inquiries have been reviewed.</p>
          </div>
        </div>
        
        {/* Quick Actions */}
        <div className="bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden flex flex-col">
          <div className="px-5 py-4 border-b border-slate-200 bg-slate-50/50">
            <h2 className="text-base font-semibold text-slate-800">Quick Links</h2>
          </div>
          
          <div className="p-2 flex-1">
            <Link to="/admin/blogs" className="flex items-center gap-3 p-3 rounded-md hover:bg-slate-50 transition-colors border-b border-slate-100 last:border-0">
              <div className="bg-slate-100 text-slate-600 p-2 rounded-md">
                <FileText size={16} />
              </div>
              <div className="flex-1">
                <h4 className="text-sm font-medium text-slate-800">Write Blog Post</h4>
                <p className="text-xs text-slate-500">Publish news to website</p>
              </div>
            </Link>
            
            <Link to="/admin/projects" className="flex items-center gap-3 p-3 rounded-md hover:bg-slate-50 transition-colors border-b border-slate-100 last:border-0">
              <div className="bg-slate-100 text-slate-600 p-2 rounded-md">
                <Users size={16} />
              </div>
              <div className="flex-1">
                <h4 className="text-sm font-medium text-slate-800">Upload Project</h4>
                <p className="text-xs text-slate-500">Add to project gallery</p>
              </div>
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
