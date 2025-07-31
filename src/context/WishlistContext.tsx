import { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import toast from 'react-hot-toast';
import { useCart } from './CartContext';

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

type WishlistContextType = {
  wishlistItems: Product[];
  addToWishlist: (product: Product) => void;
  removeFromWishlist: (productId: string) => void;
  moveToCart: (productId: string) => void;
  isInWishlist: (productId: string) => boolean;
};

const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

export const useWishlist = () => {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error('useWishlist must be used within a WishlistProvider');
  }
  return context;
};

type WishlistProviderProps = {
  children: ReactNode;
};

export const WishlistProvider = ({ children }: WishlistProviderProps) => {
  const [wishlistItems, setWishlistItems] = useState<Product[]>(() => {
    // Load from localStorage on initial render
    const savedWishlist = localStorage.getItem('wishlist');
    return savedWishlist ? JSON.parse(savedWishlist) : [];
  });
  
  const { addToCart, totalPrice } = useCart();

  // Save to localStorage whenever wishlist changes
  useEffect(() => {
    localStorage.setItem('wishlist', JSON.stringify(wishlistItems));
  }, [wishlistItems]);

  const addToWishlist = (product: Product) => {
    // Check if product is already in wishlist
    const isProductInWishlist = wishlistItems.some(item => item.product_id === product.product_id);
    
    if (isProductInWishlist) {
      toast.error('This item is already in your wishlist.');
      return;
    }
    
    setWishlistItems(prevItems => [...prevItems, product]);
    toast.success('Item added to wishlist!');
  };

  const removeFromWishlist = (productId: string) => {
    setWishlistItems(prevItems => prevItems.filter(item => item.product_id !== productId));
  };

  const moveToCart = (productId: string) => {
    const product = wishlistItems.find(item => item.product_id === productId);
    
    if (!product) return;
    
    // Check if adding this product would exceed the $1000 limit
    if (totalPrice + product.price > 1000) {
      toast.error('Cannot add to cart. Total would exceed $1000.');
      return;
    }
    
    // Add to cart and remove from wishlist
    addToCart(product);
    removeFromWishlist(productId);
  };

  const isInWishlist = (productId: string) => {
    return wishlistItems.some(item => item.product_id === productId);
  };

  return (
    <WishlistContext.Provider value={{ 
      wishlistItems, 
      addToWishlist, 
      removeFromWishlist, 
      moveToCart,
      isInWishlist
    }}>
      {children}
    </WishlistContext.Provider>
  );
};