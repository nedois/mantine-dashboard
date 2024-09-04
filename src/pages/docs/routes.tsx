import { RouteObject } from 'react-router-dom';
import { LazyPage } from '@/routes/lazy-page';
import paths from './paths';

export default [
  {
    path: paths.root,
    element: LazyPage(() => import('@/layouts/docs')),
    children: [
      {
        index: true,
        path: paths.root,
        element: LazyPage(() => import('@/pages/docs/index')),
      },
    ],
  },
] satisfies RouteObject[];
