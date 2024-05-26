import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';

import { DashboardLayout } from '@/layouts/dashboard';
import { AuthLayout } from '@/layouts/auth';
import { AuthGuard } from '@/guards/auth-guard';
import { GuestGuard } from '@/guards/guest-guard';
import { routes } from './paths';
import { LazyPage } from './lazy-page';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to={routes.dashboard.root} replace />,
  },
  {
    path: routes.auth.root,
    element: (
      <GuestGuard>
        <AuthLayout />
      </GuestGuard>
    ),
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
    element: (
      <AuthGuard>
        <DashboardLayout />
      </AuthGuard>
    ),
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
      /* ---------------------------------- APPS ---------------------------------- */
      {
        path: routes.dashboard.apps.root,
        children: [
          {
            index: true,
            path: routes.dashboard.apps.root,
            element: <Navigate to={routes.dashboard.apps.kanban} replace />,
          },
          {
            path: routes.dashboard.apps.kanban,
            element: LazyPage(() => import('@/pages/dashboard/apps/kanban')),
          },
        ],
      },
      /* ------------------------------- MANAGEMENT ------------------------------- */
      {
        path: routes.dashboard.management.root,
        children: [
          {
            index: true,
            path: routes.dashboard.management.root,
            element: <Navigate to={routes.dashboard.management.customers.root} replace />,
          },
          {
            path: routes.dashboard.management.customers.root,
            children: [
              {
                index: true,
                path: routes.dashboard.management.customers.root,
                element: <Navigate to={routes.dashboard.management.customers.list} replace />,
              },
              {
                path: routes.dashboard.management.customers.list,
                element: LazyPage(() => import('@/pages/dashboard/management/customers/list')),
              },
            ],
          },
        ],
      },
      /* --------------------------------- WIDGETS -------------------------------- */
      {
        path: routes.dashboard.widgets.root,
        children: [
          {
            index: true,
            path: routes.dashboard.widgets.root,
            element: <Navigate to={routes.dashboard.widgets.charts} replace />,
          },
          {
            path: routes.dashboard.widgets.metrics,
            element: LazyPage(() => import('@/pages/dashboard/widgets/metrics')),
          },
          {
            path: routes.dashboard.widgets.charts,
            element: LazyPage(() => import('@/pages/dashboard/widgets/charts')),
          },
          {
            path: routes.dashboard.widgets.tables,
            element: LazyPage(() => import('@/pages/dashboard/widgets/tables')),
          },
        ],
      },
    ],
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
