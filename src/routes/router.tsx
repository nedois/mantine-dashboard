import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';

import { DashboardLayout } from '@/layouts/dashboard';
import { AuthLayout } from '@/layouts/auth';
import { routes } from './paths';
import { LazyPage } from './lazy-page';

const router = createBrowserRouter([
  {
    path: routes.auth.root,
    element: <AuthLayout />,
    children: [
      {
        index: true,
        path: routes.auth.root,
        element: <Navigate to={routes.auth.login} replace />,
      },
      {
        path: routes.auth.login,
        element: LazyPage(() => import('@/pages/auth/login')),
      },
      {
        path: routes.auth.register,
        element: LazyPage(() => import('@/pages/auth/register')),
      },
      {
        path: routes.auth.forgotPassword,
        element: LazyPage(() => import('@/pages/auth/forgot-password')),
      },
      // {
      //   path: routes.auth.resetPassword,
      //   element: LazyPage(() => import('@/pages/auth/reset-password')),
      // },
      {
        path: routes.auth.otp,
        element: LazyPage(() => import('@/pages/auth/otp')),
      },
      // {
      //   path: routes.auth.terms,
      //   element: LazyPage(() => import('@/pages/auth/terms')),
      // },
      // {
      //   path: routes.auth.privacy,
      //   element: LazyPage(() => import('@/pages/auth/privacy')),
      // },
    ],
  },
  {
    path: routes.dashboard.root,
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        path: routes.dashboard.root,
        element: <Navigate to={routes.dashboard.home} replace />,
      },
      {
        path: routes.dashboard.home,
        element: LazyPage(() => import('@/pages/dashboard/home')),
      },
      /* --------------------------------- WIDGETS -------------------------------- */
      {
        path: routes.dashboard.widgets.root,
        children: [
          {
            index: true,
            path: routes.dashboard.widgets.root,
            element: <Navigate to={routes.dashboard.widgets.metrics} replace />,
          },
          {
            path: routes.dashboard.widgets.metrics,
            element: LazyPage(() => import('@/pages/dashboard/widgets/metrics')),
          },
          {
            path: routes.dashboard.widgets.charts,
            element: LazyPage(() => import('@/pages/dashboard/widgets/charts')),
          },
        ],
      },
    ],
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
