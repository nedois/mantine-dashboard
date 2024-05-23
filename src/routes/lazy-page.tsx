import { ComponentType, ElementType, Suspense, lazy } from 'react';
import { Center, Progress } from '@mantine/core';

const Loadable = (Component: ElementType) => (props: any) => (
  <Suspense
    fallback={
      <Center h="100%">
        <Progress radius="xl" value={100} striped animated w="80%" maw="32rem" />
      </Center>
    }
  >
    <Component {...props} />
  </Suspense>
);

export function LazyPage(callback: () => Promise<{ default: ComponentType<any> }>) {
  const Component = Loadable(lazy(callback));
  return <Component />;
}
