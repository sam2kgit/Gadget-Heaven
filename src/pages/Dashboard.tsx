import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import { FaShoppingCart, FaHeart, FaCheck, FaSort, FaTrash } from 'react-icons/fa';
import { IconWrapper, IconWithClass } from '../components/ui/IconComponent';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState<'cart' | 'wishlist'>('cart');
  const [showModal, setShowModal] = useState(false);
  const { cartItems, removeFromCart, clearCart, totalPrice } = useCart();
  const { wishlistItems, removeFromWishlist, moveToCart } = useWishlist();
  const [sortedCartItems, setSortedCartItems] = useState([...cartItems]);
  const [isSorted, setIsSorted] = useState(false);
  const navigate = useNavigate();
  
  // Sort cart items by price (descending)
  const handleSortByPrice = () => {
    const sorted = [...cartItems].sort((a, b) => b.price - a.price);
    setSortedCartItems(sorted);
    setIsSorted(true);
  };
  
  // Reset sorting
  const resetSort = () => {
    setSortedCartItems([...cartItems]);
    setIsSorted(false);
  };
  
  // Handle purchase
  const handlePurchase = () => {
    setShowModal(true);
  };
  
  // Close modal and clear cart
  const handleCloseModal = () => {
    setShowModal(false);
    clearCart();
    navigate('/');
  };
  
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">Dashboard</h1>
      
      {/* Tabs */}
      <div className="flex border-b border-gray-200 mb-6">
        <button
          onClick={() => setActiveTab('cart')}
          className={`flex items-center py-3 px-6 ${activeTab === 'cart' ? 'border-b-2 border-primary text-primary font-medium' : 'text-gray-600 hover:text-gray-800'}`}
        >
          <IconWithClass icon={FaShoppingCart} className="mr-2" /> Cart
        </button>
        <button
          onClick={() => setActiveTab('wishlist')}
          className={`flex items-center py-3 px-6 ${activeTab === 'wishlist' ? 'border-b-2 border-primary text-primary font-medium' : 'text-gray-600 hover:text-gray-800'}`}
        >
          <IconWithClass icon={FaHeart} className="mr-2" /> Wishlist
        </button>
      </div>
      
      {/* Cart Tab */}
      {activeTab === 'cart' && (
        <div>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold">Your Cart</h2>
            <div className="flex items-center space-x-4">
              <button
                onClick={isSorted ? resetSort : handleSortByPrice}
                className={`btn ${isSorted ? 'bg-gray-200 text-gray-800' : 'bg-gray-100 hover:bg-gray-200 text-gray-800'} flex items-center`}
              >
                {isSorted ? (
                  <>
                    <IconWithClass icon={FaCheck} className="mr-2" /> Sorted by Price
                  </>
                ) : (
                  <>
                    <IconWithClass icon={FaSort} className="mr-2" /> Sort by Price
                  </>
                )}
              </button>
              <div className="text-lg font-bold text-primary">
                Total: ${totalPrice.toFixed(2)}
              </div>
            </div>
          </div>
          
          {cartItems.length === 0 ? (
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="text-gray-500 mb-4">
                <IconWithClass icon={FaShoppingCart} className="mx-auto text-4xl mb-4 text-gray-300" />
                <p>Your cart is empty</p>
              </div>
              <button
                onClick={() => navigate('/')}
                className="btn btn-primary"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <div>
              <div className="grid grid-cols-1 gap-4 mb-6">
                {(isSorted ? sortedCartItems : cartItems).map((item) => (
                  <div key={item.product_id} className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="flex flex-col sm:flex-row">
                      <div className="sm:w-1/4 h-32 sm:h-auto">
                        <img
                          src={item.product_image}
                          alt={item.product_title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1 p-4 flex flex-col justify-between">
                        <div>
                          <h3 className="text-lg font-semibold mb-2">{item.product_title}</h3>
                          <p className="text-gray-600 mb-2 line-clamp-2">{item.description}</p>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-xl font-bold text-primary">${item.price.toFixed(2)}</span>
                          <button
                            onClick={() => removeFromCart(item.product_id)}
                            className="text-red-500 hover:text-red-700 p-2"
                          >
                            <IconWrapper icon={FaTrash} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="flex justify-between items-center mt-8">
                <button
                  onClick={() => navigate('/')}
                  className="btn bg-gray-200 hover:bg-gray-300 text-gray-800"
                >
                  Continue Shopping
                </button>
                <button
                  onClick={handlePurchase}
                  className="btn btn-primary"
                  disabled={cartItems.length === 0 || totalPrice === 0}
                >
                  Purchase (${totalPrice.toFixed(2)})
                </button>
              </div>
            </div>
          )}
        </div>
      )}
      
      {/* Wishlist Tab */}
      {activeTab === 'wishlist' && (
        <div>
          <h2 className="text-xl font-semibold mb-6">Your Wishlist</h2>
          
          {wishlistItems.length === 0 ? (
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="text-gray-500 mb-4">
                <IconWithClass icon={FaHeart} className="mx-auto text-4xl mb-4 text-gray-300" />
                <p>Your wishlist is empty</p>
              </div>
              <button
                onClick={() => navigate('/')}
                className="btn btn-primary"
              >
                Explore Products
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {wishlistItems.map((item) => (
                <div key={item.product_id} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="h-48 overflow-hidden">
                    <img
                      src={item.product_image}
                      alt={item.product_title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold mb-2">{item.product_title}</h3>
                    <p className="text-gray-600 mb-4 line-clamp-2">{item.description}</p>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xl font-bold text-primary">${item.price.toFixed(2)}</span>
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <svg 
                            key={i} 
                            className={`w-4 h-4 ${i < Math.floor(item.rating) ? 'text-yellow-400' : 'text-gray-300'}`} 
                            fill="currentColor" 
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <button
                        onClick={() => moveToCart(item.product_id)}
                        className="btn btn-primary flex-1 flex items-center justify-center"
                      >
                        <IconWithClass icon={FaShoppingCart} className="mr-2" /> Add to Cart
                      </button>
                      <button
                        onClick={() => removeFromWishlist(item.product_id)}
                        className="btn bg-red-500 hover:bg-red-600 text-white px-3"
                      >
                        <IconWrapper icon={FaTrash} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
      
      {/* Purchase Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 max-w-md w-full">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <IconWithClass icon={FaCheck} className="text-green-600 text-2xl" />
              </div>
              <h2 className="text-2xl font-bold mb-4">Thank You for Your Purchase!</h2>
              <p className="text-gray-600 mb-6">Your order has been successfully placed.</p>
              <button
                onClick={handleCloseModal}
                className="btn btn-primary w-full"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;