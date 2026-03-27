export const dynamic = 'force-dynamic'

import { Suspense } from 'react'
import AppShell from '../src/App'

export default function Page() {
  return (
    <Suspense fallback={null}>
      <AppShell forcedPage="home" />
    </Suspense>
  )
}