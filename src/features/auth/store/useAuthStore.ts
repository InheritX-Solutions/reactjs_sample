import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { AuthState, User, LoginCredentials } from '../types';
import { storageService } from '@/services/storage.service';
import { STORAGE_KEYS } from '../constants';

interface AuthActions {
  login: (credentials: LoginCredentials) => Promise<void>;
  logout: () => void;
  setUser: (user: User | null) => void;
  setToken: (token: string | null) => void;
  initializeAuth: () => void;
}

const initialState: AuthState = {
  user: null,
  token: null,
  isAuthenticated: false,
  isLoading: true,
};

export const useAuthStore = create<AuthState & AuthActions>()(
  persist(
    (set) => ({
      ...initialState,

      login: async (credentials: LoginCredentials) => {
        set({ isLoading: true });

        try {
          await new Promise((resolve) => setTimeout(resolve, 1000));

          const mockUser: User = {
            id: '1',
            email: credentials.email,
            name: 'John Doe',
          };

          const mockToken = 'mock-jwt-token-' + Date.now();

          set({
            user: mockUser,
            token: mockToken,
            isAuthenticated: true,
            isLoading: false,
          });
        } catch (error) {
          set({ isLoading: false });
          throw error;
        }
      },

      logout: () => {
        set({
          user: null,
          token: null,
          isAuthenticated: false,
          isLoading: false,
        });
      },

      setUser: (user: User | null) => {
        set({ user });
      },

      setToken: (token: string | null) => {
        set({ token, isAuthenticated: !!token });
      },

      initializeAuth: () => {
        const token = storageService.get<string>(STORAGE_KEYS.AUTH_TOKEN);
        const user = storageService.get<User>(STORAGE_KEYS.AUTH_USER);

        set({
          token,
          user,
          isAuthenticated: !!token && !!user,
          isLoading: false,
        });
      },
    }),
    {
      name: 'auth-storage',
      storage: createJSONStorage(() => ({
        getItem: (key) => storageService.get(key),
        setItem: (key, value) => storageService.set(key, value),
        removeItem: (key) => storageService.remove(key),
      })),
    }
  )
);
