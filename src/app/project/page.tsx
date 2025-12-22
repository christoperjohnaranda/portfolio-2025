'use client'

import { useState, useRef } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import Link from 'next/link'
import { Github, X, ChevronLeft, ChevronRight } from 'lucide-react'
import { Orbitron } from 'next/font/google'

const orbitron = Orbitron({ 
  subsets: ['latin'],
  weight: ['400', '500', '700', '900']
})

// Add interface for Project type
interface Project {
  id: number
  title: string
  description: string
  image: string
  technologies: string[]
  githubLink: string
  gradient: string
}

// Add type for ProjectCard props
interface ProjectCardProps {
  project: Project
  onClick: (project: Project) => void
}

const projects = [
  {
    id: 1,
    title: 'Website for Calculating Water Usage Billing',
    description: 'A full-stack website for calculating water usage billing and secure payment integration.',
    image: '/placeholder.svg?height=400&width=600',
    technologies: ['PHP', 'MySQL', 'JavaScript', 'HTML', 'CSS', 'Bootstrap'],
    githubLink: '/404',
    gradient: 'from-blue-500 via-cyan-500 to-teal-500'
  },
  {
    id: 2,
    title: 'Restaurant Landing Page',
    description: 'A landing page for a restaurant with a menu and orders system.',
    image: '/placeholder.svg?height=400&width=600',
    technologies: ['Next.js', 'Tailwind CSS', 'TypeScript', 'Framer Motion'],
    githubLink: '/404',
    gradient: 'from-orange-500 via-red-500 to-pink-500'
  },
  {
    id: 3,
    title: 'Company Profile Website',
    description: 'A website for a company to showcase their services and products.',
    image: '/placeholder.svg?height=400&width=600',
    technologies: ['Next.js', 'TypeScript', 'Bootstrap', 'CSS', 'HTML'],
    githubLink: '/404',
    gradient: 'from-purple-500 via-violet-500 to-indigo-500'
  },
  {
    id: 4,
    title: 'Corruption Trial Recording Application',
    description: 'A nationwide web application for recording and managing corruption trial proceedings across Indonesia, developed for the Corruption Eradication Commission (KPK).',
    image: '/placeholder.svg?height=400&width=600',
    technologies: ['React', 'Vite.js', 'TypeScript', 'Tailwind CSS', 'Laravel', 'PostgreSQL'],
    githubLink: '/404',
    gradient: 'from-emerald-500 via-green-500 to-lime-500'
  },
  {
    id: 5,
    title: 'Franchise POS System',
    description: 'A comprehensive Point of Sale (POS) mobile application designed for franchise cashiers, featuring inventory management, sales tracking, and real-time reporting capabilities.',
    image: '/placeholder.svg?height=400&width=600',
    technologies: ['React Native', 'Expo', 'TypeScript', 'Kotlin', 'Node.js', 'Express', 'Prisma', 'MySQL'],
    githubLink: '/404',
    gradient: 'from-yellow-500 via-amber-500 to-orange-500'
  },
  
]

const ProjectCard = ({ project, onClick }: ProjectCardProps) => {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true })
  const [rotateX, setRotateX] = useState(0)
  const [rotateY, setRotateY] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return
    
    const card = ref.current
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    
    const rotateXValue = ((y - centerY) / centerY) * -10
    const rotateYValue = ((x - centerX) / centerX) * 10
    
    setRotateX(rotateXValue)
    setRotateY(rotateYValue)
  }

  const handleMouseLeave = () => {
    setRotateX(0)
    setRotateY(0)
    setIsHovered(false)
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5 }}
      whileTap={{ scale: 0.98 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      onClick={() => onClick(project)}
      className="relative cursor-pointer h-full"
      style={{
        perspective: '1000px',
      }}
    >
      <motion.div
        className="relative bg-darkCard border border-neonGreen/20 rounded-lg overflow-hidden shadow-lg h-full flex flex-col min-h-[480px]"
        animate={{
          rotateX: rotateX,
          rotateY: rotateY,
          scale: isHovered ? 1.05 : 1,
        }}
        transition={{
          type: 'spring',
          stiffness: 300,
          damping: 20,
        }}
        style={{
          transformStyle: 'preserve-3d',
          boxShadow: isHovered 
            ? '0 20px 40px rgba(57, 255, 20, 0.3), 0 0 30px rgba(57, 255, 20, 0.2)' 
            : '0 10px 20px rgba(0, 0, 0, 0.3)',
        }}
      >
        {/* Shimmer overlay */}
        <motion.div
          className="absolute inset-0 z-10 pointer-events-none"
          style={{
            background: 'linear-gradient(135deg, transparent 0%, rgba(57, 255, 20, 0.1) 50%, transparent 100%)',
            backgroundSize: '200% 200%',
          }}
          animate={{
            backgroundPosition: isHovered ? ['0% 0%', '100% 100%'] : '0% 0%',
          }}
          transition={{
            duration: 1.5,
            repeat: isHovered ? Infinity : 0,
            ease: 'linear',
          }}
        />

        {/* Neon border glow */}
        <motion.div
          className="absolute inset-0 rounded-lg pointer-events-none"
          animate={{
            borderColor: isHovered ? 'rgba(57, 255, 20, 0.8)' : 'rgba(57, 255, 20, 0.2)',
          }}
          style={{
            border: '2px solid',
            boxShadow: isHovered 
              ? '0 0 20px rgba(57, 255, 20, 0.5), inset 0 0 20px rgba(57, 255, 20, 0.1)' 
              : 'none',
          }}
          transition={{ duration: 0.3 }}
        />

        {/* Gradient Visual Header */}
        <div className="relative overflow-hidden flex-shrink-0 h-48">
          {/* Animated Gradient Background */}
          <motion.div
            className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-80`}
            animate={{
              scale: isHovered ? 1.1 : 1,
            }}
            transition={{ duration: 0.4 }}
          />
          
          {/* Animated Grid Pattern */}
          <motion.div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
              backgroundSize: '40px 40px',
            }}
            animate={{
              backgroundPosition: isHovered ? ['0px 0px', '40px 40px'] : '0px 0px',
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
          
          {/* Large Project Number */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              className={`text-white font-black ${orbitron.className}`}
              animate={{
                scale: isHovered ? 1.2 : 1,
                y: isHovered ? -5 : 0,
              }}
              transition={{ duration: 0.3 }}
              style={{
                fontSize: '120px',
                lineHeight: '1',
                opacity: 0.3,
                textShadow: '0 10px 30px rgba(0,0,0,0.5)',
              }}
            >
              {String(project.id).padStart(2, '0')}
            </motion.div>
          </div>
          
          {/* Floating Geometric Shapes */}
          <motion.div
            className="absolute top-4 right-4 w-16 h-16 border-2 border-white/20 rounded-lg"
            animate={{
              rotate: isHovered ? 45 : 0,
              scale: isHovered ? 1.1 : 1,
            }}
            transition={{ duration: 0.5 }}
          />
          <motion.div
            className="absolute bottom-4 left-4 w-12 h-12 border-2 border-white/20"
            animate={{
              rotate: isHovered ? -45 : 0,
              scale: isHovered ? 1.1 : 1,
            }}
            transition={{ duration: 0.5, delay: 0.1 }}
          />
          
          {/* Overlay gradient */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-darkBg via-darkBg/50 to-transparent"
            animate={{
              opacity: isHovered ? 0.8 : 0.4,
            }}
            transition={{ duration: 0.3 }}
          />
          
          {/* Animated Light Beam */}
          <motion.div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)',
            }}
            animate={{
              x: isHovered ? ['-100%', '200%'] : '-100%',
            }}
            transition={{
              duration: 1.5,
              repeat: isHovered ? Infinity : 0,
              ease: 'linear',
            }}
          />
        </div>

        {/* Content */}
        <div className="p-6 relative z-10 flex flex-col flex-grow">
          <motion.h3 
            className="text-xl font-semibold mb-2 text-neonGreen min-h-[3.5rem] line-clamp-2"
            animate={{
              textShadow: isHovered 
                ? '0 0 10px rgba(57, 255, 20, 0.8), 0 0 20px rgba(57, 255, 20, 0.4)' 
                : '0 0 0px rgba(57, 255, 20, 0)',
            }}
            transition={{ duration: 0.3 }}
          >
            {project.title}
          </motion.h3>
          <p className="text-lightGreen mb-4 line-clamp-3 flex-grow">{project.description}</p>
          
          {/* Tech stack */}
          <div className="flex flex-wrap gap-2 mt-auto">
            {project.technologies.map((tech, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.1, y: -2 }}
                transition={{ delay: index * 0.1 }}
                className="px-2 py-1 bg-darkAccent text-neonGreen border border-neonGreen/30 rounded-full text-xs hover:border-neonGreen hover:shadow-[0_0_10px_rgba(57,255,20,0.3)]"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </div>

        {/* Corner accents */}
        <div className="absolute top-2 right-2 w-8 h-8 border-t-2 border-r-2 border-neonGreen/30 rounded-tr-lg" />
        <div className="absolute bottom-2 left-2 w-8 h-8 border-b-2 border-l-2 border-neonGreen/30 rounded-bl-lg" />
      </motion.div>
    </motion.div>
  )
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [direction, setDirection] = useState<number>(0)

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project)
    setDirection(0)
  }

  const handlePrevProject = () => {
    if (!selectedProject) return
    const currentIndex = projects.findIndex(p => p.id === selectedProject.id)
    const prevIndex = (currentIndex - 1 + projects.length) % projects.length
    setSelectedProject(projects[prevIndex])
    setDirection(-1)
  }

  const handleNextProject = () => {
    if (!selectedProject) return
    const currentIndex = projects.findIndex(p => p.id === selectedProject.id)
    const nextIndex = (currentIndex + 1) % projects.length
    setSelectedProject(projects[nextIndex])
    setDirection(1)
  }

  return (
    <div className="min-h-screen text-lightGreen py-16 px-4 sm:px-6 lg:px-8 font-montserrat pt-24 pb-12">
      <div className="max-w-7xl mx-auto">
        <motion.h1 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className={`text-5xl font-bold text-center mb-12 text-neonGreen neon-glow ${orbitron.className}`}
        >
          My Projects
        </motion.h1>

        <motion.div 
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch"
        >
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} onClick={handleProjectClick} />
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          {selectedProject && (
            <motion.div
              key={selectedProject.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ x: direction * 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: direction * -50, opacity: 0 }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                className="bg-darkCard border-2 border-neonGreen rounded-lg p-8 max-w-3xl w-full max-h-[90vh] overflow-y-auto relative"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 text-neonGreen hover:text-mediumGreen transition-colors"
                >
                  <X size={24} />
                </button>
                <motion.h2 
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  className="text-3xl font-bold mb-6 text-neonGreen"
                >
                  {selectedProject.title}
                </motion.h2>
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="relative w-full h-64 rounded-lg mb-6 overflow-hidden"
                >
                  {/* Gradient Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${selectedProject.gradient}`} />
                  
                  {/* Grid Pattern */}
                  <motion.div
                    className="absolute inset-0 opacity-20"
                    style={{
                      backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 2px, transparent 2px), linear-gradient(90deg, rgba(255,255,255,0.1) 2px, transparent 2px)',
                      backgroundSize: '50px 50px',
                    }}
                    animate={{
                      backgroundPosition: ['0px 0px', '50px 50px'],
                    }}
                    transition={{
                      duration: 30,
                      repeat: Infinity,
                      ease: 'linear',
                    }}
                  />
                  
                  {/* Large Project Number */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      className={`text-white font-black ${orbitron.className}`}
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ delay: 0.3, type: 'spring', stiffness: 200 }}
                      style={{
                        fontSize: '200px',
                        lineHeight: '1',
                        opacity: 0.3,
                        textShadow: '0 20px 40px rgba(0,0,0,0.5)',
                      }}
                    >
                      {String(selectedProject.id).padStart(2, '0')}
                    </motion.div>
                  </div>
                  
                  {/* Floating Shapes */}
                  <motion.div
                    className="absolute top-8 right-8 w-24 h-24 border-4 border-white/20 rounded-xl"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                  />
                  <motion.div
                    className="absolute bottom-8 left-8 w-20 h-20 border-4 border-white/20"
                    animate={{ rotate: -360 }}
                    transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-darkCard/60 via-transparent to-transparent" />
                </motion.div>
                <motion.p 
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="text-lightGreen mb-6"
                >
                  {selectedProject.description}
                </motion.p>
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="mb-6"
                >
                  <h3 className="text-xl font-semibold mb-2 text-neonGreen">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech, index) => (
                      <motion.span
                        key={index}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5 + index * 0.1 }}
                        className="px-3 py-1 bg-darkAccent text-neonGreen border border-neonGreen/30 rounded-full text-sm"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  <Link
                    href={selectedProject.githubLink}
                    className="inline-flex items-center justify-center px-6 py-3 bg-darkAccent hover:bg-neonGreen hover:text-darkBg text-neonGreen border border-neonGreen/30 rounded-lg transition-all"
                  >
                    <Github className="mr-2" size={20} />
                    View on GitHub
                  </Link>
                </motion.div>
                <div className="absolute top-1/2 left-4 transform -translate-y-1/2">
                  <button
                    onClick={handlePrevProject}
                    className="p-2 bg-darkAccent border border-neonGreen/30 rounded-full text-neonGreen hover:bg-neonGreen hover:text-darkBg transition-all"
                  >
                    <ChevronLeft size={24} />
                  </button>
                </div>
                <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
                  <button
                    onClick={handleNextProject}
                    className="p-2 bg-darkAccent border border-neonGreen/30 rounded-full text-neonGreen hover:bg-neonGreen hover:text-darkBg transition-all"
                  >
                    <ChevronRight size={24} />
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}