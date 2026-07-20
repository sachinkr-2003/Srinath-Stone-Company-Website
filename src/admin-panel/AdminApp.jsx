import { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import AdminLayout from './layout/AdminLayout';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import ContactsManager from './pages/ContactsManager';
import QuotesManager from './pages/QuotesManager';
import ProductsManager from './pages/ProductsManager';
import BlogsManager from './pages/BlogsManager';
import ProjectsManager from './pages/ProjectsManager';
import TestimonialsManager from './pages/TestimonialsManager';
import SettingsManager from './pages/SettingsManager';

export default function AdminApp() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const auth = localStorage.getItem('website_admin_auth');
    if (auth === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = () => {
    setIsAuthenticated(true);
    localStorage.setItem('website_admin_auth', 'true');
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('website_admin_auth');
  };

  if (!isAuthenticated) {
    return (
      <Routes>
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="*" element={<Navigate to="/admin/login" replace />} />
      </Routes>
    );
  }

  return (
    <AdminLayout onLogout={handleLogout}>
      <Routes>
        <Route path="/" element={<Navigate to="/admin/dashboard" replace />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/contacts" element={<ContactsManager />} />
        <Route path="/quotes" element={<QuotesManager />} />
        <Route path="/products" element={<ProductsManager />} />
        <Route path="/blogs" element={<BlogsManager />} />
        <Route path="/projects" element={<ProjectsManager />} />
        <Route path="/testimonials" element={<TestimonialsManager />} />
        <Route path="/settings" element={<SettingsManager />} />
        <Route path="*" element={<Navigate to="/admin/dashboard" replace />} />
      </Routes>
    </AdminLayout>
  );
}
