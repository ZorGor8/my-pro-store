import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useCartStore } from '../store/useCartStore';

export const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  
  const addToCart = useCartStore((state) => state.addToCart);
  const products = useCartStore((state) => state.products);
  const setProducts = useCartStore((state) => state.setProducts);

  const [isSyncing, setIsSyncing] = useState(false);

  useEffect(() => {
    
    if (products.length === 0) {
      const fetchData = async () => {
        setIsSyncing(true);
        try {
          const res = await fetch('https://fakestoreapi.com/products');
          const data = await res.json();
          setProducts(data); 
        } catch (error) {
          console.error("Ошибка синхронизации:", error);
        } finally {
          setIsSyncing(false);
        }
      };
      fetchData();
    }
  }, [products.length, setProducts]);


const product = products.find((p) => String(p.id) === String(id));

  // 4. (UX)
  if (isSyncing || (products.length === 0)) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
        <p className="mt-4 text-gray-500 font-medium">Синхронизируем данные...</p>
      </div>
    );
  }


  if (!product) {
    return (
      <div className="max-w-md mx-auto p-10 mt-20 text-center bg-white rounded-3xl shadow-sm">
        <span className="text-6xl">🏜️</span>
        <h2 className="text-2xl font-bold mt-4">Товар не найден</h2>
        <p className="text-gray-500 mt-2 text-sm">Возможно, он был удален или ссылка неверна.</p>
        <button 
          onClick={() => navigate('/')} 
          className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-xl hover:bg-blue-700 transition-all"
        >
          Вернуться в магазин
        </button>
      </div>
    );
  }

  
  return (
    <div className="max-w-5xl mx-auto p-6 mt-10 bg-white rounded-3xl shadow-sm border border-gray-50">
      <button 
        onClick={() => navigate(-1)} 
        className="mb-8 text-blue-600 font-bold flex items-center gap-2 hover:translate-x-[-4px] transition-transform"
      >
        ← Назад к покупкам
      </button>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="bg-gray-50 rounded-3xl p-8 flex items-center justify-center hover:bg-gray-100 transition-colors">
          <img 
            src={product.image} 
            alt={product.title} 
            className="max-h-[400px] object-contain drop-shadow-xl" 
          />
        </div>
        
        <div className="flex flex-col justify-center">
          <span className="text-sm text-blue-500 font-bold uppercase tracking-widest">{product.category}</span>
          <h1 className="text-4xl font-extrabold text-gray-900 mt-2 leading-tight">{product.title}</h1>
          <p className="text-gray-500 mt-6 text-lg leading-relaxed">{product.description}</p>
          
          <div className="mt-10 flex items-center justify-between bg-blue-50/50 p-6 rounded-[2rem] border border-blue-100">
            <span className="text-3xl font-black text-gray-900">${product.price}</span>
            <button 
              onClick={() => addToCart(product)}
              className="bg-blue-600 text-white px-10 py-4 rounded-2xl font-bold hover:bg-blue-700 shadow-lg shadow-blue-200 transition-all active:scale-95"
            >
              Добавить в корзину
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};