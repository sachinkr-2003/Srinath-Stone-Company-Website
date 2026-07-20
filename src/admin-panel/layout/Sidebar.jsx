import { Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  MessageSquare, 
  FileText, 
  Package, 
  BookOpen, 
  Image, 
  LogOut,
  X,
  HardHat,
  MessageCircle,
  Settings
} from 'lucide-react';

const menuItems = [
  { name: 'Dashboard', path: '/admin/dashboard', icon: LayoutDashboard },
  { name: 'Contact Leads', path: '/admin/contacts', icon: MessageSquare },
  { name: 'Quote Requests', path: '/admin/quotes', icon: FileText },
  { name: 'Products', path: '/admin/products', icon: Package },
  { name: 'Blogs & News', path: '/admin/blogs', icon: BookOpen },
  { name: 'Projects Gallery', path: '/admin/projects', icon: Image },
  { name: 'Testimonials', path: '/admin/testimonials', icon: MessageCircle },
  { name: 'Settings', path: '/admin/settings', icon: Settings },
];

export default function Sidebar({ onLogout, isOpen, setIsOpen }) {
  const location = useLocation();

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar Content */}
      <div className={`fixed lg:static inset-y-0 left-0 w-64 bg-industrial-950 text-industrial-300 flex flex-col h-full shadow-[4px_0_24px_rgba(0,0,0,0.5)] z-50 border-r border-white/10 transition-transform duration-300 ease-in-out lg:translate-x-0 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        
        {/* Mobile Close Button */}
        <button 
          onClick={() => setIsOpen(false)}
          className="lg:hidden absolute top-4 right-4 p-1.5 text-industrial-400 hover:text-white hover:bg-white/10 rounded-lg z-50 transition-colors"
        >
          <X size={20} />
        </button>

        {/* Brand Area */}
        <div className="p-6 border-b border-white/10 relative overflow-hidden">
          {/* Subtle glow effect behind logo */}
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-construction-orange/10 to-transparent pointer-events-none"></div>
          
          <Link to="/" className="flex items-center gap-3 group relative z-10">
            <div className="bg-gradient-to-br from-construction-orange to-construction-yellow p-2 rounded-xl text-industrial-950 shadow-[0_0_15px_rgba(249,115,22,0.3)] group-hover:shadow-[0_0_25px_rgba(249,115,22,0.6)] group-hover:scale-105 transition-all duration-300">
              <HardHat size={20} strokeWidth={2.5} />
            </div>
            <div>
              <h1 className="text-xl font-display font-black text-white tracking-tight leading-none group-hover:text-construction-orange transition-colors">Admin Panel</h1>
              <p className="text-[10px] text-industrial-400 font-bold tracking-widest uppercase mt-1">Srinath Stone</p>
            </div>
          </Link>
        </div>
      
        {/* Navigation */}
        <div className="flex-1 overflow-y-auto py-6 px-4 space-y-1 scrollbar-hide">
          <h3 className="text-[10px] font-bold text-industrial-500 tracking-widest uppercase mb-4 px-3">Management</h3>
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname.startsWith(item.path);
            
            return (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setIsOpen && setIsOpen(false)}
                className={`flex items-center gap-3 px-3 py-3 rounded-xl transition-all duration-300 group relative overflow-hidden ${
                  isActive 
                    ? 'bg-industrial-900 text-white shadow-[0_4px_12px_rgba(0,0,0,0.3)] border border-white/5' 
                    : 'hover:bg-white/5 hover:text-white border border-transparent'
                }`}
              >
                {/* Active indicator bar */}
                {isActive && (
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-construction-orange to-construction-yellow rounded-l-xl"></div>
                )}
                
                <Icon 
                  size={18} 
                  className={`transition-colors relative z-10 ${isActive ? 'text-construction-orange' : 'text-industrial-500 group-hover:text-construction-yellow'}`} 
                />
                <span className={`font-semibold text-sm relative z-10 ${isActive ? 'text-white' : 'text-industrial-300 group-hover:text-white'}`}>
                  {item.name}
                </span>
              </Link>
            );
          })}
        </div>

        {/* Logout Area */}
        <div className="p-4 border-t border-white/10 bg-industrial-950/50">
          <button
            onClick={onLogout}
            className="w-full flex items-center gap-3 px-3 py-3 rounded-xl transition-all duration-300 group hover:bg-red-500/10 text-industrial-400 hover:text-red-400 border border-transparent hover:border-red-500/20"
          >
            <LogOut size={18} className="text-industrial-500 group-hover:text-red-500" />
            <span className="font-semibold text-sm">Secure Logout</span>
          </button>
        </div>
      </div>
    </>
  );
}
