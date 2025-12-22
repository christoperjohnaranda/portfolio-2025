'use client'

import { useLoading } from '../contexts/LoadingContext'

/**
 * Custom hook that returns animation states that are delayed until page is ready
 * Use this instead of directly using framer-motion initial/animate states
 */
export function usePageAnimation() {
  const { isPageReady } = useLoading()

  return {
    // Return true when page is ready to animate
    shouldAnimate: isPageReady,
    
    // Helper to get initial state
    getInitial: (initialState: Record<string, unknown>) => initialState,
    
    // Helper to get animate state - only animate when page is ready
    getAnimate: (animateState: Record<string, unknown>) => isPageReady ? animateState : {},
    
    // Helper for conditional animation
    animate: (animateState: Record<string, unknown>) => isPageReady ? animateState : false,
  }
}

