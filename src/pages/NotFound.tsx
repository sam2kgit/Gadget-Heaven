import { Link } from 'react-router-dom';
import { FaExclamationTriangle, FaHome } from 'react-icons/fa';
import { IconWithClass } from '../components/ui/IconComponent';

const NotFound = () => {
  return (
    <div className="container mx-auto px-4 py-16 flex flex-col items-center justify-center min-h-[60vh] text-center">
      <div className="bg-white rounded-lg shadow-md p-8 max-w-md w-full">
        <IconWithClass icon={FaExclamationTriangle} className="text-6xl text-yellow-500 mx-auto mb-6" />
        <h1 className="text-4xl font-bold mb-4">404</h1>
        <h2 className="text-2xl font-semibold mb-4">Page Not Found</h2>
        <p className="text-gray-600 mb-8">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <Link 
          to="/" 
          className="btn btn-primary flex items-center justify-center mx-auto w-full max-w-xs"
        >
          <IconWithClass icon={FaHome} className="mr-2" /> Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;