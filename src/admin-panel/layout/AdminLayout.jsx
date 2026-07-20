import { useState } from 'react';
import { Menu } from 'lucide-react';
import Sidebar from './Sidebar';

export default function AdminLayout({ children, onLogout }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-slate-50 overflow-hidden relative font-sans text-slate-800 selection:bg-blue-500 selection:text-white">
      <Sidebar 
        onLogout={onLogout} 
        isOpen={isSidebarOpen} 
        setIsOpen={setIsSidebarOpen} 
      />
      <div className="flex-1 flex flex-col overflow-hidden min-w-0">
        <header className="bg-white border-b border-slate-200 h-16 flex items-center px-4 sm:px-6 justify-between lg:justify-end shadow-sm z-30">
          <button 
            onClick={() => setIsSidebarOpen(true)}
            className="lg:hidden p-2 -ml-2 text-slate-500 hover:text-slate-800 hover:bg-slate-100 rounded-lg transition-colors"
          >
            <Menu size={24} />
          </button>
          <div className="flex items-center gap-4">
            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-700 font-bold shadow-inner">
              A
            </div>
            <div className="hidden sm:block text-sm">
              <p className="font-semibold text-slate-800">Admin User</p>
              <p className="text-xs text-slate-500">Website Manager</p>
            </div>
          </div>
        </header>
        <main className="flex-1 overflow-x-hidden overflow-y-auto p-4 sm:p-6 bg-slate-50">
          <div className="max-w-7xl mx-auto pb-20 sm:pb-0 animate-fade-in-up">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
