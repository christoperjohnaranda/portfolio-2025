'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { useLoading } from '../contexts/LoadingContext'

export function usePageTransition() {
  const pathname = usePathname()
  const { isLoading, startLoading, stopLoading } = useLoading()

  useEffect(() => {
    // When pathname changes, show loading
    startLoading()
    
    const timer = setTimeout(() => {
      stopLoading()
    }, 1500) // 1.5 seconds loading duration

    return () => clearTimeout(timer)
  }, [pathname, startLoading, stopLoading])

  return isLoading
}

