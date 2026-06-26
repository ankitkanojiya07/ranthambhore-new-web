import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/(main)/about/conservation')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/(main)/about/conservation"!</div>
}
