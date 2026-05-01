import { Loader2 } from 'lucide-react';

interface LoaderProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  fullScreen?: boolean;
  className?: string;
}

const sizeClasses = {
  sm: 'w-4 h-4',
  md: 'w-6 h-6',
  lg: 'w-8 h-8',
  xl: 'w-12 h-12',
};

export const Loader: React.FC<LoaderProps> = ({
  size = 'md',
  fullScreen = false,
  className = '',
}) => {
  const loader = (
    <Loader2
      className={`animate-spin text-primary-600 ${sizeClasses[size]} ${className}`}
    />
  );

  if (fullScreen) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-white">
        {loader}
      </div>
    );
  }

  return loader;
};
