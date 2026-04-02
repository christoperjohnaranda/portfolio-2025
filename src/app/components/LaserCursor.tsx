'use client'

import { useEffect, useState } from 'react'

// Default arrow cursor shape, neon green fill with dark outline
const CURSOR_SVG = encodeURIComponent(
  `<svg xmlns='http://www.w3.org/2000/svg' width='18' height='24' viewBox='0 0 18 24'><path d='M0 0 L0 20 L4.5 15.5 L7.5 23 L10 22 L7 14.5 L13 14.5 Z' fill='#39FF14' stroke='#000000' stroke-width='1.5' stroke-linejoin='round'/></svg>`
)

export default function LaserCursor() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || 'ontouchstart' in window)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  if (isMobile) return null

  return (
    <style jsx global>{`
      * {
        cursor: url("data:image/svg+xml,${CURSOR_SVG}") 0 0, auto !important;
      }
    `}</style>
  )
}
