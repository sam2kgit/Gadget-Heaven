import { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import toast from 'react-hot-toast';

type Product = {
  product_id: string;
  product_title: string;
  product_image: string;
  category: string;
  price: number;
  description: string;
  specification: string[];
  availability: boolean;
  rating: number;
};

type CartContextType = {
  cartItems: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
  clearCart: () => void;
  totalPrice: number;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

type CartProviderProps = {
  children: ReactNode;
};

export const CartProvider = ({ children }: CartProviderProps) => {
  const [cartItems, setCartItems] = useState<Product[]>(() => {
    // Load from localStorage on initial render
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const [totalPrice, setTotalPrice] = useState<number>(0);

  // Calculate total price whenever cart changes
  useEffect(() => {
    const total = cartItems.reduce((sum, item) => sum + item.price, 0);
    setTotalPrice(total);
    
    // Save to localStorage
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product: Product) => {
    // Check if adding this product would exceed the $1000 limit
    if (totalPrice + product.price > 1000) {
      toast.error('Cannot add item. Cart total would exceed $1000.');
      return;
    }
    
    // Check if product is already in cart
    const isProductInCart = cartItems.some(item => item.product_id === product.product_id);
    
    if (isProductInCart) {
      toast.error('This item is already in your cart.');
      return;
    }
    
    setCartItems(prevItems => [...prevItems, product]);
    toast.success('Item added to cart!');
  };

  const removeFromCart = (productId: string) => {
    setCartItems(prevItems => prevItems.filter(item => item.product_id !== productId));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart, totalPrice }}>
      {children}
    </CartContext.Provider>
  );
};