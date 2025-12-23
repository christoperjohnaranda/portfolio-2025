'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'
import { Space_Grotesk, Orbitron } from 'next/font/google'
import { useTranslations } from 'next-intl'
import CJ from "../../../../public/assets/CJ.jpeg";

const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700']
})
const orbitron = Orbitron({ 
  subsets: ['latin'],
  weight: ['400', '500', '700', '900']
})

const skills = [
  { name: 'HTML', logo: '/assets/html.png' },
  { name: 'CSS', logo: '/assets/css.png' },
  { name: 'JavaScript', logo: '/assets/javascript.png' },
  { name: 'React', logo: '/assets/react.png' },
  { name: 'Node.js', logo: '/assets/node.png' },
  { name: 'Tailwind CSS', logo: '/assets/tailwind.png' },
  { name: 'PHP', logo: '/assets/php.png' },
  { name: 'Next.js', logo: '/assets/next.png' },
  { name: 'MySQL', logo: '/assets/mysql.png' },
  { name: 'Expo', logo: '/assets/expo.png' },
  { name: 'PostgreSQL', logo: '/assets/pgsql.png' },
  { name: 'Vite.js', logo: '/assets/vite.png' },
  { name: 'TypeScript', logo: '/assets/typescript.png' },
  { name: 'Bootstrap', logo: '/assets/bootstrap.png' },
  { name: 'Framer Motion', logo: '/assets/framermotion.png' },
  { name: 'Python', logo: '/assets/python.png' },
  { name: 'C', logo: '/assets/c.png' },
  { name: 'Java', logo: '/assets/java.png' },
  { name: 'Prisma', logo: '/assets/prisma.png' },
  { name: 'Laravel', logo: '/assets/laravel.png' },
]

export default function AboutMe() {
  const [activeTab, setActiveTab] = useState('skills')
  const t = useTranslations('about')

  const tabVariants = {
    hidden: { y: 10, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  }

  const contentVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
  }

  return (
    <div className="min-h-screen text-white py-16 px-4 sm:px-6 lg:px-8 relative z-0">
      <div className="max-w-4xl mx-auto pt-10">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="inline-block"
          >
            <Image
              src={CJ}
              alt="Christoper John Aranda"
              width={150}
              height={150}
              className="rounded-full mx-auto mb-4 border-4 border-neonGreen neon-border grayscale hover:grayscale-0 transition-all duration-500 object-cover cursor-pointer"
              style={{ width: '150px', height: '150px' }}
              priority
              quality={85}
              placeholder="blur"
            />
          </motion.div>
          <h1 className={`text-4xl font-bold text-neonGreen neon-glow mb-2 ${orbitron.className}`}>{t('fullName')}</h1>
          <p className={`text-xl text-lightGreen ${spaceGrotesk.className}`}>{t('role')}</p>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-darkCard rounded-lg shadow-xl border border-neonGreen/20 p-6 mb-8"
        >
          <h2 className={`text-2xl font-semibold mb-4 text-neonGreen ${orbitron.className}`}>{t('heading')}</h2>
          <p className={`text-lightGreen leading-relaxed ${spaceGrotesk.className}`}>
            {t('description')}
          </p>
        </motion.div>

        <div className="mb-8">
          <div className="flex justify-center space-x-4 mb-6">
            {['skills', 'experience'].map((tab) => (
              <motion.button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                  activeTab === tab
                    ? `bg-neonGreen text-darkBg ${orbitron.className}`
                    : `bg-darkCard text-lightGreen hover:bg-darkAccent ${orbitron.className}`
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                variants={tabVariants}
              >
                {t(`tab${tab.charAt(0).toUpperCase() + tab.slice(1)}`)}
              </motion.button>
            ))}
          </div>

          <motion.div
            key={activeTab}
            initial="hidden"
            animate="visible"
            variants={contentVariants}
          >
            {activeTab === 'skills' && (
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                {skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="flex flex-col items-center group"
                  >
                    <div className="w-20 h-20 bg-darkAccent rounded-xl shadow-lg flex items-center justify-center mb-3 transform transition-all duration-300 hover:shadow-[0_0_20px_rgba(57,255,20,0.5)] hover:rotate-6 border border-neonGreen/20 hover:border-neonGreen">
                      <Image
                        src={skill.logo}
                        alt={`${skill.name} logo`}
                        width={40}
                        height={40}
                        className="w-10 h-10 object-contain transition-transform duration-300 group-hover:scale-110"
                        loading="lazy"
                        quality={75}
                      />
                    </div>
                    <span className={`text-sm font-medium text-lightGreen tracking-wide ${spaceGrotesk.className} group-hover:text-neonGreen transition-colors duration-300`}>
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            )}
            {activeTab === 'experience' && (
              <div className="space-y-6">
                {/* KPK Experience */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  className="border-l-4 border-neonGreen pl-4"
                >
                  <h3 className={`text-xl font-semibold mb-1 text-neonGreen ${orbitron.className}`}>{t('kpk.title')}</h3>
                  <p className={`text-lightGreen/80 mb-3 text-sm ${spaceGrotesk.className}`}>{t('kpk.company')} | {t('kpk.duration')}</p>
                  <ul className={`list-disc list-inside text-lightGreen space-y-1 ${spaceGrotesk.className}`}>
                    <li>{t('kpk.desc1')}</li>
                    <li>{t('kpk.desc2')}</li>
                  </ul>
                </motion.div>

                {/* Maro Experience */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="border-l-4 border-neonGreen pl-4"
                >
                  <h3 className={`text-xl font-semibold mb-1 text-neonGreen ${orbitron.className}`}>{t('maro.title')}</h3>
                  <p className={`text-lightGreen/80 mb-3 text-sm ${spaceGrotesk.className}`}>{t('maro.company')} | {t('maro.duration')}</p>
                  <ul className={`list-disc list-inside text-lightGreen space-y-1 ${spaceGrotesk.className}`}>
                    <li>{t('maro.desc1')}</li>
                    <li>{t('maro.desc2')}</li>
                  </ul>
                </motion.div>

                {/* SUB Experience */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="border-l-4 border-neonGreen pl-4"
                >
                  <h3 className={`text-xl font-semibold mb-1 text-neonGreen ${orbitron.className}`}>{t('sub.title')}</h3>
                  <p className={`text-lightGreen/80 mb-3 text-sm ${spaceGrotesk.className}`}>{t('sub.company')} | {t('sub.duration')}</p>
                  <ul className={`list-disc list-inside text-lightGreen space-y-1 ${spaceGrotesk.className}`}>
                    <li>{t('sub.desc1')}</li>
                    <li>{t('sub.desc2')}</li>
                  </ul>
                </motion.div>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  )
}

