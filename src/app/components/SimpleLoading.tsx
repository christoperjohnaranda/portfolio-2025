'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { Fira_Code } from 'next/font/google'

const firaCode = Fira_Code({ 
  subsets: ['latin'],
  weight: ['400', '500']
})

interface SimpleLoadingProps {
  isLoading: boolean
}

export default function SimpleLoading({ isLoading }: SimpleLoadingProps) {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-darkBg"
        >
          <div className="relative flex flex-col items-center gap-4">
            {/* Spinner */}
            <motion.div
              className="w-12 h-12 border-4 border-neonGreen/30 border-t-neonGreen rounded-full"
              animate={{ rotate: 360 }}
              transition={{
                duration: 1,
                repeat: Infinity,
                ease: 'linear'
              }}
              style={{
                boxShadow: '0 0 20px rgba(57, 255, 20, 0.3)',
              }}
            />
            
            {/* Loading Text */}
            <motion.p
              className={`text-neonGreen text-sm md:text-base ${firaCode.className}`}
              style={{
                textShadow: '0 0 10px #39FF14',
                letterSpacing: '0.1em'
              }}
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
            >
              PLEASE WAIT...
            </motion.p>
            
            {/* Decorative dots */}
            <div className="flex gap-2">
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="w-2 h-2 bg-neonGreen rounded-full"
                  animate={{ 
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 1, 0.5]
                  }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    delay: i * 0.2,
                    ease: 'easeInOut'
                  }}
                  style={{
                    boxShadow: '0 0 10px #39FF14',
                  }}
                />
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

