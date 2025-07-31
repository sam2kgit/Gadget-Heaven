import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

// Layout Components
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

// Pages
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import ProductDetails from './pages/ProductDetails';
// TODO: Create Stats page component
import Stats from './pages/Stats';
import NotFound from './pages/NotFound';

// Context Providers
import { CartProvider } from './context/CartContext';
import { WishlistProvider } from './context/WishlistContext';

function App() {
  return (
    <Router>
      <CartProvider>
        <WishlistProvider>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/product/:id" element={<ProductDetails />} />
                <Route path="/stats" element={<Stats />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
          </div>
          <Toaster position="top-center" />
        </WishlistProvider>
      </CartProvider>
    </Router>
  );
}

export default App;
