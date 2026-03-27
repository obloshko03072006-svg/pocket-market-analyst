export const dynamic = 'force-dynamic'

import { Suspense } from 'react'
import AppShell from '../../src/App'

export default function SignalsPage() {
  return (
    <Suspense fallback={null}>
      <AppShell forcedPage="signals" />
    </Suspense>
  )
}