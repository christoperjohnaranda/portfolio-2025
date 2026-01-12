'use client'

import { ReactNode } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLoading } from '../contexts/LoadingContext'

interface PageTransitionProps {
  children: ReactNode
}

/**
 * Wrapper component that handles page transitions
 * Hides content during loading and shows with animation when ready
 */
export default function PageTransition({ children }: PageTransitionProps) {
  const { isPageReady } = useLoading()

  return (
    <AnimatePresence mode="wait">
      {isPageReady && (
        <motion.div
          key="page-content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  )
}








