'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin } from 'lucide-react'
import { Orbitron, Space_Grotesk } from 'next/font/google'
import { useTranslations } from 'next-intl'

const orbitron = Orbitron({ 
  subsets: ['latin'],
  weight: ['400', '500', '700', '900']
})

const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700']
})

export default function Contact() {
  const t = useTranslations('contact')
  
  const contactInfo = [
    {
      icon: Mail,
      title: t('email'),
      value: 'christoperjohnaranda@gmail.com',
      link: 'mailto:christoperjohnaranda@gmail.com',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Phone,
      title: t('whatsapp'),
      value: '+62 856-4880-6508',
      link: 'https://wa.me/6285648806508',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: MapPin,
      title: t('location'),
      value: t('locationValue'),
      link: '#',
      color: 'from-purple-500 to-pink-500'
    }
  ]

  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 mt-20">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className={`text-4xl md:text-6xl font-bold text-neonGreen neon-glow mb-4 ${orbitron.className}`}>
            {t('pageTitle')}
          </h1>
          <p className={`text-lg md:text-xl text-lightGreen max-w-2xl mx-auto ${spaceGrotesk.className}`}>
            {t('pageSubtitle')}
          </p>
        </motion.div>

        {/* Contact Info Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
        >
          {contactInfo.map((info, index) => (
            <motion.a
              key={index}
              href={info.link}
              target={info.link.startsWith('http') ? '_blank' : undefined}
              rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="bg-darkCard border border-neonGreen/20 rounded-lg p-6 text-center hover:border-neonGreen/50 transition-all cursor-pointer group"
            >
              <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br ${info.color} p-0.5`}>
                <div className="w-full h-full rounded-full bg-darkCard flex items-center justify-center">
                  <info.icon className="w-8 h-8 text-neonGreen group-hover:scale-110 transition-transform" />
                </div>
              </div>
              <h3 className={`text-lg font-semibold text-neonGreen mb-2 ${orbitron.className}`}>
                {info.title}
              </h3>
              <p className={`text-lightGreen text-sm ${spaceGrotesk.className}`}>
                {info.value}
              </p>
            </motion.a>
          ))}
        </motion.div>

        {/* Direct Contact Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-darkCard border border-neonGreen/20 rounded-lg p-8 md:p-12 relative overflow-hidden text-center"
        >
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-neonGreen/5 rounded-full blur-3xl -z-0" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-neonGreen/5 rounded-full blur-3xl -z-0" />

          <div className="relative z-10">
            <h2 className={`text-2xl md:text-3xl font-bold text-neonGreen mb-4 ${orbitron.className}`}>
              {t('connectTitle')}
            </h2>
            <p className={`text-lightGreen/70 text-base md:text-lg mb-6 ${spaceGrotesk.className}`}>
              {t('connectMessage').split('\n').map((line, i) => (
                <span key={i}>
                  {line}
                  {i < t('connectMessage').split('\n').length - 1 && <br />}
                </span>
              ))}
            </p>
            <div className="inline-block">
              <a 
                href="mailto:christoperjohnaranda@gmail.com" 
                className={`inline-flex items-center gap-2 bg-neonGreen text-darkBg font-bold py-3 px-8 rounded-lg hover:bg-neonGreen/90 transition-all ${orbitron.className}`}
              >
                <Mail className="w-5 h-5" />
                {t('emailButton')}
              </a>
            </div>
          </div>
        </motion.div>

        {/* Availability Status */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-8 text-center"
        >
          <div className="inline-flex items-center gap-2 bg-darkCard border border-neonGreen/20 rounded-full px-6 py-3">
            <div className="w-3 h-3 bg-neonGreen rounded-full animate-pulse" />
            <span className={`text-lightGreen ${spaceGrotesk.className}`}>
              {t('availability')}
            </span>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

