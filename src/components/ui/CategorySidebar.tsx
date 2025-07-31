import React from 'react';
import { FaLaptop, FaHeadphones, FaMobileAlt, FaCamera, FaGamepad, FaDesktop, FaTabletAlt, FaWifi } from 'react-icons/fa';
import { IconWrapper } from './IconComponent';

interface CategorySidebarProps {
  categories: string[];
  selectedCategory: string | null;
  onSelectCategory: (category: string | null) => void;
}

const CategorySidebar: React.FC<CategorySidebarProps> = ({
  categories,
  selectedCategory,
  onSelectCategory,
}) => {
  // Map of category names to icons
  const categoryIcons: Record<string, React.ReactNode> = {
    'Laptops': <IconWrapper icon={FaLaptop} />,
    'Headphones': <IconWrapper icon={FaHeadphones} />,
    'Smartphones': <IconWrapper icon={FaMobileAlt} />,
    'Cameras': <IconWrapper icon={FaCamera} />,
    'Gaming': <IconWrapper icon={FaGamepad} />,
    'Monitors': <IconWrapper icon={FaDesktop} />,
    'Tablets': <IconWrapper icon={FaTabletAlt} />,
    'Networking': <IconWrapper icon={FaWifi} />,
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4 sticky top-24">
      <h2 className="text-xl font-bold mb-4 text-gray-800">Categories</h2>
      
      <ul className="space-y-2">
        <li>
          <button
            onClick={() => onSelectCategory(null)}
            className={`w-full text-left px-3 py-2 rounded-md transition-colors duration-200 flex items-center ${selectedCategory === null ? 'bg-blue-500 text-white' : 'hover:bg-gray-100'}`}
          >
            <span className="mr-2">🏠</span>
            All Products
          </button>
        </li>
        
        {categories.map((category) => (
          <li key={category}>
            <button
              onClick={() => onSelectCategory(category)}
              className={`w-full text-left px-3 py-2 rounded-md transition-colors duration-200 flex items-center ${selectedCategory === category ? 'bg-blue-500 text-white' : 'hover:bg-gray-100'}`}
            >
              <span className="mr-2">
                {categoryIcons[category] || '📦'}
              </span>
              {category}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategorySidebar;