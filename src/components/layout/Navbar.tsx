import { Link, useLocation } from 'react-router-dom';
import { FaShoppingBag } from 'react-icons/fa';
import { RiDashboardLine } from 'react-icons/ri';
import { IoStatsChart } from 'react-icons/io5';
import { IconWrapper, IconWithClass } from '../ui/IconComponent';

const Navbar = () => {
  const location = useLocation();
  
  // Determine if we're on the home page to apply different styling
  const isHomePage = location.pathname === '/';
  
  return (
    <nav className={`${isHomePage ? 'bg-gradient-to-r from-primary to-secondary' : 'bg-white shadow-md'} py-4`}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo and Brand */}
        <div className="flex items-center space-x-2">
          <Link to="/" className="flex items-center">
            <IconWithClass icon={FaShoppingBag} className={`text-2xl ${isHomePage ? 'text-white' : 'text-primary'}`} />
            <span className={`ml-2 text-xl font-bold ${isHomePage ? 'text-white' : 'text-gray-800'}`}>GadgetHeaven</span>
          </Link>
        </div>
        
        {/* Navigation Links */}
        <div className="flex items-center space-x-6">
          <NavLink to="/" label="Home" isActive={location.pathname === '/'} isHomePage={isHomePage} />
          <NavLink to="/dashboard" label="Dashboard" isActive={location.pathname === '/dashboard'} isHomePage={isHomePage} icon={<IconWrapper icon={RiDashboardLine} />} />
          <NavLink to="/stats" label="Stats" isActive={location.pathname === '/stats'} isHomePage={isHomePage} icon={<IconWrapper icon={IoStatsChart} />} />
        </div>
      </div>
    </nav>
  );
};

type NavLinkProps = {
  to: string;
  label: string;
  isActive: boolean;
  isHomePage: boolean;
  icon?: React.ReactNode;
};

const NavLink = ({ to, label, isActive, isHomePage, icon }: NavLinkProps) => {
  return (
    <Link 
      to={to} 
      className={`flex items-center px-3 py-2 rounded-md transition-colors duration-200 ${isActive 
        ? (isHomePage ? 'bg-white/20 text-white' : 'bg-primary/10 text-primary font-medium') 
        : (isHomePage ? 'text-white/90 hover:bg-white/10' : 'text-gray-700 hover:bg-gray-100')}`}
    >
      {icon && <span className="mr-1">{icon}</span>}
      {label}
    </Link>
  );
};

export default Navbar;