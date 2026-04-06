import { useEffect, useState } from 'react';
import { useCartStore } from '../store/useCartStore';
import type { Product } from '../types/product'; 
import mockProducts from '../products.json'; 

export const useShopData = () => {
  const setProducts = useCartStore((state) => state.setProducts);
  const [categories] = useState(["electronics", "jewelery", "men's clothing", "women's clothing"]);

  useEffect(() => {
    const data: Product[] = (mockProducts as Product[]).map((product, index) => {
      const cat = product.category.toLowerCase().trim();
      let imgNum = 1;

      // Применяем твою схему диапазонов:
      if (cat.includes("electr")) {
        imgNum = (index % 5) + 1;  // 1-5
      } else if (cat.includes("jewel")) {
        imgNum = (index % 5) + 6;  // 6-10
      } else if (cat.includes("women")) {
        imgNum = (index % 5) + 16; // 16-20
      } else if (cat.includes("men")) {
        imgNum = (index % 5) + 11; // 11-15
      }

      return {
        ...product,
        category: cat,
        image: `/products/${imgNum}.jpeg` // Подставляем номер в путь
      };
    });

    setProducts(data);
  }, [setProducts]);

  return { categories, isLoading: false, error: null };
};