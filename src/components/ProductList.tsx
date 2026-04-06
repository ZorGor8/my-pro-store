import { ProductCard } from './ProductCard';
import { ProductSkeleton } from './ProductSkeleton';
import { useCartStore } from '../store/useCartStore';

interface ProductListProps {
  isLoading: boolean;
}

// ВАЖНО: Проверь, что здесь написано export const
export const ProductList = ({ isLoading }: ProductListProps) => {
  const products = useCartStore((state) => state.products);
  const selectedCategory = useCartStore((state) => state.selectedCategory);
  const searchQuery = useCartStore((state) => state.searchQuery);
  const setSearchQuery = useCartStore((state) => state.setSearchQuery);

  const filteredProducts = products.filter((p) => {
    // Приводим к нижнему регистру для надежности
    const selected = selectedCategory.toLowerCase();
    const prodCat = p.category.toLowerCase();
    
    const matchesCategory = selected === 'all' || prodCat === selected;
    const matchesSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="min-h-[400px]">
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
              <button 
                onClick={() => setSearchQuery('')} 
                className="mt-4 text-blue-500 underline"
              >
                Reset Search
              </button>
            </div>
          )}
        </>
      )}
    </section>
  );
}; // Проверь, чтобы эта скобка закрывала именно компонент