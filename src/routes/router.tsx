import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';

import { DashboardLayout } from '@/layouts/dashboard';
import { routes } from './paths';
import { LazyPage } from './lazy-page';

const router = createBrowserRouter([
  {
    path: routes.dashboard.root,
    element: <DashboardLayout />,
    children: [
      {
        path: routes.dashboard.root,
        element: LazyPage(() => import('@/pages/home')),
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
            element: LazyPage(() => import('@/pages/widgets/metrics')),
          },
          {
            path: routes.dashboard.widgets.charts,
            element: LazyPage(() => import('@/pages/widgets/charts')),
          },
        ],
      },
    ],
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
