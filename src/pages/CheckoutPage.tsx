import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCartStore } from '../store/useCartStore';

export const CheckoutPage = () => {
  const navigate = useNavigate();
 
  const { cart, clearCart, discount, applyPromo } = useCartStore();
  
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '', address: '' });
  const [errors, setErrors] = useState({ name: '', phone: '', address: '' });
  const [promoError, setPromoError] = useState('');


  const subtotal = cart.reduce((sum, item) => sum + item.price * (item.quantity || 1), 0);
  const discountAmount = (subtotal * discount) / 100;
  const totalPrice = subtotal - discountAmount;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const newErrors = { name: '', phone: '', address: '' };
    let isValid = true;

    if (formData.name.trim().length < 2) {
      newErrors.name = 'Минимум 2 символа (Minimum 2 characters)';
      isValid = false;
    }

    const phoneRegex = /^\+380\d{9}$/;
    const cleanPhone = formData.phone.replace(/\s/g, '');
    if (!phoneRegex.test(cleanPhone)) {
      newErrors.phone = 'Формат: +380XXXXXXXXX (+380 followed by 9 digits)';
      isValid = false;
    }

    if (formData.address.trim().length < 10) {
      newErrors.address = 'Введите подробный адрес (Min. 10 characters)';
      isValid = false;
    }

    setErrors(newErrors);

    if (isValid) {
      console.log('Validation passed!', { customer: formData, items: cart, total: totalPrice });
      setIsSuccess(true);
    }
  };

  if (cart.length === 0 && !isSuccess) {
    return (
      <div className="text-center py-40">
        <h2 className="text-2xl font-bold text-gray-400">В корзине еще ничего нет... (Cart is empty)</h2>
        <button onClick={() => navigate('/')} className="mt-4 text-blue-600 font-bold hover:underline">
          Вернуться к покупкам
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto p-6 mt-10 min-h-screen">
      <h1 className="text-4xl font-black mb-10 text-gray-900">Оформление заказа [Checkout]</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* ЛЕВАЯ КОЛОНКА: ФОРМА (LEFT COLUMN: FORM) */}
        <div className="bg-white p-8 rounded-[3rem] shadow-sm border border-gray-100">
          <h2 className="text-xl font-bold mb-6 ml-1">Данные получателя</h2>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-bold mb-2 ml-1 text-gray-600">Ваше имя</label>
              <input 
                className={`w-full p-4 rounded-2xl border-none focus:ring-2 transition-all ${
                  errors.name ? 'bg-red-50 focus:ring-red-500' : 'bg-gray-50 focus:ring-blue-500'
                }`}
                placeholder="Игорь"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
              {errors.name && <p className="text-red-500 text-xs mt-2 ml-2 font-bold">{errors.name}</p>}
            </div>

            <div>
              <label className="block text-sm font-bold mb-2 ml-1 text-gray-600">Телефон</label>
              <input 
                className={`w-full p-4 rounded-2xl border-none focus:ring-2 transition-all ${
                  errors.phone ? 'bg-red-50 focus:ring-red-500' : 'bg-gray-50 focus:ring-blue-500'
                }`}
                placeholder="+380991234567"
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
              />
              {errors.phone && <p className="text-red-500 text-xs mt-2 ml-2 font-bold">{errors.phone}</p>}
            </div>

            <div>
              <label className="block text-sm font-bold mb-2 ml-1 text-gray-600">Адрес доставки</label>
              <textarea 
                className={`w-full p-4 rounded-2xl border-none focus:ring-2 transition-all min-h-[120px] ${
                  errors.address ? 'bg-red-50 focus:ring-red-500' : 'bg-gray-50 focus:ring-blue-500'
                }`}
                placeholder="Город, улица, номер дома..."
                value={formData.address}
                onChange={(e) => setFormData({...formData, address: e.target.value})}
              />
              {errors.address && <p className="text-red-500 text-xs mt-2 ml-2 font-bold">{errors.address}</p>}
            </div>

            <button type="submit" className="w-full bg-blue-600 text-white py-5 rounded-2xl font-bold text-lg hover:bg-blue-700 transition-all shadow-lg shadow-blue-100 mt-4">
              Подтвердить заказ
            </button>
          </form>
        </div>

     
        <div className="bg-gray-900 text-white p-8 rounded-[3.5rem] h-fit sticky top-10 border border-gray-800 shadow-2xl">
          <h2 className="text-xl font-bold mb-8">Ваш заказ</h2>
          
          <div className="space-y-4 max-h-[300px] overflow-y-auto mb-6 pr-2 custom-scrollbar">
            {cart.map((item) => (
              <div key={item.id} className="flex justify-between items-center py-2 border-b border-gray-800">
                <div className="flex flex-col">
                  <span className="font-medium text-gray-200 truncate max-w-[180px] text-sm">{item.title}</span>
                  <span className="text-[10px] text-gray-500 uppercase tracking-widest">Qty: {item.quantity || 1}</span>
                </div>
                <span className="font-bold text-blue-400 text-sm">${(item.price * (item.quantity || 1)).toFixed(2)}</span>
              </div>
            ))}
          </div>

          {/* SECTION: PROMO CODE  */}
          <div className="mt-6 mb-8 p-5 bg-gray-800/40 rounded-3xl border border-gray-700/50">
            <label className="block text-[10px] font-black text-gray-500 mb-3 uppercase tracking-[0.2em] ml-1">
              Have a promo code? (Есть промокод?)
            </label>
            <div className="flex gap-2">
              <input 
                type="text" 
                id="promo-input"
                placeholder="Try IGOR10" 
                className="flex-1 bg-gray-900/80 border border-gray-700 rounded-xl p-3 text-white focus:ring-2 focus:ring-blue-500 outline-none text-sm placeholder:text-gray-700 transition-all"
              />
              <button 
                type="button"
                onClick={() => {
                  const input = document.getElementById('promo-input') as HTMLInputElement;
                  if (applyPromo(input.value)) {
                    input.value = ''; 
                    setPromoError('');
                  } else {
                    setPromoError('Invalid promo code (Неверный код)');
     
                    setTimeout(() => setPromoError(''), 3000);
                  }
                }}
                className="bg-blue-600 px-5 rounded-xl font-bold hover:bg-blue-500 transition-all text-xs active:scale-90"
              >
                Apply
              </button>
            </div>
            
            {discount > 0 && (
              <div className="flex items-center gap-2 mt-3 text-green-400 text-[11px] font-bold animate-pulse">
                <span className="bg-green-400/20 w-5 h-5 flex items-center justify-center rounded-full text-[10px]">✓</span>
                10% DISCOUNT APPLIED! (СКИДКА 10% ПРИМЕНЕНА!)
              </div>
            )}
          </div>

          {/* TOTALS (ИТОГИ) */}
          <div className="space-y-3 pt-6 border-t border-gray-800">
            <div className="flex justify-between text-sm text-gray-500 font-medium">
              <span>Subtotal (Сумма):</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
           
{promoError && (
  <div className="flex items-center gap-2 mt-3 text-red-400 text-[11px] font-bold animate-bounce">
    <span className="bg-red-400/20 w-5 h-5 flex items-center justify-center rounded-full text-[10px]">✕</span>
    {promoError}
  </div>
)}

            {discount > 0 && (
              <div className="flex justify-between text-sm text-green-400 font-bold">
                <span>Discount (Скидка 10%):</span>
                <span>-${discountAmount.toFixed(2)}</span>
              </div>
            )}

            <div className="flex justify-between items-center pt-4">
              <span className="text-gray-200 font-bold text-lg">Total (Итого):</span>
              <span className="text-4xl font-black text-white tracking-tighter">${totalPrice.toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>

      {/* MODAL */}
      {isSuccess && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-md z-[100] flex items-center justify-center p-4">
          <div className="bg-white rounded-[3.5rem] p-12 max-w-sm w-full text-center shadow-2xl border border-gray-100">
            <div className="w-24 h-24 bg-green-50 text-green-500 rounded-full flex items-center justify-center mx-auto mb-8 text-5xl shadow-inner">✓</div>
            <h2 className="text-3xl font-black text-gray-900 leading-tight">Заказ принят!</h2>
            <p className="text-gray-500 mt-5 leading-relaxed text-sm">
              Спасибо, <span className="font-bold text-gray-900">{formData.name}</span>! <br/>
              К оплате: <span className="font-bold text-blue-600">${totalPrice.toFixed(2)}</span>
            </p>
            <button onClick={() => { clearCart(); navigate('/'); }} className="w-full mt-10 bg-gray-900 text-white py-5 rounded-2xl font-bold hover:bg-black transition-all active:scale-95 shadow-xl shadow-gray-200">
              Вернуться в магазин
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

















