'use client'
import { useEffect, useState } from 'react'
import Particles from './Particles'
import { motion } from 'framer-motion'

const sublineWords = ['Three tasks. One leaderboard.', 'Build AI models, not just use them.', 'Test on hand-crafted datasets.', 'Craft up innovative pipelines.']

const currentRound = {
  edition: 'December 2025 Round',
  name: 'SOTA Monthly Contest',
  brief: 'Solve three concurrent problems spanning NLP, computer vision, and classical ML. Score consistently across every track to claim the podium.',
  kickoff: 'Kickoff announcement on Dec 08, 2025 · 10:30 AM IST',
  deadline: 'Final submissions close Jan 08, 2026 · 08:30 AM IST',
  //tracks: 'Track A: NLP intent resolution | Track B: CV defect detection | Track C: Tabular demand forecasting',
  tracks: 'To be revealed on launch day. Stay tuned in our Discord!',
  prizePool: 'Subscriptions & coupons worth $4,000+',
  kaggleUrl: 'https://www.kaggle.com/t/sota-tri-track',
}

export default function Hero() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [displayedText, setDisplayedText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const fullText = sublineWords[currentWordIndex]
    const speed = isDeleting ? 35 : 75

    const timeout = setTimeout(() => {
      if (isDeleting) {
        setDisplayedText(prev => prev.slice(0, -1))
      } else {
        setDisplayedText(prev => fullText.slice(0, prev.length + 1))
      }

      if (!isDeleting && displayedText === fullText) {
        setTimeout(() => setIsDeleting(true), 950)
      } else if (isDeleting && displayedText === '') {
        setIsDeleting(false)
        setCurrentWordIndex((prev) => (prev + 1) % sublineWords.length)
      }
    }, speed)

    return () => clearTimeout(timeout)
  }, [displayedText, isDeleting, currentWordIndex])

  return (
  <main className="relative flex min-h-screen items-center justify-center bg-[#050508] overflow-hidden py-10">

      {/* Particle field */}
      <Particles />

      {/* Moving fog overlay */}
      <div
        className="absolute inset-0 z-10 animate-fog bg-center bg-cover opacity-40"
        style={{
          backgroundImage: 'url("/images/fog.png")',
          mixBlendMode: 'screen',
          filter: 'blur(10px)',
        }}
      />

      {/* Dark veil to add depth */}
      <div className="absolute inset-0 bg-black/60 z-20" />

      {/* Hero content */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-30 w-full max-w-5xl px-6 md:px-12 mt-16 ml-[-60]"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="inline-flex items-center gap-2 rounded-full border border-green-400/40 bg-green-400/10 px-4 py-1 text-xs uppercase tracking-[0.4em] text-green-200"
        >
          {currentRound.edition}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 1 }}
          className="mt-6 text-4xl md:text-6xl lg:text-7xl font-extrabold leading-[1.4] pb-4 bg-gradient-to-r from-white via-[#7C9CE1] to-green-300 bg-clip-text text-transparent"
        >
          {currentRound.name}
        </motion.h1>

        {/* Typewriter subline */}
        <p className="mt-4 text-base md:text-xl text-gray-300 font-medium min-h-[1.75rem] md:min-h-[2rem]">
          <span className="inline-flex items-center font-mono text-green-200">
            <span className="whitespace-pre">{displayedText || ' '}</span>
            <span className="ml-[2px] inline-block h-[1.2em] w-[2px] bg-green-300 animate-type-cursor" />
          </span>
        </p>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 1 }}
          className="mt-6 text-lg md:text-xl text-gray-200 max-w-3xl"
        >
          {currentRound.brief}
        </motion.p>

        <div className="mt-8 flex flex-wrap items-center gap-4">
          <motion.a
            whileHover={{ y: -2, boxShadow: '0 10px 30px rgba(74, 222, 128, 0.35)' }}
            whileTap={{ scale: 0.98 }}
            href="https://discord.gg/RAk9r2JtzC"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-green-400 to-emerald-500 text-black font-semibold uppercase tracking-wide shadow-lg"
          >
            Join Community
          </motion.a>
          <motion.a
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            href="https://sota-ai-december-contest.devpost.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-xl border border-white/20 text-white font-semibold uppercase tracking-wide backdrop-blur"
          >
            Register on DevPost
          </motion.a>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="mt-4 mb-20 text-sm text-gray-400"
        >
          Kaggle competition link will be posted in our{' '}
          <a href="https://discord.gg/RAk9r2JtzC" target="_blank" rel="noopener noreferrer" className="text-green-300 hover:text-green-200 underline">
            Discord community
          </a>{' '}
          on launch day.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 1 }}
          className="mt-12 grid gap-4 md:grid-cols-3"
        >
          {[
            { label: 'Prize Pool', value: currentRound.prizePool },
            { label: 'Kickoff', value: currentRound.kickoff },
            { label: 'Final Submission Deadline', value: currentRound.deadline },
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm shadow-lg"
            >
              <p className="text-xs uppercase tracking-[0.3em] text-gray-400">{item.label}</p>
              <p className="mt-3 text-lg font-semibold text-white">{item.value}</p>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 1 }}
          className="mt-8 rounded-2xl border border-green-400/30 bg-green-400/5 p-6 backdrop-blur-sm"
        >
          <p className="text-xs uppercase tracking-[0.35em] text-green-200">Problem Tracks</p>
          <p className="mt-3 text-base md:text-lg text-gray-100">{currentRound.tracks}</p>
        </motion.div>
      </motion.div>

      {/* Floating scroll cue */}
      <div className="absolute bottom-10 z-30 flex flex-col items-center text-gray-300 ">
        <motion.span className="text-xs uppercase tracking-[0.4em]" animate={{ opacity: [0.4, 1, 0.4] }} transition={{ repeat: Infinity, duration: 3 }}>
          Scroll
        </motion.span>
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="mt-2 text-2xl"
        >
          ↓
        </motion.div>
      </div>
    </main>
  )
}
