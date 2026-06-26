import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/(main)/about/flora-and-fauna')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/(main)/about/flora-and-fauna"!</div>
}
