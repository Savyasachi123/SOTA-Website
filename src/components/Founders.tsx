'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const founders = [
  {
    name: 'Aarav Vishal Sharma',
    image: '/images/aarav.png',
    desc: 'IOAI ’25 Training Camp | Inspire Award (Govt. of India)',
    linkedin: 'https://www.linkedin.com/in/aarav-vishal-sharma/',
    hoverDir: 'normal',
  },
  {
    name: 'Roumak Das',
    image: '/images/roumak.jpg',
    desc: 'IOAI ’25 Gold | INOI ’25 Silver | IOITC ’25',
    linkedin: 'https://linkedin.com/in/roumak-das',
    hoverDir: 'centered',
  },
  {
    name: 'Savyasachi Singh',
    image: '/images/savya.png',
    desc: 'IOAI ’25 India Team | INMO & INOI Qualifier ’24 | Taekwondo National Gold Medalist',
    linkedin: 'https://www.linkedin.com/in/savyasachi-singh-benight/',
    hoverDir: 'centered',
  },
  {
    name: 'Rayan Banerjee',
    image: '/images/rayan.png',
    desc: 'IOAI ’25 Silver | MBZUAI ’29 | Kaggle Expert',
    linkedin: 'https://www.linkedin.com/in/rayan-banerjee-47710a1b8/',
    hoverDir: 'reverse',
  }
]

export default function Founders() {
  return (
    <section id="founders" className="relative py-32 w-full bg-[#0a0a13] overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 via-white to-green-400 bg-clip-text text-transparent drop-shadow-lg mb-20 text-center">
          Meet the Founders
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {founders.map((person, i) => {
            const isMiddle = i === 1;
            return (
              <FoundersCard
                key={i}
                person={person}
                isMiddle={isMiddle}
              />
            )
          })}
        </div>
      </div>
    </section>
  )
}

function FoundersCard({ person, isMiddle }: { person: any, isMiddle: boolean }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  const hoverEffect =
    person.hoverDir === 'reverse'
      ? { rotateY: -5, rotateX: -10, scale: 1.05 }
      : person.hoverDir === 'centered'
      ? { translateZ: 30, scale: 1.08 }
      : { rotateY: 5, rotateX: 10, scale: 1.05 }

  return (
    <motion.div
      ref={ref}
      initial={{ y: 50, opacity: 0 }}
      animate={inView ? { y: 0, opacity: 1 } : {}}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className={`relative w-full perspective`}
    >
      <motion.div
        whileHover={hoverEffect}
        transition={{ type: 'spring', stiffness: 180, damping: 20 }}
        className="relative z-10 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl shadow-[0_0_20px_#a855f740] overflow-hidden preserve-3d transform-style-3d"
      >
        <img
          src={person.image}
          alt={person.name}
          className="w-32 h-32 rounded-full mx-auto mt-8 border-4 border-purple-400/30 object-cover"
        />

        <div className="px-6 pb-8 text-center">
          <h3 className="mt-6 text-xl font-semibold text-white">{person.name}</h3>
          <p className="mt-2 text-white/80 text-sm">{person.desc}</p>
          
          {/* LinkedIn Link */}
          <motion.a
            href={person.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex mt-4 p-2 rounded-full bg-white/10 hover:bg-blue-500/30 transition-colors"
            title="Visit LinkedIn"
          >
            <svg className="w-5 h-5 text-white hover:text-blue-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
            </svg>
          </motion.a>
        </div>
      </motion.div>
    </motion.div>
  )
}
