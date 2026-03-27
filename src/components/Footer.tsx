import { Github, Twitter, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';


export const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100 mt-20 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-1">
          <span className="text-xl font-black tracking-tighter">PREMIUM<span className="text-blue-600">STORE</span></span>
          <p className="text-gray-400 text-sm mt-4 leading-relaxed">Лучшие товары для тех, кто ценит качество и стиль. (Only the best for those who value style.)</p>
        </div>
        
{/*  Shop  */}
  <div>
    <h4 className="font-bold mb-6 text-gray-900">Shop (Магазин)</h4>
    <ul className="space-y-4 text-sm text-gray-500 font-medium">
      <li className="hover:text-blue-600 transition-colors">
        <Link to="/">All Products</Link>
      </li>
      <li className="hover:text-blue-600 transition-colors">
        <Link to="/featured">Featured</Link>
      </li>
      <li className="hover:text-blue-600 transition-colors">
        <Link to="/new-arrivals">New Arrivals</Link>
      </li>
    </ul>
  </div>

        {/* Company */}
  <div>
    <h4 className="font-bold mb-6 text-gray-900">Company (О нас)</h4>
    <ul className="space-y-4 text-sm text-gray-500 font-medium">
      <li className="hover:text-blue-600 transition-colors">
        <Link to="/about">About Us</Link>
      </li>
      <li className="hover:text-blue-600 transition-colors">
        <Link to="/careers">Careers</Link>
      </li>
      <li className="hover:text-blue-600 transition-colors">
        <Link to="/contact">Contact</Link>
      </li>
      <li className="hover:text-blue-600 transition-colors">
        <Link to="/shipping">Shipping Policy</Link>
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
              <Github className="w-6 h-6" />
            </a>
            <a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 -m-2 hover:scale-110 transition-all text-gray-400 hover:text-blue-400"
            >
              <Twitter className="w-6 h-6" />
            </a>
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 -m-2 hover:scale-110 transition-all text-gray-400 hover:text-pink-500"
            >
              <Instagram className="w-6 h-6" />
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