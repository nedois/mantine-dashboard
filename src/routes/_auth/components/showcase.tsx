import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_auth/components/showcase')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_auth/components/"!</div>
}
