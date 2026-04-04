import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_guest/login")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/_guest/login"!</div>;
}
