import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Product } from "../types/product";

interface CartItem extends Product {
  quantity: number;
}

interface CartState {
  cart: CartItem[];
  products: Product[];
  isInitialLoading: boolean; // Добавь это (Add this)
  setLoading: (loading: boolean) => void; // И это (And this)
  setProducts: (products: Product[]) => void;
  clearCart: () => void;
  isCartOpen: boolean;
  selectedCategory: string;
  searchQuery: string;
  setCategory: (category: string) => void;
  setSearchQuery: (query: string) => void;
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
  updateQuantity: (productId: number, amount: number) => void;
  toggleCart: () => void;
  discount: number;
  applyPromo: (code: string) => boolean;
}

export const useCartStore = create<CartState>()(
  persist(
    (set) => ({
      cart: [],
      products: [],
      isInitialLoading: true, // Изначально мы "грузимся" (Starting as true)
      setLoading: (loading) => set({ isInitialLoading: loading }),
      // ----------------------------------------

      // Обновляем setProducts, чтобы он выключал загрузку
      setProducts: (products) =>
        set({
          products,
          isInitialLoading: false, // Когда продукты пришли, загрузка окончена
        }),

      isCartOpen: false,
      searchQuery: "",
      selectedCategory: "all",

      //Initial state:
      discount: 0,

      setSearchQuery: (query) => set({ searchQuery: query }),
      setCategory: (category) => set({ selectedCategory: category }),
      clearCart: () => set({ cart: [] }),

      applyPromo: (code: string) => {
        if (code === "IGOR10") {
          set({ discount: 10 });
          return true;
        }
        return false;
      },

      addToCart: (product) =>
        set((state) => {
          const existingItem = state.cart.find(
            (item) => item.id === product.id,
          );
          if (existingItem) {
            return {
              cart: state.cart.map((item) =>
                item.id === product.id
                  ? { ...item, quantity: item.quantity + 1 }
                  : item,
              ),
            };
          }
          return { cart: [...state.cart, { ...product, quantity: 1 }] };
        }),

      updateQuantity: (productId, amount) =>
        set((state) => ({
          cart: state.cart.map((item) =>
            item.id === productId
              ? { ...item, quantity: Math.max(1, item.quantity + amount) }
              : item,
          ),
        })),

      removeFromCart: (productId) =>
        set((state) => ({
          cart: state.cart.filter((item) => item.id !== productId),
        })),

      toggleCart: () => set((state) => ({ isCartOpen: !state.isCartOpen })),
    }),
    {
      name: "cart-storage",
      // Маленький совет: не стоит сохранять ВСЕ товары в LocalStorage,
      // лучше сохранять только корзину (cart). Но пока оставим так для простоты.
 partialize: (state) => {
  // Мы извлекаем ненужное, а всё остальное (...rest) возвращаем
  const { isInitialLoading, ...rest } = state;
  console.log(isInitialLoading); // Временно добавим это, чтобы линтер не ругался
  return rest;
},
    },
  ),
);
