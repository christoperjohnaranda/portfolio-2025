'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'
import { Space_Grotesk, Orbitron } from 'next/font/google'
import CJ from "../../../public/assets/CJ.jpeg";


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
            />
          </motion.div>
          <h1 className={`text-4xl font-bold text-neonGreen neon-glow mb-2 ${orbitron.className}`}>CHRISTOPER JOHN ARANDA</h1>
          <p className={`text-xl text-lightGreen ${spaceGrotesk.className}`}>Full Stack Developer</p>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-darkCard rounded-lg shadow-xl border border-neonGreen/20 p-6 mb-8"
        >
          <h2 className={`text-2xl font-semibold mb-4 text-neonGreen ${orbitron.className}`}>About Me</h2>
          <p className={`text-lightGreen leading-relaxed ${spaceGrotesk.className}`}>
            My journey as a Full Stack Developer has been driven by curiosity and a genuine love for problem-solving through code. I'm passionate about creating web applications that not only work well technically, but also make a real difference in people's daily lives. Whether it's building e-commerce platforms, mobile applications, or complex systems, I approach each project with the mindset that great technology should be both powerful and human-centered. I believe in writing clean, maintainable code and continuously learning to stay ahead in this ever-evolving field.
          </p>
        </motion.div>

        <div className="mb-8">
          <div className="flex justify-center space-x-4 mb-6">
            {['skills', 'experience', 'education'].map((tab) => (
              <motion.button
                key={tab}
                variants={tabVariants}
                initial="hidden"
                animate="visible"
                className={`px-4 py-2 rounded-full ${
                  activeTab === tab ? 'bg-neonGreen text-darkBg' : 'bg-darkAccent text-lightGreen border border-neonGreen/30'
                } ${spaceGrotesk.className} transition-all`}
                onClick={() => setActiveTab(tab)}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </motion.button>
            ))}
          </div>

          <motion.div
            key={activeTab}
            variants={contentVariants}
            initial="hidden"
            animate="visible"
            className="bg-darkCard rounded-lg shadow-xl border border-neonGreen/20 p-6"
          >
            {activeTab === 'skills' && (
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
                    className="flex flex-col items-center group"
                  >
                    <div className="w-20 h-20 bg-darkAccent rounded-xl shadow-lg flex items-center justify-center mb-3 transform transition-all duration-300 hover:shadow-[0_0_20px_rgba(57,255,20,0.5)] hover:rotate-6 border border-neonGreen/20 hover:border-neonGreen">
                      <Image
                        src={skill.logo}
                        alt={`${skill.name} logo`}
                        width={40}
                        height={40}
                        className="w-10 h-10 object-contain transition-transform duration-300 group-hover:scale-110"
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
                  <h3 className={`text-xl font-semibold mb-1 text-neonGreen ${orbitron.className}`}>Junior Programmer</h3>
                  <p className={`text-lightGreen/80 mb-3 text-sm ${spaceGrotesk.className}`}>Komisi Pemberantasan Korupsi | Dec 2025 - Present</p>
                  <ul className={`list-disc list-inside text-lightGreen space-y-1 ${spaceGrotesk.className}`}>
                    <li>Developing and maintaining web applications using React, Vite.js and Laravel</li>
                    <li>Working with modern tech stack including TypeScript, Vite.js, and PostgreSQL</li>
                    <li>Implementing responsive UI/UX with Tailwind CSS</li>
                  </ul>
                </motion.div>

                {/* Maro Experience */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="border-l-4 border-neonGreen/60 pl-4"
                >
                  <h3 className={`text-xl font-semibold mb-1 text-neonGreen ${orbitron.className}`}>Full Stack Developer</h3>
                  <p className={`text-lightGreen/80 mb-3 text-sm ${spaceGrotesk.className}`}>PT Maro Anugrah Jaya | Sep 2024 - May 2025</p>
                  <ul className={`list-disc list-inside text-lightGreen space-y-1 ${spaceGrotesk.className}`}>
                    <li>Developing full-stack web applications using React, Next.js, and Node.js</li>
                    <li>Optimized application performance by 40% through best practices implementation</li>
                    <li>Developed RESTful APIs using Express and MySQL</li>
                  </ul>
                </motion.div>

                {/* SUB Experience */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="border-l-4 border-neonGreen/40 pl-4"
                >
                  <h3 className={`text-xl font-semibold mb-1 text-neonGreen ${orbitron.className}`}>Website Developer</h3>
                  <p className={`text-lightGreen/80 mb-3 text-sm ${spaceGrotesk.className}`}>PT Solusi Usaha Berdikari | Feb 2024 - Jul 2024</p>
                  <ul className={`list-disc list-inside text-lightGreen space-y-1 ${spaceGrotesk.className}`}>
                    <li>Developed and maintained web applications focusing on frontend development</li>
                    <li>Implemented responsive design patterns reducing load time by 40%</li>
                    <li>Enhanced user engagement by 15% through React.js feature implementations</li>
                  </ul>
                </motion.div>
              </div>
            )}
            {activeTab === 'education' && (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="border-l-4 border-neonGreen pl-4"
              >
                <motion.h3 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className={`text-xl font-semibold mb-1 text-neonGreen ${orbitron.className}`}
                >
                  Bachelor of Engineering in Computer Engineering
                </motion.h3>
                <motion.p 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className={`text-lightGreen/80 mb-3 text-sm ${spaceGrotesk.className}`}
                >
                  Multimedia Nusantara University | 2021 - 2025
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <p className={`text-lightGreen mb-2 ${spaceGrotesk.className}`}>
                    <span className="font-semibold text-neonGreen">Status:</span> Graduated with honors
                  </p>
                  <p className={`text-lightGreen ${spaceGrotesk.className}`}>
                    <span className="font-semibold text-neonGreen">Specialization:</span> Full Stack Developer
                  </p>
                </motion.div>
              </motion.div>
            )}
          </motion.div>
        </div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center"
        >
          <a
            href="https://wa.me/6285648806508"
            className={`border-double border-4 border-neonGreen neon-border py-2 px-4 hover:bg-neonGreen hover:text-darkBg hover:border-white inline-block text-neonGreen px-6 py-3 rounded-full font-semibold transition-all duration-300 ${spaceGrotesk.className}`}
          >
            Get in Touch
          </a>
        </motion.div>
      </div>
    </div>
  )
}