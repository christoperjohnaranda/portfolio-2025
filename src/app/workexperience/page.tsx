'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { MapPin, Briefcase, Calendar, Award } from 'lucide-react'
import { Space_Grotesk, Orbitron } from 'next/font/google'

const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700']
})
const orbitron = Orbitron({ 
  subsets: ['latin'],
  weight: ['400', '500', '700', '900']
})

const workExperiences = [
  {
    id: 1,
    company: 'Komisi Pemberantasan Korupsi',
    position: 'Junior Programmer',
    period: 'Dec 2025 - Present',
    description: 'Developing and maintaining web applications using React and Node.js',
    achievements: [
      'Developed a nationwide corruption trial recording application used across Indonesia',
      'Built full-stack application using modern tech stack: React, Vite, TypeScript, and Tailwind CSS for frontend',
      'Implemented robust backend system with Laravel and PostgreSQL for handling critical legal data',
      'Collaborated with legal teams to ensure the application meets judicial recording standards and compliance requirements'
    ],
    skills: ['React', 'Vite.js', 'TypeScript', 'Tailwind CSS', 'Laravel', 'PostgreSQL', 'HTML', 'CSS', 'JavaScript'],
  },
  {
    id: 2,
    company: 'PT Maro Anugrah Jaya',
    position: 'Full Stack Developer',
    period: 'Sep 2024 - May 2025',
    description: 'Developing and maintaining full-stack web applications using React, Next.js, Expo, and Node.js with a focus on performance and user experience.',
    achievements: [
      'Optimized web application performance by implementing React and Next.js best practices, resulting in a 40% improvement in loading speed',
      'Developed RESTful APIs using Express and MySQL serving over 1000 daily requests',
      'Implemented responsive UI/UX using Tailwind CSS and TypeScript, increasing user engagement by 35%'
    ],
    skills: ['React', 'Next.js', 'PHP', 'HTML', 'CSS', 'Tailwind CSS', 'JavaScript', 'TypeScript', 'Node.js', 'Express', 'MySQL'],
    color: 'bg-blue-500'
  },
  {
    id: 3,
    company: 'PT Solusi Usaha Berdikari',
    position: 'Website Developer',
    period: 'Feb 2024 - Jul 2024',
    description: 'Developing and maintaining web applications with a focus on front-end development and user interface optimization using modern JavaScript frameworks.',
    achievements: [
      'Implemented responsive design patterns and optimized code structure, reducing load time by 40%',
      'Developed and integrated new features using React.js, leading to a 15% increase in user engagement',
      'Actively contributed to team knowledge sharing and documentation, improving development workflow efficiency'
    ],
    skills: ['React', 'JavaScript', 'TypeScript', 'HTML', 'CSS', 'Bootstrap', 'Git', 'REST APIs', 'Expo'],
    color: 'bg-green-500'
  },
]

export default function EnhancedWorkExperienceJourney() {
  const [activeExperience, setActiveExperience] = useState(workExperiences[0].id)

  return (
    <div className="min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8 relative z-0">
      <div className="max-w-7xl mx-auto">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className={`text-5xl font-bold text-center text-neonGreen neon-glow mb-12 ${orbitron.className}`}
        >
          My Professional Journey
        </motion.h1>
        
        <div className="relative inset-0">
          {/* Journey Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-neonGreen/30 shadow-[0_0_10px_rgba(57,255,20,0.5)]" />
          
          {workExperiences.map((experience, index) => (
            <motion.div
              key={experience.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`mb-16 flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
            >
              <div className="w-1/2 px-4">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`bg-darkCard border p-6 rounded-lg shadow-lg cursor-pointer transition-all duration-300 ${
                    activeExperience === experience.id ? 'ring-4 ring-neonGreen border-neonGreen shadow-[0_0_20px_rgba(57,255,20,0.5)]' : 'border-neonGreen/20'
                  }`}
                  onClick={() => setActiveExperience(experience.id)}
                >
                  <h3 className={`text-2xl font-semibold text-neonGreen mb-2 ${orbitron.className}`}>{experience.company}</h3>
                  <p className={`text-lg text-lightGreen mb-2 ${spaceGrotesk.className}`}>{experience.position}</p>
                  <p className={`text-sm text-lightGreen flex items-center ${spaceGrotesk.className}`}>
                    <Calendar className="w-4 h-4 mr-2 text-neonGreen" />
                    {experience.period}
                  </p>
                </motion.div>
              </div>
              
              <div className="w-1/2 flex justify-center items-center">
                <motion.div 
                  className={`w-12 h-12 bg-neonGreen rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(57,255,20,0.7)] border-2 border-neonGreen`}
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <Briefcase className="text-darkBg w-6 h-6" />
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
            className="mt-12 bg-darkCard border border-neonGreen/20 p-8 rounded-lg shadow-xl"
          >
            {workExperiences.find(exp => exp.id === activeExperience) && (
              <>
                <h2 className={`text-3xl font-bold text-neonGreen mb-4 ${orbitron.className}`}>
                  {workExperiences.find(exp => exp.id === activeExperience)?.company}
                </h2>
                <p className={`text-xl text-lightGreen mb-6 ${spaceGrotesk.className}`}>
                  {workExperiences.find(exp => exp.id === activeExperience)?.description}
                </p>
                <h3 className={`text-2xl font-semibold text-neonGreen mb-4 flex items-center ${orbitron.className}`}>
                  <Award className="w-6 h-6 mr-2 text-neonGreen" />
                  Key Achievements
                </h3>
                <ul className="list-none space-y-4 mb-6">
                  {workExperiences.find(exp => exp.id === activeExperience)?.achievements.map((achievement, index) => (
                    <motion.li 
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-start"
                    >
                      <MapPin className="w-5 h-5 mr-2 text-neonGreen mt-1 flex-shrink-0" />
                      <span className={`text-lightGreen ${spaceGrotesk.className}`}>{achievement}</span>
                    </motion.li>
                  ))}
                </ul>
                <h3 className={`text-2xl font-semibold text-neonGreen mb-4 ${orbitron.className}`}>Skills Used</h3>
                <div className="flex flex-wrap gap-2">
                  {workExperiences.find(exp => exp.id === activeExperience)?.skills.map((skill, index) => (
                    <motion.span
                      key={index}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className={`px-3 py-1 bg-darkAccent text-neonGreen border border-neonGreen/30 rounded-full text-sm font-medium ${spaceGrotesk.className}`}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}