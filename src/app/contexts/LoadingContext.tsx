'use client'

import { createContext, useContext, useState, ReactNode, useCallback } from 'react'

interface LoadingContextType {
  isLoading: boolean
  isPageReady: boolean
  setLoading: (loading: boolean) => void
  setPageReady: (ready: boolean) => void
  startLoading: () => void
  stopLoading: () => void
}

const LoadingContext = createContext<LoadingContextType | undefined>(undefined)

export function LoadingProvider({ children }: { children: ReactNode }) {
  const [isLoading, setIsLoading] = useState(false)
  const [isPageReady, setIsPageReady] = useState(true)

  const setLoading = useCallback((loading: boolean) => {
    setIsLoading(loading)
    if (loading) {
      setIsPageReady(false)
    }
  }, [])

  const setPageReadyState = useCallback((ready: boolean) => {
    setIsPageReady(ready)
  }, [])

  const startLoading = useCallback(() => {
    setIsLoading(true)
    setIsPageReady(false)
  }, [])

  const stopLoading = useCallback(() => {
    setIsLoading(false)
    // Delay page ready to allow smooth transition
    setTimeout(() => {
      setIsPageReady(true)
    }, 100)
  }, [])

  return (
    <LoadingContext.Provider value={{ 
      isLoading, 
      isPageReady,
      setLoading, 
      setPageReady: setPageReadyState,
      startLoading, 
      stopLoading 
    }}>
      {children}
    </LoadingContext.Provider>
  )
}

export function useLoading() {
  const context = useContext(LoadingContext)
  if (context === undefined) {
    throw new Error('useLoading must be used within a LoadingProvider')
  }
  return context
}

