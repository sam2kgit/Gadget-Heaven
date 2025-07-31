import React from 'react';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  color?: 'primary' | 'secondary' | 'white';
  text?: string;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size = 'md',
  color = 'primary',
  text,
}) => {
  // Size classes
  const sizeClasses = {
    sm: 'w-6 h-6',
    md: 'w-10 h-10',
    lg: 'w-16 h-16',
  };

  // Color classes
  const colorClasses = {
    primary: 'text-blue-500',
    secondary: 'text-gray-500',
    white: 'text-white',
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <div
        className={`${sizeClasses[size]} ${colorClasses[color]} inline-block animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]`}
        role="status"
      >
        <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Loading...</span>
      </div>
      {text && (
        <p className={`mt-2 text-sm ${colorClasses[color]}`}>{text}</p>
      )}
    </div>
  );
};

export default LoadingSpinner;