'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { Briefcase, Calendar, Award } from 'lucide-react'
import { Space_Grotesk, Orbitron } from 'next/font/google'
import { useTranslations } from 'next-intl'

const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700']
})
const orbitron = Orbitron({ 
  subsets: ['latin'],
  weight: ['400', '500', '700', '900']
})

interface WorkExperience {
  id: number
  company: string
  position: string
  period: string
  duration: string
  description: string
  achievements: string[]
  skills: string[]
  gradient: string
}

export default function EnhancedWorkExperienceJourney() {
  const t = useTranslations('workExperience')
  
  // Build work experiences from translations
  const workExperiences: WorkExperience[] = [
    {
      id: 1,
      company: t('kpk.company'),
      position: t('kpk.title'),
      period: t('kpk.duration'),
      duration: t('kpk.durationShort'),
      description: t('kpk.description'),
      achievements: [
        t('kpk.achievement1'),
        t('kpk.achievement2'),
        t('kpk.achievement3'),
        t('kpk.achievement4')
      ],
      skills: t.raw('kpk.skills') as string[],
      gradient: 'from-emerald-500 via-green-500 to-teal-500',
    },
    {
      id: 2,
      company: t('maro.company'),
      position: t('maro.title'),
      period: t('maro.duration'),
      duration: t('maro.durationShort'),
      description: t('maro.description'),
      achievements: [
        t('maro.achievement1'),
        t('maro.achievement2'),
        t('maro.achievement3')
      ],
      skills: t.raw('maro.skills') as string[],
      gradient: 'from-lime-500 via-green-500 to-emerald-500',
    },
    {
      id: 3,
      company: t('sub.company'),
      position: t('sub.title'),
      period: t('sub.duration'),
      duration: t('sub.durationShort'),
      description: t('sub.description'),
      achievements: [
        t('sub.achievement1'),
        t('sub.achievement2'),
        t('sub.achievement3')
      ],
      skills: t.raw('sub.skills') as string[],
      gradient: 'from-green-500 via-emerald-500 to-teal-500',
    },
  ]
  
  const [activeExperience, setActiveExperience] = useState(workExperiences[0].id)

  return (
    <div className="min-h-screen pt-20 md:pt-24 pb-8 md:pb-12 px-2 sm:px-4 md:px-6 lg:px-8 relative z-0">
      <div className="max-w-6xl mx-auto">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className={`text-3xl md:text-4xl lg:text-5xl font-bold text-center text-neonGreen neon-glow mb-12 md:mb-16 ${orbitron.className}`}
        >
          {t('pageTitle')}
        </motion.h1>
        
        {/* Split Screen Layout: Navigation List (Left) + Details Panel (Right) */}
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
          
          {/* LEFT SIDE - Company Navigation List */}
          <div className="w-full lg:w-2/5 xl:w-1/3">
            <div className="space-y-4">
              {workExperiences.map((experience, index) => {
                const isActive = activeExperience === experience.id
                
                return (
                  <motion.div
                    key={experience.id}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <motion.button
                      onClick={() => setActiveExperience(experience.id)}
                      whileHover={{ x: 5 }}
                      whileTap={{ scale: 0.98 }}
                      className={`w-full text-left relative overflow-hidden rounded-xl border-2 transition-all duration-300 ${
                        isActive
                          ? 'border-neonGreen shadow-[0_0_25px_rgba(57,255,20,0.4)] bg-darkCard'
                          : 'border-neonGreen/20 hover:border-neonGreen/50 bg-darkCard/70'
                      }`}
                    >
                      {/* Background gradient */}
                      <div className="absolute inset-0 bg-black/50" />
                      <motion.div
                        className={`absolute inset-0 bg-gradient-to-br ${experience.gradient}`}
                        animate={{
                          opacity: isActive ? 0.1 : 0.03,
                        }}
                        transition={{ duration: 0.3 }}
                      />
                      
                      {/* Content */}
                      <div className="relative z-10 p-4 flex items-center gap-4">
                        {/* Number Badge */}
                        <div className={`flex-shrink-0 w-12 h-12 bg-gradient-to-br ${experience.gradient} rounded-lg flex items-center justify-center shadow-lg`}>
                          <span className={`text-white font-bold text-lg ${orbitron.className}`}>
                            {index + 1}
                          </span>
                        </div>
                        
                        {/* Company Info */}
                        <div className="flex-1 min-w-0">
                          <h3 className={`text-lg font-bold text-neonGreen mb-0.5 truncate ${orbitron.className}`}>
                            {experience.company}
                          </h3>
                          <p className={`text-sm text-gray-300 truncate ${spaceGrotesk.className}`}>
                            {experience.position}
                          </p>
                          <div className={`inline-block mt-1 px-2 py-0.5 bg-gradient-to-r ${experience.gradient} rounded-full text-white text-xs font-bold`}>
                            {experience.duration}
                          </div>
                        </div>
                        
                        {/* Active Indicator */}
                        {isActive && (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="flex-shrink-0"
                          >
                            <div className="w-3 h-3 bg-neonGreen rounded-full shadow-[0_0_10px_rgba(57,255,20,0.8)]" />
                          </motion.div>
                        )}
                      </div>
                      
                      {/* Bottom accent */}
                      <div className={`h-1 bg-gradient-to-r ${experience.gradient} ${isActive ? 'opacity-100' : 'opacity-40'} transition-opacity`} />
                    </motion.button>
                  </motion.div>
                )
              })}
            </div>
          </div>
          
          {/* RIGHT SIDE - Details Panel */}
          <div className="w-full lg:w-3/5 xl:w-2/3">
            <AnimatePresence mode="wait">
              {workExperiences.find(exp => exp.id === activeExperience) && (
                <motion.div
                  key={activeExperience}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4 }}
                  className="sticky top-24"
                >
                  <div className="relative overflow-hidden rounded-2xl border-2 border-neonGreen/30 bg-darkCard shadow-xl">
                    {/* Background */}
                    <div className="absolute inset-0 bg-black/50" />
                    <div className={`absolute inset-0 bg-gradient-to-br ${workExperiences.find(exp => exp.id === activeExperience)?.gradient} opacity-5`} />
                    
                    {/* Decorative corners */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-neonGreen/10 to-transparent rounded-bl-full" />
                    <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-neonGreen/10 to-transparent rounded-tr-full" />
                    
                    {/* Content */}
                    <div className="relative z-10 p-6 md:p-8">
                      {/* Header */}
                      <div className="flex items-start gap-4 mb-6">
                        <motion.div
                          initial={{ rotate: 0 }}
                          animate={{ rotate: 360 }}
                          transition={{ duration: 0.6 }}
                          className={`flex-shrink-0 w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br ${workExperiences.find(exp => exp.id === activeExperience)?.gradient} rounded-2xl flex items-center justify-center shadow-lg`}
                        >
                          <Briefcase className="w-8 h-8 md:w-10 md:h-10 text-white" />
                        </motion.div>
                        
                        <div className="flex-1">
                          <div className={`inline-block px-3 py-1 mb-2 bg-gradient-to-r ${workExperiences.find(exp => exp.id === activeExperience)?.gradient} rounded-full text-white text-xs font-bold`}>
                            {workExperiences.find(exp => exp.id === activeExperience)?.duration}
                          </div>
                          <h2 className={`text-2xl md:text-3xl font-bold text-neonGreen mb-2 ${orbitron.className}`}>
                            {workExperiences.find(exp => exp.id === activeExperience)?.company}
                          </h2>
                          <p className={`text-lg md:text-xl text-gray-100 font-semibold mb-2 ${spaceGrotesk.className}`}>
                            {workExperiences.find(exp => exp.id === activeExperience)?.position}
                          </p>
                          <div className="flex items-center gap-2 text-sm text-gray-300">
                            <Calendar className="w-4 h-4 text-neonGreen" />
                            <span className={spaceGrotesk.className}>
                              {workExperiences.find(exp => exp.id === activeExperience)?.period}
                            </span>
                          </div>
                        </div>
                      </div>
                      
                      {/* Divider */}
                      <div className={`h-px bg-gradient-to-r ${workExperiences.find(exp => exp.id === activeExperience)?.gradient} opacity-30 mb-6`} />
                      
                      {/* Description */}
                      <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className={`text-base md:text-lg text-gray-200 mb-8 leading-relaxed ${spaceGrotesk.className}`}
                      >
                        {workExperiences.find(exp => exp.id === activeExperience)?.description}
                      </motion.p>
                      
                      {/* Achievements */}
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="bg-black/60 backdrop-blur-sm rounded-xl p-6 mb-8 border border-neonGreen/20"
                      >
                        <h3 className={`text-xl md:text-2xl font-bold text-neonGreen mb-5 flex items-center ${orbitron.className}`}>
                          <div className="w-10 h-10 bg-neonGreen/20 rounded-lg flex items-center justify-center mr-3">
                            <Award className="w-6 h-6 text-neonGreen" />
                          </div>
                          {t('achievements')}
                        </h3>
                        <ul className="space-y-4">
                          {workExperiences.find(exp => exp.id === activeExperience)?.achievements.map((achievement, idx) => (
                            <motion.li
                              key={idx}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.3 + idx * 0.1 }}
                              className="flex items-start gap-3 group"
                            >
                              <div className="flex-shrink-0 w-7 h-7 bg-neonGreen/10 group-hover:bg-neonGreen/20 rounded-full flex items-center justify-center transition-colors">
                                <span className="text-neonGreen font-bold text-sm">{idx + 1}</span>
                              </div>
                              <span className={`text-base text-gray-200 group-hover:text-white transition-colors ${spaceGrotesk.className}`}>
                                {achievement}
                              </span>
                            </motion.li>
                          ))}
                        </ul>
                      </motion.div>
                      
                      {/* Skills */}
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                      >
                        <h3 className={`text-xl md:text-2xl font-bold text-neonGreen mb-5 ${orbitron.className}`}>
                          {t('skills')}
                        </h3>
                        <div className="flex flex-wrap gap-3">
                          {workExperiences.find(exp => exp.id === activeExperience)?.skills.map((skill, idx) => (
                            <motion.span
                              key={idx}
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: 0.5 + idx * 0.05 }}
                              whileHover={{ scale: 1.05, y: -2 }}
                              className={`px-4 py-2 bg-gradient-to-r ${workExperiences.find(exp => exp.id === activeExperience)?.gradient} text-white rounded-lg text-sm font-bold shadow-lg hover:shadow-xl transition-all ${spaceGrotesk.className}`}
                            >
                              {skill}
                            </motion.span>
                          ))}
                        </div>
                      </motion.div>
                    </div>
                    
                    {/* Bottom accent */}
                    <div className={`h-1 bg-gradient-to-r ${workExperiences.find(exp => exp.id === activeExperience)?.gradient} opacity-80`} />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          
        </div>
      </div>
    </div>
  )
}


