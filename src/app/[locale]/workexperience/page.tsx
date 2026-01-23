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
      <div className="max-w-7xl mx-auto">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className={`text-3xl md:text-4xl lg:text-5xl font-bold text-center text-neonGreen neon-glow mb-8 md:mb-12 ${orbitron.className}`}
        >
          {t('pageTitle')}
        </motion.h1>
        
        <div className="relative">
          {/* Journey Line - Left side on mobile, center on desktop */}
          <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 w-1 h-full bg-neonGreen/30 shadow-[0_0_10px_rgba(57,255,20,0.5)]" />
          
          {workExperiences.map((experience, index) => (
            <motion.div
              key={experience.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`mb-8 md:mb-16 flex flex-row md:${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
            >
              {/* Animated Timeline Dot */}
              <div className="flex items-start md:items-center md:w-1/2 md:justify-center relative">
                <motion.div 
                  className={`relative w-10 h-10 md:w-16 md:h-16 flex items-center justify-center flex-shrink-0 mt-1 md:mt-0`}
                  whileHover={{ scale: 1.2 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Outer pulsing ring */}
                  <motion.div
                    className={`absolute inset-0 rounded-full bg-gradient-to-r ${experience.gradient} opacity-30`}
                    animate={{
                      scale: [1, 1.3, 1],
                      opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  
                  {/* Main icon circle */}
                  <motion.div 
                    className={`relative w-10 h-10 md:w-16 md:h-16 bg-gradient-to-br ${experience.gradient} rounded-full flex items-center justify-center shadow-lg border-2 border-neonGreen/30 backdrop-blur-sm z-10`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Briefcase className="w-5 h-5 md:w-8 md:h-8 text-white" />
                  </motion.div>
                  
                  {/* Inner glow */}
                  <div className={`absolute inset-2 md:inset-3 rounded-full bg-gradient-to-br ${experience.gradient} opacity-50 blur-md`} />
                </motion.div>
              </div>
              
              {/* Enhanced Content Card */}
              <div className="flex-1 md:w-1/2 pl-4 md:px-4">
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  whileTap={{ scale: 0.98 }}
                  className={`relative overflow-hidden bg-darkCard border rounded-xl shadow-lg cursor-pointer transition-all duration-300 group ${
                    activeExperience === experience.id 
                      ? 'ring-2 md:ring-4 ring-neonGreen border-neonGreen shadow-[0_0_30px_rgba(57,255,20,0.5)]' 
                      : 'border-neonGreen/20 hover:border-neonGreen/40'
                  }`}
                  onClick={() => setActiveExperience(experience.id)}
                >
                  {/* Gradient background overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${experience.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                  
                  {/* Animated corner accent */}
                  <motion.div
                    className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${experience.gradient} opacity-20 blur-2xl`}
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.2, 0.3, 0.2],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  
                  {/* Content */}
                  <div className="relative p-4 md:p-6">
                    {/* Duration badge */}
                    <div className={`inline-block px-2 md:px-3 py-1 bg-gradient-to-r ${experience.gradient} rounded-full text-white text-xs font-bold mb-2 md:mb-3`}>
                      {experience.duration}
                    </div>
                    
                    <h3 className={`text-lg md:text-2xl font-bold text-neonGreen mb-1 md:mb-2 group-hover:text-shadow-glow transition-all ${orbitron.className}`}>
                      {experience.company}
                    </h3>
                    
                    <p className={`text-base md:text-lg text-lightGreen mb-2 font-semibold ${spaceGrotesk.className}`}>
                      {experience.position}
                    </p>
                    
                    <div className="flex items-center gap-2 text-xs md:text-sm text-lightGreen/70">
                      <Calendar className="w-3 h-3 md:w-4 md:h-4 text-neonGreen" />
                      <span className={spaceGrotesk.className}>{experience.period}</span>
                    </div>
                    
                    {/* Hover indicator */}
                    <motion.div
                      className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity"
                      initial={{ x: -10 }}
                      whileHover={{ x: 0 }}
                    >
                      <span className="text-neonGreen text-xs font-bold">{t('viewDetails')} →</span>
                    </motion.div>
                  </div>
                  
                  {/* Bottom gradient line */}
                  <div className={`h-1 bg-gradient-to-r ${experience.gradient} opacity-50 group-hover:opacity-100 transition-opacity`} />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Experience Details */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeExperience}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="mt-8 md:mt-12 relative overflow-hidden bg-darkCard border border-neonGreen/20 p-4 md:p-8 rounded-xl shadow-xl"
          >
            {/* Gradient background overlay */}
            <div className={`absolute inset-0 bg-gradient-to-br ${workExperiences.find(exp => exp.id === activeExperience)?.gradient} opacity-5`} />
            
            {/* Decorative corner patterns */}
            <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-neonGreen/10 to-transparent rounded-br-full" />
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-neonGreen/10 to-transparent rounded-tl-full" />
            
            <div className="relative">
              {workExperiences.find(exp => exp.id === activeExperience) && (
                <>
                  {/* Header with icon */}
                  <div className="flex items-center gap-3 mb-4 md:mb-6">
                    <div className={`w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br ${workExperiences.find(exp => exp.id === activeExperience)?.gradient} rounded-xl flex items-center justify-center shadow-lg`}>
                      <Briefcase className="w-6 h-6 md:w-8 md:h-8 text-white" />
                    </div>
                    <div>
                      <h2 className={`text-xl md:text-3xl font-bold text-neonGreen ${orbitron.className}`}>
                        {workExperiences.find(exp => exp.id === activeExperience)?.company}
                      </h2>
                      <p className={`text-xs md:text-sm text-neonGreen/70 ${spaceGrotesk.className}`}>
                        {workExperiences.find(exp => exp.id === activeExperience)?.period}
                      </p>
                    </div>
                  </div>
                  
                  <p className={`text-sm md:text-lg text-lightGreen mb-6 md:mb-8 ${spaceGrotesk.className}`}>
                    {workExperiences.find(exp => exp.id === activeExperience)?.description}
                  </p>
                  
                  {/* Achievements section with better styling */}
                  <div className="bg-darkAccent/30 backdrop-blur-sm rounded-lg p-4 md:p-6 mb-6 md:mb-8 border border-neonGreen/10">
                    <h3 className={`text-lg md:text-2xl font-bold text-neonGreen mb-4 md:mb-6 flex items-center ${orbitron.className}`}>
                      <div className="w-8 h-8 md:w-10 md:h-10 bg-neonGreen/20 rounded-lg flex items-center justify-center mr-3">
                        <Award className="w-5 h-5 md:w-6 md:h-6 text-neonGreen" />
                      </div>
                      {t('achievements')}
                    </h3>
                    <ul className="list-none space-y-3 md:space-y-4">
                      {workExperiences.find(exp => exp.id === activeExperience)?.achievements.map((achievement, index) => (
                        <motion.li 
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          className="flex items-start group"
                        >
                          <div className="flex-shrink-0 w-6 h-6 md:w-7 md:h-7 bg-neonGreen/10 group-hover:bg-neonGreen/20 rounded-full flex items-center justify-center mr-3 transition-colors">
                            <span className="text-neonGreen font-bold text-xs md:text-sm">{index + 1}</span>
                          </div>
                          <span className={`text-sm md:text-base text-lightGreen group-hover:text-white transition-colors ${spaceGrotesk.className}`}>
                            {achievement}
                          </span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Skills section with gradient tags */}
                  <div>
                    <h3 className={`text-lg md:text-2xl font-bold text-neonGreen mb-4 md:mb-6 ${orbitron.className}`}>
                      {t('skills')}
                    </h3>
                    <div className="flex flex-wrap gap-2 md:gap-3">
                      {workExperiences.find(exp => exp.id === activeExperience)?.skills.map((skill, index) => (
                        <motion.span
                          key={index}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          whileHover={{ scale: 1.1, y: -2 }}
                          transition={{ duration: 0.2 }}
                          className={`relative px-3 py-1.5 md:px-4 md:py-2 bg-gradient-to-r ${workExperiences.find(exp => exp.id === activeExperience)?.gradient} text-white rounded-lg text-xs md:text-sm font-bold shadow-lg hover:shadow-xl transition-all ${spaceGrotesk.className}`}
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}


