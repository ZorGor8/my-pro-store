import { useEffect, useState } from 'react';
import { useCartStore } from '../store/useCartStore';
import type { Product } from '../types/product'; 

export const useShopData = () => {
  const setProducts = useCartStore((state) => state.setProducts);
  const [categories, setCategories] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const [catRes, prodRes] = await Promise.all([
          fetch('https://fakestoreapi.com/products/categories'),
          fetch('https://fakestoreapi.com/products')
        ]);

        if (!catRes.ok || !prodRes.ok) throw new Error('Ошибка сети (Network error)');

        const catData: string[] = await catRes.json();
        const prodData: Product[] = await prodRes.json(); 
        setCategories(catData);
        setProducts(prodData);
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError('An unexpected error occurred');
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [setProducts]);

  return { categories, isLoading, error };
};