import { createBrowserRouter, Navigate } from 'react-router-dom';
import { ProtectedRoute } from './ProtectedRoute';
import { PublicRoute } from './PublicRoute';
import { lazy, Suspense } from 'react';
import { Loader } from '@/components/ui/Loader';

const HomePage = lazy(() => import('@/pages/HomePage'));
const LoginPage = lazy(() => import('@/pages/LoginPage'));
const DashboardPage = lazy(() => import('@/pages/DashboardPage'));

export const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Suspense fallback={<Loader fullScreen />}>
        <HomePage />
      </Suspense>
    ),
  },
  {
    path: '/login',
    element: (
      <PublicRoute>
        <Suspense fallback={<Loader fullScreen />}>
          <LoginPage />
        </Suspense>
      </PublicRoute>
    ),
  },
  {
    path: '/dashboard',
    element: (
      <ProtectedRoute>
        <Suspense fallback={<Loader fullScreen />}>
          <DashboardPage />
        </Suspense>
      </ProtectedRoute>
    ),
  },
  {
    path: '*',
    element: <Navigate to="/" replace />,
  },
]);
