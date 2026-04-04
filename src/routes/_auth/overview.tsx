import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_auth/overview')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_auth/overview"!</div>
}
