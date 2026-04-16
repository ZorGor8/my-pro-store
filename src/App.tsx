import { Toaster, toast } from 'react-hot-toast';

import { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';
import { useLocation } from 'react-router-dom';

// STORE & HOOKS
import { useCartStore } from './store/useCartStore';
import { useShopData } from './hooks/useShopData';

// COMPONENTS
import { ProductList } from './components/ProductList';
import { CartDrawer } from './components/CartDrawer';
import { ScrollToTop } from './components/ScrollToTop';
import { Footer } from './components/Footer';

// PAGES
import { ProductDetails } from './pages/ProductDetails';
import { CheckoutPage } from './pages/CheckoutPage';
import { AboutPage } from './pages/AboutPage';
import { CareersPage } from './pages/CareersPage';
import { ContactPage } from './pages/ContactPage';
import { FeaturedPage } from './pages/FeaturedPage';
import { NewArrivalsPage } from './pages/NewArrivalsPage';
import { ShippingPage } from './pages/ShippingPage';

import './App.css';

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  
  // 1. Connecting our new hook)
  const { categories, isLoading, error } = useShopData();

  // 2.(Getting store data)
  const { 
    toggleCart, cart, setCategory, selectedCategory, 
    searchQuery, setSearchQuery, products 
  } = useCartStore();

  const [inputValue, setInputValue] = useState(searchQuery);


useEffect(() => {
    if (error) {
      toast.error(`Something went wrong: ${error}`, {
        duration: 4000,
        position: 'top-center',
      });
    }
  }, [error]);

  

  // 3. (Keep only search debounce)
  useEffect(() => {
    const timer = setTimeout(() => setSearchQuery(inputValue), 600);
    return () => clearTimeout(timer);
  }, [inputValue, setSearchQuery]);

  
  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <Toaster />
      <CartDrawer />
      
      <header className="max-w-7xl mx-auto mb-6 md:mb-10 bg-white p-4 md:p-6 rounded-2xl shadow-sm border border-gray-100">
        <div className="flex justify-between items-center mb-6 md:mb-8">
          
          {/* LOGO */}
          <div className="flex items-center gap-3 md:gap-4 group cursor-pointer select-none" onClick={() => navigate('/')}>
            <div className="bg-blue-600 p-2 md:p-3 rounded-xl md:rounded-2xl group-hover:rotate-12 transition-all duration-300 shadow-lg shadow-blue-100">
              <ShoppingBag className="text-white w-6 h-6 md:w-8 md:h-8" strokeWidth={2.5} />
            </div>
            <div className="flex flex-col -space-y-1">
              <h1 className="text-xl md:text-3xl font-black tracking-tighter text-gray-900 leading-none">
                PREMIUM<span className="text-blue-600">STORE</span>
              </h1>
            </div>
          </div>

          {/* CART */}
          <div onClick={toggleCart} className="relative p-2.5 md:p-3 bg-gray-50 rounded-full cursor-pointer hover:bg-gray-100 transition-all border border-gray-100">
            <span className="text-xl md:text-2xl">🛒</span>
            {cart.length > 0 && (
              <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full">
                {cart.length}
              </span>
            )}
          </div>
        </div>

        {/* SEARCH */}
      

{location.pathname === '/' && (

  <>
    {/* SEARCH */}
    <div className="relative mb-6 md:mb-8">
      <input 
        type="text"
        placeholder="Search products..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className="w-full p-3.5 md:p-4 pl-10 md:pl-12 bg-gray-50 border border-transparent rounded-xl md:rounded-2xl outline-none transition-all shadow-inner"
      />
      <span className="absolute left-3.5 md:left-4 top-1/2 -translate-y-1/2 text-lg md:text-xl opacity-40">🔍</span>
    </div>

    {/* NAVIGATION */}
    <nav className="flex overflow-x-auto pb-2 md:pb-0 md:flex-wrap gap-2 border-t pt-4 md:pt-6 no-scrollbar">
      {isLoading ? (
        <div className="text-gray-400 text-sm animate-pulse">Loading categories...</div>
      ) : (
        <>
          <button 
            onClick={() => setCategory('all')}
            className={`whitespace-nowrap px-4 md:px-5 py-2 md:py-2.5 rounded-lg text-xs md:text-sm font-bold transition-all ${
              selectedCategory === 'all' ? 'bg-black text-white shadow-lg' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            Все товары
          </button>
          {categories.map(cat => (
            <button 
              key={cat}
              onClick={() => setCategory(cat)}
              className={`whitespace-nowrap px-4 md:px-5 py-2 md:py-2.5 rounded-lg text-xs md:text-sm font-bold capitalize transition-all ${
                selectedCategory === cat ? 'bg-black text-white shadow-lg' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </>
      )}
    </nav>
  </> 
)} 
      </header>

      <main className="max-w-7xl mx-auto px-0 md:px-4">
        <ScrollToTop /> 
        <Routes>
         // В файле App.tsx
          <Route path="/" element={<ProductList isLoading={isLoading} />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/checkout" element={<CheckoutPage/>} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/new-arrivals" element={<NewArrivalsPage products={products} />} />
          <Route path="/featured" element={<FeaturedPage products={products} />} />
          <Route path="/shipping" element={<ShippingPage />} />
        </Routes>
      </main>
      <Footer/>
    </div>
  );
}

export default App;