import { RouterProvider } from 'react-router-dom';
import { router } from './app/router';
import { AuthProvider } from './app/providers/AuthProvider';
import { ErrorBoundary } from './components/feedback/ErrorBoundary';

function App() {
  return (
    <ErrorBoundary>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </ErrorBoundary>
  );
}

export default App;
