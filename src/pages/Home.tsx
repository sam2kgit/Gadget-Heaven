import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { products, getAllCategories, getProductsByCategory } from '../data/products';
import { FaArrowRight } from 'react-icons/fa';
import { IconWrapper } from '../components/ui/IconComponent';

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [filteredProducts, setFilteredProducts] = useState(products);
  const categories = getAllCategories();
  const navigate = useNavigate();
  
  useEffect(() => {
    if (selectedCategory) {
      setFilteredProducts(getProductsByCategory(selectedCategory));
    } else {
      setFilteredProducts(products);
    }
  }, [selectedCategory]);
  
  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <div className="bg-gradient-to-r from-primary to-secondary text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome to GadgetHeaven</h1>
            <p className="text-xl mb-8">Your go-to destination for the latest and greatest gadgets</p>
            <button 
              onClick={() => navigate('/dashboard')} 
              className="bg-white text-primary hover:bg-gray-100 px-6 py-3 rounded-md font-medium flex items-center space-x-2 transition-colors duration-200"
            >
              <span>Explore Dashboard</span>
              <IconWrapper icon={FaArrowRight} />
            </button>
          </div>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Categories Sidebar */}
          <div className="w-full md:w-1/4 lg:w-1/5">
            <div className="bg-white rounded-lg shadow-md p-4">
              <h2 className="text-xl font-semibold mb-4">Categories</h2>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => setSelectedCategory('')}
                    className={`w-full text-left px-3 py-2 rounded-md transition-colors ${!selectedCategory ? 'bg-primary text-white' : 'hover:bg-gray-100'}`}
                  >
                    All Gadgets
                  </button>
                </li>
                {categories.map((category) => (
                  <li key={category}>
                    <button
                      onClick={() => setSelectedCategory(category)}
                      className={`w-full text-left px-3 py-2 rounded-md capitalize transition-colors ${selectedCategory === category ? 'bg-primary text-white' : 'hover:bg-gray-100'}`}
                      id={category}
                    >
                      {category}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          {/* Products Grid */}
          <div className="w-full md:w-3/4 lg:w-4/5">
            <h2 className="text-2xl font-semibold mb-6">
              {selectedCategory ? (
                <span className="capitalize">{selectedCategory}</span>
              ) : (
                'All Gadgets'
              )}
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <div key={product.product_id} className="card group">
                  <div className="relative overflow-hidden h-48">
                    <img 
                      src={product.product_image} 
                      alt={product.product_title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold mb-2">{product.product_title}</h3>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xl font-bold text-primary">${product.price.toFixed(2)}</span>
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <svg 
                            key={i} 
                            className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'}`} 
                            fill="currentColor" 
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                        <span className="ml-1 text-sm text-gray-500">({product.rating})</span>
                      </div>
                    </div>
                    <Link 
                      to={`/product/${product.product_id}`} 
                      className="btn btn-primary w-full text-center"
                    >
                      Details
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;