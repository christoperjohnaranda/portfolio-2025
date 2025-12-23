'use client'

import Image from "next/image";
import Link from "next/link";
import { motion } from 'framer-motion';
import SUB from "../../../public/assets/logosub.png";
import MARO from "../../../public/assets/logomaro.png";
import WBNJ from "../../../public/assets/logowbnj.png";
import BOWBO from "../../../public/assets/logobowbo.png";
import KMP from "../../../public/assets/logokmp.png";
import KPK from "../../../public/assets/KPK.png";
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

export default function Home() {
  const t = useTranslations('home')
  
  return (
    <div className="portfolio min-h-screen flex flex-col justify-between items-center py-12 md:py-20 relative">
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
          className={`text-sm sm:text-md md:text-xl font-bold text-neonGreenDark ${spaceGrotesk.className}`}
        >
          {t('greeting')}
        </motion.p>
        <motion.p 
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className={`text-xl sm:text-2xl md:text-4xl lg:text-6xl font-bold text-neonGreen neon-glow mt-2 px-4 ${orbitron.className} tracking-wider`}
        >
          {t('name')}
        </motion.p>
        <motion.p 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className={`text-base sm:text-lg md:text-2xl lg:text-3xl font-bold text-mediumGreen mt-2 px-4 ${orbitron.className}`}
        >
          {t('title')}
        </motion.p>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className={`text-xs sm:text-sm md:text-base font-medium text-lightGreen text-center mt-3 md:mt-4 max-w-2xl px-6 ${spaceGrotesk.className}`}
        >
          {t('description').split('\n').map((line, i) => (
            <span key={i}>
              {line}
              {i < t('description').split('\n').length - 1 && <br />}
            </span>
          ))}
        </motion.p>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="flex mt-6 md:mt-10"
      >
        <Link href="https://wa.me/6285648806508">
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`rounded-md border-double border-4 border-neonGreen neon-border py-2 md:py-3 px-5 md:px-6 text-sm md:text-base text-center text-neonGreen hover:bg-neonGreen hover:text-darkBg hover:border-white transition-all ${orbitron.className}`}
          >
            {t('cta')}
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
          className={`text-sm md:text-md text-lightGreen text-center mb-4 md:mb-6 mt-6 md:mt-10 ${spaceGrotesk.className}`}
        >
          {t('workedWith')}
        </motion.p>
        <div className="flex flex-wrap justify-center items-center gap-3 md:gap-4 px-4">
          {[SUB, MARO, WBNJ, KPK, BOWBO, KMP].map((logo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.5, 
                delay: 1.4 + index * 0.1,
                scale: { duration: 0.15, ease: "easeOut" }
              }}
              whileHover={{ 
                scale: 1.1,
                transition: { duration: 0.15, ease: "easeOut" }
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Image 
                className="h-16 sm:h-20 md:h-28 lg:h-32 w-auto grayscale hover:grayscale-0 hover:drop-shadow-[0_0_15px_rgba(57,255,20,0.5)] transition-[filter,box-shadow] duration-150" 
                src={logo} 
                alt={`web${index + 1}`}
                loading="lazy"
                quality={75}
                placeholder="blur"
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

