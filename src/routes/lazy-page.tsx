import { ComponentType, ElementType, Suspense, lazy } from 'react';

import { LoadingScreen } from '@/components/loading-screen';

const Loadable = (Component: ElementType) => (props: any) => (
  <Suspense fallback={<LoadingScreen />}>
    <Component {...props} />
  </Suspense>
);

export function LazyPage(callback: () => Promise<{ default: ComponentType<any> }>) {
  const Component = Loadable(lazy(callback));
  return <Component />;
}
