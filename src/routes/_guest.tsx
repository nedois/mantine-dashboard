import { createFileRoute, redirect } from "@tanstack/react-router";
import { lazy } from "react";
import { z } from "zod";

export const Route = createFileRoute("/_guest")({
  beforeLoad: async ({ search }) => {
    const isAuthenticated = false;

    if (isAuthenticated) {
      throw redirect({ to: search.redirect ?? "/" });
    }
  },
  component: lazy(() => import("#/layouts/auth-layout")),
  validateSearch: z.object({ redirect: z.string().optional() }),
});
