import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/Button';
import { Card, CardBody } from '@/components/ui/Card';
import { useAuthStore } from '@/features/auth/store/useAuthStore';
import { Shield, Lock, User, ArrowRight } from 'lucide-react';

const HomePage: React.FC = () => {
  const { isAuthenticated } = useAuthStore();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center gap-2">
              <Shield className="w-8 h-8 text-primary-600" />
              <span className="text-xl font-bold text-gray-900">AuthApp</span>
            </div>
            <div className="flex items-center gap-4">
              {isAuthenticated ? (
                <Button as="a" href="/dashboard" rightIcon={<ArrowRight className="w-4 h-4" />}>
                  Go to Dashboard
                </Button>
              ) : (
                <Button as="a" href="/login" rightIcon={<ArrowRight className="w-4 h-4" />}>
                  Get Started
                </Button>
              )}
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Secure Authentication
            <br />
            <span className="text-primary-600">Made Simple</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            A production-grade authentication system built with modern React, TypeScript,
            and enterprise best practices.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="hover:shadow-xl transition-shadow duration-300">
            <CardBody className="text-center">
              <Lock className="w-12 h-12 text-primary-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Secure Storage
              </h3>
              <p className="text-gray-600">
                Tokens and user data stored securely in localStorage with proper
                error handling.
              </p>
            </CardBody>
          </Card>

          <Card className="hover:shadow-xl transition-shadow duration-300">
            <CardBody className="text-center">
              <User className="w-12 h-12 text-primary-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Session Persistence
              </h3>
              <p className="text-gray-600">
                Automatic session restoration on page refresh with Zustand persist.
              </p>
            </CardBody>
          </Card>

          <Card className="hover:shadow-xl transition-shadow duration-300">
            <CardBody className="text-center">
              <Shield className="w-12 h-12 text-primary-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Protected Routes
              </h3>
              <p className="text-gray-600">
                Route protection with React Router DOM.
              </p>
            </CardBody>
          </Card>
        </div>

        <div className="text-center">
          {isAuthenticated ? (
            <Button onClick={() => navigate('/dashboard')} size="lg" rightIcon={<ArrowRight className="w-5 h-5" />}>
              Access Dashboard
            </Button>
          ) : (
            <Button onClick={() => navigate('/login')} size="lg" rightIcon={<ArrowRight className="w-5 h-5" />}>
              Start Login
            </Button>
          )}
        </div>
      </main>
    </div>
  );
};

export default HomePage;
