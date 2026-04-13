'use client'

import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import SUB from "../../../public/assets/logosub.png";
import MARO from "../../../public/assets/logomaro.png";
import WBNJ from "../../../public/assets/logowbnj.png";
import BOWBO from "../../../public/assets/logobowbo.png";
import KMP from "../../../public/assets/logokmp.png";
import KPK from "../../../public/assets/KPK.png";
import CJ from "../../../public/assets/CJ.jpeg";
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

/* ─── Typewriter Hook ─── */
function useTypewriter(words: string[], speed = 80, pause = 2200) {
  const [displayed, setDisplayed] = useState('')
  const [wordIdx, setWordIdx] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const current = words[wordIdx]
    let t: ReturnType<typeof setTimeout>

    if (!isDeleting && displayed === current) {
      t = setTimeout(() => setIsDeleting(true), pause)
    } else if (isDeleting && displayed === '') {
      setIsDeleting(false)
      setWordIdx(p => (p + 1) % words.length)
    } else {
      t = setTimeout(() =>
        setDisplayed(p => isDeleting ? p.slice(0, -1) : current.slice(0, p.length + 1)),
        isDeleting ? speed / 2 : speed
      )
    }
    return () => clearTimeout(t)
  }, [displayed, isDeleting, wordIdx, words, speed, pause])

  return displayed
}

/* ─── Animated Counter ─── */
function Counter({ target, suffix = '' }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (!inView) return
    const step = Math.ceil(target / 40)
    let cur = 0
    const id = setInterval(() => {
      cur = Math.min(cur + step, target)
      setCount(cur)
      if (cur >= target) clearInterval(id)
    }, 30)
    return () => clearInterval(id)
  }, [inView, target])

  return <span ref={ref}>{count}{suffix}</span>
}

/* ─── Social Link data ─── */
const socialLinks = [
  {
    label: 'GitHub',
    href: 'https://github.com/christoperjohnaranda',
    icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/christoperjohnaranda',
    icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>,
  },
  {
    label: 'Email',
    href: 'mailto:christoperjohnaranda@gmail.com',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>,
  },
]

const stats = [
  { label: 'Projects',     value: 6,   suffix: '+' },
  { label: 'Years Exp',    value: 2,   suffix: '+' },
  { label: 'Companies',    value: 3,   suffix: ''  },
  { label: 'Satisfaction', value: 100, suffix: '%' },
]

const logos = [SUB, MARO, WBNJ, KPK, BOWBO, KMP]

/* ─── Page ─── */
export default function Home() {
  const t = useTranslations('home')
  const typedRole = useTypewriter([
    'Full Stack Developer',
    'React & Next.js Engineer',
    'Laravel Backend Dev',
    'UI/UX Enthusiast',
  ])

  return (
    <div className={`portfolio flex flex-col ${spaceGrotesk.className}`}>

      {/* ══════════════ HERO ══════════════ */}
      <section
        className="relative min-h-[calc(100vh-72px)] flex flex-col justify-center
                   px-6 sm:px-10 md:px-16 lg:px-24 pt-28 pb-8"
      >
        <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] gap-10 lg:gap-8 items-center w-full max-w-6xl mx-auto">

          {/* ── LEFT: Text ── */}
          <motion.div
            className="flex flex-col items-start"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.4 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 mb-4
                         rounded-full border border-neonGreen/40 bg-neonGreen/5"
            >
              <span className="w-2 h-2 rounded-full bg-neonGreen animate-pulse" />
              <span className={`text-xs font-semibold text-neonGreenDark tracking-widest uppercase ${orbitron.className}`}>
                {t('greeting')}
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.28, duration: 0.55 }}
              className={`text-3xl sm:text-4xl md:text-5xl lg:text-[2.4rem] xl:text-[2.8rem] 2xl:text-5xl font-black leading-[1.1]
                          text-neonGreen neon-glow tracking-wide ${orbitron.className}`}
            >
              {t('name')}
            </motion.h1>

            {/* Typewriter */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.44, duration: 0.4 }}
              className={`mt-3 text-lg sm:text-xl lg:text-2xl font-bold text-mediumGreen
                          min-h-[2rem] flex items-center ${orbitron.className}`}
            >
              {typedRole}
              <span className="ml-0.5 animate-pulse text-neonGreen">|</span>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.58, duration: 0.5 }}
              className="mt-5 text-sm md:text-base text-lightGreen/70 leading-relaxed max-w-[480px]"
            >
              {t('description').split('\n').map((line, i, arr) => (
                <span key={i}>{line}{i < arr.length - 1 && <br />}</span>
              ))}
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.72, duration: 0.45 }}
              className="flex flex-wrap gap-4 mt-8"
            >
              <Link href="https://wa.me/6285648806508" target="_blank">
                <motion.button
                  whileHover={{ scale: 1.04, boxShadow: '0 0 24px rgba(57,255,20,0.45)' }}
                  whileTap={{ scale: 0.96 }}
                  className={`px-7 py-3 rounded-lg bg-neonGreen text-darkBg font-bold
                              text-sm md:text-base ${orbitron.className}`}
                >
                  {t('cta')}
                </motion.button>
              </Link>
              <Link href="/project">
                <motion.button
                  whileHover={{ scale: 1.04, backgroundColor: 'rgba(57,255,20,0.08)' }}
                  whileTap={{ scale: 0.96 }}
                  className={`px-7 py-3 rounded-lg border-2 border-neonGreen/50
                              text-neonGreen font-bold text-sm md:text-base
                              transition-colors duration-200 ${orbitron.className}`}
                >
                  View Projects
                </motion.button>
              </Link>
            </motion.div>

            {/* Socials */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.88, duration: 0.4 }}
              className="flex items-center gap-4 mt-7"
            >
              {socialLinks.map(link => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  whileHover={{ scale: 1.2, color: '#39FF14' }}
                  whileTap={{ scale: 0.9 }}
                  className="text-lightGreen/50 hover:text-neonGreen transition-colors duration-200"
                >
                  {link.icon}
                </motion.a>
              ))}
              <div className="h-px w-14 bg-gradient-to-r from-neonGreen/30 to-transparent" />
            </motion.div>
          </motion.div>

          {/* ── RIGHT: Avatar ── */}
          <motion.div
            className="hidden lg:flex flex-col items-center justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75, delay: 0.25, ease: 'easeOut' }}
          >
            {/* Outer glow */}
            <motion.div
              className="absolute rounded-full pointer-events-none"
              style={{
                width: 300, height: 300,
                background: 'radial-gradient(circle, rgba(57,255,20,0.12) 0%, transparent 70%)',
                filter: 'blur(18px)',
              }}
              animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.9, 0.5] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            />

            {/* Photo */}
            <motion.div
              className="relative rounded-full overflow-hidden border-2 border-neonGreen/60 z-10"
              style={{
                width: 260, height: 260,
                boxShadow: '0 0 36px rgba(57,255,20,0.22)',
              }}
              whileHover={{ boxShadow: '0 0 55px rgba(57,255,20,0.45)' }}
              transition={{ duration: 0.25 }}
            >
              <Image src={CJ} alt="Christoper John Aranda" fill className="object-cover" priority />
            </motion.div>

            {/* Status badge */}
            <motion.div
              className={`mt-4 flex items-center gap-2 px-4 py-1.5 rounded-full
                          border border-neonGreen/40 bg-darkBg/80 backdrop-blur-sm
                          text-xs text-neonGreen font-semibold ${orbitron.className}`}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0, duration: 0.4 }}
            >
              <span className="w-2 h-2 rounded-full bg-neonGreen animate-pulse" />
              Open to Opportunities
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll cue */}
        <motion.div
          className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-lightGreen/30"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3, duration: 0.5 }}
        >
          <span className={`text-[9px] tracking-[0.2em] uppercase ${orbitron.className}`}>Scroll</span>
          <motion.svg
            width="14" height="14" viewBox="0 0 24 24"
            fill="none" stroke="currentColor" strokeWidth="2"
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
          >
            <polyline points="6 9 12 15 18 9"/>
          </motion.svg>
        </motion.div>
      </section>

      {/* ══════════════ STATS ══════════════ */}
      <section className="px-6 sm:px-10 md:px-16 lg:px-24 py-10">
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.45 }}
              whileHover={{ scale: 1.04, borderColor: 'rgba(57,255,20,0.5)' }}
              className="flex flex-col items-center justify-center py-5 px-3
                         rounded-xl border border-neonGreen/20 bg-neonGreen/5"
            >
              <span className={`text-2xl md:text-3xl font-black text-neonGreen ${orbitron.className}`}>
                <Counter target={s.value} suffix={s.suffix} />
              </span>
              <span className={`text-[10px] text-lightGreen/70 mt-1 uppercase tracking-wider ${orbitron.className}`}>
                {s.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ══════════════ TRUSTED BY ══════════════ */}
      <section className="px-6 sm:px-10 md:px-16 lg:px-24 pb-14">
        {/* Divider label */}
        <div className="flex items-center gap-4 mb-8 max-w-4xl mx-auto">
          <div className="h-px flex-1 bg-gradient-to-r from-neonGreen/25 to-transparent" />
          <span className={`text-[11px] tracking-[0.22em] uppercase text-lightGreen/40 ${orbitron.className}`}>
            {t('workedWith')}
          </span>
          <div className="h-px flex-1 bg-gradient-to-l from-neonGreen/25 to-transparent" />
        </div>

        {/* Logos */}
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10 max-w-5xl mx-auto">
          {logos.map((logo, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, duration: 0.4 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Image
                className="h-12 sm:h-16 md:h-20 w-auto grayscale hover:grayscale-0
                           hover:drop-shadow-[0_0_14px_rgba(57,255,20,0.45)]
                           transition-[filter,transform] duration-200"
                src={logo}
                alt={`partner-${i + 1}`}
                loading="lazy"
                quality={75}
                placeholder="blur"
              />
            </motion.div>
          ))}
        </div>
      </section>

    </div>
  )
}
