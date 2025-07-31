export type Product = {
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

export const products: Product[] = [
  // Computers Category (6 items)
  {
    product_id: 'comp-001',
    product_title: 'UltraBook Pro X1',
    product_image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80',
    category: 'computers',
    price: 1299.99,
    description: 'The UltraBook Pro X1 is a high-performance laptop designed for professionals. With its sleek design and powerful components, it\'s perfect for both work and entertainment.',
    specification: [
      '14-inch 4K OLED Display',
      'Intel Core i7-12700H Processor',
      '16GB DDR5 RAM',
      '1TB NVMe SSD',
      'NVIDIA RTX 3060 Graphics',
      'Windows 11 Pro',
      'Backlit Keyboard',
      'Thunderbolt 4 Ports'
    ],
    availability: true,
    rating: 4.8
  },
  {
    product_id: 'comp-002',
    product_title: 'GameMaster RTX Desktop',
    product_image: 'https://images.unsplash.com/photo-1593640408182-31c70c8268f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1442&q=80',
    category: 'computers',
    price: 1899.99,
    description: 'Dominate the gaming world with the GameMaster RTX Desktop. Built with the latest components and RGB lighting, this gaming PC delivers unmatched performance for the most demanding games.',
    specification: [
      'AMD Ryzen 9 5900X Processor',
      '32GB DDR4 RAM',
      '2TB NVMe SSD + 4TB HDD',
      'NVIDIA RTX 3080 Ti Graphics',
      'Windows 11 Home',
      'RGB Cooling System',
      '850W Gold PSU',
      'Wi-Fi 6 & Bluetooth 5.2'
    ],
    availability: true,
    rating: 4.9
  },
  {
    product_id: 'comp-003',
    product_title: 'WorkStation Mini',
    product_image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    category: 'computers',
    price: 799.99,
    description: 'The WorkStation Mini packs powerful performance in a compact form factor. Perfect for home offices or small workspaces where efficiency and productivity are key.',
    specification: [
      'Intel Core i5-11600 Processor',
      '16GB DDR4 RAM',
      '512GB NVMe SSD',
      'Intel Iris Xe Graphics',
      'Windows 11 Home',
      'Compact Design',
      'Multiple Display Support',
      'Wi-Fi 6 & Bluetooth 5.1'
    ],
    availability: true,
    rating: 4.5
  },
  {
    product_id: 'comp-004',
    product_title: 'CreatorBook Studio',
    product_image: 'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    category: 'computers',
    price: 1499.99,
    description: 'Designed for creative professionals, the CreatorBook Studio features a color-accurate display and powerful graphics capabilities for photo editing, video production, and 3D modeling.',
    specification: [
      '16-inch 4K HDR Display',
      'AMD Ryzen 7 5800H Processor',
      '32GB DDR4 RAM',
      '1TB NVMe SSD',
      'NVIDIA RTX 3070 Graphics',
      'Windows 11 Pro',
      'SD Card Reader',
      'Color Calibrated Screen'
    ],
    availability: true,
    rating: 4.7
  },
  {
    product_id: 'comp-005',
    product_title: 'ChromeBook Air',
    product_image: 'https://images.unsplash.com/photo-1544731612-de7f96afe55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    category: 'computers',
    price: 349.99,
    description: 'The ChromeBook Air is a lightweight, affordable laptop perfect for students and casual users. With long battery life and cloud integration, it\'s ideal for everyday tasks and online learning.',
    specification: [
      '13.3-inch Full HD Display',
      'Intel Celeron N4500 Processor',
      '8GB LPDDR4X RAM',
      '128GB eMMC Storage',
      'Intel UHD Graphics',
      'Chrome OS',
      '12-hour Battery Life',
      'Fanless Design'
    ],
    availability: true,
    rating: 4.2
  },
  {
    product_id: 'comp-006',
    product_title: 'All-In-One Touch PC',
    product_image: 'https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80',
    category: 'computers',
    price: 999.99,
    description: 'The All-In-One Touch PC combines a powerful computer with a beautiful touchscreen display. Perfect for family use, creative work, or as a central hub for your digital life.',
    specification: [
      '27-inch 4K Touchscreen Display',
      'Intel Core i7-11700 Processor',
      '16GB DDR4 RAM',
      '1TB SSD',
      'NVIDIA GTX 1660 Graphics',
      'Windows 11 Home',
      'Wireless Keyboard and Mouse',
      'Built-in Webcam and Speakers'
    ],
    availability: true,
    rating: 4.6
  },
  
  // Phones Category (2 items)
  {
    product_id: 'phone-001',
    product_title: 'GalaxyFold Ultra',
    product_image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1527&q=80',
    category: 'phones',
    price: 1299.99,
    description: 'Experience the future of smartphones with the GalaxyFold Ultra. This foldable phone transforms from a compact smartphone to a tablet-sized display, giving you the best of both worlds.',
    specification: [
      '7.6-inch Foldable AMOLED Display',
      '6.2-inch Cover Display',
      'Snapdragon 8 Gen 1 Processor',
      '12GB RAM',
      '512GB Storage',
      'Triple 12MP Camera System',
      '4,400mAh Battery',
      'Android 12'
    ],
    availability: true,
    rating: 4.7
  },
  {
    product_id: 'phone-002',
    product_title: 'iPhonePro Max',
    product_image: 'https://images.unsplash.com/photo-1591337676887-a217a6970a8a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80',
    category: 'phones',
    price: 1099.99,
    description: 'The iPhonePro Max represents the pinnacle of smartphone technology. With its advanced camera system, powerful processor, and stunning display, it\'s the ultimate device for productivity and creativity.',
    specification: [
      '6.7-inch Super Retina XDR Display',
      'A15 Bionic Chip',
      '6GB RAM',
      '256GB Storage',
      'Pro Camera System (12MP + 12MP + 12MP)',
      '4,352mAh Battery',
      'iOS 15',
      'Face ID'
    ],
    availability: true,
    rating: 4.8
  },
  
  // Smart Watches Category (2 items)
  {
    product_id: 'watch-001',
    product_title: 'FitTrack Pro',
    product_image: 'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80',
    category: 'smartwatches',
    price: 249.99,
    description: 'The FitTrack Pro is your ultimate fitness companion. Track your workouts, monitor your health metrics, and stay connected with notifications, all from your wrist.',
    specification: [
      '1.4-inch AMOLED Display',
      'Heart Rate Monitor',
      'Blood Oxygen Sensor',
      'Sleep Tracking',
      '50+ Workout Modes',
      '5 ATM Water Resistance',
      '7-day Battery Life',
      'GPS & NFC'
    ],
    availability: true,
    rating: 4.5
  },
  {
    product_id: 'watch-002',
    product_title: 'SmartWatch Series 7',
    product_image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1528&q=80',
    category: 'smartwatches',
    price: 399.99,
    description: 'The SmartWatch Series 7 combines elegant design with powerful technology. With its always-on display, comprehensive health features, and seamless integration with your smartphone, it\'s more than just a watch.',
    specification: [
      '1.8-inch Retina Display',
      'ECG & Heart Rate Monitor',
      'Blood Oxygen App',
      'Fall Detection',
      'Fitness Tracking',
      '50m Water Resistance',
      '18-hour Battery Life',
      'Cellular Connectivity'
    ],
    availability: true,
    rating: 4.9
  }
];

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.product_id === id);
};

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(product => product.category === category);
};

export const getAllCategories = (): string[] => {
  const categories = new Set(products.map(product => product.category));
  return Array.from(categories);
};