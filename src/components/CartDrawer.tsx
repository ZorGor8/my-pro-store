import { useNavigate } from 'react-router-dom'; 
import { useCartStore } from '../store/useCartStore';

export const CartDrawer = () => {
  const navigate = useNavigate(); 
  
  const { cart, isCartOpen, toggleCart, updateQuantity, removeFromCart } = useCartStore();

  const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <>
      
      {isCartOpen && (
        <div 
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition-opacity duration-300"
          onClick={toggleCart} 
        />
      )}

      {/* 2. БОКОВАЯ ПАНЕЛЬ */}
      <div className={`fixed top-0 right-0 h-full w-full max-w-md bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${
        isCartOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        
        <div className="p-6 h-full flex flex-col">
          {/* ЗАГОЛОВОК */}
          <div className="flex justify-between items-center mb-8 border-b pb-4">
            <h2 className="text-2xl font-bold text-gray-900">Корзина (Cart)</h2>
            <button 
              onClick={toggleCart} 
              className="text-gray-400 hover:text-red-500 transition-colors text-3xl"
            >
              &times;
            </button>
          </div>

          {/* СПИСОК ТОВАРОВ */}
          <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar">
            {cart.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-gray-400">
                <span className="text-6xl mb-4">🛒</span>
                <p>Тут пока пусто... (It's empty here...)</p>
              </div>
            ) : (
              cart.map((item) => (
                <div key={item.id} className="flex items-center gap-4 mb-4 p-3 bg-gray-50 rounded-2xl group transition-all hover:bg-gray-100">
                  <img src={item.image} alt={item.title} className="w-20 h-20 object-contain bg-white rounded-xl p-2 shadow-sm" />
                  
                  <div className="flex-1">
                    <h4 className="text-sm font-bold text-gray-800 line-clamp-1">{item.title}</h4>
                    <p className="text-blue-600 font-extrabold mt-1">${item.price}</p>
          
                    <div className="flex items-center gap-3 mt-3">
                      <button 
                        onClick={() => updateQuantity(item.id, -1)}
                        className="w-7 h-7 bg-white rounded-lg border border-gray-200 flex items-center justify-center font-bold hover:bg-red-50 hover:text-red-500 transition-colors shadow-sm active:scale-90"
                      >
                        -
                      </button>
                      
                      <span className="font-bold text-gray-700 min-w-[12px] text-center">
                        {item.quantity}
                      </span>
                      
                      <button 
                        onClick={() => updateQuantity(item.id, 1)}
                        className="w-7 h-7 bg-white rounded-lg border border-gray-200 flex items-center justify-center font-bold hover:bg-green-50 hover:text-green-500 transition-colors shadow-sm active:scale-90"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <button 
                    onClick={() => removeFromCart(item.id)}
                    className="p-2 text-gray-300 hover:text-red-500 transition-colors"
                  >
                    🗑️
                  </button>
                </div>
              ))
            )}
          </div>

          {/* НИЖНЯЯ ЧАСТЬ (ИТОГО) */}
          <div className="border-t pt-6 mt-6">
            <div className="flex justify-between items-center mb-6">
              <span className="text-gray-500 font-medium">Общая сумма: (Total amount:)</span>
              <span className="text-2xl font-black text-gray-900">${total.toFixed(2)}</span>
            </div>
            
            <button 
              onClick={() => {
                toggleCart(); 
                navigate('/checkout');
              }}
              className="w-full bg-black text-white py-4 rounded-2xl font-bold text-lg shadow-lg shadow-gray-200 active:scale-95 transition-all hover:bg-gray-800 disabled:bg-gray-200 disabled:cursor-not-allowed"
              disabled={cart.length === 0}
            >
              Оформить заказ (Checkout)
            </button>
            
            <button 
              onClick={toggleCart}
              className="w-full mt-3 text-gray-500 font-semibold py-2 hover:text-black transition-colors"
            >
              Продолжить покупки (Continue shopping)
            </button>
          </div>
        </div>
      </div>
    </>
  );
};