import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/(main)/about/tigers')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/(main)/about/tigers"!</div>
}
