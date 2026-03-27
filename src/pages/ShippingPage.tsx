import { Truck, Globe, Clock } from 'lucide-react';

export const ShippingPage = () => {
  return (
    <div className="max-w-4xl mx-auto py-20 px-6">
      <h1 className="text-5xl font-black mb-16 tracking-tighter">Shipping & Delivery</h1>
      
      <div className="space-y-12">
  {/* 1. Global Shipping */}
  <div className="flex gap-8 items-start">
    <div className="bg-blue-50 p-4 rounded-2xl">
      <Truck className="text-blue-600" />
    </div>
    <div>
      <h3 className="text-2xl font-bold mb-2">Free Global Shipping</h3>
      <p className="text-gray-500 leading-relaxed">
        We provide free standard shipping on all orders over $100, delivered to over 50 countries worldwide.
      </p>
    </div>
  </div>

  {/* 2. Eco Packaging */}
  <div className="flex gap-8 items-start">
    <div className="bg-green-50 p-4 rounded-2xl">
      <Globe className="text-green-600" />
    </div>
    <div>
      <h3 className="text-2xl font-bold mb-2">Eco-Friendly Packaging</h3>
      <p className="text-gray-500 leading-relaxed">
        Our commitment to the planet: 100% recyclable materials and zero-plastic packaging for every order.
      </p>
    </div>
  </div>

  {/* 3. Processing Time */}
  <div className="flex gap-8 items-start">
    <div className="bg-orange-50 p-4 rounded-2xl">
      <Clock className="text-orange-600" />
    </div>
    <div>
      <h3 className="text-2xl font-bold mb-2">Fast Processing</h3>
      <p className="text-gray-500 leading-relaxed">
        Every order is processed within 24 hours. You will receive a tracking number as soon as your package leaves our warehouse.
      </p>
    </div>
  </div>
</div>
      </div>
    
  );
};