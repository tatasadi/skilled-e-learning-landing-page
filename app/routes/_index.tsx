import type { MetaFunction } from '@remix-run/node'

export const meta: MetaFunction = () => {
  return [
    { title: 'Skilled e-learning landing page' },
    { name: 'description', content: 'A Challenge from Frontend Mentor!' },
  ]
}

export default function Index() {
  return <h1 className="text-3xl font-bold underline">Hello world!</h1>
}
