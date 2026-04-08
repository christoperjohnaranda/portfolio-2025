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

const skillGroups = [
  {
    category: 'Languages',
    labelId: 'Bahasa Pemrograman',
    color: 'from-blue-500 to-cyan-500',
    skills: [
      { name: 'JavaScript', logo: '/assets/javascript.png' },
      { name: 'TypeScript',  logo: '/assets/typescript.png' },
      { name: 'PHP',         logo: '/assets/php.png' },
      { name: 'Python',      logo: '/assets/python.png' },
      { name: 'Java',        logo: '/assets/java.png' },
      { name: 'C',           logo: '/assets/c.png' },
    ],
  },
  {
    category: 'Frontend',
    labelId: 'Frontend',
    color: 'from-neonGreen to-emerald-500',
    skills: [
      { name: 'HTML',          logo: '/assets/html.png' },
      { name: 'CSS',           logo: '/assets/css.png' },
      { name: 'React',         logo: '/assets/react.png' },
      { name: 'Next.js',       logo: '/assets/next.png' },
      { name: 'Vite.js',       logo: '/assets/vite.png' },
      { name: 'Tailwind CSS',  logo: '/assets/tailwind.png' },
      { name: 'Bootstrap',     logo: '/assets/bootstrap.png' },
      { name: 'Framer Motion', logo: '/assets/framermotion.png' },
    ],
  },
  {
    category: 'Backend & Mobile',
    labelId: 'Backend & Mobile',
    color: 'from-purple-500 to-violet-500',
    skills: [
      { name: 'Node.js', logo: '/assets/node.png' },
      { name: 'Laravel', logo: '/assets/laravel.png' },
      { name: 'Prisma',  logo: '/assets/prisma.png' },
      { name: 'Expo',    logo: '/assets/expo.png' },
    ],
  },
  {
    category: 'Database',
    labelId: 'Database',
    color: 'from-orange-500 to-amber-500',
    skills: [
      { name: 'MySQL',      logo: '/assets/mysql.png' },
      { name: 'PostgreSQL', logo: '/assets/pgsql.png' },
      { name: 'MongoDB', logo: '/assets/mongoDB.png' },
    ],
  },
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
            transition={{ duration: 0.15 }}
            className="inline-block"
          >
            <Image
              src={CJ}
              alt="Christoper John Aranda"
              width={150}
              height={150}
              className="rounded-full mx-auto mb-4 border-4 border-neonGreen neon-border grayscale hover:grayscale-0 transition-[filter] duration-200 object-cover cursor-pointer"
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
          <div className="flex justify-center space-x-2 md:space-x-4 mb-6 flex-wrap gap-2">
            {['skills', 'experience', 'education'].map((tab) => (
              <motion.button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 md:px-6 py-2 md:py-3 rounded-lg font-semibold transition-colors duration-150 ${
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
              <div className="flex flex-col gap-6">
                {skillGroups.map((group, groupIndex) => (
                  <motion.div
                    key={group.category}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: groupIndex * 0.1 }}
                    className="bg-darkCard border border-neonGreen/10 rounded-xl p-5"
                  >
                    {/* Category Header */}
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`h-1 w-8 rounded-full bg-gradient-to-r ${group.color}`} />
                      <span className={`text-xs font-bold tracking-widest uppercase text-neonGreen/80 ${orbitron.className}`}>
                        {group.category}
                      </span>
                      <div className="flex-1 h-px bg-neonGreen/10" />
                      <span className={`text-xs text-lightGreen/40 ${spaceGrotesk.className}`}>
                        {group.skills.length} skills
                      </span>
                    </div>

                    {/* Skill Cards */}
                    <div className="flex flex-wrap gap-4">
                      {group.skills.map((skill, index) => (
                        <motion.div
                          key={skill.name}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.25, delay: groupIndex * 0.1 + index * 0.04 }}
                          className="flex flex-col items-center group"
                        >
                          <div className="w-16 h-16 bg-darkAccent rounded-xl shadow-lg flex items-center justify-center mb-2 transition-[box-shadow,border-color,transform] duration-200 hover:shadow-[0_0_16px_rgba(57,255,20,0.4)] hover:rotate-6 border border-neonGreen/20 hover:border-neonGreen">
                            <Image
                              src={skill.logo}
                              alt={`${skill.name} logo`}
                              width={36}
                              height={36}
                              className="w-9 h-9 object-contain transition-transform duration-200 group-hover:scale-110"
                              loading="lazy"
                              quality={75}
                            />
                          </div>
                          <span className={`text-xs font-medium text-lightGreen text-center tracking-wide ${spaceGrotesk.className} group-hover:text-neonGreen transition-colors duration-200`}>
                            {skill.name}
                          </span>
                        </motion.div>
                      ))}
                    </div>
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
            {activeTab === 'education' && (
              <div className="space-y-6">
                {/* UMN Education */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  className="border-l-4 border-neonGreen pl-4"
                >
                  <h3 className={`text-xl font-semibold mb-1 text-neonGreen ${orbitron.className}`}>{t('umn.degree')}</h3>
                  <p className={`text-lightGreen/80 mb-1 text-lg ${spaceGrotesk.className}`}>{t('umn.institution')}</p>
                  <p className={`text-lightGreen/70 mb-3 text-sm ${spaceGrotesk.className}`}>{t('umn.major')} | {t('umn.duration')}</p>
                  <ul className={`list-disc list-inside text-lightGreen space-y-1 ${spaceGrotesk.className}`}>
                    <li>{t('umn.desc1')}</li>
                    <li>{t('umn.desc2')}</li>
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

