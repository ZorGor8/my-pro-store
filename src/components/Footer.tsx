import { Link } from 'react-router-dom';
import { Globe, MessageCircle, Camera } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100 mt-20 pt-16 pb-8 relative z-50">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-1">
          <span className="text-xl font-black tracking-tighter">PREMIUM<span className="text-blue-600">STORE</span></span>
          <p className="text-gray-400 text-sm mt-4 leading-relaxed">
            Лучшие товары для тех, кто ценит качество и стиль. (Only the best for those who value style.)
          </p>
        </div>
        
        {/* Shop  */}
        <div>
          <h4 className="font-bold mb-6 text-gray-900">Shop </h4>
          <ul className="space-y-1 text-sm text-gray-500 font-medium">
            <li>
              <Link to="/" className="hover:text-blue-600 transition-colors block py-2">All Products</Link>
            </li>
            <li>
              <Link to="/featured" className="hover:text-blue-600 transition-colors block py-2">Featured</Link>
            </li>
            <li>
              <Link to="/new-arrivals" className="hover:text-blue-600 transition-colors block py-2">New Arrivals</Link>
            </li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="font-bold mb-6 text-gray-900">Company </h4>
          <ul className="space-y-1 text-sm text-gray-500 font-medium">
            <li>
              <Link to="/about" className="hover:text-blue-600 transition-colors block py-2">About Us</Link>
            </li>
            <li>
              <Link to="/careers" className="hover:text-blue-600 transition-colors block py-2">Careers</Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-blue-600 transition-colors block py-2">Contact</Link>
            </li>
            <li>
              <Link to="/shipping" className="hover:text-blue-600 transition-colors block py-2">Shipping Policy</Link>
            </li>
          </ul>
        </div>

        {/* Follow Us */}
        <div>
          <h4 className="font-bold mb-6 text-gray-900">Follow Us</h4>
          <div className="flex gap-6">
            <a 
              href="https://github.com/ZorGor8" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 -m-2 hover:scale-110 transition-all text-gray-400 hover:text-black"
            >
              <Globe className="w-6 h-6" />
            </a>
            <a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 -m-2 hover:scale-110 transition-all text-gray-400 hover:text-blue-400"
            >
              <MessageCircle className="w-6 h-6" />
            </a>
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 -m-2 hover:scale-110 transition-all text-gray-400 hover:text-pink-500"
            >
              <Camera className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-gray-50 text-center text-xs text-gray-400 font-bold uppercase tracking-widest">
        © 2026 Premium Store. Built with passion.
      </div>
    </footer>
  );
};