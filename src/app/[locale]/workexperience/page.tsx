'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { Briefcase, Calendar, Award, ChevronRight, Wrench } from 'lucide-react'
import { Space_Grotesk, Orbitron } from 'next/font/google'
import { useTranslations } from 'next-intl'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
})
const orbitron = Orbitron({
  subsets: ['latin'],
  weight: ['400', '500', '700', '900'],
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
  color: string
}

export default function WorkExperiencePage() {
  const t = useTranslations('workExperience')

  const experiences: WorkExperience[] = [
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
        t('kpk.achievement4'),
      ],
      skills: t.raw('kpk.skills') as string[],
      color: '#39FF14',
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
        t('maro.achievement3'),
      ],
      skills: t.raw('maro.skills') as string[],
      color: '#39FF14',
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
        t('sub.achievement3'),
      ],
      skills: t.raw('sub.skills') as string[],
      color: '#39FF14',
    },
  ]

  const [activeId, setActiveId] = useState(experiences[0].id)
  const active = experiences.find((e) => e.id === activeId)!

  return (
    <div className={`min-h-screen pt-20 md:pt-24 pb-12 px-4 sm:px-6 md:px-10 lg:px-16 ${spaceGrotesk.className}`}>
      <div className="max-w-6xl mx-auto">

        {/* ── Page heading ── */}
        <motion.div
          initial={{ opacity: 0, y: -18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-10 text-center"
        >
          <p className={`text-xs tracking-[0.25em] uppercase text-neonGreen/60 mb-2 ${orbitron.className}`}>
            Career
          </p>
          <h1 className={`text-3xl md:text-4xl font-black text-neonGreen neon-glow ${orbitron.className}`}>
            {t('pageTitle')}
          </h1>
          <div className="mt-3 mx-auto h-px w-24 bg-gradient-to-r from-transparent via-neonGreen/50 to-transparent" />
        </motion.div>

        {/* ── Split panel ── */}
        <div className="flex flex-col lg:flex-row gap-6">

          {/* LEFT — Job list */}
          <motion.aside
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55 }}
            className="lg:w-[340px] xl:w-[380px] flex-shrink-0"
          >
            {/* Sticky wrapper on desktop */}
            <div className="lg:sticky lg:top-28 flex flex-col gap-3">
              {experiences.map((exp, i) => {
                const isActive = activeId === exp.id
                return (
                  <motion.button
                    key={exp.id}
                    onClick={() => setActiveId(exp.id)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1, duration: 0.4 }}
                    whileHover={{ x: isActive ? 0 : 4 }}
                    className={`w-full text-left rounded-xl border px-5 py-4 transition-all duration-200 relative overflow-hidden group
                      ${isActive
                        ? 'border-neonGreen bg-neonGreen/10 shadow-[0_0_20px_rgba(57,255,20,0.2)]'
                        : 'border-neonGreen/20 bg-darkCard hover:border-neonGreen/40 hover:bg-neonGreen/5'
                      }`}
                  >
                    {/* Active left bar */}
                    <div className={`absolute left-0 top-0 bottom-0 w-1 rounded-l-xl transition-all duration-200
                      ${isActive ? 'bg-neonGreen' : 'bg-transparent'}`}
                    />

                    <div className="flex items-start justify-between gap-3">
                      <div className="flex-1 min-w-0">
                        {/* Duration pill */}
                        <span className={`inline-block text-[10px] font-bold tracking-wider uppercase px-2 py-0.5 rounded-full mb-2
                          ${isActive ? 'bg-neonGreen/20 text-neonGreen' : 'bg-neonGreen/10 text-neonGreen/60'}`}>
                          {exp.duration}
                        </span>

                        <p className={`font-bold text-sm md:text-base leading-tight truncate
                          ${isActive ? 'text-neonGreen' : 'text-lightGreen/80 group-hover:text-lightGreen'} ${orbitron.className}`}>
                          {exp.company}
                        </p>

                        <p className={`text-xs mt-0.5 ${isActive ? 'text-lightGreen/80' : 'text-lightGreen/50'}`}>
                          {exp.position}
                        </p>

                        <div className="flex items-center gap-1.5 mt-2">
                          <Calendar className={`w-3 h-3 flex-shrink-0 ${isActive ? 'text-neonGreen' : 'text-neonGreen/40'}`} />
                          <span className={`text-[11px] ${isActive ? 'text-lightGreen/70' : 'text-lightGreen/40'}`}>
                            {exp.period}
                          </span>
                        </div>
                      </div>

                      <ChevronRight className={`w-4 h-4 mt-1 flex-shrink-0 transition-all duration-200
                        ${isActive ? 'text-neonGreen rotate-90 lg:rotate-0' : 'text-neonGreen/20 group-hover:text-neonGreen/50'}`}
                      />
                    </div>
                  </motion.button>
                )
              })}

              {/* Total experience badge */}
              <div className="mt-1 px-5 py-3 rounded-xl border border-neonGreen/10 bg-neonGreen/5 flex items-center gap-3">
                <Briefcase className="w-4 h-4 text-neonGreen/50 flex-shrink-0" />
                <span className={`text-xs text-lightGreen/50 ${orbitron.className}`}>
                  3 Companies · 2+ Years
                </span>
              </div>
            </div>
          </motion.aside>

          {/* RIGHT — Detail panel */}
          <div className="flex-1 min-w-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeId}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.35 }}
                className="rounded-xl border border-neonGreen/20 bg-darkCard overflow-hidden shadow-xl"
              >
                {/* Header */}
                <div className="relative px-6 py-6 border-b border-neonGreen/10 overflow-hidden">
                  {/* Subtle glow blob */}
                  <div className="absolute -right-10 -top-10 w-40 h-40 bg-neonGreen/10 rounded-full blur-3xl pointer-events-none" />

                  <div className="flex flex-col sm:flex-row sm:items-center gap-4 relative">
                    {/* Icon */}
                    <div className="w-14 h-14 rounded-xl bg-neonGreen/10 border border-neonGreen/30 flex items-center justify-center flex-shrink-0">
                      <Briefcase className="w-7 h-7 text-neonGreen" />
                    </div>

                    <div className="flex-1 min-w-0">
                      <h2 className={`text-xl md:text-2xl font-black text-neonGreen leading-tight ${orbitron.className}`}>
                        {active.company}
                      </h2>
                      <p className={`text-sm text-lightGreen/70 mt-0.5 ${spaceGrotesk.className}`}>
                        {active.position}
                      </p>
                      <div className="flex flex-wrap items-center gap-3 mt-2">
                        <div className="flex items-center gap-1.5 text-xs text-lightGreen/50">
                          <Calendar className="w-3.5 h-3.5 text-neonGreen" />
                          {active.period}
                        </div>
                        <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-neonGreen/15 text-neonGreen">
                          {active.duration}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Body */}
                <div className="px-6 py-6 space-y-7">

                  {/* Description */}
                  <p className={`text-sm md:text-base text-lightGreen/80 leading-relaxed ${spaceGrotesk.className}`}>
                    {active.description}
                  </p>

                  {/* Achievements */}
                  <div>
                    <h3 className={`flex items-center gap-2 text-sm font-bold text-neonGreen uppercase tracking-widest mb-4 ${orbitron.className}`}>
                      <Award className="w-4 h-4" />
                      {t('achievements')}
                    </h3>
                    <ul className="space-y-3">
                      {active.achievements.map((ach, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -12 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.08, duration: 0.35 }}
                          className="flex items-start gap-3 group"
                        >
                          <div className="w-5 h-5 rounded-full border border-neonGreen/40 bg-neonGreen/10
                                          flex items-center justify-center flex-shrink-0 mt-0.5
                                          group-hover:bg-neonGreen/20 transition-colors">
                            <span className="text-neonGreen text-[10px] font-black">{i + 1}</span>
                          </div>
                          <span className={`text-sm text-lightGreen/75 group-hover:text-lightGreen transition-colors leading-relaxed ${spaceGrotesk.className}`}>
                            {ach}
                          </span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Divider */}
                  <div className="h-px bg-neonGreen/10" />

                  {/* Skills */}
                  <div>
                    <h3 className={`flex items-center gap-2 text-sm font-bold text-neonGreen uppercase tracking-widest mb-4 ${orbitron.className}`}>
                      <Wrench className="w-4 h-4" />
                      {t('skills')}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {active.skills.map((skill, i) => (
                        <motion.span
                          key={i}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: i * 0.04, duration: 0.2 }}
                          whileHover={{ scale: 1.08, y: -1 }}
                          className={`px-3 py-1.5 rounded-lg border border-neonGreen/25 bg-neonGreen/8
                                      text-xs font-semibold text-lightGreen/80 hover:border-neonGreen/50
                                      hover:text-neonGreen hover:bg-neonGreen/15 transition-all duration-150
                                      ${spaceGrotesk.className}`}
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  )
}
