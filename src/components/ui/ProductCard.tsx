import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaHeart, FaRegHeart, FaStar, FaShoppingCart } from 'react-icons/fa';
import { IconWrapper, IconWithClass } from './IconComponent';
import { Product } from '../../data/products';
import { useCart } from '../../context/CartContext';
import { useWishlist } from '../../context/WishlistContext';
import toast from 'react-hot-toast';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { product_id, product_title, price, rating, product_image, category, availability } = product;
  const { addToCart, cartItems } = useCart();
  const isInCart = (id: string | number) => cartItems.some(item => String(item.product_id) === String(id));
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  const [isHovered, setIsHovered] = useState(false);
  
  const inWishlist = isInWishlist(product_id);
  const inCart = isInCart(product_id);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (!inCart) {
      addToCart(product);
      toast.success(`${product_title} added to cart!`);
    } else {
      toast.error(`${product_title} is already in your cart!`);
    }
  };

  const handleWishlistToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (inWishlist) {
      removeFromWishlist(product_id);
      toast.success(`${product_title} removed from wishlist!`);
    } else {
      addToWishlist(product);
      toast.success(`${product_title} added to wishlist!`);
    }
  };

  return (
    <Link 
      to={`/product/${product_id}`}
      className="group relative bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Stock badge */}
      {!availability && (
        <div className="absolute top-2 left-2 z-10 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
          Out of Stock
        </div>
      )}
      
      {/* Wishlist button */}
      <button
        onClick={handleWishlistToggle}
        className="absolute top-2 right-2 z-10 bg-white p-2 rounded-full shadow-md transition-all duration-300 hover:bg-gray-100"
        aria-label={inWishlist ? 'Remove from wishlist' : 'Add to wishlist'}
      >
        {inWishlist ? (
          <IconWithClass icon={FaHeart} className="text-red-500 text-lg" />
        ) : (
          <IconWithClass icon={FaRegHeart} className="text-gray-500 text-lg group-hover:text-red-500" />
        )}
      </button>

      {/* Product image */}
      <div className="relative h-48 overflow-hidden bg-gray-100">
        <img
          src={product_image}
          alt={product_title}
          className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      {/* Product info */}
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-semibold text-gray-800 line-clamp-1">{product_title}</h3>
        </div>
        
        <div className="flex items-center mb-2">
          <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
            {category}
          </span>
        </div>

        <div className="flex items-center mb-2">
          <div className="flex items-center mr-2">
            <IconWithClass icon={FaStar} className="text-yellow-400 mr-1" />
            <span className="text-sm font-medium">{rating}</span>
          </div>
          <span className="text-sm text-gray-500">
            {availability ? 'In Stock' : 'Out of Stock'}
          </span>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-xl font-bold text-gray-900">${price.toFixed(2)}</span>
          
          <button
            onClick={handleAddToCart}
            disabled={!availability || inCart}
            className={`p-2 rounded-full transition-colors duration-300 ${!availability ? 'bg-gray-300 cursor-not-allowed' : inCart ? 'bg-green-500 text-white' : 'bg-blue-500 text-white hover:bg-blue-600'}`}
            aria-label={inCart ? 'Already in cart' : 'Add to cart'}
          >
            <IconWithClass icon={FaShoppingCart} className="text-lg" />
          </button>
        </div>
      </div>

      {/* Quick view overlay on hover */}
      <div 
        className={`absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
      >
        <span className="text-white font-medium bg-blue-600 px-4 py-2 rounded-md">
          View Details
        </span>
      </div>
    </Link>
  );
};

export default ProductCard;