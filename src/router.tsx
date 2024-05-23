import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { LayoutOne } from '@/layouts/layout-one';
import { HomePage } from './pages/home';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <LayoutOne>
        <HomePage />
      </LayoutOne>
    ),
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
