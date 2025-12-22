'use client'

import { ReactNode } from 'react'
import { LoadingProvider } from '../contexts/LoadingContext'
import SimpleLoading from './SimpleLoading'
import PageTransition from './PageTransition'
import { usePageTransition } from '../hooks/usePageTransition'

function PageTransitionHandler({ children }: { children: ReactNode }) {
  const isNavigating = usePageTransition()
  
  return (
    <>
      <SimpleLoading isLoading={isNavigating} />
      <PageTransition>
        {children}
      </PageTransition>
    </>
  )
}

export default function ClientLayout({ children }: { children: ReactNode }) {
  return (
    <LoadingProvider>
      <PageTransitionHandler>
        {children}
      </PageTransitionHandler>
    </LoadingProvider>
  )
}

