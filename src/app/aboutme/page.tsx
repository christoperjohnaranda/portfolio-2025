'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'
import { Playfair_Display, Poppins, Montserrat } from 'next/font/google'


const playfair = Playfair_Display({ subsets: ['latin'] })
const poppins = Poppins({ 
  weight: ['400', '500', '600', '700'],
  subsets: ['latin']
})
const montserrat = Montserrat({ subsets: ['latin'] })

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
    <div className="min-h-screen bg-[#070F2B] text-white py-16 px-4 sm:px-6 lg:px-8 relative z-0">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <Image
            src="/placeholder.svg?height=150&width=150"
            alt="Your Name"
            width={150}
            height={150}
            className="rounded-full mx-auto mb-4"
          />
          <h1 className={`text-4xl font-bold text-[#9290C3] mb-2 ${playfair.className}`}>CHRISTOPER JOHN ARANDA</h1>
          <p className={`text-xl text-[#535C91] ${montserrat.className}`}>Full Stack Developer</p>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-[#1B1A55] rounded-lg shadow-xl p-6 mb-8"
        >
          <h2 className={`text-2xl font-semibold mb-4 ${playfair.className}`}>About Me</h2>
          <p className={`text-gray-300 ${poppins.className}`}>
            As a Full Stack Developer, I specialize in building end-to-end web solutions with a passion for clean code and innovative solutions. My expertise spans both frontend and backend development, allowing me to create seamless, scalable applications. I enjoy tackling complex problems and continuously learning new technologies to stay at the forefront of web development. With a strong foundation in modern web frameworks and best practices, I strive to deliver high-quality solutions that make a real impact.
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
                  activeTab === tab ? 'bg-primary text-white' : 'bg-[#535C91] text-gray-300'
                } ${montserrat.className}`}
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
            className="bg-[#1B1A55] rounded-lg shadow-xl p-6"
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
                    <div className="w-20 h-20 bg-white rounded-xl shadow-lg flex items-center justify-center mb-3 transform transition-all duration-300 hover:shadow-2xl hover:rotate-6">
                      <Image
                        src={skill.logo}
                        alt={`${skill.name} logo`}
                        width={40}
                        height={40}
                        className="w-10 h-10 object-contain transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>
                    <span className={`text-sm font-medium text-gray-300 tracking-wide ${poppins.className} group-hover:text-white transition-colors duration-300`}>
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            )}
            {activeTab === 'experience' && (
              <div>
                <h3 className={`text-xl font-semibold mb-2 ${playfair.className}`}>Full Stack Developer</h3>
                <p className={`text-gray-300 mb-4 ${poppins.className}`}>PT Maro Anugrah Jaya | 2024 - Present</p>
                <ul className={`list-disc list-inside text-gray-300 ${poppins.className}`}>
                  <li>Developing and maintaining web applications using React and Node.js</li>
                  <li>Collaborating with team members on new feature implementations</li>
                  <li>Optimizing application performance and user experience</li>
                </ul>
              </div>
            )}
            {activeTab === 'education' && (
              <div>
                <h3 className={`text-xl font-semibold mb-2 ${playfair.className}`}>Bachelor of Engineering in Computer Engineering</h3>
                <p className={`text-gray-300 mb-4 ${poppins.className}`}>Multimedia Nusantara University | 2021 - 2025</p>
                <p className="text-gray-300 font-serif">Graduated with honors, specializing in full stack developer</p>
              </div>
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
            className={`border-double border-4 border-[#535C91] py-2 px-4 hover:bg-[#535C91] hover:text-white hover:border-white inline-block text-[#535C91] px-6 py-3 rounded-full font-semibold hover:bg-primary-dark transition-colors duration-300 ${montserrat.className}`}
          >
            Get in Touch
          </a>
        </motion.div>
      </div>
    </div>
  )
}