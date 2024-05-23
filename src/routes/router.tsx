import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';

import { LayoutOne } from '@/layouts/layout-one';
import { routes } from './paths';
import { LazyPage } from './lazy-page';

const router = createBrowserRouter([
  {
    path: '/',
    element: <LayoutOne />,
    children: [
      {
        path: '/',
        element: LazyPage(() => import('@/pages/home')),
      },
      /* --------------------------------- WIDGETS -------------------------------- */
      {
        path: routes.widgets.root,
        children: [
          {
            index: true,
            path: routes.widgets.root,
            element: <Navigate to={routes.widgets.metrics} replace />,
          },
          {
            path: routes.widgets.metrics,
            element: LazyPage(() => import('@/pages/widgets/metrics')),
          },
          {
            path: routes.widgets.charts,
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
