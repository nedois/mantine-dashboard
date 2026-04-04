import { createRouter, RouterProvider } from "@tanstack/react-router";

import { LoadingScreen } from "#/components/loading-screen";

import { routeTree } from "./route-tree.gen";

export const router = createRouter({
  defaultPendingComponent: LoadingScreen,
  defaultPreload: "intent",
  defaultPreloadStaleTime: 0,
  defaultStructuralSharing: true,
  routeTree,
  scrollRestoration: true,
});

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export function Router() {
  return <RouterProvider router={router} />;
}
