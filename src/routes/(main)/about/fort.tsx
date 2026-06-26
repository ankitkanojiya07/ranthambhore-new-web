import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/(main)/about/fort')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/(main)/about/fort"!</div>
}
