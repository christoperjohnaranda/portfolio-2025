'use client'

import { useEffect, useRef } from 'react'

export default function LaserCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const trailsRef = useRef<HTMLDivElement>(null)
  const trails = useRef<Array<{ x: number; y: number; timestamp: number }>>([])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Update cursor position directly without state
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`
      }

      // Add trail
      trails.current.push({
        x: e.clientX,
        y: e.clientY,
        timestamp: Date.now()
      })

      // Keep only last 12 trails
      if (trails.current.length > 12) {
        trails.current.shift()
      }

      // Update trails
      updateTrails()
    }

    const updateTrails = () => {
      if (!trailsRef.current) return

      const now = Date.now()
      const html = trails.current
        .map((trail, index) => {
          const age = now - trail.timestamp
          const opacity = Math.max(0, 1 - age / 300 - index * 0.08)
          
          if (opacity <= 0) return ''
          
          return `<div style="
            position: fixed;
            left: ${trail.x}px;
            top: ${trail.y}px;
            width: 6px;
            height: 6px;
            border-radius: 50%;
            background: rgba(57, 255, 20, ${opacity * 0.8});
            box-shadow: 0 0 8px rgba(57, 255, 20, ${opacity * 0.6});
            transform: translate(-50%, -50%);
            pointer-events: none;
            z-index: 9998;
          "></div>`
        })
        .join('')

      trailsRef.current.innerHTML = html
    }

    // Clean up old trails continuously
    const cleanupInterval = setInterval(() => {
      const now = Date.now()
      trails.current = trails.current.filter(trail => now - trail.timestamp < 300)
      updateTrails()
    }, 16) // 60fps

    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      clearInterval(cleanupInterval)
    }
  }, [])

  return (
    <>
      {/* Hide default cursor */}
      <style jsx global>{`
        * {
          cursor: none !important;
        }
      `}</style>

      {/* Trails container */}
      <div ref={trailsRef} className="fixed inset-0 pointer-events-none z-[9998]" />

      {/* Main laser cursor */}
      <div
        ref={cursorRef}
        className="fixed pointer-events-none z-[9999] top-0 left-0"
        style={{
          width: 0,
          height: 0,
          willChange: 'transform',
        }}
      >
        {/* Outer glow */}
        <div
          className="absolute rounded-full"
          style={{
            width: '30px',
            height: '30px',
            marginLeft: '-15px',
            marginTop: '-15px',
            background: 'radial-gradient(circle, rgba(57, 255, 20, 0.3) 0%, transparent 70%)',
            animation: 'pulse-cursor 2s ease-in-out infinite',
          }}
        />
        
        {/* Inner core */}
        <div
          className="absolute rounded-full"
          style={{
            width: '12px',
            height: '12px',
            marginLeft: '-6px',
            marginTop: '-6px',
            background: '#39FF14',
            boxShadow: '0 0 10px #39FF14, 0 0 20px #39FF14, 0 0 30px #39FF14',
          }}
        />

        {/* Center dot */}
        <div
          className="absolute rounded-full"
          style={{
            width: '4px',
            height: '4px',
            marginLeft: '-2px',
            marginTop: '-2px',
            background: '#fff',
          }}
        />
      </div>
    </>
  )
}

