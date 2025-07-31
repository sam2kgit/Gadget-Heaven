import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getProductById } from '../data/products';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import { FaShoppingCart, FaHeart } from 'react-icons/fa';
import { IoArrowBack } from 'react-icons/io5';
import { IconWrapper, IconWithClass } from '../components/ui/IconComponent';

const ProductDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCart();
  const { addToWishlist, isInWishlist } = useWishlist();
  const navigate = useNavigate();
  
  useEffect(() => {
    if (id) {
      const foundProduct = getProductById(id);
      setProduct(foundProduct);
      setLoading(false);
    }
  }, [id]);
  
  if (loading) {
    return (
      <div className="container mx-auto px-4 py-12 flex justify-center items-center min-h-[60vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }
  
  if (!product) {
    return (
      <div className="container mx-auto px-4 py-12 text-center min-h-[60vh] flex flex-col items-center justify-center">
        <h2 className="text-2xl font-semibold mb-4">Product Not Found</h2>
        <p className="mb-6">Sorry, we couldn't find the product you're looking for.</p>
        <button 
          onClick={() => navigate('/')} 
          className="btn btn-primary flex items-center"
        >
          <IconWithClass icon={IoArrowBack} className="mr-2" /> Back to Home
        </button>
      </div>
    );
  }
  
  const isWishlisted = isInWishlist(product.product_id);
  
  return (
    <div className="container mx-auto px-4 py-12">
      <button 
        onClick={() => navigate(-1)} 
        className="flex items-center text-gray-600 hover:text-primary mb-6 transition-colors"
      >
        <IconWithClass icon={IoArrowBack} className="mr-1" /> Back
      </button>
      
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6">
          {/* Product Image */}
          <div className="rounded-lg overflow-hidden">
            <img 
              src={product.product_image} 
              alt={product.product_title} 
              className="w-full h-auto object-cover"
            />
          </div>
          
          {/* Product Info */}
          <div>
            <h1 className="text-3xl font-bold mb-2">{product.product_title}</h1>
            
            <div className="flex items-center mb-4">
              {[...Array(5)].map((_, i) => (
                <svg 
                  key={i} 
                  className={`w-5 h-5 ${i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'}`} 
                  fill="currentColor" 
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
              <span className="ml-2 text-gray-600">{product.rating} out of 5</span>
            </div>
            
            <div className="text-3xl font-bold text-primary mb-6">
              ${product.price.toFixed(2)}
            </div>
            
            <div className="mb-6">
              <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${product.availability ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                {product.availability ? 'In Stock' : 'Out of Stock'}
              </span>
              <span className="inline-block ml-2 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-sm font-medium capitalize">
                {product.category}
              </span>
            </div>
            
            <p className="text-gray-700 mb-6">{product.description}</p>
            
            <div className="flex space-x-4 mb-8">
              <button 
                onClick={() => addToCart(product)} 
                className="btn btn-primary flex-1 flex items-center justify-center"
                disabled={!product.availability}
              >
                <IconWithClass icon={FaShoppingCart} className="mr-2" /> Add to Cart
              </button>
              
              <button 
                onClick={() => addToWishlist(product)} 
                className={`btn flex items-center justify-center px-4 ${isWishlisted ? 'bg-red-500 text-white' : 'bg-gray-200 hover:bg-gray-300 text-gray-800'}`}
                disabled={isWishlisted}
              >
                <IconWrapper icon={FaHeart} />
              </button>
            </div>
          </div>
        </div>
        
        {/* Specifications */}
        <div className="border-t border-gray-200 p-6">
          <h2 className="text-xl font-semibold mb-4">Specifications</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-2 gap-x-4">
            {product.specification.map((spec: string, index: number) => (
              <li key={index} className="flex items-start">
                <svg className="w-5 h-5 text-primary mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>{spec}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;