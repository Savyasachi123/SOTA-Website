'use client'
import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

const sponsors = [
  { name: 'Balsamiq', logo: '/images/balsamiq_logo.png', tier: 'Coupons', link: 'https://balsamiq.com' },
  { name: 'AoPS', logo: '/images/aops_logo.png', tier: 'Coupons', link: 'https://artofproblemsolving.com' },
  { name: 'CodeCrafters.io', logo: '/images/codecrafters_logo.png', tier: 'Subscriptions', link: 'https://codecrafters.io' },
  { name: '.xyz', logo: '/images/xyz_logo.png', tier: 'Domains', link: 'https://gen.xyz' },
  { name: 'Interview Cake', logo: '/images/interviewcake_logo.png', tier: 'Coupons', link: 'https://www.interviewcake.com' },
]

export default function Sponsors() {
  const containerRef = useRef<HTMLDivElement>(null)

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

  return (
    <section
      id="sponsors"
      className="relative w-full min-h-[600px] py-32 bg-[#0c0c17] text-white overflow-hidden"
    >
      {/* 🌀 Fog Glow & Particles */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute w-full h-full bg-[radial-gradient(circle_at_50%_30%,rgba(90,255,166,0.07),transparent_60%)] animate-pulse-slow" />
        <div className="absolute w-full h-full bg-grid-pattern opacity-[0.12] animate-[moveGrid_20s_linear_infinite]" />
        <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] -translate-x-1/2 -translate-y-1/2 bg-purple-500/5 blur-3xl rounded-full animate-pulse-slow" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-green-300 via-white to-purple-400 bg-clip-text text-transparent drop-shadow-lg mb-4">
            Our Sponsors
          </h2>
          <p className="text-gray-400 text-lg">
            Proudly supported by these amazing partners
          </p>
        </motion.div>

        {/* 🧊 Sponsor Carousel */}
        <div className="relative h-[280px] overflow-hidden">
          <div ref={containerRef} className="flex gap-10 w-max">
            {[...sponsors, ...sponsors].map((sponsor, i) => (
              <a
                key={i}
                href={sponsor.link}
                target="_blank"
                rel="noopener noreferrer"
                className="no-underline"
              >
                <motion.div
                  whileHover={{ scale: 1.05, rotateY: 5 }}
                  transition={{ type: 'spring', stiffness: 250, damping: 20 }}
                  className="relative group bg-white/5 hover:bg-white/10 backdrop-blur-2xl border border-white/10 rounded-2xl 
                             p-8 shadow-[0_0_20px_#00ffcc40] w-64 shrink-0 transition-all duration-300 overflow-hidden flex flex-col items-center justify-center cursor-pointer"
                >
                  {/* ✨ Glow FX */}
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none z-0">
                    <div className="absolute w-24 h-24 bg-green-400/20 rounded-full blur-2xl -top-12 left-1/2 transform -translate-x-1/2 animate-pulse" />
                  </div>

                  {/* Logo Container */}
                  <div className="relative z-10 w-full h-32 flex items-center justify-center mb-4 bg-white/5 rounded-lg border border-white/5 overflow-hidden">
                    {/* Sponsor Logo Image */}
                    <img 
                      src={sponsor.logo} 
                      alt={sponsor.name}
                      className="w-auto h-auto max-w-full max-h-full object-contain rounded-lg"
                    />
                  </div>

                  {/* Sponsor Info */}
                  <div className="relative z-10 text-center w-full">
                    <h3 className="text-lg font-bold text-white mb-1">
                      {sponsor.name}
                    </h3>
                    <p className="text-sm text-green-400 font-semibold">
                      {sponsor.tier}
                    </p>
                  </div>
                </motion.div>
              </a>
            ))}
          </div>
        </div>

        {/* Thank You Message */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <p className="text-gray-400 text-base mb-6">
            Thank you for believing in SOTA and supporting AI education and innovation!
          </p>
          <motion.a
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            href="mailto:sota.ai.community@gmail.com"
            className="inline-flex px-8 py-3 rounded-lg bg-green-500 hover:bg-green-600 text-white font-semibold uppercase tracking-wide transition"
          >
            Become a Sponsor
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
