import { ProductCard } from '../components/ProductCard';
import type { Product } from '../types/product'; 

interface FeaturedPageProps {
  products: Product[];
}

export const FeaturedPage = ({ products }: FeaturedPageProps) => {

 const featuredItems = products.filter(item => item.rating?.rate && item.rating.rate >= 4.0);

  return (
    <div className="max-w-7xl mx-auto py-20 px-6 animate-in fade-in duration-700">
      <div className="text-left mb-16 border-l-8 border-blue-600 pl-8">
        <h1 className="text-6xl font-black text-gray-900 tracking-tighter mb-4 uppercase">
          Featured <span className="text-blue-600">Selection</span>
        </h1>
        <p className="text-xl text-gray-500 font-medium italic">
          Only the highest-rated premium items, chosen by our community.
        </p>
      </div>
      
      
      {featuredItems.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {featuredItems.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="bg-gray-50 p-20 rounded-[4rem] text-center border-2 border-dashed border-gray-200">
          <span className="text-8xl mb-6 block">💎</span>
          <h2 className="text-3xl font-bold text-gray-400">Loading premium collection...</h2>
        </div>
      )}
    </div>
  );
};