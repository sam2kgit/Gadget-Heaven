import { Product } from '../data/products';

/**
 * Save data to localStorage
 * @param key The localStorage key
 * @param data The data to save
 */
export const saveToLocalStorage = <T>(key: string, data: T): void => {
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch (error) {
    console.error(`Error saving to localStorage: ${error}`);
  }
};

/**
 * Load data from localStorage
 * @param key The localStorage key
 * @param defaultValue Default value if key doesn't exist
 * @returns The parsed data or defaultValue
 */
export const loadFromLocalStorage = <T>(key: string, defaultValue: T): T => {
  try {
    const storedData = localStorage.getItem(key);
    return storedData ? JSON.parse(storedData) : defaultValue;
  } catch (error) {
    console.error(`Error loading from localStorage: ${error}`);
    return defaultValue;
  }
};

/**
 * Clear a specific key from localStorage
 * @param key The localStorage key to clear
 */
export const clearFromLocalStorage = (key: string): void => {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    console.error(`Error clearing from localStorage: ${error}`);
  }
};

// Specific functions for cart and wishlist
export const CART_STORAGE_KEY = 'gadget-heaven-cart';
export const WISHLIST_STORAGE_KEY = 'gadget-heaven-wishlist';

/**
 * Save cart items to localStorage
 * @param cartItems The cart items to save
 */
export const saveCartItems = (cartItems: Product[]): void => {
  saveToLocalStorage(CART_STORAGE_KEY, cartItems);
};

/**
 * Load cart items from localStorage
 * @returns The cart items or an empty array
 */
export const loadCartItems = (): Product[] => {
  return loadFromLocalStorage<Product[]>(CART_STORAGE_KEY, []);
};

/**
 * Save wishlist items to localStorage
 * @param wishlistItems The wishlist items to save
 */
export const saveWishlistItems = (wishlistItems: Product[]): void => {
  saveToLocalStorage(WISHLIST_STORAGE_KEY, wishlistItems);
};

/**
 * Load wishlist items from localStorage
 * @returns The wishlist items or an empty array
 */
export const loadWishlistItems = (): Product[] => {
  return loadFromLocalStorage<Product[]>(WISHLIST_STORAGE_KEY, []);
};