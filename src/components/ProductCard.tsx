import { ShoppingCart } from 'lucide-react';
import { useCartStore } from '../store/useCartStore';
import type { Product } from '../types/product';
import { Link } from 'react-router-dom'; 
import { toast } from 'react-hot-toast'; // 1. Импортируем тост

interface Props {
  product: Product;
}

export const ProductCard = ({ product }: Props) => {
  const addToCart = useCartStore((state) => state.addToCart);


  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault(); 
    e.stopPropagation(); 
    
    addToCart(product);

    toast.success(`${product.title.slice(0, 20)}... 'Added to cart!',`, {
      duration: 3000,
      position: 'bottom-right',
      icon: '🛒',
      style: {
    border: '1px solid #3b82f6', // Тонкая синяя рамка
    padding: '16px',
    color: '#f8fafc',
    background: '#0f172a', // Глубокий темный цвет
    borderRadius: '16px', // Большое скругление (как на твоем MacBook Air)
    fontSize: '14px',
    fontWeight: '600',
    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
  },
});
  };

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
          onClick={handleAddToCart} // 4. Используем новую функцию
          className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-800 transition-colors shadow-sm active:scale-95"
        >
          <ShoppingCart size={20} />
        </button>
      </div>
    </div>
  );
};