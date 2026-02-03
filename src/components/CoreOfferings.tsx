'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const offerings = [
  { title: 'Live Lectures', icon: '📚' },
  { title: 'Olympiad Prep', icon: '🎓' },
  { title: 'Projects', icon: '🛠️' },
  { title: 'Research & Writing', icon: '✍️' },
  { title: 'Competitions', icon: '🏆' },
  { title: 'Community & Mentorship', icon: '💬' },
  { title: 'Career Portfolios', icon: '📈' },
]

export default function CoreOfferings() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section
      id="core-offerings"
      ref={ref}
      className="relative w-full py-32 bg-[#0a0a13] text-white overflow-hidden"
    >
      {/* Colorful nebula + starfield */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_40%,rgba(0,200,255,0.07),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(255,100,200,0.07),transparent_60%)]" />
        <div className="absolute inset-0 bg-bg-starfield opacity-80 animate-moveStars" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.h2
          className="text-5xl md:text-6xl font-extrabold text-center bg-gradient-to-r from-green-300 via-white to-purple-400 bg-clip-text text-transparent drop-shadow-lg mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
        >
          What We Do
        </motion.h2>

        <div className="relative flex flex-wrap justify-center gap-8">
          {offerings.map((o, i) => (
            <OfferingCard key={i} icon={o.icon} title={o.title} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  )
}

function OfferingCard({ icon, title, index, inView }: any) {
  return (
    <motion.div
      className="relative w-64 h-64 rounded-3xl border border-white/10 shadow-xl 
                 flex flex-col items-center justify-center text-center p-6 z-10 overflow-hidden 
                 bg-gradient-to-br from-white/10 via-purple-100/5 to-green-100/5 backdrop-blur-2xl"
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: 0.1 * index, duration: 0.8, type: 'spring', stiffness: 100 }}
      whileHover={{ rotateY: 10, rotateX: -10, scale: 1.05 }}
    >
      <div className="text-5xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold">{title}</h3>

      {/* Glowing hover ring */}
      <div className="absolute inset-0 z-0 rounded-3xl pointer-events-none">
        <div className="absolute inset-[-2px] rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 
                        bg-gradient-to-br from-purple-500/40 via-green-400/30 to-blue-500/30 blur-2xl animate-pulse" />
      </div>

      {/* Outer glow border on hover */}
      <div className="absolute inset-0 rounded-3xl ring-2 ring-transparent group-hover:ring-purple-400/50 transition duration-500 z-0" />
    </motion.div>
  )
}
