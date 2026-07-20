import React from 'react';
import { Link } from 'react-router-dom';
import { HardHat, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-industrial-950 text-industrial-300 border-t-4 border-construction-orange pt-16 pb-8">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 xl:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12 border-b border-industrial-800 pb-12">
          
          {/* Brand Col */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-6 group inline-flex">
              <div className="bg-gradient-to-br from-construction-orange to-construction-yellow p-1.5 rounded flex items-center justify-center">
                <HardHat className="text-industrial-950" size={24} />
              </div>
              <h2 className="text-white text-xl font-display font-black tracking-tight">SRINATH STONE</h2>
            </Link>
            <p className="text-sm mb-6 leading-relaxed">
              Leading manufacturer and supplier of premium construction aggregates, wash sand, and M-sand. Powering infrastructure with quality and reliability.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-6 uppercase tracking-wider text-sm border-l-2 border-construction-orange pl-3">Quick Links</h3>
            <div className="grid grid-cols-2 gap-2">
              <ul className="space-y-3 text-sm">
                <li><Link to="/about" className="hover:text-construction-orange transition-colors">About Us</Link></li>
                <li><Link to="/services" className="hover:text-construction-orange transition-colors">Services</Link></li>
                <li><Link to="/projects" className="hover:text-construction-orange transition-colors">Projects</Link></li>
                <li><Link to="/gallery" className="hover:text-construction-orange transition-colors">Gallery</Link></li>
              </ul>
              <ul className="space-y-3 text-sm">
                <li><Link to="/blog" className="hover:text-construction-orange transition-colors">Blog</Link></li>
                <li><Link to="/contact" className="hover:text-construction-orange transition-colors">Contact Us</Link></li>
                <li><Link to="/get-quote" className="hover:text-construction-orange transition-colors font-semibold">Get a Quote</Link></li>
              </ul>
            </div>
          </div>

          {/* Products List */}
          <div>
            <h3 className="text-white font-bold mb-6 uppercase tracking-wider text-sm border-l-2 border-construction-orange pl-3">Our Products</h3>
            <ul className="space-y-3 text-sm">
              <li><Link to="/products" className="hover:text-construction-orange transition-colors">Stone Dust</Link></li>
              <li><Link to="/products" className="hover:text-construction-orange transition-colors">6 MM Aggregate</Link></li>
              <li><Link to="/products" className="hover:text-construction-orange transition-colors">10 MM & 20 MM</Link></li>
              <li><Link to="/products" className="hover:text-construction-orange transition-colors">40 MM Aggregate</Link></li>
              <li><Link to="/products" className="hover:text-construction-orange transition-colors">GSB & WMM</Link></li>
              <li><Link to="/products" className="hover:text-construction-orange transition-colors">M Sand & Wash Sand</Link></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold mb-6 uppercase tracking-wider text-sm border-l-2 border-construction-orange pl-3">Contact Plant</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-construction-orange shrink-0 mt-0.5" />
                <span>Srinath Crusher Plant, Industrial Area, Highway Road.</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-construction-orange shrink-0" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-construction-orange shrink-0" />
                <span>sales@srinathstone.com</span>
              </li>
            </ul>
          </div>
          
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-industrial-500">
          <p>&copy; {new Date().getFullYear()} Srinath Stone Company. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
