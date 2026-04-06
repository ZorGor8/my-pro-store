import { ShoppingCart } from 'lucide-react';
import { useCartStore } from '../store/useCartStore';
import type { Product } from '../types/product';
import { Link } from 'react-router-dom'; 

interface Props {
  product: Product;
}

export const ProductCard = ({ product }: Props) => {
  const addToCart = useCartStore((state) => state.addToCart);

  return (
    <div className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100 flex flex-col justify-between h-full group">
    
      <Link to={`/product/${product.id}`} className="cursor-pointer">
        <div className="h-48 flex items-center justify-center mb-4 overflow-hidden">
          <img 
            src={product.image} 
            alt={product.title} 
            className="max-h-full max-w-full object-contain group-hover:scale-110 transition-transform duration-300"
          />
         
        </div>
        <h3 className="font-semibold text-gray-800 line-clamp-2 group-hover:text-blue-600 transition-colors">
          {product.title}
        </h3>
        <p className="text-sm text-gray-500 mt-2 line-clamp-2">{product.description}</p>
      </Link>

      <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-50">
        <span className="text-xl font-bold text-gray-900">${product.price}</span>
        <button 
          onClick={(e) => {
            e.preventDefault(); 
            addToCart(product);
          }} 
          className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-800 transition-colors shadow-sm active:scale-90"
        >
          <ShoppingCart size={20} />
        </button>
      </div>
    </div>
  );
};