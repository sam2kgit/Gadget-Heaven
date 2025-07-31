import { useState, useEffect } from 'react';
import { products } from '../data/products';
import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Scatter,
  ResponsiveContainer,
} from 'recharts';

const Stats = () => {
  const [chartData, setChartData] = useState<any[]>([]);
  
  useEffect(() => {
    // Transform product data for the chart
    const formattedData = products.map(product => ({
      name: product.product_title,
      price: product.price,
      rating: product.rating,
      category: product.category,
    }));
    
    setChartData(formattedData);
  }, []);
  
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">Product Statistics</h1>
      
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-xl font-semibold mb-6">Price vs. Product Comparison</h2>
        <p className="text-gray-600 mb-6">
          This chart displays product prices (bar and area) and ratings (scatter) for all products in our inventory.
          The Y-axis represents price in dollars, while the X-axis shows individual products.
        </p>
        
        <div className="h-[600px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <ComposedChart
              data={chartData}
              margin={{
                top: 20,
                right: 20,
                bottom: 60,
                left: 20,
              }}
            >
              <CartesianGrid stroke="#f5f5f5" />
              <XAxis 
                dataKey="name" 
                scale="band" 
                angle={-45} 
                textAnchor="end"
                height={125}
                interval={0}
              />
              <YAxis 
                label={{ value: 'Price ($)', angle: -90, position: 'insideLeft' }}
                domain={[0, 'dataMax + 200']}
              />
              <Tooltip 
                formatter={(value, name) => {
                  if (name === 'rating') return [value, 'Rating'];
                  const nameStr = String(name);
                  return [`$${value}`, nameStr.charAt(0).toUpperCase() + nameStr.slice(1)];
                }}
              />
              <Legend />
              <Area type="monotone" dataKey="price" fill="#8884d8" stroke="#8884d8" name="Price (Area)" />
              <Bar dataKey="price" barSize={20} fill="#413ea0" name="Price (Bar)" />
              <Scatter dataKey="rating" fill="#ff7300" name="Rating" />
              <Line type="monotone" dataKey="price" stroke="#ff7300" dot={false} activeDot={false} name="Price Trend" />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Price Statistics */}
        <StatCard 
          title="Price Statistics"
          stats={[
            { label: 'Average Price', value: `$${calculateAverage(products.map(p => p.price)).toFixed(2)}` },
            { label: 'Highest Price', value: `$${Math.max(...products.map(p => p.price)).toFixed(2)}` },
            { label: 'Lowest Price', value: `$${Math.min(...products.map(p => p.price)).toFixed(2)}` },
          ]}
        />
        
        {/* Rating Statistics */}
        <StatCard 
          title="Rating Statistics"
          stats={[
            { label: 'Average Rating', value: calculateAverage(products.map(p => p.rating)).toFixed(1) },
            { label: 'Highest Rating', value: Math.max(...products.map(p => p.rating)).toFixed(1) },
            { label: 'Lowest Rating', value: Math.min(...products.map(p => p.rating)).toFixed(1) },
          ]}
        />
        
        {/* Inventory Statistics */}
        <StatCard 
          title="Inventory Statistics"
          stats={[
            { label: 'Total Products', value: products.length.toString() },
            { label: 'Available Products', value: products.filter(p => p.availability).length.toString() },
            { label: 'Out of Stock', value: products.filter(p => !p.availability).length.toString() },
          ]}
        />
      </div>
    </div>
  );
};

type StatCardProps = {
  title: string;
  stats: { label: string; value: string }[];
};

const StatCard = ({ title, stats }: StatCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-lg font-semibold mb-4">{title}</h3>
      <ul className="space-y-3">
        {stats.map((stat, index) => (
          <li key={index} className="flex justify-between items-center">
            <span className="text-gray-600">{stat.label}</span>
            <span className="font-semibold text-primary">{stat.value}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

// Helper function to calculate average
const calculateAverage = (values: number[]): number => {
  const sum = values.reduce((acc, val) => acc + val, 0);
  return sum / values.length;
};

export default Stats;