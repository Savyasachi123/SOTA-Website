'use client'
import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

const stats = [
  { value: 70, label: 'Members on Discord', live: true },
  { value: 10, label: 'Live Lectures Delivered' },
  { value: 3, label: 'AI Competitions Hosted' },
  { value: 15, label: 'Open Source Projects' },
  { value: 1000, label: 'Hours of Learning Content' },
  { value: 1000000, label: 'Tokens Processed' },
]

export default function QuickStats() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [animatedValue, setAnimatedValue] = useState(0)

  // Infinite Scroll Animation
  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    let x = 0
    let animationFrameId: number

    const animate = () => {
      x -= 0.5
      container.style.transform = `translateX(${x}px)`
      if (Math.abs(x) >= container.scrollWidth / 2) x = 0
      animationFrameId = requestAnimationFrame(animate)
    }

    animationFrameId = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationFrameId)
  }, [])

  // Animated Counter
  useEffect(() => {
    let start = 0
    const end = 70
    const duration = 2000
    const increment = end / (duration / 16)

    const interval = setInterval(() => {
      start += increment
      if (start >= end) {
        start = end
        clearInterval(interval)
      }
      setAnimatedValue(Math.floor(start))
    }, 16)

    return () => clearInterval(interval)
  }, [])

  return (
    <section
      id="quick-stats"
      className="relative w-full min-h-[700px] py-44 bg-[#0c0c17] text-white overflow-hidden"
    >
      {/* 🌀 Fog Glow & Particles */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute w-full h-full bg-[radial-gradient(circle_at_50%_30%,rgba(90,255,166,0.07),transparent_60%)] animate-pulse-slow" />
        <div className="absolute w-full h-full bg-grid-pattern opacity-[0.12] animate-[moveGrid_20s_linear_infinite]" />
        <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] -translate-x-1/2 -translate-y-1/2 bg-purple-500/5 blur-3xl rounded-full animate-pulse-slow" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <h2 className="text-5xl md:text-6xl font-bold text-center mb-36 bg-gradient-to-r from-green-300 via-white to-purple-400 bg-clip-text text-transparent drop-shadow-lg">
          Our Impact in Numbers
        </h2>

        {/* 🧊 Carousel */}
        <div className="relative h-[340px] overflow-visible">
          <div ref={containerRef} className="flex gap-8 w-max">
            {[...stats, ...stats].map((stat, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.1, rotateY: 10 }}
                transition={{ type: 'spring', stiffness: 250, damping: 20 }}
                className="relative group bg-white/5 hover:bg-white/10 backdrop-blur-2xl border border-white/10 rounded-3xl 
                           p-8 shadow-[0_0_20px_#00ffcc40] w-64 md:w-72 text-center shrink-0 transition-all duration-300 overflow-visible"
              >
                {/* ✨ Glow FX */}
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none z-0">
                  <div className="absolute w-28 h-28 bg-green-400/10 rounded-full blur-2xl -top-12 left-1/2 transform -translate-x-1/2 animate-ping" />
                  <div className="absolute w-10 h-10 bg-white/10 rounded-full top-4 left-6 blur-xl animate-spin" />
                </div>

                <h3 className="text-4xl font-bold text-green-400 z-10 relative drop-shadow-sm">
                  {stat.live ? `${animatedValue}+` : `${stat.value.toLocaleString()}+`}
                </h3>
                <p className="mt-2 text-white/80 text-lg z-10 relative">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
