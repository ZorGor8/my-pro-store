import { ProductCard } from './ProductCard';
import { ProductSkeleton } from './ProductSkeleton';
import { useCartStore } from '../store/useCartStore';

// 1. Описываем, что компонент ждет на вход (Define what the component expects)
interface ProductListProps {
  isLoading: boolean;
}

export const ProductList = ({ isLoading }: ProductListProps) => {
  const products = useCartStore((state) => state.products);
  const selectedCategory = useCartStore((state) => state.selectedCategory);
  const searchQuery = useCartStore((state) => state.searchQuery);
  const setSearchQuery = useCartStore((state) => state.setSearchQuery);

  // Логика фильтрации остается (Filtering logic stays)
  const filteredProducts = products.filter((p) => {
    const matchesCategory = selectedCategory === 'all' || p.category === selectedCategory;
    const matchesSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="min-h-[400px]">
      {/* 2. Используем isLoading из пропсов (Use isLoading from props) */}
      {isLoading ? ( 
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[...Array(8)].map((_, i) => (
            <ProductSkeleton key={i} />
          ))}
        </div>
      ) : (
        <>
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-white rounded-[3rem] shadow-sm border border-gray-100">
              <span className="text-6xl mb-4 block">🔍</span>
              <h3 className="text-2xl font-bold uppercase tracking-tighter">Ничего не нашли</h3>
              {/* [Russian translation: Nothing found] */}
              <button onClick={() => setSearchQuery('')} className="...">Reset Search</button>
            </div>
          )}
        </>
      )}
    </section>
  );
};