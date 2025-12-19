'use client'

import { motion } from 'framer-motion'
import { useState, useEffect, useMemo } from 'react'

export default function AnimatedBackground() {
  const [isMounted, setIsMounted] = useState(false)

  // Floating orbs/shapes
  const orbs = [
    { size: 400, top: '5%', left: '-5%', duration: 15, delay: 0 },
    { size: 350, top: '40%', right: '-10%', duration: 18, delay: 2 },
    { size: 300, bottom: '10%', left: '10%', duration: 20, delay: 4 },
    { size: 250, top: '60%', right: '15%', duration: 16, delay: 1 },
    { size: 320, top: '20%', left: '50%', duration: 19, delay: 3 },
  ]

  // Moving lines
  const lines = [
    { width: 2, height: '100%', left: '20%', duration: 8, delay: 0 },
    { width: 1, height: '100%', left: '45%', duration: 10, delay: 2 },
    { width: 2, height: '100%', right: '30%', duration: 9, delay: 1 },
  ]

  // Generate particles data once to avoid hydration mismatch
  const particlesData = useMemo(() => 
    Array.from({ length: 8 }, () => ({
      left: Math.random() * 100,
      top: Math.random() * 100,
      xMovement: Math.random() * 50 - 25,
      duration: 5 + Math.random() * 3
    })),
    []
  )

  useEffect(() => {
    setIsMounted(true)
  }, [])

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 0 }}>
      {/* Base gradient background */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, #0A0E0D 0%, #0F1C14 50%, #0A0E0D 100%)',
        }}
      />

      {/* Animated floating orbs */}
      {orbs.map((orb, index) => (
        <motion.div
          key={`orb-${index}`}
          className="absolute rounded-full"
          style={{
            width: orb.size,
            height: orb.size,
            top: orb.top,
            left: orb.left,
            right: orb.right,
            bottom: orb.bottom,
            background: `radial-gradient(circle, rgba(57, 255, 20, 0.25) 0%, rgba(57, 255, 20, 0.1) 40%, transparent 70%)`,
            filter: 'blur(60px)',
          }}
          animate={{
            x: [0, 100, -50, 0],
            y: [0, -80, 60, 0],
            scale: [1, 1.3, 0.8, 1],
            opacity: [0.4, 0.7, 0.5, 0.4],
          }}
          transition={{
            duration: orb.duration,
            delay: orb.delay,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}

      {/* Animated vertical lines */}
      {lines.map((line, index) => (
        <motion.div
          key={`line-${index}`}
          className="absolute"
          style={{
            width: line.width,
            height: line.height,
            left: line.left,
            right: line.right,
            top: 0,
            background: `linear-gradient(to bottom, transparent 0%, rgba(57, 255, 20, 0.5) 50%, transparent 100%)`,
            filter: 'blur(1px)',
          }}
          animate={{
            opacity: [0.2, 0.6, 0.2],
            scaleY: [1, 1.2, 1],
          }}
          transition={{
            duration: line.duration,
            delay: line.delay,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}

      {/* Animated grid overlay */}
      <motion.div 
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(57, 255, 20, 0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(57, 255, 20, 0.08) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
          opacity: 0.3,
        }}
        animate={{
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Floating particles - Only render on client side */}
      {isMounted && particlesData.map((particle, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute w-1 h-1 bg-neonGreen rounded-full"
          style={{
            left: `${particle.left}%`,
            top: `${particle.top}%`,
          }}
          animate={{
            y: [0, -100, 0],
            x: [0, particle.xMovement, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: particle.duration,
            delay: i * 0.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}

      {/* Scanline effect */}
      <motion.div
        className="absolute w-full h-[2px] bg-gradient-to-r from-transparent via-neonGreen to-transparent"
        style={{
          left: 0,
          filter: 'blur(2px)',
          opacity: 0.3,
        }}
        animate={{
          top: ['0%', '100%'],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      {/* Vignette effect */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(circle at center, transparent 0%, rgba(10, 14, 13, 0.6) 100%)',
        }}
      />
    </div>
  )
}

