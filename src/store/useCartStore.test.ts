import { describe, it, expect, beforeEach } from 'vitest';
import { useCartStore } from './useCartStore';
import type { Product } from '../types/product';

describe('useCartStore logic', () => {

  beforeEach(() => {
    useCartStore.getState().clearCart();
    useCartStore.setState({ discount: 0 });
  });

  it('should add a new product with quantity 1', () => {
    const mockProduct = { 
      id: 1, 
      title: 'Guitar', 
      price: 500 
    } as unknown as Product;

    useCartStore.getState().addToCart(mockProduct);

    const { cart } = useCartStore.getState();
    expect(cart.length).toBe(1);
    expect(cart[0].quantity).toBe(1);
  });

  it('should increase quantity if same product is added twice', () => {
    const mockProduct = { 
      id: 1, 
      title: 'Guitar', 
      price: 500 
    } as unknown as Product;

    useCartStore.getState().addToCart(mockProduct);
    useCartStore.getState().addToCart(mockProduct);

    const { cart } = useCartStore.getState();
    expect(cart.length).toBe(1); 
    expect(cart[0].quantity).toBe(2); 
  });

  it('should apply 10% discount with code IGOR10', () => {
    const result = useCartStore.getState().applyPromo('IGOR10');
    
    expect(result).toBe(true);
    expect(useCartStore.getState().discount).toBe(10);
  });

  it('should not apply discount with wrong code', () => {
    const result = useCartStore.getState().applyPromo('WRONG_CODE');
    
    expect(result).toBe(false);
    expect(useCartStore.getState().discount).toBe(0);
  });

  it('should remove product from cart', () => {
    const mockProduct = { id: 1, title: 'Guitar', price: 500 } as unknown as Product;
    
    useCartStore.getState().addToCart(mockProduct);
    useCartStore.getState().removeFromCart(1);

    const { cart } = useCartStore.getState();
    expect(cart.length).toBe(0);
  });
});