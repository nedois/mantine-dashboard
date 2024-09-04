import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import { AuthGuard } from '@/guards/auth-guard';
import { GuestGuard } from '@/guards/guest-guard';
import { AuthLayout } from '@/layouts/auth';
import { DashboardLayout } from '@/layouts/dashboard';
import docsRoutes from '@/pages/docs/routes';
import { LazyPage } from './lazy-page';
import { paths } from './paths';

const router = createBrowserRouter([
  ...docsRoutes,
  {
    path: '/',
    element: <Navigate to={paths.dashboard.root} replace />,
  },
  {
    path: paths.auth.root,
    element: (
      <GuestGuard>
        <AuthLayout />
      </GuestGuard>
    ),
    children: [
      {
        index: true,
        path: paths.auth.root,
        element: <Navigate to={paths.auth.login} replace />,
      },
      {
        path: paths.auth.login,
        element: LazyPage(() => import('@/pages/auth/login')),
      },
      {
        path: paths.auth.register,
        element: LazyPage(() => import('@/pages/auth/register')),
      },
      {
        path: paths.auth.forgotPassword,
        element: LazyPage(() => import('@/pages/auth/forgot-password')),
      },
      // {
      //   path: routes.auth.resetPassword,
      //   element: LazyPage(() => import('@/pages/auth/reset-password')),
      // },
      {
        path: paths.auth.otp,
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
    path: paths.dashboard.root,
    element: (
      <AuthGuard>
        <DashboardLayout />
      </AuthGuard>
    ),
    children: [
      {
        index: true,
        path: paths.dashboard.root,
        element: <Navigate to={paths.dashboard.home} replace />,
      },
      {
        path: paths.dashboard.home,
        element: LazyPage(() => import('@/pages/dashboard/home')),
      },
      /* ---------------------------------- APPS ---------------------------------- */
      {
        path: paths.dashboard.apps.root,
        children: [
          {
            index: true,
            path: paths.dashboard.apps.root,
            element: <Navigate to={paths.dashboard.apps.kanban} replace />,
          },
          {
            path: paths.dashboard.apps.kanban,
            element: LazyPage(() => import('@/pages/dashboard/apps/kanban')),
          },
        ],
      },
      /* ------------------------------- MANAGEMENT ------------------------------- */
      {
        path: paths.dashboard.management.root,
        children: [
          {
            index: true,
            path: paths.dashboard.management.root,
            element: <Navigate to={paths.dashboard.management.customers.root} replace />,
          },
          {
            path: paths.dashboard.management.customers.root,
            children: [
              {
                index: true,
                path: paths.dashboard.management.customers.root,
                element: <Navigate to={paths.dashboard.management.customers.list} replace />,
              },
              {
                path: paths.dashboard.management.customers.list,
                element: LazyPage(() => import('@/pages/dashboard/management/customers/list')),
              },
            ],
          },
        ],
      },
      /* --------------------------------- WIDGETS -------------------------------- */
      {
        path: paths.dashboard.widgets.root,
        children: [
          {
            index: true,
            path: paths.dashboard.widgets.root,
            element: <Navigate to={paths.dashboard.widgets.charts} replace />,
          },
          {
            path: paths.dashboard.widgets.metrics,
            element: LazyPage(() => import('@/pages/dashboard/widgets/metrics')),
          },
          {
            path: paths.dashboard.widgets.charts,
            element: LazyPage(() => import('@/pages/dashboard/widgets/charts')),
          },
          {
            path: paths.dashboard.widgets.tables,
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
