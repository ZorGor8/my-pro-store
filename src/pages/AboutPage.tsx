import { ShieldCheck, Truck, Headphones } from 'lucide-react';

export const AboutPage = () => {
  return (
    <div className="max-w-6xl mx-auto py-20 px-6 animate-in fade-in duration-700">
      
      {/* 1. Hero Section */}
      <div className="text-center mb-24">
        <h1 className="text-6xl md:text-7xl font-black text-gray-900 tracking-tighter mb-8 leading-none">
          We define the <span className="text-blue-600">Future</span> of Shopping
        </h1>
        <p className="text-xl text-gray-500 max-w-3xl mx-auto leading-relaxed font-medium">
          Premium Store is not just another e-commerce platform. It is a curated digital experience where quality and craftsmanship take precedence over mass consumption.
        </p>
      </div>

      {/* 2. Values Grid (Cards) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
        <div className="bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300">
          <div className="bg-blue-50 w-14 h-14 rounded-2xl flex items-center justify-center mb-8">
            <ShieldCheck className="text-blue-600 w-7 h-7" />
          </div>
          <h3 className="text-2xl font-bold mb-4 text-gray-900">Authenticity</h3>
          <p className="text-gray-500 leading-relaxed">
            Only original products from verified global suppliers. We guarantee the provenance of every item in our catalog.
          </p>
        </div>

        <div className="bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300">
          <div className="bg-green-50 w-14 h-14 rounded-2xl flex items-center justify-center mb-8">
            <Truck className="text-green-600 w-7 h-7" />
          </div>
          <h3 className="text-2xl font-bold mb-4 text-gray-900">Fast Delivery</h3>
          <p className="text-gray-500 leading-relaxed">
            Global logistics optimized for speed. We ensure your order reaches your doorstep faster than you expect.
          </p>
        </div>

        <div className="bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300">
          <div className="bg-purple-50 w-14 h-14 rounded-2xl flex items-center justify-center mb-8">
            <Headphones className="text-purple-600 w-7 h-7" />
          </div>
          <h3 className="text-2xl font-bold mb-4 text-gray-900">24/7 Support</h3>
          <p className="text-gray-500 leading-relaxed">
            Our dedicated support team is always online. Real people, real solutions, in your language, at any time.
          </p>
        </div>
      </div>

      {/* 3. Story Section */}
      <div className="flex flex-col md:flex-row gap-16 items-center mb-24 py-12 border-t border-gray-100">
        <div className="flex-1 text-left">
          <h2 className="text-4xl font-black text-gray-900 mb-8 tracking-tight">How it all started</h2>
          <div className="space-y-6 text-gray-500 text-lg leading-relaxed">
            <p>
              It began with a simple vision: to eliminate the noise of the modern marketplace and provide a sanctuary for those who seek excellence.
            </p>
            <p>
              From a small tech startup to a leading destination for premium goods, our journey has been driven by a single obsession — the satisfaction of our community.
            </p>
            <p className="font-extrabold text-gray-900 italic text-xl pt-4">
              "Quality is not an act, it is a habit." — Aristotle
            </p>
          </div>
        </div>
        <div className="flex-1 w-full bg-gray-50 rounded-[3rem] aspect-square flex items-center justify-center border border-gray-200 shadow-inner group">
            <div className="text-center group-hover:scale-110 transition-transform duration-500">
                <span className="text-gray-200 font-black text-9xl block leading-none">EST</span>
                <span className="text-blue-600 font-black text-9xl block leading-none">2026</span>
            </div>
        </div>
      </div>

      {/* 4. Statistics Section */}
      <div className="bg-gray-900 rounded-[4rem] p-16 text-white flex flex-wrap justify-around gap-12 shadow-2xl shadow-blue-900/20">
        <div className="text-center">
          <div className="text-5xl font-black mb-3">10k+</div>
          <div className="text-blue-400 font-bold uppercase tracking-[0.2em] text-xs">Happy Customers</div>
        </div>
        <div className="text-center border-x border-gray-800 px-12 hidden md:block">
          <div className="text-5xl font-black mb-3">150+</div>
          <div className="text-blue-400 font-bold uppercase tracking-[0.2em] text-xs">Premium Brands</div>
        </div>
        <div className="text-center md:hidden block">
           <div className="text-5xl font-black mb-3">150+</div>
           <div className="text-blue-400 font-bold uppercase tracking-[0.2em] text-xs">Premium Brands</div>
        </div>
        <div className="text-center">
          <div className="text-5xl font-black mb-3">99%</div>
          <div className="text-blue-400 font-bold uppercase tracking-[0.2em] text-xs">Satisfaction Rate</div>
        </div>
      </div>

    </div>
  );
};