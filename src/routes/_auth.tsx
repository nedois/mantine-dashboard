import { createFileRoute, redirect } from "@tanstack/react-router";
import { lazy } from "react";

export const Route = createFileRoute("/_auth")({
  beforeLoad: async () => {
    const isAuthenticated = true;

    if (!isAuthenticated) {
      throw redirect({ search: { redirect: location.href }, to: "/" });
    }
  },
  component: lazy(() => import("#/layouts/dashboard-layout")),
});
