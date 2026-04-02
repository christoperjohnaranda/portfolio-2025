'use client'

import { useLocale } from 'next-intl'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Orbitron } from 'next/font/google'
import { useState, useRef, useEffect } from 'react'
import { Globe, ChevronDown } from 'lucide-react'

const orbitron = Orbitron({ 
  subsets: ['latin'],
  weight: ['500', '600', '700']
})

const languages = [
  { code: 'id', label: 'ID', flag: '🇮🇩', name: 'Indonesia' },
  { code: 'en', label: 'EN', flag: '🇬🇧', name: 'English' }
]

export default function LanguageSwitcher() {
  const locale = useLocale()
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const switchLocale = (newLocale: string) => {
    if (newLocale === locale) return

    // Strip any existing locale prefix (/id or /en) from the current path
    const basePath = pathname.replace(/^\/(id|en)/, '') || '/'

    // EN needs /en prefix; ID is the default locale so no prefix needed
    const newPath = newLocale === 'en'
      ? `/en${basePath === '/' ? '' : basePath}` || '/en'
      : basePath

    // Use hard navigation to ensure middleware runs fresh and
    // next-intl locale context is fully reloaded
    window.location.href = newPath
    setIsOpen(false)
  }

  const currentLang = languages.find(lang => lang.code === locale) || languages[0]

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Dropdown Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className={`
          flex items-center gap-1.5 px-2.5 py-1.5 
          bg-darkCard/80 backdrop-blur-sm 
          border border-neonGreen/30 rounded-lg
          text-neonGreen hover:text-white
          transition-[border-color,box-shadow,color] duration-200
          ${orbitron.className}
        `}
        whileHover={{ 
          borderColor: 'rgba(57, 255, 20, 0.6)',
          boxShadow: '0 0 15px rgba(57, 255, 20, 0.3)',
        }}
        whileTap={{ scale: 0.95 }}
      >
        <Globe className="w-3.5 h-3.5" />
        <span className="text-xs font-semibold">{currentLang.label}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown className="w-3 h-3" />
        </motion.div>
      </motion.button>

      {/* Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full mt-2 right-0 w-36 z-50"
          >
            <div className="bg-darkCard/95 backdrop-blur-md border border-neonGreen/30 rounded-lg shadow-lg overflow-hidden">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-neonGreen/5 blur-xl -z-10" />
              
              {languages.map((lang, index) => (
                <motion.button
                  key={lang.code}
                  onClick={() => switchLocale(lang.code)}
                  className={`
                    w-full px-3 py-2 flex items-center gap-2
                    text-left transition-colors duration-150
                    ${lang.code === locale 
                      ? 'bg-neonGreen/20 text-neonGreen' 
                      : 'text-lightGreen hover:bg-neonGreen/10 hover:text-neonGreen'
                    }
                    ${index !== languages.length - 1 ? 'border-b border-neonGreen/10' : ''}
                    ${orbitron.className}
                  `}
                  whileHover={{ x: 3 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="text-base">{lang.flag}</span>
                  <div className="flex flex-col">
                    <span className="text-xs font-semibold">{lang.label}</span>
                    <span className="text-[10px] opacity-70">{lang.name}</span>
                  </div>
                  
                  {/* Active indicator */}
                  {lang.code === locale && (
                    <motion.div
                      layoutId="activeLanguageDropdown"
                      className="ml-auto w-1.5 h-1.5 rounded-full bg-neonGreen"
                      style={{
                        boxShadow: '0 0 8px rgba(57, 255, 20, 0.8)',
                      }}
                    />
                  )}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

