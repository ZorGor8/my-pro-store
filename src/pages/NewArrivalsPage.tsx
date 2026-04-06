import { ProductCard } from '../components/ProductCard';

// (Defining the product structure)
interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  category: string;
  description: string;
  rating?: {
    rate?: number;
    count?: number;
  };
}


export const NewArrivalsPage = ({ products }: { products: Product[] }) => {
  const newItems = products.slice(-4);
  


  return (
    <div className="max-w-7xl mx-auto py-20 px-6 animate-in fade-in duration-700">
      <div className="text-center mb-16">
        <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest">Just In</span>
        <h1 className="text-6xl font-black text-gray-900 tracking-tighter mt-6 mb-4">
          NEW ARRIVALS
        </h1>
        <p className="text-xl text-gray-500 max-w-2xl mx-auto">Fresh items from our global suppliers.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {newItems.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};