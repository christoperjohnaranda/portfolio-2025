'use client'

import { useState, useEffect, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Orbitron, Fira_Code } from 'next/font/google'

const orbitron = Orbitron({ 
  subsets: ['latin'],
  weight: ['400', '700', '900']
})

const firaCode = Fira_Code({ 
  subsets: ['latin'],
  weight: ['400', '500']
})

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true)
  const [progress, setProgress] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [glitchName, setGlitchName] = useState('CHRISTOPER JOHN ARANDA')
  const [isMounted, setIsMounted] = useState(false)
  
  // Generate binary numbers once to avoid hydration mismatch
  const binaryNumbers = useMemo(() => 
    Array.from({ length: 10 }, () => Math.random() > 0.5 ? '1' : '0'),
    []
  )
  
  const animationDurations = useMemo(() =>
    Array.from({ length: 10 }, () => 3 + Math.random() * 2),
    []
  )

  const loadingTexts = [
    'INITIALIZING SYSTEM...',
    'LOADING PORTFOLIO.EXE',
    'CONNECTING TO SERVER...',
    'LOADING ASSETS...',
    'COMPILING CODE...',
    'RENDERING INTERFACE...',
    'FINALIZING...',
    'ACCESS GRANTED ✓'
  ]

  useEffect(() => {
    // Set mounted to true on client side
    setIsMounted(true)
    
    let currentTextIndex = 0
    let currentCharIndex = 0
    let typingInterval: NodeJS.Timeout
    let textChangeTimeout: NodeJS.Timeout

    const typeText = () => {
      if (currentTextIndex < loadingTexts.length) {
        const currentText = loadingTexts[currentTextIndex]
        
        typingInterval = setInterval(() => {
          if (currentCharIndex <= currentText.length) {
            setDisplayText(currentText.substring(0, currentCharIndex))
            currentCharIndex++
          } else {
            clearInterval(typingInterval)
            textChangeTimeout = setTimeout(() => {
              currentTextIndex++
              currentCharIndex = 0
              typeText()
            }, 300)
          }
        }, 50)
      }
    }

    typeText()

    // Progress bar animation
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval)
          setTimeout(() => setIsLoading(false), 500)
          return 100
        }
        return prev + 1
      })
    }, 30)

    // Glitch effect
    const glitchInterval = setInterval(() => {
      const glitchChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*'
      const original = 'CHRISTOPER JOHN ARANDA'
      let glitched = ''
      
      for (let i = 0; i < original.length; i++) {
        if (Math.random() > 0.7 && original[i] !== ' ') {
          glitched += glitchChars[Math.floor(Math.random() * glitchChars.length)]
        } else {
          glitched += original[i]
        }
      }
      
      setGlitchName(glitched)
      setTimeout(() => setGlitchName('CHRISTOPER JOHN ARANDA'), 50)
    }, 2000)

    return () => {
      clearInterval(typingInterval)
      clearInterval(progressInterval)
      clearInterval(glitchInterval)
      clearTimeout(textChangeTimeout)
    }
  }, [])

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[10000] flex items-center justify-center bg-darkBg"
        >
          {/* Scanlines effect */}
          <div 
            className="absolute inset-0 pointer-events-none opacity-10"
            style={{
              backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(57, 255, 20, 0.3) 2px, rgba(57, 255, 20, 0.3) 4px)',
            }}
          />

          <div className="relative z-10 text-center px-4">
            {/* Logo/Name with Glitch */}
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <h1 
                className={`text-4xl md:text-6xl font-bold text-neonGreen mb-2 ${orbitron.className}`}
                style={{
                  textShadow: '0 0 10px #39FF14, 0 0 20px #39FF14, 0 0 30px #39FF14',
                  letterSpacing: '0.15em',
                }}
              >
                {glitchName}
              </h1>
              <div className={`text-lightGreen text-sm tracking-widest ${firaCode.className}`}>
                {'[ PORTFOLIO SYSTEM v2.0 ]'}
              </div>
            </motion.div>

            {/* Loading Text with Typing Effect */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="mb-8 h-6"
            >
              <p 
                className={`text-neonGreen text-sm md:text-base ${firaCode.className}`}
                style={{
                  textShadow: '0 0 5px #39FF14',
                }}
              >
                {displayText}
                <span className="animate-pulse">_</span>
              </p>
            </motion.div>

            {/* Progress Bar */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              className="w-full max-w-md mx-auto"
            >
              {/* Progress Container */}
              <div className="relative w-full h-8 bg-darkCard border-2 border-neonGreen/30 rounded-lg overflow-hidden">
                {/* Progress Fill */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-neonGreen/30 via-neonGreen/50 to-neonGreen/30"
                  style={{
                    width: `${progress}%`,
                    boxShadow: '0 0 20px rgba(57, 255, 20, 0.5)',
                  }}
                  initial={{ width: 0 }}
                />
                
                {/* Progress Text */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span 
                    className="text-neonGreen font-mono font-bold text-sm z-10"
                    style={{ textShadow: '0 0 10px #000' }}
                  >
                    {progress}%
                  </span>
                </div>

                {/* Animated Border Glow */}
                <div 
                  className="absolute inset-0 border-2 border-neonGreen rounded-lg"
                  style={{
                    boxShadow: '0 0 10px rgba(57, 255, 20, 0.5), inset 0 0 10px rgba(57, 255, 20, 0.2)',
                  }}
                />
              </div>

              {/* Progress Bar Brackets */}
              <div className="flex justify-between mt-2 text-neonGreen/50 font-mono text-xs">
                <span>{'[ 0% ]'}</span>
                <span>{'[ 50% ]'}</span>
                <span>{'[ 100% ]'}</span>
              </div>
            </motion.div>

            {/* Decorative Elements */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-8 text-neonGreen/30 font-mono text-xs"
            >
              <div className={`flex justify-center gap-4 ${orbitron.className}`}>
                <motion.span
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  {'>>>'}
                </motion.span>
                <span>LOADING</span>
                <motion.span
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                >
                  {'<<<'}
                </motion.span>
              </div>
            </motion.div>

            {/* Binary Rain Effect (subtle) - Only render on client side */}
            {isMounted && (
              <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-20">
                {binaryNumbers.map((number, i) => (
                  <motion.div
                    key={i}
                    className="absolute text-neonGreen font-mono text-xs"
                    style={{
                      left: `${i * 10}%`,
                      top: '-20px',
                    }}
                    animate={{
                      y: ['0vh', '100vh'],
                    }}
                    transition={{
                      duration: animationDurations[i],
                      repeat: Infinity,
                      delay: i * 0.2,
                      ease: 'linear',
                    }}
                  >
                    {number}
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

