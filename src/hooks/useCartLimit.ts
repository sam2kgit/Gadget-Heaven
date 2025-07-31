import { useState, useEffect } from 'react';
import { Product } from '../data/products';

/**
 * Custom hook to check if adding a product would exceed the cart limit
 * @param items Current items in cart or wishlist
 * @param limit Maximum allowed total price
 * @returns Object with isLimitExceeded flag and checkLimit function
 */
const useCartLimit = (items: Product[], limit: number = 1000) => {
  const [isLimitExceeded, setIsLimitExceeded] = useState<boolean>(false);

  // Calculate current total
  const currentTotal = items.reduce((sum, item) => sum + item.price, 0);

  // Check if adding a product would exceed the limit
  const checkLimit = (product: Product): boolean => {
    const newTotal = currentTotal + product.price;
    return newTotal > limit;
  };

  // Update isLimitExceeded whenever items change
  useEffect(() => {
    setIsLimitExceeded(currentTotal >= limit);
  }, [currentTotal, limit]);

  return {
    isLimitExceeded,
    checkLimit,
    currentTotal,
    remainingBudget: limit - currentTotal
  };
};

export default useCartLimit;