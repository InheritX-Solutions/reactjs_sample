import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '@/features/auth/store/useAuthStore';
import { Button } from '@/components/ui/Button';
import { Card, CardHeader, CardBody } from '@/components/ui/Card';
import { Shield, User, LogOut, Home, CheckCircle2 } from 'lucide-react';

const DashboardPage: React.FC = () => {
  const { user, logout } = useAuthStore();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center gap-2">
              <Shield className="w-8 h-8 text-primary-600" />
              <span className="text-xl font-bold text-gray-900">AuthApp</span>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="ghost" onClick={() => navigate('/')} leftIcon={<Home className="w-4 h-4" />}>
                Home
              </Button>
              <Button variant="outline" onClick={logout} leftIcon={<LogOut className="w-4 h-4" />}>
                Logout
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600 mt-2">Welcome back, {user?.name}!</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <User className="w-6 h-6 text-primary-600" />
                <h2 className="text-xl font-semibold text-gray-900">Profile</h2>
              </div>
            </CardHeader>
            <CardBody className="space-y-4">
              <div>
                <p className="text-sm text-gray-500">Name</p>
                <p className="text-gray-900 font-medium">{user?.name}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Email</p>
                <p className="text-gray-900 font-medium">{user?.email}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">User ID</p>
                <p className="text-gray-900 font-medium">{user?.id}</p>
              </div>
            </CardBody>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-6 h-6 text-green-600" />
                <h2 className="text-xl font-semibold text-gray-900">
                  Authentication Status
                </h2>
              </div>
            </CardHeader>
            <CardBody className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                <span className="text-gray-900 font-medium">Session Active</span>
              </div>
              <p className="text-gray-600">
                You are successfully authenticated. Your session will persist across
                page refreshes.
              </p>
            </CardBody>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default DashboardPage;
