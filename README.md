# React 19 Authentication Application

A production-grade React authentication system built with enterprise best practices.

## Features

- ✅ **React 18.x** (closest to React 19 with stable ecosystem)
- ✅ **TypeScript** - Type-safe code
- ✅ **Vite** - Lightning-fast development and builds
- ✅ **React Router DOM v6** - Modern routing system
- ✅ **Zustand** - Simple, scalable state management
- ✅ **React Hook Form** - Performant form handling
- ✅ **Zod** - Schema validation
- ✅ **Tailwind CSS** - Utility-first styling
- ✅ **ESLint + Prettier** - Code quality tools
- ✅ **Husky + lint-staged** - Git hooks
- ✅ **Feature-based Architecture** - Scalable folder structure
- ✅ **Path Aliases** - Clean imports
- ✅ **Lazy Loading** - Code splitting
- ✅ **Error Boundaries** - Error handling
- ✅ **Session Persistence** - LocalStorage with Zustand persist
- ✅ **Protected Routes** - Authentication guards
- ✅ **Reusable Components** - Button, Input, Card, Loader, etc.

## Tech Stack

- **Framework**: React 18.3.1
- **Build Tool**: Vite 5.4.10
- **Language**: TypeScript 5.6.3
- **Routing**: React Router DOM 6.28.0
- **State Management**: Zustand 4.5.0
- **Forms**: React Hook Form 7.53.0
- **Validation**: Zod 3.23.8
- **Styling**: Tailwind CSS 3.4.14
- **Code Quality**: ESLint, Prettier, Husky, lint-staged
- **Icons**: Lucide React

## Installation

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:3000`

## Scripts

| Script             | Description                                      |
| ------------------ | ------------------------------------------------ |
| `npm run dev`      | Start development server                         |
| `npm run build`    | Build for production                             |
| `npm run preview`  | Preview production build                         |
| `npm run lint`     | Run ESLint                                       |
| `npm run lint:fix` | Run ESLint and fix issues                        |
| `npm run format`   | Format code with Prettier                        |
| `npm run prepare`  | Install Husky git hooks (runs automatically on npm install) |

## Folder Structure

```
src/
├── app/                          # Application core
│   ├── router/                   # Routing configuration
│   │   ├── index.tsx            # Route definitions
│   │   ├── ProtectedRoute.tsx   # Protected route wrapper
│   │   └── PublicRoute.tsx      # Public route wrapper
│   └── providers/                # React providers
│       └── AuthProvider.tsx     # Authentication provider
├── components/                   # Reusable components
│   ├── ui/                       # UI components
│   │   ├── Button.tsx           # Button with variants
│   │   ├── Input.tsx            # Input field component
│   │   ├── Card.tsx             # Card component
│   │   └── Loader.tsx           # Loading spinner
│   └── feedback/                 # Feedback components
│       └── ErrorBoundary.tsx    # Error boundary
├── features/                     # Feature modules
│   └── auth/                     # Authentication feature
│       ├── store/                # Zustand store
│       │   └── useAuthStore.ts  # Auth state management
│       ├── validation/           # Validation schemas
│       │   └── index.ts         # Zod schemas
│       ├── types/                # TypeScript types
│       │   └── index.ts         # Auth types
│       └── constants/            # Feature constants
│           └── index.ts         # Storage keys
├── services/                     # Global services
│   └── storage.service.ts       # LocalStorage wrapper
├── pages/                        # Page components
│   ├── HomePage.tsx             # Landing page
│   ├── LoginPage.tsx            # Login page
│   └── DashboardPage.tsx        # Protected dashboard
├── App.tsx                       # Root component
├── main.tsx                      # Application entry point
└── index.css                     # Global styles (Tailwind)
```

## Authentication Flow

### 1. Login Process

1. User enters email and password on the login page
2. Form validation with Zod
3. API call (mocked for this demo)
4. On success:
   - Store user data and token in Zustand store
   - Persist to localStorage via Zustand persist middleware
   - Redirect to dashboard or intended page

### 2. Session Persistence

- Uses Zustand's persist middleware with custom localStorage wrapper
- On app initialization, `AuthProvider` calls `initializeAuth()` to restore session
- Protected routes check `isAuthenticated` from the store

### 3. Logout

- Clears user data and token from store
- Removes from localStorage
- Redirects to home page

## localStorage Strategy

### Storage Service

Located at `src/services/storage.service.ts`, it provides:

- Type-safe get/set/remove operations
- Safe JSON parsing/stringifying with error handling
- Centralized storage access

### Storage Keys

Defined in `src/features/auth/constants/index.ts`:

- `AUTH_TOKEN`: JWT token
- `AUTH_USER`: User object

### Zustand Persist Middleware

The auth store uses Zustand's persist middleware with a custom storage adapter that wraps our storage service.

## Architectural Decisions

### 1. Feature-based Architecture

**Why?**

- Better code organization for large applications
- Features are self-contained and can be developed independently
- Easier to scale as the application grows
- Clear separation of concerns

### 2. Zustand instead of Redux Toolkit

**Why?**

- Simpler API with less boilerplate
- Perfect for most authentication use cases
- Built-in persist middleware
- Excellent TypeScript support
- Smaller bundle size

### 3. React Router DOM v6

**Why?**

- Latest routing features
- Data APIs for better data fetching
- Nested routes and layouts
- Type-safe navigation

### 4. Tailwind CSS

**Why?**

- Utility-first approach for rapid development
- Consistent design system
- Excellent documentation and community
- Easy to customize and extend

### 5. Vite instead of Create React App

**Why?**

- Lightning-fast HMR (Hot Module Replacement)
- Faster build times
- Out-of-the-box TypeScript support
- Rich plugin ecosystem

### 6. Path Aliases

**Why?**

- Cleaner imports (no more `../../../../`)
- Better developer experience
- Easier to refactor

## Performance Improvements

1. **Lazy Loading**: Pages are lazy-loaded with React.lazy() and Suspense
2. **Code Splitting**: Vite automatically splits code by route
3. **Memoization**: Components are memoized where appropriate
4. **Tree Shaking**: Vite eliminates unused code
5. **Efficient State Updates**: Zustand only updates components that subscribe to changed state

## Maintainability Benefits

1. **TypeScript**: Full type safety
2. **ESLint + Prettier**: Consistent code style
3. **Husky + lint-staged**: Pre-commit checks
4. **Feature-based Structure**: Easy to find and modify code
5. **Reusable Components**: DRY (Don't Repeat Yourself) principle
6. **Clear Separation of Concerns**: Each file has a single responsibility

## Authentication Architecture Benefits

1. **Centralized State**: Single source of truth for auth state
2. **Persistence**: Session persists across page refreshes
3. **Protected Routes**: Secure routing
4. **Type Safety**: Full TypeScript support
5. **Easy to Extend**: Add new auth features without breaking existing code

## Why This Setup is Industry-Standard

This architecture follows patterns used by top tech companies because:

- **Scalability**: Can grow from small to large applications
- **Maintainability**: Easy to understand and modify
- **Performance**: Optimized for speed and user experience
- **Testability**: Components are easy to test in isolation
- **Developer Experience**: Modern tools for productivity

## Usage

### Login

1. Go to `/login`
2. Enter any email and password (it's a mock)
3. Click "Sign in"
4. You'll be redirected to `/dashboard`

### Dashboard

- Protected route - requires login
- Shows user profile information
- Shows authentication status
- Logout button in the navigation

### Logout

- Click "Logout" in the dashboard navigation
- Session is cleared
- You'll be redirected to the home page

## Future Improvements

- [ ] Add refresh token architecture
- [ ] Implement session timeout
- [ ] Add dark mode
- [ ] Add toast notifications
- [ ] Add skeleton loaders
- [ ] Add unit tests
- [ ] Add integration tests
- [ ] Add E2E tests with Playwright
- [ ] Implement real API integration
- [ ] Add password reset functionality
- [ ] Add email verification
- [ ] Add multi-factor authentication
- [ ] Add role-based access control
- [ ] Add analytics
- [ ] Add error tracking with Sentry
- [ ] Add Docker support
- [ ] Add CI/CD pipeline

## License

MIT


---

## 👨‍💻 Author

Built with ❤️ by a Bansi Borad

---

<div align="center">
  <strong>⭐ Star this repository if you found it helpful!</strong>
</div>