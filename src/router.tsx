import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomePage } from './pages/home.page';
import { LayoutOne } from '@/layouts/layout-one';

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
