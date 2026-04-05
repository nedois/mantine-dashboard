import { nprogress } from "@mantine/nprogress";
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

router.subscribe("onBeforeLoad", ({ pathChanged }) => {
  if (pathChanged) {
    nprogress.start();
  }
});

router.subscribe("onLoad", () => {
  nprogress.complete();
});

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export function Router() {
  return <RouterProvider router={router} />;
}
