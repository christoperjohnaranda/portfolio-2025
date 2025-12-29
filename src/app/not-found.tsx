'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Home, ArrowLeft } from 'lucide-react'
import { Orbitron, Fira_Code } from 'next/font/google'
import { useState, useEffect } from 'react'

const orbitron = Orbitron({ 
  subsets: ['latin'],
  weight: ['400', '700', '900']
})

const firaCode = Fira_Code({ 
  subsets: ['latin'],
  weight: ['400', '500']
})

export default function NotFound() {
  const [mounted, setMounted] = useState(false)
  const [currentPath, setCurrentPath] = useState('')
  const [timestamp, setTimestamp] = useState('')

  useEffect(() => {
    setMounted(true)
    if (typeof window !== 'undefined') {
      setCurrentPath(window.location.pathname)
      setTimestamp(new Date().toISOString())
    }
  }, [])

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-8 md:py-0 relative overflow-hidden bg-darkBg">
      {/* Animated Background Grid */}
      <motion.div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'linear-gradient(rgba(57, 255, 20, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(57, 255, 20, 0.3) 1px, transparent 1px)',
          backgroundSize: '30px 30px',
        }}
        animate={{
          backgroundPosition: ['0px 0px', '30px 30px'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      {/* Glowing Orbs */}
      <motion.div
        className="absolute top-10 md:top-20 left-5 md:left-20 w-32 md:w-64 h-32 md:h-64 bg-neonGreen/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute bottom-10 md:bottom-20 right-5 md:right-20 w-32 md:w-64 h-32 md:h-64 bg-neonGreen/20 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.5, 0.3, 0.5],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 2.5,
        }}
      />

      <div className="relative z-10 text-center max-w-full sm:max-w-xl md:max-w-2xl w-full">
        {/* 404 Large Text */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, type: 'spring', stiffness: 200 }}
          className="relative"
        >
          <h1 
            className={`text-[120px] sm:text-[160px] md:text-[240px] lg:text-[300px] font-black text-neonGreen ${orbitron.className}`}
            style={{
              textShadow: '0 0 20px #39FF14, 0 0 40px #39FF14, 0 0 60px #39FF14',
              lineHeight: '1',
            }}
          >
            404
          </h1>
          
          {/* Scanline Effect */}
          <motion.div
            className="absolute inset-0 w-full h-2 bg-neonGreen/30"
            animate={{
              y: ['0%', '100%'],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
        </motion.div>

        {/* Error Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-4 md:mt-8 mb-4 px-4"
        >
          <h2 
            className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-neonGreen mb-3 md:mb-4 ${orbitron.className}`}
            style={{
              textShadow: '0 0 10px #39FF14',
            }}
          >
            PAGE NOT FOUND
          </h2>
          <p className={`text-lightGreen text-sm sm:text-base md:text-lg lg:text-xl ${firaCode.className}`}>
            [ERROR] The page you are looking for does not exist.
          </p>
        </motion.div>

        {/* Glitch Text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0, 1, 0, 1] }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className={`text-neonGreen/50 text-xs sm:text-sm mb-6 md:mb-8 px-4 ${firaCode.className}`}
        >
          {'> SYSTEM_ERROR: RESOURCE_NOT_AVAILABLE'}
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center px-4"
        >
          <Link href="/id">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center gap-2 px-5 md:px-6 py-2.5 md:py-3 bg-darkCard border-2 border-neonGreen text-neonGreen rounded-lg hover:bg-neonGreen hover:text-darkBg transition-all text-sm md:text-base ${orbitron.className}`}
              style={{
                boxShadow: '0 0 20px rgba(57, 255, 20, 0.3)',
              }}
            >
              <Home size={18} className="md:w-5 md:h-5" />
              Back to Home
            </motion.button>
          </Link>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              if (typeof window !== 'undefined') {
                window.history.back()
              }
            }}
            className={`flex items-center gap-2 px-5 md:px-6 py-2.5 md:py-3 bg-darkCard border-2 border-neonGreen/50 text-lightGreen rounded-lg hover:border-neonGreen hover:text-neonGreen transition-all text-sm md:text-base ${orbitron.className}`}
          >
            <ArrowLeft size={18} className="md:w-5 md:h-5" />
            Go Back
          </motion.button>
        </motion.div>

        {/* Decorative Code Block */}
        {mounted && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="mt-8 md:mt-12 p-3 md:p-4 bg-darkCard/50 border border-neonGreen/20 rounded-lg text-left overflow-x-auto mx-4 max-w-full"
          >
            <pre className={`text-neonGreen/70 text-[10px] sm:text-xs md:text-sm whitespace-pre-wrap break-all ${firaCode.className}`}>
{`// Error Log
{
  "status": 404,
  "error": "Not Found",
  "message": "The requested resource does not exist",
  "timestamp": "${timestamp}",
  "path": "${currentPath}"
}`}
            </pre>
          </motion.div>
        )}
      </div>
    </div>
  )
}
      {/* Animated Background Grid */}
      <motion.div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'linear-gradient(rgba(57, 255, 20, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(57, 255, 20, 0.3) 1px, transparent 1px)',
          backgroundSize: '30px 30px',
        }}
        animate={{
          backgroundPosition: ['0px 0px', '30px 30px'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      {/* Glowing Orbs */}
      <motion.div
        className="absolute top-10 md:top-20 left-5 md:left-20 w-32 md:w-64 h-32 md:h-64 bg-neonGreen/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute bottom-10 md:bottom-20 right-5 md:right-20 w-32 md:w-64 h-32 md:h-64 bg-neonGreen/20 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.5, 0.3, 0.5],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 2.5,
        }}
      />

      <div className="relative z-10 text-center max-w-full sm:max-w-xl md:max-w-2xl w-full">
        {/* 404 Large Text */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, type: 'spring', stiffness: 200 }}
          className="relative"
        >
          <h1 
            className={`text-[120px] sm:text-[160px] md:text-[240px] lg:text-[300px] font-black text-neonGreen ${orbitron.className}`}
            style={{
              textShadow: '0 0 20px #39FF14, 0 0 40px #39FF14, 0 0 60px #39FF14',
              lineHeight: '1',
            }}
          >
            404
          </h1>
          
          {/* Scanline Effect */}
          <motion.div
            className="absolute inset-0 w-full h-2 bg-neonGreen/30"
            animate={{
              y: ['0%', '100%'],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
        </motion.div>

        {/* Error Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-4 md:mt-8 mb-4 px-4"
        >
          <h2 
            className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-neonGreen mb-3 md:mb-4 ${orbitron.className}`}
            style={{
              textShadow: '0 0 10px #39FF14',
            }}
          >
            PAGE NOT FOUND
          </h2>
          <p className={`text-lightGreen text-sm sm:text-base md:text-lg lg:text-xl ${firaCode.className}`}>
            {'[ERROR] The page you are looking for does not exist.'}
          </p>
        </motion.div>

        {/* Glitch Text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0, 1, 0, 1] }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className={`text-neonGreen/50 text-xs sm:text-sm mb-6 md:mb-8 px-4 ${firaCode.className}`}
        >
          {'> SYSTEM_ERROR: RESOURCE_NOT_AVAILABLE'}
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center px-4"
        >
          <Link href="/">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center gap-2 px-5 md:px-6 py-2.5 md:py-3 bg-darkCard border-2 border-neonGreen text-neonGreen rounded-lg hover:bg-neonGreen hover:text-darkBg transition-all text-sm md:text-base ${orbitron.className}`}
              style={{
                boxShadow: '0 0 20px rgba(57, 255, 20, 0.3)',
              }}
            >
              <Home size={18} className="md:w-5 md:h-5" />
              Back to Home
            </motion.button>
          </Link>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.history.back()}
            className={`flex items-center gap-2 px-5 md:px-6 py-2.5 md:py-3 bg-darkCard border-2 border-neonGreen/50 text-lightGreen rounded-lg hover:border-neonGreen hover:text-neonGreen transition-all text-sm md:text-base ${orbitron.className}`}
          >
            <ArrowLeft size={18} className="md:w-5 md:h-5" />
            Go Back
          </motion.button>
        </motion.div>

        {/* Decorative Code Block */}
        {mounted && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="mt-8 md:mt-12 p-3 md:p-4 bg-darkCard/50 border border-neonGreen/20 rounded-lg text-left overflow-x-auto mx-4 max-w-full"
          >
            <pre className={`text-neonGreen/70 text-[10px] sm:text-xs md:text-sm whitespace-pre-wrap break-all ${firaCode.className}`}>
{`// Error Log
{
  "status": 404,
  "error": "Not Found",
  "message": "The requested resource does not exist",
  "timestamp": "${timestamp}",
  "path": "${currentPath}"
}`}
            </pre>
          </motion.div>
        )}
      </div>
    </div>
  )
}

