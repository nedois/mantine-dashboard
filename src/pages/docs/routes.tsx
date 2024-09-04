import { RouteObject } from 'react-router-dom';
import { LazyPage } from '@/routes/lazy-page';
import paths from './paths';

const posts = Object.keys(import.meta.glob('/src/pages/docs/**/*.mdx')).map((path) => ({
  filePath: path,
  slug: path.split('/src/pages/docs/').at(-1)?.replace('.mdx', '') ?? '',
}));

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
      ...posts.map(({ filePath, slug }) => ({
        path: paths.page(slug),
        element: LazyPage(() => import(filePath)),
      })),
    ],
  },
] satisfies RouteObject[];
