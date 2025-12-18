'use client'

import { useTranslation } from 'next-i18next';
import Image from "next/image";
import Link from "next/link";
import { motion } from 'framer-motion';
import SUB from "../../public/assets/logosub.png";
import MARO from "../../public/assets/logomaro.png";
import WBNJ from "../../public/assets/logowbnj.png";
import BOWBO from "../../public/assets/logobowbo.png";
import KMP from "../../public/assets/logokmp.png";
import KPK from "../../public/assets/KPK.png";
import { Playfair_Display, Poppins, Montserrat } from 'next/font/google'

const playfair = Playfair_Display({ subsets: ['latin'] })
const poppins = Poppins({ 
  weight: ['400', '500', '600', '700'],
  subsets: ['latin']
})
const montserrat = Montserrat({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className="portfolio min-h-screen bg-darkBg flex flex-col justify-between items-center py-20 relative">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col justify-center items-center flex-1"
      >
        <motion.p 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className={`text-md md:text-xl font-bold text-neonGreenDark ${montserrat.className}`}
        >
          Hello, I'm
        </motion.p>
        <motion.p 
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className={`text-2xl md:text-6xl font-bold text-neonGreen neon-glow mt-2 ${playfair.className}`}
        >
          Christoper John Aranda
        </motion.p>
        <motion.p 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className={`text-xl md:text-3xl font-bold text-mediumGreen mt-2 ${montserrat.className}`}
        >
          A Passionate Full Stack Developer
        </motion.p>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className={`text-sm md:text-md font-medium text-lightGreen text-center mt-2 ${poppins.className}`}
        >
          I specialize in building seamless web applications using technologies like JavaScript, React, Next.js, Expo, and Node.js, PostgreSQL, and Vite.js.<br/>
          Committed to continuous learning, I'm always eager to tackle new challenges. Let's connect and create something amazing together!
        </motion.p>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="flex mt-10"
      >
        <Link href="https://wa.me/6285648806508">
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`rounded-md border-double border-4 border-neonGreen neon-border py-2 px-4 text-center text-neonGreen hover:bg-neonGreen hover:text-darkBg hover:border-white transition-all ${montserrat.className}`}
          >
            Let's Talk
          </motion.button>
        </Link>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="flex flex-col w-full pb-4"
      >
        <motion.p 
          className={`text-sm md:text-md text-lightGreen text-center mb-6 mt-10 ${montserrat.className}`}
        >
          Worked With
        </motion.p>
        <div className="flex flex-wrap justify-center items-center gap-4 px-4">
          {[SUB, MARO, WBNJ, KPK, BOWBO, KMP].map((logo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.4 + index * 0.1 }}
              whileHover={{ scale: 1.1 }}
            >
              <Image 
                className="h-24 md:h-32 w-auto grayscale hover:grayscale-0 hover:drop-shadow-[0_0_15px_rgba(57,255,20,0.5)] transition duration-300" 
                src={logo} 
                alt={`web${index + 1}`}
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
